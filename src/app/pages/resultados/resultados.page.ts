import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServiciosPService} from '../../servicios/servicios-p.service' ;

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {

  name; usuarios; swt=0;
  constructor(private route: ActivatedRoute,
    private Service:ServiciosPService,
    private router: Router) { }

  ngOnInit() {
    this.name= this.route.snapshot.paramMap.get('name');

  
    this.Service.verUsuarios(this.name).subscribe(res=>{
      this.usuarios=res;
      this.usuarios=this.usuarios.items;
       if(this.usuarios.length>0){
          this.swt=1;
       }
      console.log( this.usuarios +  this.swt )
    })

  }

  verDetalles(user){
    this.router.navigate(['/usuario', user])
  }

}
