import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
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

  constructor(private fb: FormBuilder, private test: TestService) {}

  ngOnInit(): void {
    this.userData$ = this.test.getData();
    console.log(this.userData$);
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
