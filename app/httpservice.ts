import { Injectable }     from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers }           from '@angular/http';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';

@Injectable()
export class Httptest {
  constructor (private http: Http) {}
  private usersUrl = 'http://vinitdjango.analogyplus.com/users/';
  private loginUrl = 'http://vinitdjango.analogyplus.com/rest-auth/login/';
  private regUrl  ='http://vinitdjango.analogyplus.com/rest-auth/registration/';
  private lawyerslistUrl = 'http://vinitdjango.analogyplus.com/users/';
  private usersProfileUrl = 'http://vinitdjango.analogyplus.com/profiles/';
  private userDetailUrl = 'http://vinitdjango.analogyplus.com/users/?username=';
  key:string;
  username:string;
  getUsers (){
    return this.http.get(this.usersUrl)
                    .map(res => res.json());
                    
  }

  doLogin(username:string,password:string)
  {

         console.log("Do Login");

   let body = JSON.stringify({  "username": username,
    "email": "",
    "password": password });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });

    return this.http.post(this.loginUrl, body, {headers: headers})
                    .map(res => res.json());
                   
  }

    doReg(username:string,email:string,pass1:string,pass2:string)
  {
   let body = JSON.stringify({ 
    "username": username,
    "email": email,
    "password1": pass1,
    "password2": pass2
  });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });

    return this.http.post(this.regUrl, body, {headers: headers})
                    .map(res => res.json());
                   
  }

  doProfilePost(body:string,profileid:string)
  {


       this.key=localStorage.getItem('auth_token');  
         let headers = new Headers({ 
           
           'Content-Type': 'application/json',
           'Authorization' : 'Token '+this.key
                                    
        
       });

       console.log(headers);


    return this.http.put(this.usersProfileUrl+profileid+"/", body, {headers: headers})
                    .map(res => res.json());
  }

getUserDetail()
 {  let dataofget:JSON;

   console.log("getUserDetail");

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');

    this.username= localStorage.getItem('loggedinuser');
    headers.append('Authorization', `Token ${authToken}`);


    return this.http.get("http://ip.jsontest.com/")
    .map(this.extractData);

    
      
     

}
private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || { };
  }

// getUserDetail()
//  { 

//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     let authToken = localStorage.getItem('auth_token');

//     this.username= localStorage.getItem('loggedinuser');
//     headers.append('Authorization', `Token ${authToken}`);


//         return this.http.get(this.userDetailUrl+this.username,{ headers })
//                     .map(res => res.json());
   


// }









