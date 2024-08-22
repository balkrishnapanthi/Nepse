import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../../services/test.service';
import { companyDetails } from '../../models/companyDetails';
import { nepseData } from '../../models/nepseData';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  dtTrigger: Subject<any> = new Subject();
  @ViewChildren(DataTableDirective)
  dtElements: QueryList<any>;
  symbol: string = "";
  companyDetail: companyDetails = new companyDetails(); 
  nepseData: nepseData[] = [];
  dtOptions: DataTables.Settings = {};
  constructor(private route: ActivatedRoute, private test: TestService) {

  }

  ngAfterViewInit() {
    this.dtTrigger.next(false);
  }
  ngOnInit(): void {


    

    this.symbol = this.route.snapshot.params["symbol"];
    console.log(this.symbol);
    this.test.getCompanyData(this.symbol).subscribe(compData => {
      this.companyDetail = compData;
      console.log(compData)

      for (let i = 0; i < this.companyDetail.t.length; i++){
        let nepData = new nepseData();
        nepData.t = this.companyDetail.t[i];
        nepData.o = this.companyDetail.o[i];
        nepData.c = this.companyDetail.c[i];
        nepData.h = this.companyDetail.h[i];
        nepData.l = this.companyDetail.l[i];
        nepData.v = this.companyDetail.v[i];
        this.nepseData.push(nepData);
      }
    });
    this.reRenderer();
  }
  reRenderer(): void { // renders tables after the data is successfully fetched
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (dtElement.dtInstance)
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });

    });
    this.dtTrigger.next(true); //triggers table    
  }
}
