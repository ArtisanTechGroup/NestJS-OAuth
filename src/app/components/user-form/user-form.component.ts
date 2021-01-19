import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IFormData } from '../../services/data/IFormData';
import { TestService } from '../../services/test.service';
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
  constructor(private fb: FormBuilder, private test: TestService) {}

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
      blog: ['', [Validators.pattern(this.validBlogUrl)]],
      twitter: '',
      company: '',
      location: '',
      hireable: '',
      bio: ['', [Validators.maxLength(160)]],
    });
  }
  get formValidators() {
    return {
      email: this.userForm.get('email'),
      blog: this.userForm.get('blog'),
      bio: this.userForm.get('bio'),
    };
  }
  onSubmit() {
    if (this.userForm.status === 'VALID') {
      Swal.fire({
        icon: 'success',
        title: 'Wow',
        text: 'Your account has been updated',
        showConfirmButton: false,
        timer: 2000,
        background: 'gray',
      });
    } else {
      Swal.fire({
        icon: 'error',
        text: 'check your content',
        showConfirmButton: false,
        timer: 2000,
        background: 'gray',
      });
    }
    console.log(this.userForm);
  }
}
