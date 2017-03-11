"use strict";
var Hotel = (function () {
    function Hotel(id, description, address, cep, free_rooms, photo_url) {
        this.id = id;
        this.description = description;
        this.address = address;
        this.cep = cep;
        this.free_rooms = free_rooms;
        this.photo_url = photo_url;
    }
    Hotel.prototype.full_address = function () {
        return this.address + " (" + this.cep + ")";
    };
    return Hotel;
}());
exports.Hotel = Hotel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob3RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFFRSxlQUFtQixFQUFVLEVBQ2pCLFdBQW1CLEVBQ25CLE9BQWUsRUFDZixHQUFXLEVBQ1gsVUFBa0IsRUFDbEIsU0FBaUI7UUFMVixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixjQUFTLEdBQVQsU0FBUyxDQUFRO0lBQUUsQ0FBQztJQUVqQyw0QkFBWSxHQUFaO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDO0lBQ3ZDLENBQUM7SUFDRixZQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIb3RlbCB7XG4gIFxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IG51bWJlcixcblx0XHRcdFx0XHRcdFx0cHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdHB1YmxpYyBhZGRyZXNzOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdHB1YmxpYyBjZXA6IHN0cmluZyxcblx0XHRcdFx0XHRcdFx0cHVibGljIGZyZWVfcm9vbXM6IHN0cmluZyxcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRwdWJsaWMgcGhvdG9fdXJsOiBzdHJpbmcpe30gIFxuXG5cdGZ1bGxfYWRkcmVzcygpOnN0cmluZ3tcdFx0XG5cdFx0cmV0dXJuIHRoaXMuYWRkcmVzcytcIiAoXCIrdGhpcy5jZXArXCIpXCI7XHRcblx0fVxufSAiXX0=