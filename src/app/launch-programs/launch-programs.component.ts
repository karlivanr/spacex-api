import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-launch-programs',
  templateUrl: './launch-programs.component.html',
  styleUrls: ['./launch-programs.component.scss']
})
export class LaunchProgramsComponent implements OnInit {
  launchDataArray = [];
  isLoading = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getAllLaunches();
  }

  getAllLaunches(): any{
    this.isLoading = true;
    this.appService.getAllLaunches()
      .subscribe((response: any) => {
        console.log(response);
        this.launchDataArray =  response;
        this.isLoading = false;
      }, err => {
        console.log(err);
      })
  }
}
