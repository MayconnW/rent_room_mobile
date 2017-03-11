"use strict";
var Client = (function () {
    function Client(id, first_name, last_name, born, country, phone, photo_url) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.born = born;
        this.country = country;
        this.phone = phone;
        this.photo_url = photo_url;
    }
    Client.prototype.full_name = function () {
        return this.first_name + " " + this.last_name;
    };
    Client.prototype.formated_phone = function () {
        if (this.phone.length == 10) {
            return "(" + this.phone.substr(0, 3) + ") " + this.phone.substr(3, 3) + "-" + this.phone.substr(6, 4);
        }
        return this.phone;
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUVFLGdCQUFtQixFQUFVLEVBQ2pCLFVBQWtCLEVBQ2xCLFNBQWlCLEVBQ2pCLElBQVksRUFDWixPQUFlLEVBQ2YsS0FBYSxFQUNiLFNBQWlCO1FBTlYsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsY0FBUyxHQUFULFNBQVMsQ0FBUTtJQUFFLENBQUM7SUFFaEMsMEJBQVMsR0FBVDtRQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFFRCwrQkFBYyxHQUFkO1FBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztZQUM1QixNQUFNLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUYsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFRixhQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDbGllbnQge1xuICBcbiAgY29uc3RydWN0b3IocHVibGljIGlkOiBudW1iZXIsXG5cdFx0XHRcdFx0XHRcdHB1YmxpYyBmaXJzdF9uYW1lOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdHB1YmxpYyBsYXN0X25hbWU6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0cHVibGljIGJvcm46IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0cHVibGljIGNvdW50cnk6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0cHVibGljIHBob25lOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdHB1YmxpYyBwaG90b191cmw6IHN0cmluZyl7fSAgXG5cbiAgZnVsbF9uYW1lKCk6c3RyaW5ne1x0XHRcblx0XHRyZXR1cm4gdGhpcy5maXJzdF9uYW1lK1wiIFwiK3RoaXMubGFzdF9uYW1lO1x0XG5cdH1cblxuXHRmb3JtYXRlZF9waG9uZSgpOnN0cmluZ3tcblx0XHRpZiAodGhpcy5waG9uZS5sZW5ndGggPT0gMTApe1xuXHRcdFx0cmV0dXJuIFwiKFwiK3RoaXMucGhvbmUuc3Vic3RyKDAsMykrXCIpIFwiK3RoaXMucGhvbmUuc3Vic3RyKDMsMykrXCItXCIrdGhpcy5waG9uZS5zdWJzdHIoNiw0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucGhvbmU7XG5cdH1cblxufSJdfQ==