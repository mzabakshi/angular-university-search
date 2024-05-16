import { Component } from '@angular/core';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {

  country = 'Bangladesh';

  constructor(private universityService : UniversityService){}

  ngOnInit(){
    this.universityService.getUniversityList(this.country);
  }

  onSubmit() : void {
    this.universityService.getUniversityList(this.country);
  }

}
