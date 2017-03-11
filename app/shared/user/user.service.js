"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
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
            var data = { email: response.data.user && response.data.user.email ? response.data.user.email : '',
                name: response.data.user && response.data.user.name ? response.data.user.name : '',
                token: response.data.token ? response.data.token : '',
                message: response.message ? response.message : '',
                status: response.status };
            return data;
        })
            .do(function (data) {
            if (data.status == 'success' && data.token != '') {
                config_1.Config.token = data.token;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBQ3hELDhCQUFxQztBQUNyQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRy9CLG9DQUFtQztBQUduQyxJQUFhLFdBQVc7SUFFdEIscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsS0FBSyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLElBQVU7UUFFZCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLGVBQU0sQ0FBQyxNQUFNLEdBQUcsWUFBWSxFQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtTQUNwQixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUMxQjthQUNBLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDTixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBSSxJQUFJLEdBQUcsRUFBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxFQUFFO2dCQUNqRixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxFQUFFO2dCQUM5RSxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsRUFBRTtnQkFDakQsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLEdBQUMsUUFBUSxDQUFDLE9BQU8sR0FBQyxFQUFFO2dCQUM3QyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7YUFDRCxFQUFFLENBQUMsVUFBQSxJQUFJO1lBQ04sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUNoRCxlQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDNUIsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNKLGVBQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLENBQUM7UUFDSCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUgsa0JBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDO0FBN0NZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FHZSxXQUFJO0dBRm5CLFdBQVcsQ0E2Q3ZCO0FBN0NZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHsgICAgXG4gIGhlYWRlcnM6IEhlYWRlcnM7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgdGhpcy5oZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gIH1cblxuICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XG4gICAgYWxlcnQoXCJBYm91dCB0byByZWdpc3RlcjogXCIgKyB1c2VyLmVtYWlsKTtcbiAgfVxuXG4gIGxvZ2luKHVzZXI6IFVzZXIpIHsgICAgXG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICBDb25maWcuYXBpVXJsICsgXCIvbG9naW5fYXBpXCIsXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLCAgICAgICAgXG4gICAgICAgIHBhc3M6IHVzZXIucGFzc3dvcmRcbiAgICAgIH0pLFxuICAgICAgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfVxuICAgIClcbiAgICAubWFwKHJlcyA9PiB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSByZXMuanNvbigpOyAgICAgIFxuICAgICAgbGV0IGRhdGEgPSB7ZW1haWw6IHJlc3BvbnNlLmRhdGEudXNlciAmJiByZXNwb25zZS5kYXRhLnVzZXIuZW1haWw/cmVzcG9uc2UuZGF0YS51c2VyLmVtYWlsOicnLFxuICAgICAgICAgICAgICAgICAgbmFtZTogcmVzcG9uc2UuZGF0YS51c2VyICYmIHJlc3BvbnNlLmRhdGEudXNlci5uYW1lP3Jlc3BvbnNlLmRhdGEudXNlci5uYW1lOicnLFxuICAgICAgICAgICAgICAgICAgdG9rZW46IHJlc3BvbnNlLmRhdGEudG9rZW4/cmVzcG9uc2UuZGF0YS50b2tlbjonJyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLm1lc3NhZ2U/cmVzcG9uc2UubWVzc2FnZTonJyxcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzfTtcbiAgICAgIHJldHVybiBkYXRhOyAgICAgIFxuICAgIH0pXG4gICAgLmRvKGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyAmJiBkYXRhLnRva2VuICE9ICcnKXtcbiAgICAgICAgQ29uZmlnLnRva2VuID0gZGF0YS50b2tlbjsgICAgICAgIFxuICAgICAgfWVsc2V7ICAgICAgICBcbiAgICAgICAgQ29uZmlnLnRva2VuID0gJyc7ICAgICAgICBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICB9XG5cbn0iXX0=