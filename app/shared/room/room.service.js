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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQThDO0FBQzlDLDhCQUFxQztBQUNyQyxpQ0FBK0I7QUFFL0IsK0JBQThCO0FBQzlCLG9DQUFtQztBQUduQyxJQUFhLFdBQVc7SUFFdEIscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsMEJBQUksR0FBSixVQUFLLFlBQVk7UUFFZixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsd0JBQXdCO1lBQ3hCLFFBQVEsR0FBRyxlQUFNLENBQUMsS0FBSztZQUN2QixnQkFBZ0IsR0FBRyxZQUFZLEVBQy9DLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FDMUI7YUFDQSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUCxJQUFJLEtBQUssR0FBZ0IsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQUEsSUFBSTtnQkFDckIsS0FBSyxDQUFDLElBQUksQ0FDUixJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUNOLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFlBQVksRUFDakIsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUNsQixlQUFNLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDekMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFSCxrQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUF4Q1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUdlLFdBQUk7R0FGbkIsV0FBVyxDQXdDdkI7QUF4Q1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgUm9vbSB9IGZyb20gXCIuL3Jvb21cIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvb21TZXJ2aWNlIHsgICAgXG4gIGhlYWRlcnM6IEhlYWRlcnM7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgdGhpcy5oZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gIH1cblxuICBsaXN0KGFwYXJ0bWVudF9pZCkgeyAgICBcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgQ29uZmlnLmFwaVVybCArIFwiL2hvdGVscy9saXN0X29mX3Jvb21zP1wiK1xuICAgICAgICAgICAgICAgICAgICAgIFwidG9rZW49XCIgKyBDb25maWcudG9rZW4rXG4gICAgICAgICAgICAgICAgICAgICAgXCImYXBhcnRtZW50X2lkPVwiICsgYXBhcnRtZW50X2lkLCAgICAgIFxuICAgICAgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfVxuICAgIClcbiAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC5tYXAoZGF0YSA9PiB7ICAgICAgXG4gICAgICBsZXQgcm9vbXM6IEFycmF5PFJvb20+ID0gW107XG4gICAgICBkYXRhLmRhdGEuZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgIHJvb21zLnB1c2goXG4gICAgICAgICAgbmV3IFJvb20oaXRlbS5pZCwgXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgICAgICAgICBpdGVtLm51bWJlciwgXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYXBhcnRtZW50X2lkLCBcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wcmljZV9tb250aCxcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wcmljZV9zZWN1cmUsXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLnN0YXR1cyA9PSAwKSxcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlnLnNpdGVVcmwraXRlbS5waG90b191cmwpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByb29tcztcbiAgICB9KVxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICB9XG5cbn0iXX0=