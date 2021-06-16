import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-launch-programs',
  templateUrl: './launch-programs.component.html',
  styleUrls: ['./launch-programs.component.scss']
})
export class LaunchProgramsComponent implements OnInit {
  launchYears = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020',];
  launchDataArray = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getAllLaunches();
  }

  getAllLaunches(): any{
    this.appService.getAllLaunches()
      .subscribe((response: any) => {
        console.log(response);
        this.launchDataArray =  response;
      }, err => {
        console.log(err);
      })
  }
}
