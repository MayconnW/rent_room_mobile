export class Room {
  
  constructor(public id: number,
							public description: string,
							public number: number,
							public apartment_id: number,
							public price_month: number,
							public price_secure: number,
							public free: boolean,
							public photo_url: string){}  

  formatPrice(price: number):string{
    return "C$" + price.toFixed(2);
  }

}      