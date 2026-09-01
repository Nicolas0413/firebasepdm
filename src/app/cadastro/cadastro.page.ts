import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/authService';
import { IonButton, IonCard, IonCardContent, IonContent, IonItem, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, IonContent, IonCard, IonCardContent, IonItem, IonLabel, IonButton],
})
export class CadastroPage {

  email = '';
  senha = '';
  mensagemErro = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  async cadastrar() {
    this.mensagemErro = '';

    if (!this.email || !this.senha) {
      this.mensagemErro = 'Preencha e-mail e senha.';
      return;
    }

    if (!this.email.includes('@')) {
      this.mensagemErro = 'Digite um e-mail válido.';
      return;
    }

    if (this.senha.length < 6) {
      this.mensagemErro = 'A senha precisa ter pelo menos 6 caracteres.';
      return;
    }

    try {
      await this.auth.cadastrar(this.email, this.senha);
      this.router.navigate(['/home']);
    } catch (e: any) {
      this.mensagemErro = this.auth.traduzirErro(e.code);
    }
  }

}
