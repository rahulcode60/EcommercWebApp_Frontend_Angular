import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  displayedColumns: string[] = ['id', 'name', 'description', 'address', 'mobileNo', 'actions'];
  dialog: any;

  constructor(private userService: UserService,
              private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users: any) => this.users = users);
  }

  // openCreateDialog(): void {
  //   const dialogRef = this.dialog.open(UserCreateDialogComponent, {
  //     width: '500px',
  //     data: {}
  //   });
  
  //   dialogRef.afterClosed().subscribe((result: any) => {
  //     if (result) {
  //       this.userService.createUser(result).subscribe(() => {
  //         this.getUsers();
  //       });
  //     }
  //   });
  // }
  
  // openUpdateDialog(user: any): void {
  //   const dialogRef = this.dialog.open(UserUpdateDialogComponent, {
  //     width: '500px',
  //     data: {user: user}
  //   });
  
  //   dialogRef.afterClosed().subscribe((result: any) => {
  //     if (result) {
  //       this.userService.updateUser(user.id, result).subscribe(() => {
  //         this.getUsers();
  //       });
  //     }
  //   });
  // }

  deleteUser(user: any): void {
    this.userService.deleteUser(user.id).subscribe(() => {
      this.getUsers();
    });
  }

  isLoggedIn(): any {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