mockdata= [
  {"id":1,"first_name":"Antonio","last_name":"Peters","email":"apeters0@who.int","gender":"Male","image_url":"https://robohash.org/deseruntnihilvoluptatibus.jpg?size=100x100\u0026set=set1"},
{"id":2,"first_name":"John","last_name":"Woods","email":"jwoods1@wix.com","gender":"Male","image_url":"https://robohash.org/autemassumendaeos.jpg?size=100x100\u0026set=set1"},
{"id":3,"first_name":"Anna","last_name":"Arnold","email":"aarnold2@umn.edu","gender":"Female","image_url":"https://robohash.org/sedexcepturiinventore.jpg?size=100x100\u0026set=set1"},
{"id":4,"first_name":"Earl","last_name":"Medina","email":"emedina3@bloglines.com","gender":"Male","image_url":"https://robohash.org/etvoluptatemvelit.jpg?size=100x100\u0026set=set1"},
{"id":5,"first_name":"Nicole","last_name":"Ellis","email":"nellis4@ocn.ne.jp","gender":"Female","image_url":"https://robohash.org/doloreiusquod.png?size=100x100\u0026set=set1"},
{"id":6,"first_name":"Tammy","last_name":"Mccoy","email":"tmccoy5@delicious.com","gender":"Female","image_url":"https://robohash.org/cupiditatelaboriosamarchitecto.jpg?size=100x100\u0026set=set1"},
{"id":7,"first_name":"Barbara","last_name":"Gomez","email":"bgomez6@pen.io","gender":"Female","image_url":"https://robohash.org/saepequaequo.png?size=100x100\u0026set=set1"},
{"id":8,"first_name":"Sean","last_name":"Dean","email":"sdean7@nbcnews.com","gender":"Male","image_url":"https://robohash.org/eteiusea.bmp?size=100x100\u0026set=set1"},
{"id":9,"first_name":"Jesse","last_name":"Campbell","email":"jcampbell8@sciencedaily.com","gender":"Male","image_url":"https://robohash.org/eaqueoptiosint.png?size=100x100\u0026set=set1"},
{"id":10,"first_name":"John","last_name":"Moore","email":"jmoore9@mozilla.org","gender":"Male","image_url":"https://robohash.org/dignissimosvoluptatesvitae.jpg?size=100x100\u0026set=set1"},
{"id":11,"first_name":"Donald","last_name":"Garrett","email":"dgarretta@newsvine.com","gender":"Male","image_url":"https://robohash.org/consequaturnecessitatibuset.bmp?size=100x100\u0026set=set1"},
{"id":12,"first_name":"Cheryl","last_name":"Rodriguez","email":"crodriguezb@chicagotribune.com","gender":"Female","image_url":"https://robohash.org/quoporroest.png?size=100x100\u0026set=set1"},
{"id":13,"first_name":"Adam","last_name":"Nelson","email":"anelsonc@weather.com","gender":"Male","image_url":"https://robohash.org/laborumabdeleniti.png?size=100x100\u0026set=set1"},
{"id":14,"first_name":"Albert","last_name":"Perez","email":"aperezd@vinaora.com","gender":"Male","image_url":"https://robohash.org/voluptasvelitipsam.bmp?size=100x100\u0026set=set1"},
{"id":15,"first_name":"Frank","last_name":"Jordan","email":"fjordane@clickbank.net","gender":"Male","image_url":"https://robohash.org/velitmodinam.png?size=100x100\u0026set=set1"},
{"id":16,"first_name":"Ruby","last_name":"James","email":"rjamesf@goo.ne.jp","gender":"Female","image_url":"https://robohash.org/voluptateminaut.jpg?size=100x100\u0026set=set1"},
{"id":17,"first_name":"Ruth","last_name":"Carpenter","email":"rcarpenterg@gizmodo.com","gender":"Female","image_url":"https://robohash.org/minimaillumplaceat.bmp?size=100x100\u0026set=set1"},
{"id":18,"first_name":"Julie","last_name":"Romero","email":"jromeroh@usnews.com","gender":"Female","image_url":"https://robohash.org/possimusreprehenderitautem.png?size=100x100\u0026set=set1"},
{"id":19,"first_name":"Ann","last_name":"Hall","email":"ahalli@seesaa.net","gender":"Female","image_url":"https://robohash.org/impeditetvero.png?size=100x100\u0026set=set1"},
{"id":20,"first_name":"Kelly","last_name":"Taylor","email":"ktaylorj@flavors.me","gender":"Female","image_url":"https://robohash.org/animimodiut.png?size=100x100\u0026set=set1"},
{"id":21,"first_name":"Helen","last_name":"Dunn","email":"hdunnk@gov.uk","gender":"Female","image_url":"https://robohash.org/evenietnecessitatibusvoluptates.bmp?size=100x100\u0026set=set1"},
{"id":22,"first_name":"Lori","last_name":"Daniels","email":"ldanielsl@unicef.org","gender":"Female","image_url":"https://robohash.org/namillummolestias.bmp?size=100x100\u0026set=set1"},
{"id":23,"first_name":"Nancy","last_name":"Day","email":"ndaym@wp.com","gender":"Female","image_url":"https://robohash.org/quisdoloribusvitae.png?size=100x100\u0026set=set1"},
{"id":24,"first_name":"Willie","last_name":"Cunningham","email":"wcunninghamn@theguardian.com","gender":"Male","image_url":"https://robohash.org/doloreaqueut.png?size=100x100\u0026set=set1"},
{"id":25,"first_name":"Amanda","last_name":"Matthews","email":"amatthewso@hao123.com","gender":"Female","image_url":"https://robohash.org/distinctioquasisunt.jpg?size=100x100\u0026set=set1"},
{"id":26,"first_name":"Johnny","last_name":"Carter","email":"jcarterp@uiuc.edu","gender":"Male","image_url":"https://robohash.org/veniamquasirepudiandae.bmp?size=100x100\u0026set=set1"},
{"id":27,"first_name":"Christina","last_name":"Gomez","email":"cgomezq@etsy.com","gender":"Female","image_url":"https://robohash.org/sapienteuteius.png?size=100x100\u0026set=set1"},
{"id":28,"first_name":"Brenda","last_name":"Campbell","email":"bcampbellr@epa.gov","gender":"Female","image_url":"https://robohash.org/nihildolorullam.jpg?size=100x100\u0026set=set1"},
{"id":29,"first_name":"Albert","last_name":"Harrison","email":"aharrisons@amazon.co.uk","gender":"Male","image_url":"https://robohash.org/autfugiatpraesentium.bmp?size=100x100\u0026set=set1"},
{"id":30,"first_name":"Karen","last_name":"Bailey","email":"kbaileyt@bloomberg.com","gender":"Female","image_url":"https://robohash.org/culpavoluptasquis.jpg?size=100x100\u0026set=set1"},
{"id":31,"first_name":"Kathryn","last_name":"Chavez","email":"kchavezu@studiopress.com","gender":"Female","image_url":"https://robohash.org/similiqueinet.bmp?size=100x100\u0026set=set1"},
{"id":32,"first_name":"Jennifer","last_name":"Watson","email":"jwatsonv@msn.com","gender":"Female","image_url":"https://robohash.org/temporibusvoluptatemullam.bmp?size=100x100\u0026set=set1"},
{"id":33,"first_name":"Steven","last_name":"Perez","email":"sperezw@dailymail.co.uk","gender":"Male","image_url":"https://robohash.org/mollitianondolores.png?size=100x100\u0026set=set1"},
{"id":34,"first_name":"Kimberly","last_name":"Ross","email":"krossx@a8.net","gender":"Female","image_url":"https://robohash.org/animieumet.jpg?size=100x100\u0026set=set1"},
{"id":35,"first_name":"Denise","last_name":"Griffin","email":"dgriffiny@washingtonpost.com","gender":"Female","image_url":"https://robohash.org/doloreexplicabosaepe.png?size=100x100\u0026set=set1"},
{"id":36,"first_name":"Steve","last_name":"Ferguson","email":"sfergusonz@theguardian.com","gender":"Male","image_url":"https://robohash.org/beataemolestiaeadipisci.png?size=100x100\u0026set=set1"},
{"id":37,"first_name":"Jose","last_name":"Wheeler","email":"jwheeler10@google.cn","gender":"Male","image_url":"https://robohash.org/quioccaecatiearum.jpg?size=100x100\u0026set=set1"},
{"id":38,"first_name":"Brenda","last_name":"Holmes","email":"bholmes11@mac.com","gender":"Female","image_url":"https://robohash.org/eaminimafugit.png?size=100x100\u0026set=set1"},
{"id":39,"first_name":"James","last_name":"Rodriguez","email":"jrodriguez12@stumbleupon.com","gender":"Male","image_url":"https://robohash.org/eumdignissimosadipisci.png?size=100x100\u0026set=set1"},
{"id":40,"first_name":"Anthony","last_name":"Chapman","email":"achapman13@unc.edu","gender":"Male","image_url":"https://robohash.org/eumetducimus.jpg?size=100x100\u0026set=set1"},
{"id":41,"first_name":"Marilyn","last_name":"Powell","email":"mpowell14@stumbleupon.com","gender":"Female","image_url":"https://robohash.org/pariaturisteest.bmp?size=100x100\u0026set=set1"},
{"id":42,"first_name":"Paula","last_name":"Dixon","email":"pdixon15@irs.gov","gender":"Female","image_url":"https://robohash.org/apariaturexcepturi.jpg?size=100x100\u0026set=set1"},
{"id":43,"first_name":"Adam","last_name":"Hicks","email":"ahicks16@slideshare.net","gender":"Male","image_url":"https://robohash.org/illummaximetempore.jpg?size=100x100\u0026set=set1"},
{"id":44,"first_name":"Willie","last_name":"Alvarez","email":"walvarez17@google.ca","gender":"Male","image_url":"https://robohash.org/quisquamametet.png?size=100x100\u0026set=set1"},
{"id":45,"first_name":"Gerald","last_name":"Matthews","email":"gmatthews18@free.fr","gender":"Male","image_url":"https://robohash.org/aperiamanimiipsam.jpg?size=100x100\u0026set=set1"},
{"id":46,"first_name":"Sarah","last_name":"Ryan","email":"sryan19@tumblr.com","gender":"Female","image_url":"https://robohash.org/quaeratsintlaboriosam.jpg?size=100x100\u0026set=set1"},
{"id":47,"first_name":"Amy","last_name":"Martinez","email":"amartinez1a@creativecommons.org","gender":"Female","image_url":"https://robohash.org/evenietadsint.png?size=100x100\u0026set=set1"},
{"id":48,"first_name":"Adam","last_name":"Clark","email":"aclark1b@vinaora.com","gender":"Male","image_url":"https://robohash.org/quibusdamutautem.png?size=100x100\u0026set=set1"},
{"id":49,"first_name":"Steve","last_name":"Porter","email":"sporter1c@usgs.gov","gender":"Male","image_url":"https://robohash.org/vitaesaepeullam.jpg?size=100x100\u0026set=set1"},
{"id":50,"first_name":"Andrew","last_name":"White","email":"awhite1d@plala.or.jp","gender":"Male","image_url":"https://robohash.org/magnamquiaqui.jpg?size=100x100\u0026set=set1"}
];



















}
