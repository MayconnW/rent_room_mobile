"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var hotel_1 = require("./hotel");
var config_1 = require("../config");
var HotelService = (function () {
    function HotelService(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append("Content-Type", "application/json");
    }
    HotelService.prototype.list = function () {
        return this.http.get(config_1.Config.apiUrl + "/hotels?token=" + config_1.Config.token, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var hotels = [];
            data.data.forEach(function (item) {
                hotels.push(new hotel_1.Hotel(item.id, item.description, item.address, item.cep, item.free_rooms, config_1.Config.siteUrl + item.photo_url));
            });
            return hotels;
        })
            .catch(this.handleErrors);
    };
    HotelService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return HotelService;
}());
HotelService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HotelService);
exports.HotelService = HotelService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdGVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyxzQ0FBOEM7QUFDOUMsOEJBQXFDO0FBQ3JDLGlDQUErQjtBQUUvQixpQ0FBZ0M7QUFDaEMsb0NBQW1DO0FBR25DLElBQWEsWUFBWTtJQUV2QixzQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBRUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixlQUFNLENBQUMsTUFBTSxHQUFHLGdCQUFnQixHQUFHLGVBQU0sQ0FBQyxLQUFLLEVBQy9DLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FDMUI7YUFDQSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUCxJQUFJLE1BQU0sR0FBaUIsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQUEsSUFBSTtnQkFDckIsTUFBTSxDQUFDLElBQUksQ0FDVCxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUNqQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxHQUFHLEVBQ1IsSUFBSSxDQUFDLFVBQVUsRUFDZixlQUFNLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQ2pDLENBQ0csQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUgsbUJBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDO0FBckNZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTtxQ0FHZSxXQUFJO0dBRm5CLFlBQVksQ0FxQ3hCO0FBckNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmltcG9ydCB7IEhvdGVsIH0gZnJvbSBcIi4vaG90ZWxcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhvdGVsU2VydmljZSB7ICAgIFxuICBoZWFkZXJzOiBIZWFkZXJzO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIHRoaXMuaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICB9XG5cbiAgbGlzdCgpIHsgICAgXG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcIi9ob3RlbHM/dG9rZW49XCIgKyBDb25maWcudG9rZW4sXG4gICAgICB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9XG4gICAgKVxuICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLm1hcChkYXRhID0+IHsgICAgICBcbiAgICAgIGxldCBob3RlbHM6IEFycmF5PEhvdGVsPiA9IFtdO1xuICAgICAgZGF0YS5kYXRhLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICBob3RlbHMucHVzaChcbiAgICAgICAgICBuZXcgSG90ZWwoaXRlbS5pZCwgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0uZGVzY3JpcHRpb24sIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmFkZHJlc3MsIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmNlcCwgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0uZnJlZV9yb29tcyxcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRDb25maWcuc2l0ZVVybCtpdGVtLnBob3RvX3VybFxuXHRcdFx0XHRcdClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGhvdGVscztcbiAgICB9KVxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICB9XG5cbn0iXX0=