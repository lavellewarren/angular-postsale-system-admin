import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-find-return',
  templateUrl: './find-return.component.html',
  styleUrls: ['./find-return.component.css']
})
export class FindReturnComponent implements OnInit {
  allProducts = [
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
      id: 2,
      title: "Apple iPhone 10 16GB White",
      sku: 'AP83439',
      condition: 'CR | A Stock',
      category: 'iPhone',
      qty: 1,
      price: 129.99,
      photo: 'assets/images/component.png'
    }
  ];
  searchedItems = [
  ];
  categories = [
    'category 1',
    'category 2',
    'category 3',
    'category 4',
    'category 5',
  ];
  conditions = [
    'condition 1',
    'condition 2',
    'condition 3',
    'condition 4',
    'condition 5',
  ];
  numReturnedItems = 2;
  addedItems: any;
  flag_full: boolean;
  numAddedItems = 0;
  flag_search = true;
  searchTextUnidentified = "";
  products: any

  @ViewChild('returnedModal', {static: false}) returnedModal;
  @ViewChild('addItemModal', {static: false}) addItemModal;
  @ViewChild('printModal', {static: false}) printModal;
  private returnedModalRef;
  private addItemModalRef;
  private printModalRef;

  constructor(private modalService: ModalManager) { }

  openReturnedModal() {
    this.returnedModalRef = this.modalService.open(this.returnedModal, {
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
  }

  closeReturnedModal(){
    this.modalService.close(this.returnedModalRef);
  }

  openAddItemModal() {
    this.addItemModalRef = this.modalService.open(this.addItemModal, {
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
  }

  closeAddItemModal(){
    this.modalService.close(this.addItemModalRef);
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
  }

  closePrintModal() {
    this.modalService.close(this.printModalRef);
  }

  ngOnInit() {
    this.addedItems = new Array(this.numReturnedItems);
    this.flag_full = false;
    this.products = this.allProducts;
    this.openReturnedModal();
  }

  onAddItem(id: any) {
    this.numAddedItems++;
    if (this.numAddedItems > this.numReturnedItems) return;
    this.products.forEach(product => {
      if (product.id == id) {
        product.qty--;
        this.addedItems[this.numAddedItems - 1] = {
          id: product.id,
          title: product.title,
          photo: product.photo
        };
      }
    });
    if (this.numAddedItems == this.numReturnedItems)
      this.flag_full = true;
  }

  onDeleteItem(id: any) {
    let flagExist = true;
    console.log("addedItems => ", this.addedItems);
    this.numAddedItems--;
    if (this.numAddedItems < 0) return;
    console.log("onDeleteItem => ", id);
    this.addedItems = this.arrayRemove(this.addedItems, id);
    this.addedItems.push({});
    this.products.forEach((product, index) => {
      if (product.id == id) {
        product.qty++;
        flagExist = false;
      }
    });
    if (flagExist) {
      this.allProducts.forEach((product, index) => {
        if (product.id == id) {
          this.products.push(product);
        }
      });
    }
    if (this.numAddedItems != this.numReturnedItems)
      this.flag_full = false;
  }

  onSetNumOfItems() {
    if (this.numReturnedItems > this.addedItems.length) {
      let num = this.numReturnedItems - this.addedItems.length;
      for (let index = 0; index < num; index++) {
        this.addedItems.push({});
      }
    } else {
      for (let index = this.addedItems.length; index > this.numReturnedItems; index--) {
        this.addedItems.pop();
      }
    }
    this.closeReturnedModal();
  }

  onIncreaseNumber() {
    this.numReturnedItems++;
  }

  onDecreaseNumber() {
    this.numReturnedItems--;
  }
  
  // onOpenReturnedNumberModal(template: TemplateRef<any>) {
  //   this.openReturnedModal();
  //   // this.returnedNumberModalRef = this.modalService.show(template, {class: 'modal-returned'});
  // }

  // onOpenAddItemModal(template: TemplateRef<any>) {
  //   this.openAddItemModal();
  //   // this.addItemModalRef = this.modalService.show(template, {class: 'modal-additem'});
  // }

  onAddUnidentifiedItems() {

  }

  arrayRemove(arr: any, value: any) {
    return arr.filter(function(ele: any, index: any) { 
      console.log("index => ", index)
      return ele.id != value; 
    });
  }

  isObjectEmpty(card: any) {
    if (card == undefined || card == null) return true;
    return Object.keys(card).length === 0;
  }

  clickSearch() {
    this.flag_search = true;
  }

  clickUnrecognized() {
    this.flag_search = false;
  }

  onSearchItems() {
    this.searchedItems = [
      {
        id: 1,
        photo: '',
        product_id: '10006',
        name: 'Bose SoundLink Around-Ear Wireless headphones II',
        category: 'CS Item',
        condition: 'CR | A Stock'
      }, 
      {
        id: 2,
        photo: '',
        product_id: '10006',
        name: 'Bose 2 SoundLink Around-Ear Wireless headphones I',
        category: 'Bose',
        condition: 'CR | B Stock'
      }
    ];
  }
}
