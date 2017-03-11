export class Client {
  
  constructor(public id: number,
							public first_name: string,
							public last_name: string,
							public born: string,
							public country: string,
							public phone: string,
							public photo_url: string){}  

  full_name():string{		
		return this.first_name+" "+this.last_name;	
	}

	formated_phone():string{
		if (this.phone.length == 10){
			return "("+this.phone.substr(0,3)+") "+this.phone.substr(3,3)+"-"+this.phone.substr(6,4);
		}
		return this.phone;
	}

}