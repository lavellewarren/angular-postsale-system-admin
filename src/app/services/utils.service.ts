import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  user: any = {};
  private tokenCookieName = 'PJ45678dfdfApi3456Token';

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) { }

  Navigate(url) {
    this.router.navigateByUrl(url);
  }

  //Auth
  ApiLogin(data, success, error) {
    var option = {
      method: 'POST',
      url: 'auth/sign_in',
      data: data
    };

    this.apiRequest(option, scb => {

      this.user = scb.user;
      console.log(this.user);
      this.cookie.put(this.tokenCookieName, scb.token);
      
      success(scb);
    }, error);
  }

  ApiForgotPassword(data, success, error) {
    
    var option = {
      method: 'POST',
      url: 'auth/forgot_password',
      data: data
    };

    this.apiRequest(option, success, error);
  }

  ApiResetPassword(data, success, error) {
    
    var option = {
      method: 'POST',
      url: 'auth/reset_password',
      data: data
    };

    this.apiRequest(option, success, error);
  }


  //Projects
  ApiSearchProjects(search, success, error) {
    var option = {
      method: 'GET',
      url: 'projects',
      data: search
    };

    this.apiRequest(option, success, error);
  }





  private apiRequest(option, success, errorCallback): Subscription {

    var url = environment.apiBaseUrl + option.url;
    var httpOptions = this.getHttpOptions(option.isFile);

    if (option.method == 'GET') {
      if(option.data) {
        url = this.getUrlWithParams(url, option.data);
      }

      return this.http
        .get(url, httpOptions)
        .subscribe(
          data => success(data['data']),
          error => errorCallback(error['error'])
        );
    } else if (option.method == 'POST') {
      return this.http
        .post(url, option.data, httpOptions)
        .subscribe(
          data => success(data['data']),
          error => errorCallback(error['error'])
        );
    } else if (option.method == 'PUT') {
      return this.http
        .put(url, option.data, httpOptions)
        .subscribe(
          data => success(data['data']),
          error => errorCallback(error['error'])
        );
    } else if (option.method == 'DELETE') {
      if(option.data) {
        url = this.getUrlWithParams(url, option.data);
      }
      
      return this.http
        .delete(url, httpOptions)
        .subscribe(
          data => success(data['data']),
          error => errorCallback(error['error'])
        );
    }
  }

  private getHttpOptions(isFile: boolean = false) {
  
    var headers = {
      Authorization: 'JWT ' + this.cookie.get(this.tokenCookieName)
    };

    if(!isFile) {
      headers['Content-Type'] = 'application/json';
    }

    var httpOptions: any = {
      headers: new HttpHeaders(headers)
    };

    return httpOptions;
  }

  private getUrlWithParams(url: string, data: any): string {
    let params = new URLSearchParams();
    for(let key in data) {
      if(Array.isArray(data[key])) {
        for(let value in data[key]) {
          params.append(key, data[key][value]);
        }
      } else if(data[key] != '') {
        params.set(key, data[key]);
      }
    }
    return url + "?" + params.toString();
  }

}
