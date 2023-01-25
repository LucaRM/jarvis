"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TempRequestFinder = void 0;
const inversify_1 = require("inversify");
let TempRequestFinder = class TempRequestFinder {
    constructor() {
        this.regexp = [
            "qual a temperatura?",
            "qual a temperatura de hoje",
            "vai fazer calor hoje?",
            "vai fazer frio hoje?",
        ];
    }
    isTempRequest(stringToSearch) {
        return this.regexp.indexOf(stringToSearch.toLowerCase()) !== -1;
    }
};
TempRequestFinder = __decorate([
    inversify_1.injectable()
], TempRequestFinder);
exports.TempRequestFinder = TempRequestFinder;
//# sourceMappingURL=temp-request-finder.js.map