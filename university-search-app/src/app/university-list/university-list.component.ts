import { Component } from '@angular/core';
import { UniversityService} from '../university.service';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrl: './university-list.component.css'
})
export class UniversityListComponent {
  list: any;

  constructor(private universityService : UniversityService) {}

  ngOnInit(){
    // this.universityService.getUniversityList('Bangladesh');
    
    this.universityService.universityList$.subscribe( response => {
      this.list = response;
      console.log(this.list);
    });
  }
}
