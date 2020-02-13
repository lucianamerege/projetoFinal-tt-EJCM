import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";
import { LivroService } from '../../services/livro.service';
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.page.html',
  styleUrls: ['./oferta.page.scss'],
})
export class OfertaPage implements OnInit {

  ofertaForm: FormGroup;
  photoFile: File;

  livroObj:any = {
    photo: '',
  }

  constructor(public formbuilder: FormBuilder, private router: Router, public storage: Storage, public livroService: LivroService) {
    this.ofertaForm = this.formbuilder.group({
      name: [null, [Validators.required]],
      autor: [null, [Validators.required]],
      estado: [null, [Validators.required]],
      preco: [null, [Validators.required, Validators.maxLength(10)]],
      genero: [null, [Validators.required]],
      resumo: [null, [Validators.required, Validators.maxLength(200)]],
    });
  }
  ngOnInit(){}

  voltaPraHome(){
    this.router.navigate(['/tabs/tab2']);
  }
  criaLivro(ofertaForm) {
    console.log(ofertaForm);
    if ( ofertaForm.status == "VALID") {
      let formData = new FormData(); // Inicia o objeto especial FormData
      
      formData.append("name", ofertaForm.value.name);
      formData.append("autor", ofertaForm.value.autor);
      formData.append("estado", ofertaForm.value.estado);
      formData.append("preco", ofertaForm.value.preco);
      formData.append("genero", ofertaForm.value.genero);
      formData.append("resumo", ofertaForm.value.resumo);
      if(this.photoFile) formData.append("photo", this.photoFile); // Coloca o arquivo da foto no FormData, se existir
      
      this.livroService.criaLivro(formData).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/tabs/tab2']);
        }
      )
    }
  }
  downloadPhoto(photo){
    this.photoFile = photo[0]; // Pega Foto do Input
    let reader = new FileReader(); // Inicia o Leitor de Arquivos
    reader.readAsDataURL(photo[0]); // Manda ler o arquivo da foto
    reader.onload = (file: any) => {
      this.livroObj.photo = file.target.result; // Muda ****LOCALMENTE**** a imagem de perfil do Usuário
    }
  }
}
