import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private universityListSubject = new BehaviorSubject<any>(null);
  universityList$: Observable<any> = this.universityListSubject.asObservable();

  constructor(private http: HttpClient) {}

  getUniversityList(country: string) {
    let url = 'http://universities.hipolabs.com/search?country=' + country;
    this.http.get(url).subscribe(data => {
      this.universityListSubject.next(data);
    });
  }
}
