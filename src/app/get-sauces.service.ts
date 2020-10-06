import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class GetSaucesService {

	constructor(private http: HttpClient) { }


	// http://torquetorque.net/crashblossoms/PHP/getText.php
	dataUrl='http://torquetorque.net/crashblossoms/PHP/getText.php';
	//dataUrl='http://localhost:8888/rereader_2020_php/getText.php';
	getData() {
		return this.http.get(this.dataUrl);
	}
}
