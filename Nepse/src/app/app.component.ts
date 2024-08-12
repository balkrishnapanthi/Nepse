import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Nepse';
  allCompanies: Company [] = [];
  constructor(private testservice: TestService) {

  }
  ngOnInit() {
    this.testservice.getData().subscribe(company => {
      this.allCompanies = company;
    //console.log(this.allCompanies)
    });
  }
}
