import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';
import { FirestoreService } from '../../services/data/firestore.service';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.sass'
})

export class HomepageComponent {
	constructor(private authService: AuthService, private dataService: FirestoreService) {

	}
	loginWithGoogle() {
		this.authService.googleSignIn().then(user => {
		  if (user) {
			console.log('Login successful:', user.user.displayName);
			this.dataService.getUserByUserId(user.user.uid).subscribe((response) => {
				if(!response) {
					this.dataService.createNewUser(user.user).then((created) => {
						console.log("user added");
					})
				}
			})
		  }
		});
	  }
}
