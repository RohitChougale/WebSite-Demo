import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data1:any
  constructor(private service:ServiceService) { }
  data:{title:string,img:string}[]=[]

  ngOnInit(): void {

    this.service.getdata()
    .subscribe((res:any)=>{
     this.data1=res
      console.log(this.data)
    })
  }

}
