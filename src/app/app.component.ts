import { Component, OnInit } from '@angular/core';
import { AuthService } from './data/services/auth.service';
import { CategoryService } from './data/services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'afreepik';

  constructor(
    private categoryService: CategoryService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.getCategories();
    this.autoLogin();
  }

  private autoLogin() {
    this.authService.autoLogin();
  }

  private getCategories() {
    this.categoryService.getCategories().subscribe();
  }
}
