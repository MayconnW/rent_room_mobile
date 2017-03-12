"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var room_1 = require("./room");
var config_1 = require("../config");
var RoomService = (function () {
    function RoomService(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append("Content-Type", "application/json");
    }
    RoomService.prototype.list = function (apartment_id) {
        return this.http.get(config_1.Config.apiUrl + "/hotels/list_of_rooms?" +
            "token=" + config_1.Config.token +
            "&apartment_id=" + apartment_id, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var rooms = [];
            data.data.forEach(function (item) {
                rooms.push(new room_1.Room(item.id, item.description, item.number, item.apartment_id, item.price_month, item.price_secure, (item.status == 0), config_1.Config.siteUrl + item.photo_url));
            });
            return rooms;
        })
            .catch(this.handleErrors);
    };
    RoomService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return RoomService;
}());
RoomService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RoomService);
exports.RoomService = RoomService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQThDO0FBQzlDLDhCQUFxQztBQUNyQyxpQ0FBK0I7QUFFL0IsK0JBQThCO0FBQzlCLG9DQUFtQztBQUduQyxJQUFhLFdBQVc7SUFFdEIscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsMEJBQUksR0FBSixVQUFLLFlBQVk7UUFFZixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsd0JBQXdCO1lBQ3hCLFFBQVEsR0FBRyxlQUFNLENBQUMsS0FBSztZQUN2QixnQkFBZ0IsR0FBRyxZQUFZLEVBQy9DLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FDMUI7YUFDQSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUCxJQUFJLEtBQUssR0FBZ0IsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQUEsSUFBSTtnQkFDckIsS0FBSyxDQUFDLElBQUksQ0FDUixJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUNSLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFlBQVksRUFDakIsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUNsQixlQUFNLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDdkMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFSCxrQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUF4Q1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUdlLFdBQUk7R0FGbkIsV0FBVyxDQXdDdkI7QUF4Q1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgUm9vbSB9IGZyb20gXCIuL3Jvb21cIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvb21TZXJ2aWNlIHsgICAgXG4gIGhlYWRlcnM6IEhlYWRlcnM7ICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICB0aGlzLmhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgfVxuXG4gIGxpc3QoYXBhcnRtZW50X2lkKSB7ICAgIFxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXG4gICAgICBDb25maWcuYXBpVXJsICsgXCIvaG90ZWxzL2xpc3Rfb2Zfcm9vbXM/XCIrXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0b2tlbj1cIiArIENvbmZpZy50b2tlbitcbiAgICAgICAgICAgICAgICAgICAgICBcIiZhcGFydG1lbnRfaWQ9XCIgKyBhcGFydG1lbnRfaWQsICAgICAgXG4gICAgICB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9XG4gICAgKVxuICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLm1hcChkYXRhID0+IHsgICAgICBcbiAgICAgIGxldCByb29tczogQXJyYXk8Um9vbT4gPSBbXTtcbiAgICAgIGRhdGEuZGF0YS5mb3JFYWNoKCBpdGVtID0+IHsgICAgICAgIFxuICAgICAgICByb29tcy5wdXNoKFxuICAgICAgICAgIG5ldyBSb29tKGl0ZW0uaWQsIFxuICAgICAgICAgICAgICAgICAgaXRlbS5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgICBpdGVtLm51bWJlciwgXG4gICAgICAgICAgICAgICAgICBpdGVtLmFwYXJ0bWVudF9pZCwgXG4gICAgICAgICAgICAgICAgICBpdGVtLnByaWNlX21vbnRoLFxuICAgICAgICAgICAgICAgICAgaXRlbS5wcmljZV9zZWN1cmUsXG4gICAgICAgICAgICAgICAgICAoaXRlbS5zdGF0dXMgPT0gMCksXG4gICAgICAgICAgICAgICAgICBDb25maWcuc2l0ZVVybCtpdGVtLnBob3RvX3VybClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJvb21zO1xuICAgIH0pXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gIH1cblxufSJdfQ==