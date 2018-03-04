import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
import { List } from '../list';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']

})
export class DirectoryComponent implements OnInit {

  params:String;
  list:List[] = [];
  term:String;
  

  constructor(
    private route: ActivatedRoute,
    private logging: LoggingService,
    private data: DataService,
  ) { }

  ngOnInit() {
    let param = this.route.snapshot.paramMap.get('id');;
    if(param){
      this.params = param;
    }
    this.logging.log("I'm a service");
    this.data.fetchData().subscribe(data => { this.list= data});
  }

}
