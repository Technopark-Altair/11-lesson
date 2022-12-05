import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  name = ''
  primeName = ''
  constructor(private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.name = data['name']
    })
    this.route.queryParams.subscribe((data) => {
      this.primeName = data['primeName']
    })
  }
}
