import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: '',
      email: '',
      blog: '',
      twitter: '',
      company: '',
      location: '',
      hireable: '',
      bio: '',
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
