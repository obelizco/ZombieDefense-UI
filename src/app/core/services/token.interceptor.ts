import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {  tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {

            request = request.clone({
                setHeaders: {
                    "X-API-KEY": `${environment.x_apy_key}`,
                },
            });
        

        return next.handle(request)
    }
}