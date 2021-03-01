'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var AdvancedAppearance = /** @class */ (function (_super) {
    __extends(AdvancedAppearance, _super);
    function AdvancedAppearance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedAppearance.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var media, callback, lightStyles, darkStyles, theme;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.addSettingTab(new AdvancedAppearanceSettingTab(this.app, this));
                        this.addStyle();
                        media = window.matchMedia('(prefers-color-scheme: dark)');
                        callback = function () {
                            if (media.matches) {
                                console.log('Dark mode active');
                                _this.updateDarkStyle();
                            }
                            else {
                                console.log('Light mode active');
                                _this.updateLightStyle();
                            }
                        };
                        media.addEventListener('change', callback);
                        // Remove listener when we unload
                        this.register(function () { return media.removeEventListener('change', callback); });
                        lightStyles = ['advanced-light', 'advanced-light-tonal', 'advanced-light-contrast', 'advanced-light-white'];
                        darkStyles = ['advanced-dark', 'advanced-dark-tonal', 'advanced-dark-black'];
                        theme = ['theme-light', 'theme-dark'];
                        this.addCommand({
                            id: 'toggle-advanced-dark-cycle',
                            name: 'Cycle between dark mode styles',
                            callback: function () {
                                _this.settings.darkStyle = darkStyles[(darkStyles.indexOf(_this.settings.darkStyle) + 1) % darkStyles.length];
                                _this.saveData(_this.settings);
                                _this.updateDarkStyle();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-advanced-light-cycle',
                            name: 'Cycle between light mode styles',
                            callback: function () {
                                _this.settings.lightStyle = lightStyles[(lightStyles.indexOf(_this.settings.lightStyle) + 1) % lightStyles.length];
                                _this.saveData(_this.settings);
                                _this.updateLightStyle();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-advanced-switch',
                            name: 'Switch between light and dark mode',
                            callback: function () {
                                _this.settings.theme = theme[(theme.indexOf(_this.settings.theme) + 1) % theme.length];
                                _this.saveData(_this.settings);
                                _this.updateTheme();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-advanced-light-default',
                            name: 'Use light mode (default)',
                            callback: function () {
                                _this.settings.lightStyle = 'advanced-light';
                                _this.saveData(_this.settings);
                                _this.updateLightStyle();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-advanced-light-white',
                            name: 'Use light mode (all white)',
                            callback: function () {
                                _this.settings.lightStyle = 'advanced-light-white';
                                _this.saveData(_this.settings);
                                _this.updateLightStyle();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-advanced-light-tonal',
                            name: 'Use light mode (low contrast)',
                            callback: function () {
                                _this.settings.lightStyle = 'advanced-light-tonal';
                                _this.saveData(_this.settings);
                                _this.updateLightStyle();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-advanced-light-contrast',
                            name: 'Use light mode (high contrast)',
                            callback: function () {
                                _this.settings.lightStyle = 'advanced-light-contrast';
                                _this.saveData(_this.settings);
                                _this.updateLightStyle();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-advanced-dark-default',
                            name: 'Use dark mode (default)',
                            callback: function () {
                                _this.settings.darkStyle = 'advanced-dark';
                                _this.saveData(_this.settings);
                                _this.updateDarkStyle();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-advanced-dark-tonal',
                            name: 'Use dark mode (low contrast)',
                            callback: function () {
                                _this.settings.darkStyle = 'advanced-dark-tonal';
                                _this.saveData(_this.settings);
                                _this.updateDarkStyle();
                            }
                        });
                        this.addCommand({
                            id: 'toggle-advanced-dark-black',
                            name: 'Use dark mode (true black)',
                            callback: function () {
                                _this.settings.darkStyle = 'advanced-dark-black';
                                _this.saveData(_this.settings);
                                _this.updateDarkStyle();
                            }
                        });
                        this.refresh();
                        if (this.settings.useSystemTheme) {
                            this.enableSystemTheme();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancedAppearance.prototype.onunload = function () {
        console.log('Unloading Advanced Appearance plugin');
    };
    AdvancedAppearance.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancedAppearance.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // refresh function for when we change settings
    AdvancedAppearance.prototype.refresh = function () {
        // re-load the style
        this.updateStyle();
    };
    // add the styling elements we need
    AdvancedAppearance.prototype.addStyle = function () {
        // add a css block for our settings-dependent styles
        var css = document.createElement('style');
        css.id = 'advanced-appearance';
        document.getElementsByTagName("head")[0].appendChild(css);
        // add the main class
        document.body.classList.add('advanced-appearance');
        // update the style with the settings-dependent styles
        this.updateStyle();
    };
    // update the styles (at the start, or as the result of a settings change)
    AdvancedAppearance.prototype.updateStyle = function () {
        this.removeStyle();
        document.body.classList.toggle('fancy-cursor', this.settings.fancyCursor);
        document.body.classList.toggle('links-int-on', this.settings.underlineInternal);
        document.body.classList.toggle('links-ext-on', this.settings.underlineExternal);
        document.body.classList.toggle('system-shade', this.settings.useSystemTheme);
        document.body.classList.toggle('full-file-names', !this.settings.trimNames);
        document.body.classList.toggle('advanced-rel-edit', this.settings.relationLinesEdit);
        document.body.classList.toggle('advanced-rel-preview', this.settings.relationLinesPreview);
        // get the custom css element
        var el = document.getElementById('advanced-appearance');
        if (!el)
            throw "advanced-appearance element not found!";
        else {
            // set the settings-dependent css
            el.innerText = "\n        body.advanced-appearance{\n          --font-normal:" + this.settings.textNormal + "px;\n          --font-small:" + this.settings.textSmall + "px;\n          --line-width:" + this.settings.lineWidth + "rem;\n          --font-monospace:" + this.settings.monoFont + ";\n          --font-ui:" + this.settings.uiFont + ";\n          --text:" + this.settings.textFont + ";\n          --text-editor:" + this.settings.editorFont + ";\n          --base-h:" + this.settings.bgHue + ";\n          --base-s:" + this.settings.bgSat + "%;\n          --base-l:" + this.settings.bgLight + "%;\n          --accent-h:" + this.settings.accentHue + ";\n          --accent-s:" + this.settings.accentSat + "%;\n          --accent-d:calc(" + this.settings.accentLight + "% + 10%);\n          --accent-l:" + this.settings.accentLight + "%;}\n      ";
        }
    };
    AdvancedAppearance.prototype.enableSystemTheme = function () {
        this.app.workspace.layoutReady ? this.refreshSystemTheme() : this.app.workspace.on('layout-ready', this.refreshSystemTheme);
    };
    AdvancedAppearance.prototype.refreshSystemTheme = function () {
        var isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDarkMode && this.settings.useSystemTheme) {
            console.log('Dark mode active');
            this.updateDarkStyle();
        }
        else if (this.settings.useSystemTheme) {
            console.log('Light mode active');
            this.updateLightStyle();
        }
    };
    AdvancedAppearance.prototype.updateDarkStyle = function () {
        document.body.removeClass('theme-light', 'advanced-dark', 'advanced-dark-tonal', 'advanced-dark-black');
        document.body.addClass('theme-dark', this.settings.darkStyle);
        this.app.workspace.trigger('css-change');
    };
    AdvancedAppearance.prototype.updateLightStyle = function () {
        document.body.removeClass('theme-dark', 'advanced-light', 'advanced-light-tonal', 'advanced-light-contrast', 'advanced-light-white');
        document.body.addClass('theme-light', this.settings.lightStyle);
        this.app.workspace.trigger('css-change');
    };
    AdvancedAppearance.prototype.updateTheme = function () {
        document.body.removeClass('theme-dark', 'theme-light');
        document.body.addClass(this.settings.theme);
        this.app.workspace.trigger('css-change');
    };
    AdvancedAppearance.prototype.removeStyle = function () {
        document.body.removeClass('advanced-light', 'advanced-light-tonal', 'advanced-light-contrast', 'advanced-light-white', 'advanced-dark', 'advanced-dark-tonal', 'advanced-dark-black');
        document.body.addClass(this.settings.lightStyle, this.settings.darkStyle);
    };
    return AdvancedAppearance;
}(obsidian.Plugin));
var DEFAULT_SETTINGS = {
    theme: 'theme-light',
    accentHue: 201,
    accentSat: 17,
    accentLight: 50,
    bgHue: 0,
    bgSat: 0,
    bgLight: 3,
    trimNames: false,
    lightStyle: 'advanced-light',
    darkStyle: 'advanced-dark',
    uiFont: '-apple-system,BlinkMacSystemFont,"Segoe UI Emoji","Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,sans-serif',
    textFont: '-apple-system,BlinkMacSystemFont,"Segoe UI Emoji","Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,sans-serif',
    editorFont: '-apple-system,BlinkMacSystemFont,"Segoe UI Emoji","Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,sans-serif',
    monoFont: 'Menlo,SFMono-Regular,Consolas,Roboto Mono,monospace',
    fancyCursor: true,
    lineWidth: 40,
    textNormal: 16,
    textSmall: 13,
    underlineInternal: true,
    underlineExternal: true,
    useSystemTheme: false,
    relationLinesPreview: false,
    relationLinesEdit: false
};
var AdvancedAppearanceSettingTab = /** @class */ (function (_super) {
    __extends(AdvancedAppearanceSettingTab, _super);
    function AdvancedAppearanceSettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    AdvancedAppearanceSettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h3', { text: 'Advanced Appearance Settings' });
        containerEl.createEl('p', { text: 'Download the Hider plugin for options to hide elements in the Obsidian UI.' });
        containerEl.createEl('a', { text: '@kepano on Patreon and Twitter', href: "https://www.patreon.com/kepano" });
        containerEl.createEl('h3');
        containerEl.createEl('br');
        containerEl.createEl('h3', { text: 'Theme variations' });
        new obsidian.Setting(containerEl)
            .setName('Light mode style')
            .setDesc('Background colors in light mode, can be toggled via hotkey')
            .addDropdown(function (dropdown) { return dropdown
            .addOption('advanced-light', 'Default')
            .addOption('advanced-light-white', 'All white')
            .addOption('advanced-light-tonal', 'Low contrast')
            .addOption('advanced-light-contrast', 'High contrast')
            .setValue(_this.plugin.settings.lightStyle)
            .onChange(function (value) {
            _this.plugin.settings.lightStyle = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.removeStyle();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Dark mode style')
            .setDesc('Background colors in dark mode, can be toggled via hotkey')
            .addDropdown(function (dropdown) { return dropdown
            .addOption('advanced-dark', 'Default')
            .addOption('advanced-dark-tonal', 'Low contrast')
            .addOption('advanced-dark-black', 'True black')
            .setValue(_this.plugin.settings.darkStyle)
            .onChange(function (value) {
            _this.plugin.settings.darkStyle = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.removeStyle();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Use system setting for light or dark mode')
            .setDesc('Automatically switch based on your operating system settings')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.useSystemTheme)
            .onChange(function (value) {
            _this.plugin.settings.useSystemTheme = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refreshSystemTheme();
        }); });
        containerEl.createEl('br');
        containerEl.createEl('h3', { text: 'Accent color' });
        new obsidian.Setting(containerEl)
            .setName('Accent color hue')
            .addSlider(function (slider) { return slider
            .setLimits(0, 360, 1)
            .setValue(_this.plugin.settings.accentHue)
            .onChange(function (value) {
            _this.plugin.settings.accentHue = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Accent color saturation')
            .addSlider(function (slider) { return slider
            .setLimits(0, 100, 1)
            .setValue(_this.plugin.settings.accentSat)
            .onChange(function (value) {
            _this.plugin.settings.accentSat = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Accent color darkness')
            .addSlider(function (slider) { return slider
            .setLimits(40, 70, 1)
            .setValue(_this.plugin.settings.accentLight)
            .onChange(function (value) {
            _this.plugin.settings.accentLight = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        containerEl.createEl('br');
        containerEl.createEl('h3', { text: 'Base color' });
        new obsidian.Setting(containerEl)
            .setName('Base color hue')
            .addSlider(function (slider) { return slider
            .setLimits(0, 360, 1)
            .setValue(_this.plugin.settings.bgHue)
            .onChange(function (value) {
            _this.plugin.settings.bgHue = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Base color saturation')
            .addSlider(function (slider) { return slider
            .setLimits(0, 100, 1)
            .setValue(_this.plugin.settings.bgSat)
            .onChange(function (value) {
            _this.plugin.settings.bgSat = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Base color darkness')
            .addSlider(function (slider) { return slider
            .setLimits(2, 40, 1)
            .setValue(100 - _this.plugin.settings.bgLight)
            .onChange(function (value) {
            _this.plugin.settings.bgLight = 100 - value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        containerEl.createEl('br');
        containerEl.createEl('h3', { text: 'Appearance' });
        new obsidian.Setting(containerEl)
            .setName('Fancy cursor')
            .setDesc('The editor cursor takes on your accent color')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.fancyCursor)
            .onChange(function (value) {
            _this.plugin.settings.fancyCursor = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Trim file names in sidebars')
            .setDesc('Use ellipses to fits file names on a single line')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.trimNames)
            .onChange(function (value) {
            _this.plugin.settings.trimNames = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Relationship lines in preview')
            .setDesc('Show vertical lines that connect related bullet points and task lists')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.relationLinesPreview)
            .onChange(function (value) {
            _this.plugin.settings.relationLinesPreview = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Relationship lines in edit mode')
            .setDesc('Show vertical lines that connect related bullet points and task lists')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.relationLinesEdit)
            .onChange(function (value) {
            _this.plugin.settings.relationLinesEdit = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        containerEl.createEl('br');
        containerEl.createEl('h3', { text: 'Typography' });
        new obsidian.Setting(containerEl)
            .setName('Underline internal links')
            .setDesc('Show underlines on internal links')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.underlineInternal)
            .onChange(function (value) {
            _this.plugin.settings.underlineInternal = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Underline external links')
            .setDesc('Show underlines on external links')
            .addToggle(function (toggle) { return toggle.setValue(_this.plugin.settings.underlineExternal)
            .onChange(function (value) {
            _this.plugin.settings.underlineExternal = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Line width')
            .setDesc('The maximum number of characters per line (default 40)')
            .addText(function (text) { return text.setPlaceholder('40')
            .setValue((_this.plugin.settings.lineWidth || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.lineWidth = parseInt(value.trim());
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Body font size')
            .setDesc('Used for the main text (default 16)')
            .addText(function (text) { return text.setPlaceholder('16')
            .setValue((_this.plugin.settings.textNormal || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.textNormal = parseInt(value.trim());
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Sidebar font size')
            .setDesc('Used for text in the sidebars (default 13)')
            .addText(function (text) { return text.setPlaceholder('13')
            .setValue((_this.plugin.settings.textSmall || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.textSmall = parseInt(value.trim());
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        containerEl.createEl('br');
        containerEl.createEl('h3', { text: 'Fonts' });
        new obsidian.Setting(containerEl)
            .setName('Text font')
            .setDesc('Used in preview mode — the font must also be installed on your computer')
            .addDropdown(function (dropdown) { return dropdown
            .addOption('-apple-system,BlinkMacSystemFont,"Segoe UI Emoji","Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,sans-serif', 'System font')
            .addOption('Inter', 'Inter')
            .addOption('iA Writer Mono S', 'iA Mono')
            .addOption('iA Writer Duo S', 'iA Duo')
            .addOption('iA Writer Quattro S', 'iA Quattro')
            .addOption('SFMono-Regular', 'SF Mono')
            .addOption('Consolas', 'Consolas')
            .addOption('Roboto Mono', 'Roboto Mono')
            .setValue(_this.plugin.settings.textFont)
            .onChange(function (value) {
            _this.plugin.settings.textFont = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('UI font')
            .setDesc('Used for UI elements')
            .addDropdown(function (dropdown) { return dropdown
            .addOption('-apple-system,BlinkMacSystemFont,"Segoe UI Emoji","Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,sans-serif', 'System font')
            .addOption('Inter', 'Inter')
            .addOption('iA Writer Mono S', 'iA Mono')
            .addOption('iA Writer Duo S', 'iA Duo')
            .addOption('iA Writer Quattro S', 'iA Quattro')
            .addOption('SFMono-Regular', 'SF Mono')
            .addOption('Consolas', 'Consolas')
            .addOption('Roboto Mono', 'Roboto Mono')
            .setValue(_this.plugin.settings.uiFont)
            .onChange(function (value) {
            _this.plugin.settings.uiFont = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Editor font')
            .setDesc('Used in edit mode')
            .addDropdown(function (dropdown) { return dropdown
            .addOption('-apple-system,BlinkMacSystemFont,"Segoe UI Emoji","Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,sans-serif', 'System font')
            .addOption('Inter', 'Inter')
            .addOption('iA Writer Mono S', 'iA Mono')
            .addOption('iA Writer Duo S', 'iA Duo')
            .addOption('iA Writer Quattro S', 'iA Quattro')
            .addOption('SFMono-Regular', 'SF Mono')
            .addOption('Consolas', 'Consolas')
            .addOption('Roboto Mono', 'Roboto Mono')
            .setValue(_this.plugin.settings.editorFont)
            .onChange(function (value) {
            _this.plugin.settings.editorFont = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Monospace font')
            .setDesc('Used for code blocks, front matter, etc')
            .addDropdown(function (dropdown) { return dropdown
            .addOption('Menlo,SFMono-Regular,Consolas,Roboto Mono,monospace', 'System font')
            .addOption('iA Writer Mono S', 'iA Mono')
            .addOption('iA Writer Duo S', 'iA Duo')
            .addOption('iA Writer Quattro S', 'iA Quattro')
            .addOption('SFMono-Regular', 'SF Mono')
            .addOption('Consolas', 'Consolas')
            .addOption('Roboto Mono', 'Roboto Mono')
            .setValue(_this.plugin.settings.monoFont)
            .onChange(function (value) {
            _this.plugin.settings.monoFont = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        containerEl.createEl('br');
        containerEl.createEl('h3', { text: 'Custom fonts' });
        containerEl.createEl('p', { text: 'These settings override the dropdowns above. Make sure to use the exact name of the font as it appears on your system.' });
        new obsidian.Setting(containerEl)
            .setName('Custom text font')
            .setDesc('Used in preview mode')
            .addText(function (text) { return text.setPlaceholder('')
            .setValue((_this.plugin.settings.textFont || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.textFont = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Custom UI font')
            .setDesc('Used for UI elements')
            .addText(function (text) { return text.setPlaceholder('')
            .setValue((_this.plugin.settings.uiFont || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.uiFont = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Custom editor font')
            .setDesc('Used in edit mode')
            .addText(function (text) { return text.setPlaceholder('')
            .setValue((_this.plugin.settings.editorFont || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.editorFont = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
        new obsidian.Setting(containerEl)
            .setName('Custom monospace font')
            .setDesc('Used for code blocks, front matter, etc')
            .addText(function (text) { return text.setPlaceholder('')
            .setValue((_this.plugin.settings.monoFont || '') + '')
            .onChange(function (value) {
            _this.plugin.settings.monoFont = value;
            _this.plugin.saveData(_this.plugin.settings);
            _this.plugin.refresh();
        }); });
    };
    return AdvancedAppearanceSettingTab;
}(obsidian.PluginSettingTab));

module.exports = AdvancedAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBwLCBXb3Jrc3BhY2UsIE1vZGFsLCBOb3RpY2UsIFBsdWdpbiwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZyB9IGZyb20gJ29ic2lkaWFuJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkdmFuY2VkQXBwZWFyYW5jZSBleHRlbmRzIFBsdWdpbiB7XHJcbiAgc2V0dGluZ3M6IEFkdmFuY2VkQXBwZWFyYW5jZVNldHRpbmdzO1xyXG5cclxuICBhc3luYyBvbmxvYWQoKSB7XHJcblxyXG4gICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcclxuXHJcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IEFkdmFuY2VkQXBwZWFyYW5jZVNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLmFkZFN0eWxlKCk7XHJcblxyXG4gICAgLy8gV2F0Y2ggZm9yIHN5c3RlbSBjaGFuZ2VzIHRvIGNvbG9yIHRoZW1lIFxyXG5cclxuICAgIGxldCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyk7XHJcblxyXG4gICAgbGV0IGNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICBpZiAobWVkaWEubWF0Y2hlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXJrIG1vZGUgYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEYXJrU3R5bGUoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMaWdodCBtb2RlIGFjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlnaHRTdHlsZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZWRpYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjYWxsYmFjayk7XHJcblxyXG4gICAgLy8gUmVtb3ZlIGxpc3RlbmVyIHdoZW4gd2UgdW5sb2FkXHJcblxyXG4gICAgdGhpcy5yZWdpc3RlcigoKSA9PiBtZWRpYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjYWxsYmFjaykpO1xyXG5cclxuICAgIGNvbnN0IGxpZ2h0U3R5bGVzID0gWydhZHZhbmNlZC1saWdodCcsICdhZHZhbmNlZC1saWdodC10b25hbCcsICdhZHZhbmNlZC1saWdodC1jb250cmFzdCcsICdhZHZhbmNlZC1saWdodC13aGl0ZSddO1xyXG4gICAgY29uc3QgZGFya1N0eWxlcyA9IFsnYWR2YW5jZWQtZGFyaycsICdhZHZhbmNlZC1kYXJrLXRvbmFsJywgJ2FkdmFuY2VkLWRhcmstYmxhY2snXTtcclxuICAgIGNvbnN0IHRoZW1lID0gWyd0aGVtZS1saWdodCcsICd0aGVtZS1kYXJrJ107XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgICBpZDogJ3RvZ2dsZS1hZHZhbmNlZC1kYXJrLWN5Y2xlJyxcclxuICAgICAgICBuYW1lOiAnQ3ljbGUgYmV0d2VlbiBkYXJrIG1vZGUgc3R5bGVzJyxcclxuICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXJrU3R5bGUgPSBkYXJrU3R5bGVzWyhkYXJrU3R5bGVzLmluZGV4T2YodGhpcy5zZXR0aW5ncy5kYXJrU3R5bGUpICsgMSkgJSBkYXJrU3R5bGVzLmxlbmd0aF07XHJcbiAgICAgICAgICB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVEYXJrU3R5bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pOyAgXHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgICBpZDogJ3RvZ2dsZS1hZHZhbmNlZC1saWdodC1jeWNsZScsXHJcbiAgICAgICAgbmFtZTogJ0N5Y2xlIGJldHdlZW4gbGlnaHQgbW9kZSBzdHlsZXMnLFxyXG4gICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldHRpbmdzLmxpZ2h0U3R5bGUgPSBsaWdodFN0eWxlc1sobGlnaHRTdHlsZXMuaW5kZXhPZih0aGlzLnNldHRpbmdzLmxpZ2h0U3R5bGUpICsgMSkgJSBsaWdodFN0eWxlcy5sZW5ndGhdO1xyXG4gICAgICAgICAgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlTGlnaHRTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgICBpZDogJ3RvZ2dsZS1hZHZhbmNlZC1zd2l0Y2gnLFxyXG4gICAgICAgIG5hbWU6ICdTd2l0Y2ggYmV0d2VlbiBsaWdodCBhbmQgZGFyayBtb2RlJyxcclxuICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXR0aW5ncy50aGVtZSA9IHRoZW1lWyh0aGVtZS5pbmRleE9mKHRoaXMuc2V0dGluZ3MudGhlbWUpICsgMSkgJSB0aGVtZS5sZW5ndGhdO1xyXG4gICAgICAgICAgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlVGhlbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgICAgaWQ6ICd0b2dnbGUtYWR2YW5jZWQtbGlnaHQtZGVmYXVsdCcsXHJcbiAgICAgICAgbmFtZTogJ1VzZSBsaWdodCBtb2RlIChkZWZhdWx0KScsXHJcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0dGluZ3MubGlnaHRTdHlsZSA9ICdhZHZhbmNlZC1saWdodCc7XHJcbiAgICAgICAgICB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVMaWdodFN0eWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICAgIGlkOiAndG9nZ2xlLWFkdmFuY2VkLWxpZ2h0LXdoaXRlJyxcclxuICAgICAgICBuYW1lOiAnVXNlIGxpZ2h0IG1vZGUgKGFsbCB3aGl0ZSknLFxyXG4gICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldHRpbmdzLmxpZ2h0U3R5bGUgPSAnYWR2YW5jZWQtbGlnaHQtd2hpdGUnO1xyXG4gICAgICAgICAgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlTGlnaHRTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgICBpZDogJ3RvZ2dsZS1hZHZhbmNlZC1saWdodC10b25hbCcsXHJcbiAgICAgICAgbmFtZTogJ1VzZSBsaWdodCBtb2RlIChsb3cgY29udHJhc3QpJyxcclxuICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXR0aW5ncy5saWdodFN0eWxlID0gJ2FkdmFuY2VkLWxpZ2h0LXRvbmFsJztcclxuICAgICAgICAgIHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxpZ2h0U3R5bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgICAgaWQ6ICd0b2dnbGUtYWR2YW5jZWQtbGlnaHQtY29udHJhc3QnLFxyXG4gICAgICAgIG5hbWU6ICdVc2UgbGlnaHQgbW9kZSAoaGlnaCBjb250cmFzdCknLFxyXG4gICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldHRpbmdzLmxpZ2h0U3R5bGUgPSAnYWR2YW5jZWQtbGlnaHQtY29udHJhc3QnO1xyXG4gICAgICAgICAgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlTGlnaHRTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgICBpZDogJ3RvZ2dsZS1hZHZhbmNlZC1kYXJrLWRlZmF1bHQnLFxyXG4gICAgICAgIG5hbWU6ICdVc2UgZGFyayBtb2RlIChkZWZhdWx0KScsXHJcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGFya1N0eWxlID0gJ2FkdmFuY2VkLWRhcmsnO1xyXG4gICAgICAgICAgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlRGFya1N0eWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICAgIGlkOiAndG9nZ2xlLWFkdmFuY2VkLWRhcmstdG9uYWwnLFxyXG4gICAgICAgIG5hbWU6ICdVc2UgZGFyayBtb2RlIChsb3cgY29udHJhc3QpJyxcclxuICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXJrU3R5bGUgPSAnYWR2YW5jZWQtZGFyay10b25hbCc7XHJcbiAgICAgICAgICB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVEYXJrU3R5bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgICAgaWQ6ICd0b2dnbGUtYWR2YW5jZWQtZGFyay1ibGFjaycsXHJcbiAgICAgICAgbmFtZTogJ1VzZSBkYXJrIG1vZGUgKHRydWUgYmxhY2spJyxcclxuICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXJrU3R5bGUgPSAnYWR2YW5jZWQtZGFyay1ibGFjayc7XHJcbiAgICAgICAgICB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVEYXJrU3R5bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmVmcmVzaCgpXHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MudXNlU3lzdGVtVGhlbWUpIHtcclxuICAgICAgdGhpcy5lbmFibGVTeXN0ZW1UaGVtZSgpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIG9udW5sb2FkKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1VubG9hZGluZyBBZHZhbmNlZCBBcHBlYXJhbmNlIHBsdWdpbicpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oREVGQVVMVF9TRVRUSU5HUywgYXdhaXQgdGhpcy5sb2FkRGF0YSgpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcclxuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICAvLyByZWZyZXNoIGZ1bmN0aW9uIGZvciB3aGVuIHdlIGNoYW5nZSBzZXR0aW5nc1xyXG4gIHJlZnJlc2goKSB7XHJcbiAgICAvLyByZS1sb2FkIHRoZSBzdHlsZVxyXG4gICAgdGhpcy51cGRhdGVTdHlsZSgpXHJcbiAgfVxyXG5cclxuICAvLyBhZGQgdGhlIHN0eWxpbmcgZWxlbWVudHMgd2UgbmVlZFxyXG4gIGFkZFN0eWxlKCkge1xyXG4gICAgLy8gYWRkIGEgY3NzIGJsb2NrIGZvciBvdXIgc2V0dGluZ3MtZGVwZW5kZW50IHN0eWxlc1xyXG4gICAgY29uc3QgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgIGNzcy5pZCA9ICdhZHZhbmNlZC1hcHBlYXJhbmNlJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChjc3MpO1xyXG5cclxuICAgIC8vIGFkZCB0aGUgbWFpbiBjbGFzc1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdhZHZhbmNlZC1hcHBlYXJhbmNlJyk7XHJcblxyXG4gICAgLy8gdXBkYXRlIHRoZSBzdHlsZSB3aXRoIHRoZSBzZXR0aW5ncy1kZXBlbmRlbnQgc3R5bGVzXHJcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICAvLyB1cGRhdGUgdGhlIHN0eWxlcyAoYXQgdGhlIHN0YXJ0LCBvciBhcyB0aGUgcmVzdWx0IG9mIGEgc2V0dGluZ3MgY2hhbmdlKVxyXG4gIHVwZGF0ZVN0eWxlKCkge1xyXG4gICAgdGhpcy5yZW1vdmVTdHlsZSgpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdmYW5jeS1jdXJzb3InLCB0aGlzLnNldHRpbmdzLmZhbmN5Q3Vyc29yKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbGlua3MtaW50LW9uJywgdGhpcy5zZXR0aW5ncy51bmRlcmxpbmVJbnRlcm5hbCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2xpbmtzLWV4dC1vbicsIHRoaXMuc2V0dGluZ3MudW5kZXJsaW5lRXh0ZXJuYWwpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzeXN0ZW0tc2hhZGUnLCB0aGlzLnNldHRpbmdzLnVzZVN5c3RlbVRoZW1lKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZnVsbC1maWxlLW5hbWVzJywgIXRoaXMuc2V0dGluZ3MudHJpbU5hbWVzKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYWR2YW5jZWQtcmVsLWVkaXQnLCB0aGlzLnNldHRpbmdzLnJlbGF0aW9uTGluZXNFZGl0KTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYWR2YW5jZWQtcmVsLXByZXZpZXcnLCB0aGlzLnNldHRpbmdzLnJlbGF0aW9uTGluZXNQcmV2aWV3KTtcclxuXHJcbiAgICAvLyBnZXQgdGhlIGN1c3RvbSBjc3MgZWxlbWVudFxyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWR2YW5jZWQtYXBwZWFyYW5jZScpO1xyXG4gICAgaWYgKCFlbCkgdGhyb3cgXCJhZHZhbmNlZC1hcHBlYXJhbmNlIGVsZW1lbnQgbm90IGZvdW5kIVwiO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vIHNldCB0aGUgc2V0dGluZ3MtZGVwZW5kZW50IGNzc1xyXG4gICAgICBlbC5pbm5lclRleHQgPSBgXHJcbiAgICAgICAgYm9keS5hZHZhbmNlZC1hcHBlYXJhbmNle1xyXG4gICAgICAgICAgLS1mb250LW5vcm1hbDoke3RoaXMuc2V0dGluZ3MudGV4dE5vcm1hbH1weDtcclxuICAgICAgICAgIC0tZm9udC1zbWFsbDoke3RoaXMuc2V0dGluZ3MudGV4dFNtYWxsfXB4O1xyXG4gICAgICAgICAgLS1saW5lLXdpZHRoOiR7dGhpcy5zZXR0aW5ncy5saW5lV2lkdGh9cmVtO1xyXG4gICAgICAgICAgLS1mb250LW1vbm9zcGFjZToke3RoaXMuc2V0dGluZ3MubW9ub0ZvbnR9O1xyXG4gICAgICAgICAgLS1mb250LXVpOiR7dGhpcy5zZXR0aW5ncy51aUZvbnR9O1xyXG4gICAgICAgICAgLS10ZXh0OiR7dGhpcy5zZXR0aW5ncy50ZXh0Rm9udH07XHJcbiAgICAgICAgICAtLXRleHQtZWRpdG9yOiR7dGhpcy5zZXR0aW5ncy5lZGl0b3JGb250fTtcclxuICAgICAgICAgIC0tYmFzZS1oOiR7dGhpcy5zZXR0aW5ncy5iZ0h1ZX07XHJcbiAgICAgICAgICAtLWJhc2Utczoke3RoaXMuc2V0dGluZ3MuYmdTYXR9JTtcclxuICAgICAgICAgIC0tYmFzZS1sOiR7dGhpcy5zZXR0aW5ncy5iZ0xpZ2h0fSU7XHJcbiAgICAgICAgICAtLWFjY2VudC1oOiR7dGhpcy5zZXR0aW5ncy5hY2NlbnRIdWV9O1xyXG4gICAgICAgICAgLS1hY2NlbnQtczoke3RoaXMuc2V0dGluZ3MuYWNjZW50U2F0fSU7XHJcbiAgICAgICAgICAtLWFjY2VudC1kOmNhbGMoJHt0aGlzLnNldHRpbmdzLmFjY2VudExpZ2h0fSUgKyAxMCUpO1xyXG4gICAgICAgICAgLS1hY2NlbnQtbDoke3RoaXMuc2V0dGluZ3MuYWNjZW50TGlnaHR9JTt9XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbmFibGVTeXN0ZW1UaGVtZSgpIHtcclxuICAgICh0aGlzLmFwcC53b3Jrc3BhY2UgYXMgYW55KS5sYXlvdXRSZWFkeSA/IHRoaXMucmVmcmVzaFN5c3RlbVRoZW1lKCkgOiB0aGlzLmFwcC53b3Jrc3BhY2Uub24oJ2xheW91dC1yZWFkeScsIHRoaXMucmVmcmVzaFN5c3RlbVRoZW1lKTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hTeXN0ZW1UaGVtZSgpIHtcclxuICAgIGNvbnN0IGlzRGFya01vZGUgPSB3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXNcclxuXHJcbiAgICBpZiAoaXNEYXJrTW9kZSAmJiB0aGlzLnNldHRpbmdzLnVzZVN5c3RlbVRoZW1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RhcmsgbW9kZSBhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURhcmtTdHlsZSgpXHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZXR0aW5ncy51c2VTeXN0ZW1UaGVtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMaWdodCBtb2RlIGFjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlnaHRTdHlsZSgpXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZURhcmtTdHlsZSgpIHtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2xhc3MoJ3RoZW1lLWxpZ2h0JywnYWR2YW5jZWQtZGFyaycsJ2FkdmFuY2VkLWRhcmstdG9uYWwnLCdhZHZhbmNlZC1kYXJrLWJsYWNrJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZENsYXNzKCd0aGVtZS1kYXJrJyx0aGlzLnNldHRpbmdzLmRhcmtTdHlsZSk7XHJcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2UudHJpZ2dlcignY3NzLWNoYW5nZScpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGlnaHRTdHlsZSgpIHtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2xhc3MoJ3RoZW1lLWRhcmsnLCdhZHZhbmNlZC1saWdodCcsJ2FkdmFuY2VkLWxpZ2h0LXRvbmFsJywnYWR2YW5jZWQtbGlnaHQtY29udHJhc3QnLCdhZHZhbmNlZC1saWdodC13aGl0ZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRDbGFzcygndGhlbWUtbGlnaHQnLHRoaXMuc2V0dGluZ3MubGlnaHRTdHlsZSk7XHJcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2UudHJpZ2dlcignY3NzLWNoYW5nZScpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVGhlbWUoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNsYXNzKCd0aGVtZS1kYXJrJywndGhlbWUtbGlnaHQnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy50aGVtZSk7XHJcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2UudHJpZ2dlcignY3NzLWNoYW5nZScpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU3R5bGUoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNsYXNzKCdhZHZhbmNlZC1saWdodCcsJ2FkdmFuY2VkLWxpZ2h0LXRvbmFsJywnYWR2YW5jZWQtbGlnaHQtY29udHJhc3QnLCdhZHZhbmNlZC1saWdodC13aGl0ZScsJ2FkdmFuY2VkLWRhcmsnLCdhZHZhbmNlZC1kYXJrLXRvbmFsJywnYWR2YW5jZWQtZGFyay1ibGFjaycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmxpZ2h0U3R5bGUsdGhpcy5zZXR0aW5ncy5kYXJrU3R5bGUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmludGVyZmFjZSBBZHZhbmNlZEFwcGVhcmFuY2VTZXR0aW5ncyB7XHJcbiAgdGhlbWU6IHN0cmluZztcclxuICBhY2NlbnRIdWU6IG51bWJlcjtcclxuICBhY2NlbnRTYXQ6IG51bWJlcjtcclxuICBhY2NlbnRMaWdodDogbnVtYmVyO1xyXG4gIGJnSHVlOiBudW1iZXI7XHJcbiAgYmdTYXQ6IG51bWJlcjtcclxuICBiZ0xpZ2h0OiBudW1iZXI7XHJcbiAgbGlnaHRTdHlsZTogc3RyaW5nO1xyXG4gIGRhcmtTdHlsZTogc3RyaW5nO1xyXG4gIHVpRm9udDogc3RyaW5nO1xyXG4gIHRleHRGb250OiBzdHJpbmc7XHJcbiAgZWRpdG9yRm9udDogc3RyaW5nO1xyXG4gIG1vbm9Gb250OiBzdHJpbmc7XHJcbiAgZmFuY3lDdXJzb3I6IGJvb2xlYW47XHJcbiAgdHJpbU5hbWVzOiBib29sZWFuO1xyXG4gIGxpbmVXaWR0aDogbnVtYmVyO1xyXG4gIHRleHROb3JtYWw6IG51bWJlcjtcclxuICB0ZXh0U21hbGw6IG51bWJlcjtcclxuICB1bmRlcmxpbmVJbnRlcm5hbDogYm9vbGVhbjtcclxuICB1bmRlcmxpbmVFeHRlcm5hbDogYm9vbGVhbjtcclxuICB1c2VTeXN0ZW1UaGVtZTogYm9vbGVhbjtcclxuICByZWxhdGlvbkxpbmVzUHJldmlldzogYm9vbGVhbjtcclxuICByZWxhdGlvbkxpbmVzRWRpdDogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9TRVRUSU5HUzogQWR2YW5jZWRBcHBlYXJhbmNlU2V0dGluZ3MgPSB7XHJcbiAgdGhlbWU6ICd0aGVtZS1saWdodCcsXHJcbiAgYWNjZW50SHVlOiAyMDEsXHJcbiAgYWNjZW50U2F0OiAxNyxcclxuICBhY2NlbnRMaWdodDogNTAsXHJcbiAgYmdIdWU6IDAsXHJcbiAgYmdTYXQ6IDAsXHJcbiAgYmdMaWdodDogMyxcclxuICB0cmltTmFtZXM6IGZhbHNlLFxyXG4gIGxpZ2h0U3R5bGU6ICdhZHZhbmNlZC1saWdodCcsXHJcbiAgZGFya1N0eWxlOiAnYWR2YW5jZWQtZGFyaycsXHJcbiAgdWlGb250OiAnLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUlcIixSb2JvdG8sT3h5Z2VuLVNhbnMsVWJ1bnR1LENhbnRhcmVsbCxzYW5zLXNlcmlmJyxcclxuICB0ZXh0Rm9udDogJy1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsc2Fucy1zZXJpZicsXHJcbiAgZWRpdG9yRm9udDogJy1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsc2Fucy1zZXJpZicsXHJcbiAgbW9ub0ZvbnQ6ICdNZW5sbyxTRk1vbm8tUmVndWxhcixDb25zb2xhcyxSb2JvdG8gTW9ubyxtb25vc3BhY2UnLFxyXG4gIGZhbmN5Q3Vyc29yOiB0cnVlLFxyXG4gIGxpbmVXaWR0aDogNDAsXHJcbiAgdGV4dE5vcm1hbDogMTYsXHJcbiAgdGV4dFNtYWxsOiAxMyxcclxuICB1bmRlcmxpbmVJbnRlcm5hbDogdHJ1ZSxcclxuICB1bmRlcmxpbmVFeHRlcm5hbDogdHJ1ZSxcclxuICB1c2VTeXN0ZW1UaGVtZTogZmFsc2UsXHJcbiAgcmVsYXRpb25MaW5lc1ByZXZpZXc6IGZhbHNlLFxyXG4gIHJlbGF0aW9uTGluZXNFZGl0OiBmYWxzZVxyXG59XHJcblxyXG5jbGFzcyBBZHZhbmNlZEFwcGVhcmFuY2VTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcblxyXG4gIHBsdWdpbjogQWR2YW5jZWRBcHBlYXJhbmNlO1xyXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IEFkdmFuY2VkQXBwZWFyYW5jZSkge1xyXG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xyXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5KCk6IHZvaWQge1xyXG4gICAgbGV0IHtjb250YWluZXJFbH0gPSB0aGlzO1xyXG5cclxuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7dGV4dDogJ0FkdmFuY2VkIEFwcGVhcmFuY2UgU2V0dGluZ3MnfSk7XHJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHt0ZXh0OiAnRG93bmxvYWQgdGhlIEhpZGVyIHBsdWdpbiBmb3Igb3B0aW9ucyB0byBoaWRlIGVsZW1lbnRzIGluIHRoZSBPYnNpZGlhbiBVSS4nfSk7XHJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnYScsIHt0ZXh0OiAnQGtlcGFubyBvbiBQYXRyZW9uIGFuZCBUd2l0dGVyJywgaHJlZjpcImh0dHBzOi8vd3d3LnBhdHJlb24uY29tL2tlcGFub1wifSk7XHJcblxyXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJyk7XHJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnYnInKTtcclxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHt0ZXh0OiAnVGhlbWUgdmFyaWF0aW9ucyd9KTtcclxuXHJcbiAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgIC5zZXROYW1lKCdMaWdodCBtb2RlIHN0eWxlJylcclxuICAgICAgICAuc2V0RGVzYygnQmFja2dyb3VuZCBjb2xvcnMgaW4gbGlnaHQgbW9kZSwgY2FuIGJlIHRvZ2dsZWQgdmlhIGhvdGtleScpXHJcbiAgICAgICAgLmFkZERyb3Bkb3duKGRyb3Bkb3duID0+IGRyb3Bkb3duXHJcbiAgICAgICAgICAuYWRkT3B0aW9uKCdhZHZhbmNlZC1saWdodCcsJ0RlZmF1bHQnKVxyXG4gICAgICAgICAgLmFkZE9wdGlvbignYWR2YW5jZWQtbGlnaHQtd2hpdGUnLCdBbGwgd2hpdGUnKVxyXG4gICAgICAgICAgLmFkZE9wdGlvbignYWR2YW5jZWQtbGlnaHQtdG9uYWwnLCdMb3cgY29udHJhc3QnKVxyXG4gICAgICAgICAgLmFkZE9wdGlvbignYWR2YW5jZWQtbGlnaHQtY29udHJhc3QnLCdIaWdoIGNvbnRyYXN0JylcclxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5saWdodFN0eWxlKVxyXG4gICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmxpZ2h0U3R5bGUgPSB2YWx1ZTtcclxuICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgICAgIHRoaXMucGx1Z2luLnJlbW92ZVN0eWxlKCk7XHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgLnNldE5hbWUoJ0RhcmsgbW9kZSBzdHlsZScpXHJcbiAgICAgICAgLnNldERlc2MoJ0JhY2tncm91bmQgY29sb3JzIGluIGRhcmsgbW9kZSwgY2FuIGJlIHRvZ2dsZWQgdmlhIGhvdGtleScpXHJcbiAgICAgICAgLmFkZERyb3Bkb3duKGRyb3Bkb3duID0+IGRyb3Bkb3duXHJcbiAgICAgICAgICAuYWRkT3B0aW9uKCdhZHZhbmNlZC1kYXJrJywnRGVmYXVsdCcpXHJcbiAgICAgICAgICAuYWRkT3B0aW9uKCdhZHZhbmNlZC1kYXJrLXRvbmFsJywnTG93IGNvbnRyYXN0JylcclxuICAgICAgICAgIC5hZGRPcHRpb24oJ2FkdmFuY2VkLWRhcmstYmxhY2snLCdUcnVlIGJsYWNrJylcclxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kYXJrU3R5bGUpXHJcbiAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmRhcmtTdHlsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlbW92ZVN0eWxlKCk7XHJcbiAgICAgICAgICB9KSk7XHJcblxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgIC5zZXROYW1lKCdVc2Ugc3lzdGVtIHNldHRpbmcgZm9yIGxpZ2h0IG9yIGRhcmsgbW9kZScpXHJcbiAgICAgIC5zZXREZXNjKCdBdXRvbWF0aWNhbGx5IHN3aXRjaCBiYXNlZCBvbiB5b3VyIG9wZXJhdGluZyBzeXN0ZW0gc2V0dGluZ3MnKVxyXG4gICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlU3lzdGVtVGhlbWUpXHJcbiAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnVzZVN5c3RlbVRoZW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaFN5c3RlbVRoZW1lKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdicicpO1xyXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywge3RleHQ6ICdBY2NlbnQgY29sb3InfSk7XHJcblxyXG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAuc2V0TmFtZSgnQWNjZW50IGNvbG9yIGh1ZScpXHJcbiAgICAgICAgLmFkZFNsaWRlcihzbGlkZXIgPT4gc2xpZGVyXHJcbiAgICAgICAgICAgIC5zZXRMaW1pdHMoMCwgMzYwLCAxKVxyXG4gICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYWNjZW50SHVlKVxyXG4gICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY2NlbnRIdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKCk7XHJcbiAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAuc2V0TmFtZSgnQWNjZW50IGNvbG9yIHNhdHVyYXRpb24nKVxyXG4gICAgICAgIC5hZGRTbGlkZXIoc2xpZGVyID0+IHNsaWRlclxyXG4gICAgICAgICAgICAuc2V0TGltaXRzKDAsIDEwMCwgMSlcclxuICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFjY2VudFNhdClcclxuICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWNjZW50U2F0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgLnNldE5hbWUoJ0FjY2VudCBjb2xvciBkYXJrbmVzcycpXHJcbiAgICAgICAgLmFkZFNsaWRlcihzbGlkZXIgPT4gc2xpZGVyXHJcbiAgICAgICAgICAgIC5zZXRMaW1pdHMoNDAsIDcwLCAxKVxyXG4gICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYWNjZW50TGlnaHQpXHJcbiAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjY2VudExpZ2h0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgfSkpO1xyXG5cclxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdicicpO1xyXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywge3RleHQ6ICdCYXNlIGNvbG9yJ30pO1xyXG5cclxuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgLnNldE5hbWUoJ0Jhc2UgY29sb3IgaHVlJylcclxuICAgICAgICAuYWRkU2xpZGVyKHNsaWRlciA9PiBzbGlkZXJcclxuICAgICAgICAgICAgLnNldExpbWl0cygwLCAzNjAsIDEpXHJcbiAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5iZ0h1ZSlcclxuICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYmdIdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKCk7XHJcbiAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAuc2V0TmFtZSgnQmFzZSBjb2xvciBzYXR1cmF0aW9uJylcclxuICAgICAgICAuYWRkU2xpZGVyKHNsaWRlciA9PiBzbGlkZXJcclxuICAgICAgICAgICAgLnNldExpbWl0cygwLCAxMDAsIDEpXHJcbiAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5iZ1NhdClcclxuICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYmdTYXQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKCk7XHJcbiAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAuc2V0TmFtZSgnQmFzZSBjb2xvciBkYXJrbmVzcycpXHJcbiAgICAgICAgLmFkZFNsaWRlcihzbGlkZXIgPT4gc2xpZGVyXHJcbiAgICAgICAgICAgIC5zZXRMaW1pdHMoMiwgNDAsIDEpXHJcbiAgICAgICAgICAgIC5zZXRWYWx1ZSgxMDAgLSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5iZ0xpZ2h0KVxyXG4gICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5iZ0xpZ2h0ID0gMTAwIC0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgfSkpO1xyXG5cclxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdicicpO1xyXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywge3RleHQ6ICdBcHBlYXJhbmNlJ30pO1xyXG5cclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAuc2V0TmFtZSgnRmFuY3kgY3Vyc29yJylcclxuICAgICAgLnNldERlc2MoJ1RoZSBlZGl0b3IgY3Vyc29yIHRha2VzIG9uIHlvdXIgYWNjZW50IGNvbG9yJylcclxuICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT4gdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmZhbmN5Q3Vyc29yKVxyXG4gICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5mYW5jeUN1cnNvciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgIC5zZXROYW1lKCdUcmltIGZpbGUgbmFtZXMgaW4gc2lkZWJhcnMnKVxyXG4gICAgICAuc2V0RGVzYygnVXNlIGVsbGlwc2VzIHRvIGZpdHMgZmlsZSBuYW1lcyBvbiBhIHNpbmdsZSBsaW5lJylcclxuICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT4gdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnRyaW1OYW1lcylcclxuICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudHJpbU5hbWVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgfSkpO1xyXG5cclxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAuc2V0TmFtZSgnUmVsYXRpb25zaGlwIGxpbmVzIGluIHByZXZpZXcnKVxyXG4gICAgICAuc2V0RGVzYygnU2hvdyB2ZXJ0aWNhbCBsaW5lcyB0aGF0IGNvbm5lY3QgcmVsYXRlZCBidWxsZXQgcG9pbnRzIGFuZCB0YXNrIGxpc3RzJylcclxuICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT4gdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnJlbGF0aW9uTGluZXNQcmV2aWV3KVxyXG4gICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5yZWxhdGlvbkxpbmVzUHJldmlldyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2goKTtcclxuICAgICAgICAgIH0pKTtcclxuXHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUoJ1JlbGF0aW9uc2hpcCBsaW5lcyBpbiBlZGl0IG1vZGUnKVxyXG4gICAgICAuc2V0RGVzYygnU2hvdyB2ZXJ0aWNhbCBsaW5lcyB0aGF0IGNvbm5lY3QgcmVsYXRlZCBidWxsZXQgcG9pbnRzIGFuZCB0YXNrIGxpc3RzJylcclxuICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT4gdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnJlbGF0aW9uTGluZXNFZGl0KVxyXG4gICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5yZWxhdGlvbkxpbmVzRWRpdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2goKTtcclxuICAgICAgICAgIH0pKTtcclxuXHJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnYnInKTtcclxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHt0ZXh0OiAnVHlwb2dyYXBoeSd9KTtcclxuXHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUoJ1VuZGVybGluZSBpbnRlcm5hbCBsaW5rcycpXHJcbiAgICAgIC5zZXREZXNjKCdTaG93IHVuZGVybGluZXMgb24gaW50ZXJuYWwgbGlua3MnKVxyXG4gICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudW5kZXJsaW5lSW50ZXJuYWwpXHJcbiAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnVuZGVybGluZUludGVybmFsID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUoJ1VuZGVybGluZSBleHRlcm5hbCBsaW5rcycpXHJcbiAgICAgIC5zZXREZXNjKCdTaG93IHVuZGVybGluZXMgb24gZXh0ZXJuYWwgbGlua3MnKVxyXG4gICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudW5kZXJsaW5lRXh0ZXJuYWwpXHJcbiAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnVuZGVybGluZUV4dGVybmFsID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUoJ0xpbmUgd2lkdGgnKVxyXG4gICAgICAuc2V0RGVzYygnVGhlIG1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgcGVyIGxpbmUgKGRlZmF1bHQgNDApJylcclxuICAgICAgLmFkZFRleHQodGV4dCA9PiB0ZXh0LnNldFBsYWNlaG9sZGVyKCc0MCcpXHJcbiAgICAgICAgLnNldFZhbHVlKCh0aGlzLnBsdWdpbi5zZXR0aW5ncy5saW5lV2lkdGggfHwgJycpICsgJycpXHJcbiAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubGluZVdpZHRoID0gcGFyc2VJbnQodmFsdWUudHJpbSgpKTtcclxuICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2goKTtcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgIC5zZXROYW1lKCdCb2R5IGZvbnQgc2l6ZScpXHJcbiAgICAgIC5zZXREZXNjKCdVc2VkIGZvciB0aGUgbWFpbiB0ZXh0IChkZWZhdWx0IDE2KScpXHJcbiAgICAgIC5hZGRUZXh0KHRleHQgPT4gdGV4dC5zZXRQbGFjZWhvbGRlcignMTYnKVxyXG4gICAgICAgIC5zZXRWYWx1ZSgodGhpcy5wbHVnaW4uc2V0dGluZ3MudGV4dE5vcm1hbCB8fCAnJykgKyAnJylcclxuICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZXh0Tm9ybWFsID0gcGFyc2VJbnQodmFsdWUudHJpbSgpKTtcclxuICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2goKTtcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgIC5zZXROYW1lKCdTaWRlYmFyIGZvbnQgc2l6ZScpXHJcbiAgICAgIC5zZXREZXNjKCdVc2VkIGZvciB0ZXh0IGluIHRoZSBzaWRlYmFycyAoZGVmYXVsdCAxMyknKVxyXG4gICAgICAuYWRkVGV4dCh0ZXh0ID0+IHRleHQuc2V0UGxhY2Vob2xkZXIoJzEzJylcclxuICAgICAgICAuc2V0VmFsdWUoKHRoaXMucGx1Z2luLnNldHRpbmdzLnRleHRTbWFsbCB8fCAnJykgKyAnJylcclxuICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZXh0U21hbGwgPSBwYXJzZUludCh2YWx1ZS50cmltKCkpO1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnYnInKTtcclxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHt0ZXh0OiAnRm9udHMnfSk7XHJcblxyXG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAuc2V0TmFtZSgnVGV4dCBmb250JylcclxuICAgICAgICAuc2V0RGVzYygnVXNlZCBpbiBwcmV2aWV3IG1vZGUg4oCUIHRoZSBmb250IG11c3QgYWxzbyBiZSBpbnN0YWxsZWQgb24geW91ciBjb21wdXRlcicpXHJcbiAgICAgICAgLmFkZERyb3Bkb3duKGRyb3Bkb3duID0+IGRyb3Bkb3duXHJcbiAgICAgICAgICAuYWRkT3B0aW9uKCctYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSVwiLFJvYm90byxPeHlnZW4tU2FucyxVYnVudHUsQ2FudGFyZWxsLHNhbnMtc2VyaWYnLCdTeXN0ZW0gZm9udCcpXHJcbiAgICAgICAgICAuYWRkT3B0aW9uKCdJbnRlcicsJ0ludGVyJylcclxuICAgICAgICAgIC5hZGRPcHRpb24oJ2lBIFdyaXRlciBNb25vIFMnLCdpQSBNb25vJylcclxuICAgICAgICAgIC5hZGRPcHRpb24oJ2lBIFdyaXRlciBEdW8gUycsJ2lBIER1bycpXHJcbiAgICAgICAgICAuYWRkT3B0aW9uKCdpQSBXcml0ZXIgUXVhdHRybyBTJywnaUEgUXVhdHRybycpXHJcbiAgICAgICAgICAuYWRkT3B0aW9uKCdTRk1vbm8tUmVndWxhcicsJ1NGIE1vbm8nKVxyXG4gICAgICAgICAgLmFkZE9wdGlvbignQ29uc29sYXMnLCdDb25zb2xhcycpXHJcbiAgICAgICAgICAuYWRkT3B0aW9uKCdSb2JvdG8gTW9ubycsJ1JvYm90byBNb25vJylcclxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZXh0Rm9udClcclxuICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRleHRGb250ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAuc2V0TmFtZSgnVUkgZm9udCcpXHJcbiAgICAgICAgLnNldERlc2MoJ1VzZWQgZm9yIFVJIGVsZW1lbnRzJylcclxuICAgICAgICAuYWRkRHJvcGRvd24oZHJvcGRvd24gPT4gZHJvcGRvd25cclxuICAgICAgICAgIC5hZGRPcHRpb24oJy1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsc2Fucy1zZXJpZicsJ1N5c3RlbSBmb250JylcclxuICAgICAgICAgIC5hZGRPcHRpb24oJ0ludGVyJywnSW50ZXInKVxyXG4gICAgICAgICAgLmFkZE9wdGlvbignaUEgV3JpdGVyIE1vbm8gUycsJ2lBIE1vbm8nKVxyXG4gICAgICAgICAgLmFkZE9wdGlvbignaUEgV3JpdGVyIER1byBTJywnaUEgRHVvJylcclxuICAgICAgICAgIC5hZGRPcHRpb24oJ2lBIFdyaXRlciBRdWF0dHJvIFMnLCdpQSBRdWF0dHJvJylcclxuICAgICAgICAgIC5hZGRPcHRpb24oJ1NGTW9uby1SZWd1bGFyJywnU0YgTW9ubycpXHJcbiAgICAgICAgICAuYWRkT3B0aW9uKCdDb25zb2xhcycsJ0NvbnNvbGFzJylcclxuICAgICAgICAgIC5hZGRPcHRpb24oJ1JvYm90byBNb25vJywnUm9ib3RvIE1vbm8nKVxyXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnVpRm9udClcclxuICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnVpRm9udCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgLnNldE5hbWUoJ0VkaXRvciBmb250JylcclxuICAgICAgICAuc2V0RGVzYygnVXNlZCBpbiBlZGl0IG1vZGUnKVxyXG4gICAgICAgIC5hZGREcm9wZG93bihkcm9wZG93biA9PiBkcm9wZG93blxyXG4gICAgICAgICAgLmFkZE9wdGlvbignLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUlcIixSb2JvdG8sT3h5Z2VuLVNhbnMsVWJ1bnR1LENhbnRhcmVsbCxzYW5zLXNlcmlmJywnU3lzdGVtIGZvbnQnKVxyXG4gICAgICAgICAgLmFkZE9wdGlvbignSW50ZXInLCdJbnRlcicpXHJcbiAgICAgICAgICAuYWRkT3B0aW9uKCdpQSBXcml0ZXIgTW9ubyBTJywnaUEgTW9ubycpXHJcbiAgICAgICAgICAuYWRkT3B0aW9uKCdpQSBXcml0ZXIgRHVvIFMnLCdpQSBEdW8nKVxyXG4gICAgICAgICAgLmFkZE9wdGlvbignaUEgV3JpdGVyIFF1YXR0cm8gUycsJ2lBIFF1YXR0cm8nKVxyXG4gICAgICAgICAgLmFkZE9wdGlvbignU0ZNb25vLVJlZ3VsYXInLCdTRiBNb25vJylcclxuICAgICAgICAgIC5hZGRPcHRpb24oJ0NvbnNvbGFzJywnQ29uc29sYXMnKVxyXG4gICAgICAgICAgLmFkZE9wdGlvbignUm9ib3RvIE1vbm8nLCdSb2JvdG8gTW9ubycpXHJcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZWRpdG9yRm9udClcclxuICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmVkaXRvckZvbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgIC5zZXROYW1lKCdNb25vc3BhY2UgZm9udCcpXHJcbiAgICAgICAgLnNldERlc2MoJ1VzZWQgZm9yIGNvZGUgYmxvY2tzLCBmcm9udCBtYXR0ZXIsIGV0YycpXHJcbiAgICAgICAgLmFkZERyb3Bkb3duKGRyb3Bkb3duID0+IGRyb3Bkb3duXHJcbiAgICAgICAgICAuYWRkT3B0aW9uKCdNZW5sbyxTRk1vbm8tUmVndWxhcixDb25zb2xhcyxSb2JvdG8gTW9ubyxtb25vc3BhY2UnLCdTeXN0ZW0gZm9udCcpXHJcbiAgICAgICAgICAuYWRkT3B0aW9uKCdpQSBXcml0ZXIgTW9ubyBTJywnaUEgTW9ubycpXHJcbiAgICAgICAgICAuYWRkT3B0aW9uKCdpQSBXcml0ZXIgRHVvIFMnLCdpQSBEdW8nKVxyXG4gICAgICAgICAgLmFkZE9wdGlvbignaUEgV3JpdGVyIFF1YXR0cm8gUycsJ2lBIFF1YXR0cm8nKVxyXG4gICAgICAgICAgLmFkZE9wdGlvbignU0ZNb25vLVJlZ3VsYXInLCdTRiBNb25vJylcclxuICAgICAgICAgIC5hZGRPcHRpb24oJ0NvbnNvbGFzJywnQ29uc29sYXMnKVxyXG4gICAgICAgICAgLmFkZE9wdGlvbignUm9ib3RvIE1vbm8nLCdSb2JvdG8gTW9ubycpXHJcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubW9ub0ZvbnQpXHJcbiAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tb25vRm9udCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdicicpO1xyXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywge3RleHQ6ICdDdXN0b20gZm9udHMnfSk7XHJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHt0ZXh0OiAnVGhlc2Ugc2V0dGluZ3Mgb3ZlcnJpZGUgdGhlIGRyb3Bkb3ducyBhYm92ZS4gTWFrZSBzdXJlIHRvIHVzZSB0aGUgZXhhY3QgbmFtZSBvZiB0aGUgZm9udCBhcyBpdCBhcHBlYXJzIG9uIHlvdXIgc3lzdGVtLid9KTtcclxuXHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUoJ0N1c3RvbSB0ZXh0IGZvbnQnKVxyXG4gICAgICAuc2V0RGVzYygnVXNlZCBpbiBwcmV2aWV3IG1vZGUnKVxyXG4gICAgICAuYWRkVGV4dCh0ZXh0ID0+IHRleHQuc2V0UGxhY2Vob2xkZXIoJycpXHJcbiAgICAgICAgLnNldFZhbHVlKCh0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZXh0Rm9udCB8fCAnJykgKyAnJylcclxuICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZXh0Rm9udCA9IHZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUoJ0N1c3RvbSBVSSBmb250JylcclxuICAgICAgLnNldERlc2MoJ1VzZWQgZm9yIFVJIGVsZW1lbnRzJylcclxuICAgICAgLmFkZFRleHQodGV4dCA9PiB0ZXh0LnNldFBsYWNlaG9sZGVyKCcnKVxyXG4gICAgICAgIC5zZXRWYWx1ZSgodGhpcy5wbHVnaW4uc2V0dGluZ3MudWlGb250IHx8ICcnKSArICcnKVxyXG4gICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnVpRm9udCA9IHZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUoJ0N1c3RvbSBlZGl0b3IgZm9udCcpXHJcbiAgICAgIC5zZXREZXNjKCdVc2VkIGluIGVkaXQgbW9kZScpXHJcbiAgICAgIC5hZGRUZXh0KHRleHQgPT4gdGV4dC5zZXRQbGFjZWhvbGRlcignJylcclxuICAgICAgICAuc2V0VmFsdWUoKHRoaXMucGx1Z2luLnNldHRpbmdzLmVkaXRvckZvbnQgfHwgJycpICsgJycpXHJcbiAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZWRpdG9yRm9udCA9IHZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUoJ0N1c3RvbSBtb25vc3BhY2UgZm9udCcpXHJcbiAgICAgIC5zZXREZXNjKCdVc2VkIGZvciBjb2RlIGJsb2NrcywgZnJvbnQgbWF0dGVyLCBldGMnKVxyXG4gICAgICAuYWRkVGV4dCh0ZXh0ID0+IHRleHQuc2V0UGxhY2Vob2xkZXIoJycpXHJcbiAgICAgICAgLnNldFZhbHVlKCh0aGlzLnBsdWdpbi5zZXR0aW5ncy5tb25vRm9udCB8fCAnJykgKyAnJylcclxuICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tb25vRm9udCA9IHZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xyXG4gICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQbHVnaW4iLCJTZXR0aW5nIiwiUGx1Z2luU2V0dGluZ1RhYiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekIsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUN4RSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0I7QUFDaEIsb0JBQW9CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7QUFDaEksb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDMUcsb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUN6RixvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3ZGLG9CQUFvQixJQUFJ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
