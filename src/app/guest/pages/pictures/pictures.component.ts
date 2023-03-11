import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/data/services/auth.service';
import { CategoryService } from 'src/app/data/services/category.service';
import { PictureService } from 'src/app/data/services/picture.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {
  @ViewChild('modalCont') modalCont: ElementRef;
  auth;
  showModal = false;
  selPicInd = -1;

  filters  = [
    {txt: 'Free', name: 'licence', value: 'free'},
    {txt: 'Vectors', name: 'category', value: 'vectors'},
  ];

  photos = [
    {
      url: 'assets/images/20.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 1,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/21.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 2,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/22.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 3,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/23.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 4,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/24.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 5,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/25.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 6,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/13.jpg',
      width: 664,
      height: 276,
      user: 'Alexandra Necula',
      pid: 7,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Premium',
    },
    {
      url: 'assets/images/14.jpg',
      width: 664,
      height: 239,
      user: 'Alexandra Necula',
      pid: 8,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/15.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 9,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/16.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 10,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/17.jpg',
      width: 338,
      height: 338,
      user: 'Alexandra Necula',
      pid: 11,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/18.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 12,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Premium',
    },
    {
      url: 'assets/images/19.jpg',
      width: 664,
      height: 286,
      user: 'Alexandra Necula',
      pid: 13,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/20.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 14,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/21.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 15,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/22.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 16,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/23.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 17,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/24.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 18,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/25.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 19,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/13.jpg',
      width: 664,
      height: 276,
      user: 'Alexandra Necula',
      pid: 20,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Premium',
    },
    {
      url: 'assets/images/14.jpg',
      width: 664,
      height: 239,
      user: 'Alexandra Necula',
      pid: 21,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/15.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 22,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/16.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 23,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/17.jpg',
      width: 338,
      height: 338,
      user: 'Alexandra Necula',
      pid: 24,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
    {
      url: 'assets/images/18.jpg',
      width: 664,
      height: 442,
      user: 'Alexandra Necula',
      pid: 25,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Premium',
    },
    {
      url: 'assets/images/19.jpg',
      width: 664,
      height: 286,
      user: 'Alexandra Necula',
      pid: 26,
      downloads: 150,
      favorites: 200,
      isFavorite: 0,
      photo: 'assets/images/user.png',
      status: 'Free',
    },
  ];

  selPicPar;

  categories;
  cat;
  sort = 'ASC';

  page = 1;
  limit = 20;
  count = 3426;

  selPicDetails = {
    pid: 1,
    image: 'assets/images/picDetails.png',
    name: 'Clean minimal BMW sport car',
    created_at: '07-09-2021',
    pngLink: 'assets/images/picDetails.png',
    jpgLink: 'assets/images/picDetails.png',
    sellerInfo: {
      name: 'Alexandra Necula',
      hire_availability: 'Available',
      photo: 'assets/images/userBig.png',
      resources: 80000,
    },
    relatedResource: [
      {
        url: 'assets/images/20.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 2,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/21.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 3,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/22.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 4,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/23.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 5,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/24.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 6,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/25.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 7,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/13.jpg',
        width: 664,
        height: 276,
        user: 'Alexandra Necula',
        pid: 8,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Premium',
      },
      {
        url: 'assets/images/14.jpg',
        width: 664,
        height: 239,
        user: 'Alexandra Necula',
        pid: 9,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/15.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 10,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/16.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 11,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/17.jpg',
        width: 338,
        height: 338,
        user: 'Alexandra Necula',
        pid: 12,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/18.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 13,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Premium',
      },
      {
        url: 'assets/images/19.jpg',
        width: 664,
        height: 286,
        user: 'Alexandra Necula',
        pid: 14,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/20.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 15,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/21.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 16,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/22.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 17,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/23.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 18,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/24.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 19,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/25.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 20,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/13.jpg',
        width: 664,
        height: 276,
        user: 'Alexandra Necula',
        pid: 21,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Premium',
      },
      {
        url: 'assets/images/14.jpg',
        width: 664,
        height: 239,
        user: 'Alexandra Necula',
        pid: 22,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/15.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 23,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/16.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 24,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/17.jpg',
        width: 338,
        height: 338,
        user: 'Alexandra Necula',
        pid: 25,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
      {
        url: 'assets/images/18.jpg',
        width: 664,
        height: 442,
        user: 'Alexandra Necula',
        pid: 26,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Premium',
      },
      {
        url: 'assets/images/19.jpg',
        width: 664,
        height: 286,
        user: 'Alexandra Necula',
        pid: 27,
        downloads: 150,
        favorites: 200,
        isFavorite: 0,
        photo: 'assets/images/user.png',
        status: 'Free',
      },
    ]
  };

  get lastPage() {
    return Math.ceil(this.count/this.limit);
  }

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private pictureService: PictureService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getAuth();
    this.route.params.subscribe(param => {
      this.cat = param.category;
      this.getPictures();
      // this.photos = this.scrambleArray(this.photos);
      // this.photos.reverse();
    });
  }

  private getPictures() {
    this.pictureService.getCatPic(this.cat, this.limit, this.page, this.sort).subscribe(res => {
      if (res) {
        this.photos = res.data;
        this.count = res.count;
        console.log(res);
      } 
    });
  }

  private getAuth() {
    this.authService.user.subscribe(auth => {
      this.auth = auth;
    });
  }

  private scrambleArray(arr) {
    let newArr = [];
    let genRand = [];
    arr.forEach((each, i) => {
      let randInd = Math.floor(Math.random() * arr.length);
      while (genRand.includes(randInd)) {
        randInd = Math.floor(Math.random() * arr.length);
      }
      genRand.push(randInd);
      newArr.push(arr[randInd]);
    });
    return newArr;
  }

  private getCategories() {
    this.categoryService.categories.subscribe(res => {
      this.categories = res;
    })
  }

  getPicDetails([e, pic, i, picArr]) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    e.preventDefault();
    this.selPicPar = picArr;
    this.showModal = true;
    this.selPicInd = i;
    this.pictureService.getPicDetails(pic.pid).subscribe(res => {
      this.selPicDetails = res;
    })
    // this.selPicDetails = { ...this.selPicDetails, pid: pic.pid, image: pic.url };
    this.modalCont.nativeElement.scrollTop = 0;
  }

  catChange(el) {
    if (el.checked) {
      console.log(el.value);
      this.router.navigateByUrl(`/category/${el.value.split('|')[1]}`);
    }
  }

  showNext(e, n) {
    if ((n == -1 && this.selPicInd == 0) || (n == 1 && this.selPicInd == this.selPicPar.length - 1)) return;
    this.getPicDetails([e, this.selPicPar[this.selPicInd + n], this.selPicInd + n, this.selPicPar]);
  }

  outputDetails(data) {
    this.getPicDetails(data);
  }

  changeFav(e, pic) {
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
    if (!this.auth) {
      this.authService.authModal.next(true);
    }
  }

  toggleCollection(e, pic) {
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
    if (!this.auth) {
      this.authService.authModal.next(true);
    }
  }

}
