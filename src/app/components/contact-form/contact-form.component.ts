import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm: FormGroup
  
  constructor(){
    this.contactForm = new FormGroup(
      {
        inputName: new FormControl("", [
          Validators.required,
          Validators.minLength(4)
        ]),
        inputPhone: new FormControl("", [
          Validators.required,
          Validators.minLength(10)
        ]),
        inputEmail: new FormControl("", [
          Validators.required,
          Validators.minLength(4)
        ]),
        inputCity: new FormControl("", [
          Validators.minLength(4)
        ]),
        textareaMessage: new FormControl("", [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(500)
        ])
      }
    )
  }

  showFormData(){
    console.log(this.contactForm.value, this.contactForm)
  }
}
