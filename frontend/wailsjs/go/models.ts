export namespace models {
	
	export class StoreDetail {
	    ID: number;
	    StoreName: string;
	    OwnerName: string;
	    AddressLine: string;
	    Place: string;
	    State?: string;
	    Pincode: string;
	    Phone: string;
	    Email?: string;
	    Gstin: string;
	    UpiID?: string;
	    // Go type: time
	    CreatedAt: any;
	    // Go type: time
	    UpdatedAt: any;
	
	    static createFrom(source: any = {}) {
	        return new StoreDetail(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ID = source["ID"];
	        this.StoreName = source["StoreName"];
	        this.OwnerName = source["OwnerName"];
	        this.AddressLine = source["AddressLine"];
	        this.Place = source["Place"];
	        this.State = source["State"];
	        this.Pincode = source["Pincode"];
	        this.Phone = source["Phone"];
	        this.Email = source["Email"];
	        this.Gstin = source["Gstin"];
	        this.UpiID = source["UpiID"];
	        this.CreatedAt = this.convertValues(source["CreatedAt"], null);
	        this.UpdatedAt = this.convertValues(source["UpdatedAt"], null);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

