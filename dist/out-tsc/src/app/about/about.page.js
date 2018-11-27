var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ApiCallService } from "../api-call.service";
import * as moment from 'moment';
var AboutPage = /** @class */ (function () {
    function AboutPage(apiCallService) {
        this.apiCallService = apiCallService;
    }
    AboutPage.prototype.ngOnInit = function () {
        this.showEvent();
    };
    AboutPage.prototype.showEvent = function () {
        var _this = this;
        this.apiCallService.getEvent()
            .subscribe(function (data) {
            _this.events = data.rows;
            console.log(_this.events);
        });
    };
    AboutPage.prototype.getDate = function (date) {
        var time = moment(date).format('D / MM / YYYY à H:mm');
        return time;
    };
    AboutPage = __decorate([
        Component({
            selector: 'app-about',
            templateUrl: 'about.page.html',
            styleUrls: ['about.page.scss']
        }),
        __metadata("design:paramtypes", [ApiCallService])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.page.js.map