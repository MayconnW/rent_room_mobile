"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var client_1 = require("./client");
var config_1 = require("../config");
var ClientService = (function () {
    function ClientService(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append("Content-Type", "application/json");
    }
    ClientService.prototype.list = function () {
        return this.http.get(config_1.Config.apiUrl + "/clients?token=" + config_1.Config.token, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var clients = [];
            data.data.forEach(function (item) {
                clients.push(new client_1.Client(item.id, item.first_name, item.last_name, item.born, item.country, item.phone, config_1.Config.siteUrl + item.photo_url));
            });
            return clients;
        })
            .catch(this.handleErrors);
    };
    ClientService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return ClientService;
}());
ClientService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGllbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHNDQUE4QztBQUM5Qyw4QkFBcUM7QUFDckMsaUNBQStCO0FBRS9CLG1DQUFrQztBQUNsQyxvQ0FBbUM7QUFHbkMsSUFBYSxhQUFhO0lBRXhCLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFFRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLEdBQUcsZUFBTSxDQUFDLEtBQUssRUFDaEQsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUMxQjthQUNBLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNQLElBQUksT0FBTyxHQUFrQixFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJO2dCQUNyQixPQUFPLENBQUMsSUFBSSxDQUNWLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLEtBQUssRUFDVixlQUFNLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQ2pDLENBQ0csQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLEFBdENELElBc0NDO0FBdENZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtxQ0FHZSxXQUFJO0dBRm5CLGFBQWEsQ0FzQ3pCO0FBdENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmltcG9ydCB7IENsaWVudCB9IGZyb20gXCIuL2NsaWVudFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpZW50U2VydmljZSB7ICAgIFxuICBoZWFkZXJzOiBIZWFkZXJzO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIHRoaXMuaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICB9XG5cbiAgbGlzdCgpIHsgICAgXG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcIi9jbGllbnRzP3Rva2VuPVwiICsgQ29uZmlnLnRva2VuLFxuICAgICAgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfVxuICAgIClcbiAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC5tYXAoZGF0YSA9PiB7ICAgICAgXG4gICAgICBsZXQgY2xpZW50czogQXJyYXk8Q2xpZW50PiA9IFtdO1xuICAgICAgZGF0YS5kYXRhLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICBjbGllbnRzLnB1c2goXG4gICAgICAgICAgbmV3IENsaWVudChpdGVtLmlkLCBcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5maXJzdF9uYW1lLCBcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5sYXN0X25hbWUsIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmJvcm4sIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmNvdW50cnksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0ucGhvbmUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdENvbmZpZy5zaXRlVXJsK2l0ZW0ucGhvdG9fdXJsXG5cdFx0XHRcdFx0KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2xpZW50cztcbiAgICB9KVxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICB9XG5cbn0iXX0=