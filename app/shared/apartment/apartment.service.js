"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var apartment_1 = require("./apartment");
var config_1 = require("../config");
var ApartmentService = (function () {
    function ApartmentService(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append("Content-Type", "application/json");
    }
    ApartmentService.prototype.list = function (hotel_id) {
        console.log('hi');
        return this.http.get(config_1.Config.apiUrl + "/hotels/list_of_apartments?" +
            "token=" + config_1.Config.token +
            "&hotel_id=" + hotel_id, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var apartments = [];
            data.data.forEach(function (item) {
                apartments.push(new apartment_1.Apartment(item.id, item.description, item.number, item.hotel_id, config_1.Config.siteUrl + item.photo_url));
            });
            console.dump(apartments);
            return apartments;
        })
            .catch(this.handleErrors);
    };
    ApartmentService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return ApartmentService;
}());
ApartmentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ApartmentService);
exports.ApartmentService = ApartmentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBhcnRtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcGFydG1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHNDQUE4QztBQUM5Qyw4QkFBcUM7QUFDckMsaUNBQStCO0FBRS9CLHlDQUF3QztBQUN4QyxvQ0FBbUM7QUFHbkMsSUFBYSxnQkFBZ0I7SUFFM0IsMEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsK0JBQUksR0FBSixVQUFLLFFBQWdCO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixlQUFNLENBQUMsTUFBTSxHQUFHLDZCQUE2QjtZQUM3QixRQUFRLEdBQUcsZUFBTSxDQUFDLEtBQUs7WUFDdkIsWUFBWSxHQUFHLFFBQVEsRUFDdkMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUMxQjthQUNBLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNQLElBQUksVUFBVSxHQUFxQixFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJO2dCQUNyQixVQUFVLENBQUMsSUFBSSxDQUNiLElBQUkscUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUNQLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLFFBQVEsRUFDYixlQUFNLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQy9DLENBQ0csQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFSCx1QkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF2Q1ksZ0JBQWdCO0lBRDVCLGlCQUFVLEVBQUU7cUNBR2UsV0FBSTtHQUZuQixnQkFBZ0IsQ0F1QzVCO0FBdkNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5pbXBvcnQgeyBBcGFydG1lbnQgfSBmcm9tIFwiLi9hcGFydG1lbnRcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwYXJ0bWVudFNlcnZpY2UgeyAgICBcbiAgaGVhZGVyczogSGVhZGVycztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICB0aGlzLmhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgfVxuXG4gIGxpc3QoaG90ZWxfaWQ6IHN0cmluZykgeyAgICBcbiAgICBjb25zb2xlLmxvZygnaGknKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcIi9ob3RlbHMvbGlzdF9vZl9hcGFydG1lbnRzP1wiK1xuICAgICAgICAgICAgICAgICAgICAgIFwidG9rZW49XCIgKyBDb25maWcudG9rZW4rXG4gICAgICAgICAgICAgICAgICAgICAgXCImaG90ZWxfaWQ9XCIgKyBob3RlbF9pZCxcbiAgICAgIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH1cbiAgICApXG4gICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAubWFwKGRhdGEgPT4geyAgICAgIFxuICAgICAgbGV0IGFwYXJ0bWVudHM6IEFycmF5PEFwYXJ0bWVudD4gPSBbXTtcbiAgICAgIGRhdGEuZGF0YS5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgYXBhcnRtZW50cy5wdXNoKFxuICAgICAgICAgIG5ldyBBcGFydG1lbnQoaXRlbS5pZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubnVtYmVyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaG90ZWxfaWQsICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnLnNpdGVVcmwraXRlbS5waG90b191cmxcblx0XHRcdFx0XHQpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUuZHVtcChhcGFydG1lbnRzKTtcbiAgICAgIHJldHVybiBhcGFydG1lbnRzO1xuICAgIH0pXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gIH1cblxufSJdfQ==