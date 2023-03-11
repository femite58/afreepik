import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import * as localforage from 'localforage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }
}
