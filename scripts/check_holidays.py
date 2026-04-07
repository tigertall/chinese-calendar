#!/usr/bin/env python3
"""gov_holiday_scraper.py

Scrape gov.cn policy search results for "部分节假日" and parse holiday / workday dates.
"""

from datetime import datetime
import json
import os
import re
import urllib.parse
import requests
from bs4 import BeautifulSoup
import sys


REPO_OWNER = os.getenv('REPO_OWNER', 'tigertall')
REPO_NAME = os.getenv('REPO_NAME', 'chinese-calendar')

def get_holidays():
    """读取git pages，用于比较是否需要更新
    """
    SEARCH_ALT_URL = f"https://{REPO_OWNER}.github.io/{REPO_NAME}/holidays.json"
    try:
        response = requests.get(SEARCH_ALT_URL, timeout=20)
        body = response.json()
    except:
        return None
    return body


def search_policy(page_no=1, page_size=10):
    """Use the alternate gov.cn search endpoint (GET) to find policy links.

    Builds query params similar to the curl provided by the user and returns a
    list of results with keys: title, url, publish_time, fwzh, cwrq.
    """
    params = {
        "t": "zhengcelibrary_gw",
        "q": "部分节假日",
        "timetype": "timeqb",
        "mintime": "",
        "maxtime": "",
        "sort": "pubtime",
        "sortType": "1",
        "searchfield": "title",
        "pcodeJiguan": "国办发明电",
        "p": page_no,
        "n": page_size,
        "type": "gwyzcwjk",
    }
    SEARCH_ALT_URL = "https://sousuo.www.gov.cn/search-gov/data"
    url = SEARCH_ALT_URL + "?" + urllib.parse.urlencode(params, safe='')
    response = requests.get(url, timeout=20)
    body = response.json()

    items = body["searchVO"]["listVO"]
    results = []
    for item in items:
        results.append({
            "title": item.get("title"),
            "url": item.get("url"),
        })
    return results


def parse_policy_page(url):
    response = requests.get(url, timeout=20)
    response.encoding = 'utf-8'
    soup = BeautifulSoup(response.text, 'html.parser')
    text = re.sub(r'\s+', ' ', soup.get_text())
    print(f"text:{text}")
    match = re.search(r'国务院办公厅关于(\d{4})年部分节假日安排的通知', text)
    if not match:
        return None, None
    year = int(match.group(1))

    holidays = []
    # print(f"Extracting from {year}: {text}")
    # Match numbered format: "一、"、"二、"等 at line start to avoid confusion with "周一"、"周二" etc
    pattern = r"[一二三四五六七]、(.*?)：(.*?)。(?=[二三四五六七]、|节假日期间)"
    matches = list(re.finditer(pattern, text, re.S))
    for m in matches:
        holiday_names = m.group(1).strip()
        body = m.group(2).strip()
        if not body:
            continue
        start_date = end_date = None
        workdays = []
        # Extract holiday date range
        range_match = re.search(
            r"(?:(\d{4})年)?(\d{1,2})月(\d{1,2})日[^至]*至(?:(\d{4})年)?(?:(\d{1,2})月)?(\d{1,2})日",
            body,
        )
        if range_match:
            start_year = int(range_match.group(1)) if range_match.group(1) else year
            start_month = int(range_match.group(2))
            start_day = int(range_match.group(3))
            end_year = int(range_match.group(4)) if range_match.group(4) else start_year
            end_month = int(range_match.group(5)) if range_match.group(5) else start_month
            end_day = int(range_match.group(6))
            start_date = f"{start_year:04d}-{start_month:02d}-{start_day:02d}"
            end_date = f"{end_year:04d}-{end_month:02d}-{end_day:02d}"
        else:
            # Try single date format
            single_match = re.search(r"(\d{1,2})月(\d{1,2})日.*?放假", body)
            if single_match:
                start_date = f"{year:04d}-{int(single_match.group(1)):02d}-{int(single_match.group(2)):02d}"
                end_date = start_date
        # Extract workdays: dates between "放假" and "上班"
        workday_section = re.search(r"共\d+天。(.*?)上班", body)
        if workday_section:
            for wm in re.finditer(r"(\d{1,2})月(\d{1,2})日", workday_section.group(1)):
                candidate = f"{year:04d}-{int(wm.group(1)):02d}-{int(wm.group(2)):02d}"
                workdays.append(candidate)
            workdays = sorted(set(workdays))
        if start_date or workdays:
            holidays.append({"Name": holiday_names, "StartDate": start_date, "EndDate": end_date, "CompDays": workdays})
    return str(year), holidays


def main():
    # 如果已经有明年数据，不需要执行了
    hld = get_holidays()
    if hld and str(datetime.now().year + 1) in hld.get("Years", {}):
        print("明年数据已存在，无需更新。")
        return

    links = search_policy(page_no=1, page_size=4)
    holidays = {"Years": {}}
    for item in links:
        print(item["title"], item["url"])
        year, yearly_data = parse_policy_page(item["url"])
        if year and yearly_data:
            holidays["Years"][year] = yearly_data

    if (holidays == hld):
        return print("No need to update holidays.")

    os.makedirs("_site", exist_ok=True)      
    output_file = os.path.join("_site", "holidays.json")
    try:
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(holidays, f, ensure_ascii=False)
    except PermissionError as e:
        # 打印目录状态，方便调试
        os.system("ls -ld _site")
        os.system("whoami")
        sys.exit(1)
    print(f"Wrote results to {output_file}")


if __name__ == "__main__":
    main()
