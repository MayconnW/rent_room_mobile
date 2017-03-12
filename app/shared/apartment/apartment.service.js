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
        return this.http.get(config_1.Config.apiUrl + "/hotels/list_of_apartments?" +
            "token=" + config_1.Config.token +
            "&hotel_id=" + hotel_id, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var apartments = [];
            data.data.forEach(function (item) {
                apartments.push(new apartment_1.Apartment(item.id, item.description, item.number, item.hotel_id, config_1.Config.siteUrl + item.photo_url));
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBhcnRtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcGFydG1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHNDQUE4QztBQUM5Qyw4QkFBcUM7QUFDckMsaUNBQStCO0FBRS9CLHlDQUF3QztBQUN4QyxvQ0FBbUM7QUFHbkMsSUFBYSxnQkFBZ0I7SUFFM0IsMEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsK0JBQUksR0FBSixVQUFLLFFBQWdCO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsZUFBTSxDQUFDLE1BQU0sR0FBRyw2QkFBNkI7WUFDN0IsUUFBUSxHQUFHLGVBQU0sQ0FBQyxLQUFLO1lBQ3ZCLFlBQVksR0FBRyxRQUFRLEVBQ3ZDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FDMUI7YUFDQSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUCxJQUFJLFVBQVUsR0FBcUIsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQUEsSUFBSTtnQkFDckIsVUFBVSxDQUFDLElBQUksQ0FDYixJQUFJLHFCQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFDUCxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxRQUFRLEVBQ2IsZUFBTSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsU0FBUyxDQUMvQyxDQUNHLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVILHVCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQXJDWSxnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtxQ0FHZSxXQUFJO0dBRm5CLGdCQUFnQixDQXFDNUI7QUFyQ1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmltcG9ydCB7IEFwYXJ0bWVudCB9IGZyb20gXCIuL2FwYXJ0bWVudFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBhcnRtZW50U2VydmljZSB7ICAgIFxuICBoZWFkZXJzOiBIZWFkZXJzO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIHRoaXMuaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICB9XG5cbiAgbGlzdChob3RlbF9pZDogc3RyaW5nKSB7ICAgICAgICBcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcIi9ob3RlbHMvbGlzdF9vZl9hcGFydG1lbnRzP1wiK1xuICAgICAgICAgICAgICAgICAgICAgIFwidG9rZW49XCIgKyBDb25maWcudG9rZW4rXG4gICAgICAgICAgICAgICAgICAgICAgXCImaG90ZWxfaWQ9XCIgKyBob3RlbF9pZCxcbiAgICAgIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH1cbiAgICApXG4gICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAubWFwKGRhdGEgPT4geyAgICAgIFxuICAgICAgbGV0IGFwYXJ0bWVudHM6IEFycmF5PEFwYXJ0bWVudD4gPSBbXTtcbiAgICAgIGRhdGEuZGF0YS5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgYXBhcnRtZW50cy5wdXNoKFxuICAgICAgICAgIG5ldyBBcGFydG1lbnQoaXRlbS5pZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubnVtYmVyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaG90ZWxfaWQsICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnLnNpdGVVcmwraXRlbS5waG90b191cmxcblx0XHRcdFx0XHQpXG4gICAgICAgICk7XG4gICAgICB9KTsgICAgICBcbiAgICAgIHJldHVybiBhcGFydG1lbnRzO1xuICAgIH0pXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gIH1cblxufSJdfQ==