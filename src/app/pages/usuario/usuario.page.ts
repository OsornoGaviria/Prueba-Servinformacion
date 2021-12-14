import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServiciosPService} from '../../servicios/servicios-p.service' ;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  user; usuarioD;

  nombre; idUser; avatar;location;userlogin; git;

  constructor(private route: ActivatedRoute,
    private Service:ServiciosPService,
    private router: Router) { }

  ngOnInit() {
    this.user= this.route.snapshot.paramMap.get('user');

    this.Service.verUsuario(this.user).subscribe(res=>{
      this.usuarioD=res;
      this.nombre=this.usuarioD.name;
      this.userlogin=this.usuarioD.login;
      this.git=this.usuarioD.url
      this.idUser=this.usuarioD.id;
      this.avatar=this.usuarioD.avatar_url;
      this.location=this.usuarioD.location;
    })

  }
}
