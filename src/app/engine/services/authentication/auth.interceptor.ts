import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthenticationServer } from './authentication-server.service';


@Injectable()
export class AuthInterceptorPatient implements HttpInterceptor {

    constructor(
      private authService: AuthenticationServer,
      private router: Router
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const accessToken = localStorage.getItem("access_token");

      if (accessToken) {
          let authReq = req.clone({
              setHeaders: {Authorization: `Bearer ${accessToken}`}
          });
          return next.handle(authReq);
      }
      else{
        return next.handle(req).pipe(
          catchError((err) => {
            if (err.status === 401) {
              this.authService.endSession();
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        })
      );
    }
  }

  //  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

  //         const tokenString = localStorage.getItem('access_token');

  //         const url = request.url;

  //         if( tokenString && !url.endsWith('/login') ){
  //           const token = JSON.parse(tokenString);
  //           const jwt = token.access_token;
  //           window.alert(jwt)
  //           request = request.clone({
  //             setHeaders : {
  //               Authorization: 'Bearer ' + jwt
  //             }
  //           })
  //         }

  //         return next.handle(request);
  //       }

        // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        //   const tokenString = localStorage.getItem('access_token');

        //   const url = request.url;

        //   if( tokenString && !url.endsWith('/login') ){
        //     const token = JSON.parse(tokenString);
        //     const jwt = token.access_token;
        //     request = request.clone({
        //       setHeaders : {
        //         Authorization: 'Bearer ' + jwt
        //       }
        //     })
        //   }

        //   return next.handle(request);
        // }
}
