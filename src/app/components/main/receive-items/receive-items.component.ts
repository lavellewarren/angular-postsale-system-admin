import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-receive-items',
  templateUrl: './receive-items.component.html',
  styleUrls: ['./receive-items.component.css', '../main.component.css']
})
export class ReceiveItemsComponent implements OnInit {

  constructor(private util: UtilsService) { }

  ngOnInit() {
  }
}
