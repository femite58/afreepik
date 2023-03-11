import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _categories = new BehaviorSubject<any>(null);
  private baseUrl;
  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) {
    this.baseUrl = config.baseUrl;
   }

  get categories() {
    return this._categories.asObservable();
  }

  getCategories() {
    return this.http.get<any>(
      `${this.baseUrl}categories`
    ).pipe(tap(res => {
      console.log(res);
      this._categories.next(res);
    }));
    this._categories.next([
      { cat_name: 'Photos', cat_slug: 'photos' },
      { cat_name: 'Illustrations', cat_slug: 'illustrations' },
      { cat_name: 'Icons', cat_slug: 'icons' },
      { cat_name: 'Logos', cat_slug: 'logos' },
      { cat_name: 'Business & ID Cards', cat_slug: 'business-and-id-cards' },
      { cat_name: 'Flyer Designs', cat_slug: 'flyer-designs' },
      { cat_name: 'Backgrounds', cat_slug: 'backgrounds' },
      { cat_name: 'Social Media Designs', cat_slug: 'social-media-designs' },
      { cat_name: 'CV Templates', cat_slug: 'cv-templates' },
      { cat_name: 'Fonts', cat_slug: 'fonts' },
      { cat_name: 'Others', cat_slug: 'others' },
    ]);
  }
}
