import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/services/auth.service';
import { CategoryService } from 'src/app/data/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  keyword;
  auth;
  showSearch = false;

  notifications = [
    { username: 'James', photo: 'assets/images/userNot.png', action: 'Followed you work', created_at: '2021-09-13' },
    { username: 'James', photo: 'assets/images/userNot.png', action: 'Followed you work', created_at: '2021-09-13' },
    { username: 'James', photo: 'assets/images/userNot.png', action: 'Followed you work', created_at: '2021-09-13' },
  ];

  showModal = { status: false, owner: 'login' };

  categories = [
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
  ];

  searchRes = [
    { keyword: 'circle shape', slug: 'circle shape' },
    { keyword: 'round shape', slug: 'round shape' },
    { keyword: 'geometric shape', slug: 'geometric shape' },
    { keyword: '3D shape', slug: '3D shape' },
    { keyword: 'abstract shape', slug: 'abstract shape' },
    { keyword: 'organic shape', slug: 'organic shape' },
    { keyword: 'shapes', slug: 'shapes' },
  ]

  constructor(
    private categoryService: CategoryService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getAuth();
    this.checkModalCommand()
  }

  private checkModalCommand() {
    this.authService.authModal.subscribe(openModal => {
      if (openModal) {
        this.openModal('login');
      }
    });
  }

  private getAuth() {
    this.authService.user.subscribe(auth => {
      console.log(auth);
      this.auth = auth;
    });
  }

  checkInput(e) {
    if (this.keyword.length > 1) {
      this.showSearch = true;
    }
    if (e.key == 'Enter' && this.keyword.length > 1) {
      this.showSearch = false;
      this.search();
    }
  }

  search() {
    this.router.navigateByUrl(`/search/${this.keyword}`);
  }

  logout() {
    this.authService.logout();
  }

  private getCategories() {
    this.categoryService.categories.subscribe(res => {
      if (res) {
        this.categories = res;
      }
    });
  }

  openModal(owner) {
    this.showModal = { status: true, owner: owner };
  }

  closeModal() {
    this.showModal.status = false;
    this.authService.authModal.next(false);
  }

}
