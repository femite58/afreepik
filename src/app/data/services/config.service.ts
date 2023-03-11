import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  baseUrl = 'http://192.168.43.13/afreepik/';

  treatImgUrl(url) {
    try {
      let ip = url.split('//')[1].split('/')[0];
      let repIp = this.baseUrl.split('//')[1].split('/')[0];
      return ip == 'localhost' || ip.match(/\d+\.\d+\.\d+\.\d+/) ? url.replace(ip, repIp) : url;
    } catch (e) {
      return url;
    }
  }
}
