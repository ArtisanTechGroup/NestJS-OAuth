import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IFormData } from '../../services/data/IFormData';
import { UserDataService } from '../../services/user-data.service';
import { Constants } from '../constants/constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  userData$: Observable<IFormData>;
  validBlogUrl: string =
    '^((https?|ftp|smtp)://)?(www.)?[a-z0-9]+.[a-z]+(/[a-zA-Z0-9#]+/?)*$';
  pageLoad = {
    showSpinner: true,
    showForm: false,
  };
  constructor(private fb: FormBuilder, private test: UserDataService) {}

  ngOnInit(): void {
    this.userData$ = this.test
      .getData()
      .pipe(tap((user) => this.userForm.patchValue(user)));
    this.userData$.subscribe(
      () => (
        (this.pageLoad.showSpinner = false), (this.pageLoad.showForm = true)
      )
    );
    this.userForm = this.fb.group({
      name: '',
      email: ['', [Validators.email]],
      blogUrl: ['', [Validators.pattern(this.validBlogUrl)]],
      twitterHandle: '',
      company: '',
      location: '',
      hireable: '',
      bio: ['', [Validators.maxLength(160)]],
    });
  }
  get formValidators() {
    return {
      email: this.userForm.get('email'),
      blogUrl: this.userForm.get('blogUrl'),
      bio: this.userForm.get('bio'),
    };
  }
  onSubmit() {
    if (this.userForm.status === Constants.isValid) {
      Swal.fire({
        icon: 'success',
        text: 'Your account has been updated',
        showConfirmButton: false,
        timer: 2000,
        background: 'gray',
      });
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Check your content',
        showConfirmButton: false,
        timer: 2000,
        background: 'gray',
      });
    }
    console.log(this.userForm);
  }
}
