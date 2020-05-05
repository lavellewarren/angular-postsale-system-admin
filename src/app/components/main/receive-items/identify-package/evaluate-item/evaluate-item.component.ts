import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-evaluate-item',
  templateUrl: './evaluate-item.component.html',
  styleUrls: ['./evaluate-item.component.css']
})
export class EvaluateItemComponent implements OnInit {
  step: any = 0;
  flag_active: any = false;
  select_no: any = false;
  select_yes: any = false;
  select_item: any = 0;
  complete_item: any = [];
  imei_number: any = '';
  index: any = 0;
  flag_confirm: any = false;
  products: any = [
    {
      id: 1,
      title: "Apple iPhone 6S 16GB Gold GSM (PGL)",
      sku: 'AP83439',
      condition: 'CR | A Stock',
      category: 'iPhone',
      qty: 2,
      price: 129.99,
      photo: 'assets/images/component.png'
    },
    {
      id: 3,
      title: "Bose SoundLink Around-Ear Wireless Headphones II",
      sku: 'AP83439',
      condition: 'CR | A Stock',
      category: 'iPhone',
      qty: 1,
      price: 129.99,
      photo: 'assets/images/Image 5.png'
    }
  ]

  @ViewChild('printModal', {static: false}) printModal;
  private printModalRef;

  constructor(private modalService: ModalManager) { }

  ngOnInit() {
    this.select_item = this.products[this.index].id;
    console.log(this.select_item);
    this.products.forEach(product => {
      this.complete_item.push({
        id: product.id,
        flag: false
      })
    });
  }

  activeNo() {
    this.select_no = true;
    this.select_yes = false;
    this.flag_active = true;
  }

  activeYes() {
    this.select_yes = true;
    this.select_no = false;
    this.flag_active = true;
  }
  
  backStep() {
    this.step--;
  }

  nextStep() {
    this.step++;
  }

  setIMEI(text: any) {
    this.imei_number = Number(text);
  }

  cancelIMEI() {
    this.imei_number = '';
  }

  openPrintModal() {
    this.printModalRef = this.modalService.open(this.printModal, {
      size: "md",
      modalClass: 'mymodal',
      hideCloseButton: true,
      centered: true,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: true,
      backdropClass: "modal-backdrop"
    })
    this.flag_confirm = true;
  }

  confirm() {
    this.step = 0;
    this.flag_confirm = false;
    this.select_no = false;
    this.select_yes = false;
    this.imei_number = '';
    this.flag_active = false;
    this.complete_item[this.index].flag = true;
    this.complete_item[this.index].id = this.select_item;
    this.index++;
    this.select_item = this.complete_item[this.index].id;
  }

  selectItem(id: any) {
    this.select_item = id;
  }

  closePrintModal() {
    this.modalService.close(this.printModalRef);
  }
}
