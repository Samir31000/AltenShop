import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/utilisator/data-access/AuthService';
import { Utilisator } from 'app/utilisator/data-access/utilisator.model';
import { UtilisatorService } from 'app/utilisator/data-access/utilisators.service';

@Component({
  selector: 'app-utilisator-comp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './utilisator-comp.component.html',
  styleUrl: './utilisator-comp.component.css'
})
export class UtilisatorCompComponent {

  private utilisator : Utilisator | any;
  username: string = '';

  constructor(private utilisatorService : UtilisatorService, private authService: AuthService, private router: Router){}

  onLogin(){
    if (this.username.trim()) {
      this.utilisatorService.getUtilisatorByName(this.username).subscribe({
        next : (dataUtilisator)=>{
          this.utilisator = dataUtilisator
        },
        error : (erreur)=>{console.log(erreur)},
        complete : ()=>{

          if (this.utilisator.name){
            this.authService.login();
            console.log('Utilisateur connecté :', this.username);
      
            this.utilisatorService.utilisator = this.utilisator;
            this.router.navigate(['/products/list']);
          }else {
            alert('Utilisateur non trouvé');
            this.username = ""
            this.utilisator = null;
          }
        }
      });
    } else {
      alert('Veuillez entrer un nom d\'utilisateur');
    }
  }
}
