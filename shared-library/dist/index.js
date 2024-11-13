"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateService = void 0;
console.log('MODULE LOADED');
class SharedStateService {
    constructor() {
        this.data = "";
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
}
exports.stateService = new SharedStateService();
