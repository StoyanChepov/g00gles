import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PrescriptionService } from '../prescription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private prescriptionService: PrescriptionService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      reyesphere: ['', [Validators.required]],
      reyecylinder: ['', [Validators.required]],
      raxis: ['', Validators.nullValidator],
      leyesphere: ['', [Validators.required]],
      leyecylinder: ['', [Validators.required]],
      laxis: ['', Validators.nullValidator],
      additional: ['', Validators.nullValidator],
      pupilDist1: ['', [Validators.required]],
      pupilDist2: ['', [Validators.required]],
      birthY: ['', [Validators.required, Validators.min(1900), Validators.max(2020)]],
      prescName: ['', [Validators.required]]

    })
  }
  createPrescription(data) {
    console.log(this.form)
    this.prescriptionService.createPrescription(this.form.value).subscribe((data) => {
      this.router.navigate(['/prescription/all'])
    })
  }
  get f() {
    return this.form.controls;
  }
  get invalid() {
    return this.form.invalid;
  }

}
