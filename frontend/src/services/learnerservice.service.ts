import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URLS } from './apiconfig';

@Injectable({
  providedIn: 'root'
})
export class LearnerserviceService {

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get(URLS.FETCH_ALL);
  }

  getData(id: string) {
    return this.http.get(URLS.FETCH_SINGLE + `${id}`)
  }

  insertData(data: any) {
    return this.http.post(URLS.INSERT, data)
  }

  updateData(id: string, data: any) {
    return this.http.patch(URLS.UPDATE + `${id}`, data)
  }

  deleteData(id: string) {
    return this.http.delete(URLS.DELETE + `${id}`)
  }

}