import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';

import { Designer } from '../designer/designer.model';

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient) {}
    
    addDesigner(designer: Designer) {
        return this.httpClient.post('https://fashionfs-ba339.firebaseio.com/designer.json', designer);
//            {
//                observe: 'events',
//                //observe: 'body'
//                headers: new HttpHeaders().set('Authorization', 'Sdfg2342DFG234sd'),// set override the existing data.
//                params: new HttpParams().set('auth', 'token_ert32423erte')// Query Param
//            }
            //);
        
        // to recording progress or track upload the data in percentage // creating from scratch // based on response type, app track it.
        // show graph using loaded/total 
//        const req = new HttpRequest('POST', 'https://fashionfs-ba339.firebaseio.com/designer.json', designer, 
//            {reportProgress: true, params: new HttpParams().set('auth', 'token_ert32423erte')});
//        return this.httpClient.request(req);
    }
    
    getDesigners() {
        //return this.httpClient.get<any[]>('https://fashionfs-ba339.firebaseio.com/designer.json')
        return this.httpClient.get<Designer[]>('https://fashionfs-ba339.firebaseio.com/designer.json')
            .pipe(
                map((res) => {console.log(res); 
                                for(let designer1 of res) {
                                    console.log('Each Designer' + designer1.firstName);
                                }      
                             return res;})
                );
               /* map((res) => Object.keys(res).map((key) => { return res[key] })),
              
                map(
//                Use Http Module - angular 4
//                (response: Response) => {
//                    console.log('Response: ' + response); 
//                    let designers: Designer[] = response.json();
//                    console.log('All Designer' + designers); 
//                    console.log(designers);
//                    for(let designer of designers) {
//                        console.log('Each Designer' + designer);
//                    }
//                 }  
                
                (designers: Designer[]) => {
                    console.log(designers);
                    for(let designer of designers) {
                        console.log('Each Designer' + designer.firstName);
                    }               
                    return designers;
                }
                
            ));*/
        
        
//        return this.httpClient.get<Designer[]>('https://fashionfs-ba339.firebaseio.com/designer.json', 
//            { observe: 'response', // Full response
//              responseType: 'text' 
//            })
//            .subscribe(
//               (designers) => {
//                    console.log(designers);          
//                    return [];
//                }
//                
//            );
//        return this.httpClient.get<Designer[]>('https://fashionfs-ba339.firebaseio.com/designer.json', 
//            { observe: 'body', // Repose will be body in test format // default is body + json
//              responseType: 'text' 
//            })
//            .subscribe(
//               (designers) => {
//                    console.log(designers);          
//                    return [];
//                }
//                
//            );
    }
}