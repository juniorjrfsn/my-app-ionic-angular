import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { HTTP } from '@ionic-native/http/ngx';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
    //,
    //private http: HTTP
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      
      this.splashScreen.hide();
      
           
            $(document).ready(function(){ 
                $.ajax({
					url: 'http://localhost:8100/main.js', 
					data: {  },  
					type: 'get', dataType: 'html', cache: false,  async: true, 
					success: function (json) {   
						console.log(json);
						try { 
                           
						} catch (e) {
							console.log(e.message); 
						}
					}, beforeSend: function (xhr) {
					}, error: function (XMLHttpRequest, textStatus, errorThrown ) { console.log(XMLHttpRequest); console.log(textStatus); console.log(errorThrown); }
				}).done(function(){}).fail(function( XMLHttpRequest, textStatus, errorThrown ){
					console.log(XMLHttpRequest); console.log(textStatus); console.log(errorThrown);  
				}).always(function(){});
			 });  
             
            
      
      /*
                            this.http.get('http://ionic.io', {}, {})
                            .then(data => {

                            console.log(data.status);
                            console.log(data.data); // data received by server
                            console.log(data.headers);

                            })
                            .catch(error => {

                            console.log(error.status);
                            console.log(error.error); // error message as string
                            console.log(error.headers);

                            });
                            */
    });
  }
}
