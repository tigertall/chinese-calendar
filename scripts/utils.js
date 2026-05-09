import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const REPO_OWNER = process.env.REPO_OWNER || 'tigertall';
const REPO_NAME = process.env.REPO_NAME || 'chinese-calendar';

export async function fetchFromGitHubPages(filename) {
    const url = `https://${REPO_OWNER}.github.io/${REPO_NAME}/data/${filename}`;
    try {
        const response = await axios.get(url, { timeout: 20000 });
        return response.data;
    } catch (error) {
        console.log(`从 GitHub Pages 获取 ${filename} 失败 (可能是首次部署):`, error.message);
        return null;
    }
}

export async function readLocalFile(filepath) {
    try {
        const content = await fs.promises.readFile(filepath, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        console.log(`读取本地文件 ${filepath} 失败:`, error.message);
        return null;
    }
}

export function dataNeedsUpdate(newData, existingData) {
    if (!existingData) return true;
    if (!newData || !newData.Years) return false;
    
    const newYears = JSON.stringify(newData.Years);
    const existingYears = JSON.stringify(existingData.Years);
    
    return newYears !== existingYears;
}

export function ensureDataDir() {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const outputDir = path.join(__dirname, '../data');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    return outputDir;
}

export async function writeIfNeeded(newData, existingData, filename, outputDir = null) {
    if (!dataNeedsUpdate(newData, existingData)) {
        console.log(`${filename} 数据无变化，无需更新。`);
        return false;
    }
    
    if (!outputDir) {
        outputDir = ensureDataDir();
    }
    
    const outputPath = path.join(outputDir, filename);
    await fs.promises.writeFile(outputPath, JSON.stringify(newData), 'utf-8');
    console.log(`已更新: ${outputPath}`);
    return true;
}

export async function copyExistingFiles(filesToKeep, outputDir = null) {
    if (!outputDir) {
        outputDir = ensureDataDir();
    }
    
    const existingFiles = fs.readdirSync(outputDir).filter(f => f.endsWith('.json'));
    const filesToCopy = existingFiles.filter(f => !filesToKeep.includes(f));
    
    for (const file of filesToCopy) {
        const srcPath = path.join(outputDir, file);
        console.log(`保留现有文件: ${file}`);
    }
}

export function getGeneratedTime() {
    return new Date().toISOString();
}

export function shouldRunForMonth(months) {
    const currentMonth = new Date().getMonth() + 1;
    return months.includes(currentMonth);
}

export function getCurrentYear() {
    return new Date().getFullYear();
}

export function hasNextYearData(data) {
    if (!data || !data.Years) return false;
    const nextYear = String(getCurrentYear() + 1);
    return data.Years[nextYear] !== undefined;
}