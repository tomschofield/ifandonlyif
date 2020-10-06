import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsMobileService {

  constructor() { }
  getIsMobile(){
  	var ua = navigator.userAgent;
  	
  	var isMobile = false;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)){
       isMobile = true;
    }

    else if(/Chrome/i.test(ua)){
       isMobile = false;
    }

    else{
       isMobile = false;
    }

   return isMobile;
  }
}
