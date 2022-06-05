import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/_services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
constructor(private service:OrderDetailsService) { }
 bookData:any;
  ngOnInit(): void {
    this.bookData = this.service.bookDetails;
  }

}
