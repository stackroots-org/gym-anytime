import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sloat-creation',
  templateUrl: './sloat-creation.component.html',
  styleUrls: ['./sloat-creation.component.css']
})
export class SloatCreationComponent implements OnInit {
  time = {hour: 13, minute: 30};
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      persons: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required]
  });
  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))

}

}
