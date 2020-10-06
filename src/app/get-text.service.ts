// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class GetTextService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class GetTextService {

	constructor(private http: HttpClient) { }


	dataUrl='http://torquetorque.net/crashblossoms/PHP/addText.php/?name=';
	//dataUrl='http://localhost:8888/rereader_2020_php/addText.php/?name=';
	getData(headLine) {

		return this.http.get(this.dataUrl+headLine);
	}
}
