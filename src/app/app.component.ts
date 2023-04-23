import { Component } from '@angular/core';
import { RequirementListComponent } from './requirement-list/requirement-list.component';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-budget-app';

  isLoggedin : string =''

  constructor(private authService: AuthService) {
  }

  loggout(): void{
    this.authService.setLoggedOut()
  }

  ngOnInit() {
    this.authService.getLoggedInUser()
    this.authService.shareloggedInUser.subscribe(v => this.isLoggedin = v)
  }


}
