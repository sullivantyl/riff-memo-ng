"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tab_service_service_1 = require("../tab-service/tab-service.service");
var TabViewComponent = (function () {
    function TabViewComponent(tabService) {
        this.tabService = tabService;
    }
    TabViewComponent.prototype.ngOnInit = function () {
        this.tabs = this.tabService.get();
    };
    return TabViewComponent;
}());
TabViewComponent = __decorate([
    core_1.Component({
        selector: 'tab-view',
        templateUrl: 'app/tab-view/tab-view.component.html'
    }),
    __metadata("design:paramtypes", [tab_service_service_1.TabService])
], TabViewComponent);
exports.TabViewComponent = TabViewComponent;
//# sourceMappingURL=tab-view.component.js.map