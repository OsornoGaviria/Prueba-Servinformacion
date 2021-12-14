import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosPService} from '../servicios/servicios-p.service' ;
import { ErrorComponent} from '../../app/alerta/error/error.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit   {

  image;listado; parametro;
  constructor(private Service:ServiciosPService,
    private router: Router,
    private modal: ModalController) {}

  ngOnInit(){

    this.image="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_400/https://servinformacion.com/wp-content/uploads/2020/10/LogoServinformacion-02-1-400x118.png";
  }

  buscar(){
    var param =this.parametro;

    if( param==undefined || param=='' || param.length<4 ){
      this.ErrorSolicitud('Ingrese mínimo 4 caracteres para continuar su busqueda');
    }else if(param=="gcpglobal"){
      this.ErrorSolicitud('La palabra "gcpglobal" no esta permitida');
    }else{

      this.router.navigate(['/resultados', this.parametro])
    }
   

  }

  async ErrorSolicitud(data){

    const modal = await this.modal.create({
       component: ErrorComponent,
       cssClass: 'my-custom-modal-css-alert',
       componentProps:{
        data: data
       },
       showBackdrop:true,
       backdropDismiss:false,
     } )
  
    return await modal.present();  
  
  }

}
