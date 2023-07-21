import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  // authenticate(email:string,password:string){

  //   sessionStorage.setItem("authenticateduser",email);
  //   return true;
//}

  constructor() { }

  authenticate(email:string,password:string){

    sessionStorage.setItem("authenticateduser",email);
    return true;
}




  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateduser');
    return !(user==null);
  }

  logout(){
    sessionStorage.removeItem('authenticateduser');
  }

// isUserLoggedIn(){
//   let user = sessionStorage.getItem('authenticateduser');
//   return !(user==null);
// }

// logout(){
//   sessionStorage.removeItem('authenticateduser');
// }




  isAdminLoggedIn(){
    let admin = sessionStorage.getItem('authenticatedadmin');
    return !(admin==null);
  }


  Adminlogout(){
    sessionStorage.removeItem('authenticatedadmin');
  }
  
}
