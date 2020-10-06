import {Component, OnInit, NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';import { MatSliderModule } from '@angular/material/slider';
import { GetSaucesService } from '../get-sauces.service';
import { GetTextService } from '../get-text.service';

import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import {Http, Headers, RequestOptionsArgs } from "@angular/http";
import { IsMobileService } from '../is-mobile.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(private isMobileService: IsMobileService, private http: HttpClient, private _ngZone: NgZone, private getSaucesService: GetSaucesService,private getTextService: GetTextService) { }
	@ViewChild('autosize') autosize: CdkTextareaAutosize;

	readerText: String = "GONING INTELLIGENCE SPEECH MEETING AGRICULTURAL SHOW";
	readerWords: String [] = [];
	currentWord: String = "";
	index: number = 0;
	articleText: String ="This is a set of headlines from an archive of C19th newspapers, taken from the newly digitised British Library Archive. Our AI was trained using a small sample of 1000 head- lines for example..Births, Deaths, Marriages And Obitu- aries. Miscellaneous Intelligence. Easter Vestries. Latest Commercial. Welsh Presby Terianism At West Kirby. Local News. Mr. Gladstone And The Sultan. Curiosities Of The Speakeership. Church Eisteddfod At Rhyl. The Liverpool Welsh National Society. The Capture Of Wei-Haiwei. Birkenhead School Board. Sequel To A Liverpool Boxing Match. Shipping. Latest News. Sporting. From Our London Correspondent. ";
	randomColor: String = "blue";
	private interval;
	date:String = "";
	tickerIndex:number = 0;
	allText:any={};
	tickerText:String = ">";
	tickerSourceText:String ="";// "CRASH BLOSSOMS USES AI TEXT GENERATION TOOLS TO COMBINE HEADLINES FROM THE BRITISH LIBRARY PRE 1830 NEWS ARCHIVE WITH CONTEMPORARY AND USER-GENERATED EXAMPLES INTO NEW SYNTHETIC FUTURE HEADLINES. IT IS A COLLABORATION BETWEEN TOM SCHOFIELD, NATHAN JONES AND SAM SKINNER FOR TORQUE EDITIONS. A COMMISSION FROM BRITISH LIBRARY AND LEEDS DIGITAL FESTIVAL.";
	No1_current:String="";
	No2_headline:String="";
	No3_headline:String="";
	No4_headline:String="";
	No5_headline:String="";
	No6_headline:String="";
	No7_headline:String="";
	mainHeadline:String="";
	ticker:String="";
	leftPos:number=1000;
	user:String="";
	userHeadline:String="YOUR \nHEADLINE \nHERE";
	response:String = "";
	isMobile:boolean = true;
	speed:number=1;
	isPaused:boolean = false;
	pausedText:String = "|| Pause headlines"
	volume:String="";
	// myForm = new FormGroup({
		//    userHeadline: new FormControl('', [
		//      Validators.required
		//    ])  });


		ngOnInit(): void {
			let now = new Date();

			this.isMobile = this.isMobileService.getIsMobile();



			this.getSaucesService.getData() .subscribe(
				(data: any) => this.allText = data
				,err => console.error(err),() => this.processData());

			this.date ="Tue Oct 06 2020";// now.toDateString();
			// setTimeout(() => {
			// 	this.readerWords = this.readerText.split(" ");
			// 	this.play(300);

			// }, 100);
			var vol = Math.floor(Math.random()*1000);
			// console.log( Date.parse("22 Sep 2020 00:12:00 GMT"));
			var diff = 15;// Math.floor((  Date.now() -Date.parse("21 Sep 2020 00:12:00 GMT")  ) / 86400000);
			var issue = Math.floor(Math.random()*1000);
			this.volume = "VOL 1.... Issue." + diff;


			// setInterval(() => {
			// 	console.log("chaging headline")
			// 	this.No1_current=this.getRandomHeadLine(this.allText.No1_current);
				
			// }, 5000 +( Math.random()*10000));
			setInterval(() => {
				
				if(!this.isPaused) this.No2_headline=this.getRandomHeadLine(this.allText.No2_headlines);
				
			}, 5000 +( Math.random()*10000));
			setInterval(() => {
				
				if(!this.isPaused)this.No3_headline=this.getRandomHeadLine(this.allText.No3_headlines);
			
			}, 5000 +( Math.random()*10000));
			setInterval(() => {
				
				if(!this.isPaused)this.No4_headline=this.getRandomHeadLine(this.allText.No4_headlines);
				
			}, 5000 +( Math.random()*10000));
			setInterval(() => {
			
				if(!this.isPaused)this.No5_headline=this.getRandomHeadLine(this.allText.No5_headlines);
			
			}, 5000 +( Math.random()*10000));
			setInterval(() => {
			
				if(!this.isPaused)this.No6_headline=this.getRandomHeadLine(this.allText.No6_headlines);
			
			}, 5000 +( Math.random()*10000));
			setInterval(() => {

				if(!this.isPaused)this.No7_headline=this.getRandomHeadLine(this.allText.No7_headlines);
			}, 5000 +( Math.random()*10000));

			// 	 setInterval(() => {
				//   	console.log("tick");
				//   	this.updateReader();
				// }, this.speed);
			}
			// get myStyles(): any {
   //      return {
            
   //          'left' : this.leftPos+"px" 
   //      };
   //  }
			limitBodyText(text, limit){
				if(text){
				if(text.length<=limit) {
					return text;
				}
				else{
					return text.substring(0,limit);
				}
				console.log("limit ",limit);
				
					// return text.substring(0,limit);
				}
				
			}
			togglePause(){
				this.isPaused = !this.isPaused;
				if(this.pausedText=="|| Pause headlines"){
					this.pausedText=">> Play headlines";
				}
				else{
					this.pausedText="|| Pause headlines";
				}

			}
			processData(){
				// console.log(this.allText);
				this.No1_current=this.getRandomHeadLine(this.allText.No1_current);
				this.No2_headline=this.getRandomHeadLine(this.allText.No2_headlines);
				this.No3_headline=this.getRandomHeadLine(this.allText.No3_headlines);
				this.No4_headline=this.getRandomHeadLine(this.allText.No4_headlines);
				this.No5_headline=this.getRandomHeadLine(this.allText.No5_headlines);
				this.No6_headline=this.getRandomHeadLine(this.allText.No6_headlines);
				this.No7_headline=this.getRandomHeadLine(this.allText.No7_headlines);

				//this.tickerSourceText+=this.allText.No1_body + this.allText.No2_headlines;
				for(var i=0;i<100;i++){
					this.tickerSourceText=this.allText.ticker.trim() + this.allText.No2_headlines;
				}
				
				// this.user=this.getRandomHeadLine(this.allText.No7_headlines);
				console.log("this.allText.ticker",this.tickerSourceText);
				this.allText.No1_body+=this.getSampleSelection(this.allText.No1_current,25);
				this.allText.No2_body;//+=this.getSampleSelection(this.allText.No2_headlines,25);
				this.allText.No3_body+=this.getSampleSelection(this.allText.No3_headlines,25);
				this.allText.No4_body+=this.getSampleSelection(this.allText.No4_headlines,25);
				this.allText.No8_body+=this.getSampleSelection(this.allText.user,5);



				setInterval(() => {

				this.leftPos-=5;
				if(!this.isPaused) this.tickerIndex+=this.speed;

				if(this.tickerIndex>=this.No1_current.length || this.tickerIndex <= 0) {
					this.speed *=-1;
					if(this.tickerIndex == 0) this.No1_current=this.getRandomHeadLine(this.allText.No1_current);
				}

				this.mainHeadline = this.No1_current.substring(0,this.tickerIndex);

				// if(this.tickerIndex>=this.tickerSourceText.length) this.tickerIndex = 1;
				// this.tickerText=this.tickerSourceText.substring(0,this.tickerIndex);
			}, 100);
			}
			getRandomHeadLine(text: String ): String{
				//console.log("text",text);
				text+=".";
				var exploded= text.split("\n");
				var index = Math.floor(Math.random()*(exploded.length-1));
				//console.log("index",index);
				if(index <0 || index>=exploded.length) return "NO HEADLINE";
				return exploded[index];

			}
			check(){
				console.log("response",this.response);
				this.allText.No8_body+="\r, "+this.userHeadline.toUpperCase();
				this.userHeadline="HEADLINE SUBMITTED";

			}
			getSampleSelection(headlines, number){
				var sample="";
				var wins = 0;
				var index = 0;
				for(var index =0;index<number*2;index++){
					var head = this.getRandomHeadLine(headlines).toString();
					if (!sample.includes(head)){
						sample+="'"+head+"', ";
						wins++;
						
					}	
					if(wins == number) break;		
				}

				return sample.substring(0,sample.length-2);
			}
			keyDownFunction(event) {
				console.log(this.userHeadline );
				if (event.keyCode === 13) {


					this.getTextService.getData(this.userHeadline) .subscribe(
						(data: any) => this.response = data
						,err => console.error(err),() => this.check());

				}
			}
			getDate(){
				return "MONDAY SEPTEMBER 14th 2002";
			}
			sliderChange(event){
				console.log("slider change," , event);
				this.play(event);

			}
			triggerResize() {
				// Wait for changes to be applied, then trigger textarea resize.
				this._ngZone.onStable.pipe(take(1))
				.subscribe(() => this.autosize.resizeToFitContent(true));
			}

			onSubmit(){
				console.log("submitted form");

			}
			play(time) {
				if(this.interval) {
					clearInterval(this.interval)
				}

				this.interval = setInterval(() => {
					this.updateReader();
				}, time);
			}

			updateReader(){
				// var alpha = Math.random();
				// console.log("alpha",alpha);
				// this.randomColor = "rgba(255,255,255"+ alpha+")";
				this.currentWord = this.readerWords[this.index];

				this.index++;
				if(this.index>=this.readerWords.length) this.index = 0;
			}

		}
