import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IFormData } from '../../services/data/IFormData';
import { TestService } from '../../services/test.service';

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
  constructor(private fb: FormBuilder, private test: TestService) {}

  ngOnInit(): void {
    this.userData$ = this.test
      .getData()
      .pipe(tap((user) => this.userForm.patchValue(user)));

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
    console.log(this.userForm.value);
  }
}
