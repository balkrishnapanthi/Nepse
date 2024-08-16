import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-all-companies',
  templateUrl: './all-companies.component.html',
  styleUrls: ['./all-companies.component.css']
})
export class AllCompaniesComponent implements OnInit {
  allCompanies: Company[] = [];
  constructor(private testservice: TestService) {

  }
  ngOnInit() {
    this.testservice.getData().subscribe(company => {
      this.allCompanies = company;
      //console.log(this.allCompanies)
    });
  }

}
