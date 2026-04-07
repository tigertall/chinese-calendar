/**
tyme.js v1.4.5

MIT License

Copyright (c) 2024 6tail

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

"use strict";if (typeof exports === 'undefined') { var exports = {};}
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogDay = exports.Dog = exports.SixtyCycle = exports.MinorRen = exports.SixStar = exports.TenStar = exports.PengZu = exports.PengZuEarthBranch = exports.PengZuHeavenStem = exports.HideHeavenStemDay = exports.HideHeavenStem = exports.HeavenStem = exports.EarthBranch = exports.Zodiac = exports.Twenty = exports.Terrain = exports.Ten = exports.Taboo = exports.Sound = exports.Sixty = exports.PhaseDay = exports.Phase = exports.God = exports.Element = exports.Duty = exports.Constellation = exports.Luck = exports.Beast = exports.Zone = exports.Direction = exports.Land = exports.Week = exports.SevenStar = exports.TwentyEightStar = exports.Animal = exports.LoopTyme = exports.AbstractCultureDay = exports.SecondUnit = exports.WeekUnit = exports.DayUnit = exports.MonthUnit = exports.YearUnit = exports.AbstractTyme = exports.AbstractCulture = exports.EventType = exports.HideHeavenStemType = exports.FestivalType = exports.Gender = exports.Side = exports.YinYang = void 0;
exports.ChildLimit = exports.LunarSect2ChildLimitProvider = exports.LunarSect1ChildLimitProvider = exports.China95ChildLimitProvider = exports.DefaultChildLimitProvider = exports.AbstractChildLimitProvider = exports.ChildLimitInfo = exports.EightChar = exports.LunarFestival = exports.SolarFestival = exports.LegalHoliday = exports.SolarTime = exports.SolarDay = exports.SolarWeek = exports.SolarMonth = exports.SolarSeason = exports.SolarHalfYear = exports.SolarYear = exports.SolarTermDay = exports.SolarTerm = exports.ShouXingUtil = exports.JulianDay = exports.LunarHour = exports.LunarSect2EightCharProvider = exports.DefaultEightCharProvider = exports.ThreePillars = exports.SixtyCycleHour = exports.SixtyCycleDay = exports.SixtyCycleMonth = exports.SixtyCycleYear = exports.LunarDay = exports.LunarWeek = exports.LunarMonth = exports.FetusMonth = exports.LunarSeason = exports.LunarYear = exports.Ecliptic = exports.TwelveStar = exports.NineStar = exports.PhenologyDay = exports.Dipper = exports.ThreePhenology = exports.Phenology = exports.NineDay = exports.Nine = exports.FetusDay = exports.FetusEarthBranch = exports.FetusHeavenStem = exports.PlumRainDay = exports.PlumRain = void 0;
exports.EventManager = exports.Event = exports.RabByungDay = exports.RabByungMonth = exports.RabByungYear = exports.RabByungElement = exports.KitchenGodSteed = exports.Fortune = exports.DecadeFortune = void 0;
var YinYang;
(function (YinYang) {
    YinYang[YinYang["YIN"] = 0] = "YIN";
    YinYang[YinYang["YANG"] = 1] = "YANG";
})(YinYang || (exports.YinYang = YinYang = {}));
var Side;
(function (Side) {
    Side[Side["IN"] = 0] = "IN";
    Side[Side["OUT"] = 1] = "OUT";
})(Side || (exports.Side = Side = {}));
var Gender;
(function (Gender) {
    Gender[Gender["WOMAN"] = 0] = "WOMAN";
    Gender[Gender["MAN"] = 1] = "MAN";
})(Gender || (exports.Gender = Gender = {}));
var FestivalType;
(function (FestivalType) {
    FestivalType[FestivalType["DAY"] = 0] = "DAY";
    FestivalType[FestivalType["TERM"] = 1] = "TERM";
    FestivalType[FestivalType["EVE"] = 2] = "EVE";
})(FestivalType || (exports.FestivalType = FestivalType = {}));
var HideHeavenStemType;
(function (HideHeavenStemType) {
    HideHeavenStemType[HideHeavenStemType["RESIDUAL"] = 0] = "RESIDUAL";
    HideHeavenStemType[HideHeavenStemType["MIDDLE"] = 1] = "MIDDLE";
    HideHeavenStemType[HideHeavenStemType["MAIN"] = 2] = "MAIN";
})(HideHeavenStemType || (exports.HideHeavenStemType = HideHeavenStemType = {}));
var EventType;
(function (EventType) {
    EventType[EventType["SOLAR_DAY"] = 0] = "SOLAR_DAY";
    EventType[EventType["SOLAR_WEEK"] = 1] = "SOLAR_WEEK";
    EventType[EventType["LUNAR_DAY"] = 2] = "LUNAR_DAY";
    EventType[EventType["TERM_DAY"] = 3] = "TERM_DAY";
    EventType[EventType["TERM_HS"] = 4] = "TERM_HS";
    EventType[EventType["TERM_EB"] = 5] = "TERM_EB";
})(EventType || (exports.EventType = EventType = {}));
var AbstractCulture = (function () {
    function AbstractCulture() {
    }
    AbstractCulture.prototype.toString = function () {
        return this.getName();
    };
    AbstractCulture.prototype.equals = function (o) {
        return o && o.toString() === this.toString();
    };
    AbstractCulture.prototype.indexOf = function (index, size) {
        var i = index % size;
        if (i < 0) {
            i += size;
        }
        return i;
    };
    AbstractCulture.numeric = function (n, name) {
        var d = (typeof n === 'number') ? n : Number(n);
        if (isNaN(d)) {
            throw new Error("illegal ".concat(name, ": ").concat(n));
        }
        return d;
    };
    return AbstractCulture;
}());
exports.AbstractCulture = AbstractCulture;
var AbstractTyme = (function (_super) {
    __extends(AbstractTyme, _super);
    function AbstractTyme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AbstractTyme;
}(AbstractCulture));
exports.AbstractTyme = AbstractTyme;
var YearUnit = (function (_super) {
    __extends(YearUnit, _super);
    function YearUnit(year) {
        var _this = _super.call(this) || this;
        _this.year = year;
        return _this;
    }
    YearUnit.prototype.getYear = function () {
        return this.year;
    };
    return YearUnit;
}(AbstractTyme));
exports.YearUnit = YearUnit;
var MonthUnit = (function (_super) {
    __extends(MonthUnit, _super);
    function MonthUnit(year, month) {
        var _this = _super.call(this, year) || this;
        _this.month = month;
        return _this;
    }
    MonthUnit.prototype.getMonth = function () {
        return this.month;
    };
    return MonthUnit;
}(YearUnit));
exports.MonthUnit = MonthUnit;
var DayUnit = (function (_super) {
    __extends(DayUnit, _super);
    function DayUnit(year, month, day) {
        var _this = _super.call(this, year, month) || this;
        _this.day = day;
        return _this;
    }
    DayUnit.prototype.getDay = function () {
        return this.day;
    };
    return DayUnit;
}(MonthUnit));
exports.DayUnit = DayUnit;
var WeekUnit = (function (_super) {
    __extends(WeekUnit, _super);
    function WeekUnit(year, month, index, start) {
        var _this = _super.call(this, year, month) || this;
        _this.index = index;
        _this.start = start;
        return _this;
    }
    WeekUnit.prototype.getIndex = function () {
        return this.index;
    };
    WeekUnit.prototype.getStart = function () {
        return this.start;
    };
    WeekUnit.validate = function (_year, _month, index, start) {
        if (index < 0 || index > 5) {
            throw new Error("illegal week index: ".concat(index));
        }
        if (start < 0 || start > 6) {
            throw new Error("illegal week start: ".concat(start));
        }
    };
    return WeekUnit;
}(MonthUnit));
exports.WeekUnit = WeekUnit;
var SecondUnit = (function (_super) {
    __extends(SecondUnit, _super);
    function SecondUnit(year, month, day, hour, minute, second) {
        var _this = _super.call(this, year, month, day) || this;
        _this.hour = hour;
        _this.minute = minute;
        _this.second = second;
        return _this;
    }
    SecondUnit.prototype.getHour = function () {
        return this.hour;
    };
    SecondUnit.prototype.getMinute = function () {
        return this.minute;
    };
    SecondUnit.prototype.getSecond = function () {
        return this.second;
    };
    SecondUnit.validate = function (_year, _month, _day, hour, minute, second) {
        if (hour < 0 || hour > 23) {
            throw new Error("illegal hour: ".concat(hour));
        }
        if (minute < 0 || minute > 59) {
            throw new Error("illegal minute: ".concat(minute));
        }
        if (second < 0 || second > 59) {
            throw new Error("illegal second: ".concat(second));
        }
    };
    return SecondUnit;
}(DayUnit));
exports.SecondUnit = SecondUnit;
var AbstractCultureDay = (function (_super) {
    __extends(AbstractCultureDay, _super);
    function AbstractCultureDay(culture, dayIndex) {
        var _this = _super.call(this) || this;
        _this.culture = culture;
        _this.dayIndex = dayIndex;
        return _this;
    }
    AbstractCultureDay.prototype.getDayIndex = function () {
        return this.dayIndex;
    };
    AbstractCultureDay.prototype.getCulture = function () {
        return this.culture;
    };
    AbstractCultureDay.prototype.getName = function () {
        return this.culture.getName();
    };
    AbstractCultureDay.prototype.toString = function () {
        return "".concat(this.culture, "\u7B2C").concat(this.getDayIndex() + 1, "\u5929");
    };
    return AbstractCultureDay;
}(AbstractCulture));
exports.AbstractCultureDay = AbstractCultureDay;
var LoopTyme = (function (_super) {
    __extends(LoopTyme, _super);
    function LoopTyme(names, indexOrName) {
        var _this = _super.call(this) || this;
        _this.names = names;
        _this.index = _this.indexOfBy(indexOrName);
        return _this;
    }
    LoopTyme.prototype.indexOfBy = function (indexOrName) {
        if (typeof indexOrName === 'number') {
            return this.indexOf(indexOrName, this.getSize());
        }
        else {
            for (var i = 0, j = this.getSize(); i < j; i++) {
                if (this.names[i] === indexOrName) {
                    return i;
                }
            }
            throw new Error("illegal name ".concat(indexOrName));
        }
    };
    LoopTyme.prototype.getName = function () {
        return this.names[this.index];
    };
    LoopTyme.prototype.getIndex = function () {
        return this.index;
    };
    LoopTyme.prototype.getSize = function () {
        return this.names.length;
    };
    LoopTyme.prototype.nextIndex = function (n) {
        return this.indexOfBy(this.index + n);
    };
    LoopTyme.prototype.stepsTo = function (targetIndex) {
        return this.indexOfBy(targetIndex - this.index);
    };
    LoopTyme.prototype.stepsBackTo = function (targetIndex) {
        var n = this.getSize();
        return -((this.index - targetIndex + n) % n);
    };
    LoopTyme.prototype.stepsCloseTo = function (targetIndex) {
        var d1 = this.stepsTo(targetIndex);
        var d2 = this.stepsBackTo(targetIndex);
        return d1 <= Math.abs(d2) ? d1 : d2;
    };
    return LoopTyme;
}(AbstractTyme));
exports.LoopTyme = LoopTyme;
var Animal = (function (_super) {
    __extends(Animal, _super);
    function Animal(indexOrName) {
        return _super.call(this, Animal.NAMES, indexOrName) || this;
    }
    Animal.fromIndex = function (index) {
        return new Animal(Animal.numeric(index, 'animal index'));
    };
    Animal.fromName = function (name) {
        return new Animal(name);
    };
    Animal.prototype.next = function (n) {
        return Animal.fromIndex(this.nextIndex(n));
    };
    Animal.prototype.getTwentyEightStar = function () {
        return TwentyEightStar.fromIndex(this.index);
    };
    Animal.NAMES = ['蛟', '龙', '貉', '兔', '狐', '虎', '豹', '獬', '牛', '蝠', '鼠', '燕', '猪', '獝', '狼', '狗', '彘', '鸡', '乌', '猴', '猿', '犴', '羊', '獐', '马', '鹿', '蛇', '蚓'];
    return Animal;
}(LoopTyme));
exports.Animal = Animal;
var TwentyEightStar = (function (_super) {
    __extends(TwentyEightStar, _super);
    function TwentyEightStar(indexOrName) {
        return _super.call(this, TwentyEightStar.NAMES, indexOrName) || this;
    }
    TwentyEightStar.fromIndex = function (index) {
        return new TwentyEightStar(TwentyEightStar.numeric(index, 'twenty eight star index'));
    };
    TwentyEightStar.fromName = function (name) {
        return new TwentyEightStar(name);
    };
    TwentyEightStar.prototype.next = function (n) {
        return TwentyEightStar.fromIndex(this.nextIndex(n));
    };
    TwentyEightStar.prototype.getSevenStar = function () {
        return SevenStar.fromIndex(this.index % 7 + 4);
    };
    TwentyEightStar.prototype.getLand = function () {
        return Land.fromIndex([4, 4, 4, 2, 2, 2, 7, 7, 7, 0, 0, 0, 0, 5, 5, 5, 6, 6, 6, 1, 1, 1, 8, 8, 8, 3, 3, 3][this.index]);
    };
    TwentyEightStar.prototype.getZone = function () {
        return Zone.fromIndex(~~(this.index / 7));
    };
    TwentyEightStar.prototype.getAnimal = function () {
        return Animal.fromIndex(this.index);
    };
    TwentyEightStar.prototype.getLuck = function () {
        return Luck.fromIndex([0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0][this.index]);
    };
    TwentyEightStar.NAMES = ['角', '亢', '氐', '房', '心', '尾', '箕', '斗', '牛', '女', '虚', '危', '室', '壁', '奎', '娄', '胃', '昴', '毕', '觜', '参', '井', '鬼', '柳', '星', '张', '翼', '轸'];
    return TwentyEightStar;
}(LoopTyme));
exports.TwentyEightStar = TwentyEightStar;
var SevenStar = (function (_super) {
    __extends(SevenStar, _super);
    function SevenStar(indexOrName) {
        return _super.call(this, SevenStar.NAMES, indexOrName) || this;
    }
    SevenStar.fromIndex = function (index) {
        return new SevenStar(SevenStar.numeric(index, 'seven star index'));
    };
    SevenStar.fromName = function (name) {
        return new SevenStar(name);
    };
    SevenStar.prototype.next = function (n) {
        return SevenStar.fromIndex(this.nextIndex(n));
    };
    SevenStar.prototype.getWeek = function () {
        return Week.fromIndex(this.index);
    };
    SevenStar.NAMES = ['日', '月', '火', '水', '木', '金', '土'];
    return SevenStar;
}(LoopTyme));
exports.SevenStar = SevenStar;
var Week = (function (_super) {
    __extends(Week, _super);
    function Week(indexOrName) {
        return _super.call(this, Week.NAMES, indexOrName) || this;
    }
    Week.fromIndex = function (index) {
        return new Week(Week.numeric(index, 'week index'));
    };
    Week.fromName = function (name) {
        return new Week(name);
    };
    Week.prototype.next = function (n) {
        return Week.fromIndex(this.nextIndex(n));
    };
    Week.prototype.getSevenStar = function () {
        return SevenStar.fromIndex(this.index);
    };
    Week.NAMES = ['日', '一', '二', '三', '四', '五', '六'];
    return Week;
}(LoopTyme));
exports.Week = Week;
var Land = (function (_super) {
    __extends(Land, _super);
    function Land(indexOrName) {
        return _super.call(this, Land.NAMES, indexOrName) || this;
    }
    Land.fromIndex = function (index) {
        return new Land(Land.numeric(index, 'land index'));
    };
    Land.fromName = function (name) {
        return new Land(name);
    };
    Land.prototype.next = function (n) {
        return Land.fromIndex(this.nextIndex(n));
    };
    Land.prototype.getDirection = function () {
        return Direction.fromIndex(this.index);
    };
    Land.NAMES = ['玄天', '朱天', '苍天', '阳天', '钧天', '幽天', '颢天', '变天', '炎天'];
    return Land;
}(LoopTyme));
exports.Land = Land;
var Direction = (function (_super) {
    __extends(Direction, _super);
    function Direction(indexOrName) {
        return _super.call(this, Direction.NAMES, indexOrName) || this;
    }
    Direction.fromIndex = function (index) {
        return new Direction(Direction.numeric(index, 'direction index'));
    };
    Direction.fromName = function (name) {
        return new Direction(name);
    };
    Direction.prototype.next = function (n) {
        return Direction.fromIndex(this.nextIndex(n));
    };
    Direction.prototype.getLand = function () {
        return Land.fromIndex(this.index);
    };
    Direction.prototype.getElement = function () {
        return Element.fromIndex([4, 2, 0, 0, 2, 3, 3, 2, 1][this.index]);
    };
    Direction.NAMES = ['北', '西南', '东', '东南', '中', '西北', '西', '东北', '南'];
    return Direction;
}(LoopTyme));
exports.Direction = Direction;
var Zone = (function (_super) {
    __extends(Zone, _super);
    function Zone(indexOrName) {
        return _super.call(this, Zone.NAMES, indexOrName) || this;
    }
    Zone.fromIndex = function (index) {
        return new Zone(Zone.numeric(index, 'zone index'));
    };
    Zone.fromName = function (name) {
        return new Zone(name);
    };
    Zone.prototype.next = function (n) {
        return Zone.fromIndex(this.nextIndex(n));
    };
    Zone.prototype.getDirection = function () {
        return Direction.fromName(this.getName());
    };
    Zone.prototype.getBeast = function () {
        return Beast.fromIndex(this.getIndex());
    };
    Zone.NAMES = ['东', '北', '西', '南'];
    return Zone;
}(LoopTyme));
exports.Zone = Zone;
var Beast = (function (_super) {
    __extends(Beast, _super);
    function Beast(indexOrName) {
        return _super.call(this, Beast.NAMES, indexOrName) || this;
    }
    Beast.fromIndex = function (index) {
        return new Beast(Beast.numeric(index, 'beast index'));
    };
    Beast.fromName = function (name) {
        return new Beast(name);
    };
    Beast.prototype.next = function (n) {
        return Beast.fromIndex(this.nextIndex(n));
    };
    Beast.prototype.getZone = function () {
        return Zone.fromIndex(this.index);
    };
    Beast.NAMES = ['青龙', '玄武', '白虎', '朱雀'];
    return Beast;
}(LoopTyme));
exports.Beast = Beast;
var Luck = (function (_super) {
    __extends(Luck, _super);
    function Luck(indexOrName) {
        return _super.call(this, Luck.NAMES, indexOrName) || this;
    }
    Luck.fromIndex = function (index) {
        return new Luck(Luck.numeric(index, 'luck index'));
    };
    Luck.fromName = function (name) {
        return new Luck(name);
    };
    Luck.prototype.next = function (n) {
        return Luck.fromIndex(this.nextIndex(n));
    };
    Luck.NAMES = ['吉', '凶'];
    return Luck;
}(LoopTyme));
exports.Luck = Luck;
var Constellation = (function (_super) {
    __extends(Constellation, _super);
    function Constellation(indexOrName) {
        return _super.call(this, Constellation.NAMES, indexOrName) || this;
    }
    Constellation.fromIndex = function (index) {
        return new Constellation(Constellation.numeric(index, 'constellation index'));
    };
    Constellation.fromName = function (name) {
        return new Constellation(name);
    };
    Constellation.prototype.next = function (n) {
        return Constellation.fromIndex(this.nextIndex(n));
    };
    Constellation.NAMES = ['白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手', '摩羯', '水瓶', '双鱼'];
    return Constellation;
}(LoopTyme));
exports.Constellation = Constellation;
var Duty = (function (_super) {
    __extends(Duty, _super);
    function Duty(indexOrName) {
        return _super.call(this, Duty.NAMES, indexOrName) || this;
    }
    Duty.fromIndex = function (index) {
        return new Duty(Duty.numeric(index, 'duty index'));
    };
    Duty.fromName = function (name) {
        return new Duty(name);
    };
    Duty.prototype.next = function (n) {
        return Duty.fromIndex(this.nextIndex(n));
    };
    Duty.NAMES = ['建', '除', '满', '平', '定', '执', '破', '危', '成', '收', '开', '闭'];
    return Duty;
}(LoopTyme));
exports.Duty = Duty;
var Element = (function (_super) {
    __extends(Element, _super);
    function Element(indexOrName) {
        return _super.call(this, Element.NAMES, indexOrName) || this;
    }
    Element.fromIndex = function (index) {
        return new Element(Element.numeric(index, 'element index'));
    };
    Element.fromName = function (name) {
        return new Element(name);
    };
    Element.prototype.next = function (n) {
        return Element.fromIndex(this.nextIndex(n));
    };
    Element.prototype.getReinforce = function () {
        return this.next(1);
    };
    Element.prototype.getRestrain = function () {
        return this.next(2);
    };
    Element.prototype.getReinforced = function () {
        return this.next(-1);
    };
    Element.prototype.getRestrained = function () {
        return this.next(-2);
    };
    Element.prototype.getDirection = function () {
        return Direction.fromIndex([2, 8, 4, 6, 0][this.index]);
    };
    Element.NAMES = ['木', '火', '土', '金', '水'];
    return Element;
}(LoopTyme));
exports.Element = Element;
var God = (function (_super) {
    __extends(God, _super);
    function God(indexOrName) {
        return _super.call(this, God.NAMES, indexOrName) || this;
    }
    God.fromIndex = function (index) {
        return new God(God.numeric(index, 'god index'));
    };
    God.fromName = function (name) {
        return new God(name);
    };
    God.prototype.next = function (n) {
        return God.fromIndex(this.nextIndex(n));
    };
    God.prototype.getLuck = function () {
        return Luck.fromIndex(this.index < 60 ? 0 : 1);
    };
    God.getDayGods = function (month, day) {
        var l = [];
        var index = day.getIndex().toString(16).toUpperCase();
        if (index.length < 2) {
            index = '0' + index;
        }
        var matcher = new RegExp(";".concat(index, "(.[^;]*)"), 'g').exec(God.dayGods[month.getEarthBranch().next(-2).getIndex()]);
        if (matcher) {
            var data = matcher[1];
            for (var i = 0, j = data.length; i < j; i += 2) {
                l.push(God.fromIndex(parseInt(data.substring(i, i + 2), 16)));
            }
        }
        return l;
    };
    God.NAMES = ['天恩', '鸣吠', '母仓', '不将', '四相', '鸣吠对', '五合', '三合', '除神', '月德', '月空', '月德合', '月恩', '时阴', '五富', '生气', '金匮', '相日', '阴德', '六合', '益后', '青龙', '续世', '明堂', '王日', '要安', '官日', '吉期', '福德', '六仪', '金堂', '宝光', '民日', '临日', '天马', '敬安', '普护', '驿马', '天后', '阳德', '天喜', '天医', '司命', '圣心', '玉宇', '守日', '时德', '解神', '时阳', '天仓', '天巫', '玉堂', '福生', '天德', '天德合', '天愿', '天赦', '天符', '阴神', '解除', '五虚', '五离', '重日', '复日', '血支', '天贼', '土符', '游祸', '白虎', '小耗', '致死', '河魁', '劫煞', '月煞', '月建', '往亡', '大时', '大败', '咸池', '厌对', '招摇', '九坎', '九焦', '天罡', '死神', '月害', '死气', '月破', '大耗', '天牢', '元武', '月厌', '月虚', '归忌', '小时', '天刑', '朱雀', '九空', '天吏', '地火', '四击', '大煞', '勾陈', '八专', '灾煞', '天火', '血忌', '土府', '月刑', '触水龙', '地囊', '八风', '四废', '四忌', '四穷', '五墓', '阴错', '四耗', '阳错', '孤辰', '小会', '大会', '八龙', '七鸟', '九虎', '六蛇', '天狗', '行狠', '了戾', '岁薄', '逐阵', '三丧', '三阴', '阴道冲阳', '阴位', '阴阳交破', '阴阳俱错', '阴阳击冲', '鬼哭', '单阴', '绝阴', '纯阳', '阳错阴冲', '七符', '成日', '孤阳', '绝阳', '纯阴', '大退', '四离', '阳破阴冲'];
    God.dayGods = [
        ';000002300F14156869717A3F;01001617495C40413C425D6A;0209000C041831031906054A5E6B4B5F;033500041A1B032C06054C4D4E60;04002D321C1D1E104F50615152;05111F53546C55433C3E;062E200721220D01566E44;070B2333242F45;08360A2526242F080157583D59;091234080162463C3D5A;0A270728292A5B6364653F79;0B0237130E2B4748727A3E66;0C09020C04300F0314150568696D;0D3504031617495C40413C6F425D6A;0E38183119064A5E6B4B5F;0F001A1B032C064C4D4E60;10002D321C1D1E104F50615152;110B00111F53546C55433C3E;12360A002E200721220D015644;13002333456D;142526242F080157583F3D59;15001234080162463C3D5A;16090004270728292A5B636465;17350204130E032B47483E66;1802300F14156869;19031617495C40413C425D6A;1A1831031906054A5E6B4B5F;1B0B1A1B032C06054C4D4E;1C360A2D321C1D1E104F50615152;1D111F53546C55433C3E;1E2E200721220D01563F44;1F23334573;20090C042526242F080157583D;2135041234080162463C3D5A;22270728292A5B636465;2302130E032B47483E66;2402300F0314150568696E;250B031617495C40413C425D6A;26360A18311906054A5E6B4B5F;271A1B2C06054C4D4E60;282D321C1D1E104F506151523F;29111F53546C55433C3E;2A090C042E200721220D015644;2B350423334567;2C2526242F0857583D59;2D001234080162463C3D5A;2E00270728292A5B63646574;2F0B0002130E032B47483E66;30360A0002300F141505686975;31001617495C40413C425D6A676D;3218311906054A5E6B4B3F675F76;331A1B2C06054C4D4E60;34090C042D321C1D1E104F50615152;353504111F53546C55433C6F3E;362E200721220D5644;3723334567;382526242F08015758703D6759;390B123408016246703C3D5A84;3A360A270728292A5B636465;3B02130E2B47483E66;',
        ';00090002272A536C4C4D4E41717A;0100300F3103233C6151523F66;020004180E032406150543405D;03000C041A1D340617054A5E6B4F50;04002D1B555F;050B112526321C2B3C42654B3E60;060A2E2014100547546246;0712070D161F566A;0822192F0148453D44;092C083301575868695B633C3D;0A0937131E495C6459;0B020721282903727A3F3E5A;0C020427032A05536C4C4D4E416D;0D0C04300F03233C6F61515266;0E38180E24061543405D;0F0B001A1D3406174A5E6B4F5078;100A002D1B555F;1100112526321C2B3C42654B3E60;12002E2014100147546246;130012070D161F566A6D;140922192F080148453D44;152C083301575868695B633C3F3D44;160413031E495C6459;17020C0407212829033E5A;1802272A536C4C4D4E41;190B300F3103233C61515266;1A0A180E032406150543405D;1B1A1D340617014A5E6B4F50;1C2D1B555F;1D112526321C2B3C42654B3E60;1E092E2014100147546246;1F12070D161F56736E6A3F;200422192F080148453D44;210C042C083301575868695B633C3D;22131E495C6459;230B0207212829033E5A;240A0227032A05536C4C4D4E41;25300F31233C61515266;26180E2406150543405D;271A1D340617054A5E6B4F50;28092D1B555F;29112526321C2B3C42654B3F3E60;2A042E2014100147546246;2B0C0412070D161F566A67;2C22192F0848453D44;2D0B002C083301575868695B633C3D85;2E0A0013031E495C6459;2F0002072128293E5A;300002272A05536C4C4D4E4175;3100300F31233C6151526E676D66;3209180E2406150543405D;331A1D340617054A5E6B4F503F76;34042D1B555F;350C04112526321C2B3C6F42654B3E60;362E20141047546246;370B12070D161F566A67;380A22192F08014845703D6744;392C083301575868695B63703C3D74;3A131E495C6459;3B02072128293E5A;',
        ';00000207282931032B717A6E5D59;01000314473C5A;020A000427182526300F1D16062A054F506A;03360B00041A1906055562464066;04002D2C154A5E6B6C733F788B;0512111B0E1E17483C3E;060C2E20321C016869655F;0753544960;08350907210D230810015B63564B3D77;091324081F014C4D4E453C423D;0A2203342F57586461515244;0B02032C4341727A3E;0C0A020407282931032B055D6D59;0D360B040314473C6F5A;0E3827182526300F1D16062A4F506A3F;0F001A19065562464066;10000C2D2C154A5E6B6C86;110012111B0E1E17483C3E;123509002E20321C0168696E655F;13005354495C6D60;1407210D230810015B63564B3D7F;1537130324081F014C4D4E453C423D;160A042203342F57586461515244;17360B0204033343413E;1802072829312B5D3F59;190314473C5A;1A0C27182526300F1D16062A054F506A;1B1A1906055562464066;1C35092D2C154A5E6B6C;1D12111B0E1E17483C3E;1E2E20321C016869655F;1F5354495C60;200A0407210D230810015B63564B3D80;21360B04130324081F014C4D4E453C423D;2222342F5758646151523F44;2302033343413E;24020C072829312B055D59;2514473C5A;26120927182526300F1D16062A054F506A;271A1906055562464066;282D2C154A5E6B6C76;2912111B0E1E17483C3E;2A0A042E20321C016869655F;2B360B045354495C6760;2C07210D2308105B63564B3F3D77;2D00130324081F014C4D4E453C423D;2E000C22342F57586461515244;2F00023343413E;3035090002072829312B05755D59;310014473C676D5A;3227182526300F1D16062A054F506A67;331A1906055562464066;340A042D2C154A5E6B6C;35360B0412111B0E1E17483C6F3E;362E20321C6869653F5F;375354495C6760;380C07210D230810015B6356704B3D677774;391324081F014C4D4E45703C423D;3A350922342F57586461515244;3B023343413E;',
        ';000A00220362463C44;010B00072128291D334F50645D;02360002230605534855423F59;03000212300F24060568695A;0400042E27342A495C403C8C;050C04184A5E6B3E66788D76;06091A1B2B15014C4D4E;07352D321C14175B636151526577;0811130E16080147546C433C6A3D5F;0920070D190801563D60;0A0A032C2F104541;0B0B252631031E1F57584B3E;0C362203056246717B3C3F6D44;0D072128291D334F50645D;0E020423065348554259;0F00020C0412300F240668696E5A;1009002E12342A495C403C;113500184A5E6B3E66;12001A1B2B15014C4D4E;13002D321C14175B63615152656D77;140A11130E0316080147546C433C6F6A3D5F;150B20070D03190801563D60;1636032C2F104541733F;17252631031E1F5758727B4B3E;1804220362463C44;190C04072128291D334F50645D;1A09022306055348554259;1B3502120D0F24060568695A;1C2E27342A495C403C;1D184A5E6B3E66;1E0A381A1B2B15014C4D4E;1F0B2D321C14175B63615152657F;20363711130E0316080147546C433C6A3F3D5F;2120070D03190801563D60;2204032C2F104541;230C042526311E1F57584B3E;2409220562463C44;2535072128291D334F50645D;26022306055348554259;270212300F24060568695A;280A2E27342A495C403C6F;290B184A5E6B3E66;2A361A1B2B15014C4D4E3F81;2B2D321C14175B6361515265678074;2C0411130E03160847546C433C6A3D5F;2D000C0420070D190801566E3D60;2E09002C2F104541;2F35002526311E1F57584B3E;300022056246703C44;3100072128291D334F50645D676D;320A02230605534855426759;330B02120D0F2406056869755A;34362E27342A495C403C3F;35184A5E6B3E6676;36041A1B2B154C4D4E81;370C042D321C14175B6361515265677774;380911130E16080147546C433C6A3D675F;393520070D190801563D60;3A2C2F104541;3B2526311E1F5758704B3E87;',
        ';00001D2F10575868694F503C;0100122B1F495C5564;0209000207222829140605655D44;03000216063305474C4D4E51526A4B3F;04000C042E300F193C6159;0504182C43403E5A;06271A1E2A014A5E6B6C5B6342;070B2D1B1366;080A112526321C0815013C3D;0920032308170153546246413D;0A07210D310324565F;0B0E033448453E60;0C091D2F1005575868694F50717B3C6D;0D122B1F495C553F;0E020C04072228291406655D44;0F000204160633474C4D4E51526A4B;10002E300F193C6159;110B00182C43403E5A;120A00271A1E2A014A5E6B6C5B6342;13002D1B13036D66;14112526321C030815013C6F3D;1520032308170153546246413D;160907210D31032456735F;170E344845727B3F3E60;180C041D2F10575868694F503C;1904122B1F495C5564;1A0207222829140605655D44;1B0B0216063305474C4D4E51526A4B;1C0A2E300F193C6159;1D182C43403E5A;1E38271A1E2A014A5E6B6C5B6342;1F2D1B130366;2009112526321C030815013C3D;21202308170153546246413F3D;220C0407210D3103565F;23040E3448453E60;241D2F1005575868694F503C;250B122B1F495C5564;260A0207222829140605655D44;270216063305474C4D4E51526A4B;282E300F193C6F616E59;29182C43403E5A;2A09271A1E2A014A5E6B6C5B63427988;2B372D1B133F6766;2C0C04112526321C0308153C3D;2D0004202308170153546246413D;2E0007210D3124565F;2F0B000E3448453E60;300A001D2F1005575868694F50703C89;3100122B1F495C5564676D;320207222829140605655D6744;330216063305474C4D4E7551526A4B;34092E300F193C6159;35182C43403F3E5A;360904271A1E2A4A5E6B6C5B634278;37042D1B136766;38112526321C0815013C3D67;390B202308170153546246413D;3A0A07210D3124566E5F;3B0E03344845703E60;',
        ';003509001E2F554C4D4E453C51525D5F;010057586C646160;0200020E06100543;0300020721282923061F0565;0400042E2224533C7344;05360B04182526300F34335B633F3E74;060A1A13016246404B59;070C2D2B4A5E6B5A;0827111B0314082A0148413C3D;0920321C310316080148413C3D;0A35090319154754495C42;0B12070D1D2C174F50563E;0C1E2F05554C4D4E45717B3C51525D6D5F;0D57586C646160;0E02040E061043;0F360B0002040721282923061F653F;100A002E2224533C44;11000C182526300F34335B633E;12001A1303016246404B59;13002D032B4A5E6B6D5A;14350927111B0314082A0148413C6F3D;1520321C310316080168696A3D66;1619154754495C426E;1712070D1D2C174F5056727B3E;18041E2F554C4D4E453C51525D5F;19360B0457586C64613F60;1A0A020E06100543;1B020C0721282923061F0565;1C2E2224533C44;1D182526300F34335B633E;1E3509381A1303016246404B59;1F2D032B4A5E6B5A;2027111B14082A0148413C3D;2120321C3116080168696A3D66;22040319154754495C42;23360B0412070D1D2C174F50563F3E;240A1E2F05554C4D4E453C51525D5F;250C57586C646160;26020E06100543;27020721282923061F0565;2835092E2224533C6F44;29182526300F34335B633E;2A1A13016246404B5982;2B2D2B4A5E6B675A76;2C0427111B0314082A48413C3D;2D360B000420321C3116080168696A3F3D66;2E0A0019154754495C42;2F000C12070D1D2C174F50563E;30001E2F05554C4D4E45703C51525D5F;310057586C6461676D608E;323509020E0610054367;33020721282923061F057565;342E2224533C6E44;35182526300F34335B633E7974;3637041A13036246404B5982;37360B042D2B4A5E6B3F675A76;380A27111B14082A0148413C3D67;390C20321C3116080168696A3D66;3A0319154754495C42;3B12070D1D2C174F5056703E;',
        ';0000302007210D341556;01000217455D;020A0025262B2F060557586C5F;030B001406056246603C8F;0436000207282916105B6364656A;0537130E191F47483E;0622300F2C0168693F44;07021E33495C40413C;08090C04184A5E423D59;093504121A1B0308014C4D4E51524B3D5A;0A02272D321C1D232A4F507E61;0B1124535455433E66;0C0A2E2007210D341505566D;0D0B0217455D;0E3625262B2F0657586C;0F00140662463C4260;10000207282916105B6364656A3F79;1100130E191F47483E;1209350C0422300F032C01686944;1335000204031E33495C40413C6D;1418310308014A5E6B3D59;15121A1B0308014C4D4E51524B3D5A;160A02272D321C1D232A4F507E61;170B1124535455433C6F6E3E66;18362E2007210D341556;190217455D;1A25262B060557586C3F5F;1B14060562463C4260;1C09020C0407282916105B6364656A;1D3504130E03191F47483E;1E22300F032C01686944;1F02031E495C40413C;200A183108014A5E6B3D59;210B121A1B08014C4D4E51524B3D5A;223602272D321C1D232A4F507E61;231124535455433C3E66;242E2007210D34150556717C3F;25021745735D;26090C0425262B2F060557586C5F;27350414060562463C4260;280207282916105B6364656A74;29130E03191F47483E;2A0A22300F2C01686944;2B0B021E33495C40413C6F67;2C36381831034A5E6B3D59;2D00121A1B08014C4D4E51524B3D5A;2E0002272D321C1D232A4F507E613F;2F00112453545543727C3C3E66;3009000C042E2007210D34150556;313500020417455D676D;3225262B2F060557586C70675F;331406056246703C426084;340A0207282916105B6364656A;350B130E191F47486E3E;363622300F032C7544;37021E33495C40413C67;38183108014A5E6B3F3D675976;39121A1B08014C4D4E51524B3D5A;3A09020C04272D321C1D232A4F507E61;3B35041124535455433C3E66;',
        ';000A002E27202C2A475462464B;010B0002070D1E5666;02002F06150548456E5D;0300061705575868695B633C;040002130323495C645F;0507212829249060;0609341001534C4D4E415152;070212300F31031F3C61423F;080418220E032B080143403D44;090C041A1D14080833014A5E6B6C4F503D;0A0A022D1B16556A59;0B0B112526321C193C653E5A;0C2E27202C2A05475462464B6D;0D02070D1E5666;0E2F061548455D;0F000617575868695B633C85;10090002371323495C645F;11000721282903243F3E60;12000403341001534C4D4E415152;1300020C0412300F31031F3C61426D;140A18220E032B080143403D44;150B1A1D140833014A5E6B6C4F503D;16022D1B16556A59;17112526321C193C6F653E5A;182E27202C2A475462464B;1902070D1E5666;1A092F06150548455D;1B061705575868695B633C3F79;1C0204130323495C645F;1D0C040721282903243E60;1E0A03341001534C4D4E415152;1F0B0227300F311F3C6142;2018220E2B080143406E3D44;211A1D140833014A5E6B6C4F503D;22022D1B16556A59;23112526321C193C653E5A;24092E27202C2A0547546246717C4B;2502070D1E56733F66;26042F06150548455D;270C04061705575868695B633C;280A02130323495C645F;290B07212829243E60;2A341001534C4D4E415152;2B0212300F311F3C6F614267;2C3818220E032B0843403D44;2D001A1D140833014A5E6B5B4F503D78;2E0900022D1B16556A59;2F00112526321C19727C3C653F3E5A;3000042E27202C2A05475462464B;3100020C04070D1E56676D66;320A2F0615054845705D67;330B061705575868695B63703C74;34021323495C645F;3507212829243E60;36033410534C4D4E41755152;370212300F311F3C614267;380918220E2B080143403D6744;391A1D140833014A5E6B6C4F503F3D76;3A02042D1B16556A59;3B0C04112526321C193C653E5A;',
        ';00002E20391C246869655D59;010002345354495C5A;023509002707210D062A055B6356515277;0300132B06054C4D4E453C66;04000203142F1557586473614B3F;0512161743416A3E;060C072829310319015F;07360B02032C476C3C6E60;080A04182526300F1D1E0810014F503D;09041A081F01556246403D;0A022D224A5E6B4486;0B111B0E2333483C423E;0C35092E20321C24056869655D6D59;0D02345354495C5A;0E2707210D062A5B635651523F77;0F00132B064C4D4E453C66;1000020C03142F15575864614B;11360B001203161743416A3E;120A0004072829310319015F;13000204032C476C3C6D60;14182526300F1D1E0810014F503D;151A081F01556246403D;163509022D224A5E6B44;17111B0E2333483C6F423E;182E20321C246869655D3F59;1902345354495C5A;1A0C2707210D062A055B635651527F;1B360B3713032B06054C4D4E453C66;1C0A020403142F15575864614B;1D041203161743416A3E;1E0728293119015F;1F022C476C3C60;203509182526300F1D1E08104F503D;211A081F01556246403D;22022D224A5E6B3F447891;23111B0E2333483C423E;240C2E20321C24056869717C655D59;25360B021C5354495C6E5A;260A042707210D062A055B6356515280;270413032B06054C4D4E453C66;2802142F15575864614B;2912161743416A3E;2A35090728293119015F;2B022C476C3C6F6760;2C38182526300F1D1E08104F503F3D;2D001A081F01556246403D;2E0002092D224A5E6B4476;2F360B00111B0E233348727C3C423E;300A00042E20321C24056869655D59;31000204345354495C676D5A;322707210D062A055B6356705152677774;33132B06054C4D4E45703C66;34350902142F15575864614B;3512161743416A3E;36072829310319753F5F;37022C476C3C6760;380C182526300F1D1E0810014F503D67;39360B1A081F01556246403D;3A0A02042D224A5E6B44;3B04111B0E2333483C423E;',
        ';00090038041A221B194C4D4E44;0135000C042D321C2C335B6361655D77;02002E11130E1E06054754433C59;03001220070D0605565A;0400272F2A454142;050B252631032357583E66;06360A0324150162463C;07072128291D34174F50644B;080208015348553F3D5F;0902300F2B080168693D60;0A09041410495C403C6F;0B35090418161F4A5E6B6C5152403E;0C1A221B19054C4D4E6D44;0D2D321C2C335B6361655D77;0E2E11130E1E064754433C6E59;0F0B351220070D0306565A;10360A0027032F2A454142;1100252631032357583E66;12000324150162463C3F;1300072128291D34174F50644B6D;1409020408015348553D5F;1535020C04300F2B080168693D60;161410495C403C;1718161F4A5E6B6C51526A3E;181A221B194C4D4E4481;190B0A2E11130E031E06054754433C59;1A360A2E11130E031E06054754433C59;1B1220070D030605565A;1C27032F2A454173423F;1D252631032357583E66;1E090424150162463C;1F350C04072128291D34174F50644B;200208015348553D5F;2102300F2B080168693D60;221410495C403C92;230B18161F4A5E6B6C51526A3E7893;24360A1A221B19054C4D4E44;252D321C2C335B6361655D7F;26372E11130E031E06054754433C3F59;271220070D030605565A;280904272F2A454142;29350C042526312357583E66;2A2415016246703C;2B072128291D34174F50644B67;2C02085348556E3D5F;2D090002300F2B080168693D60;2E360A001410495C403C;2F0018161F4A5E6B6C51526A3E;30001A221B19054C4D4E717D3F4481;31002D321C2C335B6361655D676D8074;3209042E11130E1E06054754433C6F6759;33350C042720070D0605565A;34272F2A454142;35252631235758703E6687;36241562463C;370B072128291D34174F50644B67;38360A023A015348553D675F;3902300F2B08016869753D60;3A1410495C403C3F;3B18161F4A5E6B6C727D51526A3E76;',
        ';0000380C041A23104A5E6B5B63;010004122D1B13241F838A;020A002E11252622321C3406053C5D44;030B00200306330553544641;040007210D312B5659;050E031448453E5A;060E1D162F2A01575868694F503C6A;0719495C556466;0809020728292C081501515242653D;09021E081701474C4D4E3F3D;0A0C04300F3C6F614B5F;0B041843403E60;0C0A1A2310054A5E6B5B636D;0D0B122D1B1303241F838A94;0E2E11252622321C34063C5D44;0F002003063353546C624641;100007210D31032B5659;11000E031448453E5A;120900271D162F2A01575868694F503C6A;130019495C55643F6D66;14020C040728292C081501515242653D;1502041E081701474C4D4E3D;160A300F3C614B5F;170B1843403E60;181A23104A456B5B6378;19122D1B1303241F9583;1A2E11252622321C033406053C5D44;1B200306330553546C6246416E;1C0907210D31032B567359;1D0E1448453F3E5A;1E0C04271D163B2A01575868694F503C6A;1F0419495C556466;200A020728292C081501515242653D;210B021E081701474C4D4E3D;22300F3C614B5F;231843403E60;241A2310054A5E425B63;25122D1B1303241F;26092E11252622321C033406053C5D44;272006330553546C6246413F;280C0407210D312B5659;29040E1448453E5A;2A0A271D162F2A01575868694F50703C6A89;2B0B19495C55646766;2C020728292C0815515242653D;2D00021E081701474C4D4E3D;2E00300F3C614B5F;2F001843403E60;3009001A2310054A5E6B5B63717D7988;310037122D1B13241F3F676D;320C042E11252622321C3406053C6F5D6744;33042006330553546C624641;340A07210D312B5659;350B0E03144845703E5A;36271D162F2A575868694F503C6A;3719495C55646766;38020728292C081501515242653D67;39021E081701474C4D4E756E3D;3A09300F3C614B5F;3B184340727D3F3E60;',
        ';000A003837041A1316624640425D6A5F;01360B00042D194A5E6B4B60;020009111B032C06100548413C;030020321C310310061F056869;0400224754495C7344;05070D1D334F505651523F3E;063509232F01554C4D4E453C59;070C24575864615A;0802270E34082A01433D;09020721282908016E653D66;0A0A042B15536C3C6F;0B360B0412182526300F14175B633E;0C1A13031605624640425D6A6D5F;0D2D03194A5E6B4B60;0E2E111B33061048413C;0F0020321C31031E061F68693F;1035090022034754495C44;11000C070D1D334F505651523E;1200232F01554C4D4E453C59;130024575864616D5A;140A0204270E0F082A01433D;15360B0204072128290801653D66;162B15536C3C;17121825260D0F14175B633E;181A1316624640425D6A5F82;192D03194A5E6B4B3F60;1A35092E111B032C061048413C;1B0C20321C31031E061F056869;1C224754495C44;1D07121D334F505651523E;1E0A04232F01554C4D4E453C59;1F360B0424575864615A;2002270E34082A01433D;2102072128290801653D66;222B15536C3C;2312182526300F14175B633F3E;2435091A13031605624640425D6A5F;250C2D03194A5E6B4B60;262E111B2C06100548413C;2720321C311E061F056869;280A04224746495C44;29360B04070D1D334F505651523E;2A232F01554C4D4E45703C59;2B2457586461675A96;2C02270E34082A433D;2D0002072128290801653F3D66;2E3509002B15536C3C;2F000C12182526300F14175B633E;30001A1316624640717D425D6A5F82;31002D194A5E6B4B676D6076;320A042E111B2C06100548413C6F67;33360B0420321C311E061F0568696E;3422034754495C44;35070D1D334F50567051523E;36232F554C4D4E453C59;3724575864613F675A;38350902270E34082A01433D67;39020C07212829080175653D66;3A2B15536C3C;3B12182526300F14175B63727D3E7974;'
    ];
    return God;
}(LoopTyme));
exports.God = God;
var Phase = (function (_super) {
    __extends(Phase, _super);
    function Phase(lunarYear, lunarMonth, indexOrName) {
        var _this = _super.call(this, Phase.NAMES, indexOrName) || this;
        if (typeof indexOrName === 'number') {
            var m = LunarMonth.fromYm(lunarYear, lunarMonth).next(~~(indexOrName / _this.getSize()));
            _this.lunarYear = m.getYear();
            _this.lunarMonth = m.getMonthWithLeap();
        }
        else {
            _this.lunarYear = Phase.numeric(lunarYear, 'lunar year');
            _this.lunarMonth = Phase.numeric(lunarMonth, 'lunar month');
        }
        return _this;
    }
    Phase.fromIndex = function (lunarYear, lunarMonth, index) {
        return new Phase(lunarYear, lunarMonth, Phase.numeric(index, 'phase index'));
    };
    Phase.fromName = function (lunarYear, lunarMonth, name) {
        return new Phase(lunarYear, lunarMonth, name);
    };
    Phase.prototype.next = function (n) {
        var size = this.getSize();
        var i = this.getIndex() + n;
        if (i < 0) {
            i -= size;
        }
        i = ~~(i / size);
        var m = LunarMonth.fromYm(this.lunarYear, this.lunarMonth);
        if (i != 0) {
            m = m.next(i);
        }
        return Phase.fromIndex(m.getYear(), m.getMonthWithLeap(), this.nextIndex(n));
    };
    Phase.prototype.getStartSolarTime = function () {
        var n = Math.floor((this.lunarYear - 2000) * 365.2422 / 29.53058886);
        var i = 0;
        var jd = JulianDay.J2000 + ShouXingUtil.ONE_THIRD;
        var d = LunarDay.fromYmd(this.lunarYear, this.lunarMonth, 1).getSolarDay();
        while (true) {
            var t_1 = ShouXingUtil.msaLonT((n + i) * ShouXingUtil.PI_2) * 36525;
            if (!JulianDay.fromJulianDay(jd + t_1 - ShouXingUtil.dtT(t_1)).getSolarDay().isBefore(d)) {
                break;
            }
            i++;
        }
        var r = [0, 90, 180, 270];
        var t = ShouXingUtil.msaLonT((n + i + r[~~(this.getIndex() / 2)] / 360.0) * ShouXingUtil.PI_2) * 36525;
        return JulianDay.fromJulianDay(jd + t - ShouXingUtil.dtT(t)).getSolarTime();
    };
    Phase.prototype.getSolarTime = function () {
        var t = this.getStartSolarTime();
        return this.getIndex() % 2 == 1 ? t.next(1) : t;
    };
    Phase.prototype.getSolarDay = function () {
        var d = this.getStartSolarTime().getSolarDay();
        return this.getIndex() % 2 == 1 ? d.next(1) : d;
    };
    Phase.NAMES = ['新月', '蛾眉月', '上弦月', '盈凸月', '满月', '亏凸月', '下弦月', '残月'];
    return Phase;
}(LoopTyme));
exports.Phase = Phase;
var PhaseDay = (function (_super) {
    __extends(PhaseDay, _super);
    function PhaseDay(phase, dayIndex) {
        return _super.call(this, phase, dayIndex) || this;
    }
    PhaseDay.prototype.getPhase = function () {
        return this.culture;
    };
    return PhaseDay;
}(AbstractCultureDay));
exports.PhaseDay = PhaseDay;
var Sixty = (function (_super) {
    __extends(Sixty, _super);
    function Sixty(indexOrName) {
        return _super.call(this, Sixty.NAMES, indexOrName) || this;
    }
    Sixty.fromIndex = function (index) {
        return new Sixty(Sixty.numeric(index, 'sixty index'));
    };
    Sixty.fromName = function (name) {
        return new Sixty(name);
    };
    Sixty.prototype.next = function (n) {
        return Sixty.fromIndex(this.nextIndex(n));
    };
    Sixty.NAMES = ['上元', '中元', '下元'];
    return Sixty;
}(LoopTyme));
exports.Sixty = Sixty;
var Sound = (function (_super) {
    __extends(Sound, _super);
    function Sound(indexOrName) {
        return _super.call(this, Sound.NAMES, indexOrName) || this;
    }
    Sound.fromIndex = function (index) {
        return new Sound(Sound.numeric(index, 'sound index'));
    };
    Sound.fromName = function (name) {
        return new Sound(name);
    };
    Sound.prototype.next = function (n) {
        return Sound.fromIndex(this.nextIndex(n));
    };
    Sound.NAMES = ['海中金', '炉中火', '大林木', '路旁土', '剑锋金', '山头火', '涧下水', '城头土', '白蜡金', '杨柳木', '泉中水', '屋上土', '霹雳火', '松柏木', '长流水', '沙中金', '山下火', '平地木', '壁上土', '金箔金', '覆灯火', '天河水', '大驿土', '钗钏金', '桑柘木', '大溪水', '沙中土', '天上火', '石榴木', '大海水'];
    return Sound;
}(LoopTyme));
exports.Sound = Sound;
var Taboo = (function (_super) {
    __extends(Taboo, _super);
    function Taboo(indexOrName) {
        return _super.call(this, Taboo.NAMES, indexOrName) || this;
    }
    Taboo.fromIndex = function (index) {
        return new Taboo(Taboo.numeric(index, 'taboo index'));
    };
    Taboo.fromName = function (name) {
        return new Taboo(name);
    };
    Taboo.prototype.next = function (n) {
        return Taboo.fromIndex(this.nextIndex(n));
    };
    Taboo._getTaboos = function (data, supIndex, subIndex, index) {
        var l = [];
        var d = data[supIndex].split(';', -1)[subIndex].split(',', -1)[index];
        for (var i = 0, j = d.length; i < j; i += 2) {
            l.push(Taboo.fromIndex(parseInt(d.substring(i, i + 2), 16)));
        }
        return l;
    };
    Taboo.getDayRecommends = function (month, day) {
        return Taboo._getTaboos(Taboo.dayTaboo, month.getEarthBranch().getIndex(), day.getIndex(), 0);
    };
    Taboo.getDayAvoids = function (month, day) {
        return Taboo._getTaboos(Taboo.dayTaboo, month.getEarthBranch().getIndex(), day.getIndex(), 1);
    };
    Taboo.getHourRecommends = function (day, hour) {
        return Taboo._getTaboos(Taboo.hourTaboo, hour.getEarthBranch().getIndex(), day.getIndex(), 0);
    };
    Taboo.getHourAvoids = function (day, hour) {
        return Taboo._getTaboos(Taboo.hourTaboo, hour.getEarthBranch().getIndex(), day.getIndex(), 1);
    };
    Taboo.NAMES = ['祭祀', '祈福', '求嗣', '开光', '塑绘', '齐醮', '斋醮', '沐浴', '酬神', '造庙', '祀灶', '焚香', '谢土', '出火', '雕刻', '嫁娶', '订婚', '纳采', '问名', '纳婿', '归宁', '安床', '合帐', '冠笄', '订盟', '进人口', '裁衣', '挽面', '开容', '修坟', '启钻', '破土', '安葬', '立碑', '成服', '除服', '开生坟', '合寿木', '入殓', '移柩', '普渡', '入宅', '安香', '安门', '修造', '起基', '动土', '上梁', '竖柱', '开井开池', '作陂放水', '拆卸', '破屋', '坏垣', '补垣', '伐木做梁', '作灶', '解除', '开柱眼', '穿屏扇架', '盖屋合脊', '开厕', '造仓', '塞穴', '平治道涂', '造桥', '作厕', '筑堤', '开池', '伐木', '开渠', '掘井', '扫舍', '放水', '造屋', '合脊', '造畜稠', '修门', '定磉', '作梁', '修饰垣墙', '架马', '开市', '挂匾', '纳财', '求财', '开仓', '买车', '置产', '雇佣', '出货财', '安机械', '造车器', '经络', '酝酿', '作染', '鼓铸', '造船', '割蜜', '栽种', '取渔', '结网', '牧养', '安碓磑', '习艺', '入学', '理发', '探病', '见贵', '乘船', '渡水', '针灸', '出行', '移徙', '分居', '剃头', '整手足甲', '纳畜', '捕捉', '畋猎', '教牛马', '会亲友', '赴任', '求医', '治病', '词讼', '起基动土', '破屋坏垣', '盖屋', '造仓库', '交易', '立券', '安机', '会友', '求医疗病', '诸事不宜', '馀事勿取', '行丧', '断蚁', '归岫'];
    Taboo.dayTaboo = [
        '8219000776262322200C1E1D,06292C2E1F;0F11185C0001092A0D7014692982837B7C2C2E302F802D2B,06454F2089;111852828370795B302F404533802D152B39201E23221D212726,0F2E1F010D29;004023222088,0F29111847;11180001032A0D70795B2C2E302F802D4E152B33714161201F26,52095847;0F17000102061979454F3A15477677,241F8920;34357C88,7129;1551000403706A454F3A3D771F262322271E1D21,382B415220;0F000102037039297175261F1D21,454F2E156341;00076A54196348767765,792029711552890D382B;11180001020439332C2E302F2B5844477515634C1F2721,0F520D19267A29717020;297170192C2E2D2F2B3E363F4C,0F52156320010347;4C78,297172380D2A2E0F474841;18115C0001702A2C2E2F5282837129795B6375802D154C,1F208924;1811795B032C2E302F802D4163754C27261E1D2120,010D0F29521F;00401D232288,71290F4720;0F170001020E032A70692C2E302F802D2B0D7129474C201F2322,5211183809615D;0F1811000102062A0D2C2D804B2B672E2F7129,70471F8920;0007343588,0F71296B7080;175447440D15828377656A49,2B2E1F892022;11187129705B79000106032A0D397B6F7C802D2C2B61756627261E0C1D21,0F2E154147;0007385476771548,52061F20;0106111839513A2C2E2D2F8B804B4723221F63,71522920;1118000717161A2C2E3371292B56433D6375363F,0F0103472089;161A7888,292E1F0F3861;11180F00012A0D70795D7B7C39332D2C2E4E4863664C,064F478920;5452828379195D00012A0D7B7C2C2E3348156366242526201E,0F7129;00262788,292C2E1F2B2F;040318111A17332C15290D200C7A,47450638;0004031A170F11332C2E302F1571292A657677451949,70201D52;007B343588,87;00010670175B71292A152322271E,03637C2B38;04067033392C7161262322271E1D210C,;000715547776,521F;181100012C2E2F1F,0F38;70076A363F,2920;7888,292E1F;0F707B7C00012F75,5220;528303395B2F1E20,0F01;4088,87;02060418110D332C2E415B637566262322271F20,520F;0F181100012C2E7129,5220;7C343588,87;0001020603691817452C2E2D498244,412B6A096338;393588,87;076A48,45752F29384C0F204F612B;000301394F2E154763751F27,0F707A802629710D1920;4F2C2E2B383F443D433663,0F0147892015;201E27262322,88;0F000102700D335282835329711563,3804897D4520;6A0339332C20528283531563,29713801000F0C47806B;005088,87;291503000D332E53261F2075,0F5238584F45;003988,87;3435000788,87;150001021745512E443D65262322,2B63387C;394888,87;00036A7415384878,45751F20240F522E824F;00010203332C2E2F1558631F,0F1920707A29712646;0717363F1A2C4F3A67433D8A,71290F010347;',
        '0007010618111A332D302F15262322271E530270164C,560F7129;003988,87;073918111A17332C2E71292322271F1E20481D45548283,38002F70;700F181126151E20001A7919,;5040262788,0F712903;7911192C2E302F00030401060F1571292A75,707C2052;0079701811072C2E01060F33152627200C7A1A302F4576631F2B,80523829;39343588,87;040370181123220F1326271E2021,2915;262322271E202188,1F45;0001060403232226380F767754,56802015;0070071A010618110F5B52836775,632620;00010607155B5C26271E2021165D82,38470F29;3948007888,;528283530339454F0D297115332E2F637520,0F007058;5282835444360F11756415,2C2F29016B472E2B2038;0039504088,;0F0001022E792D3E75663D19,472063703852292B;0F000102032971152C2E19,4720637038522B;343588,87;0F52828303700D332C29712E1F27201E2322,15450175;00261F23221E201D2188,;003988,87;52828354754C2971150301022E,0F63206A0938268941;151A82832627202322,580F7003632E1F297C;00394C786F88,0F2E4420;0704031118528283542D2E4E49201F1E1D2127,292B000C;0F706A151E201D528283544466,47010C2E292F2C38;394088,71294709636F7C44;0F0003450D3329712C2E2F1575,528963705A20587D7C;0F111829711500010370390D332E750C201F,4552822F382B80;0034353988,522E1F;0F1118032A0D545282831A802D2C2E2B71296366774744201F26232221,010900150C;0006261F1E201D212322,0F29381118;0006547677,0F5229151F20;111800010206071979697C67474475664C,0F16298920;000102071282542627201D210C4C78,29580F2E6352031F;00784C793988,0F29702E1F2089;0F03390D332C1929711563261D2E2322,382000521118750C706B;702D155482830F63262720,53292F017D4F38442B2E1F47;4088,030F565A61206B;0F181179005B712980152D4E2A0D533358,52702089;0776776A742623221F200C211D1E,11180F2F5206802B;00343588,060F52;07565A5282835463756677261F20,010F152961;0007363F8A3988,09292C20890F;0F11181200171A7919547638,5215201D;181179000607040D03302F5282834F3A45512B1533664C47,090F702E2089;828354151A4C200C1E23221D212726,030F522E1F;0039787988,1F2E20;111871545282832979397B7C69152B2A0D33485324251F1D1E26,6B00702F800C20;0F18110001027939706954528283685D15565A75201E1D26,29032E;00170F79191A6540,712909387C20;00676588,0F20;0F00071A706A717677492923221E202726,80522E1F;343588,0F5220;111800020D041A796933483E5347446563751F1D212026,010F09150C;262322271E201D21,52450F4F;0038262388,5215;040307177938494C,0F262070;',
        '0F00030102705282832E544779,2920454F754C38;00010275261E0C2322,6303706F0F292E1F;033945302F828375262720,297071000F2E1F38;000102030F7039453319152E2D2F63751F0C1E20,71290D3847;7917155B0001025D,0F522E3820;38394088,0001202B;0F00175058,5D6B80382E;110F0001702C2E7129201F,5206;0007396A48343588,0F20;111800012A0D2C705271292E201F,15386179;3F656477,0F2B712920;11000170792C2E7129,0F52201F;110F00017052792E1F1E,71290D2B20;0001020626232227201E,0F2E03801F;1179302F832627201E,0071292E1F;0001067052832E71291F20,030F384775;79026A17657603,522E201F;004088,0F014720;010206110F452C2E7129095B5226232227201F0C,58804B036B2B38;69687011180F791966762627201E,0352292E80;00077B7C4834353988,295220;00170F332C2E2D2F802952443F26232227201F,15637C38;006526232227201F,88;0403010218111A17332C2E2D2B15713E6575,4538206429;0007030401021811171A0F2E2322271F1E706749528382,202F2938;000102081A158382262322270C1E,700F292E;1A162623227954,0001710F29;00061A161718110F292A0C26271F21797001022F49,47;1516291211020056,063820;3840,0001202B88;0403080618111A16332E2F152A09537919702C5445490D75072B,80632038;0001081811171A160F1571292A26271E20396476452B0D,632E5238;7B34,87;010206040318110F2E292A27200C70072C302F541F392B49,3815;64262322271F2021,0F2F2938;0002070818111A16175B153E445D5452838265647576,2038454F;000701020618111A1752838254230C7027,26203829;000102261E2027,03476F700F2971382E;15391A302F82835475662627201E,0F702E46290047;0F150370002E0D3979528283532971331F1E20,477D;0F0302791566046F,29710D722A38528283202E45;383940,6370018975202B454F66;3907,87;0F000170390D332E2971152F63751F1E20,52836A38;00397C343548,88;000102030D70332C2E29712F534426201F1E,0F3815;6526232227201F,87;7100030170391959152E2D2F2B,0F201F4F75668938;0F030102392E15634447001F1E,293845200D7075;00161A5D454F153826201E27,7D0D29;1A454F548283,87;0F00010203700D332E2F1929711552828353261F201E2322,;0F171170792F5B1566770001032C2B802D,29387C2071;50400088,87;5C11180001027170520D2983822B15200C,03802E3863;2E260F27201F,523815292F1A;7B7C343588,520F;00060724232227261F2025,520F157929382F;003F651F0C2027232288,0F29;00076A386563,0F7D892066454F52754C;',
        '00077663,0F29713820;000304080618110F1A2E2D0D3371292A2C302F7566010239454E802B,6320;181117332C2E1526232227201F1E3E,38030F5229;0103040818111A155283262322271E20217A79708230,38472E63;00483F,6338200F;03041A174533302F56795B3E808239528354,700F2920;17262322274050,80387C6B;000F01111A1615292A2627200C2C670279538283543E49,6345;00010618111A16332C2E2F2D27200C07483A450D,15528338;34357B7C,87;002E2F18110F5B3315292A26271F20210C7A70710102393E19,035A;000304111A33152D2E302F71292A5283530770022B,0F634520;1A16170F13152654,3852204F;0018112C2E01040607332D292A09270C2322696870302F47023945,38205280;18111A16175B3315262322271F1E201D215D828354433E363F754551,00030F29;00700F1715262720,472E3863;3F87,2B38200F;030402111A16175B4F3A2B153E0079015D54528382696A51,7006200F;000F1320,63803829;0079181A165B332F2B262322271E2021030469702D4E49712930835D,454F;00030401061A16170F332E71292627200C02696A45514F0D2C2D4E497A,2B;007C343588,87;0F00701783821952712C2E1526271F,03380620;52838253000103297115332E2F19,0F89514F6A66207545;6A170F19,5845754C201F4F3824;0F000301020D297115332E1F0C,16522026;1545332C2E2F83826375662620,0F0003700D71292B;000102060F17705282797823221E2027,2E7129;3F74397677658887,0F384720;5452838203152F802C2D,2E1F20897A700F29710C7D;00010F17505840,565A803852828363;0F00030102700D19297115332C2B535448,2E452089;0F03000102700D29713963451F0C20,528238542F158061;34357B7C88,030F;118283155B20272E1F21,0F0338;0001020607036A5D397C2163664744,0F4E252089;5482836376656419786A,29803020;0F18110001702C2E71291F0D2B152F2127,52821620;1783822C2E5B26201F,0F010D29;00797083821754,0F2E472D4E1F;000739483F66,0F20892B;54528283036F796A153E65,712963;0F17795B54828358,52807C38;0F5C111800015B712952831F20,756A25;01067071292C2E1F20,1103150F52;343588,0F715229;0F170070792C2E261F,0403412322;03027011170D332D2C2E2F716152828354,010F201F;6A170F1963766F,5452201F;030102703945802D2C512B7129092322270C7566,112E5282;1A5D453A332C2E2F4B25262322271F201E1D21,000F7047;007983821A160F1719,632E20471D6B;483F88,87;040318111A16175B795452838215302F6563395D,38702920;000F1323222627,2E38290315;010203040618110F3315292A271D200C6339171A712C2E30491E21,7A;0039262322271E201D210C0748766465776A,150F3829;3435,87;007018111A1617192E15382627201F656477,4F09;00030418111617332E2D2F292A52835407020D302B,090F4520;',
        '528283530003010215392C20,1112180F29560D2E1F7545;004D64547588,0F29;2A0D11180F52838253037039156358332C2E,38200026;00702C2E164C157126271F1E202425363F,29386A032B;005088,032C2E1F;0F00010206030D7129302F79802D7C2B5C4744,11701D20528338;000403110F527079156523221E2027,0129802E1F6B;00384088,15296763;000102060775261F20,71290F7015;1100010206702D804E2B2620,0F52540D;0007397B7C343588,01065220;0776776564,000F293820;00010206111803302F565A802D4E2B871F261E0C,0D0F52;00763988,0F20;110F70528375660D7129,012E1F2026;0001020617385482,030F47202B6B;0039787088,2E1F89034F206B;0706397B7C794C636A48,520F71294720;02703918110F7919155282756626232227201E,012C2E1F0C;00384088,0F202E157C;5C0001020652825B0E03804B2D4E2B752024210C,292E565A;000103020611187B7C2D4E616439201E0C26,522E4744;000734357B7C3988,0F52822920;87,;0004031811171A5B332C2E155D52,0D292045;0088,090F15;18110F197982832E230C271F1E7A70525463,26202915;00011A1615262322271F1E200C214C,472B0F11;00190F153917701A48,472E1F2003;11037B7C2E2F7129,0F5220;007952151E20,0F2E1F;00384740,0F20;0006522E261F20,0F7129;0F11000170717B,522E1F;007B7C3988,87;076564,0F2920;,87;393588,87;0F03700D33195283825329711563,01260038206B;0F70161715232238828326271F20,7D0352;70504C7888,87;0001030239450D297115332C2E4C,0F54207052833863;110F03706A795215636626271E,0C012F38062C292B;0040395088,87;000103392E54827548,19700F58157A2038;00010203390D3329152C2B751E20,2E1F544753524582;0039343588,87;3F4888,87;000102033911170D3319152E2F0947442627201F,;393488,87;0F0102037039330D5283822971152E1F0C,0026206B;001A1715828344363F261F1E200C2322,0F476B520363;0070784888,0345201F;000102031118396375664819,1D413870208029;0370823F0F6A5215,010D582E1F202C2F29;00387765504088,0F157C;070039201F0C2788,06030F292F;003926271E20747677642322480C06,2E1F;00073934357B7C88,0F52;073F7765644888,0120;',
        '0F110001702E2F71291F20,06;110001527B7C2E75,0F20;0F11707129,2E1F20;1811002E1F8283,0F20;0F1A0070153871291F20,7A76;3F6588,87;0F1811700001062E2F1F20,7129;18117915384C,5220;07404826271F1E2088,87;0F00010203700D332E2F192971152B52828353631F20,;00037039041A26271F1E202322,0F2F2C335129452E0D3A;0039343588,87;0F0001020370332E2F0D19297115637566302B2C3979,;528283000103451915332C2E631F2720,29716A0D0F70;653988,87;0F00010203528283157033,752971206B452F2B262E;0F000102700D332C2E297115383F631F20,034756;394888,87;528283530370331929272E2B2F631F1D20,0F156B38;1979,3F2F2E45207D;074048261F202322,0F71454F15000180;0F000102030D70332E3919528283532971152B2F201F0C,;0001020339161745514F2C190F1A152E2D2F304979,;3435073988,87;11180F5C000102030D332C2E195329711563261F202322,5283;5282830001032E1570637566302F391F,0F47297120;39701117302F713819297566,004551152C2E201D1F;0001020370528283631575712D2E4E3E581F1E1D,292C2B45262080;0F82833D363F776424,15462F2C52032971;3F8A657788,0F2029702E7D;11180F0001020339700D29716375662E1F2620,38155680;03111A171538193E3F,0F632C2E70454F200C;110F1A6A702C2E1952828353712F6375,4520150001;5282835300010670802D2C2E4E155B201F1E232221,380F71296A;0F1118000102030D70332E2C192971153953631F0C262720,52836125;000739343588,0320;18110F3900010203700D3329711563752E1F0C201D,38525D;000102031811392E2D19528283543E4463751F20,152F1A290F;00657688,6B0F52;0001020311180F702E1F7952828368332D6749443E46630C1E1D21,292B20;0F1700707129385C363F3D1F1E232226,80412B202F;00398A7988,0F20;0F111800017C5C2C2E7129,5270153820;0F1118795B65170002195D,52382E8920;0007711F204840,010F291538;000106025B75712904032D302F382B2A0D801E20,2E1F0F;0F1118060300017B7C792E39767566261F20,71298051;000739343588,8920;074888,06520F38;5282835B79037B7C802D2C2E4E302F2B38493D4463664C1F2021,0F0D7129;63767788,522E0006206B;0F00010206181139702E1F686F6A792D2C304E153375664923221D21,52296B0D80;88,;3F8A6588,1F20;0370110F45510D3371290941614C522623222720,;1966583F6588,87;03700F,79192C2E2D715275262322271F201D21;0F11700001522E71291F20,2B;0F117B7C2C2E71291F20,5203;00343588,87;',
        '00343588,7129565A;00060403702C2E4C154947443D651F,0D29;528283530339332E152C2F58631F20,380D000F29;006588,29704720;0F1118175C000301027039450D29332C2E2F15631F,895820;0F161A17452F0D33712C2E2B5443633F,150170208903;70786288,06802E1F;0F0001020370390D332C1929712E157563548283534C,202489;5B000102073911522C302F3A678B363F33490D482425200C1E2322,0F15382E1F61;00076A74504088,5229702C7D;0F110001708371292E1F20,0338805156;111817000106702C2E71292A0D33802D302F4E2B44,0F522520;0007343588,290F71;0F5B8270000102060403161A494447,386A418920;11177B7C52832C2E5B1F20,060071292F0F;003888,52201F1D47;000102062A397129797B7C2E1F2425,162F5D2026;0F172C2E387129363F7566512D4E4461,0103475220;008254,06462F2E1F;0F181117795B5C007054292A0D690403332D2C2E66632B3D,89454F38;030270170F45513A2C71295282832A0D532D24252623222720,155A382E1F;00076A0F3874485040,06707C25;5B71297000010611182A0D39792C2E332D4E80151F202621,52454F38;00077665776488,52820F2089;34357B7C7788,0F29;0F705B0004037C5D15653F1F26,522B4738;181179190E332C2E2D52637566262322271F20,;0076645088,87;0F1100017B7C702E7129,522B;1A38712975,0F20;0026271E20,2F2E1F;18117001061579,712920;0F11707B7C5271291E20,2E1F;0F00074850,8920;0F1811705200012E71291F20,38;18117000012C2E7129,5220;87,;0F18110001261F20,0352;037B7C2E2F261F20,0F;006388,87;0F030001027039452971150D332C2F6327,20528283;020F11161A17454F2C2E2D302F2B38434C,20700163;003988,87;0F00010D0302703352828353297115632E,2089454F;03027039450D332C2F2D2971528283636626202322,5815;006A5040077448,702B2C0F2F29;0F00030102700D332E2C192971155382836375261F1E20,;0001020370450D332C2E2D152971,0F528289201D;343588,87;52828354443D65002C2E15495D1F,0F417D712B3863;528283546315332C2E2F26201F2322,0F0D45002971756B;003888,87;393588,87;2C2E2D2B156343364C,0F4729710D708920036A19;00788A88,0671292E;11180F000152548371702C2E2D4E303348492A156144474C63,89201F384506;0F0300017039712952542D2C302F80380D2A363F3349483E616320,1118150C1F2E;0F006A385040740717,1F7063;0F1118000102030D70332C2E192971158283535426201E2322,471F;77766564000788,0F52201E89;',
        '110001392E1F20,0F7129;00343588,87;0F1152702E2F71291F20,0001;0F1152702E2F71291F20,7A;00385476,521F;0F528300012E7129,0920;363F6526232227201E88,87;0F11700001397129,2E20;0F0001067C1F20,5229;0F705215261E20,012E1F;0F001A651707,565A58202E1F4763;297115030102195282830D332C2E,0F1F5863201D89;0039077426271F1E20,0F29713852822B63;343588,87;0F03706A4F0D332C528283532E29711563,450075;0F0370010239332E2C19528283532971156375262720,;003854637519,205D1D1F52151E21;0001020352666A,0F7020262938172F;00261F2322271E200C88,;007082624C,0F38202E7D4F45471F71;0F000102030D332C2E195282835329716375261E2322,;0F033915666A52261E272048,382E2F6329712C01;003988,87;00010203450D3329152C2E2F5375,0F63896A1D38;39006A26201F,0F520D38580629712B;343588,87;528283542E03700F111869565A7566631F1E2021,297138000C;0F1118000102030D70332C2E195282835329711563261F0C20,47457525;00173882546365756619,466115201F701D475224;0F18000102111A1703154F2C2E382D2F807566,716370891F207D;5D0007363F232227261E21,037C0F471F20;0F00701A17820E544C5C78,7129632E1F382089452F;2C2E5B000739337C38802D44484C2425201F1E272621,52297015;0F11185C0370332D152322528283636626271E,2F292C2E1F000106;000F7765,2E1F7C46;111879690001020370396A2E2D528283543E637566,0F380D582920;00013974150726271F1E200C,0F06520D297170382B45;34353988,0F20;0F528371295B795D2B155333565A446375661F201E272621,00016B0C41;0F181100010603797B7C802D302F2B6743441F202322,2952477D25;11180F71297000010604032A0D793969302F33802D636675,201F52565A1E;11180F000704030D7C684580302F153867534775,702041;00262322271F1E203F8A65,52290F0380;002C7080305C784C62,2E1F4720;000704036939487C4466,0F70112938;54528283700001020339482D301571565A363F637566,06292B201F89;005040,522E1F0F2C20;18110001032A0D835B7129302F791533536678,0F20891F1D;076A7626271F1E20,0D0F29382F2E;7B7C343588,0F70;11180F71297052828354792A0D33802D153853201F1E212627,012F564766;0001067011185B0D332C2E2D712909262322271F200C,0F526325;00195475667688,5229152E20;0004037B7C0F79494766754667,802938692089;003F657788,7152290F032B;525400045B17791A565D754C7866,2E1F207C;71297C790001062A0F802D,5215705D;0470170F191A134C8283662426232227201E,;00170F7665776488,;074888,87;',
        '0F0001020D700339332C192A82832971152E1F0C20262322,0652563861;1F2027260076232288,0F295282;34357C88,0111180F2920;0F030001022A0D3945297115528283637020,476A382E1F44;5B11180001020328700D332C2E195282837115632F751F2720,290F4766;0F0001021A175D2C19152E302F7182836379,8920704F754541;0F11180300706A2E1549466319,292F26806B382B207545;00704F0D332C2E2D15363F261F20274C,0F2906036F47;0F11180001027039302971542F7526201E,63472E151F58;390001022C2E302F1575804B2D261F20,0D0F0319707D5229717A;076A79040363660F5D363F,52292E1F20382F155601;006A38075040,0F630141202B454F;0F1118000106287129705B032C2E302F802D4E2B201F,5283583841;002876396577261F20,5282290F;07343588,0652;181100012A0D52832953411E20,2E1F0F4715;0F0001062871292E7C528283032C5C2A15767765,11185D89206B;0F181138171A7975665B52835415,47701F8920;0F181100062839707952542C2E302F03565A7566441F1E,0D29802B20;0F280001363F8A4326232220,2E1F47032F7D;0F17000728705448757A,522E1F15562F;00076A74173926271F1E20,0F7029522B;04170F79195D1A637566363F76,01522E8920;700718111A302F717566,0F2B2E20;11180F000128032A0D7129302C2E2F2D802B09411F1E20,52835438;0076777566262322271F201E,0F11185229;34357C88,8920;010670170F0E3A294152828354262322271F201E,2E181544;01023918112E2D493E52756624262322271F20,;04033918110F0D2C2E7129332D2B72528283547566,;017018110F1A2E15495247828363462322271F,;0F000106387129,2E1F;0F707500261E20,382E1F;181100012C2E2F1F20,0F52;181170792C2F7129,5220;07504088,0F01;0F0001062E7129,5220;7665261F20,0F29;077C343588,87;0F18117052000171291E20,2E1F;0F181100017B7C2E71291F20,036F;181100015B3875,2E20;0F000102702E15471F1E,294F2B452C2F2680;0F000102700D332C712E15261F201E,80036A614738;0001020370392F80712B546675201E26,1F58472E15;0039076A7426271F2048,0F79197029717A38;04031975363F6366,0F5401202C5282832E2F;3807504088,87;00020370454F0D3933192C2E2D156375261F202322,0F71;003F261F202788,87;343588,87;002627651E20232288,87;0F0D33000103452E528283297115752620,63386F70;0003391982835475,2E1F0F6A702971722A0D;0F00010203703915632719792322,8026204529715875;002E4344793F26271F20,03702C2F292B381A;001A2B5448701938754C,152E202425;0039332C2E2D2F152B4644261F1E,0F7019382971637A;11180370392A0D3329712C2F156375795B5D,450C8900382E1F2001;5040000738,0F7D7C584F012063452B;',
        '000150402627,0F292F2B;0079110F0304062A528323222627207A19701A2C2E2F5D82,2945;001779332D2322271E2007760304,38290F;0007343588,71297063;0004037039180F332D152952262322271F0C533A82,41178047;0079192E2F030417332D1552837A5D,4E20;001A170F1379232227761926,712938;87,26205282;001A170F5B332E2D7129261E203E5D,15035282;007022230726,2E17712952302F;00077A7088,87;87,;07262723221F40,0F712952;0F000102070D70332C2E19528283297115637526201E2322,;03392D2E332F211D201F1E27,0F7015380029710D1958;343588,87;0F0102700D332C2E2F0319528283531529716345261F2322,;5282835300031929150D332C2E63,0F21704520897175;006A79190F6F2627,6B4620453829;00211D1E232288,;0F7045332C2E71201F1D21,47011552295303;00704888,87;0F00040370396A742E15444948,4589384F20;5282835303702971150D2F,38896A6D0F20;0007504088,87;0F00010203700D332C2E1929711552828353637526202322,;393588,87;007C343588,87;0F11180003706A4F0D332C2E192971155363751F20262322,5247464161;528283545363000103332E15,0F1F197029710D757D20;0F006A1938271779,565A4575522F801F1E63;001D23221E2788,52290F2E1F20;0F175B3975660745514F2B4825201E211D,010352292E;007007482088,2E1F5847;0F110039702C2E522F1574487B7C2D4E804B,098920453861;111852828353546319297115030D332B2C,060F892E38201F;0007504088,0F291570;030102062C2E543E3D636679,380D1946297100;0339332C2E302B66201D1F27,0D2971010015520F6B;34357B7C88,7129;0F111800010203700D332C2E192971152F4B49471F270C2322,52562B20;0F111800010203391929710D1552828353,2075708945630941;00177688,0F52804F25;00396577647969271E2322,52012E1F262061;1707702C2E71291F20,0F52000106111D;0070,0F292C2E791F;0F18110001702C2E7129,6F454F098920;705282835B0D2F71,0F202E41;0007504088,060F71702F29;0F5C5B0001032A0D7052832C2E71291F20,1118517D46;07762623221F1E20,000F1552296B2F;88,6B;181100012A0D2C2E2F2B2D304E447129831F,0F0941613820;03020E0F18110D332C2E2D2F4971293E615244756653,892025;000F76,032E1F522C292B;0028397976771E232227,0F522E474420;7039170F45513A2C2E7129242526271F201D,0001035215;0001027007824878,2E3889201D;703911170E2C2E2D2F4B15712952633D,092B8920;03047039171A533852443D363F,;',
        '111879076A1A171523221E272024,5229700F1D012E2B0C2F;390050404C88,0F5282296920;261F1E20232288,52290058363F;0F0001020370332C2E2F1575261F,2971476A45825238;0007343588,0F292F7020;00021719792B155D5466774962,010611180F2920;0F1118528283530001035C702971152B332C2E63201F1E23222621,6B75452D4F80;00177179546A76,0F52443D1F;0001020603700F7B7C2E1F692D48302F565A586366240C21,2B151A2920;0F1A1716007015713F261F2720,5263587D2B4703;005C702C2F802B154C78,5A562E1F2089454663;00037039454F0D332971152C4C48,090F476341382E;11185282837975661271393D692D15565A201E262322,292F060D0C;004088,0F52;767788,5282002920;0F111800010206032A0D097170292D302F1575761320,521F4725;000739343588,520F;181179828354637566,0F52290120;5C0F1811790070528371291F20,2F03805125;003854767788,2E1F5220;0F18110001707B7C0D7129,52565A152B20;170007386A7448363F261F1E,030F79636F20;11180F000102587B7C5282837971302F804B2B497675,09612E1F20;705C4C39171A4F0E7971295B5248,0F2E1F1D;076A171552837982546578,712970010F;004C504088,0F521547;7665262322271F201E21,0F00298071;00010206090D5B7952828354685D7B7C443D77656366201F1E,030F47454F;343588,87;790F181113332C2E2D302F1554,70012038;00040301067018111A0F332C15292A261E200C7A7919712F5D52828354,5617454F;003826232277,632E2052;000106073018110F3329271E0C7A0D75,38262015;0F005B261F20,2E2F;384C,8920;076A696819,0F29;036F791E20,522E1F;00654C88,;262322271F1E20,7129;0F18117000012E71291F20,527A;0039343588,;1811795B5466,0120;0F1811705200012E71291F20,062B;003F88,87;000102035270392E2D5863,0F381D2B29212015;00391A6A15384C4943363F7448,0F0379472B63;00701A17794C0F302F715475,2E454F892024;000102037039714515750D33,201D381F092E0F11;5282835479036A2627201E,0F380D70297115012F;4C4088,87;261F201E232288,;002627241F1E20232288,;0039343588,87;0F0211195465756679,2F384570202B6A;0F0052037029710D332C15,7545584F89201D21;0F003854,20521D21;0F0001020370390D1952828353542971631F0C,1520;0F0001022E154826271F1E203874362322,0363;0001020370392F2971152B54754C,45891F0F2046;000370396A450D332F4B154C,0F20897D41381F2E;',
        '00790F072C2E0103047018111A262322271E7A302F5448637545,29381556;6A79363F65,0F292B71;000118111A332C2E2D1571292A23222627200C7A791970302F5D5282835456,387C454F;000118111A332C2E2D1571292A2627200C7A1979,387C;00040318110F1519262322271E2021,52821F38;0039343588,87;00390103040618111A17332C2E262322271E157A7071302F45631F2075,807C;000118111A16175B154C26271E200C232279302F5D528283547543,0F297C7A;074888,87;87,;010670181126271F202165,2938;000770171988,0F2E2038;000106040318111A170F33292A26276A201D0C7A71077C1F1E74694F,52;87,;5282835354037029711575262720,631F58000F2E3801;0F0001020370390D3319297115632E2C752620212322,;0339332C2E1575201E26,0F520D631F29712A724738;343588,87;0F00030D70332C2E3952828353542971156375,6B20;00010203396A79637566201D211E,29387D71707A;00076527262322,1552825A201D0F38;3988,;1500443626271F1E,29710F47380D195203;000788,;0F0370390D332C192E2971637547202322,5815;031A2B7915656A,0F177001204529710D632E2F;0F03700D332C2E2971152F52828363,01004547380C;0F000102030D7033528283534529711520,634758;006A6F391974,0F2E614447702C292F71201F3852;34357B7C88,0F20;11180F00010E715229702E79692C2D2B15093954444C66,2F565A8061;000102033945332C6375201D21,0F1929710D70;07487677393F88,0F2952151F1D;0F17000102060370392E52828353331F,452F2C266A79292B2038;161A0F1526271F4C,5861034738;3950177088,522E1F0F20;11180F0001020370391952835329712B632E7B7C792D2C8020,385D15;00046A7966444C7765,010C202F38520F70292E;70545282832E71291A7933192A5D5A5040,090C384F4520891D6B;0F11180006032A0D70332E011954828371152C202322,58477D63;0F111800037039450D2971332C632026,1F2E2B385282;003934357B7C88,0F20;00481F2023221E27262188,0F292C2E;18117900012C2E5B1F20,0F710D5229;000776776548,0F1118152E1F20;5254700001020612692D4E584647336375662E1F1E,71290D2620;006A583F232227261F20,0F29154703;00077088,522E1F8920;0F5C707971292C2E0E032A0D6A804B2D8B2B3348634C,521109154620;04795B3F651A5D,0F52010620;117154528283292C2E302D4E092A0D50407970443D,56804100;18115452830001712970802D2C2E302F2B2A0D78791F,0F20475861;0F1811000104037115454F7677657B7C392023222726210C,52092E1F;34350088,0F20;0F111800171A454F514E3A3871157765443D23221E262720,80612E1F;111800010206037939695482835D2D2E4E446375661F262120,0F52290D71;767779392623222788,152B1F1D20;000102060717706A33392D2E4E674447482322271E210C,71292B4F20;0F171511793F76584C,0347200C1D;000788,87;'
    ];
    Taboo.hourTaboo = [
        '0F520120,6D61;0F7082520115000255,80262F;707A000855,0102;0100380806,707A2E2C;0F8252150255,70717A7D01002C0306;0F707A0120002C0855,87;,87;0F71822952202C,7A7D0102;0F70825201150255,2E2C;0F295220380255,707A01000306;0F82295201200255,70717A7D2C;0F707A0120002C0855,80262F;707A000855,0102;0F708252150255,2E01002C0806;0F522055,707A01000306;0F700120002C380855,;0F825201150255,70717A7D802C262F;0F70718229527A202C55,0102;,87;0F702952200255,7A7D01000306;0F7082527A01150255,;0F70012000380255,80262F;000855,70717A7D012C02;0F7071527A2055,2E2C;0F522055,707A01000306;0F7001200255,;0F7071297A0115202C55,80262F;0F71822952002C380806,707A0102;0F70825201150255,7A2E2C;0F200255,707A01000306;,87;0F700120002C0855,7A7D80262F;0F7082527A1555,0102;0100380806,2E2C;0F20190255,70717A7D01002C0306;0F707A0120002C0855,87;0F520120,707A6D80262F61;0F7082521555,0102;0F7071297A0115200255,2E2C;0F2952200255,707A01000306;0F825201150255,70717A7D2C;0F7001200255,80262F;,87;,7A2E7D2C;0F712915202C55,707A01000306;0F7029018020002C38,;0F825201150255,70717A7D802C262F;0F70718229527A202C55,0102;0F71822952012002,2E6D2C61;0F7029527A200255,01000806;0F71290115202C,707A55;01002C380806,707A80262F;0F8252150055,70717A7D012C02;0F715220,707A2E2C55;,87;0F7001200255,7A7D;0F825201150255,707A80262F;0F7182295220002C380806,707A010255;0F718229522002,707A2E2C55;0F2952200255,707A01000306',
        '0F700120000255,;0F70290120000855,6D61;0F707129527A15802C381955,01000806;0F7101200019020655,707A2C;0F200855,707A2E01002C0306;0F7182520115802C0255,707A;0F700120000255,;,87;0F70297A01202C380955,;0F8252150255,707A01002C0306;0F0120000855,707A2E2C;0F7071297A01158020002C0855,;0F7082520115000255,;0F70717A01201955,6D61;0F7071295215802C3855,01000806;0F0120000206,707A2C;0F290120000855,707A2E2C;0F7082527A0115202C0255,;0100380806,2E2C;,87;0F707129527A011580202C380255,;0F7082520115000255,;0F71202C1955,707A;0F707129527A1556802C1955,;0F202C4B,707A01000306;0F71201955,707A6D61;0F70202C55,01000806;0F0120000206,707A2C;0F7101201955,707A2E2C;0F7129521556802C0255,707A01000306;01002C380806,;,87;0F7129527A0115802C380255,;0F82520115000255,707A2C;0F202C0855,707A01000306;0F7129521556802C1955,707A;0F700120002C0855,;202C,6D61;0F71295215802C3802,01000806;0F2002,707A01002C0306;0F29012002,707A2E2C;0F708229527A0115202C0255,;01002C380806,;,87;0F71295215802C380855,707A01000306;0F82520115000255,707A;0F0120000855,707A2E2C;0F707129527A1556802C1955,;0F7082520115000255,;,707A01000306;0F707129527A15802C3855,01000806;0F290120000855,707A2C;0F71201955,707A2E2C;0F7182520115802C02,707A55;0F202C0855,707A01000306;,87;0F0120002C086C,707A55;0F82520115000255,707A2C;0F2901202C3809,707A55;0F7129521556802C196C,707A0100030655',
        '0F70297A0120000855,80262F;0F822952202C,0102;0F71822952012002,7A2E7D2C;0F712915202C55,707A01000306;0F718229520120002C380802066C,707A;707A01000855,80262F;0F7082527A1555,0102;0F7001200255,2E2C;,87;0F7071297A15202C55,01000806;0F7082527A0115000255,80262F;0F82521555,70717A7D012C02;0F70718229527A200255,2E01002C0806;0F52,0120002C080306;0F7182295201202C02,7A7D;0F708252150255,01800026082F06;0F7071297A20002C38080655,0102;0F0120000855,707A2E2C;0F708252150255,0120002C080306;0F822952202C02,01000806;,87;0F7071297A15202C55,0102;0F708252011500380255,2E2C;0F202C4B,01000806;0F71822952202C0255,707A;0F7082527A01150255,80262F;0F71822952202C,7A7D016D02;0F712915202C,01800026082F06;0F71292055,707A01000306;,707A01000806;0F7082527A0115000255,80262F;0F71822952202C,0102;,87;0F712915202C,707A01000306;0F825201150255,707A;0F70825201150255,80262F;0F70717A201955,0102;0F7001200255,2E2C;,707A01000306;0F7071297A15202C55,01000806;0F70297A012000380855,80262F;0F2920,70717A7D016D2C02;0F708252150255,2E01002C0806;,707A01000306;,87;0F7082527A01150255,2E2C;0F8252150038,707A010255;0F82520115000255,70717A7D2C;,707A01000306;0F5220,01000806;0F70297A0120000855,80262F;0F712915202C,016D000806;0F70718229527A01200038080206,2E2C;0F822952202C02,707A01000306;0F825201150255,707A;0F7082527A01150255,80262F;,87;0F7071297A011520002C55,;0F708252150255,01000806;0F8252150255,70717A7D01002C0806',
        '0F71822952202C02,707A;0F7029527A0120000255,;0F7071527A202C55,87;0F71295215802C3802,707A01000306;55,707A01000806;0F292055,707A2E2C;0F708229527A202C0255,01000806;0F708252150255,01000806;0F202C0855,707A01000306;,87;0F8229520115200255,707A2C;0F7082527A01150255,;0F7129521556802C1955,707A;2C3808,707A01000306;70297A0120002C0855,87;29202C,6D61;0F708229527A202C0255,01000806;0F71522055,707A2E01002C0806;0F7129521556802C0855,707A01000306;0F7082520115000255,;0F71290120002C080206,87;,87;0F0120004B,707A2C;0F8252150255,707A2E01002C0306;71295201155680002C0855,707A;0F70290120002C06,;0F822952202C0255,01000806;71295215802C38,01000806;0F7071822952202C0255,01000806;0F70718229520120002C080255,;0F70718229527A202C0255,;0F7082527A01150255,;0F70717A01200008190655,87;,87;0F8229520115200255,707A2C;0F708229527A0115202C0255,;0F707129527A011556802C026C,;2C38,01000806;0F202C0855,707A01000306;0F70712952011580202C380255,;0F718229522002,707A01002C0806;0F295201200255,707A2E2C;0F707129527A011556802C026C,;0F8252150255,707A01000306;0F70297A01202C0255,87;,87;0F8252150255,707A01002C0806;0F8252150255,707A2E01002C0806;0F712952155680202C0255,707A01000306;0F7029012000080255,;0F70718229527A202C0255,87;0F707129527A0180202C0255,;,707A01000806;0F822952202C02,707A01000306;707129527A01155680002C0855,;0F70822952011520002C0255,;0F822952202C02,01000806;,87;0F8252150255,707A01002C0306;0F82520115000255,707A2E2C',
        '0F82521555,70717A7D016D2C02;,2E2C;0F5220,707A01000306;0F0120000206,707A;0F825201150255,707A80262F;0F70717A202C381955,01000806;0F0120000206,70717A7D2C;0F7129202C1955,707A01000306;0F7082527A0115000255,;0F7082520115000255,80262F;,87;0F70717A0120003808190655,2E2C;0F8252150255,707A01000306;,2E2C;0F7082527A01150255,80262F;0F70200006,7A7D016D02;0F7071297A01152055,2E6D2C41;2C38,01000806;0F290120000855,70717A7D2C;0F70825201150255,80262F;0F702920002C,0102;0F0120004B,2E2C;,87;0F70717A0120002C3808190655,;0F7082520115000255,80262F;,0102;0F7071527A01200655,2E2C;0F702002,7A7D01000306;0F7129011520002C,6D41;0F70825215380255,01800026082F06;0F200006,70717A7D016D2C02;,2E2C;0F82521502,707A0100030655;0F7082520115000255,7A7D;,87;0F70717A20002C3808190655,016D02;0F825201150255,70717A7D2C;0F7129202C1955,707A01000306;0F520120006C,707A55;0F7082520115000255,7A7D80262F;0F712915202C,707A016D02;0F70717A20381955,2E01002C0806;0F29202C02,707A01000306;0F82295201202C02,707A;0F70825201150255,80262F;0F7082521555,7A7D016D02;,87;0F71202C38081955,707A01000306;0F82520115000255,70717A7D2C;0F70825201150255,80262F;0F70527A2055,016D02;0F0120000206,707A2E2C;0F712915202C,707A016D00034106;2C38,707A01000806;0F82520115000255,70717A7D802C262F;0F822952202C,0102;0F7082527A01150255,2E2C;0F708252150255,7A7D01000306;,87;01002C380806,80262F',
        '0F8229520102,707A202C03;0F7182520115802C0255,707A;0F29522055,707A01000306;0F70718229527A01202C0255,87;0F707129527A15803855,202C03;0F71822952200255,707A2C03;0F71822952012002,707A2E2C;0F7129521556802C0855,707A01000306;0F700120000255,;0F70010255,202C03;0F707129520115800038,202C03;,87;0F29522055,707A2E01002C0306;0F707182527A0115802C0255,;0F70297A55,202C03;0F7071297A0255,202C03;0F718229520120002C080206,;0F29200855,707A01000306;55,707A2E01002C0806;0F7071295201155680000855,202C03;0F01004B,202C03;0F825201150255,707A;0F7129521580202C3855,707A01000306;,87;0F70297A55,202C03;0F707182520115800255,202C03;0F7182295201002C38080206,;0F29200855,707A01000306;0F70297A202C02,01000806;0F70297A01000855,202C03;0F712920,707A2E01002C080306;0F7129521556802C55,707A;0F8252150255,707A01000306;0F8252011502,707A55;0F29526C,707A202C0355;,87;0F718229522002,707A2E2C;0F71825215802C0255,707A01000306;0F70202C55,01000806;0F707A01000855,202C03;0F707129520115800038,202C03;0F290180202C380955,707A6D61;0F7029527A2055,01000806;0F707129527A1556802C0255,;0F71520106,707A202C03;0F70825201150255,202C03;0F718229520120002C080206,;,87;0F200255,707A2E01002C0806;0F70718252011580000255,202C03;0F715201066C,707A202C03;0F290180202C380955,707A;0F71295215802C3855,707A01000306;0F70717A20190255,016D00086106;0F712952,0120002C080306;0F70718229527A0255,202C03;0F7182295201002C38080206,707A;0F8252150255,707A01000306;0F70202C55,01000806;,87',
        ',87;0F822952200255,70717A7D01002C0306;0F70825201150255,87;0F7082527A01150255,2E2C;0F70202C55,7A7D0102;0F7029527A012055,2E2C;0F2920380855,707A01000306;0F82520115000255,70717A7D2C;0F7082527A01150255,80262F;0F52202C,016D02;0F70825201150255,7A2E7D2C;0F71822952202C0255,707A01000306;,87;0F825201150255,70717A7D802C262F;0F712952202C,0102;0F70527A012055,2E2C;700855,7A7D01000306;0F7071297A011520002C55,;0F8252011500380255,707A80262F;0F7082521555,010002;0F71290120,707A2E2C;0F71822952202C02,707A0100030655;0F7082527A01150255,;0F7001200255,2E2C;,87;0F707A01200255,2E2C;0F82521502,707A0100030655;0F0120002C086C,707A55;0F7082527A01150255,80262F;0F712915202C,016D02;0F2901203809,707A2E2C;0F708252150255,01000806;0F7182295201202C02,87;0F7082527A01150255,80262F;0F7082527A1555,0102;0F7071297A01152055,2E2C;,87;0F707A01200255,;0F70825201150255,80262F;0F52202C,016D02;0F71522055,707A2E2C;0F712915202C02,707A01000306;0F718229520120002C3802,6D41;0F7082527A150255,01800026082F06;0F71822952202C,0102;0F70527A012055,2E2C;0855,707A01000306;707A01000855,;,87;0F522055,70717A7D012C02;0F825201150255,707A2E2C;0F71822952202C02,707A01000306;0F707182295201202C0255,7A7D;0F7082527A01150255,80262F;0F71822952002C380806,016D0241;0F70200255,2E01002C0806;0855,707A01000306;0F700120002C0855,;0F70825201150255,7A7D80262F;0F712915202C,016D02',
        '0F290120002C0855,707A;,87;0F7071295201155680002C0206,;0F70822952011520002C0255,;0F70297A01202C0255,87;0F70712901158020002C380855,;0F8252150255,707A01000306;0F71201955,707A2E6D2C61;0F70297A0120002C0206,;0F710120002C3808190655,707A;0F290120002C0855,707A;0F71825215802C380255,707A01000306;,707A2E2C;,87;0F7071295201155680002C0855,;0F7082520115000255,;0F7120081955,707A01000306;0F7071295201158020002C380206,;0F0120004B,707A2C;0F71201955,707A;0F707129521556802C55,01000806;2C3808,707A0100030655;0F71201955,707A;0F70822952011520002C0255,;0F01200255,707A2C;,87;0F7129521556802C0855,707A01000306;0F70290120002C,;0F2901202C,87;0F71295201158020002C380206,707A;0F01200255,707A2C;0F71201955,707A2E016D002C036106;0F7129521556802C02,01000806;0F8229520120002C02,;0F70297A01202C0255,87;0F7082520115000255,;0F202C0855,707A01000306;,87;0F7071297A0120002C19020655,;0F82520115000255,707A;0F70297A01202C0255,87;0F71295215802C3802,707A01000306;0F825201150255,707A2C;0F71201955,707A2E2C;0F70712952155680202C0255,01000806;0F70290120000855,;0F202C0855,707A01000306;0F70718252011580002C380255,;0F7129202C1955,707A;,87;0F707129520115568020002C0255,;0F8252150255,707A01000306;0F70717A201955,2E2C;0F70290120002C0206,;0F01200255,707A2C;0F290120000855,707A2E6D2C61;0F707129521556802C55,01000806;01002C380806,;0F71201955,707A;0F718252011580002C380255,707A',
        '0F708252150255,01000806;0F707A010255,202C03;,87;2920002C0806,0102;0F7082527A01150255,2E2C;0F200255,707A01000306;0F7029527A0155,202C03;0F7082527A011500380255,80262F;0F82295220,70717A7D016D2C02;0F70717A201955,2E01002C0806;0F70527A2055,01000806;707A55,0120002C080306;0F70825201150255,80262F;002C380806,707A010255;,87;0F2002,707A0100030655;0F7029527A010255,202C03;0F0120002C4B02,80262F;0F7071297A15202C55,0102;0F70717A0120003808190655,2E2C;0F8229522002,70717A7D01002C0806;707A55,0120002C080306;0F7082527A01150255,80262F;29202C,7A7D016D02;0F7082520115000255,2E2C;0F71202C38081955,707A01000306;,87;0F70825201150255,80262F;0F7082521555,0102;0F7082527A01150255,2E2C;0F7071297A15202C55,01000806;0F700255,0120002C080306;0F825201150255,70717A7D6D802C262F61;,016D0002;0F70297A0120000855,2E2C;0F70200255,7A7D01000306;0F708229527A01150255,202C03;0F7082527A011500380255,80262F;,87;0F70717A201955,2E2C;0F708252150255,01000806;0F708252150255,0120002C080306;0F7082527A01150255,80262F;0F70717A2000381955,0102;0F290120000855,70717A7D2C;0F70202C55,01000806;0F70527A0155,202C03;0F70825201150255,7A7D80262F;0F7082521555,0102;0F70717A0120003808190655,2E2C;,87;0F7055,0120002C080306;0F70825201150255,80262F;0F7082521555,7A7D016D02;0F70297A0120000855,2E2C;0F71202C38081955,707A01000306;0F29522055,70717A7D2C03;0F708252150255,01800026082F06;0F522055,707A0102;0F71201955,707A2E2C',
        '71295215802C380855,707A01000306;0F825201150255,707A2C;0F822952011520000255,707A2E2C;,87;0F708252150255,01000806;0F8252150255,707A01000306;0F70718229527A202C0255,;0F292055,707A2C;0F82295201200255,707A2E2C;0F707129527A011556802C55,6D41;707A55,01000806;,707A55;0F70297A0120002C0855,;0F7082520115000255,;,707A2E01002C0806;,87;0F718229520120002C080206,;0F825201150255,707A;0F82295201202C02,707A55;,707A55;0855,707A2E01002C0306;0F707129527A1556802C55,6D41;0F7029202C55,01000806;0F700120002C0855,87;0F707129527A15802C3855,01000806;0F708252150255,01000806;0F71822952012002,707A2E2C;,87;0F7082520115000255,;0F825201150255,707A;71295215802C380855,707A01000306;,707A2C;0F0120000855,707A2E2C;0F7029012000080255,6D41;0F707152202C,01000806;0F71822952202C02,01000806;0F70718229527A01202C0255,;0F708229527A0115202C0255,;0F8229520120000255,707A2E2C;,87;0F8252150255,707A01000306;0F70825201150255,87;0F707A0120002C0855,;0F700120002C080255,;,707A2E01002C0806;0F71822952202C02,01000806;0F718229522C3802,01000806;0F2952202C55,707A;0F707129527A0115802C380255,;0F2901802000,707A2C;0855,707A2E01002C0306;,87;0F70822952011520002C0255,;0F7082520115000255,;0F707129527A15802C380255,01000806;0F718229522002,707A01002C0806;0F7182295201200002,707A2E2C;0F702901202C0255,6D41;2C38,01000806;0F7071297A2055,87',
        '0F7071201955,7A7D;0F71290115202C,707A80262F;0F70825215003855,016D02;0F825201150255,70717A7D2C;,87;0F520120,707A55;0F825201150255,707A80262F;0F71291520002C,016D02;0100380806,707A2E2C55;0F71201955,707A01000306;0F71295201202C,6D61;0F5220,01800026082F06;0F7071201955,7A7D016D02;0F7129011520,707A2E2C;2C3808,707A01000306;0F0120004B,70717A7D2C;,87;0F5220,016D02;0F70825201150255,7A2E7D2C;0F712915202C,707A01000306;0F70717A0120002C3808190655,;0F7082527A01150255,80262F;0F70200006,016D0261;0F5220,2E01002C0806;0F71201955,707A01000306;0F7129011520002C,707A;0F708252011500380255,80262F;0F82521555,70717A7D016D2C02;,87;0F5220,707A01000306;0F70825201150255,7A7D;0F825201150255,707A80262F;002C380806,016D02;0F201955,70717A7D2C;0F2002,707A016D00036106;0F5220,01000806;0F825201150255,707A80262F;0F71291520002C,016D02;0F708252011500380255,2E2C;0F8252150255,70717A7D01002C0306;,87;0F7082527A01150255,80262F;0F7082527A1555,016D02;0F7129011520,707A2E2C;2C3808,707A01000306;0F71201955,707A;0F7082520115000255,80262F;0F5220,016D0002;0F7071201955,7A2E7D2C;0F712915202C,707A01000306;0F7082527A011500380255,;0F825201150255,70717A7D802C262F;,87;0F7071520120002C06,;0F29202C55,707A01000306;0F7129011520002C,707A;0F8252011500380255,707A80262F;0F71201955,707A0102;0F700120000206,6D61;0F5220,01000806',
        '0F7182295201202C02,707A55;0F7029527A0120002C0255,;0F82520115000255,707A2C03;0F82520115000255,707A2E2C;0F7129521556802C1955,707A01000306;,87;0F7129202C196C,707A55;0F7182520115803802,707A202C0355;0F29522055,707A2C;0F71822952200255,707A2E01002C0306;0F718229520120002C080206,;0F290120000855,707A;0F700255,0120002C080306;707129527A011580002C380855,;0F204B,707A01002C0306;0F825201150255,707A;0F7071297A202C1955,;,87;0F707A01200255,87;0F71825215802C380255,707A01000306;0F7182295201202C02,;0F290120000855,707A2E2C;0F7071295201155680000855,202C03;01000855,707A;0F70717A201955,01000806;0F7129520115802C3855,707A;0F8229520115200255,707A2C;0F825201150255,707A2E2C03;0F707129527A1580202C55,;,87;0F70718229527A202C0255,87;0F70718252011580002C380255,;0F01200255,707A2C03;01000855,707A2E2C;0F7129521556802C1955,707A01000306;01002C380806,707A6D41;0F7071297A202C1955,01000806;0F707129527A15803855,202C03;0F01200255,707A2C;0F8252150255,707A01000306;0F71822952202C02,;,87;0F707A010255,202C03;707129527A011580002C380855,;0F29202C3809,707A01000306;0F71201955,707A;0F7071297A202C1955,;0100380806,6D202C0341;0F7029527A2055,01000806;0F71295215802C3855,707A01000306;0F825201150255,707A2C;0F822952011520000255,707A2E2C;0F7071295201155680000855,202C03;,87;0F29202C380955,707A01000306;0F7182520115802C380255,707A;29202C,707A;0F71292055,707A2E2C03;0F707129527A1556802C55,;0F71822952202C02,707A016D00034106'
    ];
    return Taboo;
}(LoopTyme));
exports.Taboo = Taboo;
var Ten = (function (_super) {
    __extends(Ten, _super);
    function Ten(indexOrName) {
        return _super.call(this, Ten.NAMES, indexOrName) || this;
    }
    Ten.fromIndex = function (index) {
        return new Ten(Ten.numeric(index, 'ten index'));
    };
    Ten.fromName = function (name) {
        return new Ten(name);
    };
    Ten.prototype.next = function (n) {
        return Ten.fromIndex(this.nextIndex(n));
    };
    Ten.NAMES = ['甲子', '甲戌', '甲申', '甲午', '甲辰', '甲寅'];
    return Ten;
}(LoopTyme));
exports.Ten = Ten;
var Terrain = (function (_super) {
    __extends(Terrain, _super);
    function Terrain(indexOrName) {
        return _super.call(this, Terrain.NAMES, indexOrName) || this;
    }
    Terrain.fromIndex = function (index) {
        return new Terrain(Terrain.numeric(index, 'terrain index'));
    };
    Terrain.fromName = function (name) {
        return new Terrain(name);
    };
    Terrain.prototype.next = function (n) {
        return Terrain.fromIndex(this.nextIndex(n));
    };
    Terrain.NAMES = ['长生', '沐浴', '冠带', '临官', '帝旺', '衰', '病', '死', '墓', '绝', '胎', '养'];
    return Terrain;
}(LoopTyme));
exports.Terrain = Terrain;
var Twenty = (function (_super) {
    __extends(Twenty, _super);
    function Twenty(indexOrName) {
        return _super.call(this, Twenty.NAMES, indexOrName) || this;
    }
    Twenty.fromIndex = function (index) {
        return new Twenty(Twenty.numeric(index, 'twenty index'));
    };
    Twenty.fromName = function (name) {
        return new Twenty(name);
    };
    Twenty.prototype.next = function (n) {
        return Twenty.fromIndex(this.nextIndex(n));
    };
    Twenty.prototype.getSixty = function () {
        return Sixty.fromIndex(~~(this.index / 3));
    };
    Twenty.NAMES = ['一运', '二运', '三运', '四运', '五运', '六运', '七运', '八运', '九运'];
    return Twenty;
}(LoopTyme));
exports.Twenty = Twenty;
var Zodiac = (function (_super) {
    __extends(Zodiac, _super);
    function Zodiac(indexOrName) {
        return _super.call(this, Zodiac.NAMES, indexOrName) || this;
    }
    Zodiac.fromIndex = function (index) {
        return new Zodiac(Zodiac.numeric(index, 'zodiac index'));
    };
    Zodiac.fromName = function (name) {
        return new Zodiac(name);
    };
    Zodiac.prototype.next = function (n) {
        return Zodiac.fromIndex(this.nextIndex(n));
    };
    Zodiac.prototype.getEarthBranch = function () {
        return EarthBranch.fromIndex(this.index);
    };
    Zodiac.NAMES = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
    return Zodiac;
}(LoopTyme));
exports.Zodiac = Zodiac;
var EarthBranch = (function (_super) {
    __extends(EarthBranch, _super);
    function EarthBranch(indexOrName) {
        return _super.call(this, EarthBranch.NAMES, indexOrName) || this;
    }
    EarthBranch.fromIndex = function (index) {
        return new EarthBranch(EarthBranch.numeric(index, 'earth branch index'));
    };
    EarthBranch.fromName = function (name) {
        return new EarthBranch(name);
    };
    EarthBranch.prototype.next = function (n) {
        return EarthBranch.fromIndex(this.nextIndex(n));
    };
    EarthBranch.prototype.getElement = function () {
        return Element.fromIndex([4, 2, 0, 0, 2, 1, 1, 2, 3, 3, 2, 4][this.index]);
    };
    EarthBranch.prototype.getYinYang = function () {
        return this.index % 2 === 0 ? YinYang.YANG : YinYang.YIN;
    };
    EarthBranch.prototype.getHideHeavenStemMain = function () {
        return HeavenStem.fromIndex([9, 5, 0, 1, 4, 2, 3, 5, 6, 7, 4, 8][this.index]);
    };
    EarthBranch.prototype.getHideHeavenStemMiddle = function () {
        var n = [-1, 9, 2, -1, 1, 6, 5, 3, 8, -1, 7, 0][this.index];
        return n === -1 ? null : HeavenStem.fromIndex(n);
    };
    EarthBranch.prototype.getHideHeavenStemResidual = function () {
        var n = [-1, 7, 4, -1, 9, 4, -1, 1, 4, -1, 3, -1][this.index];
        return n === -1 ? null : HeavenStem.fromIndex(n);
    };
    EarthBranch.prototype.getHideHeavenStems = function () {
        var l = [];
        l.push(new HideHeavenStem(this.getHideHeavenStemMain(), HideHeavenStemType.MAIN));
        var o = this.getHideHeavenStemMiddle();
        if (o) {
            l.push(new HideHeavenStem(o, HideHeavenStemType.MIDDLE));
        }
        o = this.getHideHeavenStemResidual();
        if (o) {
            l.push(new HideHeavenStem(o, HideHeavenStemType.RESIDUAL));
        }
        return l;
    };
    EarthBranch.prototype.getZodiac = function () {
        return Zodiac.fromIndex(this.index);
    };
    EarthBranch.prototype.getDirection = function () {
        return Direction.fromIndex([0, 4, 2, 2, 4, 8, 8, 4, 6, 6, 4, 0][this.index]);
    };
    EarthBranch.prototype.getOpposite = function () {
        return this.next(6);
    };
    EarthBranch.prototype.getOminous = function () {
        return Direction.fromIndex([8, 2, 0, 6][this.index % 4]);
    };
    EarthBranch.prototype.getPengZuEarthBranch = function () {
        return PengZuEarthBranch.fromIndex(this.index);
    };
    EarthBranch.prototype.getCombine = function () {
        return EarthBranch.fromIndex(1 - this.index);
    };
    EarthBranch.prototype.getHarm = function () {
        return EarthBranch.fromIndex(19 - this.index);
    };
    EarthBranch.prototype.combine = function (target) {
        return this.getCombine().equals(target) ? Element.fromIndex([2, 2, 0, 1, 3, 4, 2, 2, 4, 3, 1, 0][this.index]) : null;
    };
    EarthBranch.NAMES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    return EarthBranch;
}(LoopTyme));
exports.EarthBranch = EarthBranch;
var HeavenStem = (function (_super) {
    __extends(HeavenStem, _super);
    function HeavenStem(indexOrName) {
        return _super.call(this, HeavenStem.NAMES, indexOrName) || this;
    }
    HeavenStem.fromIndex = function (index) {
        return new HeavenStem(HeavenStem.numeric(index, 'heaven stem index'));
    };
    HeavenStem.fromName = function (name) {
        return new HeavenStem(name);
    };
    HeavenStem.prototype.next = function (n) {
        return HeavenStem.fromIndex(this.nextIndex(n));
    };
    HeavenStem.prototype.getElement = function () {
        return Element.fromIndex(~~(this.index / 2));
    };
    HeavenStem.prototype.getYinYang = function () {
        return this.index % 2 === 0 ? YinYang.YANG : YinYang.YIN;
    };
    HeavenStem.prototype.getTenStar = function (target) {
        var targetIndex = target.getIndex();
        var offset = targetIndex - this.index;
        if (this.index % 2 !== 0 && targetIndex % 2 === 0) {
            offset += 2;
        }
        return TenStar.fromIndex(offset);
    };
    HeavenStem.prototype.getDirection = function () {
        return this.getElement().getDirection();
    };
    HeavenStem.prototype.getJoyDirection = function () {
        return Direction.fromIndex([7, 5, 1, 8, 3][this.index % 5]);
    };
    HeavenStem.prototype.getYangDirection = function () {
        return Direction.fromIndex([1, 1, 6, 5, 7, 0, 8, 7, 2, 3][this.index]);
    };
    HeavenStem.prototype.getYinDirection = function () {
        return Direction.fromIndex([7, 0, 5, 6, 1, 1, 7, 8, 3, 2][this.index]);
    };
    HeavenStem.prototype.getWealthDirection = function () {
        return Direction.fromIndex([7, 1, 0, 2, 8][~~(this.index / 2)]);
    };
    HeavenStem.prototype.getMascotDirection = function () {
        return Direction.fromIndex([3, 3, 2, 2, 0, 8, 1, 1, 5, 6][this.index]);
    };
    HeavenStem.prototype.getPengZuHeavenStem = function () {
        return PengZuHeavenStem.fromIndex(this.index);
    };
    HeavenStem.prototype.getTerrain = function (earthBranch) {
        var earthBranchIndex = earthBranch.getIndex();
        return Terrain.fromIndex([1, 6, 10, 9, 10, 9, 7, 0, 4, 3][this.index] + (YinYang.YANG == this.getYinYang() ? earthBranchIndex : -earthBranchIndex));
    };
    HeavenStem.prototype.getCombine = function () {
        return this.next(5);
    };
    HeavenStem.prototype.combine = function (target) {
        return this.getCombine().equals(target) ? Element.fromIndex(this.index + 2) : null;
    };
    HeavenStem.NAMES = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    return HeavenStem;
}(LoopTyme));
exports.HeavenStem = HeavenStem;
var HideHeavenStem = (function (_super) {
    __extends(HideHeavenStem, _super);
    function HideHeavenStem(heavenStem, type) {
        var _this = _super.call(this) || this;
        if (typeof heavenStem === 'number') {
            _this.heavenStem = HeavenStem.fromIndex(heavenStem);
        }
        else if (typeof heavenStem === 'string') {
            _this.heavenStem = HeavenStem.fromName(heavenStem);
        }
        else {
            _this.heavenStem = heavenStem;
        }
        _this.type = type;
        return _this;
    }
    HideHeavenStem.prototype.getName = function () {
        return this.heavenStem.getName();
    };
    HideHeavenStem.prototype.getHeavenStem = function () {
        return this.heavenStem;
    };
    HideHeavenStem.prototype.getType = function () {
        return this.type;
    };
    return HideHeavenStem;
}(AbstractCulture));
exports.HideHeavenStem = HideHeavenStem;
var HideHeavenStemDay = (function (_super) {
    __extends(HideHeavenStemDay, _super);
    function HideHeavenStemDay(hideHeavenStem, dayIndex) {
        return _super.call(this, hideHeavenStem, dayIndex) || this;
    }
    HideHeavenStemDay.prototype.getHideHeavenStem = function () {
        return this.culture;
    };
    HideHeavenStemDay.prototype.getName = function () {
        var heavenStem = this.getHideHeavenStem().getHeavenStem();
        return heavenStem.getName() + heavenStem.getElement().getName();
    };
    HideHeavenStemDay.prototype.toString = function () {
        return "".concat(this.getName(), "\u7B2C").concat(this.getDayIndex() + 1, "\u5929");
    };
    return HideHeavenStemDay;
}(AbstractCultureDay));
exports.HideHeavenStemDay = HideHeavenStemDay;
var PengZuHeavenStem = (function (_super) {
    __extends(PengZuHeavenStem, _super);
    function PengZuHeavenStem(indexOrName) {
        return _super.call(this, PengZuHeavenStem.NAMES, indexOrName) || this;
    }
    PengZuHeavenStem.fromIndex = function (index) {
        return new PengZuHeavenStem(PengZuHeavenStem.numeric(index, 'peng zu heaven stem index'));
    };
    PengZuHeavenStem.fromName = function (name) {
        return new PengZuHeavenStem(name);
    };
    PengZuHeavenStem.prototype.next = function (n) {
        return PengZuHeavenStem.fromIndex(this.nextIndex(n));
    };
    PengZuHeavenStem.NAMES = ['甲不开仓财物耗散', '乙不栽植千株不长', '丙不修灶必见灾殃', '丁不剃头头必生疮', '戊不受田田主不祥', '己不破券二比并亡', '庚不经络织机虚张', '辛不合酱主人不尝', '壬不泱水更难提防', '癸不词讼理弱敌强'];
    return PengZuHeavenStem;
}(LoopTyme));
exports.PengZuHeavenStem = PengZuHeavenStem;
var PengZuEarthBranch = (function (_super) {
    __extends(PengZuEarthBranch, _super);
    function PengZuEarthBranch(indexOrName) {
        return _super.call(this, PengZuEarthBranch.NAMES, indexOrName) || this;
    }
    PengZuEarthBranch.fromIndex = function (index) {
        return new PengZuEarthBranch(PengZuEarthBranch.numeric(index, 'peng zu earth branch index'));
    };
    PengZuEarthBranch.fromName = function (name) {
        return new PengZuEarthBranch(name);
    };
    PengZuEarthBranch.prototype.next = function (n) {
        return PengZuEarthBranch.fromIndex(this.nextIndex(n));
    };
    PengZuEarthBranch.NAMES = ['子不问卜自惹祸殃', '丑不冠带主不还乡', '寅不祭祀神鬼不尝', '卯不穿井水泉不香', '辰不哭泣必主重丧', '巳不远行财物伏藏', '午不苫盖屋主更张', '未不服药毒气入肠', '申不安床鬼祟入房', '酉不会客醉坐颠狂', '戌不吃犬作怪上床', '亥不嫁娶不利新郎'];
    return PengZuEarthBranch;
}(LoopTyme));
exports.PengZuEarthBranch = PengZuEarthBranch;
var PengZu = (function (_super) {
    __extends(PengZu, _super);
    function PengZu(sixtyCycle) {
        var _this = _super.call(this) || this;
        _this.pengZuHeavenStem = PengZuHeavenStem.fromIndex(sixtyCycle.getHeavenStem().getIndex());
        _this.pengZuEarthBranch = PengZuEarthBranch.fromIndex(sixtyCycle.getEarthBranch().getIndex());
        return _this;
    }
    PengZu.fromSixtyCycle = function (sixtyCycle) {
        return new PengZu(sixtyCycle);
    };
    PengZu.prototype.getName = function () {
        return "".concat(this.pengZuHeavenStem.getName(), " ").concat(this.pengZuEarthBranch.getName());
    };
    PengZu.prototype.getPengZuHeavenStem = function () {
        return this.pengZuHeavenStem;
    };
    PengZu.prototype.getPengZuEarthBranch = function () {
        return this.pengZuEarthBranch;
    };
    return PengZu;
}(AbstractCulture));
exports.PengZu = PengZu;
var TenStar = (function (_super) {
    __extends(TenStar, _super);
    function TenStar(indexOrName) {
        return _super.call(this, TenStar.NAMES, indexOrName) || this;
    }
    TenStar.fromIndex = function (index) {
        return new TenStar(TenStar.numeric(index, 'ten star index'));
    };
    TenStar.fromName = function (name) {
        return new TenStar(name);
    };
    TenStar.prototype.next = function (n) {
        return TenStar.fromIndex(this.nextIndex(n));
    };
    TenStar.NAMES = ['比肩', '劫财', '食神', '伤官', '偏财', '正财', '七杀', '正官', '偏印', '正印'];
    return TenStar;
}(LoopTyme));
exports.TenStar = TenStar;
var SixStar = (function (_super) {
    __extends(SixStar, _super);
    function SixStar(indexOrName) {
        return _super.call(this, SixStar.NAMES, indexOrName) || this;
    }
    SixStar.fromIndex = function (index) {
        return new SixStar(SixStar.numeric(index, 'six star index'));
    };
    SixStar.fromName = function (name) {
        return new SixStar(name);
    };
    SixStar.prototype.next = function (n) {
        return SixStar.fromIndex(this.nextIndex(n));
    };
    SixStar.NAMES = ['先胜', '友引', '先负', '佛灭', '大安', '赤口'];
    return SixStar;
}(LoopTyme));
exports.SixStar = SixStar;
var MinorRen = (function (_super) {
    __extends(MinorRen, _super);
    function MinorRen(indexOrName) {
        return _super.call(this, MinorRen.NAMES, indexOrName) || this;
    }
    MinorRen.fromIndex = function (index) {
        return new MinorRen(MinorRen.numeric(index, 'minor ren index'));
    };
    MinorRen.fromName = function (name) {
        return new MinorRen(name);
    };
    MinorRen.prototype.next = function (n) {
        return MinorRen.fromIndex(this.nextIndex(n));
    };
    MinorRen.prototype.getLuck = function () {
        return Luck.fromIndex(this.index % 2);
    };
    MinorRen.prototype.getElement = function () {
        return Element.fromIndex([0, 4, 1, 3, 0, 2][this.index]);
    };
    MinorRen.NAMES = ['大安', '留连', '速喜', '赤口', '小吉', '空亡'];
    return MinorRen;
}(LoopTyme));
exports.MinorRen = MinorRen;
var SixtyCycle = (function (_super) {
    __extends(SixtyCycle, _super);
    function SixtyCycle(indexOrName) {
        return _super.call(this, SixtyCycle.NAMES, indexOrName) || this;
    }
    SixtyCycle.fromIndex = function (index) {
        return new SixtyCycle(SixtyCycle.numeric(index, 'sixty cycle index'));
    };
    SixtyCycle.fromName = function (name) {
        return new SixtyCycle(name);
    };
    SixtyCycle.prototype.next = function (n) {
        return SixtyCycle.fromIndex(this.nextIndex(n));
    };
    SixtyCycle.prototype.getHeavenStem = function () {
        return HeavenStem.fromIndex(this.index % HeavenStem.NAMES.length);
    };
    SixtyCycle.prototype.getEarthBranch = function () {
        return EarthBranch.fromIndex(this.index % EarthBranch.NAMES.length);
    };
    SixtyCycle.prototype.getSound = function () {
        return Sound.fromIndex(~~(this.index / 2));
    };
    SixtyCycle.prototype.getPengZu = function () {
        return PengZu.fromSixtyCycle(this);
    };
    SixtyCycle.prototype.getTen = function () {
        return Ten.fromIndex(~~((this.getHeavenStem().getIndex() - this.getEarthBranch().getIndex()) / 2));
    };
    SixtyCycle.prototype.getExtraEarthBranches = function () {
        var l = [];
        l[0] = EarthBranch.fromIndex(10 + this.getEarthBranch().getIndex() - this.getHeavenStem().getIndex());
        l[1] = l[0].next(1);
        return l;
    };
    SixtyCycle.NAMES = ['甲子', '乙丑', '丙寅', '丁卯', '戊辰', '己巳', '庚午', '辛未', '壬申', '癸酉', '甲戌', '乙亥', '丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午', '癸未', '甲申', '乙酉', '丙戌', '丁亥', '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳', '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥', '庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥', '壬子', '癸丑', '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥'];
    return SixtyCycle;
}(LoopTyme));
exports.SixtyCycle = SixtyCycle;
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(indexOrName) {
        return _super.call(this, Dog.NAMES, indexOrName) || this;
    }
    Dog.fromIndex = function (index) {
        return new Dog(Dog.numeric(index, 'dog index'));
    };
    Dog.fromName = function (name) {
        return new Dog(name);
    };
    Dog.prototype.next = function (n) {
        return Dog.fromIndex(this.nextIndex(n));
    };
    Dog.NAMES = ['初伏', '中伏', '末伏'];
    return Dog;
}(LoopTyme));
exports.Dog = Dog;
var DogDay = (function (_super) {
    __extends(DogDay, _super);
    function DogDay(dog, dayIndex) {
        return _super.call(this, dog, dayIndex) || this;
    }
    DogDay.prototype.getDog = function () {
        return this.culture;
    };
    return DogDay;
}(AbstractCultureDay));
exports.DogDay = DogDay;
var PlumRain = (function (_super) {
    __extends(PlumRain, _super);
    function PlumRain(indexOrName) {
        return _super.call(this, PlumRain.NAMES, indexOrName) || this;
    }
    PlumRain.fromIndex = function (index) {
        return new PlumRain(PlumRain.numeric(index, 'plum rain index'));
    };
    PlumRain.fromName = function (name) {
        return new PlumRain(name);
    };
    PlumRain.prototype.next = function (n) {
        return PlumRain.fromIndex(this.nextIndex(n));
    };
    PlumRain.NAMES = ['入梅', '出梅'];
    return PlumRain;
}(LoopTyme));
exports.PlumRain = PlumRain;
var PlumRainDay = (function (_super) {
    __extends(PlumRainDay, _super);
    function PlumRainDay(plumRain, dayIndex) {
        return _super.call(this, plumRain, dayIndex) || this;
    }
    PlumRainDay.prototype.getPlumRain = function () {
        return this.culture;
    };
    PlumRainDay.prototype.toString = function () {
        return this.getPlumRain().getIndex() == 0 ? _super.prototype.toString.call(this) : this.culture.getName();
    };
    return PlumRainDay;
}(AbstractCultureDay));
exports.PlumRainDay = PlumRainDay;
var FetusHeavenStem = (function (_super) {
    __extends(FetusHeavenStem, _super);
    function FetusHeavenStem(index) {
        return _super.call(this, FetusHeavenStem.NAMES, index) || this;
    }
    FetusHeavenStem.prototype.next = function (n) {
        return new FetusHeavenStem(this.nextIndex(n));
    };
    FetusHeavenStem.NAMES = ['门', '碓磨', '厨灶', '仓库', '房床'];
    return FetusHeavenStem;
}(LoopTyme));
exports.FetusHeavenStem = FetusHeavenStem;
var FetusEarthBranch = (function (_super) {
    __extends(FetusEarthBranch, _super);
    function FetusEarthBranch(index) {
        return _super.call(this, FetusEarthBranch.NAMES, index) || this;
    }
    FetusEarthBranch.prototype.next = function (n) {
        return new FetusEarthBranch(this.nextIndex(n));
    };
    FetusEarthBranch.NAMES = ['碓', '厕', '炉', '门', '栖', '床'];
    return FetusEarthBranch;
}(LoopTyme));
exports.FetusEarthBranch = FetusEarthBranch;
var FetusDay = (function (_super) {
    __extends(FetusDay, _super);
    function FetusDay(sixtyCycle) {
        var _this = _super.call(this) || this;
        _this.fetusHeavenStem = new FetusHeavenStem(sixtyCycle.getHeavenStem().getIndex() % 5);
        _this.fetusEarthBranch = new FetusEarthBranch(sixtyCycle.getEarthBranch().getIndex() % 6);
        var index = [3, 3, 8, 8, 8, 8, 8, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, -9, -9, -9, -9, -9, -5, -5, -1, -1, -1, -3, -7, -7, -7, -7, -5, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2, 2, 3, 3, 3, 3][sixtyCycle.getIndex()];
        _this.side = index < 0 ? Side.IN : Side.OUT;
        _this.direction = Direction.fromIndex(index);
        return _this;
    }
    FetusDay.fromLunarDay = function (lunarDay) {
        return new FetusDay(lunarDay.getSixtyCycle());
    };
    FetusDay.fromSixtyCycleDay = function (sixtyCycleDay) {
        return new FetusDay(sixtyCycleDay.getSixtyCycle());
    };
    FetusDay.prototype.getName = function () {
        var s = this.fetusHeavenStem.getName() + this.fetusEarthBranch.getName();
        if ('门门' === s) {
            s = '占大门';
        }
        else if ('碓磨碓' === s) {
            s = '占碓磨';
        }
        else if ('房床床' === s) {
            s = '占房床';
        }
        else if (s.indexOf('门') === 0) {
            s = '占' + s;
        }
        s += ' ';
        if (Side.IN == this.side) {
            s += '房内';
        }
        else {
            s += '外';
        }
        var directionName = this.direction.getName();
        if (Side.OUT == this.side && '北南西东'.indexOf(directionName) > -1) {
            s += '正';
        }
        s += directionName;
        return s;
    };
    FetusDay.prototype.getSide = function () {
        return this.side;
    };
    FetusDay.prototype.getDirection = function () {
        return this.direction;
    };
    FetusDay.prototype.getFetusHeavenStem = function () {
        return this.fetusHeavenStem;
    };
    FetusDay.prototype.getFetusEarthBranch = function () {
        return this.fetusEarthBranch;
    };
    return FetusDay;
}(AbstractCulture));
exports.FetusDay = FetusDay;
var Nine = (function (_super) {
    __extends(Nine, _super);
    function Nine(indexOrName) {
        return _super.call(this, Nine.NAMES, indexOrName) || this;
    }
    Nine.fromIndex = function (index) {
        return new Nine(Nine.numeric(index, 'nine index'));
    };
    Nine.fromName = function (name) {
        return new Nine(name);
    };
    Nine.prototype.next = function (n) {
        return Nine.fromIndex(this.nextIndex(n));
    };
    Nine.NAMES = ['一九', '二九', '三九', '四九', '五九', '六九', '七九', '八九', '九九'];
    return Nine;
}(LoopTyme));
exports.Nine = Nine;
var NineDay = (function (_super) {
    __extends(NineDay, _super);
    function NineDay(nine, dayIndex) {
        return _super.call(this, nine, dayIndex) || this;
    }
    NineDay.prototype.getNine = function () {
        return this.culture;
    };
    return NineDay;
}(AbstractCultureDay));
exports.NineDay = NineDay;
var Phenology = (function (_super) {
    __extends(Phenology, _super);
    function Phenology(year, indexOrName) {
        var _this = _super.call(this, Phenology.NAMES, indexOrName) || this;
        if (typeof indexOrName === 'number') {
            var size = _this.getSize();
            _this.year = ~~((year * size + indexOrName) / size);
        }
        else {
            _this.year = year;
        }
        return _this;
    }
    Phenology.fromIndex = function (year, index) {
        return new Phenology(year, Phenology.numeric(index, 'phenology index'));
    };
    Phenology.fromName = function (year, name) {
        return new Phenology(year, name);
    };
    Phenology.prototype.next = function (n) {
        var size = this.getSize();
        var i = this.getIndex() + n;
        return Phenology.fromIndex(~~((this.year * size + i) / size), this.indexOf(i, size));
    };
    Phenology.prototype.getYear = function () {
        return this.year;
    };
    Phenology.prototype.getThreePhenology = function () {
        return ThreePhenology.fromIndex(this.index % 3);
    };
    Phenology.prototype.getJulianDay = function () {
        var t = ShouXingUtil.saLonT((this.year - 2000 + (this.getIndex() - 18) * 5.0 / 360 + 1) * 2 * Math.PI);
        return JulianDay.fromJulianDay(t * 36525 + JulianDay.J2000 + 8.0 / 24 - ShouXingUtil.dtT(t * 36525));
    };
    Phenology.NAMES = ['蚯蚓结', '麋角解', '水泉动', '雁北乡', '鹊始巢', '雉始雊', '鸡始乳', '征鸟厉疾', '水泽腹坚', '东风解冻', '蛰虫始振', '鱼陟负冰', '獭祭鱼', '候雁北', '草木萌动', '桃始华', '仓庚鸣', '鹰化为鸠', '玄鸟至', '雷乃发声', '始电', '桐始华', '田鼠化为鴽', '虹始见', '萍始生', '鸣鸠拂其羽', '戴胜降于桑', '蝼蝈鸣', '蚯蚓出', '王瓜生', '苦菜秀', '靡草死', '麦秋至', '螳螂生', '鵙始鸣', '反舌无声', '鹿角解', '蜩始鸣', '半夏生', '温风至', '蟋蟀居壁', '鹰始挚', '腐草为萤', '土润溽暑', '大雨行时', '凉风至', '白露降', '寒蝉鸣', '鹰乃祭鸟', '天地始肃', '禾乃登', '鸿雁来', '玄鸟归', '群鸟养羞', '雷始收声', '蛰虫坯户', '水始涸', '鸿雁来宾', '雀入大水为蛤', '菊有黄花', '豺乃祭兽', '草木黄落', '蛰虫咸俯', '水始冰', '地始冻', '雉入大水为蜃', '虹藏不见', '天气上升地气下降', '闭塞而成冬', '鹖鴠不鸣', '虎始交', '荔挺出'];
    return Phenology;
}(LoopTyme));
exports.Phenology = Phenology;
var ThreePhenology = (function (_super) {
    __extends(ThreePhenology, _super);
    function ThreePhenology(indexOrName) {
        return _super.call(this, ThreePhenology.NAMES, indexOrName) || this;
    }
    ThreePhenology.fromIndex = function (index) {
        return new ThreePhenology(ThreePhenology.numeric(index, 'three phenology index'));
    };
    ThreePhenology.fromName = function (name) {
        return new ThreePhenology(name);
    };
    ThreePhenology.prototype.next = function (n) {
        return ThreePhenology.fromIndex(this.nextIndex(n));
    };
    ThreePhenology.prototype.getThreePhenology = function () {
        return ThreePhenology.fromIndex(this.index % 3);
    };
    ThreePhenology.NAMES = ['初候', '二候', '三候'];
    return ThreePhenology;
}(LoopTyme));
exports.ThreePhenology = ThreePhenology;
var Dipper = (function (_super) {
    __extends(Dipper, _super);
    function Dipper(indexOrName) {
        return _super.call(this, Dipper.NAMES, indexOrName) || this;
    }
    Dipper.fromIndex = function (index) {
        return new Dipper(Dipper.numeric(index, 'dipper index'));
    };
    Dipper.fromName = function (name) {
        return new Dipper(name);
    };
    Dipper.prototype.next = function (n) {
        return Dipper.fromIndex(this.nextIndex(n));
    };
    Dipper.NAMES = ['天枢', '天璇', '天玑', '天权', '玉衡', '开阳', '摇光', '洞明', '隐元'];
    return Dipper;
}(LoopTyme));
exports.Dipper = Dipper;
var PhenologyDay = (function (_super) {
    __extends(PhenologyDay, _super);
    function PhenologyDay(phenology, dayIndex) {
        return _super.call(this, phenology, dayIndex) || this;
    }
    PhenologyDay.prototype.getPhenology = function () {
        return this.culture;
    };
    return PhenologyDay;
}(AbstractCultureDay));
exports.PhenologyDay = PhenologyDay;
var NineStar = (function (_super) {
    __extends(NineStar, _super);
    function NineStar(indexOrName) {
        return _super.call(this, NineStar.NAMES, indexOrName) || this;
    }
    NineStar.fromIndex = function (index) {
        return new NineStar(NineStar.numeric(index, 'nine star index'));
    };
    NineStar.fromName = function (name) {
        return new NineStar(name);
    };
    NineStar.prototype.next = function (n) {
        return NineStar.fromIndex(this.nextIndex(n));
    };
    NineStar.prototype.getColor = function () {
        return ['白', '黑', '碧', '绿', '黄', '白', '赤', '白', '紫'][this.index];
    };
    NineStar.prototype.getElement = function () {
        return Element.fromIndex([4, 2, 0, 0, 2, 3, 3, 2, 1][this.index]);
    };
    NineStar.prototype.getDipper = function () {
        return Dipper.fromIndex(this.index);
    };
    NineStar.prototype.getDirection = function () {
        return Direction.fromIndex(this.index);
    };
    NineStar.prototype.toString = function () {
        return this.getName() + this.getColor() + this.getElement();
    };
    NineStar.NAMES = ['一', '二', '三', '四', '五', '六', '七', '八', '九'];
    return NineStar;
}(LoopTyme));
exports.NineStar = NineStar;
var TwelveStar = (function (_super) {
    __extends(TwelveStar, _super);
    function TwelveStar(indexOrName) {
        return _super.call(this, TwelveStar.NAMES, indexOrName) || this;
    }
    TwelveStar.fromIndex = function (index) {
        return new TwelveStar(TwelveStar.numeric(index, 'twelve star index'));
    };
    TwelveStar.fromName = function (name) {
        return new TwelveStar(name);
    };
    TwelveStar.prototype.next = function (n) {
        return TwelveStar.fromIndex(this.nextIndex(n));
    };
    TwelveStar.prototype.getEcliptic = function () {
        return Ecliptic.fromIndex([0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1][this.index]);
    };
    TwelveStar.NAMES = ['青龙', '明堂', '天刑', '朱雀', '金匮', '天德', '白虎', '玉堂', '天牢', '玄武', '司命', '勾陈'];
    return TwelveStar;
}(LoopTyme));
exports.TwelveStar = TwelveStar;
var Ecliptic = (function (_super) {
    __extends(Ecliptic, _super);
    function Ecliptic(indexOrName) {
        return _super.call(this, Ecliptic.NAMES, indexOrName) || this;
    }
    Ecliptic.fromIndex = function (index) {
        return new Ecliptic(Ecliptic.numeric(index, 'ecliptic index'));
    };
    Ecliptic.fromName = function (name) {
        return new Ecliptic(name);
    };
    Ecliptic.prototype.next = function (n) {
        return Ecliptic.fromIndex(this.nextIndex(n));
    };
    Ecliptic.prototype.getLuck = function () {
        return Luck.fromIndex(this.index);
    };
    Ecliptic.NAMES = ['黄道', '黑道'];
    return Ecliptic;
}(LoopTyme));
exports.Ecliptic = Ecliptic;
var LunarYear = (function (_super) {
    __extends(LunarYear, _super);
    function LunarYear(year) {
        LunarYear.init();
        var y = LunarYear.numeric(year, 'lunar year');
        LunarYear.validate(y);
        return _super.call(this, y) || this;
    }
    LunarYear.init = function () {
        if (LunarYear.isInit) {
            return;
        }
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_@';
        var months = [
            '080b0r0j0j0j0C0j0j0C0j0j0j0C0j0C0j0C0F0j0V0V0V0u0j0j0C0j0j0j0j0V0C0j1v0u0C0V1v0C0b080u110u0C0j0C1v9K1v2z0j1vmZbl1veN3s1v0V0C2S1v0V0C2S2o0C0j1Z1c2S1v0j1c0j2z1v0j1c0j392H0b2_2S0C0V0j1c0j2z0C0C0j0j1c0j0N250j0C0j0b081n080b0C0C0C1c0j0N',
            '0r1v1c1v0V0V0F0V0j0C0j0C0j0V0j0u1O0j0C0V0j0j0j0V0b080u0r0u080b0j0j0C0V0C0V0j0b080V0u080b0j0j0u0j1v0u080b1c0j080b0j0V0j0j0V0C0N1v0j1c0j0j1v2g1v420j1c0j2z1v0j1v5Q9z1v4l0j1vfn1v420j9z4l1v1v2S1c0j1v2S3s1v0V0C2S1v1v2S1c0j1v2S2_0b0j2_2z0j1c0j',
            '0z0j0j0j0C0j0j0C0j0j0j0C0j0C0j0j0j0j0m0j0C0j0j0C0j0j0j0j0b0V0j0j0C0j0j0j0j0V0j0j0j0V0b0V0V0C0V0C0j0j0b080u110u0V0C0j0N0j0b080b080b0j0r0b0r0b0j0j0j0j0C0j0b0r0C0j0b0j0C0C0j0j0j0j0j0j0j0j0j0b110j0b0j0j0j0C0j0C0j0j0j0j0b080b080b0V080b080b0j0j0j0j0j0j0V0j0j0u1v0j0j0j0C0j0j0j0V0C0N1c0j0C0C0j0j0j1n080b0j0V0C0j0C0C2g0j1c0j0j1v2g1v0j0j1v7N0j1c0j3L0j0j1v5Q1Z5Q1v4lfn1v420j1v5Q1Z5Q1v4l1v2z1v',
            '0H140r0N0r140r0u0r0V171c11140C0j0u110j0u0j1v0j0C0j0j0j0b080V0u080b0C1v0j0j0j0C0j0b080V0j0j0b080b0j0j0j0j0b080b0C080j0b080b0j0j0j0j0j0j0b080j0b080C0b080b080b080b0j0j0j0j080b0j0C0j0j0j0b0j0j080C0b0j0j0j0j0j0j0b08080b0j0C0j0j0j0b0j0j0K0b0j0C0j0j0j0b080b080j0C0b0j080b080b0j0j0j0j080b0j0b0r0j0j0j0b0j0C0r0b0j0j0j0j0j0j0j0b080j0b0r0C0j0b0j0j0j0r0b0j0C0j0j0j0u0r0b0C0j080b0j0j0j0j0j0j0j1c0j0b0j0j0j0C0j0j0j0j0j0j0j0b080j1c0u0j0j0j0C0j1c0j0u0j1c0j0j0j0j0j0j0j0j1c0j0u1v0j0j0V0j0j2g0j0j0j0C1v0C1G0j0j0V0C1Z1O0j0V0j0j2g1v0j0j0V0C2g5x1v4l1v421O7N0V0C4l1v2S1c0j1v2S2_',
            '050b080C0j0j0j0C0j0j0C0j0j0j0C0j0C0j0C030j0j0j0j0j0j0j0j0j0C0j0b080u0V080b0j0j0V0j0j0j0j0j0j0j0j0j0V0N0j0C0C0j0j0j0j0j0j0j0j1c0j0u0j1v0j0j0j0j0j0b080b080j0j0j0b080b080b080b080b0j0j0j080b0j0b080j0j0j0j0b080b0j0j0r0b080b0b080j0j0j0j0b080b080j0b080j0b080b080b080b080b0j0j0r0b0j0b080j0j0j0j0b080b0j0j0C080b0b080j0j0j0j0j0j0j0b080u080j0j0b0j0j0j0C0j0b080j0j0j0j0b080b080b080b0C080b080b080b0j0j0j0j0j0j0b0C080j0j0b0j0j0j0C0j0b080j0j0C0b080b080j0b0j0j0C080b0j0j0j0j0j0j0b0j0j080C0b0j080b0j0j0j0j0j0j0j0C0j0j0j0b0j0j0C080b0j0j0j0j0j0j0b080b080b0K0b080b080b0j0j0j0j0j0j0j0C0j0j0u0j0j0V0j080b0j0C0j0j0j0b0j0r0C0b0j0j0j0j0j0j0j0j0j0C0j0b080b080b0j0C0C0j0C0j0j0j0u110u0j0j0j0j0j0j0j0j0C0j0j0u0j1c0j0j0j0j0j0j0j0j0V0C0u0j0C0C0V0C1Z0j0j0j0C0j0j0j1v0u0j1c0j0j0j0C0j0j2g0j1c1v0C1Z0V0j4l0j0V0j0j2g0j1v0j1v2S1c7N1v',
            '0w0j1c0j0V0j0j0V0V0V0j0m0V0j0C1c140j0j0j0C0V0C0j1v0j0N0j0C0j0j0j0V0j0j1v0N0j0j0V0j0j0j0j0j0j080b0j0j0j0j0j0j0j080b0j0C0j0j0j0b0j0j080u080b0j0j0j0j0j0j0b080b080b080C0b0j080b080b0j0j0j0j080b0j0C0j0j0j0b0j0j080u080b0j0j0j0j0j0j0b080b080b080b0r0b0j080b080b0j0j0j0j080b0j0b0r0j0j0b080b0j0j080b0j080b0j080b080b0j0j0j0j0j0b080b0r0C0b080b0j0j0j0j080b0b080b080j0j0j0b080b080b080b0j0j0j0j080b0j0b080j0j0j0j0b080b0j0j0r0b080b0j0j0j0j0j0b080b080j0b0r0b080j0b080b0j0j0j0j080b0j0b080j0j0j0j0b080b0j080b0r0b0j080b080b0j0j0j0j0j0b080b0r0C0b080b0j0j0j0j0j0j0b080j0j0j0b080b080b080b0j0j0j0r0b0j0b080j0j0j0j0b080b0r0b0r0b0j080b080b0j0j0j0j0j0j0b0r0j0j0j0b0j0j0j0j080b0j0b080j0j0j0j0b080b080b0j0r0b0j080b0j0j0j0j0j0j0j0b0r0C0b0j0j0j0j0j0j0j080b0j0C0j0j0j0b0j0C0r0b0j0j0j0j0j0j0b080b080u0r0b0j080b0j0j0j0j0j0j0j0b0r0C0u0j0j0j0C0j080b0j0C0j0j0j0u110b0j0j0j0j0j0j0j0j0j0C0j0b080b0j0j0C0C0j0C0j0j0j0b0j1c0j080b0j0j0j0j0j0j0V0j0j0u0j1c0j0j0j0C0j0j2g0j0j0j0C0j0j0V0j0b080b1c0C0V0j0j2g0j0j0V0j0j1c0j1Z0j0j0C0C0j1v',
            '160j0j0V0j1c0j0C0j0C0j1f0j0V0C0j0j0C0j0j0j1G080b080u0V080b0j0j0V0j1v0j0u0j1c0j0j0j0C0j0j0j0C0C0j1D0b0j080b0j0j0j0j0C0j0b0r0C0j0b0j0C0C0j0j0j0j0j0j0j0j0j0b0r0b0r0j0b0j0j0j0C0j0b0r0j0j0j0b080b080j0b0C0j080b080b0j0j0j0j0j0j0b0C080j0j0b0j0j0j0C0j0b080j0j0j0j0b080b080j0b0C0r0j0b0j0j0j0j0j0j0b0C080j0j0b0j0j0j0C0j0j0j0j0C0j0j0b080b0j0j0C080b0j0j0j0j0j0j0b080b080b080C0b080b080b080b0j0j0j0j0j0b080C0j0j0b080b0j0j0C080b0j0j0j0j0j0j0b080j0b0C080j0j0b0j0j0j0j0j0j0b080j0b080C0b080b080b080b0j0j0j0j080b0j0C0j0j0b080b0j0j0C080b0j0j0j0j0j0j0b080j0b080u080j0j0b0j0j0j0j0j0j0b080C0j0j0b080b0j0j0C0j0j080b0j0j0j0j0j0b080b0C0r0b080b0j0j0j0j0j0j0b080j0b080u080b080b080b0j0j0j0C0j0b080j0j0j0j0b0j0j0j0C0j0j080b0j0j0j0j0j0b080b0C0r0b080b0j0j0j0j0j0j0b080j0b0r0b080b080b080b0j0j0j0r0b0j0b0r0j0j0j0b0j0j0j0r0b0j080b0j0j0j0j0j0j0j0b0r0C0b0j0j0j0j0j0j0j0b080j0C0u080b080b0j0j0j0r0b0j0C0C0j0b0j110b0j080b0j0j0j0j0j0j0u0r0C0b0j0j0j0j0j0j0j0j0j0C0j0j0j0b0j1c0j0C0j0j0j0b0j0814080b080b0j0j0j0j0j0j1c0j0u0j0j0V0j0j0j0j0j0j0j0u110u0j0j0j',
            '020b0r0C0j0j0j0C0j0j0V0j0j0j0j0j0C0j1f0j0C0j0V1G0j0j0j0j0V0C0j0C1v0u0j0j0j0V0j0j0C0j0j0j1v0N0C0V0j0j0j0K0C250b0C0V0j0j0V0j0j2g0C0V0j0j0C0j0j0b081v0N0j0j0V0V0j0j0u0j1c0j080b0j0j0j0j0j0j0V0j0j0u0j0j0V0j0j0j0C0j0b080b080V0b0j080b0j0j0j0j0j0j0j0b0r0C0j0b0j0j0j0C0j080b0j0j0j0j0j0j0u0r0C0u0j0j0j0j0j0j0b080j0C0j0b080b080b0j0C0j080b0j0j0j0j0j0j0b080b110b0j0j0j0j0j0j0j0j0j0b0r0j0j0j0b0j0j0j0r0b0j0b080j0j0j0j0b080b080b080b0r0b0j080b080b0j0j0j0j0j0j0b0r0C0b080b0j0j0j0j080b0j0b080j0j0j0j0b080b080b0j0j0j0r0b0j0j0j0j0j0j0b080b0j080C0b0j080b080b0j0j0j0j080b0j0b0r0C0b080b0j0j0j0j080b0j0j0j0j0j0b080b080b080b0j0j080b0r0b0j0j0j0j0j0j0b0j0j080C0b0j080b080b0j0j0j0j0j0b080C0j0j0b080b0j0j0C0j0b080j0j0j0j0b080b080b080b0C0C080b0j0j0j0j0j0j0b0C0C080b080b080b0j0j0j0j0j0j0b0C080j0j0b0j0j0j0C0j0b080j0b080j0j0b080b080b080b0C0r0b0j0j0j0j0j0j0b080b0r0b0r0b0j080b080b0j0j0j0j0j0j0b0r0C0j0b0j0j0j0j0j0j0b080j0C0j0b080j0b0j0j0K0b0j0C0j0j0j0b080b0j0K0b0j080b0j0j0j0j0j0j0V0j0j0b0j0j0j0C0j0j0j0j',
            '0l0C0K0N0r0N0j0r1G0V0m0j0V1c0C0j0j0j0j1O0N110u0j0j0j0C0j0j0V0C0j0u110u0j0j0j0C0j0j0j0C0C0j250j1c2S1v1v0j5x2g0j1c0j0j1c2z0j1c0j0j1c0j0N1v0V0C1v0C0b0C0V0j0j0C0j0C1v0u0j0C0C0j0j0j0C0j0j0j0u110u0j0j0j0C0j0C0C0C0b080b0j0C0j080b0j0C0j0j0j0u110u0j0j0j0C0j0j0j0C0j0j0j0u0C0r0u0j0j0j0j0j0j0b0r0b0V080b080b0j0C0j0j0j0V0j0j0b0j0j0j0C0j0j0j0j0j0j0j0b080j0b0C0r0j0b0j0j0j0C0j0b0r0b0r0j0b080b080b0j0C0j0j0j0j0j0j0j0j0b0j0C0r0b0j0j0j0j0j0j0b080b080j0b0r0b0r0j0b0j0j0j0j080b0j0b0r0j0j0j0b080b080b0j0j0j0j080b0j0j0j0j0j0j0b0j0j0j0r0b0j0j0j0j0j0j0b080b080b080b0r0C0b080b0j0j0j0j0j0b080b0r0C0b080b080b080b0j0j0j0j080b0j0C0j0j0j0b0j0j0C080b0j0j0j0j0j0j0b080j0b0C080j0j0b0j0j0j0j0j0j0b0r0b080j0j0b080b080b0j0j0j0j0j0j0b080j0j0j0j0b0j0j0j0r0b0j0b080j0j0j0j0j0b080b080b0C0r0b0j0j0j0j0j0j0b080b080j0C0b0j080b080b0j0j0j0j0j0j',
            '0a0j0j0j0j0C0j0j0C0j0C0C0j0j0j0j0j0j0j0m0C0j0j0j0j0u080j0j0j1n0j0j0j0j0C0j0j0j0V0j0j0j1c0u0j0C0V0j0j0V0j0j1v0N0C0V2o1v1O2S2o141v0j1v4l0j1c0j1v2S2o0C0u1v0j0C0C2S1v0j1c0j0j1v0N251c0j1v0b1c1v1n1v0j0j0V0j0j1v0N1v0C0V0j0j1v0b0C0j0j0V1c0j0u0j1c0j0j0j0j0j0j0j0j1c0j0u0j0j0V0j0j0j0j0j0j0b080u110u0j0j0j0j0j0j1c0j0b0j080b0j0C0j0j0j0V0j0j0u0C0V0j0j0j0C0j0b080j1c0j0b0j0j0j0C0j0C0j0j0j0b080b080b0j0C0j080b0j0j0j0j0j0j0j0b0C0r0u0j0j0j0j0j0j0b080j0b0r0C0j0b0j0j0j0r0b0j0b0r0j0j0j0b080b080b0j0r0b0j080b0j0j0j0j0j0j0b0j0r0C0b0j0j0j0j0j0j0b080j0j0C0j0j0b080b0j0j0j0j0j0j0j0j0j0j0b080b080b080b0C0j0j080b0j0j0j0j0j0j0b0j0j0C080b0j0j0j0j0j0j0j0j0b0C080j0j0b0j0j0j0j0j',
            '0n0Q0j1c14010q0V1c171k0u0r140V0j0j1c0C0N1O0j0V0j0j0j1c0j0u110u0C0j0C0V0C0j0j0b671v0j1v5Q1O2S2o2S1v4l1v0j1v2S2o0C1Z0j0C0C1O141v0j1c0j2z1O0j0V0j0j1v0b2H390j1c0j0V0C2z0j1c0j1v2g0C0V0j1O0b0j0j0V0C1c0j0u0j1c0j0j0j0j0j0j0j0j1c0N0j0j0V0j0j0C0j0j0b081v0u0j0j0j0C0j1c0N0j0j0C0j0j0j0C0j0j0j0u0C0r0u0j0j0j0C0j0b080j1c0j0b0j0C0C0j0C0C0j0b080b080u0C0j080b0j0C0j0j0j0u110u0j0j0j0j0j0j0j0j0C0C0j0b0j0j0j0C0j0C0C0j0b080b080b0j0C0j080b0j0C0j0j0j0b0j110b0j0j0j0j0j',
            '0B0j0V0j0j0C0j0j0j0C0j0C0j0j0C0j0m0j0j0j0j0C0j0C0j0j0u0j1c0j0j0C0C0j0j0j0j0j0j0j0j0u110N0j0j0V0C0V0j0b081n080b0CrU1O5e2SbX2_1Z0V2o141v0j0C0C0j2z1v0j1c0j7N1O420j1c0j1v2S1c0j1v2S2_0b0j0V0j0j1v0N1v0j0j1c0j1v140j0V0j0j0C0C0b080u1v0C0V0u110u0j0j0j0C0j0j0j0C0C0N0C0V0j0j0C0j0j0b080u110u0C0j0C0u0r0C0u080b0j0j0C0j0j0j'
        ];
        for (var i = 0; i < 12; i++) {
            var n = 0;
            var m = months[i];
            var size = ~~(m.length / 2);
            var l = [];
            for (var y = 0; y < size; y++) {
                var z = y * 2;
                var t = 0;
                var c = 1;
                for (var x = 1; x > -1; x--) {
                    t += c * chars.indexOf(m.charAt(z + x));
                    c *= 64;
                }
                n += t;
                l.push(n);
            }
            LunarYear.LEAP.push(l);
        }
        LunarYear.isInit = true;
    };
    LunarYear.validate = function (year) {
        if (year < -1 || year > 9999) {
            throw new Error("illegal lunar year: ".concat(year));
        }
    };
    LunarYear.fromYear = function (year) {
        return new LunarYear(year);
    };
    LunarYear.prototype.getDayCount = function () {
        var n = 0;
        var months = this.getMonths();
        for (var i = 0, j = months.length; i < j; i++) {
            n += months[i].getDayCount();
        }
        return n;
    };
    LunarYear.prototype.getMonthCount = function () {
        return this.getLeapMonth() < 1 ? 12 : 13;
    };
    LunarYear.prototype.getName = function () {
        return "\u519C\u5386".concat(this.getSixtyCycle().getName(), "\u5E74");
    };
    LunarYear.prototype.next = function (n) {
        return LunarYear.fromYear(this.getYear() + n);
    };
    LunarYear.prototype.getLeapMonth = function () {
        var y = this.getYear();
        if (y === -1) {
            return 11;
        }
        for (var i = 0, j = LunarYear.LEAP.length; i < j; i++) {
            if (LunarYear.LEAP[i].indexOf(y) > -1) {
                return i + 1;
            }
        }
        return 0;
    };
    LunarYear.prototype.getSixtyCycle = function () {
        return SixtyCycle.fromIndex(this.getYear() - 4);
    };
    LunarYear.prototype.getTwenty = function () {
        return Twenty.fromIndex(Math.floor((this.getYear() - 1864) / 20));
    };
    LunarYear.prototype.getNineStar = function () {
        return NineStar.fromIndex(63 + this.getTwenty().getSixty().getIndex() * 3 - this.getSixtyCycle().getIndex());
    };
    LunarYear.prototype.getJupiterDirection = function () {
        return Direction.fromIndex([0, 7, 7, 2, 3, 3, 8, 1, 1, 6, 0, 0][this.getSixtyCycle().getEarthBranch().getIndex()]);
    };
    LunarYear.prototype.getFirstMonth = function () {
        return LunarMonth.fromYm(this.getYear(), 1);
    };
    LunarYear.prototype.getMonths = function () {
        var l = [];
        var y = this.getYear();
        var leapMonth = this.getLeapMonth();
        for (var i = 1; i < 13; i++) {
            l.push(LunarMonth.fromYm(y, i));
            if (i === leapMonth) {
                l.push(LunarMonth.fromYm(y, -i));
            }
        }
        return l;
    };
    LunarYear.prototype.getKitchenGodSteed = function () {
        return KitchenGodSteed.fromLunarYear(this.getYear());
    };
    LunarYear.isInit = false;
    LunarYear.LEAP = [];
    return LunarYear;
}(YearUnit));
exports.LunarYear = LunarYear;
var LunarSeason = (function (_super) {
    __extends(LunarSeason, _super);
    function LunarSeason(indexOrName) {
        return _super.call(this, LunarSeason.NAMES, indexOrName) || this;
    }
    LunarSeason.fromIndex = function (index) {
        return new LunarSeason(LunarSeason.numeric(index, 'lunar season index'));
    };
    LunarSeason.fromName = function (name) {
        return new LunarSeason(name);
    };
    LunarSeason.prototype.next = function (n) {
        return LunarSeason.fromIndex(this.nextIndex(n));
    };
    LunarSeason.NAMES = ['孟春', '仲春', '季春', '孟夏', '仲夏', '季夏', '孟秋', '仲秋', '季秋', '孟冬', '仲冬', '季冬'];
    return LunarSeason;
}(LoopTyme));
exports.LunarSeason = LunarSeason;
var FetusMonth = (function (_super) {
    __extends(FetusMonth, _super);
    function FetusMonth(indexOrName) {
        return _super.call(this, FetusMonth.NAMES, indexOrName) || this;
    }
    FetusMonth.fromLunarMonth = function (lunarMonth) {
        return lunarMonth.isLeap() ? null : new FetusMonth(lunarMonth.getMonth() - 1);
    };
    FetusMonth.prototype.next = function (n) {
        return new FetusMonth(this.nextIndex(n));
    };
    FetusMonth.NAMES = ['占房床', '占户窗', '占门堂', '占厨灶', '占房床', '占床仓', '占碓磨', '占厕户', '占门房', '占房床', '占灶炉', '占房床'];
    return FetusMonth;
}(LoopTyme));
exports.FetusMonth = FetusMonth;
var LunarMonth = (function (_super) {
    __extends(LunarMonth, _super);
    function LunarMonth(year, month) {
        var _this = this;
        var y = LunarMonth.numeric(year, 'lunar year');
        var m = LunarMonth.numeric(month, 'lunar month');
        LunarMonth.validate(y, m);
        _this = _super.call(this, y, Math.abs(m)) || this;
        _this.leap = m < 0;
        return _this;
    }
    LunarMonth.validate = function (year, month) {
        if (month == 0 || month > 12 || month < -12) {
            throw new Error("illegal lunar month: ".concat(month));
        }
        if (month < 0 && -month != LunarYear.fromYear(year).getLeapMonth()) {
            throw new Error("illegal leap month ".concat(-month, " in lunar year ").concat(year));
        }
    };
    LunarMonth.fromYm = function (year, month) {
        return new LunarMonth(year, month);
    };
    LunarMonth.prototype.getNewMoon = function () {
        var y = this.getYear();
        var dongZhiJd = SolarTerm.fromIndex(y, 0).getCursoryJulianDay();
        var w = ShouXingUtil.calcShuo(dongZhiJd);
        if (w > dongZhiJd) {
            w -= 29.53;
        }
        var offset = 2;
        if (y > 8 && y < 24) {
            offset = 1;
        }
        else if (LunarYear.fromYear(y - 1).getLeapMonth() > 10 && y != 239 && y != 240) {
            offset = 3;
        }
        return w + 29.5306 * (offset + this.getIndexInYear());
    };
    LunarMonth.prototype.getLunarYear = function () {
        return LunarYear.fromYear(this.getYear());
    };
    LunarMonth.prototype.getMonthWithLeap = function () {
        var m = this.getMonth();
        return this.leap ? -m : m;
    };
    LunarMonth.prototype.getDayCount = function () {
        var w = this.getNewMoon();
        return ~~(ShouXingUtil.calcShuo(w + 29.5306) - ShouXingUtil.calcShuo(w));
    };
    LunarMonth.prototype.getIndexInYear = function () {
        var m = this.getMonth();
        var index = m - 1;
        if (this.leap) {
            index += 1;
        }
        else {
            var leapMonth = this.getLunarYear().getLeapMonth();
            if (leapMonth > 0 && m > leapMonth) {
                index += 1;
            }
        }
        return index;
    };
    LunarMonth.prototype.getSeason = function () {
        return LunarSeason.fromIndex(this.getMonth() - 1);
    };
    LunarMonth.prototype.getFirstJulianDay = function () {
        return JulianDay.fromJulianDay(JulianDay.J2000 + ShouXingUtil.calcShuo(this.getNewMoon()));
    };
    LunarMonth.prototype.isLeap = function () {
        return this.leap;
    };
    LunarMonth.prototype.getWeekCount = function (start) {
        return Math.ceil((this.indexOf(this.getFirstJulianDay().getWeek().getIndex() - start, 7) + this.getDayCount()) / 7);
    };
    LunarMonth.prototype.getName = function () {
        return (this.leap ? '闰' : '') + LunarMonth.NAMES[this.getMonth() - 1];
    };
    LunarMonth.prototype.toString = function () {
        return this.getLunarYear().toString() + this.getName();
    };
    LunarMonth.prototype.next = function (n) {
        if (n === 0) {
            return LunarMonth.fromYm(this.getYear(), this.getMonthWithLeap());
        }
        var m = this.getIndexInYear() + 1 + n;
        var y = this.getLunarYear();
        if (n > 0) {
            var monthCount = y.getMonthCount();
            while (m > monthCount) {
                m -= monthCount;
                y = y.next(1);
                monthCount = y.getMonthCount();
            }
        }
        else {
            while (m <= 0) {
                y = y.next(-1);
                m += y.getMonthCount();
            }
        }
        var leap = false;
        var leapMonth = y.getLeapMonth();
        if (leapMonth > 0) {
            if (m === leapMonth + 1) {
                leap = true;
            }
            if (m > leapMonth) {
                m--;
            }
        }
        return LunarMonth.fromYm(y.getYear(), leap ? -m : m);
    };
    LunarMonth.prototype.getDays = function () {
        var y = this.getYear();
        var m = this.getMonthWithLeap();
        var l = [];
        for (var i = 1, j = this.getDayCount(); i <= j; i++) {
            l.push(LunarDay.fromYmd(y, m, i));
        }
        return l;
    };
    LunarMonth.prototype.getFirstDay = function () {
        return LunarDay.fromYmd(this.getYear(), this.getMonthWithLeap(), 1);
    };
    LunarMonth.prototype.getWeeks = function (start) {
        var y = this.getYear();
        var m = this.getMonthWithLeap();
        var l = [];
        for (var i = 0, j = this.getWeekCount(start); i < j; i++) {
            l.push(LunarWeek.fromYm(y, m, i, start));
        }
        return l;
    };
    LunarMonth.prototype.getSixtyCycle = function () {
        return SixtyCycle.fromIndex(this.year * 12 + this.month - 47);
    };
    LunarMonth.prototype.getNineStar = function () {
        var index = this.getSixtyCycle().getEarthBranch().getIndex();
        if (index < 2) {
            index += 3;
        }
        return NineStar.fromIndex(27 - this.getLunarYear().getSixtyCycle().getEarthBranch().getIndex() % 3 * 3 - index);
    };
    LunarMonth.prototype.getJupiterDirection = function () {
        var sixtyCycle = this.getSixtyCycle();
        var n = [7, -1, 1, 3][sixtyCycle.getEarthBranch().next(-2).getIndex() % 4];
        return n !== -1 ? Direction.fromIndex(n) : sixtyCycle.getHeavenStem().getDirection();
    };
    LunarMonth.prototype.getFetus = function () {
        return FetusMonth.fromLunarMonth(this);
    };
    LunarMonth.prototype.getMinorRen = function () {
        return MinorRen.fromIndex((this.getMonth() - 1) % 6);
    };
    LunarMonth.NAMES = ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    return LunarMonth;
}(MonthUnit));
exports.LunarMonth = LunarMonth;
var LunarWeek = (function (_super) {
    __extends(LunarWeek, _super);
    function LunarWeek(year, month, index, start) {
        var y = SolarWeek.numeric(year, 'lunar year');
        var m = SolarWeek.numeric(month, 'lunar month');
        var i = SolarWeek.numeric(index, 'lunar week index');
        var s = SolarWeek.numeric(start, 'week index');
        LunarWeek.validate(y, m, i, s);
        return _super.call(this, y, m, i, s) || this;
    }
    LunarWeek.validate = function (year, month, index, start) {
        WeekUnit.validate(year, month, index, start);
        var m = LunarMonth.fromYm(year, month);
        if (index >= m.getWeekCount(start)) {
            throw new Error("illegal lunar week index: ".concat(index, " in month: ").concat(m));
        }
    };
    LunarWeek.fromYm = function (year, month, index, start) {
        return new LunarWeek(year, month, index, start);
    };
    LunarWeek.prototype.getLunarMonth = function () {
        return LunarMonth.fromYm(this.getYear(), this.getMonth());
    };
    LunarWeek.prototype.getName = function () {
        return LunarWeek.NAMES[this.getIndex()];
    };
    LunarWeek.prototype.toString = function () {
        return this.getLunarMonth().toString() + this.getName();
    };
    LunarWeek.prototype.next = function (n) {
        var startIndex = this.getStart();
        var d = this.getIndex() + n;
        var m = this.getLunarMonth();
        if (n > 0) {
            var weekCount = m.getWeekCount(startIndex);
            while (d >= weekCount) {
                d -= weekCount;
                m = m.next(1);
                if (m.getFirstDay().getWeek().getIndex() !== startIndex) {
                    d += 1;
                }
                weekCount = m.getWeekCount(startIndex);
            }
        }
        else {
            while (d < 0) {
                if (m.getFirstDay().getWeek().getIndex() !== startIndex) {
                    d -= 1;
                }
                m = m.next(-1);
                d += m.getWeekCount(startIndex);
            }
        }
        return LunarWeek.fromYm(m.getYear(), m.getMonthWithLeap(), d, startIndex);
    };
    LunarWeek.prototype.getFirstDay = function () {
        var firstDay = LunarDay.fromYmd(this.getYear(), this.getMonth(), 1);
        return firstDay.next(this.getIndex() * 7 - this.indexOf(firstDay.getWeek().getIndex() - this.getStart(), 7));
    };
    LunarWeek.prototype.getDays = function () {
        var l = [];
        var d = this.getFirstDay();
        l.push(d);
        for (var i = 1; i < 7; i++) {
            l.push(d.next(i));
        }
        return l;
    };
    LunarWeek.prototype.equals = function (o) {
        return o && o.getFirstDay().equals(this.getFirstDay());
    };
    LunarWeek.NAMES = ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周'];
    return LunarWeek;
}(WeekUnit));
exports.LunarWeek = LunarWeek;
var LunarDay = (function (_super) {
    __extends(LunarDay, _super);
    function LunarDay(year, month, day) {
        var y = LunarDay.numeric(year, 'lunar year');
        var m = LunarDay.numeric(month, 'lunar month');
        var d = LunarDay.numeric(day, 'lunar day');
        LunarDay.validate(y, m, d);
        return _super.call(this, y, m, d) || this;
    }
    LunarDay.validate = function (year, month, day) {
        if (day < 1) {
            throw new Error("illegal day ".concat(day));
        }
        var m = LunarMonth.fromYm(year, month);
        if (day > m.getDayCount()) {
            throw new Error("illegal day ".concat(day, " in ").concat(m));
        }
    };
    LunarDay.fromYmd = function (year, month, day) {
        return new LunarDay(year, month, day);
    };
    LunarDay.prototype.getLunarMonth = function () {
        return LunarMonth.fromYm(this.getYear(), this.getMonth());
    };
    LunarDay.prototype.getName = function () {
        return LunarDay.NAMES[this.getDay() - 1];
    };
    LunarDay.prototype.toString = function () {
        return this.getLunarMonth().toString() + this.getName();
    };
    LunarDay.prototype.next = function (n) {
        return this.getSolarDay().next(n).getLunarDay();
    };
    LunarDay.prototype.isBefore = function (target) {
        var aYear = this.getYear();
        var bYear = target.getYear();
        if (aYear !== bYear) {
            return aYear < bYear;
        }
        var aMonth = this.getMonth();
        var bMonth = target.getMonth();
        if (aMonth !== bMonth) {
            var t = Math.abs(bMonth);
            return aMonth == t || Math.abs(aMonth) < t;
        }
        return this.getDay() < target.getDay();
    };
    LunarDay.prototype.isAfter = function (target) {
        var aYear = this.getYear();
        var bYear = target.getYear();
        if (aYear !== bYear) {
            return aYear > bYear;
        }
        var aMonth = this.getMonth();
        var bMonth = target.getMonth();
        if (aMonth != bMonth) {
            var t = Math.abs(aMonth);
            return t == bMonth || t > Math.abs(bMonth);
        }
        return this.getDay() > target.getDay();
    };
    LunarDay.prototype.getWeek = function () {
        return this.getSolarDay().getWeek();
    };
    LunarDay.prototype.getYearSixtyCycle = function () {
        return this.getSixtyCycleDay().getYear();
    };
    LunarDay.prototype.getMonthSixtyCycle = function () {
        return this.getSixtyCycleDay().getMonth();
    };
    LunarDay.prototype.getSixtyCycle = function () {
        return SixtyCycle.fromIndex(~~(this.getLunarMonth().getFirstJulianDay().next(this.day - 12).getDay()));
    };
    LunarDay.prototype.getDuty = function () {
        return this.getSixtyCycleDay().getDuty();
    };
    LunarDay.prototype.getTwelveStar = function () {
        return this.getSixtyCycleDay().getTwelveStar();
    };
    LunarDay.prototype.getNineStar = function () {
        var d = this.getSolarDay();
        var y = d.getYear();
        var winterSolstice = SolarTerm.fromIndex(y, 0).getSolarDay();
        var summerSolstice = SolarTerm.fromIndex(y, 12).getSolarDay();
        var nextWinterSolstice = SolarTerm.fromIndex(y + 1, 0).getSolarDay();
        var w = winterSolstice.next(winterSolstice.getLunarDay().getSixtyCycle().stepsCloseTo(0));
        var s = summerSolstice.next(summerSolstice.getLunarDay().getSixtyCycle().stepsCloseTo(0));
        var n = nextWinterSolstice.next(nextWinterSolstice.getLunarDay().getSixtyCycle().stepsCloseTo(0));
        if (d.isBefore(w)) {
            return NineStar.fromIndex(w.subtract(d) - 1);
        }
        if (d.isBefore(s)) {
            return NineStar.fromIndex(d.subtract(w));
        }
        return NineStar.fromIndex(d.isBefore(n) ? n.subtract(d) - 1 : d.subtract(n));
    };
    LunarDay.prototype.getJupiterDirection = function () {
        var index = this.getSixtyCycle().getIndex();
        return index % 12 < 6 ? Element.fromIndex(~~(index / 12)).getDirection() : this.getLunarMonth().getLunarYear().getJupiterDirection();
    };
    LunarDay.prototype.getFetusDay = function () {
        return FetusDay.fromLunarDay(this);
    };
    LunarDay.prototype.getPhaseDay = function () {
        var today = this.getSolarDay();
        var m = this.getLunarMonth().next(1);
        var p = Phase.fromIndex(m.getYear(), m.getMonthWithLeap(), 0);
        var d = p.getSolarDay();
        while (d.isAfter(today)) {
            p = p.next(-1);
            d = p.getSolarDay();
        }
        return new PhaseDay(p, today.subtract(d));
    };
    LunarDay.prototype.getPhase = function () {
        return this.getPhaseDay().getPhase();
    };
    LunarDay.prototype.getSolarDay = function () {
        return this.getLunarMonth().getFirstJulianDay().next(this.getDay() - 1).getSolarDay();
    };
    LunarDay.prototype.getSixtyCycleDay = function () {
        return this.getSolarDay().getSixtyCycleDay();
    };
    LunarDay.prototype.getTwentyEightStar = function () {
        return TwentyEightStar.fromIndex([10, 18, 26, 6, 14, 22, 2][this.getSolarDay().getWeek().getIndex()]).next(-7 * this.getSixtyCycle().getEarthBranch().getIndex());
    };
    LunarDay.prototype.getFestival = function () {
        return LunarFestival.fromYmd(this.getYear(), this.getMonth(), this.getDay());
    };
    LunarDay.prototype.getSixStar = function () {
        return SixStar.fromIndex((Math.abs(this.getMonth()) + this.getDay() - 2) % 6);
    };
    LunarDay.prototype.getGods = function () {
        return this.getSixtyCycleDay().getGods();
    };
    LunarDay.prototype.getRecommends = function () {
        return this.getSixtyCycleDay().getRecommends();
    };
    LunarDay.prototype.getAvoids = function () {
        return this.getSixtyCycleDay().getAvoids();
    };
    LunarDay.prototype.getHours = function () {
        var l = [];
        var y = this.getYear();
        var m = this.getMonth();
        var d = this.getDay();
        l.push(LunarHour.fromYmdHms(y, m, d, 0, 0, 0));
        for (var i = 0; i < 24; i += 2) {
            l.push(LunarHour.fromYmdHms(y, m, d, i + 1, 0, 0));
        }
        return l;
    };
    LunarDay.prototype.getMinorRen = function () {
        return this.getLunarMonth().getMinorRen().next(this.getDay() - 1);
    };
    LunarDay.prototype.getThreePillars = function () {
        return this.getSixtyCycleDay().getThreePillars();
    };
    LunarDay.NAMES = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];
    return LunarDay;
}(DayUnit));
exports.LunarDay = LunarDay;
var SixtyCycleYear = (function (_super) {
    __extends(SixtyCycleYear, _super);
    function SixtyCycleYear(year) {
        var _this = _super.call(this) || this;
        var y = SixtyCycleYear.numeric(year, 'sixty cycle year');
        if (y < -1 || y > 9999) {
            throw new Error("illegal sixty cycle year: ".concat(year));
        }
        _this.year = y;
        return _this;
    }
    SixtyCycleYear.fromYear = function (year) {
        return new SixtyCycleYear(year);
    };
    SixtyCycleYear.prototype.getYear = function () {
        return this.year;
    };
    SixtyCycleYear.prototype.getName = function () {
        return "".concat(this.getSixtyCycle().getName(), "\u5E74");
    };
    SixtyCycleYear.prototype.next = function (n) {
        return SixtyCycleYear.fromYear(this.year + n);
    };
    SixtyCycleYear.prototype.getSixtyCycle = function () {
        return SixtyCycle.fromIndex(this.year - 4);
    };
    SixtyCycleYear.prototype.getTwenty = function () {
        return Twenty.fromIndex(Math.floor((this.year - 1864) / 20));
    };
    SixtyCycleYear.prototype.getNineStar = function () {
        return NineStar.fromIndex(63 + this.getTwenty().getSixty().getIndex() * 3 - this.getSixtyCycle().getIndex());
    };
    SixtyCycleYear.prototype.getJupiterDirection = function () {
        return Direction.fromIndex([0, 7, 7, 2, 3, 3, 8, 1, 1, 6, 0, 0][this.getSixtyCycle().getEarthBranch().getIndex()]);
    };
    SixtyCycleYear.prototype.getFirstMonth = function () {
        return new SixtyCycleMonth(this, SixtyCycle.fromIndex(this.year * 12 - 46));
    };
    SixtyCycleYear.prototype.getMonths = function () {
        var l = [];
        var m = this.getFirstMonth();
        l.push(m);
        for (var i = 1; i < 12; i++) {
            l.push(m.next(i));
        }
        return l;
    };
    return SixtyCycleYear;
}(AbstractTyme));
exports.SixtyCycleYear = SixtyCycleYear;
var SixtyCycleMonth = (function (_super) {
    __extends(SixtyCycleMonth, _super);
    function SixtyCycleMonth(year, month) {
        var _this = _super.call(this) || this;
        _this.year = year;
        _this.month = month;
        return _this;
    }
    SixtyCycleMonth.fromIndex = function (year, index) {
        return SixtyCycleYear.fromYear(year).getFirstMonth().next(SixtyCycleMonth.numeric(index, 'index'));
    };
    SixtyCycleMonth.prototype.getSixtyCycleYear = function () {
        return this.year;
    };
    SixtyCycleMonth.prototype.getYear = function () {
        return this.year.getSixtyCycle();
    };
    SixtyCycleMonth.prototype.getIndexInYear = function () {
        return this.month.getEarthBranch().next(-2).getIndex();
    };
    SixtyCycleMonth.prototype.getName = function () {
        return this.month.getName() + '月';
    };
    SixtyCycleMonth.prototype.toString = function () {
        return this.year.toString() + this.getName();
    };
    SixtyCycleMonth.prototype.next = function (n) {
        return new SixtyCycleMonth(SixtyCycleYear.fromYear(Math.floor((this.year.getYear() * 12 + this.getIndexInYear() + n) / 12)), this.month.next(n));
    };
    SixtyCycleMonth.prototype.getFirstDay = function () {
        return SixtyCycleDay.fromSolarDay(SolarTerm.fromIndex(this.year.getYear(), 3 + this.getIndexInYear() * 2).getSolarDay());
    };
    SixtyCycleMonth.prototype.getDays = function () {
        var l = [];
        var d = this.getFirstDay();
        while (d.getSixtyCycleMonth().equals(this)) {
            l.push(d);
            d = d.next(1);
        }
        return l;
    };
    SixtyCycleMonth.prototype.getSixtyCycle = function () {
        return this.month;
    };
    SixtyCycleMonth.prototype.getNineStar = function () {
        var index = this.getSixtyCycle().getEarthBranch().getIndex();
        if (index < 2) {
            index += 3;
        }
        return NineStar.fromIndex(27 - this.year.getSixtyCycle().getEarthBranch().getIndex() % 3 * 3 - index);
    };
    SixtyCycleMonth.prototype.getJupiterDirection = function () {
        var sixtyCycle = this.getSixtyCycle();
        var n = [7, -1, 1, 3][sixtyCycle.getEarthBranch().next(-2).getIndex() % 4];
        return n === -1 ? sixtyCycle.getHeavenStem().getDirection() : Direction.fromIndex(n);
    };
    return SixtyCycleMonth;
}(AbstractTyme));
exports.SixtyCycleMonth = SixtyCycleMonth;
var SixtyCycleDay = (function (_super) {
    __extends(SixtyCycleDay, _super);
    function SixtyCycleDay(solarDay, month, day) {
        var _this = _super.call(this) || this;
        _this.solarDay = solarDay;
        _this.month = month;
        _this.day = day;
        return _this;
    }
    SixtyCycleDay.fromSolarDay = function (solarDay) {
        var term = solarDay.getTerm();
        var index = term.getIndex();
        var offset = index < 3 ? (index === 0 ? -2 : -1) : Math.floor((index - 3) / 2);
        var month = SixtyCycleYear.fromYear(term.getYear()).getFirstMonth().next(offset);
        return new SixtyCycleDay(solarDay, month, SixtyCycle.fromIndex(solarDay.subtract(SolarDay.fromYmd(2000, 1, 7))));
    };
    SixtyCycleDay.prototype.getSolarDay = function () {
        return this.solarDay;
    };
    SixtyCycleDay.prototype.getSixtyCycleMonth = function () {
        return this.month;
    };
    SixtyCycleDay.prototype.getYear = function () {
        return this.month.getYear();
    };
    SixtyCycleDay.prototype.getMonth = function () {
        return this.month.getSixtyCycle();
    };
    SixtyCycleDay.prototype.getSixtyCycle = function () {
        return this.day;
    };
    SixtyCycleDay.prototype.getName = function () {
        return this.day.getName() + '日';
    };
    SixtyCycleDay.prototype.toString = function () {
        return this.month.toString() + this.getName();
    };
    SixtyCycleDay.prototype.next = function (n) {
        return SixtyCycleDay.fromSolarDay(this.solarDay.next(n));
    };
    SixtyCycleDay.prototype.getDuty = function () {
        return Duty.fromIndex(this.getSixtyCycle().getEarthBranch().getIndex() - this.getMonth().getEarthBranch().getIndex());
    };
    SixtyCycleDay.prototype.getTwelveStar = function () {
        return TwelveStar.fromIndex(this.getSixtyCycle().getEarthBranch().getIndex() + (8 - this.getMonth().getEarthBranch().getIndex() % 6) * 2);
    };
    SixtyCycleDay.prototype.getNineStar = function () {
        var y = this.solarDay.getYear();
        var winterSolstice = SolarTerm.fromIndex(y, 0).getSolarDay();
        var summerSolstice = SolarTerm.fromIndex(y, 12).getSolarDay();
        var nextWinterSolstice = SolarTerm.fromIndex(y + 1, 0).getSolarDay();
        var w = winterSolstice.next(winterSolstice.getLunarDay().getSixtyCycle().stepsCloseTo(0));
        var s = summerSolstice.next(summerSolstice.getLunarDay().getSixtyCycle().stepsCloseTo(0));
        var n = nextWinterSolstice.next(nextWinterSolstice.getLunarDay().getSixtyCycle().stepsCloseTo(0));
        if (this.solarDay.isBefore(w)) {
            return NineStar.fromIndex(w.subtract(this.solarDay) - 1);
        }
        if (this.solarDay.isBefore(s)) {
            return NineStar.fromIndex(this.solarDay.subtract(w));
        }
        return NineStar.fromIndex(this.solarDay.isBefore(n) ? n.subtract(this.solarDay) - 1 : this.solarDay.subtract(n));
    };
    SixtyCycleDay.prototype.getJupiterDirection = function () {
        var index = this.getSixtyCycle().getIndex();
        return index % 12 < 6 ? Element.fromIndex(~~(index / 12)).getDirection() : this.month.getSixtyCycleYear().getJupiterDirection();
    };
    SixtyCycleDay.prototype.getFetusDay = function () {
        return FetusDay.fromSixtyCycleDay(this);
    };
    SixtyCycleDay.prototype.getTwentyEightStar = function () {
        return TwentyEightStar.fromIndex([10, 18, 26, 6, 14, 22, 2][this.solarDay.getWeek().getIndex()]).next(-7 * this.day.getEarthBranch().getIndex());
    };
    SixtyCycleDay.prototype.getGods = function () {
        return God.getDayGods(this.getMonth(), this.day);
    };
    SixtyCycleDay.prototype.getRecommends = function () {
        return Taboo.getDayRecommends(this.getMonth(), this.day);
    };
    SixtyCycleDay.prototype.getAvoids = function () {
        return Taboo.getDayAvoids(this.getMonth(), this.day);
    };
    SixtyCycleDay.prototype.getHours = function () {
        var l = [];
        var d = this.solarDay.next(-1);
        var h = SixtyCycleHour.fromSolarTime(SolarTime.fromYmdHms(d.getYear(), d.getMonth(), d.getDay(), 23, 0, 0));
        l.push(h);
        for (var i = 0; i < 11; i++) {
            h = h.next(7200);
            l.push(h);
        }
        return l;
    };
    SixtyCycleDay.prototype.getThreePillars = function () {
        return new ThreePillars(this.getYear(), this.getMonth(), this.getSixtyCycle());
    };
    return SixtyCycleDay;
}(AbstractTyme));
exports.SixtyCycleDay = SixtyCycleDay;
var SixtyCycleHour = (function (_super) {
    __extends(SixtyCycleHour, _super);
    function SixtyCycleHour(solarTime) {
        var _this = _super.call(this) || this;
        var solarYear = solarTime.getYear();
        var springSolarTime = SolarTerm.fromIndex(solarYear, 3).getJulianDay().getSolarTime();
        var lunarHour = solarTime.getLunarHour();
        var lunarDay = lunarHour.getLunarDay();
        var lunarYear = lunarDay.getLunarMonth().getLunarYear();
        if (lunarYear.getYear() == solarYear) {
            if (solarTime.isBefore(springSolarTime)) {
                lunarYear = lunarYear.next(-1);
            }
        }
        else if (lunarYear.getYear() < solarYear) {
            if (!solarTime.isBefore(springSolarTime)) {
                lunarYear = lunarYear.next(1);
            }
        }
        var term = solarTime.getTerm();
        var index = term.getIndex() - 3;
        if (index < 0 && term.getJulianDay().getSolarTime().isAfter(SolarTerm.fromIndex(solarYear, 3).getJulianDay().getSolarTime())) {
            index += 24;
        }
        var d = lunarDay.getSixtyCycle();
        _this.solarTime = solarTime;
        _this.day = new SixtyCycleDay(solarTime.getSolarDay(), new SixtyCycleMonth(SixtyCycleYear.fromYear(lunarYear.getYear()), LunarMonth.fromYm(solarYear, 1).getSixtyCycle().next(~~Math.floor(index * 0.5))), solarTime.getHour() < 23 ? d : d.next(1));
        _this.hour = lunarHour.getSixtyCycle();
        return _this;
    }
    SixtyCycleHour.fromSolarTime = function (solarTime) {
        return new SixtyCycleHour(solarTime);
    };
    SixtyCycleHour.prototype.getYear = function () {
        return this.day.getYear();
    };
    SixtyCycleHour.prototype.getMonth = function () {
        return this.day.getMonth();
    };
    SixtyCycleHour.prototype.getDay = function () {
        return this.day.getSixtyCycle();
    };
    SixtyCycleHour.prototype.getSixtyCycle = function () {
        return this.hour;
    };
    SixtyCycleHour.prototype.getSixtyCycleDay = function () {
        return this.day;
    };
    SixtyCycleHour.prototype.getSolarTime = function () {
        return this.solarTime;
    };
    SixtyCycleHour.prototype.getName = function () {
        return this.hour.getName() + '时';
    };
    SixtyCycleHour.prototype.toString = function () {
        return "".concat(this.day).concat(this.getName());
    };
    SixtyCycleHour.prototype.getIndexInDay = function () {
        var h = this.solarTime.getHour();
        return h === 23 ? 0 : ~~((h + 1) / 2);
    };
    SixtyCycleHour.prototype.next = function (n) {
        return SixtyCycleHour.fromSolarTime(this.solarTime.next(n));
    };
    SixtyCycleHour.prototype.getTwelveStar = function () {
        return TwelveStar.fromIndex(this.hour.getEarthBranch().getIndex() + (8 - this.getDay().getEarthBranch().getIndex() % 6) * 2);
    };
    SixtyCycleHour.prototype.getNineStar = function () {
        var solar = this.solarTime.getSolarDay();
        var dongZhi = SolarTerm.fromIndex(solar.getYear(), 0);
        var earthBranchIndex = this.getIndexInDay() % 12;
        var index = [8, 5, 2][this.getDay().getEarthBranch().getIndex() % 3];
        if (!solar.isBefore(dongZhi.getJulianDay().getSolarDay()) && solar.isBefore(dongZhi.next(12).getJulianDay().getSolarDay())) {
            index = 8 + earthBranchIndex - index;
        }
        else {
            index -= earthBranchIndex;
        }
        return NineStar.fromIndex(index);
    };
    SixtyCycleHour.prototype.getEightChar = function () {
        return new EightChar(this.getYear(), this.getMonth(), this.getDay(), this.hour);
    };
    SixtyCycleHour.prototype.getRecommends = function () {
        return Taboo.getHourRecommends(this.getDay(), this.hour);
    };
    SixtyCycleHour.prototype.getAvoids = function () {
        return Taboo.getHourAvoids(this.getDay(), this.hour);
    };
    return SixtyCycleHour;
}(AbstractTyme));
exports.SixtyCycleHour = SixtyCycleHour;
var ThreePillars = (function (_super) {
    __extends(ThreePillars, _super);
    function ThreePillars(year, month, day) {
        var _this = _super.call(this) || this;
        _this.year = year instanceof SixtyCycle ? year : SixtyCycle.fromName(year);
        _this.month = month instanceof SixtyCycle ? month : SixtyCycle.fromName(month);
        _this.day = day instanceof SixtyCycle ? day : SixtyCycle.fromName(day);
        return _this;
    }
    ThreePillars.prototype.getYear = function () {
        return this.year;
    };
    ThreePillars.prototype.getMonth = function () {
        return this.month;
    };
    ThreePillars.prototype.getDay = function () {
        return this.day;
    };
    ThreePillars.prototype.getName = function () {
        return "".concat(this.year, " ").concat(this.month, " ").concat(this.day);
    };
    ThreePillars.prototype.getSolarDays = function (startYear, endYear) {
        var l = [];
        var m = this.month.getEarthBranch().next(-2).getIndex();
        if (!HeavenStem.fromIndex((this.year.getHeavenStem().getIndex() + 1) * 2 + m).equals(this.month.getHeavenStem())) {
            return l;
        }
        var y = this.year.next(-57).getIndex() + 1;
        m *= 2;
        var baseYear = startYear - 1;
        if (baseYear > y) {
            y += 60 * ~~(Math.ceil((baseYear - y) / 60.0));
        }
        while (y <= endYear) {
            var term = SolarTerm.fromIndex(y, 3);
            if (m > 0) {
                term = term.next(m);
            }
            var solarDay = term.getSolarDay();
            if (solarDay.getYear() >= startYear) {
                var d = this.day.next(-solarDay.getLunarDay().getSixtyCycle().getIndex()).getIndex();
                if (d > 0) {
                    solarDay = solarDay.next(d);
                }
                if (solarDay.getSixtyCycleDay().getThreePillars().equals(this)) {
                    l.push(solarDay);
                }
            }
            y += 60;
        }
        return l;
    };
    return ThreePillars;
}(AbstractCulture));
exports.ThreePillars = ThreePillars;
var DefaultEightCharProvider = (function () {
    function DefaultEightCharProvider() {
    }
    DefaultEightCharProvider.prototype.getEightChar = function (hour) {
        return hour.getSixtyCycleHour().getEightChar();
    };
    return DefaultEightCharProvider;
}());
exports.DefaultEightCharProvider = DefaultEightCharProvider;
var LunarSect2EightCharProvider = (function () {
    function LunarSect2EightCharProvider() {
    }
    LunarSect2EightCharProvider.prototype.getEightChar = function (hour) {
        var h = hour.getSixtyCycleHour();
        return new EightChar(h.getYear(), h.getMonth(), hour.getLunarDay().getSixtyCycle(), h.getSixtyCycle());
    };
    return LunarSect2EightCharProvider;
}());
exports.LunarSect2EightCharProvider = LunarSect2EightCharProvider;
var LunarHour = (function (_super) {
    __extends(LunarHour, _super);
    function LunarHour(year, month, day, hour, minute, second) {
        var y = LunarHour.numeric(year, 'lunar year');
        var m = LunarHour.numeric(month, 'lunar month');
        var d = LunarHour.numeric(day, 'lunar day');
        var h = LunarHour.numeric(hour, 'hour');
        var n = LunarHour.numeric(minute, 'minute');
        var s = LunarHour.numeric(second, 'second');
        LunarHour.validate(y, m, d, h, n, s);
        return _super.call(this, y, m, d, h, n, s) || this;
    }
    LunarHour.validate = function (year, month, day, hour, minute, second) {
        SecondUnit.validate(year, month, day, hour, minute, second);
        LunarDay.validate(year, month, day);
    };
    LunarHour.fromYmdHms = function (year, month, day, hour, minute, second) {
        return new LunarHour(year, month, day, hour, minute, second);
    };
    LunarHour.prototype.getLunarDay = function () {
        return LunarDay.fromYmd(this.getYear(), this.getMonth(), this.getDay());
    };
    LunarHour.prototype.getName = function () {
        return EarthBranch.fromIndex(this.getIndexInDay()).getName() + '时';
    };
    LunarHour.prototype.toString = function () {
        return "".concat(this.getLunarDay()).concat(this.getSixtyCycle().getName(), "\u65F6");
    };
    LunarHour.prototype.getIndexInDay = function () {
        return ~~((this.getHour() + 1) / 2);
    };
    LunarHour.prototype.next = function (n) {
        var h = this.getHour();
        var m = this.getMinute();
        var s = this.getSecond();
        if (n == 0) {
            return LunarHour.fromYmdHms(this.getYear(), this.getMonth(), this.getDay(), h, m, s);
        }
        var t = h + n * 2;
        var diff = t < 0 ? -1 : 1;
        var r = Math.abs(t);
        var days = ~~(r / 24) * diff;
        r = (r % 24) * diff;
        if (r < 0) {
            r += 24;
            days--;
        }
        var d = this.getLunarDay().next(days);
        return LunarHour.fromYmdHms(d.getYear(), d.getMonth(), d.getDay(), r, m, s);
    };
    LunarHour.prototype.isBefore = function (target) {
        var aDay = this.getLunarDay();
        var bDay = target.getLunarDay();
        if (!aDay.equals(bDay)) {
            return aDay.isBefore(bDay);
        }
        var aHour = this.getHour();
        var bHour = target.getHour();
        if (aHour !== bHour) {
            return aHour < bHour;
        }
        var aMinute = this.getMinute();
        var bMinute = target.getMinute();
        return aMinute !== bMinute ? aMinute < bMinute : this.getSecond() < target.getSecond();
    };
    LunarHour.prototype.isAfter = function (target) {
        var aDay = this.getLunarDay();
        var bDay = target.getLunarDay();
        if (!aDay.equals(bDay)) {
            return aDay.isAfter(bDay);
        }
        var aHour = this.getHour();
        var bHour = target.getHour();
        if (aHour !== bHour) {
            return aHour > bHour;
        }
        var aMinute = this.getMinute();
        var bMinute = target.getMinute();
        return aMinute !== bMinute ? aMinute > bMinute : this.getSecond() > target.getSecond();
    };
    LunarHour.prototype.getYearSixtyCycle = function () {
        return this.getSixtyCycleHour().getYear();
    };
    LunarHour.prototype.getMonthSixtyCycle = function () {
        return this.getSixtyCycleHour().getMonth();
    };
    LunarHour.prototype.getDaySixtyCycle = function () {
        return this.getSixtyCycleHour().getDay();
    };
    LunarHour.prototype.getSixtyCycle = function () {
        var e = this.getIndexInDay();
        var h = this.getLunarDay().getSixtyCycle().getHeavenStem();
        if (this.hour >= 23) {
            h = h.next(1);
            e = 0;
        }
        return SixtyCycle.fromIndex(h.getIndex() * 12 + e);
    };
    LunarHour.prototype.getTwelveStar = function () {
        return TwelveStar.fromIndex(this.getSixtyCycle().getEarthBranch().getIndex() + (8 - this.getSixtyCycleHour().getDay().getEarthBranch().getIndex() % 6) * 2);
    };
    LunarHour.prototype.getNineStar = function () {
        var d = this.getLunarDay();
        var solar = d.getSolarDay();
        var dongZhi = SolarTerm.fromIndex(solar.getYear(), 0);
        var earthBranchIndex = this.getIndexInDay() % 12;
        var index = [8, 5, 2][d.getSixtyCycle().getEarthBranch().getIndex() % 3];
        if (!solar.isBefore(dongZhi.getJulianDay().getSolarDay()) && solar.isBefore(dongZhi.next(12).getJulianDay().getSolarDay())) {
            index = 8 + earthBranchIndex - index;
        }
        else {
            index -= earthBranchIndex;
        }
        return NineStar.fromIndex(index);
    };
    LunarHour.prototype.getSolarTime = function () {
        var d = this.getLunarDay().getSolarDay();
        return SolarTime.fromYmdHms(d.getYear(), d.getMonth(), d.getDay(), this.getHour(), this.getMinute(), this.getSecond());
    };
    LunarHour.prototype.getSixtyCycleHour = function () {
        return this.getSolarTime().getSixtyCycleHour();
    };
    LunarHour.prototype.getEightChar = function () {
        return LunarHour.provider.getEightChar(this);
    };
    LunarHour.prototype.getRecommends = function () {
        return Taboo.getHourRecommends(this.getSixtyCycleHour().getDay(), this.getSixtyCycle());
    };
    LunarHour.prototype.getAvoids = function () {
        return Taboo.getHourAvoids(this.getSixtyCycleHour().getDay(), this.getSixtyCycle());
    };
    LunarHour.prototype.getMinorRen = function () {
        return this.getLunarDay().getMinorRen().next(this.getIndexInDay());
    };
    LunarHour.provider = new DefaultEightCharProvider();
    return LunarHour;
}(SecondUnit));
exports.LunarHour = LunarHour;
var JulianDay = (function (_super) {
    __extends(JulianDay, _super);
    function JulianDay(day) {
        var _this = _super.call(this) || this;
        _this.day = JulianDay.numeric(day, 'julian day');
        return _this;
    }
    JulianDay.fromJulianDay = function (day) {
        return new JulianDay(day);
    };
    JulianDay.fromYmdHms = function (year, month, day, hour, minute, second) {
        var y = JulianDay.numeric(year, 'year');
        var m = JulianDay.numeric(month, 'month');
        var h = JulianDay.numeric(hour, 'hour');
        var i = JulianDay.numeric(minute, 'minute');
        var s = JulianDay.numeric(second, 'second');
        var d = JulianDay.numeric(day, 'day') + ((s / 60 + i) / 60 + h) / 24;
        var n = 0;
        var g = y * 372 + m * 31 + ~~(d) >= 588829;
        if (m <= 2) {
            m += 12;
            y--;
        }
        if (g) {
            n = ~~(y * 0.01);
            n = 2 - n + ~~(n * 0.25);
        }
        return JulianDay.fromJulianDay(~~(365.25 * (y + 4716)) + ~~(30.6001 * (m + 1)) + d + n - 1524.5);
    };
    JulianDay.prototype.getDay = function () {
        return this.day;
    };
    JulianDay.prototype.getName = function () {
        return "".concat(this.day);
    };
    JulianDay.prototype.next = function (n) {
        return JulianDay.fromJulianDay(this.day + n);
    };
    JulianDay.prototype.getSolarDay = function () {
        return this.getSolarTime().getSolarDay();
    };
    JulianDay.prototype.getSolarTime = function () {
        var d = ~~(this.day + 0.5);
        var f = this.day + 0.5 - d;
        if (d >= 2299161) {
            var c = ~~((d - 1867216.25) / 36524.25);
            d += 1 + c - ~~(c * 0.25);
        }
        d += 1524;
        var y = ~~((d - 122.1) / 365.25);
        d -= ~~(365.25 * y);
        var m = ~~(d / 30.601);
        d -= ~~(30.601 * m);
        if (m > 13) {
            m -= 12;
        }
        else {
            y -= 1;
        }
        m -= 1;
        y -= 4715;
        f *= 24;
        var hour = ~~(f);
        f -= hour;
        f *= 60;
        var minute = ~~(f);
        f -= minute;
        f *= 60;
        var second = Math.round(f);
        return second < 60 ? SolarTime.fromYmdHms(y, m, d, hour, minute, second) : SolarTime.fromYmdHms(y, m, d, hour, minute, second - 60).next(60);
    };
    JulianDay.prototype.getWeek = function () {
        return Week.fromIndex(~~(this.day + 0.5) + 7000001);
    };
    JulianDay.prototype.subtract = function (target) {
        return this.day - target.getDay();
    };
    JulianDay.J2000 = 2451545;
    return JulianDay;
}(AbstractTyme));
exports.JulianDay = JulianDay;
var ShouXingUtil = (function () {
    function ShouXingUtil() {
    }
    ShouXingUtil.decode = function (s) {
        var o = '0000000000';
        var o2 = o + o;
        s = s.replace(/J/g, '00');
        s = s.replace(/I/g, '000');
        s = s.replace(/H/g, '0000');
        s = s.replace(/G/g, '00000');
        s = s.replace(/t/g, '02');
        s = s.replace(/s/g, '002');
        s = s.replace(/r/g, '0002');
        s = s.replace(/q/g, '00002');
        s = s.replace(/p/g, '000002');
        s = s.replace(/o/g, '0000002');
        s = s.replace(/n/g, '00000002');
        s = s.replace(/m/g, '000000002');
        s = s.replace(/l/g, '0000000002');
        s = s.replace(/k/g, '01');
        s = s.replace(/j/g, '0101');
        s = s.replace(/i/g, '001');
        s = s.replace(/h/g, '001001');
        s = s.replace(/g/g, '0001');
        s = s.replace(/f/g, '00001');
        s = s.replace(/e/g, '000001');
        s = s.replace(/d/g, '0000001');
        s = s.replace(/c/g, '00000001');
        s = s.replace(/b/g, '000000001');
        s = s.replace(/a/g, '0000000001');
        s = s.replace(/A/g, o2 + o2 + o2);
        s = s.replace(/B/g, o2 + o2 + o);
        s = s.replace(/C/g, o2 + o2);
        s = s.replace(/D/g, o2 + o);
        s = s.replace(/E/g, o2);
        s = s.replace(/F/g, o);
        return s;
    };
    ShouXingUtil.nutationLon2 = function (t) {
        var a = -1.742 * t;
        var t2 = t * t;
        var dl = 0;
        for (var i = 0, j = ShouXingUtil.NUT_B.length; i < j; i += 5) {
            dl += (ShouXingUtil.NUT_B[i + 3] + a) * Math.sin(ShouXingUtil.NUT_B[i] + ShouXingUtil.NUT_B[i + 1] * t + ShouXingUtil.NUT_B[i + 2] * t2);
            a = 0;
        }
        return dl / 100 / ShouXingUtil.SECOND_PER_RAD;
    };
    ShouXingUtil.eLon = function (t, n) {
        t /= 10;
        var v = 0, tn = 1;
        var n1, n2;
        var m;
        var c;
        var n0;
        var m0 = ShouXingUtil.XL0[2] - ShouXingUtil.XL0[1];
        for (var i = 0; i < 6; i++, tn *= t) {
            n1 = ~~(ShouXingUtil.XL0[1 + i]);
            n2 = ~~(ShouXingUtil.XL0[2 + i]);
            n0 = n2 - n1;
            if (n0 === 0) {
                continue;
            }
            if (n < 0) {
                m = n2;
            }
            else {
                m = ~~((3 * n * n0 / m0 + 0.5) + n1);
                if (i != 0) {
                    m += 3;
                }
                if (m > n2) {
                    m = n2;
                }
            }
            c = 0;
            for (var j = n1; j < m; j += 3) {
                c += ShouXingUtil.XL0[j] * Math.cos(ShouXingUtil.XL0[j + 1] + t * ShouXingUtil.XL0[j + 2]);
            }
            v += c * tn;
        }
        v /= ShouXingUtil.XL0[0];
        var t2 = t * t;
        return v + (-0.0728 - 2.7702 * t - 1.1019 * t2 - 0.0996 * t2 * t) / ShouXingUtil.SECOND_PER_RAD;
    };
    ShouXingUtil.mLon = function (t, n) {
        var obl = ShouXingUtil.XL1[0].length;
        var tn = 1;
        var v = 0;
        var j;
        var c;
        var t2 = t * t, t3 = t2 * t, t4 = t3 * t;
        var t5 = t4 * t;
        var tx = t - 10;
        v += (3.81034409 + 8399.684730072 * t - 3.319e-05 * t2 + 3.11e-08 * t3 - 2.033e-10 * t4) * ShouXingUtil.SECOND_PER_RAD;
        v += 5028.792262 * t + 1.1124406 * t2 + 0.00007699 * t3 - 0.000023479 * t4 - 0.0000000178 * t5;
        if (tx > 0) {
            v += -0.866 + 1.43 * tx + 0.054 * tx * tx;
        }
        t2 /= 1e4;
        t3 /= 1e8;
        t4 /= 1e8;
        n *= 6;
        if (n < 0) {
            n = obl;
        }
        for (var i = 0, x = ShouXingUtil.XL1.length; i < x; i++, tn *= t) {
            var f = ShouXingUtil.XL1[i];
            var l = f.length;
            var m = ~~((n * l / obl + 0.5));
            if (i > 0) {
                m += 6;
            }
            if (m >= l) {
                m = l;
            }
            for (j = 0, c = 0; j < m; j += 6) {
                c += f[j] * Math.cos(f[j + 1] + t * f[j + 2] + t2 * f[j + 3] + t3 * f[j + 4] + t4 * f[j + 5]);
            }
            v += c * tn;
        }
        return v / ShouXingUtil.SECOND_PER_RAD;
    };
    ShouXingUtil.gxcSunLon = function (t) {
        var t2 = t * t;
        return -20.49552 * (1 + (0.016708634 - 0.000042037 * t - 0.0000001267 * t2) * Math.cos(-0.043126 + 628.301955 * t - 0.000002732 * t2)) / ShouXingUtil.SECOND_PER_RAD;
    };
    ShouXingUtil.ev = function (t) {
        var f = 628.307585 * t;
        return 628.332 + 21 * Math.sin(1.527 + f) + 0.44 * Math.sin(1.48 + f * 2) + 0.129 * Math.sin(5.82 + f) * t + 0.00055 * Math.sin(4.21 + f) * t * t;
    };
    ShouXingUtil.saLon = function (t, n) {
        return ShouXingUtil.eLon(t, n) + ShouXingUtil.nutationLon2(t) + ShouXingUtil.gxcSunLon(t) + Math.PI;
    };
    ShouXingUtil.dtExt = function (y, jsd) {
        var dy = (y - 1820) / 100;
        return -20 + jsd * dy * dy;
    };
    ShouXingUtil.dtCalc = function (y) {
        var size = ShouXingUtil.DT_AT.length;
        var y0 = ShouXingUtil.DT_AT[size - 2];
        var t0 = ShouXingUtil.DT_AT[size - 1];
        if (y >= y0) {
            var jsd = 31;
            if (y > y0 + 100) {
                return ShouXingUtil.dtExt(y, jsd);
            }
            return ShouXingUtil.dtExt(y, jsd) - (ShouXingUtil.dtExt(y0, jsd) - t0) * (y0 + 100 - y) / 100;
        }
        var i;
        for (i = 0; i < size; i += 5) {
            if (y < ShouXingUtil.DT_AT[i + 5]) {
                break;
            }
        }
        var t1 = (y - ShouXingUtil.DT_AT[i]) / (ShouXingUtil.DT_AT[i + 5] - ShouXingUtil.DT_AT[i]) * 10;
        var t2 = t1 * t1;
        var t3 = t2 * t1;
        return ShouXingUtil.DT_AT[i + 1] + ShouXingUtil.DT_AT[i + 2] * t1 + ShouXingUtil.DT_AT[i + 3] * t2 + ShouXingUtil.DT_AT[i + 4] * t3;
    };
    ShouXingUtil.dtT = function (t) {
        return ShouXingUtil.dtCalc(t / 365.2425 + 2000) / ShouXingUtil.SECOND_PER_DAY;
    };
    ShouXingUtil.mv = function (t) {
        var v = 8399.71 - 914 * Math.sin(0.7848 + 8328.691425 * t + 0.0001523 * t * t);
        return v - (179 * Math.sin(2.543 + 15542.7543 * t) + 160 * Math.sin(0.1874 + 7214.0629 * t) + 62 * Math.sin(3.14 + 16657.3828 * t) + 34 * Math.sin(4.827 + 16866.9323 * t) + 22 * Math.sin(4.9 + 23871.4457 * t) + 12 * Math.sin(2.59 + 14914.4523 * t) + 7 * Math.sin(0.23 + 6585.7609 * t) + 5 * Math.sin(0.9 + 25195.624 * t) + 5 * Math.sin(2.32 - 7700.3895 * t) + 5 * Math.sin(3.88 + 8956.9934 * t) + 5 * Math.sin(0.49 + 7771.3771 * t));
    };
    ShouXingUtil.saLonT = function (w) {
        var v = 628.3319653318;
        var t = (w - 1.75347 - Math.PI) / v;
        v = ShouXingUtil.ev(t);
        t += (w - ShouXingUtil.saLon(t, 10)) / v;
        return t + (w - ShouXingUtil.saLon(t, -1)) / ShouXingUtil.ev(t);
    };
    ShouXingUtil.msaLon = function (t, mn, sn) {
        return ShouXingUtil.mLon(t, mn) + (-3.4E-6) - (ShouXingUtil.eLon(t, sn) + ShouXingUtil.gxcSunLon(t) + Math.PI);
    };
    ShouXingUtil.msaLonT = function (w) {
        var v = 7771.37714500204;
        var t = (w + 1.08472) / v;
        t += (w - ShouXingUtil.msaLon(t, 3, 3)) / v;
        v = ShouXingUtil.mv(t) - ShouXingUtil.ev(t);
        t += (w - ShouXingUtil.msaLon(t, 20, 10)) / v;
        return t + (w - ShouXingUtil.msaLon(t, -1, 60)) / v;
    };
    ShouXingUtil.saLonT2 = function (w) {
        var v = 628.3319653318;
        var t = (w - 1.75347 - Math.PI) / v;
        t -= (0.000005297 * t * t + 0.0334166 * Math.cos(4.669257 + 628.307585 * t) + 0.0002061 * Math.cos(2.67823 + 628.307585 * t) * t) / v;
        return t + (w - ShouXingUtil.eLon(t, 8) - Math.PI + (20.5 + 17.2 * Math.sin(2.1824 - 33.75705 * t)) / ShouXingUtil.SECOND_PER_RAD) / v;
    };
    ShouXingUtil.msaLonT2 = function (w) {
        var t, v = 7771.37714500204;
        t = (w + 1.08472) / v;
        var t2 = t * t;
        t -= (-0.00003309 * t2 + 0.10976 * Math.cos(0.784758 + 8328.6914246 * t + 0.000152292 * t2) + 0.02224 * Math.cos(0.18740 + 7214.0628654 * t - 0.00021848 * t2) - 0.03342 * Math.cos(4.669257 + 628.307585 * t)) / v;
        t2 = t * t;
        var l = ShouXingUtil.mLon(t, 20) - (4.8950632 + 628.3319653318 * t + 0.000005297 * t2 + 0.0334166 * Math.cos(4.669257 + 628.307585 * t) + 0.0002061 * Math.cos(2.67823 + 628.307585 * t) * t + 0.000349 * Math.cos(4.6261 + 1256.61517 * t) - 20.5 / ShouXingUtil.SECOND_PER_RAD);
        v = 7771.38 - 914 * Math.sin(0.7848 + 8328.691425 * t + 0.0001523 * t2) - 179 * Math.sin(2.543 + 15542.7543 * t) - 160 * Math.sin(0.1874 + 7214.0629 * t);
        return t + (w - l) / v;
    };
    ShouXingUtil.qiHigh = function (w) {
        var t = ShouXingUtil.saLonT2(w) * 36525;
        t = t - ShouXingUtil.dtT(t) + ShouXingUtil.ONE_THIRD;
        var v = ((t + 0.5) % 1) * ShouXingUtil.SECOND_PER_DAY;
        if (v < 1200 || v > ShouXingUtil.SECOND_PER_DAY - 1200) {
            t = ShouXingUtil.saLonT(w) * 36525 - ShouXingUtil.dtT(t) + ShouXingUtil.ONE_THIRD;
        }
        return t;
    };
    ShouXingUtil.shuoHigh = function (w) {
        var t = ShouXingUtil.msaLonT2(w) * 36525;
        t = t - ShouXingUtil.dtT(t) + ShouXingUtil.ONE_THIRD;
        var v = ((t + 0.5) % 1) * ShouXingUtil.SECOND_PER_DAY;
        if (v < 1800 || v > ShouXingUtil.SECOND_PER_DAY - 1800) {
            t = ShouXingUtil.msaLonT(w) * 36525 - ShouXingUtil.dtT(t) + ShouXingUtil.ONE_THIRD;
        }
        return t;
    };
    ShouXingUtil.qiLow = function (w) {
        var v = 628.3319653318;
        var t = (w - 4.895062166) / v;
        t -= (53 * t * t + 334116 * Math.cos(4.67 + 628.307585 * t) + 2061 * Math.cos(2.678 + 628.3076 * t) * t) / v / 10000000;
        var n = 48950621.66 + 6283319653.318 * t + 53 * t * t + 334166 * Math.cos(4.669257 + 628.307585 * t) + 3489 * Math.cos(4.6261 + 1256.61517 * t) + 2060.6 * Math.cos(2.67823 + 628.307585 * t) * t - 994 - 834 * Math.sin(2.1824 - 33.75705 * t);
        t -= (n / 10000000 - w) / 628.332 + (32 * (t + 1.8) * (t + 1.8) - 20) / ShouXingUtil.SECOND_PER_DAY / 36525;
        return t * 36525 + ShouXingUtil.ONE_THIRD;
    };
    ShouXingUtil.shuoLow = function (w) {
        var v = 7771.37714500204;
        var t = (w + 1.08472) / v;
        t -= (-0.0000331 * t * t + 0.10976 * Math.cos(0.785 + 8328.6914 * t) + 0.02224 * Math.cos(0.187 + 7214.0629 * t) - 0.03342 * Math.cos(4.669 + 628.3076 * t)) / v + (32 * (t + 1.8) * (t + 1.8) - 20) / ShouXingUtil.SECOND_PER_DAY / 36525;
        return t * 36525 + ShouXingUtil.ONE_THIRD;
    };
    ShouXingUtil.calcShuo = function (jd) {
        var size = ShouXingUtil.SHUO_KB.length;
        var d = 0;
        var pc = 14;
        jd += JulianDay.J2000;
        var f1 = ShouXingUtil.SHUO_KB[0] - pc;
        var f2 = ShouXingUtil.SHUO_KB[size - 1] - pc;
        var f3 = 2436935;
        if (jd < f1 || jd >= f3) {
            d = Math.floor(ShouXingUtil.shuoHigh(Math.floor((jd + pc - 2451551) / 29.5306) * ShouXingUtil.PI_2) + 0.5);
        }
        else if (jd >= f1 && jd < f2) {
            var i = void 0;
            for (i = 0; i < size; i += 2) {
                if (jd + pc < ShouXingUtil.SHUO_KB[i + 2]) {
                    break;
                }
            }
            d = ShouXingUtil.SHUO_KB[i] + ShouXingUtil.SHUO_KB[i + 1] * Math.floor((jd + pc - ShouXingUtil.SHUO_KB[i]) / ShouXingUtil.SHUO_KB[i + 1]);
            d = Math.floor(d + 0.5);
            if (d === 1683460) {
                d++;
            }
            d -= JulianDay.J2000;
        }
        else if (jd >= f2 && jd < f3) {
            var n = ShouXingUtil.SB.charCodeAt(Math.floor((jd - f2) / 29.5306));
            d = Math.floor(ShouXingUtil.shuoLow(Math.floor((jd + pc - 2451551) / 29.5306) * ShouXingUtil.PI_2) + 0.5);
            if (49 === n) {
                d += 1;
            }
            else if (50 === n) {
                d -= 1;
            }
        }
        return d;
    };
    ShouXingUtil.calcQi = function (jd) {
        var size = ShouXingUtil.QI_KB.length;
        var d = 0;
        var pc = 7;
        var i;
        jd += JulianDay.J2000;
        var f1 = ShouXingUtil.QI_KB[0] - pc;
        var f2 = ShouXingUtil.QI_KB[size - 1] - pc;
        var f3 = 2436935;
        if (jd < f1 || jd >= f3) {
            d = Math.floor(ShouXingUtil.qiHigh(Math.floor((jd + pc - 2451259) / 365.2422 * 24) * Math.PI / 12) + 0.5);
        }
        else if (jd >= f1 && jd < f2) {
            for (i = 0; i < size; i += 2) {
                if (jd + pc < ShouXingUtil.QI_KB[i + 2]) {
                    break;
                }
            }
            d = ShouXingUtil.QI_KB[i] + ShouXingUtil.QI_KB[i + 1] * Math.floor((jd + pc - ShouXingUtil.QI_KB[i]) / ShouXingUtil.QI_KB[i + 1]);
            d = Math.floor(d + 0.5);
            if (d === 1683460) {
                d++;
            }
            d -= JulianDay.J2000;
        }
        else if (jd >= f2 && jd < f3) {
            d = Math.floor(ShouXingUtil.qiLow(Math.floor((jd + pc - 2451259) / 365.2422 * 24) * Math.PI / 12) + 0.5);
            var n = ShouXingUtil.QB.charCodeAt(Math.floor((jd - f2) / 365.2422 * 24));
            if (49 === n) {
                d += 1;
            }
            else if (50 === n) {
                d -= 1;
            }
        }
        return d;
    };
    ShouXingUtil.qiAccurate = function (w) {
        var t = ShouXingUtil.saLonT(w) * 36525;
        return t - ShouXingUtil.dtT(t) + ShouXingUtil.ONE_THIRD;
    };
    ShouXingUtil.qiAccurate2 = function (jd) {
        var d = Math.PI / 12;
        var w = Math.floor((jd + 293) / 365.2422 * 24) * d;
        var a = ShouXingUtil.qiAccurate(w);
        if (a - jd > 5) {
            return ShouXingUtil.qiAccurate(w - d);
        }
        return a - jd < -5 ? ShouXingUtil.qiAccurate(w + d) : a;
    };
    ShouXingUtil.PI_2 = 2 * Math.PI;
    ShouXingUtil.ONE_THIRD = 1.0 / 3;
    ShouXingUtil.SECOND_PER_DAY = 86400;
    ShouXingUtil.SECOND_PER_RAD = 648000 / Math.PI;
    ShouXingUtil.NUT_B = [
        2.1824, -33.75705, 36e-6, -1720, 920,
        3.5069, 1256.66393, 11e-6, -132, 57,
        1.3375, 16799.4182, -51e-6, -23, 10,
        4.3649, -67.5141, 72e-6, 21, -9,
        0.04, -628.302, 0, -14, 0,
        2.36, 8328.691, 0, 7, 0,
        3.46, 1884.966, 0, -5, 2,
        5.44, 16833.175, 0, -4, 2,
        3.69, 25128.110, 0, -3, 0,
        3.55, 628.362, 0, 2, 0
    ];
    ShouXingUtil.DT_AT = [
        -4000, 108371.7, -13036.80, 392.000, 0.0000,
        -500, 17201.0, -627.82, 16.170, -0.3413,
        -150, 12200.6, -346.41, 5.403, -0.1593,
        150, 9113.8, -328.13, -1.647, 0.0377,
        500, 5707.5, -391.41, 0.915, 0.3145,
        900, 2203.4, -283.45, 13.034, -0.1778,
        1300, 490.1, -57.35, 2.085, -0.0072,
        1600, 120.0, -9.81, -1.532, 0.1403,
        1700, 10.2, -0.91, 0.510, -0.0370,
        1800, 13.4, -0.72, 0.202, -0.0193,
        1830, 7.8, -1.81, 0.416, -0.0247,
        1860, 8.3, -0.13, -0.406, 0.0292,
        1880, -5.4, 0.32, -0.183, 0.0173,
        1900, -2.3, 2.06, 0.169, -0.0135,
        1920, 21.2, 1.69, -0.304, 0.0167,
        1940, 24.2, 1.22, -0.064, 0.0031,
        1960, 33.2, 0.51, 0.231, -0.0109,
        1980, 51.0, 1.29, -0.026, 0.0032,
        2000, 63.87, 0.1, 0, 0,
        2005, 64.7, 0.21, 0, 0,
        2012, 66.8, 0.22, 0, 0,
        2016, 68.1024, 0.5456, -0.0542, -0.001172,
        2020, 69.3612, 0.0422, -0.0502, 0.006216,
        2024, 69.1752, -0.0335, -0.0048, 0.000811,
        2028, 69.0206, -0.0275, 0.0055, -0.000014,
        2032, 68.9981, 0.0163, 0.0054, 0.000006,
        2036, 69.1498, 0.0599, 0.0053, 0.000026,
        2040, 69.4751, 0.1035, 0.0051, 0.000046,
        2044, 69.9737, 0.1469, 0.0050, 0.000066,
        2048, 70.6451, 0.1903, 0.0049, 0.000085,
        2050, 71.0457
    ];
    ShouXingUtil.XL0 = [
        10000000000,
        20, 578, 920, 1100, 1124, 1136, 1148, 1217, 1226, 1229, 1229, 1229, 1229, 1937, 2363, 2618, 2633, 2660, 2666,
        17534704567, 0.00000000000, 0.00000000000, 334165646, 4.669256804, 6283.075849991, 3489428, 4.6261024,
        12566.1517000, 349706, 2.744118, 5753.384885, 341757, 2.828866, 3.523118, 313590, 3.627670, 77713.771468,
        267622, 4.418084, 7860.419392, 234269, 6.135162, 3930.209696, 132429, 0.742464, 11506.769770, 127317, 2.037097,
        529.690965, 119917, 1.109629, 1577.343542, 99025, 5.23268, 5884.92685, 90186, 2.04505, 26.29832, 85722, 3.50849,
        398.14900, 77979, 1.17883, 5223.69392, 75314, 2.53339, 5507.55324, 50526, 4.58293, 18849.22755, 49238, 4.20507,
        775.52261, 35666, 2.91954, 0.06731, 31709, 5.84902, 11790.62909, 28413, 1.89869, 796.29801, 27104, 0.31489,
        10977.07880, 24281, 0.34481, 5486.77784, 20616, 4.80647, 2544.31442, 20539, 1.86948, 5573.14280, 20226, 2.45768,
        6069.77675, 15552, 0.83306, 213.29910, 13221, 3.41118, 2942.46342, 12618, 1.08303, 20.77540, 11513, 0.64545,
        0.98032, 10285, 0.63600, 4694.00295, 10190, 0.97569, 15720.83878, 10172, 4.26680, 7.11355, 9921, 6.2099,
        2146.1654, 9761, 0.6810, 155.4204, 8580, 5.9832, 161000.6857, 8513, 1.2987, 6275.9623, 8471, 3.6708, 71430.6956,
        7964, 1.8079, 17260.1547, 7876, 3.0370, 12036.4607, 7465, 1.7551, 5088.6288, 7387, 3.5032, 3154.6871, 7355,
        4.6793, 801.8209, 6963, 0.8330, 9437.7629, 6245, 3.9776, 8827.3903, 6115, 1.8184, 7084.8968, 5696, 2.7843,
        6286.5990, 5612, 4.3869, 14143.4952, 5558, 3.4701, 6279.5527, 5199, 0.1891, 12139.5535, 5161, 1.3328, 1748.0164,
        5115, 0.2831, 5856.4777, 4900, 0.4874, 1194.4470, 4104, 5.3682, 8429.2413, 4094, 2.3985, 19651.0485, 3920,
        6.1683, 10447.3878, 3677, 6.0413, 10213.2855, 3660, 2.5696, 1059.3819, 3595, 1.7088, 2352.8662, 3557, 1.7760,
        6812.7668, 3329, 0.5931, 17789.8456, 3041, 0.4429, 83996.8473, 3005, 2.7398, 1349.8674, 2535, 3.1647, 4690.4798,
        2474, 0.2148, 3.5904, 2366, 0.4847, 8031.0923, 2357, 2.0653, 3340.6124, 2282, 5.2220, 4705.7323, 2189, 5.5559,
        553.5694, 2142, 1.4256, 16730.4637, 2109, 4.1483, 951.7184, 2030, 0.3713, 283.8593, 1992, 5.2221, 12168.0027,
        1986, 5.7747, 6309.3742, 1912, 3.8222, 23581.2582, 1889, 5.3863, 149854.4001, 1790, 2.2149, 13367.9726, 1748,
        4.5605, 135.0651, 1622, 5.9884, 11769.8537, 1508, 4.1957, 6256.7775, 1442, 4.1932, 242.7286, 1435, 3.7236,
        38.0277, 1397, 4.4014, 6681.2249, 1362, 1.8893, 7632.9433, 1250, 1.1305, 5.5229, 1205, 2.6223, 955.5997, 1200,
        1.0035, 632.7837, 1129, 0.1774, 4164.3120, 1083, 0.3273, 103.0928, 1052, 0.9387, 11926.2544, 1050, 5.3591,
        1592.5960, 1033, 6.1998, 6438.4962, 1001, 6.0291, 5746.2713, 980, 0.999, 11371.705, 980, 5.244, 27511.468, 938,
        2.624, 5760.498, 923, 0.483, 522.577, 922, 4.571, 4292.331, 905, 5.337, 6386.169, 862, 4.165, 7058.598, 841,
        3.299, 7234.794, 836, 4.539, 25132.303, 813, 6.112, 4732.031, 812, 6.271, 426.598, 801, 5.821, 28.449, 787,
        0.996, 5643.179, 776, 2.957, 23013.540, 769, 3.121, 7238.676, 758, 3.974, 11499.656, 735, 4.386, 316.392, 731,
        0.607, 11513.883, 719, 3.998, 74.782, 706, 0.323, 263.084, 676, 5.911, 90955.552, 663, 3.665, 17298.182, 653,
        5.791, 18073.705, 630, 4.717, 6836.645, 615, 1.458, 233141.314, 612, 1.075, 19804.827, 596, 3.321, 6283.009,
        596, 2.876, 6283.143, 555, 2.452, 12352.853, 541, 5.392, 419.485, 531, 0.382, 31441.678, 519, 4.065, 6208.294,
        513, 2.361, 10973.556, 494, 5.737, 9917.697, 450, 3.272, 11015.106, 449, 3.653, 206.186, 447, 2.064, 7079.374,
        435, 4.423, 5216.580, 421, 1.906, 245.832, 413, 0.921, 3738.761, 402, 0.840, 20.355, 387, 1.826, 11856.219, 379,
        2.344, 3.881, 374, 2.954, 3128.389, 370, 5.031, 536.805, 365, 1.018, 16200.773, 365, 1.083, 88860.057, 352,
        5.978, 3894.182, 352, 2.056, 244287.600, 351, 3.713, 6290.189, 340, 1.106, 14712.317, 339, 0.978, 8635.942, 339,
        3.202, 5120.601, 333, 0.837, 6496.375, 325, 3.479, 6133.513, 316, 5.089, 21228.392, 316, 1.328, 10873.986, 309,
        3.646, 10.637, 303, 1.802, 35371.887, 296, 3.397, 9225.539, 288, 6.026, 154717.610, 281, 2.585, 14314.168, 262,
        3.856, 266.607, 262, 2.579, 22483.849, 257, 1.561, 23543.231, 255, 3.949, 1990.745, 251, 3.744, 10575.407, 240,
        1.161, 10984.192, 238, 0.106, 7.046, 236, 4.272, 6040.347, 234, 3.577, 10969.965, 211, 3.714, 65147.620, 210,
        0.754, 13521.751, 207, 4.228, 5650.292, 202, 0.814, 170.673, 201, 4.629, 6037.244, 200, 0.381, 6172.870, 199,
        3.933, 6206.810, 199, 5.197, 6262.300, 197, 1.046, 18209.330, 195, 1.070, 5230.807, 195, 4.869, 36.028, 194,
        4.313, 6244.943, 192, 1.229, 709.933, 192, 5.595, 6282.096, 192, 0.602, 6284.056, 189, 3.744, 23.878, 188,
        1.904, 15.252, 188, 0.867, 22003.915, 182, 3.681, 15110.466, 181, 0.491, 1.484, 179, 3.222, 39302.097, 179,
        1.259, 12559.038,
        62833196674749, 0.000000000000, 0.000000000000, 20605886, 2.67823456, 6283.07584999, 430343, 2.635127,
        12566.151700, 42526, 1.59047, 3.52312, 11926, 5.79557, 26.29832, 10898, 2.96618, 1577.34354, 9348, 2.5921,
        18849.2275, 7212, 1.1385, 529.6910, 6777, 1.8747, 398.1490, 6733, 4.4092, 5507.5532, 5903, 2.8880, 5223.6939,
        5598, 2.1747, 155.4204, 4541, 0.3980, 796.2980, 3637, 0.4662, 775.5226, 2896, 2.6471, 7.1135, 2084, 5.3414,
        0.9803, 1910, 1.8463, 5486.7778, 1851, 4.9686, 213.2991, 1729, 2.9912, 6275.9623, 1623, 0.0322, 2544.3144, 1583,
        1.4305, 2146.1654, 1462, 1.2053, 10977.0788, 1246, 2.8343, 1748.0164, 1188, 3.2580, 5088.6288, 1181, 5.2738,
        1194.4470, 1151, 2.0750, 4694.0030, 1064, 0.7661, 553.5694, 997, 1.303, 6286.599, 972, 4.239, 1349.867, 945,
        2.700, 242.729, 858, 5.645, 951.718, 758, 5.301, 2352.866, 639, 2.650, 9437.763, 610, 4.666, 4690.480, 583,
        1.766, 1059.382, 531, 0.909, 3154.687, 522, 5.661, 71430.696, 520, 1.854, 801.821, 504, 1.425, 6438.496, 433,
        0.241, 6812.767, 426, 0.774, 10447.388, 413, 5.240, 7084.897, 374, 2.001, 8031.092, 356, 2.429, 14143.495, 350,
        4.800, 6279.553, 337, 0.888, 12036.461, 337, 3.862, 1592.596, 325, 3.400, 7632.943, 322, 0.616, 8429.241, 318,
        3.188, 4705.732, 297, 6.070, 4292.331, 295, 1.431, 5746.271, 290, 2.325, 20.355, 275, 0.935, 5760.498, 270,
        4.804, 7234.794, 253, 6.223, 6836.645, 228, 5.003, 17789.846, 225, 5.672, 11499.656, 215, 5.202, 11513.883, 208,
        3.955, 10213.286, 208, 2.268, 522.577, 206, 2.224, 5856.478, 206, 2.550, 25132.303, 203, 0.910, 6256.778, 189,
        0.532, 3340.612, 188, 4.735, 83996.847, 179, 1.474, 4164.312, 178, 3.025, 5.523, 177, 3.026, 5753.385, 159,
        4.637, 3.286, 157, 6.124, 5216.580, 155, 3.077, 6681.225, 154, 4.200, 13367.973, 143, 1.191, 3894.182, 138,
        3.093, 135.065, 136, 4.245, 426.598, 134, 5.765, 6040.347, 128, 3.085, 5643.179, 127, 2.092, 6290.189, 125,
        3.077, 11926.254, 125, 3.445, 536.805, 114, 3.244, 12168.003, 112, 2.318, 16730.464, 111, 3.901, 11506.770, 111,
        5.320, 23.878, 105, 3.750, 7860.419, 103, 2.447, 1990.745, 96, 0.82, 3.88, 96, 4.08, 6127.66, 91, 5.42, 206.19,
        91, 0.42, 7079.37, 88, 5.17, 11790.63, 81, 0.34, 9917.70, 80, 3.89, 10973.56, 78, 2.40, 1589.07, 78, 2.58,
        11371.70, 77, 3.98, 955.60, 77, 3.36, 36.03, 76, 1.30, 103.09, 75, 5.18, 10969.97, 75, 4.96, 6496.37, 73, 5.21,
        38.03, 72, 2.65, 6309.37, 70, 5.61, 3738.76, 69, 2.60, 3496.03, 69, 0.39, 15.25, 69, 2.78, 20.78, 65, 1.13,
        7058.60, 64, 4.28, 28.45, 61, 5.63, 10984.19, 60, 0.73, 419.48, 60, 5.28, 10575.41, 58, 5.55, 17298.18, 58,
        3.19, 4732.03,
        5291887, 0.0000000, 0.0000000, 871984, 1.072097, 6283.075850, 30913, 0.86729, 12566.15170, 2734, 0.0530, 3.5231,
        1633, 5.1883, 26.2983, 1575, 3.6846, 155.4204, 954, 0.757, 18849.228, 894, 2.057, 77713.771, 695, 0.827,
        775.523, 506, 4.663, 1577.344, 406, 1.031, 7.114, 381, 3.441, 5573.143, 346, 5.141, 796.298, 317, 6.053,
        5507.553, 302, 1.192, 242.729, 289, 6.117, 529.691, 271, 0.306, 398.149, 254, 2.280, 553.569, 237, 4.381,
        5223.694, 208, 3.754, 0.980, 168, 0.902, 951.718, 153, 5.759, 1349.867, 145, 4.364, 1748.016, 134, 3.721,
        1194.447, 125, 2.948, 6438.496, 122, 2.973, 2146.165, 110, 1.271, 161000.686, 104, 0.604, 3154.687, 100, 5.986,
        6286.599, 92, 4.80, 5088.63, 89, 5.23, 7084.90, 83, 3.31, 213.30, 76, 3.42, 5486.78, 71, 6.19, 4690.48, 68,
        3.43, 4694.00, 65, 1.60, 2544.31, 64, 1.98, 801.82, 61, 2.48, 10977.08, 50, 1.44, 6836.65, 49, 2.34, 1592.60,
        46, 1.31, 4292.33, 46, 3.81, 149854.40, 43, 0.04, 7234.79, 40, 4.94, 7632.94, 39, 1.57, 71430.70, 38, 3.17,
        6309.37, 35, 0.99, 6040.35, 35, 0.67, 1059.38, 31, 3.18, 2352.87, 31, 3.55, 8031.09, 30, 1.92, 10447.39, 30,
        2.52, 6127.66, 28, 4.42, 9437.76, 28, 2.71, 3894.18, 27, 0.67, 25132.30, 26, 5.27, 6812.77, 25, 0.55, 6279.55,
        23, 1.38, 4705.73, 22, 0.64, 6256.78, 20, 6.07, 640.88,
        28923, 5.84384, 6283.07585, 3496, 0.0000, 0.0000, 1682, 5.4877, 12566.1517, 296, 5.196, 155.420, 129, 4.722,
        3.523, 71, 5.30, 18849.23, 64, 5.97, 242.73, 40, 3.79, 553.57,
        11408, 3.14159, 0.00000, 772, 4.134, 6283.076, 77, 3.84, 12566.15, 42, 0.42, 155.42,
        88, 3.14, 0.00, 17, 2.77, 6283.08, 5, 2.01, 155.42, 3, 2.21, 12566.15,
        27962, 3.19870, 84334.66158, 10164, 5.42249, 5507.55324, 8045, 3.8801, 5223.6939, 4381, 3.7044, 2352.8662, 3193,
        4.0003, 1577.3435, 2272, 3.9847, 1047.7473, 1814, 4.9837, 6283.0758, 1639, 3.5646, 5856.4777, 1444, 3.7028,
        9437.7629, 1430, 3.4112, 10213.2855, 1125, 4.8282, 14143.4952, 1090, 2.0857, 6812.7668, 1037, 4.0566,
        71092.8814, 971, 3.473, 4694.003, 915, 1.142, 6620.890, 878, 4.440, 5753.385, 837, 4.993, 7084.897, 770, 5.554,
        167621.576, 719, 3.602, 529.691, 692, 4.326, 6275.962, 558, 4.410, 7860.419, 529, 2.484, 4705.732, 521, 6.250,
        18073.705,
        903, 3.897, 5507.553, 618, 1.730, 5223.694, 380, 5.244, 2352.866,
        166, 1.627, 84334.662,
        10001398880, 0.00000000000, 0.00000000000, 167069963, 3.098463508, 6283.075849991, 1395602, 3.0552461,
        12566.1517000, 308372, 5.198467, 77713.771468, 162846, 1.173877, 5753.384885, 157557, 2.846852, 7860.419392,
        92480, 5.45292, 11506.76977, 54244, 4.56409, 3930.20970, 47211, 3.66100, 5884.92685, 34598, 0.96369, 5507.55324,
        32878, 5.89984, 5223.69392, 30678, 0.29867, 5573.14280, 24319, 4.27350, 11790.62909, 21183, 5.84715, 1577.34354,
        18575, 5.02194, 10977.07880, 17484, 3.01194, 18849.22755, 10984, 5.05511, 5486.77784, 9832, 0.8868, 6069.7768,
        8650, 5.6896, 15720.8388, 8583, 1.2708, 161000.6857, 6490, 0.2725, 17260.1547, 6292, 0.9218, 529.6910, 5706,
        2.0137, 83996.8473, 5574, 5.2416, 71430.6956, 4938, 3.2450, 2544.3144, 4696, 2.5781, 775.5226, 4466, 5.5372,
        9437.7629, 4252, 6.0111, 6275.9623, 3897, 5.3607, 4694.0030, 3825, 2.3926, 8827.3903, 3749, 0.8295, 19651.0485,
        3696, 4.9011, 12139.5535, 3566, 1.6747, 12036.4607, 3454, 1.8427, 2942.4634, 3319, 0.2437, 7084.8968, 3192,
        0.1837, 5088.6288, 3185, 1.7778, 398.1490, 2846, 1.2134, 6286.5990, 2779, 1.8993, 6279.5527, 2628, 4.5890,
        10447.3878, 2460, 3.7866, 8429.2413, 2393, 4.9960, 5856.4777, 2359, 0.2687, 796.2980, 2329, 2.8078, 14143.4952,
        2210, 1.9500, 3154.6871, 2035, 4.6527, 2146.1654, 1951, 5.3823, 2352.8662, 1883, 0.6731, 149854.4001, 1833,
        2.2535, 23581.2582, 1796, 0.1987, 6812.7668, 1731, 6.1520, 16730.4637, 1717, 4.4332, 10213.2855, 1619, 5.2316,
        17789.8456, 1381, 5.1896, 8031.0923, 1364, 3.6852, 4705.7323, 1314, 0.6529, 13367.9726, 1041, 4.3329,
        11769.8537, 1017, 1.5939, 4690.4798, 998, 4.201, 6309.374, 966, 3.676, 27511.468, 874, 6.064, 1748.016, 779,
        3.674, 12168.003, 771, 0.312, 7632.943, 756, 2.626, 6256.778, 746, 5.648, 11926.254, 693, 2.924, 6681.225, 680,
        1.423, 23013.540, 674, 0.563, 3340.612, 663, 5.661, 11371.705, 659, 3.136, 801.821, 648, 2.650, 19804.827, 615,
        3.029, 233141.314, 612, 5.134, 1194.447, 563, 4.341, 90955.552, 552, 2.091, 17298.182, 534, 5.100, 31441.678,
        531, 2.407, 11499.656, 523, 4.624, 6438.496, 513, 5.324, 11513.883, 477, 0.256, 11856.219, 461, 1.722, 7234.794,
        458, 3.766, 6386.169, 458, 4.466, 5746.271, 423, 1.055, 5760.498, 422, 1.557, 7238.676, 415, 2.599, 7058.598,
        401, 3.030, 1059.382, 397, 1.201, 1349.867, 379, 4.907, 4164.312, 360, 5.707, 5643.179, 352, 3.626, 244287.600,
        348, 0.761, 10973.556, 342, 3.001, 4292.331, 336, 4.546, 4732.031, 334, 3.138, 6836.645, 324, 4.164, 9917.697,
        316, 1.691, 11015.106, 307, 0.238, 35371.887, 298, 1.306, 6283.143, 298, 1.750, 6283.009, 293, 5.738, 16200.773,
        286, 5.928, 14712.317, 281, 3.515, 21228.392, 280, 5.663, 8635.942, 277, 0.513, 26.298, 268, 4.207, 18073.705,
        266, 0.900, 12352.853, 260, 2.962, 25132.303, 255, 2.477, 6208.294, 242, 2.800, 709.933, 231, 1.054, 22483.849,
        229, 1.070, 14314.168, 216, 1.314, 154717.610, 215, 6.038, 10873.986, 200, 0.561, 7079.374, 198, 2.614, 951.718,
        197, 4.369, 167283.762, 186, 2.861, 5216.580, 183, 1.660, 39302.097, 183, 5.912, 3738.761, 175, 2.145, 6290.189,
        173, 2.168, 10575.407, 171, 3.702, 1592.596, 171, 1.343, 3128.389, 164, 5.550, 6496.375, 164, 5.856, 10984.192,
        161, 1.998, 10969.965, 161, 1.909, 6133.513, 157, 4.955, 25158.602, 154, 6.216, 23543.231, 153, 5.357,
        13521.751, 150, 5.770, 18209.330, 150, 5.439, 155.420, 139, 1.778, 9225.539, 139, 1.626, 5120.601, 128, 2.460,
        13916.019, 123, 0.717, 143571.324, 122, 2.654, 88860.057, 121, 4.414, 3894.182, 121, 1.192, 3.523, 120, 4.030,
        553.569, 119, 1.513, 17654.781, 117, 3.117, 14945.316, 113, 2.698, 6040.347, 110, 3.085, 43232.307, 109, 0.998,
        955.600, 108, 2.939, 17256.632, 107, 5.285, 65147.620, 103, 0.139, 11712.955, 103, 5.850, 213.299, 102, 3.046,
        6037.244, 101, 2.842, 8662.240, 100, 3.626, 6262.300, 98, 2.36, 6206.81, 98, 5.11, 6172.87, 98, 2.00, 15110.47,
        97, 2.67, 5650.29, 97, 2.75, 6244.94, 96, 4.02, 6282.10, 96, 5.31, 6284.06, 92, 0.10, 29088.81, 85, 3.26,
        20426.57, 84, 2.60, 28766.92, 81, 3.58, 10177.26, 80, 5.81, 5230.81, 78, 2.53, 16496.36, 77, 4.06, 6127.66, 73,
        0.04, 5481.25, 72, 5.96, 12559.04, 72, 5.92, 4136.91, 71, 5.49, 22003.91, 70, 3.41, 7.11, 69, 0.62, 11403.68,
        69, 3.90, 1589.07, 69, 1.96, 12416.59, 69, 4.51, 426.60, 67, 1.61, 11087.29, 66, 4.50, 47162.52, 66, 5.08,
        283.86, 66, 4.32, 16858.48, 65, 1.04, 6062.66, 64, 1.59, 18319.54, 63, 5.70, 45892.73, 63, 4.60, 66567.49, 63,
        3.82, 13517.87, 62, 2.62, 11190.38, 61, 1.54, 33019.02, 60, 5.58, 10344.30, 60, 5.38, 316428.23, 60, 5.78,
        632.78, 59, 6.12, 9623.69, 57, 0.16, 17267.27, 57, 3.86, 6076.89, 57, 1.98, 7668.64, 56, 4.78, 20199.09, 55,
        4.56, 18875.53, 55, 3.51, 17253.04, 54, 3.07, 226858.24, 54, 4.83, 18422.63, 53, 5.02, 12132.44, 52, 3.63,
        5333.90, 52, 0.97, 155427.54, 51, 3.36, 20597.24, 50, 0.99, 11609.86, 50, 2.21, 1990.75, 48, 1.62, 12146.67, 48,
        1.17, 12569.67, 47, 4.62, 5436.99, 47, 1.81, 12562.63, 47, 0.59, 21954.16, 47, 0.76, 7342.46, 46, 0.27, 4590.91,
        46, 3.77, 156137.48, 45, 5.66, 10454.50, 44, 5.84, 3496.03, 43, 0.24, 17996.03, 41, 5.93, 51092.73, 41, 4.21,
        12592.45, 40, 5.14, 1551.05, 40, 5.28, 15671.08, 39, 3.69, 18052.93, 39, 4.94, 24356.78, 38, 2.72, 11933.37, 38,
        5.23, 7477.52, 38, 4.99, 9779.11, 37, 3.70, 9388.01, 37, 4.44, 4535.06, 36, 2.16, 28237.23, 36, 2.54, 242.73,
        36, 0.22, 5429.88, 35, 6.15, 19800.95, 35, 2.92, 36949.23, 34, 5.63, 2379.16, 34, 5.73, 16460.33, 34, 5.11,
        5849.36, 33, 6.19, 6268.85,
        10301861, 1.10748970, 6283.07584999, 172124, 1.064423, 12566.151700, 70222, 3.14159, 0.00000, 3235, 1.0217,
        18849.2275, 3080, 2.8435, 5507.5532, 2497, 1.3191, 5223.6939, 1849, 1.4243, 1577.3435, 1008, 5.9138, 10977.0788,
        865, 1.420, 6275.962, 863, 0.271, 5486.778, 507, 1.686, 5088.629, 499, 6.014, 6286.599, 467, 5.987, 529.691,
        440, 0.518, 4694.003, 410, 1.084, 9437.763, 387, 4.750, 2544.314, 375, 5.071, 796.298, 352, 0.023, 83996.847,
        344, 0.949, 71430.696, 341, 5.412, 775.523, 322, 6.156, 2146.165, 286, 5.484, 10447.388, 284, 3.420, 2352.866,
        255, 6.132, 6438.496, 252, 0.243, 398.149, 243, 3.092, 4690.480, 225, 3.689, 7084.897, 220, 4.952, 6812.767,
        219, 0.420, 8031.092, 209, 1.282, 1748.016, 193, 5.314, 8429.241, 185, 1.820, 7632.943, 175, 3.229, 6279.553,
        173, 1.537, 4705.732, 158, 4.097, 11499.656, 158, 5.539, 3154.687, 150, 3.633, 11513.883, 148, 3.222, 7234.794,
        147, 3.653, 1194.447, 144, 0.817, 14143.495, 135, 6.151, 5746.271, 134, 4.644, 6836.645, 128, 2.693, 1349.867,
        123, 5.650, 5760.498, 118, 2.577, 13367.973, 113, 3.357, 17789.846, 110, 4.497, 4292.331, 108, 5.828, 12036.461,
        102, 5.621, 6256.778, 99, 1.14, 1059.38, 98, 0.66, 5856.48, 93, 2.32, 10213.29, 92, 0.77, 16730.46, 88, 1.50,
        11926.25, 86, 1.42, 5753.38, 85, 0.66, 155.42, 81, 1.64, 6681.22, 80, 4.11, 951.72, 66, 4.55, 5216.58, 65, 0.98,
        25132.30, 64, 4.19, 6040.35, 64, 0.52, 6290.19, 63, 1.51, 5643.18, 59, 6.18, 4164.31, 57, 2.30, 10973.56, 55,
        2.32, 11506.77, 55, 2.20, 1592.60, 55, 5.27, 3340.61, 54, 5.54, 553.57, 53, 5.04, 9917.70, 53, 0.92, 11371.70,
        52, 3.98, 17298.18, 52, 3.60, 10969.97, 49, 5.91, 3894.18, 49, 2.51, 6127.66, 48, 1.67, 12168.00, 46, 0.31,
        801.82, 42, 3.70, 10575.41, 42, 4.05, 10984.19, 40, 2.17, 7860.42, 40, 4.17, 26.30, 38, 5.82, 7058.60, 37, 3.39,
        6496.37, 36, 1.08, 6309.37, 36, 5.34, 7079.37, 34, 3.62, 11790.63, 32, 0.32, 16200.77, 31, 4.24, 3738.76, 29,
        4.55, 11856.22, 29, 1.26, 8635.94, 27, 3.45, 5884.93, 26, 5.08, 10177.26, 26, 5.38, 21228.39, 24, 2.26,
        11712.96, 24, 1.05, 242.73, 24, 5.59, 6069.78, 23, 3.63, 6284.06, 23, 1.64, 4732.03, 22, 3.46, 213.30, 21, 1.05,
        3496.03, 21, 3.92, 13916.02, 21, 4.01, 5230.81, 20, 5.16, 12352.85, 20, 0.69, 1990.75, 19, 2.73, 6062.66, 19,
        5.01, 11015.11, 18, 6.04, 6283.01, 18, 2.85, 7238.68, 18, 5.60, 6283.14, 18, 5.16, 17253.04, 18, 2.54, 14314.17,
        17, 1.58, 7.11, 17, 0.98, 3930.21, 17, 4.75, 17267.27, 16, 2.19, 6076.89, 16, 2.19, 18073.70, 16, 6.12, 3.52,
        16, 4.61, 9623.69, 16, 3.40, 16496.36, 15, 0.19, 9779.11, 15, 5.30, 13517.87, 15, 4.26, 3128.39, 15, 0.81,
        709.93, 14, 0.50, 25158.60, 14, 4.38, 4136.91, 13, 0.98, 65147.62, 13, 3.31, 154717.61, 13, 2.11, 1589.07, 13,
        1.92, 22483.85, 12, 6.03, 9225.54, 12, 1.53, 12559.04, 12, 5.82, 6282.10, 12, 5.61, 5642.20, 12, 2.38,
        167283.76, 12, 0.39, 12132.44, 12, 3.98, 4686.89, 12, 5.81, 12569.67, 12, 0.56, 5849.36, 11, 0.45, 6172.87, 11,
        5.80, 16858.48, 11, 6.22, 12146.67, 11, 2.27, 5429.88,
        435939, 5.784551, 6283.075850, 12363, 5.57935, 12566.15170, 1234, 3.1416, 0.0000, 879, 3.628, 77713.771, 569,
        1.870, 5573.143, 330, 5.470, 18849.228, 147, 4.480, 5507.553, 110, 2.842, 161000.686, 101, 2.815, 5223.694, 85,
        3.11, 1577.34, 65, 5.47, 775.52, 61, 1.38, 6438.50, 50, 4.42, 6286.60, 47, 3.66, 7084.90, 46, 5.39, 149854.40,
        42, 0.90, 10977.08, 40, 3.20, 5088.63, 35, 1.81, 5486.78, 32, 5.35, 3154.69, 30, 3.52, 796.30, 29, 4.62,
        4690.48, 28, 1.84, 4694.00, 27, 3.14, 71430.70, 27, 6.17, 6836.65, 26, 1.42, 2146.17, 25, 2.81, 1748.02, 24,
        2.18, 155.42, 23, 4.76, 7234.79, 21, 3.38, 7632.94, 21, 0.22, 4705.73, 20, 4.22, 1349.87, 20, 2.01, 1194.45, 20,
        4.58, 529.69, 19, 1.59, 6309.37, 18, 5.70, 6040.35, 18, 6.03, 4292.33, 17, 2.90, 9437.76, 17, 2.00, 8031.09, 17,
        5.78, 83996.85, 16, 0.05, 2544.31, 15, 0.95, 6127.66, 14, 0.36, 10447.39, 14, 1.48, 2352.87, 13, 0.77, 553.57,
        13, 5.48, 951.72, 13, 5.27, 6279.55, 13, 3.76, 6812.77, 11, 5.41, 6256.78, 10, 0.68, 1592.60, 10, 4.95, 398.15,
        10, 1.15, 3894.18, 10, 5.20, 244287.60, 10, 1.94, 11856.22, 9, 5.39, 25132.30, 8, 6.18, 1059.38, 8, 0.69,
        8429.24, 8, 5.85, 242.73, 7, 5.26, 14143.50, 7, 0.52, 801.82, 6, 2.24, 8635.94, 6, 4.00, 13367.97, 6, 2.77,
        90955.55, 6, 5.17, 7058.60, 5, 1.46, 233141.31, 5, 4.13, 7860.42, 5, 3.91, 26.30, 5, 3.89, 12036.46, 5, 5.58,
        6290.19, 5, 5.54, 1990.75, 5, 0.83, 11506.77, 5, 6.22, 6681.22, 4, 5.26, 10575.41, 4, 1.91, 7477.52, 4, 0.43,
        10213.29, 4, 1.09, 709.93, 4, 5.09, 11015.11, 4, 4.22, 88860.06, 4, 3.57, 7079.37, 4, 1.98, 6284.06, 4, 3.93,
        10973.56, 4, 6.18, 9917.70, 4, 0.36, 10177.26, 4, 2.75, 3738.76, 4, 3.33, 5643.18, 4, 5.36, 25158.60,
        14459, 4.27319, 6283.07585, 673, 3.917, 12566.152, 77, 0.00, 0.00, 25, 3.73, 18849.23, 4, 2.80, 6286.60,
        386, 2.564, 6283.076, 31, 2.27, 12566.15, 5, 3.44, 5573.14, 2, 2.05, 18849.23, 1, 2.06, 77713.77, 1, 4.41,
        161000.69, 1, 3.82, 149854.40, 1, 4.08, 6127.66, 1, 5.26, 6438.50,
        9, 1.22, 6283.08, 1, 0.66, 12566.15
    ];
    ShouXingUtil.XL1 = [
        [22639.586, 0.78475822, 8328.691424623, 1.5229241, 25.0719, -0.123598, 4586.438, 0.1873974, 7214.06286536, -2.184756, -18.860, 0.08280, 2369.914, 2.5429520, 15542.75428998, -0.661832, 6.212, -0.04080, 769.026, 3.140313, 16657.38284925, 3.04585, 50.144, -0.2472, 666.418, 1.527671, 628.30195521, -0.02664, 0.062, -0.0054, 411.596, 4.826607, 16866.9323150, -1.28012, -1.07, -0.0059, 211.656, 4.115028, -1114.6285593, -3.70768, -43.93, 0.2064, 205.436, 0.230523, 6585.7609101, -2.15812, -18.92, 0.0882, 191.956, 4.898507, 23871.4457146, 0.86109, 31.28, -0.164, 164.729, 2.586078, 14914.4523348, -0.6352, 6.15, -0.035, 147.321, 5.45530, -7700.3894694, -1.5496, -25.01, 0.118, 124.988, 0.48608, 7771.3771450, -0.3309, 3.11, -0.020, 109.380, 3.88323, 8956.9933798, 1.4963, 25.13, -0.129, 55.177, 5.57033, -1324.1780250, 0.6183, 7.3, -0.035, 45.100, 0.89898, 25195.623740, 0.2428, 24.0, -0.129, 39.533, 3.81213, -8538.240890, 2.8030, 26.1, -0.118, 38.430, 4.30115, 22756.817155, -2.8466, -12.6, 0.042, 36.124, 5.49587, 24986.074274, 4.5688, 75.2, -0.371, 30.773, 1.94559, 14428.125731, -4.3695, -37.7, 0.166, 28.397, 3.28586, 7842.364821, -2.2114, -18.8, 0.077, 24.358, 5.64142, 16171.056245, -0.6885, 6.3, -0.046, 18.585, 4.41371, -557.314280, -1.8538, -22.0, 0.10, 17.954, 3.58454, 8399.679100, -0.3576, 3.2, -0.03, 14.530, 4.9416, 23243.143759, 0.888, 31.2, -0.16, 14.380, 0.9709, 32200.137139, 2.384, 56.4, -0.29, 14.251, 5.7641, -2.301200, 1.523, 25.1, -0.12, 13.899, 0.3735, 31085.508580, -1.324, 12.4, -0.08, 13.194, 1.7595, -9443.319984, -5.231, -69.0, 0.33, 9.679, 3.0997, -16029.080894, -3.072, -50.1, 0.24, 9.366, 0.3016, 24080.995180, -3.465, -19.9, 0.08, 8.606, 4.1582, -1742.930514, -3.681, -44.0, 0.21, 8.453, 2.8416, 16100.068570, 1.192, 28.2, -0.14, 8.050, 2.6292, 14286.150380, -0.609, 6.1, -0.03, 7.630, 6.2388, 17285.684804, 3.019, 50.2, -0.25, 7.447, 1.4845, 1256.603910, -0.053, 0.1, -0.01, 7.371, 0.2736, 5957.458955, -2.131, -19.0, 0.09, 7.063, 5.6715, 33.757047, -0.308, -3.6, 0.02, 6.383, 4.7843, 7004.513400, 2.141, 32.4, -0.16, 5.742, 2.6572, 32409.686605, -1.942, 5, -0.05, 4.374, 4.3443, 22128.51520, -2.820, -13, 0.05, 3.998, 3.2545, 33524.31516, 1.766, 49, -0.25, 3.210, 2.2443, 14985.44001, -2.516, -16, 0.06, 2.915, 1.7138, 24499.74767, 0.834, 31, -0.17, 2.732, 1.9887, 13799.82378, -4.343, -38, 0.17, 2.568, 5.4122, -7072.08751, -1.576, -25, 0.11, 2.521, 3.2427, 8470.66678, -2.238, -19, 0.07, 2.489, 4.0719, -486.32660, -3.734, -44, 0.20, 2.146, 5.6135, -1952.47998, 0.645, 7, -0.03, 1.978, 2.7291, 39414.20000, 0.199, 37, -0.21, 1.934, 1.5682, 33314.76570, 6.092, 100, -0.5, 1.871, 0.4166, 30457.20662, -1.297, 12, -0.1, 1.753, 2.0582, -8886.00570, -3.38, -47, 0.2, 1.437, 2.386, -695.87607, 0.59, 7, 0, 1.373, 3.026, -209.54947, 4.33, 51, -0.2, 1.262, 5.940, 16728.37052, 1.17, 28, -0.1, 1.224, 6.172, 6656.74859, -4.04, -41, 0.2, 1.187, 5.873, 6099.43431, -5.89, -63, 0.3, 1.177, 1.014, 31571.83518, 2.41, 56, -0.3, 1.162, 3.840, 9585.29534, 1.47, 25, -0.1, 1.143, 5.639, 8364.73984, -2.18, -19, 0.1, 1.078, 1.229, 70.98768, -1.88, -22, 0.1, 1.059, 3.326, 40528.82856, 3.91, 81, -0.4, 0.990, 5.013, 40738.37803, -0.42, 30, -0.2, 0.948, 5.687, -17772.01141, -6.75, -94, 0.5, 0.876, 0.298, -0.35232, 0, 0, 0, 0.822, 2.994, 393.02097, 0, 0, 0, 0.788, 1.836, 8326.39022, 3.05, 50, -0.2, 0.752, 4.985, 22614.84180, 0.91, 31, -0.2, 0.740, 2.875, 8330.99262, 0, 0, 0, 0.669, 0.744, -24357.77232, -4.60, -75, 0.4, 0.644, 1.314, 8393.12577, -2.18, -19, 0.1, 0.639, 5.888, 575.33849, 0, 0, 0, 0.635, 1.116, 23385.11911, -2.87, -13, 0, 0.584, 5.197, 24428.75999, 2.71, 53, -0.3, 0.583, 3.513, -9095.55517, 0.95, 4, 0, 0.572, 6.059, 29970.88002, -5.03, -32, 0.1, 0.565, 2.960, 0.32863, 1.52, 25, -0.1, 0.561, 4.001, -17981.56087, -2.43, -43, 0.2, 0.557, 0.529, 7143.07519, -0.30, 3, 0, 0.546, 2.311, 25614.37623, 4.54, 75, -0.4, 0.536, 4.229, 15752.30376, -4.99, -45, 0.2, 0.493, 3.316, -8294.9344, -1.83, -29, 0.1, 0.491, 1.744, 8362.4485, 1.21, 21, -0.1, 0.478, 1.803, -10071.6219, -5.20, -69, 0.3, 0.454, 0.857, 15333.2048, 3.66, 57, -0.3, 0.445, 2.071, 8311.7707, -2.18, -19, 0.1, 0.426, 0.345, 23452.6932, -3.44, -20, 0.1, 0.420, 4.941, 33733.8646, -2.56, -2, 0, 0.413, 1.642, 17495.2343, -1.31, -1, 0, 0.404, 1.458, 23314.1314, -0.99, 9, -0.1, 0.395, 2.132, 38299.5714, -3.51, -6, 0, 0.382, 2.700, 31781.3846, -1.92, 5, 0, 0.375, 4.827, 6376.2114, 2.17, 32, -0.2, 0.361, 3.867, 16833.1753, -0.97, 3, 0, 0.358, 5.044, 15056.4277, -4.40, -38, 0.2, 0.350, 5.157, -8257.7037, -3.40, -47, 0.2, 0.344, 4.233, 157.7344, 0, 0, 0, 0.340, 2.672, 13657.8484, -0.58, 6, 0, 0.329, 5.610, 41853.0066, 3.29, 74, -0.4, 0.325, 5.895, -39.8149, 0, 0, 0, 0.309, 4.387, 21500.2132, -2.79, -13, 0.1, 0.302, 1.278, 786.0419, 0, 0, 0, 0.302, 5.341, -24567.3218, -0.27, -24, 0.1, 0.301, 1.045, 5889.8848, -1.57, -12, 0, 0.294, 4.201, -2371.2325, -3.65, -44, 0.2, 0.293, 3.704, 21642.1886, -6.55, -57, 0.2, 0.290, 4.069, 32828.4391, 2.36, 56, -0.3, 0.289, 3.472, 31713.8105, -1.35, 12, -0.1, 0.285, 5.407, -33.7814, 0.31, 4, 0, 0.283, 5.998, -16.9207, -3.71, -44, 0.2, 0.283, 2.772, 38785.8980, 0.23, 37, -0.2, 0.274, 5.343, 15613.7420, -2.54, -16, 0.1, 0.263, 3.997, 25823.9257, 0.22, 24, -0.1, 0.254, 0.600, 24638.3095, -1.61, 2, 0, 0.253, 1.344, 6447.1991, 0.29, 10, -0.1, 0.250, 0.887, 141.9754, -3.76, -44, 0.2, 0.247, 0.317, 5329.1570, -2.10, -19, 0.1, 0.245, 0.141, 36.0484, -3.71, -44, 0.2, 0.231, 2.287, 14357.1381, -2.49, -16, 0.1, 0.227, 5.158, 2.6298, 0, 0, 0, 0.219, 5.085, 47742.8914, 1.72, 63, -0.3, 0.211, 2.145, 6638.7244, -2.18, -19, 0.1, 0.201, 4.415, 39623.7495, -4.13, -14, 0, 0.194, 2.091, 588.4927, 0, 0, 0, 0.193, 3.057, -15400.7789, -3.10, -50, 0, 0.186, 5.598, 16799.3582, -0.72, 6, 0, 0.185, 3.886, 1150.6770, 0, 0, 0, 0.183, 1.619, 7178.0144, 1.52, 25, 0, 0.181, 2.635, 8328.3391, 1.52, 25, 0, 0.181, 2.077, 8329.0437, 1.52, 25, 0, 0.179, 3.215, -9652.8694, -0.90, -18, 0, 0.176, 1.716, -8815.0180, -5.26, -69, 0, 0.175, 5.673, 550.7553, 0, 0, 0, 0.170, 2.060, 31295.0580, -5.6, -39, 0, 0.167, 1.239, 7211.7617, -0.7, 6, 0, 0.165, 4.499, 14967.4158, -0.7, 6, 0, 0.164, 3.595, 15540.4531, 0.9, 31, 0, 0.164, 4.237, 522.3694, 0, 0, 0, 0.163, 4.633, 15545.0555, -2.2, -19, 0, 0.161, 0.478, 6428.0209, -2.2, -19, 0, 0.158, 2.03, 13171.5218, -4.3, -38, 0, 0.157, 2.28, 7216.3641, -3.7, -44, 0, 0.154, 5.65, 7935.6705, 1.5, 25, 0, 0.152, 0.46, 29828.9047, -1.3, 12, 0, 0.151, 1.19, -0.7113, 0, 0, 0, 0.150, 1.42, 23942.4334, -1.0, 9, 0, 0.144, 2.75, 7753.3529, 1.5, 25, 0, 0.137, 2.08, 7213.7105, -2.2, -19, 0, 0.137, 1.44, 7214.4152, -2.2, -19, 0, 0.136, 4.46, -1185.6162, -1.8, -22, 0, 0.136, 3.03, 8000.1048, -2.2, -19, 0, 0.134, 2.83, 14756.7124, -0.7, 6, 0, 0.131, 5.05, 6821.0419, -2.2, -19, 0, 0.128, 5.99, -17214.6971, -4.9, -72, 0, 0.127, 5.35, 8721.7124, 1.5, 25, 0, 0.126, 4.49, 46628.2629, -2.0, 19, 0, 0.125, 5.94, 7149.6285, 1.5, 25, 0, 0.124, 1.09, 49067.0695, 1.1, 55, 0, 0.121, 2.88, 15471.7666, 1.2, 28, 0, 0.111, 3.92, 41643.4571, 7.6, 125, -1, 0.110, 1.96, 8904.0299, 1.5, 25, 0, 0.106, 3.30, -18.0489, -2.2, -19, 0, 0.105, 2.30, -4.9310, 1.5, 25, 0, 0.104, 2.22, -6.5590, -1.9, -22, 0, 0.101, 1.44, 1884.9059, -0.1, 0, 0, 0.100, 5.92, 5471.1324, -5.9, -63, 0, 0.099, 1.12, 15149.7333, -0.7, 6, 0, 0.096, 4.73, 15508.9972, -0.4, 10, 0, 0.095, 5.18, 7230.9835, 1.5, 25, 0, 0.093, 3.37, 39900.5266, 3.9, 81, 0, 0.092, 2.01, 25057.0619, 2.7, 53, 0, 0.092, 1.21, -79.6298, 0, 0, 0, 0.092, 1.65, -26310.2523, -4.0, -68, 0, 0.091, 1.01, 42062.5561, -1.0, 23, 0, 0.090, 6.10, 29342.5781, -5.0, -32, 0, 0.090, 4.43, 15542.4020, -0.7, 6, 0, 0.090, 3.80, 15543.1066, -0.7, 6, 0, 0.089, 4.15, 6063.3859, -2.2, -19, 0, 0.086, 4.03, 52.9691, 0, 0, 0, 0.085, 0.49, 47952.4409, -2.6, 11, 0, 0.085, 1.60, 7632.8154, 2.1, 32, 0, 0.084, 0.22, 14392.0773, -0.7, 6, 0, 0.083, 6.22, 6028.4466, -4.0, -41, 0, 0.083, 0.63, -7909.9389, 2.8, 26, 0, 0.083, 5.20, -77.5523, 0, 0, 0, 0.082, 2.74, 8786.1467, -2.2, -19, 0, 0.080, 2.43, 9166.5428, -2.8, -26, 0, 0.080, 3.70, -25405.1732, 4.1, 27, 0, 0.078, 5.68, 48857.5200, 5.4, 106, -1, 0.077, 1.85, 8315.5735, -2.2, -19, 0, 0.075, 5.46, -18191.1103, 1.9, 8, 0, 0.075, 1.41, -16238.6304, 1.3, 1, 0, 0.074, 5.06, 40110.0761, -0.4, 30, 0, 0.072, 2.10, 64.4343, -3.7, -44, 0, 0.071, 2.17, 37671.2695, -3.5, -6, 0, 0.069, 1.71, 16693.4313, -0.7, 6, 0, 0.069, 3.33, -26100.7028, -8.3, -119, 1, 0.068, 1.09, 8329.4028, 1.5, 25, 0, 0.068, 3.62, 8327.9801, 1.5, 25, 0, 0.068, 2.41, 16833.1509, -1.0, 3, 0, 0.067, 3.40, 24709.2971, -3.5, -20, 0, 0.067, 1.65, 8346.7156, -0.3, 3, 0, 0.066, 2.61, 22547.2677, 1.5, 39, 0, 0.066, 3.50, 15576.5113, -1.0, 3, 0, 0.065, 5.76, 33037.9886, -2.0, 5, 0, 0.065, 4.58, 8322.1325, -0.3, 3, 0, 0.065, 6.20, 17913.9868, 3.0, 50, 0, 0.065, 1.50, 22685.8295, -1.0, 9, 0, 0.065, 2.37, 7180.3058, -1.9, -15, 0, 0.064, 1.06, 30943.5332, 2.4, 56, 0, 0.064, 1.89, 8288.8765, 1.5, 25, 0, 0.064, 4.70, 6.0335, 0.3, 4, 0, 0.063, 2.83, 8368.5063, 1.5, 25, 0, 0.063, 5.66, -2580.7819, 0.7, 7, 0, 0.062, 3.78, 7056.3285, -2.2, -19, 0, 0.061, 1.49, 8294.9100, 1.8, 29, 0, 0.061, 0.12, -10281.1714, -0.9, -18, 0, 0.061, 3.06, -8362.4729, -1.2, -21, 0, 0.061, 4.43, 8170.9571, 1.5, 25, 0, 0.059, 5.78, -13.1179, -3.7, -44, 0, 0.059, 5.97, 6625.5702, -2.2, -19, 0, 0.058, 5.01, -0.5080, -0.3, 0, 0, 0.058, 2.73, 7161.0938, -2.2, -19, 0, 0.057, 0.19, 7214.0629, -2.2, -19, 0, 0.057, 4.00, 22199.5029, -4.7, -35, 0, 0.057, 5.38, 8119.1420, 5.8, 76, 0, 0.056, 1.07, 7542.6495, 1.5, 25, 0, 0.056, 0.28, 8486.4258, 1.5, 25, 0, 0.054, 4.19, 16655.0816, 4.6, 75, 0, 0.053, 0.72, 7267.0320, -2.2, -19, 0, 0.053, 3.12, 12.6192, 0.6, 7, 0, 0.052, 2.99, -32896.013, -1.8, -49, 0, 0.052, 3.46, 1097.708, 0, 0, 0, 0.051, 5.37, -6443.786, -1.6, -25, 0, 0.051, 1.35, 7789.401, -2.2, -19, 0, 0.051, 5.83, 40042.502, 0.2, 38, 0, 0.051, 3.63, 9114.733, 1.5, 25, 0, 0.050, 1.51, 8504.484, -2.5, -22, 0, 0.050, 5.23, 16659.684, 1.5, 25, 0, 0.050, 1.15, 7247.820, -2.5, -23, 0, 0.047, 0.25, -1290.421, 0.3, 0, 0, 0.047, 4.67, -32686.464, -6.1, -100, 0, 0.047, 3.49, 548.678, 0, 0, 0, 0.047, 2.37, 6663.308, -2.2, -19, 0, 0.046, 0.98, 1572.084, 0, 0, 0, 0.046, 2.04, 14954.262, -0.7, 6, 0, 0.046, 3.72, 6691.693, -2.2, -19, 0, 0.045, 6.19, -235.287, 0, 0, 0, 0.044, 2.96, 32967.001, -0.1, 27, 0, 0.044, 3.82, -1671.943, -5.6, -66, 0, 0.043, 5.82, 1179.063, 0, 0, 0, 0.043, 0.07, 34152.617, 1.7, 49, 0, 0.043, 3.71, 6514.773, -0.3, 0, 0, 0.043, 5.62, 15.732, -2.5, -23, 0, 0.043, 5.80, 8351.233, -2.2, -19, 0, 0.042, 0.27, 7740.199, 1.5, 25, 0, 0.042, 6.14, 15385.020, -0.7, 6, 0, 0.042, 6.13, 7285.051, -4.1, -41, 0, 0.041, 1.27, 32757.451, 4.2, 78, 0, 0.041, 4.46, 8275.722, 1.5, 25, 0, 0.040, 0.23, 8381.661, 1.5, 25, 0, 0.040, 5.87, -766.864, 2.5, 29, 0, 0.040, 1.66, 254.431, 0, 0, 0, 0.040, 0.40, 9027.981, -0.4, 0, 0, 0.040, 2.96, 7777.936, 1.5, 25, 0, 0.039, 4.67, 33943.068, 6.1, 100, 0, 0.039, 3.52, 8326.062, 1.5, 25, 0, 0.039, 3.75, 21013.887, -6.5, -57, 0, 0.039, 5.60, 606.978, 0, 0, 0, 0.039, 1.19, 8331.321, 1.5, 25, 0, 0.039, 2.84, 7211.433, -2.2, -19, 0, 0.038, 0.67, 7216.693, -2.2, -19, 0, 0.038, 6.22, 25161.867, 0.6, 28, 0, 0.038, 4.40, 7806.322, 1.5, 25, 0, 0.038, 4.16, 9179.168, -2.2, -19, 0, 0.037, 4.73, 14991.999, -0.7, 6, 0, 0.036, 0.35, 67.514, -0.6, -7, 0, 0.036, 3.70, 25266.611, -1.6, 0, 0, 0.036, 5.39, 16328.796, -0.7, 6, 0, 0.035, 1.44, 7174.248, -2.2, -19, 0, 0.035, 5.00, 15684.730, -4.4, -38, 0, 0.035, 0.39, -15.419, -2.2, -19, 0, 0.035, 6.07, 15020.385, -0.7, 6, 0, 0.034, 6.01, 7371.797, -2.2, -19, 0, 0.034, 0.96, -16623.626, -3.4, -54, 0, 0.033, 6.24, 9479.368, 1.5, 25, 0, 0.033, 3.21, 23661.896, 5.2, 82, 0, 0.033, 4.06, 8311.418, -2.2, -19, 0, 0.033, 2.40, 1965.105, 0, 0, 0, 0.033, 5.17, 15489.785, -0.7, 6, 0, 0.033, 5.03, 21986.540, 0.9, 31, 0, 0.033, 4.10, 16691.140, 2.7, 46, 0, 0.033, 5.13, 47114.589, 1.7, 63, 0, 0.033, 4.45, 8917.184, 1.5, 25, 0, 0.033, 4.23, 2.078, 0, 0, 0, 0.032, 2.33, 75.251, 1.5, 25, 0, 0.032, 2.10, 7253.878, -2.2, -19, 0, 0.032, 3.11, -0.224, 1.5, 25, 0, 0.032, 4.43, 16640.462, -0.7, 6, 0, 0.032, 5.68, 8328.363, 0, 0, 0, 0.031, 5.32, 8329.020, 3.0, 50, 0, 0.031, 3.70, 16118.093, -0.7, 6, 0, 0.030, 3.67, 16721.817, -0.7, 6, 0, 0.030, 5.27, -1881.492, -1.2, -15, 0, 0.030, 5.72, 8157.839, -2.2, -19, 0, 0.029, 5.73, -18400.313, -6.7, -94, 0, 0.029, 2.76, 16.000, -2.2, -19, 0, 0.029, 1.75, 8879.447, 1.5, 25, 0, 0.029, 0.32, 8851.061, 1.5, 25, 0, 0.029, 0.90, 14704.903, 3.7, 57, 0, 0.028, 2.90, 15595.723, -0.7, 6, 0, 0.028, 5.88, 16864.631, 0.2, 24, 0, 0.028, 0.63, 16869.234, -2.8, -26, 0, 0.028, 4.04, -18609.863, -2.4, -43, 0, 0.027, 5.83, 6727.736, -5.9, -63, 0, 0.027, 6.12, 418.752, 4.3, 51, 0, 0.027, 0.14, 41157.131, 3.9, 81, 0, 0.026, 3.80, 15.542, 0, 0, 0, 0.026, 1.68, 50181.698, 4.8, 99, -1, 0.026, 0.32, 315.469, 0, 0, 0, 0.025, 5.67, 19.188, 0.3, 0, 0, 0.025, 3.16, 62.133, -2.2, -19, 0, 0.025, 3.76, 15502.939, -0.7, 6, 0, 0.025, 4.53, 45999.961, -2.0, 19, 0, 0.024, 3.21, 837.851, -4.4, -51, 0, 0.024, 2.82, 38157.596, 0.3, 37, 0, 0.024, 5.21, 15540.124, -0.7, 6, 0, 0.024, 0.26, 14218.576, 0, 13, 0, 0.024, 3.01, 15545.384, -0.7, 6, 0, 0.024, 1.16, -17424.247, -0.6, -21, 0, 0.023, 2.34, -67.574, 0.6, 7, 0, 0.023, 2.44, 18.024, -1.9, -22, 0, 0.023, 3.70, 469.400, 0, 0, 0, 0.023, 0.72, 7136.511, -2.2, -19, 0, 0.023, 4.50, 15582.569, -0.7, 6, 0, 0.023, 2.80, -16586.395, -4.9, -72, 0, 0.023, 1.51, 80.182, 0, 0, 0, 0.023, 1.09, 5261.583, -1.5, -12, 0, 0.023, 0.56, 54956.954, -0.5, 44, 0, 0.023, 4.01, 8550.860, -2.2, -19, 0, 0.023, 4.46, 38995.448, -4.1, -14, 0, 0.023, 3.82, 2358.126, 0, 0, 0, 0.022, 3.77, 32271.125, 0.5, 34, 0, 0.022, 0.82, 15935.775, -0.7, 6, 0, 0.022, 1.07, 24013.421, -2.9, -13, 0, 0.022, 0.40, 8940.078, -2.2, -19, 0, 0.022, 2.06, 15700.489, -0.7, 6, 0, 0.022, 4.27, 15124.002, -5.0, -45, 0, 0.021, 1.16, 56071.583, 3.2, 88, 0, 0.021, 5.58, 9572.189, -2.2, -19, 0, 0.020, 1.70, -17.273, -3.7, -44, 0, 0.020, 3.05, 214.617, 0, 0, 0, 0.020, 4.41, 8391.048, -2.2, -19, 0, 0.020, 5.95, 23869.145, 2.4, 56, 0, 0.020, 0.42, 40947.927, -4.7, -21, 0, 0.019, 1.39, 5818.897, 0.3, 10, 0, 0.019, 0.71, 23873.747, -0.7, 6, 0, 0.019, 2.81, 7291.615, -2.2, -19, 0, 0.019, 5.09, 8428.018, -2.2, -19, 0, 0.019, 4.14, 6518.187, -1.6, -12, 0, 0.019, 3.85, 21.330, 0, 0, 0, 0.018, 0.66, 14445.046, -0.7, 6, 0, 0.018, 1.65, 0.966, -4.0, -48, 0, 0.018, 5.64, -17143.709, -6.8, -94, 0, 0.018, 6.01, 7736.432, -2.2, -19, 0, 0.018, 2.74, 31153.083, -1.9, 5, 0, 0.018, 4.58, 6116.355, -2.2, -19, 0, 0.018, 2.28, 46.401, 0.3, 0, 0, 0.018, 3.80, 10213.597, 1.4, 25, 0, 0.018, 2.84, 56281.132, -1.1, 36, 0, 0.018, 3.53, 8249.062, 1.5, 25, 0, 0.017, 4.43, 20871.911, -3, -13, 0, 0.017, 4.44, 627.596, 0, 0, 0, 0.017, 1.85, 628.308, 0, 0, 0, 0.017, 1.19, 8408.321, 2, 25, 0, 0.017, 1.95, 7214.056, -2, -19, 0, 0.017, 1.57, 7214.070, -2, -19, 0, 0.017, 1.65, 13870.811, -6, -60, 0, 0.017, 0.30, 22.542, -4, -44, 0, 0.017, 2.62, -119.445, 0, 0, 0, 0.016, 4.87, 5747.909, 2, 32, 0, 0.016, 4.45, 14339.108, -1, 6, 0, 0.016, 1.83, 41366.680, 0, 30, 0, 0.016, 4.53, 16309.618, -3, -23, 0, 0.016, 2.54, 15542.754, -1, 6, 0, 0.016, 6.05, 1203.646, 0, 0, 0, 0.015, 5.2, 2751.147, 0, 0, 0, 0.015, 1.8, -10699.924, -5, -69, 0, 0.015, 0.4, 22824.391, -3, -20, 0, 0.015, 2.1, 30666.756, -6, -39, 0, 0.015, 2.1, 6010.417, -2, -19, 0, 0.015, 0.7, -23729.470, -5, -75, 0, 0.015, 1.4, 14363.691, -1, 6, 0, 0.015, 5.8, 16900.689, -2, 0, 0, 0.015, 5.2, 23800.458, 3, 53, 0, 0.015, 5.3, 6035.000, -2, -19, 0, 0.015, 1.2, 8251.139, 2, 25, 0, 0.015, 3.6, -8.860, 0, 0, 0, 0.015, 0.8, 882.739, 0, 0, 0, 0.015, 3.0, 1021.329, 0, 0, 0, 0.015, 0.6, 23296.107, 1, 31, 0, 0.014, 5.4, 7227.181, 2, 25, 0, 0.014, 0.1, 7213.352, -2, -19, 0, 0.014, 4.0, 15506.706, 3, 50, 0, 0.014, 3.4, 7214.774, -2, -19, 0, 0.014, 4.6, 6665.385, -2, -19, 0, 0.014, 0.1, -8.636, -2, -22, 0, 0.014, 3.1, 15465.202, -1, 6, 0, 0.014, 4.9, 508.863, 0, 0, 0, 0.014, 3.5, 8406.244, 2, 25, 0, 0.014, 1.3, 13313.497, -8, -82, 0, 0.014, 2.8, 49276.619, -3, 0, 0, 0.014, 0.1, 30528.194, -3, -10, 0, 0.013, 1.7, 25128.050, 1, 31, 0, 0.013, 2.9, 14128.405, -1, 6, 0, 0.013, 3.4, 57395.761, 3, 80, 0, 0.013, 2.7, 13029.546, -1, 6, 0, 0.013, 3.9, 7802.556, -2, -19, 0, 0.013, 1.6, 8258.802, -2, -19, 0, 0.013, 2.2, 8417.709, -2, -19, 0, 0.013, 0.7, 9965.210, -2, -19, 0, 0.013, 3.4, 50391.247, 0, 48, 0, 0.013, 3.0, 7134.433, -2, -19, 0, 0.013, 2.9, 30599.182, -5, -31, 0, 0.013, 3.6, -9723.857, 1, 0, 0, 0.013, 4.8, 7607.084, -2, -19, 0, 0.012, 0.8, 23837.689, 1, 35, 0, 0.012, 3.6, 4.409, -4, -44, 0, 0.012, 5.0, 16657.031, 3, 50, 0, 0.012, 4.4, 16657.735, 3, 50, 0, 0.012, 1.1, 15578.803, -4, -38, 0, 0.012, 6.0, -11.490, 0, 0, 0, 0.012, 1.9, 8164.398, 0, 0, 0, 0.012, 2.4, 31852.372, -4, -17, 0, 0.012, 2.4, 6607.085, -2, -19, 0, 0.012, 4.2, 8359.870, 0, 0, 0, 0.012, 0.5, 5799.713, -2, -19, 0, 0.012, 2.7, 7220.622, 0, 0, 0, 0.012, 4.3, -139.720, 0, 0, 0, 0.012, 2.3, 13728.836, -2, -16, 0, 0.011, 3.6, 14912.146, 1, 31, 0, 0.011, 4.7, 14916.748, -2, -19, 0],
        [1.67680, 4.66926, 628.301955, -0.0266, 0.1, -0.005, 0.51642, 3.3721, 6585.760910, -2.158, -18.9, 0.09, 0.41383, 5.7277, 14914.452335, -0.635, 6.2, -0.04, 0.37115, 3.9695, 7700.389469, 1.550, 25.0, -0.12, 0.27560, 0.7416, 8956.993380, 1.496, 25.1, -0.13, 0.24599, 4.2253, -2.301200, 1.523, 25.1, -0.12, 0.07118, 0.1443, 7842.36482, -2.211, -19, 0.08, 0.06128, 2.4998, 16171.05625, -0.688, 6, 0, 0.04516, 0.443, 8399.67910, -0.36, 3, 0, 0.04048, 5.771, 14286.15038, -0.61, 6, 0, 0.03747, 4.626, 1256.60391, -0.05, 0, 0, 0.03707, 3.415, 5957.45895, -2.13, -19, 0.1, 0.03649, 1.800, 23243.14376, 0.89, 31, -0.2, 0.02438, 0.042, 16029.08089, 3.07, 50, -0.2, 0.02165, 1.017, -1742.93051, -3.68, -44, 0.2, 0.01923, 3.097, 17285.68480, 3.02, 50, -0.3, 0.01692, 1.280, 0.3286, 1.52, 25, -0.1, 0.01361, 0.298, 8326.3902, 3.05, 50, -0.2, 0.01293, 4.013, 7072.0875, 1.58, 25, -0.1, 0.01276, 4.413, 8330.9926, 0, 0, 0, 0.01270, 0.101, 8470.6668, -2.24, -19, 0.1, 0.01097, 1.203, 22128.5152, -2.82, -13, 0, 0.01088, 2.545, 15542.7543, -0.66, 6, 0, 0.00835, 0.190, 7214.0629, -2.18, -19, 0.1, 0.00734, 4.855, 24499.7477, 0.83, 31, -0.2, 0.00686, 5.130, 13799.8238, -4.34, -38, 0.2, 0.00631, 0.930, -486.3266, -3.73, -44, 0, 0.00585, 0.699, 9585.2953, 1.5, 25, 0, 0.00566, 4.073, 8328.3391, 1.5, 25, 0, 0.00566, 0.638, 8329.0437, 1.5, 25, 0, 0.00539, 2.472, -1952.4800, 0.6, 7, 0, 0.00509, 2.88, -0.7113, 0, 0, 0, 0.00469, 3.56, 30457.2066, -1.3, 12, 0, 0.00387, 0.78, -0.3523, 0, 0, 0, 0.00378, 1.84, 22614.8418, 0.9, 31, 0, 0.00362, 5.53, -695.8761, 0.6, 7, 0, 0.00317, 2.80, 16728.3705, 1.2, 28, 0, 0.00303, 6.07, 157.7344, 0, 0, 0, 0.00300, 2.53, 33.7570, -0.3, -4, 0, 0.00295, 4.16, 31571.8352, 2.4, 56, 0, 0.00289, 5.98, 7211.7617, -0.7, 6, 0, 0.00285, 2.06, 15540.4531, 0.9, 31, 0, 0.00283, 2.65, 2.6298, 0, 0, 0, 0.00282, 6.17, 15545.0555, -2.2, -19, 0, 0.00278, 1.23, -39.8149, 0, 0, 0, 0.00272, 3.82, 7216.3641, -3.7, -44, 0, 0.00270, 4.37, 70.9877, -1.9, -22, 0, 0.00256, 5.81, 13657.8484, -0.6, 6, 0, 0.00244, 5.64, -0.2237, 1.5, 25, 0, 0.00240, 2.96, 8311.7707, -2.2, -19, 0, 0.00239, 0.87, -33.7814, 0.3, 4, 0, 0.00216, 2.31, 15.9995, -2.2, -19, 0, 0.00186, 3.46, 5329.1570, -2.1, -19, 0, 0.00169, 2.40, 24357.772, 4.6, 75, 0, 0.00161, 5.80, 8329.403, 1.5, 25, 0, 0.00161, 5.20, 8327.980, 1.5, 25, 0, 0.00160, 4.26, 23385.119, -2.9, -13, 0, 0.00156, 1.26, 550.755, 0, 0, 0, 0.00155, 1.25, 21500.213, -2.8, -13, 0, 0.00152, 0.60, -16.921, -3.7, -44, 0, 0.00150, 2.71, -79.630, 0, 0, 0, 0.00150, 5.29, 15.542, 0, 0, 0, 0.00148, 1.06, -2371.232, -3.7, -44, 0, 0.00141, 0.77, 8328.691, 1.5, 25, 0, 0.00141, 3.67, 7143.075, -0.3, 0, 0, 0.00138, 5.45, 25614.376, 4.5, 75, 0, 0.00129, 4.90, 23871.446, 0.9, 31, 0, 0.00126, 4.03, 141.975, -3.8, -44, 0, 0.00124, 6.01, 522.369, 0, 0, 0, 0.00120, 4.94, -10071.622, -5.2, -69, 0, 0.00118, 5.07, -15.419, -2.2, -19, 0, 0.00107, 3.49, 23452.693, -3.4, -20, 0, 0.00104, 4.78, 17495.234, -1.3, 0, 0, 0.00103, 1.44, -18.049, -2.2, -19, 0, 0.00102, 5.63, 15542.402, -0.7, 6, 0, 0.00102, 2.59, 15543.107, -0.7, 6, 0, 0.00100, 4.11, -6.559, -1.9, -22, 0, 0.00097, 0.08, 15400.779, 3.1, 50, 0, 0.00096, 5.84, 31781.385, -1.9, 5, 0, 0.00094, 1.08, 8328.363, 0, 0, 0, 0.00094, 2.46, 16799.358, -0.7, 6, 0, 0.00094, 1.69, 6376.211, 2.2, 32, 0, 0.00093, 3.64, 8329.020, 3.0, 50, 0, 0.00093, 2.65, 16655.082, 4.6, 75, 0, 0.00090, 1.90, 15056.428, -4.4, -38, 0, 0.00089, 1.59, 52.969, 0, 0, 0, 0.00088, 2.02, -8257.704, -3.4, -47, 0, 0.00088, 3.02, 7213.711, -2.2, -19, 0, 0.00087, 0.50, 7214.415, -2.2, -19, 0, 0.00087, 0.49, 16659.684, 1.5, 25, 0, 0.00082, 5.64, -4.931, 1.5, 25, 0, 0.00079, 5.17, 13171.522, -4.3, -38, 0, 0.00076, 3.60, 29828.905, -1.3, 12, 0, 0.00076, 4.08, 24567.322, 0.3, 24, 0, 0.00076, 4.58, 1884.906, -0.1, 0, 0, 0.00073, 0.33, 31713.811, -1.4, 12, 0, 0.00073, 0.93, 32828.439, 2.4, 56, 0, 0.00071, 5.91, 38785.898, 0.2, 37, 0, 0.00069, 2.20, 15613.742, -2.5, -16, 0, 0.00066, 3.87, 15.732, -2.5, -23, 0, 0.00066, 0.86, 25823.926, 0.2, 24, 0, 0.00065, 2.52, 8170.957, 1.5, 25, 0, 0.00063, 0.18, 8322.132, -0.3, 0, 0, 0.00060, 5.84, 8326.062, 1.5, 25, 0, 0.00060, 5.15, 8331.321, 1.5, 25, 0, 0.00060, 2.18, 8486.426, 1.5, 25, 0, 0.00058, 2.30, -1.731, -4, -44, 0, 0.00058, 5.43, 14357.138, -2, -16, 0, 0.00057, 3.09, 8294.910, 2, 29, 0, 0.00057, 4.67, -8362.473, -1, -21, 0, 0.00056, 4.15, 16833.151, -1, 0, 0, 0.00054, 1.93, 7056.329, -2, -19, 0, 0.00054, 5.27, 8315.574, -2, -19, 0, 0.00052, 5.6, 8311.418, -2, -19, 0, 0.00052, 2.7, -77.552, 0, 0, 0, 0.00051, 4.3, 7230.984, 2, 25, 0, 0.00050, 0.4, -0.508, 0, 0, 0, 0.00049, 5.4, 7211.433, -2, -19, 0, 0.00049, 4.4, 7216.693, -2, -19, 0, 0.00049, 4.3, 16864.631, 0, 24, 0, 0.00049, 2.2, 16869.234, -3, -26, 0, 0.00047, 6.1, 627.596, 0, 0, 0, 0.00047, 5.0, 12.619, 1, 7, 0, 0.00045, 4.9, -8815.018, -5, -69, 0, 0.00044, 1.6, 62.133, -2, -19, 0, 0.00042, 2.9, -13.118, -4, -44, 0, 0.00042, 4.1, -119.445, 0, 0, 0, 0.00041, 4.3, 22756.817, -3, -13, 0, 0.00041, 3.6, 8288.877, 2, 25, 0, 0.00040, 0.5, 6663.308, -2, -19, 0, 0.00040, 1.1, 8368.506, 2, 25, 0, 0.00039, 4.1, 6443.786, 2, 25, 0, 0.00039, 3.1, 16657.383, 3, 50, 0, 0.00038, 0.1, 16657.031, 3, 50, 0, 0.00038, 3.0, 16657.735, 3, 50, 0, 0.00038, 4.6, 23942.433, -1, 9, 0, 0.00037, 4.3, 15385.020, -1, 6, 0, 0.00037, 5.0, 548.678, 0, 0, 0, 0.00036, 1.8, 7213.352, -2, -19, 0, 0.00036, 1.7, 7214.774, -2, -19, 0, 0.00035, 1.1, 7777.936, 2, 25, 0, 0.00035, 1.6, -8.860, 0, 0, 0, 0.00035, 4.4, 23869.145, 2, 56, 0, 0.00035, 2.0, 6691.693, -2, -19, 0, 0.00034, 1.3, -1185.616, -2, -22, 0, 0.00034, 2.2, 23873.747, -1, 6, 0, 0.00033, 2.0, -235.287, 0, 0, 0, 0.00033, 3.1, 17913.987, 3, 50, 0, 0.00033, 1.0, 8351.233, -2, -19, 0],
        [0.004870, 4.6693, 628.30196, -0.027, 0, -0.01, 0.002280, 2.6746, -2.30120, 1.523, 25, -0.12, 0.001500, 3.372, 6585.76091, -2.16, -19, 0.1, 0.001200, 5.728, 14914.45233, -0.64, 6, 0, 0.001080, 3.969, 7700.38947, 1.55, 25, -0.1, 0.000800, 0.742, 8956.99338, 1.50, 25, -0.1, 0.000254, 6.002, 0.3286, 1.52, 25, -0.1, 0.000210, 0.144, 7842.3648, -2.21, -19, 0, 0.000180, 2.500, 16171.0562, -0.7, 6, 0, 0.000130, 0.44, 8399.6791, -0.4, 3, 0, 0.000126, 5.03, 8326.3902, 3.0, 50, 0, 0.000120, 5.77, 14286.1504, -0.6, 6, 0, 0.000118, 5.96, 8330.9926, 0, 0, 0, 0.000110, 1.80, 23243.1438, 0.9, 31, 0, 0.000110, 3.42, 5957.4590, -2.1, -19, 0, 0.000110, 4.63, 1256.6039, -0.1, 0, 0, 0.000099, 4.70, -0.7113, 0, 0, 0, 0.000070, 0.04, 16029.0809, 3.1, 50, 0, 0.000070, 5.14, 8328.3391, 1.5, 25, 0, 0.000070, 5.85, 8329.0437, 1.5, 25, 0, 0.000060, 1.02, -1742.9305, -3.7, -44, 0, 0.000060, 3.10, 17285.6848, 3.0, 50, 0, 0.000054, 5.69, -0.352, 0, 0, 0, 0.000043, 0.52, 15.542, 0, 0, 0, 0.000041, 2.03, 2.630, 0, 0, 0, 0.000040, 0.10, 8470.667, -2.2, -19, 0, 0.000040, 4.01, 7072.088, 1.6, 25, 0, 0.000036, 2.93, -8.860, -0.3, 0, 0, 0.000030, 1.20, 22128.515, -2.8, -13, 0, 0.000030, 2.54, 15542.754, -0.7, 6, 0, 0.000027, 4.43, 7211.762, -0.7, 6, 0, 0.000026, 0.51, 15540.453, 0.9, 31, 0, 0.000026, 1.44, 15545.055, -2.2, -19, 0, 0.000025, 5.37, 7216.364, -3.7, -44, 0],
        [0.00001200, 1.041, -2.3012, 1.52, 25, -0.1, 0.00000170, 0.31, -0.711, 0, 0, 0]
    ];
    ShouXingUtil.QI_KB = [
        1640650.479938, 15.21842500,
        1642476.703182, 15.21874996,
        1683430.515601, 15.218750011,
        1752157.640664, 15.218749978,
        1807675.003759, 15.218620279,
        1883627.765182, 15.218612292,
        1907369.128100, 15.218449176,
        1936603.140413, 15.218425000,
        1939145.524180, 15.218466998,
        1947180.798300, 15.218524844,
        1964362.041824, 15.218533526,
        1987372.340971, 15.218513908,
        1999653.819126, 15.218530782,
        2007445.469786, 15.218535181,
        2021324.917146, 15.218526248,
        2047257.232342, 15.218519654,
        2070282.898213, 15.218425000,
        2073204.872850, 15.218515221,
        2080144.500926, 15.218530782,
        2086703.688963, 15.218523776,
        2110033.182763, 15.218425000,
        2111190.300888, 15.218425000,
        2113731.271005, 15.218515671,
        2120670.840263, 15.218425000,
        2123973.309063, 15.218425000,
        2125068.997336, 15.218477932,
        2136026.312633, 15.218472436,
        2156099.495538, 15.218425000,
        2159021.324663, 15.218425000,
        2162308.575254, 15.218461742,
        2178485.706538, 15.218425000,
        2178759.662849, 15.218445786,
        2185334.020800, 15.218425000,
        2187525.481425, 15.218425000,
        2188621.191481, 15.218437494,
        2322147.76
    ];
    ShouXingUtil.QB = ShouXingUtil.decode('FrcFs22AFsckF2tsDtFqEtF1posFdFgiFseFtmelpsEfhkF2anmelpFlF1ikrotcnEqEq2FfqmcDsrFor22FgFrcgDscFs22FgEeFtE2sfFs22sCoEsaF2tsD1FpeE2eFsssEciFsFnmelpFcFhkF2tcnEqEpFgkrotcnEqrEtFermcDsrE222FgBmcmr22DaEfnaF222sD1FpeForeF2tssEfiFpEoeFssD1iFstEqFppDgFstcnEqEpFg11FscnEqrAoAF2ClAEsDmDtCtBaDlAFbAEpAAAAAD2FgBiBqoBbnBaBoAAAAAAAEgDqAdBqAFrBaBoACdAAf1AACgAAAeBbCamDgEifAE2AABa1C1BgFdiAAACoCeE1ADiEifDaAEqAAFe1AcFbcAAAAAF1iFaAAACpACmFmAAAAAAAACrDaAAADG0');
    ShouXingUtil.SHUO_KB = [1457698.231017, 29.53067166, 1546082.512234, 29.53085106, 1640640.735300, 29.53060000, 1642472.151543, 29.53085439, 1683430.509300, 29.53086148, 1752148.041079, 29.53085097, 1807665.420323, 29.53059851, 1883618.114100, 29.53060000, 1907360.704700, 29.53060000, 1936596.224900, 29.53060000, 1939135.675300, 29.53060000, 1947168.00];
    ShouXingUtil.SB = ShouXingUtil.decode('EqoFscDcrFpmEsF2DfFideFelFpFfFfFiaipqti1ksttikptikqckstekqttgkqttgkqteksttikptikq2fjstgjqttjkqttgkqtekstfkptikq2tijstgjiFkirFsAeACoFsiDaDiADc1AFbBfgdfikijFifegF1FhaikgFag1E2btaieeibggiffdeigFfqDfaiBkF1kEaikhkigeidhhdiegcFfakF1ggkidbiaedksaFffckekidhhdhdikcikiakicjF1deedFhFccgicdekgiFbiaikcfi1kbFibefgEgFdcFkFeFkdcfkF1kfkcickEiFkDacFiEfbiaejcFfffkhkdgkaiei1ehigikhdFikfckF1dhhdikcfgjikhfjicjicgiehdikcikggcifgiejF1jkieFhegikggcikFegiegkfjebhigikggcikdgkaFkijcfkcikfkcifikiggkaeeigefkcdfcfkhkdgkegieidhijcFfakhfgeidieidiegikhfkfckfcjbdehdikggikgkfkicjicjF1dbidikFiggcifgiejkiegkigcdiegfggcikdbgfgefjF1kfegikggcikdgFkeeijcfkcikfkekcikdgkabhkFikaffcfkhkdgkegbiaekfkiakicjhfgqdq2fkiakgkfkhfkfcjiekgFebicggbedF1jikejbbbiakgbgkacgiejkijjgigfiakggfggcibFifjefjF1kfekdgjcibFeFkijcfkfhkfkeaieigekgbhkfikidfcjeaibgekgdkiffiffkiakF1jhbakgdki1dj1ikfkicjicjieeFkgdkicggkighdF1jfgkgfgbdkicggfggkidFkiekgijkeigfiskiggfaidheigF1jekijcikickiggkidhhdbgcfkFikikhkigeidieFikggikhkffaffijhidhhakgdkhkijF1kiakF1kfheakgdkifiggkigicjiejkieedikgdfcggkigieeiejfgkgkigbgikicggkiaideeijkefjeijikhkiggkiaidheigcikaikffikijgkiahi1hhdikgjfifaakekighie1hiaikggikhkffakicjhiahaikggikhkijF1kfejfeFhidikggiffiggkigicjiekgieeigikggiffiggkidheigkgfjkeigiegikifiggkidhedeijcfkFikikhkiggkidhh1ehigcikaffkhkiggkidhh1hhigikekfiFkFikcidhh1hitcikggikhkfkicjicghiediaikggikhkijbjfejfeFhaikggifikiggkigiejkikgkgieeigikggiffiggkigieeigekijcijikggifikiggkideedeijkefkfckikhkiggkidhh1ehijcikaffkhkiggkidhh1hhigikhkikFikfckcidhh1hiaikgjikhfjicjicgiehdikcikggifikigiejfejkieFhegikggifikiggfghigkfjeijkhigikggifikiggkigieeijcijcikfksikifikiggkidehdeijcfdckikhkiggkhghh1ehijikifffffkhsFngErD1pAfBoDd1BlEtFqA2AqoEpDqElAEsEeB2BmADlDkqBtC1FnEpDqnEmFsFsAFnllBbFmDsDiCtDmAB2BmtCgpEplCpAEiBiEoFqFtEqsDcCnFtADnFlEgdkEgmEtEsCtDmADqFtAFrAtEcCqAE1BoFqC1F1DrFtBmFtAC2ACnFaoCgADcADcCcFfoFtDlAFgmFqBq2bpEoAEmkqnEeCtAE1bAEqgDfFfCrgEcBrACfAAABqAAB1AAClEnFeCtCgAADqDoBmtAAACbFiAAADsEtBqAB2FsDqpFqEmFsCeDtFlCeDtoEpClEqAAFrAFoCgFmFsFqEnAEcCqFeCtFtEnAEeFtAAEkFnErAABbFkADnAAeCtFeAfBoAEpFtAABtFqAApDcCGJ');
    return ShouXingUtil;
}());
exports.ShouXingUtil = ShouXingUtil;
var SolarTerm = (function (_super) {
    __extends(SolarTerm, _super);
    function SolarTerm(year, indexOrName) {
        var _this = _super.call(this, SolarTerm.NAMES, indexOrName) || this;
        var y = SolarTerm.numeric(year, 'solar term year');
        if (typeof indexOrName === 'number') {
            var size = SolarTerm.NAMES.length;
            y = ~~((y * size + indexOrName) / size);
        }
        var jd = Math.floor((y - 2000) * 365.2422 + 180);
        var w = Math.floor((jd - 355 + 183) / 365.2422) * 365.2422 + 355;
        if (ShouXingUtil.calcQi(w) > jd) {
            w -= 365.2422;
        }
        _this.year = y;
        _this.cursoryJulianDay = ShouXingUtil.calcQi(w + 15.2184 * _this.index);
        return _this;
    }
    SolarTerm.fromIndex = function (year, index) {
        return new SolarTerm(year, index);
    };
    SolarTerm.fromName = function (year, name) {
        return new SolarTerm(year, name);
    };
    SolarTerm.prototype.next = function (n) {
        var size = this.getSize();
        var i = this.index + n;
        return SolarTerm.fromIndex(~~((this.year * size + i) / size), this.indexOfBy(i));
    };
    SolarTerm.prototype.isJie = function () {
        return this.index % 2 === 1;
    };
    SolarTerm.prototype.isQi = function () {
        return this.index % 2 === 0;
    };
    SolarTerm.prototype.getJulianDay = function () {
        return JulianDay.fromJulianDay(ShouXingUtil.qiAccurate2(this.cursoryJulianDay) + JulianDay.J2000);
    };
    SolarTerm.prototype.getSolarDay = function () {
        return JulianDay.fromJulianDay(this.cursoryJulianDay + JulianDay.J2000).getSolarDay();
    };
    SolarTerm.prototype.getYear = function () {
        return this.year;
    };
    SolarTerm.prototype.getCursoryJulianDay = function () {
        return this.cursoryJulianDay;
    };
    SolarTerm.NAMES = ['冬至', '小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪'];
    return SolarTerm;
}(LoopTyme));
exports.SolarTerm = SolarTerm;
var SolarTermDay = (function (_super) {
    __extends(SolarTermDay, _super);
    function SolarTermDay(solarTerm, dayIndex) {
        return _super.call(this, solarTerm, dayIndex) || this;
    }
    SolarTermDay.prototype.getSolarTerm = function () {
        return this.culture;
    };
    return SolarTermDay;
}(AbstractCultureDay));
exports.SolarTermDay = SolarTermDay;
var SolarYear = (function (_super) {
    __extends(SolarYear, _super);
    function SolarYear(year) {
        var y = SolarYear.numeric(year, 'solar year');
        SolarYear.validate(y);
        return _super.call(this, y) || this;
    }
    SolarYear.validate = function (year) {
        if (year < 1 || year > 9999) {
            throw new Error("illegal solar year: ".concat(year));
        }
    };
    SolarYear.fromYear = function (year) {
        return new SolarYear(year);
    };
    SolarYear.prototype.getDayCount = function () {
        if (1582 === this.getYear()) {
            return 355;
        }
        return this.isLeap() ? 366 : 365;
    };
    SolarYear.prototype.isLeap = function () {
        var y = this.getYear();
        if (y < 1600) {
            return y % 4 === 0;
        }
        return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    };
    SolarYear.prototype.getName = function () {
        return "".concat(this.getYear(), "\u5E74");
    };
    SolarYear.prototype.next = function (n) {
        return SolarYear.fromYear(this.getYear() + n);
    };
    SolarYear.prototype.getMonths = function () {
        var l = [];
        var y = this.getYear();
        for (var i = 1; i < 13; i++) {
            l.push(SolarMonth.fromYm(y, i));
        }
        return l;
    };
    SolarYear.prototype.getSeasons = function () {
        var l = [];
        var y = this.getYear();
        for (var i = 0; i < 4; i++) {
            l.push(SolarSeason.fromIndex(y, i));
        }
        return l;
    };
    SolarYear.prototype.getHalfYears = function () {
        var l = [];
        var y = this.getYear();
        for (var i = 0; i < 2; i++) {
            l.push(SolarHalfYear.fromIndex(y, i));
        }
        return l;
    };
    SolarYear.prototype.getRabByungYear = function () {
        return RabByungYear.fromYear(this.getYear());
    };
    return SolarYear;
}(YearUnit));
exports.SolarYear = SolarYear;
var SolarHalfYear = (function (_super) {
    __extends(SolarHalfYear, _super);
    function SolarHalfYear(year, index) {
        var _this = this;
        var y = SolarHalfYear.numeric(year, 'solar year');
        var i = SolarHalfYear.numeric(index, 'solar half year index');
        SolarHalfYear.validate(y, i);
        _this = _super.call(this, y) || this;
        _this.index = i;
        return _this;
    }
    SolarHalfYear.validate = function (year, index) {
        if (index < 0 || index > 1) {
            throw new Error("illegal solar half year index: ".concat(index));
        }
        SolarYear.validate(year);
    };
    SolarHalfYear.fromIndex = function (year, index) {
        return new SolarHalfYear(year, index);
    };
    SolarHalfYear.prototype.getSolarYear = function () {
        return SolarYear.fromYear(this.getYear());
    };
    SolarHalfYear.prototype.getIndex = function () {
        return this.index;
    };
    SolarHalfYear.prototype.getName = function () {
        return SolarHalfYear.NAMES[this.index];
    };
    SolarHalfYear.prototype.toString = function () {
        return this.getSolarYear().toString() + this.getName();
    };
    SolarHalfYear.prototype.next = function (n) {
        var i = this.index + n;
        return SolarHalfYear.fromIndex(~~((this.getYear() * 2 + i) / 2), this.indexOf(i, 2));
    };
    SolarHalfYear.prototype.getMonths = function () {
        var l = [];
        var y = this.getYear();
        for (var i = 1; i < 7; i++) {
            l.push(SolarMonth.fromYm(y, this.index * 6 + i));
        }
        return l;
    };
    SolarHalfYear.prototype.getSeasons = function () {
        var l = [];
        var y = this.getYear();
        for (var i = 0; i < 2; i++) {
            l.push(SolarSeason.fromIndex(y, this.index * 2 + i));
        }
        return l;
    };
    SolarHalfYear.NAMES = ['上半年', '下半年'];
    return SolarHalfYear;
}(YearUnit));
exports.SolarHalfYear = SolarHalfYear;
var SolarSeason = (function (_super) {
    __extends(SolarSeason, _super);
    function SolarSeason(year, index) {
        var _this = this;
        var y = SolarSeason.numeric(year, 'solar year');
        var i = SolarSeason.numeric(index, 'solar season index');
        SolarSeason.validate(y, i);
        _this = _super.call(this, y) || this;
        _this.index = i;
        return _this;
    }
    SolarSeason.validate = function (year, index) {
        if (index < 0 || index > 3) {
            throw new Error("illegal solar season index: ".concat(index));
        }
        SolarYear.validate(year);
    };
    SolarSeason.fromIndex = function (year, index) {
        return new SolarSeason(year, index);
    };
    SolarSeason.prototype.getSolarYear = function () {
        return SolarYear.fromYear(this.getYear());
    };
    SolarSeason.prototype.getIndex = function () {
        return this.index;
    };
    SolarSeason.prototype.getName = function () {
        return SolarSeason.NAMES[this.index];
    };
    SolarSeason.prototype.toString = function () {
        return this.getSolarYear().toString() + this.getName();
    };
    SolarSeason.prototype.next = function (n) {
        var i = this.index + n;
        return SolarSeason.fromIndex(~~((this.getYear() * 4 + i) / 4), this.indexOf(i, 4));
    };
    SolarSeason.prototype.getMonths = function () {
        var l = [];
        var y = this.getYear();
        for (var i = 1; i < 4; i++) {
            l.push(SolarMonth.fromYm(y, this.index * 3 + i));
        }
        return l;
    };
    SolarSeason.NAMES = ['一季度', '二季度', '三季度', '四季度'];
    return SolarSeason;
}(YearUnit));
exports.SolarSeason = SolarSeason;
var SolarMonth = (function (_super) {
    __extends(SolarMonth, _super);
    function SolarMonth(year, month) {
        var y = SolarYear.numeric(year, 'solar year');
        var m = SolarMonth.numeric(month, 'solar month');
        SolarMonth.validate(y, m);
        return _super.call(this, y, m) || this;
    }
    SolarMonth.validate = function (year, month) {
        if (month < 1 || month > 12) {
            throw new Error("illegal solar month: ".concat(month));
        }
        SolarYear.validate(year);
    };
    SolarMonth.fromYm = function (year, month) {
        return new SolarMonth(year, month);
    };
    SolarMonth.prototype.getSolarYear = function () {
        return SolarYear.fromYear(this.getYear());
    };
    SolarMonth.prototype.getDayCount = function () {
        var m = this.getMonth();
        if (1582 === this.getYear() && 10 === m) {
            return 21;
        }
        var d = SolarMonth.DAYS[this.getIndexInYear()];
        if (2 === m && this.getSolarYear().isLeap()) {
            d++;
        }
        return d;
    };
    SolarMonth.prototype.getIndexInYear = function () {
        return this.getMonth() - 1;
    };
    SolarMonth.prototype.getSeason = function () {
        return SolarSeason.fromIndex(this.getYear(), ~~(this.getIndexInYear() / 3));
    };
    SolarMonth.prototype.getWeekCount = function (start) {
        return Math.ceil((this.indexOf(SolarDay.fromYmd(this.getYear(), this.getMonth(), 1).getWeek().getIndex() - start, 7) + this.getDayCount()) / 7);
    };
    SolarMonth.prototype.getName = function () {
        return SolarMonth.NAMES[this.getIndexInYear()];
    };
    SolarMonth.prototype.toString = function () {
        return this.getSolarYear().toString() + this.getName();
    };
    SolarMonth.prototype.next = function (n) {
        var i = this.getMonth() - 1 + n;
        return SolarMonth.fromYm(~~((this.getYear() * 12 + i) / 12), this.indexOf(i, 12) + 1);
    };
    SolarMonth.prototype.getWeeks = function (start) {
        var l = [];
        var y = this.getYear();
        var m = this.getMonth();
        for (var i = 0, j = this.getWeekCount(start); i < j; i++) {
            l.push(SolarWeek.fromYm(y, m, i, start));
        }
        return l;
    };
    SolarMonth.prototype.getDays = function () {
        var l = [];
        var y = this.getYear();
        var m = this.getMonth();
        for (var i = 1, j = this.getDayCount(); i <= j; i++) {
            l.push(SolarDay.fromYmd(y, m, i));
        }
        return l;
    };
    SolarMonth.prototype.getFirstDay = function () {
        return SolarDay.fromYmd(this.getYear(), this.getMonth(), 1);
    };
    SolarMonth.NAMES = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    SolarMonth.DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return SolarMonth;
}(MonthUnit));
exports.SolarMonth = SolarMonth;
var SolarWeek = (function (_super) {
    __extends(SolarWeek, _super);
    function SolarWeek(year, month, index, start) {
        var y = SolarWeek.numeric(year, 'solar year');
        var m = SolarWeek.numeric(month, 'solar month');
        var i = SolarWeek.numeric(index, 'solar week index');
        var s = SolarWeek.numeric(start, 'week index');
        SolarWeek.validate(y, m, i, s);
        return _super.call(this, y, m, i, s) || this;
    }
    SolarWeek.validate = function (year, month, index, start) {
        WeekUnit.validate(year, month, index, start);
        var m = SolarMonth.fromYm(year, month);
        if (index >= m.getWeekCount(start)) {
            throw new Error("illegal solar week index: ".concat(index, " in month: ").concat(m));
        }
    };
    SolarWeek.fromYm = function (year, month, index, start) {
        return new SolarWeek(year, month, index, start);
    };
    SolarWeek.prototype.getSolarMonth = function () {
        return SolarMonth.fromYm(this.getYear(), this.getMonth());
    };
    SolarWeek.prototype.getIndexInYear = function () {
        var i = 0;
        var firstDay = this.getFirstDay();
        var w = SolarWeek.fromYm(this.getYear(), 1, 0, this.getStart());
        while (!w.getFirstDay().equals(firstDay)) {
            w = w.next(1);
            i++;
        }
        return i;
    };
    SolarWeek.prototype.getName = function () {
        return SolarWeek.NAMES[this.getIndex()];
    };
    SolarWeek.prototype.toString = function () {
        return this.getSolarMonth().toString() + this.getName();
    };
    SolarWeek.prototype.next = function (n) {
        var startIndex = this.getStart();
        var d = this.getIndex() + n;
        var m = this.getSolarMonth();
        if (n > 0) {
            var weekCount = m.getWeekCount(startIndex);
            while (d >= weekCount) {
                d -= weekCount;
                m = m.next(1);
                if (m.getFirstDay().getWeek().getIndex() !== startIndex) {
                    d += 1;
                }
                weekCount = m.getWeekCount(startIndex);
            }
        }
        else if (n < 0) {
            while (d < 0) {
                if (m.getFirstDay().getWeek().getIndex() !== startIndex) {
                    d -= 1;
                }
                m = m.next(-1);
                d += m.getWeekCount(startIndex);
            }
        }
        return SolarWeek.fromYm(m.getYear(), m.getMonth(), d, startIndex);
    };
    SolarWeek.prototype.getFirstDay = function () {
        var firstDay = SolarDay.fromYmd(this.getYear(), this.getMonth(), 1);
        return firstDay.next(this.getIndex() * 7 - this.indexOf(firstDay.getWeek().getIndex() - this.getStart(), 7));
    };
    SolarWeek.prototype.getDays = function () {
        var l = [];
        var d = this.getFirstDay();
        l.push(d);
        for (var i = 1; i < 7; i++) {
            l.push(d.next(i));
        }
        return l;
    };
    SolarWeek.prototype.equals = function (o) {
        return o && o.getFirstDay().equals(this.getFirstDay());
    };
    SolarWeek.NAMES = ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周'];
    return SolarWeek;
}(WeekUnit));
exports.SolarWeek = SolarWeek;
var SolarDay = (function (_super) {
    __extends(SolarDay, _super);
    function SolarDay(year, month, day) {
        var y = SolarDay.numeric(year, 'solar year');
        var m = SolarDay.numeric(month, 'solar month');
        var d = SolarDay.numeric(day, 'solar day');
        SolarDay.validate(y, m, d);
        return _super.call(this, y, m, d) || this;
    }
    SolarDay.validate = function (year, month, day) {
        if (day < 1) {
            throw new Error("illegal solar day: ".concat(year, "-").concat(month, "-").concat(day));
        }
        if (1582 === year && 10 === month) {
            if ((day > 4 && day < 15) || day > 31) {
                throw new Error("illegal solar day: ".concat(year, "-").concat(month, "-").concat(day));
            }
        }
        else if (day > SolarMonth.fromYm(year, month).getDayCount()) {
            throw new Error("illegal solar day: ".concat(year, "-").concat(month, "-").concat(day));
        }
    };
    SolarDay.fromYmd = function (year, month, day) {
        return new SolarDay(year, month, day);
    };
    SolarDay.prototype.getSolarMonth = function () {
        return SolarMonth.fromYm(this.getYear(), this.getMonth());
    };
    SolarDay.prototype.getWeek = function () {
        return this.getJulianDay().getWeek();
    };
    SolarDay.prototype.getConstellation = function () {
        var y = this.getMonth() * 100 + this.getDay();
        return Constellation.fromIndex(y > 1221 || y < 120 ? 9 : y < 219 ? 10 : y < 321 ? 11 : y < 420 ? 0 : y < 521 ? 1 : y < 622 ? 2 : y < 723 ? 3 : y < 823 ? 4 : y < 923 ? 5 : y < 1024 ? 6 : y < 1123 ? 7 : 8);
    };
    SolarDay.prototype.getName = function () {
        return SolarDay.NAMES[this.getDay() - 1];
    };
    SolarDay.prototype.toString = function () {
        return this.getSolarMonth().toString() + this.getName();
    };
    SolarDay.prototype.next = function (n) {
        return this.getJulianDay().next(n).getSolarDay();
    };
    SolarDay.prototype.isBefore = function (target) {
        var aYear = this.getYear();
        var bYear = target.getYear();
        if (aYear !== bYear) {
            return aYear < bYear;
        }
        var aMonth = this.getMonth();
        var bMonth = target.getMonth();
        return aMonth !== bMonth ? aMonth < bMonth : this.getDay() < target.getDay();
    };
    SolarDay.prototype.isAfter = function (target) {
        var aYear = this.getYear();
        var bYear = target.getYear();
        if (aYear !== bYear) {
            return aYear > bYear;
        }
        var aMonth = this.getMonth();
        var bMonth = target.getMonth();
        return aMonth !== bMonth ? aMonth > bMonth : this.getDay() > target.getDay();
    };
    SolarDay.prototype.getTerm = function () {
        return this.getTermDay().getSolarTerm();
    };
    SolarDay.prototype.getTermDay = function () {
        var y = this.getYear();
        var i = this.getMonth() * 2;
        if (i == 24) {
            y += 1;
            i = 0;
        }
        var term = SolarTerm.fromIndex(y, i + 1);
        var day = term.getSolarDay();
        while (this.isBefore(day)) {
            term = term.next(-1);
            day = term.getSolarDay();
        }
        return new SolarTermDay(term, this.subtract(day));
    };
    SolarDay.prototype.getSolarWeek = function (start) {
        var y = this.getYear();
        var m = this.getMonth();
        return SolarWeek.fromYm(y, m, Math.ceil((this.getDay() + SolarDay.fromYmd(y, m, 1).getWeek().next(-start).getIndex()) / 7.0) - 1, start);
    };
    SolarDay.prototype.getPhenologyDay = function () {
        var d = this.getTermDay();
        var dayIndex = d.getDayIndex();
        var index = ~~(dayIndex / 5);
        if (index > 2) {
            index = 2;
        }
        var term = d.getSolarTerm();
        return new PhenologyDay(Phenology.fromIndex(term.getYear(), term.getIndex() * 3 + index), dayIndex - index * 5);
    };
    SolarDay.prototype.getPhenology = function () {
        return this.getPhenologyDay().getPhenology();
    };
    SolarDay.prototype.getDogDay = function () {
        var d0 = Event.builder().termHeavenStem(12, 6, 20).build().getSolarDay(this.year);
        var d1 = Event.builder().termHeavenStem(12, 6, 30).build().getSolarDay(this.year);
        var d2 = Event.builder().termHeavenStem(15, 6, 0).build().getSolarDay(this.year);
        if (null == d0 || null == d1 || null == d2) {
            return null;
        }
        if (this.isBefore(d0) || this.isAfter(d2.next(9))) {
            return null;
        }
        if (!this.isBefore(d2)) {
            return new DogDay(Dog.fromIndex(2), this.subtract(d2));
        }
        return this.isBefore(d1) ? new DogDay(Dog.fromIndex(0), this.subtract(d0)) : new DogDay(Dog.fromIndex(1), this.subtract(d1));
    };
    SolarDay.prototype.getPlumRainDay = function () {
        var start = Event.builder().termHeavenStem(11, 2, 0).build().getSolarDay(this.year);
        var end = Event.builder().termEarthBranch(13, 7, 0).build().getSolarDay(this.year);
        if (null == start || null == end) {
            return null;
        }
        if (this.isBefore(start) || this.isAfter(end)) {
            return null;
        }
        return this.equals(end) ? new PlumRainDay(PlumRain.fromIndex(1), 0) : new PlumRainDay(PlumRain.fromIndex(0), this.subtract(start));
    };
    SolarDay.prototype.getHideHeavenStemDay = function () {
        var dayCounts = [3, 5, 7, 9, 10, 30];
        var term = this.getTerm();
        if (term.isQi()) {
            term = term.next(-1);
        }
        var dayIndex = this.subtract(term.getSolarDay());
        var startIndex = (term.getIndex() - 1) * 3;
        var data = '93705542220504xx1513904541632524533533105544806564xx7573304542018584xx95'.substring(startIndex, startIndex + 6);
        var days = 0;
        var heavenStemIndex = 0;
        var typeIndex = 0;
        while (typeIndex < 3) {
            var i = typeIndex * 2;
            var d = data.substring(i, i + 1);
            var count = 0;
            if (d != 'x') {
                heavenStemIndex = parseInt(d, 10);
                count = dayCounts[parseInt(data.substring(i + 1, i + 2), 10)];
                days += count;
            }
            if (dayIndex <= days) {
                dayIndex -= days - count;
                break;
            }
            typeIndex++;
        }
        var type;
        if (typeIndex == 0) {
            type = HideHeavenStemType.RESIDUAL;
        }
        else if (typeIndex == 1) {
            type = HideHeavenStemType.MIDDLE;
        }
        else {
            type = HideHeavenStemType.MAIN;
        }
        return new HideHeavenStemDay(new HideHeavenStem(heavenStemIndex, type), dayIndex);
    };
    SolarDay.prototype.getNineDay = function () {
        var year = this.getYear();
        var start = SolarTerm.fromIndex(year + 1, 0).getSolarDay();
        if (this.isBefore(start)) {
            start = SolarTerm.fromIndex(year, 0).getSolarDay();
        }
        var end = start.next(81);
        if (this.isBefore(start) || !this.isBefore(end)) {
            return null;
        }
        var days = this.subtract(start);
        return new NineDay(Nine.fromIndex(~~(days / 9)), days % 9);
    };
    SolarDay.prototype.getIndexInYear = function () {
        return this.subtract(SolarDay.fromYmd(this.getYear(), 1, 1));
    };
    SolarDay.prototype.subtract = function (target) {
        return ~~(this.getJulianDay().subtract(target.getJulianDay()));
    };
    SolarDay.prototype.getJulianDay = function () {
        return JulianDay.fromYmdHms(this.getYear(), this.getMonth(), this.getDay(), 0, 0, 0);
    };
    SolarDay.prototype.getLunarDay = function () {
        var m = LunarMonth.fromYm(this.getYear(), this.getMonth());
        var days = this.subtract(m.getFirstJulianDay().getSolarDay());
        while (days < 0) {
            m = m.next(-1);
            days += m.getDayCount();
        }
        return LunarDay.fromYmd(m.getYear(), m.getMonthWithLeap(), days + 1);
    };
    SolarDay.prototype.getRabByungDay = function () {
        return RabByungDay.fromSolarDay(this);
    };
    SolarDay.prototype.getSixtyCycleDay = function () {
        return SixtyCycleDay.fromSolarDay(this);
    };
    SolarDay.prototype.getLegalHoliday = function () {
        return LegalHoliday.fromYmd(this.getYear(), this.getMonth(), this.getDay());
    };
    SolarDay.prototype.getFestival = function () {
        return SolarFestival.fromYmd(this.getYear(), this.getMonth(), this.getDay());
    };
    SolarDay.prototype.getPhaseDay = function () {
        var month = this.getLunarDay().getLunarMonth().next(1);
        var p = Phase.fromIndex(month.getYear(), month.getMonthWithLeap(), 0);
        var d = p.getSolarDay();
        while (d.isAfter(this)) {
            p = p.next(-1);
            d = p.getSolarDay();
        }
        return new PhaseDay(p, this.subtract(d));
    };
    SolarDay.prototype.getPhase = function () {
        return this.getPhaseDay().getPhase();
    };
    SolarDay.NAMES = ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日', '31日'];
    return SolarDay;
}(DayUnit));
exports.SolarDay = SolarDay;
var SolarTime = (function (_super) {
    __extends(SolarTime, _super);
    function SolarTime(year, month, day, hour, minute, second) {
        var y = SolarTime.numeric(year, 'solar year');
        var m = SolarTime.numeric(month, 'solar month');
        var d = SolarTime.numeric(day, 'solar day');
        var h = SolarTime.numeric(hour, 'hour');
        var n = SolarTime.numeric(minute, 'minute');
        var s = SolarTime.numeric(second, 'second');
        SolarTime.validate(y, m, d, h, n, s);
        return _super.call(this, y, m, d, h, n, s) || this;
    }
    SolarTime.validate = function (year, month, day, hour, minute, second) {
        SecondUnit.validate(year, month, day, hour, minute, second);
        SolarDay.validate(year, month, day);
    };
    SolarTime.fromYmdHms = function (year, month, day, hour, minute, second) {
        return new SolarTime(year, month, day, hour, minute, second);
    };
    SolarTime.prototype.getSolarDay = function () {
        return SolarDay.fromYmd(this.getYear(), this.getMonth(), this.getDay());
    };
    SolarTime.prototype.getName = function () {
        var h = (this.hour < 10 ? '0' : '') + this.hour;
        var m = (this.minute < 10 ? '0' : '') + this.minute;
        var s = (this.second < 10 ? '0' : '') + this.second;
        return "".concat(h, ":").concat(m, ":").concat(s);
    };
    SolarTime.prototype.toString = function () {
        return "".concat(this.getSolarDay(), " ").concat(this.getName());
    };
    SolarTime.prototype.next = function (n) {
        var h = this.getHour();
        var m = this.getMinute();
        var s = this.getSecond();
        if (n == 0) {
            return SolarTime.fromYmdHms(this.getYear(), this.getMonth(), this.getDay(), h, m, s);
        }
        var ts = s + n;
        var tm = m + ~~(ts / 60);
        ts %= 60;
        if (ts < 0) {
            ts += 60;
            tm -= 1;
        }
        var th = h + ~~(tm / 60);
        tm %= 60;
        if (tm < 0) {
            tm += 60;
            th -= 1;
        }
        var td = ~~(th / 24);
        th %= 24;
        if (th < 0) {
            th += 24;
            td -= 1;
        }
        var d = this.getSolarDay().next(td);
        return SolarTime.fromYmdHms(d.getYear(), d.getMonth(), d.getDay(), th, tm, ts);
    };
    SolarTime.prototype.isBefore = function (target) {
        var aDay = this.getSolarDay();
        var bDay = target.getSolarDay();
        if (!aDay.equals(bDay)) {
            return aDay.isBefore(bDay);
        }
        var aHour = this.getHour();
        var bHour = target.getHour();
        if (aHour !== bHour) {
            return aHour < bHour;
        }
        var aMinute = this.getMinute();
        var bMinute = target.getMinute();
        return aMinute !== bMinute ? aMinute < bMinute : this.getSecond() < target.getSecond();
    };
    SolarTime.prototype.isAfter = function (target) {
        var aDay = this.getSolarDay();
        var bDay = target.getSolarDay();
        if (!aDay.equals(bDay)) {
            return aDay.isAfter(bDay);
        }
        var aHour = this.getHour();
        var bHour = target.getHour();
        if (aHour !== bHour) {
            return aHour > bHour;
        }
        var aMinute = this.getMinute();
        var bMinute = target.getMinute();
        return aMinute !== bMinute ? aMinute > bMinute : this.getSecond() > target.getSecond();
    };
    SolarTime.prototype.getTerm = function () {
        var term = this.getSolarDay().getTerm();
        if (this.isBefore(term.getJulianDay().getSolarTime())) {
            term = term.next(-1);
        }
        return term;
    };
    SolarTime.prototype.getPhenology = function () {
        var p = this.getSolarDay().getPhenology();
        if (this.isBefore(p.getJulianDay().getSolarTime())) {
            p = p.next(-1);
        }
        return p;
    };
    SolarTime.prototype.getJulianDay = function () {
        return JulianDay.fromYmdHms(this.getYear(), this.getMonth(), this.getDay(), this.getHour(), this.getMinute(), this.getSecond());
    };
    SolarTime.prototype.subtract = function (target) {
        var days = this.getSolarDay().subtract(target.getSolarDay());
        var cs = this.getHour() * 3600 + this.getMinute() * 60 + this.getSecond();
        var ts = target.getHour() * 3600 + target.getMinute() * 60 + target.getSecond();
        var seconds = cs - ts;
        if (seconds < 0) {
            seconds += 86400;
            days--;
        }
        seconds += days * 86400;
        return seconds;
    };
    SolarTime.prototype.getLunarHour = function () {
        var d = this.getSolarDay().getLunarDay();
        return LunarHour.fromYmdHms(d.getYear(), d.getMonth(), d.getDay(), this.getHour(), this.getMinute(), this.getSecond());
    };
    SolarTime.prototype.getSixtyCycleHour = function () {
        return SixtyCycleHour.fromSolarTime(this);
    };
    SolarTime.prototype.getPhase = function () {
        var month = this.getLunarHour().getLunarDay().getLunarMonth().next(1);
        var p = Phase.fromIndex(month.getYear(), month.getMonthWithLeap(), 0);
        while (p.getSolarTime().isAfter(this)) {
            p = p.next(-1);
        }
        return p;
    };
    return SolarTime;
}(SecondUnit));
exports.SolarTime = SolarTime;
var LegalHoliday = (function (_super) {
    __extends(LegalHoliday, _super);
    function LegalHoliday(year, month, day, data) {
        var _this = _super.call(this) || this;
        _this.day = SolarDay.fromYmd(year, month, day);
        _this.work = 48 === data.charCodeAt(8);
        _this.name = LegalHoliday.NAMES[data.charCodeAt(9) - 48];
        return _this;
    }
    LegalHoliday.fromYmd = function (year, month, day) {
        var y = (Array(4).join('0') + year).slice(-4);
        var m = (month < 10 ? '0' : '') + month;
        var d = (day < 10 ? '0' : '') + day;
        var matcher = new RegExp("".concat(y).concat(m).concat(d, "[0-1][0-8][+|-]\\d{2}"), 'g').exec(LegalHoliday.DATA);
        if (!matcher) {
            return null;
        }
        return new LegalHoliday(year, month, day, matcher[0]);
    };
    LegalHoliday.prototype.getName = function () {
        return this.name;
    };
    LegalHoliday.prototype.getDay = function () {
        return this.day;
    };
    LegalHoliday.prototype.isWork = function () {
        return this.work;
    };
    LegalHoliday.prototype.toString = function () {
        return "".concat(this.day, " ").concat(this.name, "(").concat(this.work ? '班' : '休', ")");
    };
    LegalHoliday.prototype.next = function (n) {
        var year = this.day.getYear();
        var month = this.day.getMonth();
        var day = this.day.getDay();
        if (n === 0) {
            return LegalHoliday.fromYmd(year, month, day);
        }
        var ys = (Array(4).join('0') + year).slice(-4);
        var ms = (month < 10 ? '0' : '') + month;
        var ds = (day < 10 ? '0' : '') + day;
        var data = [];
        var today = "".concat(ys).concat(ms).concat(ds);
        var reg = new RegExp("".concat(ys, "\\d{4}[0-1][0-8][+|-]\\d{2}"), 'g');
        var matcher;
        while (matcher = reg.exec(LegalHoliday.DATA)) {
            data.push(matcher[0]);
        }
        var index = -1;
        var size = data.length;
        for (var i = 0; i < size; i++) {
            if (data[i].indexOf(today) === 0) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            return null;
        }
        index += n;
        var y = year;
        if (n > 0) {
            while (index >= size) {
                index -= size;
                y += 1;
                data.length = 0;
                ys = (Array(4).join('0') + y).slice(-4);
                reg = new RegExp("".concat(ys, "\\d{4}[0-1][0-8][+|-]\\d{2}"), 'g');
                while (matcher = reg.exec(LegalHoliday.DATA)) {
                    data.push(matcher[0]);
                }
                size = data.length;
                if (size < 1) {
                    return null;
                }
            }
        }
        else {
            while (index < 0) {
                y -= 1;
                data.length = 0;
                ys = (Array(4).join('0') + y).slice(-4);
                reg = new RegExp("".concat(ys, "\\d{4}[0-1][0-8][+|-]\\d{2}"), 'g');
                while (matcher = reg.exec(LegalHoliday.DATA)) {
                    data.push(matcher[0]);
                }
                size = data.length;
                if (size < 1) {
                    return null;
                }
                index += size;
            }
        }
        var d = data[index];
        return new LegalHoliday(parseInt(d.substring(0, 4), 10), parseInt(d.substring(4, 6), 10), parseInt(d.substring(6, 8), 10), d);
    };
    LegalHoliday.NAMES = ['元旦', '春节', '清明节', '劳动节', '端午节', '中秋节', '国庆节', '国庆中秋', '抗战胜利日'];
    LegalHoliday.DATA = '2001122900+032001123000+022002010110+002002010210-012002010310-022002020901+032002021001+022002021211+002002021311-012002021411-022002021511-032002021611-042002021711-052002021811-062002042703+042002042803+032002050113+002002050213-012002050313-022002050413-032002050513-042002050613-052002050713-062002092806+032002092906+022002100116+002002100216-012002100316-022002100416-032002100516-042002100616-052002100716-062003010110+002003020111+002003020211-012003020311-022003020411-032003020511-042003020611-052003020711-062003020801-072003020901-082003042603+052003042703+042003050113+002003050213-012003050313-022003050413-032003050513-042003050613-052003050713-062003092706+042003092806+032003100116+002003100216-012003100316-022003100416-032003100516-042003100616-052003100716-062004010110+002004011701+052004011801+042004012211+002004012311-012004012411-022004012511-032004012611-042004012711-052004012811-062004050113+002004050213-012004050313-022004050413-032004050513-042004050613-052004050713-062004050803-072004050903-082004100116+002004100216-012004100316-022004100416-032004100516-042004100616-052004100716-062004100906-082004101006-092005010110+002005010210-012005010310-022005020501+042005020601+032005020911+002005021011-012005021111-022005021211-032005021311-042005021411-052005021511-062005043003+012005050113+002005050213-012005050313-022005050413-032005050513-042005050613-052005050713-062005050803-072005100116+002005100216-012005100316-022005100416-032005100516-042005100616-052005100716-062005100806-072005100906-082005123100+012006010110+002006010210-012006010310-022006012801+012006012911+002006013011-012006013111-022006020111-032006020211-042006020311-052006020411-062006020501-072006042903+022006043003+012006050113+002006050213-012006050313-022006050413-032006050513-042006050613-052006050713-062006093006+012006100116+002006100216-012006100316-022006100416-032006100516-042006100616-052006100716-062006100806-072006123000+022006123100+012007010110+002007010210-012007010310-022007021701+012007021811+002007021911-012007022011-022007022111-032007022211-042007022311-052007022411-062007022501-072007042803+032007042903+022007050113+002007050213-012007050313-022007050413-032007050513-042007050613-052007050713-062007092906+022007093006+012007100116+002007100216-012007100316-022007100416-032007100516-042007100616-052007100716-062007122900+032007123010+022007123110+012008010110+002008020201+042008020301+032008020611+002008020711-012008020811-022008020911-032008021011-042008021111-052008021211-062008040412+002008040512-012008040612-022008050113+002008050213-012008050313-022008050403-032008060714+012008060814+002008060914-012008091315+012008091415+002008091515-012008092706+042008092806+032008092916+022008093016+012008100116+002008100216-012008100316-022008100416-032008100516-042009010110+002009010210-012009010310-022009010400-032009012401+012009012511+002009012611-012009012711-022009012811-032009012911-042009013011-052009013111-062009020101-072009040412+002009040512-012009040612-022009050113+002009050213-012009050313-022009052814+002009052914-012009053014-022009053104-032009092706+042009100116+002009100216-012009100316-022009100416-032009100515-022009100615-032009100715-042009100815-052009101005-072010010110+002010010210-012010010310-022010021311+002010021411-012010021511-022010021611-032010021711-042010021811-052010021911-062010022001-072010022101-082010040312+022010040412+012010040512+002010050113+002010050213-012010050313-022010061204+042010061304+032010061414+022010061514+012010061614+002010091905+032010092215+002010092315-012010092415-022010092505-032010092606+052010100116+002010100216-012010100316-022010100416-032010100516-042010100616-052010100716-062010100906-082011010110+002011010210-012011010310-022011013001+042011020211+012011020311+002011020411-012011020511-022011020611-032011020711-042011020811-052011021201-092011040202+032011040312+022011040412+012011040512+002011043013+012011050113+002011050213-012011060414+022011060514+012011060614+002011091015+022011091115+012011091215+002011100116+002011100216-012011100316-022011100416-032011100516-042011100616-052011100716-062011100806-072011100906-082011123100+012012010110+002012010210-012012010310-022012012101+022012012211+012012012311+002012012411-012012012511-022012012611-032012012711-042012012811-052012012901-062012033102+042012040102+032012040212+022012040312+012012040412+002012042803+032012042913+022012043013+012012050113+002012050203-012012062214+012012062314+002012062414-012012092905+012012093015+002012100116+002012100216-012012100316-022012100416-032012100516-042012100616-052012100716-062012100806-072013010110+002013010210-012013010310-022013010500-042013010600-052013020911+012013021011+002013021111-012013021211-022013021311-032013021411-042013021511-052013021601-062013021701-072013040412+002013040512-012013040612-022013042703+042013042803+032013042913+022013043013+012013050113+002013060804+042013060904+032013061014+022013061114+012013061214+002013091915+002013092015-012013092115-022013092205-032013092906+022013100116+002013100216-012013100316-022013100416-032013100516-042013100616-052013100716-062014010110+002014012601+052014013111+002014020111-012014020211-022014020311-032014020411-042014020511-052014020611-062014020801-082014040512+002014040612-012014040712-022014050113+002014050213-012014050313-022014050403-032014053114+022014060114+012014060214+002014090615+022014090715+012014090815+002014092806+032014100116+002014100216-012014100316-022014100416+002014100516-042014100616-052014100716-062014101106-102015010110+002015010210-012015010310-022015010400-032015021501+042015021811+012015021911+002015022011-012015022111-022015022211-032015022311-042015022411-052015022801-092015040412+012015040512+002015040612-012015050113+002015050213-012015050313-022015062014+002015062114-012015062214-022015090318+002015090418-012015090518-022015090608-032015092615+012015092715+002015100116+002015100216-012015100316-022015100416+002015100516-042015100616-052015100716-062015101006-092016010110+002016010210-012016010310-022016020601+022016020711+012016020811+002016020911-012016021011-022016021111-032016021211-042016021311-052016021401-062016040212+022016040312+012016040412+002016043013+012016050113+002016050213-012016060914+002016061014-012016061114-022016061204-032016091515+002016091615-012016091715-022016091805-032016100116+002016100216-012016100316-022016100416-032016100516-042016100616-052016100716-062016100806-072016100906-082016123110+012017010110+002017010210-012017012201+062017012711+012017012811+002017012911-012017013011-022017013111-032017020111-042017020211-052017020401-072017040102+032017040212+022017040312+012017040412+002017042913+022017043013+012017050113+002017052704+032017052814+022017052914+012017053014+002017093006+012017100116+002017100216-012017100316-022017100415+002017100516-042017100616-052017100716-062017100816-072017123010+022017123110+012018010110+002018021101+052018021511+012018021611+002018021711-012018021811-022018021911-032018022011-042018022111-052018022401-082018040512+002018040612-012018040712-022018040802-032018042803+032018042913+022018043013+012018050113+002018061614+022018061714+012018061814+002018092215+022018092315+012018092415+002018092906+022018093006+012018100116+002018100216-012018100316-022018100416-032018100516-042018100616-052018100716-062018122900+032018123010+022018123110+012019010110+002019020201+032019020301+022019020411+012019020511+002019020611-012019020711-022019020811-032019020911-042019021011-052019040512+002019040612-012019040712-022019042803+032019050113+002019050213-012019050313-022019050413-032019050503-042019060714+002019060814-012019060914-022019091315+002019091415-012019091515-022019092906+022019100116+002019100216-012019100316-022019100416-032019100516-042019100616-052019100716-062019101206-112020010110+002020011901+062020012411+012020012511+002020012611-012020012711-022020012811-032020012911-042020013011-052020013111-062020020111-072020020211-082020040412+002020040512-012020040612-022020042603+052020050113+002020050213-012020050313-022020050413-032020050513-042020050903-082020062514+002020062614-012020062714-022020062804-032020092707+042020100117+002020100216-012020100316-022020100416-032020100516-042020100616-052020100716-062020100816-072020101006-092021010110+002021010210-012021010310-022021020701+052021021111+012021021211+002021021311-012021021411-022021021511-032021021611-042021021711-052021022001-082021040312+012021040412+002021040512-012021042503+062021050113+002021050213-012021050313-022021050413-032021050513-042021050803-072021061214+022021061314+012021061414+002021091805+032021091915+022021092015+012021092115+002021092606+052021100116+002021100216-012021100316-022021100416-032021100516-042021100616-052021100716-062021100906-082022010110+002022010210-012022010310-022022012901+032022013001+022022013111+012022020111+002022020211-012022020311-022022020411-032022020511-042022020611-052022040202+032022040312+022022040412+012022040512+002022042403+072022043013+012022050113+002022050213-012022050313-022022050413-032022050703-062022060314+002022060414-012022060514-022022091015+002022091115-012022091215-022022100116+002022100216-012022100316-022022100416-032022100516-042022100616-052022100716-062022100806-072022100906-082022123110+012023010110+002023010210-012023012111+012023012211+002023012311-012023012411-022023012511-032023012611-042023012711-052023012801-062023012901-072023040512+002023042303+082023042913+022023043013+012023050113+002023050213-012023050313-022023050603-052023062214+002023062314-012023062414-022023062504-032023092915+002023093016+012023100116+002023100216-012023100316-022023100416-032023100516-042023100616-052023100706-062023100806-072023123010+022023123110+012024010110+002024020401+062024021011+002024021111-012024021211-022024021311-032024021411-042024021511-052024021611-062024021711-072024021801-082024040412+002024040512-012024040612-022024040702-032024042803+032024050113+002024050213-012024050313-022024050413-032024050513-042024051103-102024060814+022024060914+012024061014+002024091405+032024091515+022024091615+012024091715+002024092906+022024100116+002024100216-012024100316-022024100416-032024100516-042024100616-052024100716-062024101206-112025010110+002025012601+032025012811+012025012911+002025013011-012025013111-022025020111-032025020211-032025020311-042025020411-052025020801-092025040412+002025040512-012025040612-022025042703+042025050113+002025050213-012025050313-022025050413-032025050513-042025053114+002025060114-012025060214-022025092807+032025100117+002025100217-012025100317-022025100417-032025100517-042025100617-052025100717-062025100817-072025101107-102026010110+002026010210-012026010310-022026010400-032026021401+032026021511+022026021611+012026021711+002026021811-012026021911-022026022011-032026022111-042026022211-052026022311-062026022801-112026040412+012026040512+002026040612-012026050113+002026050213-012026050313-022026050413-032026050513-042026050903-082026061914+002026062014-012026062114-022026092006+112026092515+002026092615-012026092715-022026100116+002026100216-012026100316-022026100416-032026100516-042026100616-052026100716-062026101006-09';
    return LegalHoliday;
}(AbstractTyme));
exports.LegalHoliday = LegalHoliday;
var SolarFestival = (function (_super) {
    __extends(SolarFestival, _super);
    function SolarFestival(type, day, startYear, data) {
        var _this = _super.call(this) || this;
        _this.type = type;
        _this.day = day;
        _this.startYear = startYear;
        _this.index = parseInt(data.substring(1, 3), 10);
        _this.name = SolarFestival.NAMES[_this.index];
        return _this;
    }
    SolarFestival.fromIndex = function (year, index) {
        if (index < 0 || index >= SolarFestival.NAMES.length) {
            return null;
        }
        var is = (index < 10 ? '0' : '') + index;
        var matcher = new RegExp("@".concat(is, "\\d+"), 'g').exec(SolarFestival.DATA);
        if (matcher) {
            var data = matcher[0];
            var type = data.charCodeAt(3) - 48;
            if (type === 0) {
                var startYear = parseInt(data.substring(8), 10);
                if (year >= startYear) {
                    return new SolarFestival(FestivalType.DAY, SolarDay.fromYmd(year, parseInt(data.substring(4, 6), 10), parseInt(data.substring(6, 8), 10)), startYear, data);
                }
            }
        }
        return null;
    };
    SolarFestival.fromYmd = function (year, month, day) {
        var m = (month < 10 ? '0' : '') + month;
        var d = (day < 10 ? '0' : '') + day;
        var matcher = new RegExp("@\\d{2}0".concat(m).concat(d, "\\d+"), 'g').exec(SolarFestival.DATA);
        if (matcher) {
            var data = matcher[0];
            var startYear = parseInt(data.substring(8), 10);
            if (year >= startYear) {
                return new SolarFestival(FestivalType.DAY, SolarDay.fromYmd(year, month, day), startYear, data);
            }
        }
        return null;
    };
    SolarFestival.prototype.getName = function () {
        return this.name;
    };
    SolarFestival.prototype.getIndex = function () {
        return this.index;
    };
    SolarFestival.prototype.getDay = function () {
        return this.day;
    };
    SolarFestival.prototype.getType = function () {
        return this.type;
    };
    SolarFestival.prototype.getStartYear = function () {
        return this.startYear;
    };
    SolarFestival.prototype.toString = function () {
        return "".concat(this.day, " ").concat(this.name);
    };
    SolarFestival.prototype.next = function (n) {
        var size = SolarFestival.NAMES.length;
        var i = this.index + n;
        return SolarFestival.fromIndex(~~((this.day.getYear() * size + i) / size), this.indexOf(i, size));
    };
    SolarFestival.NAMES = ['元旦', '妇女节', '植树节', '劳动节', '青年节', '儿童节', '建党节', '建军节', '教师节', '国庆节'];
    SolarFestival.DATA = '@00001011950@01003081950@02003121979@03005011950@04005041950@05006011950@06007011941@07008011933@08009101985@09010011950';
    return SolarFestival;
}(AbstractTyme));
exports.SolarFestival = SolarFestival;
var LunarFestival = (function (_super) {
    __extends(LunarFestival, _super);
    function LunarFestival(type, day, solarTerm, data) {
        var _this = _super.call(this) || this;
        _this.type = type;
        _this.day = day;
        _this.solarTerm = solarTerm;
        _this.index = parseInt(data.substring(1, 3), 10);
        _this.name = LunarFestival.NAMES[_this.index];
        return _this;
    }
    LunarFestival.fromIndex = function (year, index) {
        if (index < 0 || index >= LunarFestival.NAMES.length) {
            return null;
        }
        var is = (index < 10 ? '0' : '') + index;
        var matcher = new RegExp("@".concat(is, "\\d+"), 'g').exec(LunarFestival.DATA);
        if (matcher) {
            var data = matcher[0];
            var type = data.charCodeAt(3) - 48;
            switch (type) {
                case 0:
                    return new LunarFestival(FestivalType.DAY, LunarDay.fromYmd(year, parseInt(data.substring(4, 6), 10), parseInt(data.substring(6), 10)), null, data);
                case 1:
                    var solarTerm = SolarTerm.fromIndex(year, parseInt(data.substring(4), 10));
                    return new LunarFestival(FestivalType.TERM, solarTerm.getSolarDay().getLunarDay(), solarTerm, data);
                case 2:
                    return new LunarFestival(FestivalType.EVE, LunarDay.fromYmd(year + 1, 1, 1).next(-1), null, data);
                default:
            }
        }
        return null;
    };
    LunarFestival.fromYmd = function (year, month, day) {
        var m = (month < 10 ? '0' : '') + month;
        var d = (day < 10 ? '0' : '') + day;
        var matcher = new RegExp("@\\d{2}0".concat(m).concat(d), 'g').exec(LunarFestival.DATA);
        if (matcher) {
            return new LunarFestival(FestivalType.DAY, LunarDay.fromYmd(year, month, day), null, matcher[0]);
        }
        var lunarDay = LunarDay.fromYmd(year, month, day);
        var solarDay = lunarDay.getSolarDay();
        var reg = new RegExp("@\\d{2}1\\d{2}", 'g');
        while (matcher = reg.exec(LunarFestival.DATA)) {
            var data = matcher[0];
            var term = SolarTerm.fromIndex(year, parseInt(data.substring(4), 10));
            var termDay = term.getSolarDay();
            if (termDay.getYear() === solarDay.getYear() && termDay.getMonth() === solarDay.getMonth() && termDay.getDay() === solarDay.getDay()) {
                return new LunarFestival(FestivalType.TERM, lunarDay, term, data);
            }
        }
        if (Math.abs(month) === 12 && day > 28) {
            matcher = new RegExp("@\\d{2}2", 'g').exec(LunarFestival.DATA);
            if (matcher) {
                if (lunarDay.next(1).getYear() != year) {
                    return new LunarFestival(FestivalType.EVE, lunarDay, null, matcher[0]);
                }
            }
        }
        return null;
    };
    LunarFestival.prototype.getName = function () {
        return this.name;
    };
    LunarFestival.prototype.getIndex = function () {
        return this.index;
    };
    LunarFestival.prototype.getDay = function () {
        return this.day;
    };
    LunarFestival.prototype.getType = function () {
        return this.type;
    };
    LunarFestival.prototype.getSolarTerm = function () {
        return this.solarTerm;
    };
    LunarFestival.prototype.toString = function () {
        return "".concat(this.day, " ").concat(this.name);
    };
    LunarFestival.prototype.next = function (n) {
        var size = LunarFestival.NAMES.length;
        var i = this.index + n;
        return LunarFestival.fromIndex(~~((this.day.getYear() * size + i) / size), this.indexOf(i, size));
    };
    LunarFestival.NAMES = ['春节', '元宵节', '龙头节', '上巳节', '清明节', '端午节', '七夕节', '中元节', '中秋节', '重阳节', '冬至节', '腊八节', '除夕'];
    LunarFestival.DATA = '@0000101@0100115@0200202@0300303@04107@0500505@0600707@0700715@0800815@0900909@10124@1101208@122';
    return LunarFestival;
}(AbstractTyme));
exports.LunarFestival = LunarFestival;
var EightChar = (function (_super) {
    __extends(EightChar, _super);
    function EightChar(year, month, day, hour) {
        var _this = _super.call(this) || this;
        _this.threePillars = new ThreePillars(year, month, day);
        _this.hour = hour instanceof SixtyCycle ? hour : SixtyCycle.fromName(hour);
        return _this;
    }
    EightChar.prototype.getYear = function () {
        return this.threePillars.getYear();
    };
    EightChar.prototype.getMonth = function () {
        return this.threePillars.getMonth();
    };
    EightChar.prototype.getDay = function () {
        return this.threePillars.getDay();
    };
    EightChar.prototype.getHour = function () {
        return this.hour;
    };
    EightChar.prototype.getFetalOrigin = function () {
        var m = this.getMonth();
        return SixtyCycle.fromIndex(m.getHeavenStem().next(1).getIndex() * 6 - m.getEarthBranch().next(3).getIndex() * 5);
    };
    EightChar.prototype.getFetalBreath = function () {
        var d = this.getDay();
        return SixtyCycle.fromIndex(d.getHeavenStem().next(5).getIndex() * 6 + d.getEarthBranch().getIndex() * 5 - 65);
    };
    EightChar.prototype.getOwnSign = function () {
        return SixtyCycle.fromIndex(this.getYear().getHeavenStem().getIndex() * 12 + (27 - this.getMonth().getEarthBranch().getIndex() - this.hour.getEarthBranch().getIndex()) % 12 + 2);
    };
    EightChar.prototype.getBodySign = function () {
        return SixtyCycle.fromIndex(this.getYear().getHeavenStem().getIndex() * 12 + (11 + this.getMonth().getEarthBranch().getIndex() + this.hour.getEarthBranch().getIndex()) % 12 + 2);
    };
    EightChar.prototype.getDuty = function () {
        return Duty.fromIndex(this.getDay().getEarthBranch().getIndex() - this.getMonth().getEarthBranch().getIndex());
    };
    EightChar.prototype.getName = function () {
        return "".concat(this.threePillars, " ").concat(this.hour);
    };
    EightChar.prototype.getSolarTimes = function (startYear, endYear) {
        var l = [];
        var year = this.getYear();
        var month = this.getMonth();
        var day = this.getDay();
        var m = month.getEarthBranch().next(-2).getIndex();
        if (!HeavenStem.fromIndex((year.getHeavenStem().getIndex() + 1) * 2 + m).equals(month.getHeavenStem())) {
            return l;
        }
        var y = year.next(-57).getIndex() + 1;
        m *= 2;
        var h = this.hour.getEarthBranch().getIndex() * 2;
        var hours = h == 0 ? [0, 23] : [h];
        var baseYear = startYear - 1;
        if (baseYear > y) {
            y += 60 * ~~(Math.ceil((baseYear - y) / 60.0));
        }
        while (y <= endYear) {
            var term = SolarTerm.fromIndex(y, 3);
            if (m > 0) {
                term = term.next(m);
            }
            var solarTime = term.getJulianDay().getSolarTime();
            if (solarTime.getYear() >= startYear) {
                var solarDay = solarTime.getSolarDay();
                var d = day.next(-solarDay.getLunarDay().getSixtyCycle().getIndex()).getIndex();
                if (d > 0) {
                    solarDay = solarDay.next(d);
                }
                for (var i = 0, j = hours.length; i < j; i++) {
                    var mi = 0;
                    var s = 0;
                    var hour = hours[i];
                    if (d == 0 && hour == solarTime.getHour()) {
                        mi = solarTime.getMinute();
                        s = solarTime.getSecond();
                    }
                    var time = SolarTime.fromYmdHms(solarDay.getYear(), solarDay.getMonth(), solarDay.getDay(), hour, mi, s);
                    if (d == 30) {
                        time = time.next(-3600);
                    }
                    if (time.getLunarHour().getEightChar().equals(this)) {
                        l.push(time);
                    }
                }
            }
            y += 60;
        }
        return l;
    };
    return EightChar;
}(AbstractCulture));
exports.EightChar = EightChar;
var ChildLimitInfo = (function () {
    function ChildLimitInfo(startTime, endTime, yearCount, monthCount, dayCount, hourCount, minuteCount) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.yearCount = yearCount;
        this.monthCount = monthCount;
        this.dayCount = dayCount;
        this.hourCount = hourCount;
        this.minuteCount = minuteCount;
    }
    ChildLimitInfo.prototype.getStartTime = function () {
        return this.startTime;
    };
    ChildLimitInfo.prototype.getEndTime = function () {
        return this.endTime;
    };
    ChildLimitInfo.prototype.getYearCount = function () {
        return this.yearCount;
    };
    ChildLimitInfo.prototype.getMonthCount = function () {
        return this.monthCount;
    };
    ChildLimitInfo.prototype.getDayCount = function () {
        return this.dayCount;
    };
    ChildLimitInfo.prototype.getHourCount = function () {
        return this.hourCount;
    };
    ChildLimitInfo.prototype.getMinuteCount = function () {
        return this.minuteCount;
    };
    return ChildLimitInfo;
}());
exports.ChildLimitInfo = ChildLimitInfo;
var AbstractChildLimitProvider = (function () {
    function AbstractChildLimitProvider() {
    }
    AbstractChildLimitProvider.prototype.next = function (birthTime, addYear, addMonth, addDay, addHour, addMinute, addSecond) {
        var d = birthTime.getDay() + addDay;
        var h = birthTime.getHour() + addHour;
        var mi = birthTime.getMinute() + addMinute;
        var s = birthTime.getSecond() + addSecond;
        mi += ~~(s / 60);
        s %= 60;
        h += ~~(mi / 60);
        mi %= 60;
        d += ~~(h / 24);
        h %= 24;
        var sm = SolarMonth.fromYm(birthTime.getYear() + addYear, birthTime.getMonth()).next(addMonth);
        var dc = sm.getDayCount();
        while (d > dc) {
            d -= dc;
            sm = sm.next(1);
            dc = sm.getDayCount();
        }
        return new ChildLimitInfo(birthTime, SolarTime.fromYmdHms(sm.getYear(), sm.getMonth(), d, h, mi, s), addYear, addMonth, addDay, addHour, addMinute);
    };
    return AbstractChildLimitProvider;
}());
exports.AbstractChildLimitProvider = AbstractChildLimitProvider;
var DefaultChildLimitProvider = (function (_super) {
    __extends(DefaultChildLimitProvider, _super);
    function DefaultChildLimitProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultChildLimitProvider.prototype.getInfo = function (birthTime, term) {
        var seconds = Math.abs(term.getJulianDay().getSolarTime().subtract(birthTime));
        var year = ~~(seconds / 259200);
        seconds %= 259200;
        var month = ~~(seconds / 21600);
        seconds %= 21600;
        var day = ~~(seconds / 720);
        seconds %= 720;
        var hour = ~~(seconds / 30);
        seconds %= 30;
        var minute = seconds * 2;
        return this.next(birthTime, year, month, day, hour, minute, 0);
    };
    return DefaultChildLimitProvider;
}(AbstractChildLimitProvider));
exports.DefaultChildLimitProvider = DefaultChildLimitProvider;
var China95ChildLimitProvider = (function (_super) {
    __extends(China95ChildLimitProvider, _super);
    function China95ChildLimitProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    China95ChildLimitProvider.prototype.getInfo = function (birthTime, term) {
        var minutes = ~~(Math.abs(term.getJulianDay().getSolarTime().subtract(birthTime)) / 60);
        var year = ~~(minutes / 4320);
        minutes %= 4320;
        var month = ~~(minutes / 360);
        minutes %= 360;
        var day = ~~(minutes / 12);
        return this.next(birthTime, year, month, day, 0, 0, 0);
    };
    return China95ChildLimitProvider;
}(AbstractChildLimitProvider));
exports.China95ChildLimitProvider = China95ChildLimitProvider;
var LunarSect1ChildLimitProvider = (function (_super) {
    __extends(LunarSect1ChildLimitProvider, _super);
    function LunarSect1ChildLimitProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LunarSect1ChildLimitProvider.prototype.getInfo = function (birthTime, term) {
        var termTime = term.getJulianDay().getSolarTime();
        var end = termTime;
        var start = birthTime;
        if (birthTime.isAfter(termTime)) {
            end = birthTime;
            start = termTime;
        }
        var endTimeZhiIndex = (end.getHour() == 23) ? 11 : end.getLunarHour().getIndexInDay();
        var startTimeZhiIndex = (start.getHour() == 23) ? 11 : start.getLunarHour().getIndexInDay();
        var hourDiff = endTimeZhiIndex - startTimeZhiIndex;
        var dayDiff = end.getSolarDay().subtract(start.getSolarDay());
        if (hourDiff < 0) {
            hourDiff += 12;
            dayDiff--;
        }
        var monthDiff = ~~(hourDiff * 10 / 30);
        var month = dayDiff * 4 + monthDiff;
        var day = hourDiff * 10 - monthDiff * 30;
        var year = ~~(month / 12);
        month = month - year * 12;
        return this.next(birthTime, year, month, day, 0, 0, 0);
    };
    return LunarSect1ChildLimitProvider;
}(AbstractChildLimitProvider));
exports.LunarSect1ChildLimitProvider = LunarSect1ChildLimitProvider;
var LunarSect2ChildLimitProvider = (function (_super) {
    __extends(LunarSect2ChildLimitProvider, _super);
    function LunarSect2ChildLimitProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LunarSect2ChildLimitProvider.prototype.getInfo = function (birthTime, term) {
        var minutes = ~~(Math.abs(term.getJulianDay().getSolarTime().subtract(birthTime)) / 60);
        var year = ~~(minutes / 4320);
        minutes %= 4320;
        var month = ~~(minutes / 360);
        minutes %= 360;
        var day = ~~(minutes / 12);
        minutes %= 12;
        var hour = minutes * 2;
        return this.next(birthTime, year, month, day, hour, 0, 0);
    };
    return LunarSect2ChildLimitProvider;
}(AbstractChildLimitProvider));
exports.LunarSect2ChildLimitProvider = LunarSect2ChildLimitProvider;
var ChildLimit = (function () {
    function ChildLimit(birthTime, gender) {
        this.gender = gender;
        this.eightChar = birthTime.getLunarHour().getEightChar();
        var yang = YinYang.YANG == this.eightChar.getYear().getHeavenStem().getYinYang();
        var man = Gender.MAN == gender;
        this.forward = (yang && man) || (!yang && !man);
        var term = birthTime.getTerm();
        if (!term.isJie()) {
            term = term.next(-1);
        }
        if (this.forward) {
            term = term.next(2);
        }
        this.info = ChildLimit.provider.getInfo(birthTime, term);
    }
    ChildLimit.fromSolarTime = function (birthTime, gender) {
        return new ChildLimit(birthTime, gender);
    };
    ChildLimit.prototype.getEightChar = function () {
        return this.eightChar;
    };
    ChildLimit.prototype.getGender = function () {
        return this.gender;
    };
    ChildLimit.prototype.getYearCount = function () {
        return this.info.getYearCount();
    };
    ChildLimit.prototype.getMonthCount = function () {
        return this.info.getMonthCount();
    };
    ChildLimit.prototype.getDayCount = function () {
        return this.info.getDayCount();
    };
    ChildLimit.prototype.getHourCount = function () {
        return this.info.getHourCount();
    };
    ChildLimit.prototype.getMinuteCount = function () {
        return this.info.getMinuteCount();
    };
    ChildLimit.prototype.getStartTime = function () {
        return this.info.getStartTime();
    };
    ChildLimit.prototype.getEndTime = function () {
        return this.info.getEndTime();
    };
    ChildLimit.prototype.isForward = function () {
        return this.forward;
    };
    ChildLimit.prototype.getStartDecadeFortune = function () {
        return DecadeFortune.fromChildLimit(this, 0);
    };
    ChildLimit.prototype.getDecadeFortune = function () {
        return DecadeFortune.fromChildLimit(this, -1);
    };
    ChildLimit.prototype.getStartFortune = function () {
        return Fortune.fromChildLimit(this, 0);
    };
    ChildLimit.prototype.getEndLunarYear = function () {
        return LunarYear.fromYear(this.getStartTime().getLunarHour().getYear() + this.getEndTime().getYear() - this.getStartTime().getYear());
    };
    ChildLimit.prototype.getStartSixtyCycleYear = function () {
        return SixtyCycleYear.fromYear(this.getStartTime().getYear());
    };
    ChildLimit.prototype.getEndSixtyCycleYear = function () {
        return SixtyCycleYear.fromYear(this.getEndTime().getYear());
    };
    ChildLimit.prototype.getStartAge = function () {
        return 1;
    };
    ChildLimit.prototype.getEndAge = function () {
        var n = this.getEndSixtyCycleYear().getYear() - this.getStartSixtyCycleYear().getYear();
        return Math.max(n, 1);
    };
    ChildLimit.provider = new DefaultChildLimitProvider();
    return ChildLimit;
}());
exports.ChildLimit = ChildLimit;
var DecadeFortune = (function (_super) {
    __extends(DecadeFortune, _super);
    function DecadeFortune(childLimit, index) {
        var _this = _super.call(this) || this;
        _this.childLimit = childLimit;
        _this.index = index;
        return _this;
    }
    DecadeFortune.fromChildLimit = function (childLimit, index) {
        return new DecadeFortune(childLimit, index);
    };
    DecadeFortune.prototype.getStartAge = function () {
        return this.childLimit.getEndSixtyCycleYear().getYear() - this.childLimit.getStartSixtyCycleYear().getYear() + 1 + this.index * 10;
    };
    DecadeFortune.prototype.getEndAge = function () {
        return this.getStartAge() + 9;
    };
    DecadeFortune.prototype.getStartLunarYear = function () {
        return this.childLimit.getEndLunarYear().next(this.index * 10);
    };
    DecadeFortune.prototype.getEndLunarYear = function () {
        return this.getStartLunarYear().next(9);
    };
    DecadeFortune.prototype.getStartSixtyCycleYear = function () {
        return this.childLimit.getEndSixtyCycleYear().next(this.index * 10);
    };
    DecadeFortune.prototype.getEndSixtyCycleYear = function () {
        return this.getStartSixtyCycleYear().next(9);
    };
    DecadeFortune.prototype.getSixtyCycle = function () {
        return this.childLimit.getEightChar().getMonth().next(this.childLimit.isForward() ? this.index + 1 : -this.index - 1);
    };
    DecadeFortune.prototype.getName = function () {
        return this.getSixtyCycle().getName();
    };
    DecadeFortune.prototype.next = function (n) {
        return DecadeFortune.fromChildLimit(this.childLimit, this.index + n);
    };
    DecadeFortune.prototype.getStartFortune = function () {
        return Fortune.fromChildLimit(this.childLimit, this.index * 10);
    };
    return DecadeFortune;
}(AbstractTyme));
exports.DecadeFortune = DecadeFortune;
var Fortune = (function (_super) {
    __extends(Fortune, _super);
    function Fortune(childLimit, index) {
        var _this = _super.call(this) || this;
        _this.childLimit = childLimit;
        _this.index = index;
        return _this;
    }
    Fortune.fromChildLimit = function (childLimit, index) {
        return new Fortune(childLimit, index);
    };
    Fortune.prototype.getAge = function () {
        return this.childLimit.getEndSixtyCycleYear().getYear() - this.childLimit.getStartSixtyCycleYear().getYear() + 1 + this.index;
    };
    Fortune.prototype.getLunarYear = function () {
        return this.childLimit.getEndLunarYear().next(this.index);
    };
    Fortune.prototype.getSixtyCycleYear = function () {
        return this.childLimit.getEndSixtyCycleYear().next(this.index);
    };
    Fortune.prototype.getSixtyCycle = function () {
        var n = this.getAge();
        return this.childLimit.getEightChar().getHour().next(this.childLimit.isForward() ? n : -n);
    };
    Fortune.prototype.getName = function () {
        return this.getSixtyCycle().getName();
    };
    Fortune.prototype.next = function (n) {
        return Fortune.fromChildLimit(this.childLimit, this.index + n);
    };
    return Fortune;
}(AbstractTyme));
exports.Fortune = Fortune;
var KitchenGodSteed = (function (_super) {
    __extends(KitchenGodSteed, _super);
    function KitchenGodSteed(lunarYear) {
        var _this = _super.call(this) || this;
        _this.firstDaySixtyCycle = LunarDay.fromYmd(lunarYear, 1, 1).getSixtyCycle();
        return _this;
    }
    KitchenGodSteed.fromLunarYear = function (lunarYear) {
        return new KitchenGodSteed(lunarYear);
    };
    KitchenGodSteed.prototype.byHeavenStem = function (n) {
        return KitchenGodSteed.NUMBERS[this.firstDaySixtyCycle.getHeavenStem().stepsTo(n)];
    };
    KitchenGodSteed.prototype.byEarthBranch = function (n) {
        return KitchenGodSteed.NUMBERS[this.firstDaySixtyCycle.getEarthBranch().stepsTo(n)];
    };
    KitchenGodSteed.prototype.getMouse = function () {
        return "".concat(this.byEarthBranch(0), "\u9F20\u5077\u7CAE");
    };
    KitchenGodSteed.prototype.getGrass = function () {
        return "\u8349\u5B50".concat(this.byEarthBranch(0), "\u5206");
    };
    KitchenGodSteed.prototype.getCattle = function () {
        return "".concat(this.byEarthBranch(1), "\u725B\u8015\u7530");
    };
    KitchenGodSteed.prototype.getFlower = function () {
        return "\u82B1\u6536".concat(this.byEarthBranch(3), "\u5206");
    };
    KitchenGodSteed.prototype.getDragon = function () {
        return "".concat(this.byEarthBranch(4), "\u9F99\u6CBB\u6C34");
    };
    KitchenGodSteed.prototype.getHorse = function () {
        return "".concat(this.byEarthBranch(6), "\u9A6C\u9A6E\u8C37");
    };
    KitchenGodSteed.prototype.getChicken = function () {
        return "".concat(this.byEarthBranch(9), "\u9E21\u62A2\u7C73");
    };
    KitchenGodSteed.prototype.getSilkworm = function () {
        return "".concat(this.byEarthBranch(9), "\u59D1\u770B\u8695");
    };
    KitchenGodSteed.prototype.getPig = function () {
        return "".concat(this.byEarthBranch(11), "\u5C60\u5171\u732A");
    };
    KitchenGodSteed.prototype.getField = function () {
        return "\u7532\u7530".concat(this.byHeavenStem(0), "\u5206");
    };
    KitchenGodSteed.prototype.getCake = function () {
        return "".concat(this.byHeavenStem(2), "\u4EBA\u5206\u997C");
    };
    KitchenGodSteed.prototype.getGold = function () {
        return "".concat(this.byHeavenStem(7), "\u65E5\u5F97\u91D1");
    };
    KitchenGodSteed.prototype.getPeopleCakes = function () {
        return "".concat(this.byEarthBranch(2), "\u4EBA").concat(this.byHeavenStem(2), "\u4E19");
    };
    KitchenGodSteed.prototype.getPeopleHoes = function () {
        return "".concat(this.byEarthBranch(2), "\u4EBA").concat(this.byHeavenStem(3), "\u9504");
    };
    KitchenGodSteed.prototype.getName = function () {
        return '灶马头';
    };
    KitchenGodSteed.NUMBERS = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
    return KitchenGodSteed;
}(AbstractCulture));
exports.KitchenGodSteed = KitchenGodSteed;
var RabByungElement = (function (_super) {
    __extends(RabByungElement, _super);
    function RabByungElement(indexOrName) {
        return _super.call(this, (typeof indexOrName === 'number') ? indexOrName : (indexOrName + '').replace('铁', '金')) || this;
    }
    RabByungElement.fromIndex = function (index) {
        return new RabByungElement(RabByungElement.numeric(index, 'rab-byung element index'));
    };
    RabByungElement.fromName = function (name) {
        return new RabByungElement(name);
    };
    RabByungElement.prototype.next = function (n) {
        return RabByungElement.fromIndex(this.nextIndex(n));
    };
    RabByungElement.prototype.getReinforce = function () {
        return this.next(1);
    };
    RabByungElement.prototype.getRestrain = function () {
        return this.next(2);
    };
    RabByungElement.prototype.getReinforced = function () {
        return this.next(-1);
    };
    RabByungElement.prototype.getRestrained = function () {
        return this.next(-2);
    };
    RabByungElement.prototype.getName = function () {
        return _super.prototype.getName.call(this).replace('金', '铁');
    };
    return RabByungElement;
}(Element));
exports.RabByungElement = RabByungElement;
var RabByungYear = (function (_super) {
    __extends(RabByungYear, _super);
    function RabByungYear(rabByungIndex, elementIndex, zodiacIndex) {
        var _this = _super.call(this) || this;
        var index = RabByungYear.numeric(rabByungIndex, 'rab-byung index');
        if (index < 0 || index > 150) {
            throw new Error("illegal rab-byung index: ".concat(index));
        }
        var element = RabByungYear.numeric(elementIndex, 'element index');
        if (element < 0 || element >= RabByungElement.NAMES.length) {
            throw new Error("illegal element index: ".concat(element));
        }
        var zodiac = RabByungYear.numeric(zodiacIndex, 'zodiac index');
        if (zodiac < 0 || zodiac >= Zodiac.NAMES.length) {
            throw new Error("illegal zodiac index: ".concat(zodiac));
        }
        _this.rabByungIndex = index;
        _this.elementIndex = element;
        _this.zodiacIndex = zodiac;
        return _this;
    }
    RabByungYear.validate = function (year) {
        if (year < 1027 || year > 9999) {
            throw new Error("illegal rab-byung year: ".concat(year));
        }
    };
    RabByungYear.fromYear = function (year) {
        var y = RabByungYear.numeric(year, 'rab-byung year');
        RabByungYear.validate(y);
        return RabByungYear.fromSixtyCycle(Math.floor((y - 1024) / 60), SixtyCycle.fromIndex(y - 4));
    };
    RabByungYear.fromSixtyCycle = function (rabByungIndex, sixtyCycle) {
        return new RabByungYear(rabByungIndex, sixtyCycle.getHeavenStem().getElement().getIndex(), sixtyCycle.getEarthBranch().getZodiac().getIndex());
    };
    RabByungYear.fromElementZodiac = function (rabByungIndex, element, zodiac) {
        return new RabByungYear(rabByungIndex, element.getIndex(), zodiac.getIndex());
    };
    RabByungYear.prototype.getRabByungIndex = function () {
        return this.rabByungIndex;
    };
    RabByungYear.prototype.getSixtyCycle = function () {
        return SixtyCycle.fromIndex(6 * (this.elementIndex * 2 + this.zodiacIndex % 2) - 5 * this.zodiacIndex);
    };
    RabByungYear.prototype.getZodiac = function () {
        return Zodiac.fromIndex(this.zodiacIndex);
    };
    RabByungYear.prototype.getElement = function () {
        return RabByungElement.fromIndex(this.elementIndex);
    };
    RabByungYear.prototype.getName = function () {
        var digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
        var units = ['', '十', '百'];
        var n = this.rabByungIndex + 1;
        var s = '';
        var pos = 0;
        while (n > 0) {
            var digit = n % 10;
            if (digit > 0) {
                s = digits[digit] + units[pos] + s;
            }
            else if (s.length > 0) {
                s = digits[digit] + s;
            }
            n = Math.floor(n / 10);
            pos++;
        }
        if (s.indexOf('一十') === 0) {
            s = s.substring(1);
        }
        return "\u7B2C".concat(s, "\u9976\u8FE5").concat(this.getElement()).concat(this.getZodiac(), "\u5E74");
    };
    RabByungYear.prototype.next = function (n) {
        return RabByungYear.fromYear(this.getYear() + n);
    };
    RabByungYear.prototype.getYear = function () {
        return 1024 + this.rabByungIndex * 60 + this.getSixtyCycle().getIndex();
    };
    RabByungYear.prototype.getLeapMonth = function () {
        var y = 1;
        var m = 4;
        var t = 1;
        var currentYear = this.getYear();
        while (y < currentYear) {
            var i = m + 31 + t;
            y += 2;
            m = i - 23;
            if (i > 35) {
                y += 1;
                m -= 12;
            }
            t = 1 - t;
        }
        return y == currentYear ? m : 0;
    };
    RabByungYear.prototype.getSolarYear = function () {
        return SolarYear.fromYear(this.getYear());
    };
    RabByungYear.prototype.getFirstMonth = function () {
        return RabByungMonth.fromYm(this.getYear(), 1);
    };
    RabByungYear.prototype.getMonthCount = function () {
        return this.getLeapMonth() < 1 ? 12 : 13;
    };
    RabByungYear.prototype.getMonths = function () {
        var l = [];
        var y = this.getYear();
        var leapMonth = this.getLeapMonth();
        for (var i = 1; i < 13; i++) {
            l.push(RabByungMonth.fromYm(y, i));
            if (i === leapMonth) {
                l.push(RabByungMonth.fromYm(y, -i));
            }
        }
        return l;
    };
    return RabByungYear;
}(AbstractTyme));
exports.RabByungYear = RabByungYear;
var RabByungMonth = (function (_super) {
    __extends(RabByungMonth, _super);
    function RabByungMonth(year, month) {
        var _this = this;
        RabByungMonth.init();
        var y = RabByungMonth.numeric(year, 'rab-byung year');
        var m = RabByungMonth.numeric(month, 'rab-byung month');
        RabByungMonth.validate(y, m);
        _this = _super.call(this, y, Math.abs(m)) || this;
        _this.leap = m < 0;
        return _this;
    }
    RabByungMonth.init = function () {
        if (RabByungMonth.isInit) {
            return;
        }
        var y = 1950;
        var m = 11;
        var years = '2c>,182[>1:2TA4ZI=n1E2Bk1J2Ff3Mk503Oc62g=,172^>1:2XA1>2UE2Bo1I2Fj3Lo62Fb3Mf5,03N^72b=1:2]A1>2ZF1B2VI2Em1K2Fe,2Lh1R3Na603P\\:172Y>1;2UB2=m2Dq1J2Eh,2Kl1Q3Me603Pa:172^>1;2YA2=p1C2UI,2Dk2Jp3QEc3Mi603Pf:3L[72b?1:2]A1<2UB2XH,2Cn1I2Ei1L2Ie1Q3Na703Q\\:2`@1;2XA,4\\H;m1B2TI2Em1L2Ij1Q3Nf603Q`903QW:,2[@1;2TB2XI1E4TMAh2Io3RFe3Mj603Pc803Q[;,2^?1;2WA2>q1E2Bm1I2Fi1M2Hc3Of70,3P^82a>1:2[A1>2WE1B2TI2Fm1L2Hf3Ni6,03Oa703PZ:3`A62V>4]F;q1B4YJ>l2Eq1L2Gi3Ml5,03Nd603Q_9172[>1;2XB2>p1E2VK2Fl,1K2Fc3Mh603Pc9172`>1;2\\B1>2UD2=j2En,1J2Fg3Mm62Ib3Pj;3M_703R[:2`B1=2YB2=n,1C2TI2Fk1L2Ig1P3Nd703Q_:152X<2[A,2<q1B2WI2Ep1L2Il1Q3Ni703Qc9152[:2^@,1;2WB2>o1E2Bk1I2Fh1M2Ib3Pf803R^9,2a?1;2ZA1>2UE2Bp1I2Fl1M2If3Oi80,3Pa803QY:2^A1>2ZE1B4WJ>j2Fp1M2Hi1N2H`,3Od703Q]:162Y>1;2VB2?o1E4VM@h2Gl1M,2Hd3Ng603Qa9172^>1;2ZB1?2UE2@l2Fo1L,2Gg3Mk62H`3Pf:172c?3QY;2_B1>2YD2?o1E,2TK2Fj1M2Ie1P3Mb703R^;172X=2\\C1>,2TD2WJ2Fn1L2Ij1P3Ng703Rb:162[<2_B1=,2VC2>m1E4TMAh2Io3QFe3Nl82Ja3Qf:152_;0,3RU<2ZB1>2TE2Bn1I2Fj1M2Je3Pk:2K^3Ra:,03RY;2]A1>2XE1B2TI2Fo1M2Ii1P2Ka3Qd8,03R]:3bB62W>4]F:q1B2?n1F4VNAh2Il1O2Jd,3Pg803Q`:162\\=1;2XB1?2TF2Bl2Ho1N,2Ig3Nk703Qd9162`>1;2]B1?2XE2Ao1G2TM,2Hj1M2Id1P3M_603R\\;172W>2\\E1@2TE,2?i2Gm1M2Ih1P3Md603Ra;172[=28q1?2WD,2?m2Fq1M2Il1P3Mi72I^3Re:162_<172W=,2ZC2?q1E2Bk1I2Fh1M2Jd1Q3M^52b;16,2Y<2]B1>2VE2Bp1I2Fm1M2Jh1Q2Lb3Re:15,2\\;3aC62U>2[E1B4WJ>k1F4TNBg2Jl1P2Le3Qh9,03R`:172Z=1:2VB2?q1F2Bk2Ip1P2Jg,1P2J_3Qc:162^=1;2[B1?2WF2Bo1H2Bg2Ij,1O2Jc3Qg:3L\\62c>3QY;3aC72V?2[F1A2TG2Bj,2Hm1N2Jg1P3Mb603R_;182Z>1:2T@2WF2Am,2Gp1M2Ik1P3Mg603Rc;172^>192W?2ZE,2@p1F2Bj2Io3QEe1M2Jb1Q3M]72b=182Z>,2]D1?2VE2Bn1I2Fk1M2Jg1Q3Ma62e<172]=,172U>2YE1B2UI2Fp1N2Jk1Q3Me503M\\6,2`<172Y>3_F:2TB2?n1F2Cj2Jo3QDc2Lh1R,3L_52c;172]=1:2XB1?2UF2Cn1I2Eg2Kk1P,2Lb3Rf;162a=1:2]B1?2ZF1B2TH2Dj2Jm,1O2Kf1Q3M`603Q\\;182Y?2;q1A2WH2Cm,2Hq1O2Ji1P3Me603Qa;182]>1:2WA2[G2Ap,1G2Bi2Im1P3Mi72I_3Qf;3N\\72Eh1:2Z?29o,1@2UF2Bm1I2Fh1M2Je1Q3N`72f?3PY92]>19,2U?2YF2Bq1I2Fm1M2Jj1Q3Nd603O]72`=,182X?4]F:o1B4WI=k1F4UNCi2Jn3REc3Mh503N`6,2c<182\\>1:2VA2?q1F2Cm1J2Fg2Lk1R3Mc5,2f<172`=1:2[A1?2XF2Cq1I2Ek2Kn1R,2Lf1R3N_62d>3PZ:3aC72W?2;p1B2WI2Dn1J,2De2Ki1Q3Mc603Q_:182\\?1;2VB2<m2Cq1I,2Dh2Jl1P3Mg603Qd;182`?1;2ZA2<p1B,2UH2Cl1I2Ef3Mm82Jc1Q3N_703QY:2]@1;2UA,2XG2Bp1I2Fk1M2Jh1Q3Nc703Q]92`?1:,2X@4\\G:n1B2VI2Fp1M2Jl1R3Ng603P`82d>,192[?1;2UA2>o1F2Ck1J2Gg3Mk603Oc70,3OZ82_>1:2YA1?2VF2Cp1J2Fj1M2Gc3Nf5,03O^72b>1:2^B1?4[G;n1C2VJ2Fn1L2Gf,3Mi503Nb603Q]:172Y?1<2UB2>m2Eq1K2Fi,2Kl1R3Mf603Qa:182^?1;2YB2>q1D2VJ,2Dl1J2Fe3Mj603Qg;3N]72c@3QX;2]A1=2VB,2YI2Co1J2Fi1M2Je1Q3Nb703R]:2aA1<2XA,2<n1C2UI2Fn1M2Jj1Q3Nf703Q`903RX:,2[@1<2TB4YJ>l1E4UNBi1J2Ge3Mk703Pc803Q[9,2^?1;2XB2>q1E2Cn1J2Gj1M2Ic3Of70,3P^82b?1;2\\A1>2XF1C2UJ2Fm1M2Hf3Ni6,03Oa703Q[:3aB72W>1<2TC2?m2Fq1L2Gi3Ml5,03Ne703Q_:172\\>1<2XB2?q1E2WL2Fl,1L2Gd3Ni603Qd:172a?1;2\\B1>2VD2>k,2Eo1K2Gh1M2Ic1Q3N`703R\\;3aC62U=2YC2>o,1D2TJ2Fl1M2Jh1Q3Ne703R`:162Y<2\\B,1=2TC4XJ=j2Fp1M2Jm3QFc3Ni803Qc:152\\;2_A,1<2WB2>o1E2Bl1J2Gh1N2Jc3Qg903R^:,2b@1;2[B1>2VE2Cq1J2Gl1N2Jf3Pj80,3Qa803RZ;2_B1>4[F:o1C4XK?k2Fp1M2Ii1O2Ia,3Pd703R^:172Y>1<2VC2?p1F2Ai2Hl1M,2Hd3Oh703Qb:172^>1<2[C1?2UE2Al2Go,1L2Hg3Nl82Ia3Qg;3M]72e@3RZ;3`C72T>2YD2@o1E,2TK2Gk1M2Jf1Q3Nb703R^;172Y=2\\D1>,2TD4XK>i2Fo1M2Jj1Q3Ng703Rb;172\\<2`C1=,2WC2?n1F4VNBi1J2Gf1N2Kb3Rf:162_;15,2V<2ZB1?2TE2Bn1J2Gk1N2Kf1Q2L^3Rb:,152Z;2^B1>2YE1B2UJ2Go1N2Ji1P2Kb3Qd9,03R];172X>1;2TC2@n1G2Bi2Im1O2Jd,3Ph803Ra:172\\>1;2YC1@2UF2Bl2Hp1N,2Ig3Ol82J`3Qe:172a>1;4^C7q1?2XF2Ao1G2UN,2Hj1N2Jd1Q3N`703R];182X>2]F1@2TF,2@j2Gn1M2Jq1Q3Ne703Ra;172\\>192T?,2WE2@m1F4TMAf2Im3QEc3Nj82J`3Rf;172_=182W>,2ZD2?q1F2Bl1I2Gj1N2Ke1R3M_62b<17,2Z=2]C1?2WE2Bq1I2Gn1N2Ki1Q3Mb52e;16,2]<172V>4[F:o1B4XK?l1G4UOCh2Jl1Q2Le3Rh:,152`;172Z>1;2WB2@q1G2Cl2Ip1P2K_'.split(',', -1);
        for (var x = 0, z = years.length; x < z; x++) {
            var ys = years[x];
            while (ys) {
                var len = ys.charCodeAt(0) - 48;
                var data = [];
                for (var i = 0; i < len; i++) {
                    data.push(ys.charCodeAt(i + 1) - 83);
                }
                RabByungMonth.DAYS[(y * 13 + m) + ''] = data;
                m++;
                ys = ys.substring(len + 1);
            }
            y++;
            m = 0;
        }
        RabByungMonth.isInit = true;
    };
    RabByungMonth.validate = function (year, month) {
        if (month == 0 || month > 12 || month < -12) {
            throw new Error("illegal rab-byung month: ".concat(month));
        }
        if (year < 1950 || year > 2050) {
            throw new Error("rab-byung year ".concat(year, " must between 1950 and 2050"));
        }
        var leap = month < 0;
        var m = Math.abs(month);
        if (year == 1950 && m < 12) {
            throw new Error("month ".concat(month, " must be 12 in rab-byung year ").concat(year));
        }
        if (leap && m != RabByungYear.fromYear(year).getLeapMonth()) {
            throw new Error("illegal leap month ".concat(m, " in rab-byung year ").concat(year));
        }
    };
    RabByungMonth.fromYm = function (year, month) {
        return new RabByungMonth(year, month);
    };
    RabByungMonth.prototype.getRabByungYear = function () {
        return RabByungYear.fromYear(this.year);
    };
    RabByungMonth.prototype.getMonthWithLeap = function () {
        return this.leap ? -this.month : this.month;
    };
    RabByungMonth.prototype.getDayCount = function () {
        return 30 + this.getLeapDays().length - this.getMissDays().length;
    };
    RabByungMonth.prototype.getIndexInYear = function () {
        var index = this.month - 1;
        if (this.leap) {
            index += 1;
        }
        else {
            var leapMonth = this.getRabByungYear().getLeapMonth();
            if (leapMonth > 0 && this.month > leapMonth) {
                index += 1;
            }
        }
        return index;
    };
    RabByungMonth.prototype.isLeap = function () {
        return this.leap;
    };
    RabByungMonth.prototype.getName = function () {
        return (this.leap ? '闰' : '') + RabByungMonth.NAMES[this.month - 1];
    };
    RabByungMonth.prototype.getAlias = function () {
        return (this.leap ? '闰' : '') + RabByungMonth.ALIAS[this.month - 1];
    };
    RabByungMonth.prototype.toString = function () {
        return this.getRabByungYear().toString() + this.getName();
    };
    RabByungMonth.prototype.next = function (n) {
        if (n === 0) {
            return RabByungMonth.fromYm(this.getYear(), this.getMonthWithLeap());
        }
        var m = this.getIndexInYear() + 1 + n;
        var y = this.getRabByungYear();
        if (n > 0) {
            var monthCount = y.getMonthCount();
            while (m > monthCount) {
                m -= monthCount;
                y = y.next(1);
                monthCount = y.getMonthCount();
            }
        }
        else {
            while (m <= 0) {
                y = y.next(-1);
                m += y.getMonthCount();
            }
        }
        var leap = false;
        var leapMonth = y.getLeapMonth();
        if (leapMonth > 0) {
            if (m === leapMonth + 1) {
                leap = true;
            }
            if (m > leapMonth) {
                m--;
            }
        }
        return RabByungMonth.fromYm(y.getYear(), leap ? -m : m);
    };
    RabByungMonth.prototype.getSpecialDays = function () {
        var days = RabByungMonth.DAYS[(this.getYear() * 13 + this.getIndexInYear()) + ''];
        return days ? days : [];
    };
    RabByungMonth.prototype.getLeapDays = function () {
        var l = [];
        var days = this.getSpecialDays();
        for (var i = 0, j = days.length; i < j; i++) {
            var d = days[i];
            if (d > 0) {
                l.push(d);
            }
        }
        return l;
    };
    RabByungMonth.prototype.getMissDays = function () {
        var l = [];
        var days = this.getSpecialDays();
        for (var i = 0, j = days.length; i < j; i++) {
            var d = days[i];
            if (d < 0) {
                l.push(-d);
            }
        }
        return l;
    };
    RabByungMonth.prototype.getDays = function () {
        var y = this.getYear();
        var m = this.getMonthWithLeap();
        var l = [];
        var missDays = this.getMissDays();
        var leapDays = this.getLeapDays();
        for (var i = 1; i < 31; i++) {
            if (missDays.includes(i)) {
                continue;
            }
            l.push(RabByungDay.fromYmd(y, m, i));
            if (leapDays.includes(i)) {
                l.push(RabByungDay.fromYmd(y, m, -i));
            }
        }
        return l;
    };
    RabByungMonth.prototype.getFirstDay = function () {
        return RabByungDay.fromYmd(this.year, this.getMonthWithLeap(), 1);
    };
    RabByungMonth.DAYS = {};
    RabByungMonth.NAMES = ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    RabByungMonth.ALIAS = ['神变月', '苦行月', '具香月', '萨嘎月', '作净月', '明净月', '具醉月', '具贤月', '天降月', '持众月', '庄严月', '满意月'];
    RabByungMonth.isInit = false;
    return RabByungMonth;
}(MonthUnit));
exports.RabByungMonth = RabByungMonth;
var RabByungDay = (function (_super) {
    __extends(RabByungDay, _super);
    function RabByungDay(year, month, day) {
        var _this = this;
        var y = RabByungDay.numeric(year, 'rab-byung year');
        var m = RabByungDay.numeric(month, 'rab-byung month');
        var d = RabByungDay.numeric(day, 'rab-byung day');
        RabByungDay.validate(y, m, d);
        _this = _super.call(this, y, m, Math.abs(d)) || this;
        _this.leap = d < 0;
        return _this;
    }
    RabByungDay.validate = function (year, month, day) {
        if (day == 0 || day < -30 || day > 30) {
            throw new Error("illegal day ".concat(day, " in ").concat(month));
        }
        var m = RabByungMonth.fromYm(year, month);
        var leap = day < 0;
        var d = Math.abs(day);
        if (leap && !m.getLeapDays().includes(d)) {
            throw new Error("illegal leap day ".concat(d, " in ").concat(m));
        }
        if (!leap && m.getMissDays().includes(d)) {
            throw new Error("illegal day ".concat(d, " in ").concat(m));
        }
    };
    RabByungDay.fromYmd = function (year, month, day) {
        return new RabByungDay(year, month, day);
    };
    RabByungDay.fromSolarDay = function (solarDay) {
        var days = solarDay.subtract(SolarDay.fromYmd(1951, 1, 8));
        var m = RabByungMonth.fromYm(1950, 12);
        var count = m.getDayCount();
        while (days >= count) {
            days -= count;
            m = m.next(1);
            count = m.getDayCount();
        }
        var day = days + 1;
        var specialDays = m.getSpecialDays();
        for (var i = 0, j = specialDays.length; i < j; i++) {
            var d = specialDays[i];
            if (d < 0) {
                if (day >= -d) {
                    day++;
                }
            }
            else if (d > 0) {
                if (day == d + 1) {
                    day = -d;
                    break;
                }
                else if (day > d + 1) {
                    day--;
                }
            }
        }
        return new RabByungDay(m.getYear(), m.getMonthWithLeap(), day);
    };
    RabByungDay.prototype.getRabByungMonth = function () {
        return RabByungMonth.fromYm(this.year, this.month);
    };
    RabByungDay.prototype.isLeap = function () {
        return this.leap;
    };
    RabByungDay.prototype.getDayWithLeap = function () {
        return this.leap ? -this.day : this.day;
    };
    RabByungDay.prototype.getName = function () {
        return (this.leap ? '闰' : '') + RabByungDay.NAMES[this.day - 1];
    };
    RabByungDay.prototype.toString = function () {
        return this.getRabByungMonth().toString() + this.getName();
    };
    RabByungDay.prototype.next = function (n) {
        return this.getSolarDay().next(n).getRabByungDay();
    };
    RabByungDay.prototype.subtract = function (target) {
        return this.getSolarDay().subtract(target.getSolarDay());
    };
    RabByungDay.prototype.getSolarDay = function () {
        var m = RabByungMonth.fromYm(1950, 12);
        var cm = this.getRabByungMonth();
        var n = 0;
        while (!m.equals(cm)) {
            n += m.getDayCount();
            m = m.next(1);
        }
        var t = this.day;
        var specialDays = m.getSpecialDays();
        for (var i = 0, j = specialDays.length; i < j; i++) {
            var d = specialDays[i];
            if (d < 0) {
                if (t > -d) {
                    t--;
                }
            }
            else if (d > 0) {
                if (t > d) {
                    t++;
                }
            }
        }
        if (this.leap) {
            t++;
        }
        return SolarDay.fromYmd(1951, 1, 7).next(n + t);
    };
    RabByungDay.NAMES = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];
    return RabByungDay;
}(DayUnit));
exports.RabByungDay = RabByungDay;
var Event = (function (_super) {
    __extends(Event, _super);
    function Event(name, data) {
        var _this = this;
        Event.validate(data);
        _this = _super.call(this) || this;
        _this.name = name;
        _this.data = data;
        return _this;
    }
    Event.validate = function (data) {
        if (data.length != 9) {
            throw new Error("illegal event data: ".concat(data));
        }
    };
    Event.builder = function () {
        return new EventBuilder();
    };
    Event.fromName = function (name) {
        var matcher = new RegExp(EventManager.REGEX + "(".concat(name, ")"), 'g').exec(EventManager.DATA);
        return matcher ? new Event(name, matcher[1]) : null;
    };
    Event.prototype.getType = function () {
        switch (EventManager.CHARS.indexOf(this.data.charAt(1))) {
            case 1: return EventType.SOLAR_WEEK;
            case 2: return EventType.LUNAR_DAY;
            case 3: return EventType.TERM_DAY;
            case 4: return EventType.TERM_HS;
            case 5: return EventType.TERM_EB;
            default: return EventType.SOLAR_DAY;
        }
    };
    Event.prototype.getName = function () {
        return this.name;
    };
    Event.prototype.getData = function () {
        return this.data;
    };
    Event.prototype.getStartYear = function () {
        var n = 0;
        var size = EventManager.CHARS.length;
        for (var i = 0; i < 3; i++) {
            n = n * size + EventManager.CHARS.indexOf(this.data.charAt(6 + i));
        }
        return n;
    };
    Event.fromSolarDay = function (d) {
        var l = [];
        var events = Event.all();
        for (var i = 0, j = events.length; i < j; i++) {
            var e = events[i];
            var day = e.getSolarDay(d.getYear());
            if (day && d.equals(day)) {
                l.push(e);
            }
        }
        return l;
    };
    Event.all = function () {
        var l = [];
        var reg = new RegExp(EventManager.REGEX + "(.[^@]+)", 'g');
        var matcher;
        while (matcher = reg.exec(EventManager.DATA)) {
            l.push(new Event(matcher[2], matcher[1]));
        }
        return l;
    };
    Event.prototype.getSolarDay = function (year) {
        if (year < this.getStartYear()) {
            return null;
        }
        var d = null;
        switch (this.getType()) {
            case EventType.SOLAR_DAY:
                d = this.getSolarDayBySolarDay(year);
                break;
            case EventType.SOLAR_WEEK:
                d = this.getSolarDayByWeek(year);
                break;
            case EventType.LUNAR_DAY:
                d = this.getSolarDayByLunarDay(year);
                break;
            case EventType.TERM_DAY:
                d = this.getSolarDayByTerm(year);
                break;
            case EventType.TERM_HS:
                d = this.getSolarDayByTermHeavenStem(year);
                break;
            case EventType.TERM_EB:
                d = this.getSolarDayByTermEarthBranch(year);
                break;
        }
        if (null == d) {
            return null;
        }
        var offset = EventManager.CHARS.indexOf(this.data.charAt(5)) - 31;
        return 0 == offset ? d : d.next(offset);
    };
    Event.prototype.getSolarDayBySolarDay = function (year) {
        var y = year;
        var m = EventManager.CHARS.indexOf(this.data.charAt(2)) - 31;
        if (m > 12) {
            m = 1;
            y += 1;
        }
        var d = EventManager.CHARS.indexOf(this.data.charAt(3)) - 31;
        var delay = EventManager.CHARS.indexOf(this.data.charAt(4)) - 31;
        var month = SolarMonth.fromYm(y, m);
        var lastDay = month.getDayCount();
        if (d > lastDay) {
            if (0 == delay) {
                return null;
            }
            return delay < 0 ? SolarDay.fromYmd(y, m, d + delay) : SolarDay.fromYmd(y, m, lastDay).next(delay);
        }
        return SolarDay.fromYmd(y, m, d);
    };
    Event.prototype.getSolarDayByLunarDay = function (year) {
        var y = year;
        var m = EventManager.CHARS.indexOf(this.data.charAt(2)) - 31;
        if (m > 12) {
            m = 1;
            y += 1;
        }
        var d = EventManager.CHARS.indexOf(this.data.charAt(3)) - 31;
        var delay = EventManager.CHARS.indexOf(this.data.charAt(4)) - 31;
        var month = LunarMonth.fromYm(y, m);
        var lastDay = month.getDayCount();
        if (d > lastDay) {
            if (0 == delay) {
                return null;
            }
            return delay < 0 ? LunarDay.fromYmd(y, m, d + delay).getSolarDay() : LunarDay.fromYmd(y, m, lastDay).getSolarDay().next(delay);
        }
        return LunarDay.fromYmd(y, m, d).getSolarDay();
    };
    Event.prototype.getSolarDayByWeek = function (year) {
        var n = EventManager.CHARS.indexOf(this.data.charAt(3)) - 31;
        if (n === 0) {
            return null;
        }
        var m = SolarMonth.fromYm(year, EventManager.CHARS.indexOf(this.data.charAt(2)) - 31);
        var w = EventManager.CHARS.indexOf(this.data.charAt(4)) - 31;
        if (n > 0) {
            var d_1 = m.getFirstDay();
            return d_1.next(d_1.getWeek().stepsTo(w) + 7 * n - 7);
        }
        var d = SolarDay.fromYmd(year, m.getMonth(), m.getDayCount());
        return d.next(d.getWeek().stepsBackTo(w) + 7 * n + 7);
    };
    Event.prototype.getSolarDayByTerm = function (year) {
        var offset = EventManager.CHARS.indexOf(this.data.charAt(4)) - 31;
        var d = SolarTerm.fromIndex(year, EventManager.CHARS.indexOf(this.data.charAt(2)) - 31).getSolarDay();
        return 0 == offset ? d : d.next(offset);
    };
    Event.prototype.getSolarDayByTermHeavenStem = function (year) {
        var d = this.getSolarDayByTerm(year);
        return d.next(d.getLunarDay().getSixtyCycle().getHeavenStem().stepsTo(EventManager.CHARS.indexOf(this.data.charAt(3)) - 31));
    };
    Event.prototype.getSolarDayByTermEarthBranch = function (year) {
        var d = this.getSolarDayByTerm(year);
        return d.next(d.getLunarDay().getSixtyCycle().getEarthBranch().stepsTo(EventManager.CHARS.indexOf(this.data.charAt(3)) - 31));
    };
    return Event;
}(AbstractCulture));
exports.Event = Event;
var EventBuilder = (function () {
    function EventBuilder() {
        this._name = '';
        this.data = ['@', '_', '_', '_', '_', '_', '0', '0', '0'];
    }
    EventBuilder.prototype.name = function (n) {
        this._name = n;
        return this;
    };
    EventBuilder.encodeType = function (t) {
        var n = 0;
        switch (t) {
            case EventType.SOLAR_WEEK:
                n = 1;
                break;
            case EventType.LUNAR_DAY:
                n = 2;
                break;
            case EventType.TERM_DAY:
                n = 3;
                break;
            case EventType.TERM_HS:
                n = 4;
                break;
            case EventType.TERM_EB:
                n = 5;
                break;
        }
        return EventManager.CHARS.charAt(n);
    };
    EventBuilder.prototype.content = function (t, a, b, c) {
        this.data[1] = EventBuilder.encodeType(t);
        this.data[2] = EventManager.CHARS.charAt(31 + a);
        this.data[3] = EventManager.CHARS.charAt(31 + b);
        this.data[4] = EventManager.CHARS.charAt(31 + c);
        return this;
    };
    EventBuilder.prototype.solarDay = function (solarMonth, solarDay, delayDays) {
        return this.content(EventType.SOLAR_DAY, solarMonth, solarDay, delayDays);
    };
    EventBuilder.prototype.lunarDay = function (lunarMonth, lunarDay, delayDays) {
        return this.content(EventType.LUNAR_DAY, lunarMonth, lunarDay, delayDays);
    };
    EventBuilder.prototype.solarWeek = function (solarMonth, weekIndex, week) {
        return this.content(EventType.SOLAR_WEEK, solarMonth, weekIndex, week);
    };
    EventBuilder.prototype.termDay = function (termIndex, delayDays) {
        return this.content(EventType.TERM_DAY, termIndex, 0, delayDays);
    };
    EventBuilder.prototype.termHeavenStem = function (termIndex, heavenStemIndex, delayDays) {
        return this.content(EventType.TERM_HS, termIndex, heavenStemIndex, delayDays);
    };
    EventBuilder.prototype.termEarthBranch = function (termIndex, earthBranchIndex, delayDays) {
        return this.content(EventType.TERM_EB, termIndex, earthBranchIndex, delayDays);
    };
    EventBuilder.prototype.startYear = function (year) {
        var size = EventManager.CHARS.length;
        var n = year;
        for (var i = 0; i < 3; i++) {
            this.data[8 - i] = EventManager.CHARS.charAt(n % size);
            n /= size;
        }
        return this;
    };
    EventBuilder.prototype.offset = function (days) {
        this.data[5] = EventManager.CHARS.charAt(31 + days);
        return this;
    };
    EventBuilder.prototype.build = function () {
        return new Event(this._name, this.data.join(''));
    };
    return EventBuilder;
}());
var EventManager = (function () {
    function EventManager() {
    }
    EventManager.remove = function (name) {
        EventManager.DATA = EventManager.DATA.replace(EventManager.REGEX + name, '');
    };
    EventManager.saveOrUpdate = function (name, data) {
        var o = EventManager.REGEX + name;
        var matcher = new RegExp(o, 'g').exec(EventManager.DATA);
        if (matcher) {
            EventManager.DATA = EventManager.DATA.replace(o, '');
        }
        else {
            EventManager.DATA += data;
        }
    };
    EventManager.updateData = function (name, data) {
        Event.validate(data);
        EventManager.saveOrUpdate(name, data);
    };
    EventManager.update = function (name, e) {
        EventManager.saveOrUpdate(name, e.getData() + (e.getName() ? e.getName() : name));
    };
    EventManager.REGEX = '(@[0-9A-Za-z_]{8})';
    EventManager.DATA = '';
    EventManager.CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTU_VWXYZabcdefghijklmnopqrstuvwxyz';
    return EventManager;
}());
exports.EventManager = EventManager;
