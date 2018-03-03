import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  params:String;
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let param = this.route.snapshot.paramMap.get('id');;
    if(param){
      this.params = param;
    }
  }

}
