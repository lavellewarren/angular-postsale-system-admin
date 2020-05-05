import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-track-number',
  templateUrl: './track-number.component.html',
  styleUrls: ['./track-number.component.css']
})
export class TrackNumberComponent implements OnInit {
  // tracking: boolean = true
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  onEnterTrackingNumber() {
    this.router.navigate(["/app/receiveItems/identifyPackage/findreturn"]);
  }
}
