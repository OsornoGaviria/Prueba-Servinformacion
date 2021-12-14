import { Component, OnInit } from '@angular/core';
import {  ModalController, NavParams} from '@ionic/angular'; 

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {

  mesage;
  constructor( private modal:ModalController,
    private navparams: NavParams) { }

  ngOnInit() {
    this.mesage=this.navparams.get('data');
  }


  cerrar(){
    this.modal.dismiss();
  }
}
