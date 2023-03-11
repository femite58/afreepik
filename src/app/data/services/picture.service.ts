import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private baseUrl;
  private token;
  constructor(
    private http: HttpClient,
    private config: ConfigService,
    private authService: AuthService,
  ) { 
    this.baseUrl = this.config.baseUrl;
    this.authService.user.subscribe(auth => {
      if (auth) {
        this.token = auth.token;
      } else {
        this.token = null;
      }
    });
  }

  getHomePics(cat) {
    return this.http.get<any>(
      `${this.baseUrl}products/home_products/${cat}`
    )
  }

  getPicDetails(pid) {
    return this.http.get<any>(
      `${this.baseUrl}products/details/${pid}/${this.token}`
    )
  }

  getCatPic(cat, limit = 20, page = 1, sort = 'ASC') {
    return this.http.get<any>(
      `${this.baseUrl}products/${cat}/${limit}/${page}/${sort}/${this.token}`
    );
  }


}
