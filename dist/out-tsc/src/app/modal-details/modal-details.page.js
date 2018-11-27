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
import { ModalController, NavParams } from '@ionic/angular';
import { ApiCallService } from "../api-call.service";
import * as moment from 'moment';
var ModalDetailsPage = /** @class */ (function () {
    function ModalDetailsPage(apiCallService, modalController, navParams) {
        this.apiCallService = apiCallService;
        this.modalController = modalController;
        this.navParams = navParams;
        this.val = this.navParams.get('value');
    }
    ModalDetailsPage.prototype.ngOnInit = function () {
        this.getEvent();
    };
    ModalDetailsPage.prototype.getEvent = function () {
        var _this = this;
        this.apiCallService.getEvent()
            .subscribe(function (data) {
            _this.events = data.rows;
            _this.events.forEach(function (element) {
                if (element.id == _this.val) {
                    _this.event = element;
                }
            });
        });
    };
    ModalDetailsPage.prototype.getDate = function (date) {
        var time = moment(date).format('D / MM / YYYY à H:mm');
        return time;
    };
    ModalDetailsPage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    ModalDetailsPage = __decorate([
        Component({
            selector: 'app-modal-details',
            templateUrl: './modal-details.page.html',
            styleUrls: ['./modal-details.page.scss'],
        }),
        __metadata("design:paramtypes", [ApiCallService, ModalController, NavParams])
    ], ModalDetailsPage);
    return ModalDetailsPage;
}());
export { ModalDetailsPage };
//# sourceMappingURL=modal-details.page.js.map