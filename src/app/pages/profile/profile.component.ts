import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user = {
    name: '',
    email: '',
    bio: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile() {
    const loggedInUser = this.authService.getUser();
    this.user = {
      name: loggedInUser,
      email: `${loggedInUser}@pokemon.com`,
      bio: 'Treinador Pokémon em Pallet Town',
    };
  }

  saveProfile() {
    this.authService.login(this.user.name, '');
    console.log(this.user);
  }
}
