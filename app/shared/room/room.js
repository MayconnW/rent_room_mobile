"use strict";
var Room = (function () {
    function Room(id, description, number, apartment_id, price_month, price_secure, free, photo_url) {
        this.id = id;
        this.description = description;
        this.number = number;
        this.apartment_id = apartment_id;
        this.price_month = price_month;
        this.price_secure = price_secure;
        this.free = free;
        this.photo_url = photo_url;
    }
    Room.prototype.formatPrice = function (price) {
        return "C$" + price.toFixed(2);
    };
    return Room;
}());
exports.Room = Room;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBRUUsY0FBbUIsRUFBVSxFQUNqQixXQUFtQixFQUNuQixNQUFjLEVBQ2QsWUFBb0IsRUFDcEIsV0FBbUIsRUFDbkIsWUFBb0IsRUFDcEIsSUFBYSxFQUNiLFNBQWlCO1FBUFYsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBUztRQUNiLGNBQVMsR0FBVCxTQUFTLENBQVE7SUFBRSxDQUFDO0lBRWhDLDBCQUFXLEdBQVgsVUFBWSxLQUFhO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUgsV0FBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUm9vbSB7XG4gIFxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IG51bWJlcixcblx0XHRcdFx0XHRcdFx0cHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdHB1YmxpYyBudW1iZXI6IG51bWJlcixcblx0XHRcdFx0XHRcdFx0cHVibGljIGFwYXJ0bWVudF9pZDogbnVtYmVyLFxuXHRcdFx0XHRcdFx0XHRwdWJsaWMgcHJpY2VfbW9udGg6IG51bWJlcixcblx0XHRcdFx0XHRcdFx0cHVibGljIHByaWNlX3NlY3VyZTogbnVtYmVyLFxuXHRcdFx0XHRcdFx0XHRwdWJsaWMgZnJlZTogYm9vbGVhbixcblx0XHRcdFx0XHRcdFx0cHVibGljIHBob3RvX3VybDogc3RyaW5nKXt9ICBcblxuICBmb3JtYXRQcmljZShwcmljZTogbnVtYmVyKTpzdHJpbmd7XG4gICAgcmV0dXJuIFwiQyRcIiArIHByaWNlLnRvRml4ZWQoMik7XG4gIH1cblxufSAgICAgICJdfQ==