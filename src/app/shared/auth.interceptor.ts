import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 

import { DesignerService } from '../designer/designer.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private designerService: DesignerService) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercept: ' + req);
        //const copiedreq = req.clone({headers: req.headers.append('','')});
        //const copiedreq = req.clone({params: req.params.set('auth','token_HFG3242dDgdg545')});
       // return next.handle(copiedreq);// handle will allow to continue journey
        return next.handle(req);
    }
}