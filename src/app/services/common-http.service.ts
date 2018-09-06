import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/toPromise';
// import { HttpClient } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class CommonHttpService {

  constructor(private http: HttpClient) { }

  save(url, postData) {
    return new Promise((resolve, reject) => {
      this.http.post(url, postData).subscribe(
        (res: any) => {
          resolve(res);
        },
        error => {
          reject(error);
        }
      )
    });
  }

  updateRecord(url, postData) {
    return new Promise((resolve, reject) => {
      this.http.post(url, postData).subscribe(
        (res: any) => {
          resolve(res);
        },
        error => {
          reject(error);
        }
      )
    });
  }

  getDetailForUpdate(url) {
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(
        (res: any) => {
          resolve(res);
        },
        error => {
          reject(error);
        }
      )
    });
  }

  recordDelete(url) {
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(
        (res: any) => {
          resolve(res);
        },
        error => {
          reject(error);
        }
      )
    });
  }

  getAllRecord(url, postData: any = {}, method = "") {
    if (method == "post") {
      return new Promise((resolve, reject) => {
        this.http.post(url, postData).subscribe(
          (res: any) => {
            resolve(res);
          },
          error => {
            reject(error);
          }
        )
      });
    } else {
      return new Promise((resolve, reject) => {
        this.http.get(url).subscribe(
          (res: any) => {
            resolve(res);
          },
          error => {
            reject(error);
          }
        )
      });
    }
  }
}
