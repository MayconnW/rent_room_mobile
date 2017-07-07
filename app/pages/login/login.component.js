"use strict";
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
var LoginComponent = (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = 'adm@adm.com';
        this.user.password = 'a1s2d3f4';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_hotel";
    };
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function (response) {
            if (response.token != '') {
                _this.page.actionBarHidden = false;
                _this.page.backgroundImage = "";
                _this.router.navigate(["/initial"]);
            }
            else {
                alert(response.message);
            }
        }, function (error) { return alert(error.message); });
    };
    LoginComponent.prototype.signUp = function () {
        this.userService.register(this.user);
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        this.container.nativeElement
            .animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: 'login.html',
        styleUrls: ["login-common.css", "login.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFDekUsK0NBQThDO0FBQzlDLCtEQUE2RDtBQUM3RCwwQ0FBeUM7QUFDekMsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQVU5QixJQUFhLGNBQWM7SUFLekIsd0JBQW9CLE1BQWMsRUFBVSxXQUF3QixFQUFVLElBQVU7UUFBcEUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUh4RixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUkxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQztJQUMvQyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDaEMsU0FBUyxDQUNSLFVBQUEsUUFBUTtZQUNOLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUNsQyxLQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNyQyxDQUFDO1lBQUEsSUFBSSxDQUFBLENBQUM7Z0JBQ0osS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQixDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBcEIsQ0FBb0IsQ0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhO2FBQzNCLE9BQU8sQ0FBQztZQUNQLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQztZQUM3RSxRQUFRLEVBQUUsR0FBRztTQUNkLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFwREQsSUFvREM7QUFqRHlCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLGlCQUFVO2lEQUFDO0FBSG5DLGNBQWM7SUFQMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSxZQUFZO1FBQ3pCLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQztLQUM3QyxDQUFDO3FDQU00QixlQUFNLEVBQXVCLDBCQUFXLEVBQWdCLFdBQUk7R0FMN0UsY0FBYyxDQW9EMUI7QUFwRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6ICdsb2dpbi5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXCJsb2dpbi1jb21tb24uY3NzXCIsIFwibG9naW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHsgIFxuICB1c2VyOiBVc2VyO1xuICBpc0xvZ2dpbmdJbjogQm9vbGVhbiA9IHRydWU7XG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2Upe1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdGhpcy51c2VyLmVtYWlsID0gJ2FkbUBhZG0uY29tJztcbiAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSAnYTFzMmQzZjQnXG4gIH1cblxuICBuZ09uSW5pdCgpIHsgICAgXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfaG90ZWxcIjtcbiAgfVxuXG4gIHN1Ym1pdCgpIHsgICAgXG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICB9XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcbiAgICAuc3Vic2NyaWJlKFxuICAgICAgcmVzcG9uc2UgPT4geyAgICAgICAgIFxuICAgICAgICBpZiAocmVzcG9uc2UudG9rZW4gIT0gJycpe1xuICAgICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJcIjtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaW5pdGlhbFwiXSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IGFsZXJ0KGVycm9yLm1lc3NhZ2UpXG4gICAgKTtcbiAgfVxuICBcbiAgc2lnblVwKCkge1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKTtcbiAgfVxuXG4gIHRvZ2dsZURpc3BsYXkoKSB7ICAgIFxuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgICA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50XG4gICAgICAgICAgLmFuaW1hdGUoe1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmlzTG9nZ2luZ0luID8gbmV3IENvbG9yKFwid2hpdGVcIikgOiBuZXcgQ29sb3IoXCIjMzAxMjE3XCIpLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMFxuICAgICAgICAgIH0pO1xuICB9XG59ICJdfQ==