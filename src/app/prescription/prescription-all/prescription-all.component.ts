import { Component, OnInit } from '@angular/core';
import { Prescription } from 'src/app/models/prescription';
import { PrescriptionService } from '../prescription.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prescription-all',
  templateUrl: './prescription-all.component.html',
  styleUrls: ['./prescription-all.component.css']
})
export class PrescriptionAllComponent implements OnInit {

  prescription$: Observable<Array<Prescription>>;
  constructor(private prescriptionService: PrescriptionService) { }

  ngOnInit() {
    this.prescription$=this.prescriptionService.getAllPrescriptions()
  }

}
