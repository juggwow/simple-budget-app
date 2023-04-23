import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './models/login';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggedInUser } from './models/loggedin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  //loggedInUser: LoggedInUser | null = null;

  private loggedInUser = new BehaviorSubject('')
  shareloggedInUser = this.loggedInUser.asObservable()

  constructor(private httpClient: HttpClient) {}

  setUser(usersession: string){
    this.loggedInUser.next(usersession)
  }

  setLoggedInUser(loggedInUser: LoggedInUser) {
    sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
    //this.loggedInUser.next(true)
  }

  setLoggedOut(){ 
    sessionStorage.removeItem('loggedInUser')
    this.loggedInUser.next('')
  }

  getLoggedInUser(): LoggedInUser | null {
    const loggedInUser = sessionStorage.getItem('loggedInUser');

    if(loggedInUser){
      const myUser: LoggedInUser = JSON.parse(loggedInUser) as LoggedInUser
      this.loggedInUser.next(myUser.user.email)
      return myUser
    }
    else{
      this.loggedInUser.next('')
      return null
    }
  }

  login(login: Login): Observable<LoggedInUser> {
    const url = 'http://localhost:3000/login';
    return this.httpClient.post<LoggedInUser>(url, login);
  }

}
