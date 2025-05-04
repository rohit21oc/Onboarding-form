import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {

  userForm = this.fb.group({
    fname: ['', Validators.required],
    mname: ['', Validators.required],
    lname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', Validators.required],
    bloodGroup: ['', Validators.required],
    dob: ['', Validators.required],
    merital: ['', Validators.required],
    marriage_date: [''], // optional

    current_address: ['', Validators.required],
    current_country: ['', Validators.required],
    current_state: ['', Validators.required],
    current_city: ['', Validators.required],
    current_pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    current_contact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],

    permanent_address: ['', Validators.required],
    permanent_country: ['', Validators.required],
    permanent_state: ['', Validators.required],
    permanent_city: ['', Validators.required],
    permanent_pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    permanent_contact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],

    emergency_contact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    emergency_name: ['', Validators.required],
    emergency_relationship: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private router: Router
  ) {}

  submitForm() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      alert("Please fill all required fields correctly.");
      return;
    }

    console.log('Form Submitted', this.userForm.value);
    this.userService.setFormData('Personal Data', this.userForm.value);
    this.userForm.reset();
    this.router.navigate(['/kyc']);
  }

  onSameAsCurrentChange(event: any): void {
    const checked = event.target.checked;

    if (checked) {
      this.userForm.patchValue({
        permanent_address: this.userForm.value.current_address,
        permanent_country: this.userForm.value.current_country,
        permanent_state: this.userForm.value.current_state,
        permanent_city: this.userForm.value.current_city,
        permanent_pincode: this.userForm.value.current_pincode,
        permanent_contact: this.userForm.value.current_contact
      });
    } else {
      this.userForm.patchValue({
        permanent_address: '',
        permanent_country: '',
        permanent_state: '',
        permanent_city: '',
        permanent_pincode: '',
        permanent_contact: ''
      });
    }
  }

  // For template: helper method to access controls easily
  get f() {
    return this.userForm.controls;
  }
}
