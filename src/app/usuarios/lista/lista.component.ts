import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
	selector: 'app-lista',
	templateUrl: './lista.component.html',
	styles: [
	]
})
export class ListaComponent implements OnInit {

	usuarios: Usuario[] = [];

	constructor(public usuarioSrv: UsuarioService) { }

	ngOnInit(): void {
		this.usuarioSrv.getUsers()
			.subscribe(data => {
				this.usuarios = data;
			});
	}

}
