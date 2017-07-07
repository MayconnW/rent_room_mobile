"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var user_api_1 = require("./user.api");
var config_1 = require("../config");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append("Content-Type", "application/json");
    }
    UserService.prototype.register = function (user) {
        alert("About to register: " + user.email);
    };
    UserService.prototype.login = function (user) {
        return this.http.post(config_1.Config.apiUrl + "/login_api", JSON.stringify({
            email: user.email,
            pass: user.password
        }), { headers: this.headers })
            .map(function (res) {
            var response = res.json();
            var responseUser = response.data.user;
            var data = { id: responseUser && responseUser.id ? responseUser.id : '',
                email: responseUser && responseUser.email ? responseUser.email : '',
                name: responseUser && responseUser.name ? responseUser.name : '',
                photo_url: responseUser && responseUser.photo_url ? responseUser.photo_url : '',
                token: response.data.token ? response.data.token : '',
                message: response.message ? response.message : '',
                status: response.status };
            return data;
        })
            .do(function (data) {
            if (data.status == 'success' && data.token != '') {
                config_1.Config.token = data.token;
                config_1.Config.userApi = new user_api_1.UserApi(data.id, data.email, data.name, config_1.Config.siteUrl + data.photo_url);
            }
            else {
                config_1.Config.token = '';
            }
        })
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBQ3hELDhCQUFxQztBQUNyQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRy9CLHVDQUFxQztBQUNyQyxvQ0FBbUM7QUFHbkMsSUFBYSxXQUFXO0lBRXRCLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2pCLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBRWQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixlQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksRUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDcEIsQ0FBQyxFQUNGLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FDMUI7YUFDQSxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ04sSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3RDLElBQUksSUFBSSxHQUFHLEVBQUMsRUFBRSxFQUFFLFlBQVksSUFBSSxZQUFZLENBQUMsRUFBRSxHQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUMsRUFBRTtnQkFDdEQsS0FBSyxFQUFFLFlBQVksSUFBSSxZQUFZLENBQUMsS0FBSyxHQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUMsRUFBRTtnQkFDL0QsSUFBSSxFQUFFLFlBQVksSUFBSSxZQUFZLENBQUMsSUFBSSxHQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUMsRUFBRTtnQkFDNUQsU0FBUyxFQUFFLFlBQVksSUFBSSxZQUFZLENBQUMsU0FBUyxHQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUMsRUFBRTtnQkFDM0UsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLEVBQUU7Z0JBQ2pELE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxHQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUMsRUFBRTtnQkFDN0MsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLFVBQUEsSUFBSTtZQUNOLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDaEQsZUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMxQixlQUFNLENBQUMsT0FBTyxHQUFHLElBQUksa0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUNQLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLElBQUksRUFDVCxlQUFNLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBQUEsSUFBSSxDQUFBLENBQUM7Z0JBQ0osZUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDcEIsQ0FBQztRQUNILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFSCxrQkFBQztBQUFELENBQUMsQUFwREQsSUFvREM7QUFwRFksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUdlLFdBQUk7R0FGbkIsV0FBVyxDQW9EdkI7QUFwRFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IHsgVXNlckFwaSB9IGZyb20gXCIuL3VzZXIuYXBpXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7ICAgIFxuICBoZWFkZXJzOiBIZWFkZXJzO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIHRoaXMuaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICB9XG5cbiAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xuICAgIGFsZXJ0KFwiQWJvdXQgdG8gcmVnaXN0ZXI6IFwiICsgdXNlci5lbWFpbCk7XG4gIH1cblxuICBsb2dpbih1c2VyOiBVc2VyKSB7ICAgIFxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgQ29uZmlnLmFwaVVybCArIFwiL2xvZ2luX2FwaVwiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCwgICAgICAgIFxuICAgICAgICBwYXNzOiB1c2VyLnBhc3N3b3JkXG4gICAgICB9KSxcbiAgICAgIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH1cbiAgICApXG4gICAgLm1hcChyZXMgPT4ge1xuICAgICAgbGV0IHJlc3BvbnNlID0gcmVzLmpzb24oKTsgICAgICBcbiAgICAgIGxldCByZXNwb25zZVVzZXIgPSByZXNwb25zZS5kYXRhLnVzZXI7XG4gICAgICBsZXQgZGF0YSA9IHtpZDogcmVzcG9uc2VVc2VyICYmIHJlc3BvbnNlVXNlci5pZD9yZXNwb25zZVVzZXIuaWQ6JycsXG4gICAgICAgICAgICAgICAgICBlbWFpbDogcmVzcG9uc2VVc2VyICYmIHJlc3BvbnNlVXNlci5lbWFpbD9yZXNwb25zZVVzZXIuZW1haWw6JycsXG4gICAgICAgICAgICAgICAgICBuYW1lOiByZXNwb25zZVVzZXIgJiYgcmVzcG9uc2VVc2VyLm5hbWU/cmVzcG9uc2VVc2VyLm5hbWU6JycsXG4gICAgICAgICAgICAgICAgICBwaG90b191cmw6IHJlc3BvbnNlVXNlciAmJiByZXNwb25zZVVzZXIucGhvdG9fdXJsP3Jlc3BvbnNlVXNlci5waG90b191cmw6JycsXG4gICAgICAgICAgICAgICAgICB0b2tlbjogcmVzcG9uc2UuZGF0YS50b2tlbj9yZXNwb25zZS5kYXRhLnRva2VuOicnLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UubWVzc2FnZT9yZXNwb25zZS5tZXNzYWdlOicnLFxuICAgICAgICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXN9O1xuICAgICAgcmV0dXJuIGRhdGE7ICAgICAgXG4gICAgfSlcbiAgICAuZG8oZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnICYmIGRhdGEudG9rZW4gIT0gJycpe1xuICAgICAgICBDb25maWcudG9rZW4gPSBkYXRhLnRva2VuOyBcbiAgICAgICAgQ29uZmlnLnVzZXJBcGkgPSBuZXcgVXNlckFwaShkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZy5zaXRlVXJsK2RhdGEucGhvdG9fdXJsKTtcbiAgICAgIH1lbHNleyAgICAgICAgXG4gICAgICAgIENvbmZpZy50b2tlbiA9ICcnO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gIH1cblxufSJdfQ==