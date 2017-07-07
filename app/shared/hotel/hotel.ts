export class Hotel {
  
  constructor(public id: number,
							public description: string,
							public address: string,
							public cep: string,
							public free_rooms: string,							
							public photo_url: string){}  

	full_address():string{		
		return this.address+" ("+this.cep+")";	
	}
} 