import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { emailValidatorCustom } from 'src/app/shared/custom-validator-email';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  areaCodes: string[] = ['+54', '+598', '+56'];

  messageLength: number = 0;

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      surname: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: this.formBuilder.control('', [
        Validators.required,
        emailValidatorCustom,
      ]),
      phone: this.formBuilder.group({
        code: this.formBuilder.control(''),
        number: this.formBuilder.control(''),
      }),
      message: this.formBuilder.control('', [
        Validators.required,
        Validators.maxLength(300),
      ]),
      suscription: this.formBuilder.control(false),
    });
  }

  getErrors(formControlName: string): ValidationErrors | null | undefined {
    return this.userForm.get(formControlName)?.errors;
  }

  validationStyleClass(formControlName: string): string {
    const control = this.userForm.get(formControlName);

    return control?.touched
      ? control?.invalid
        ? 'is-invalid'
        : 'is-valid'
      : '';
  }

  onSubmit(): void {
    console.log(this.userForm.value);

    if (this.userForm.invalid) {
      console.log('form invalido');

      this.userForm.markAllAsTouched();
    } else {
      console.log(this.userForm.value);
    }
  }

  ngOnInit(): void {
    this.userForm.get('message')?.valueChanges.subscribe((value) => {
      this.messageLength = value.length;
    });
  }
}
