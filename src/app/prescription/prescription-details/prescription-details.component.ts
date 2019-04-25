import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Prescription } from 'src/app/models/prescription';
import { PrescriptionService } from '../prescription.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrls: ['./prescription-details.component.css']
})
export class PrescriptionDetailsComponent implements OnInit {

  prescription: Prescription;
  constructor(private route: ActivatedRoute, private prescriptionService: PrescriptionService) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      let id = data['id'];
      this.prescriptionService.getPrescription(id).subscribe(data => {
        this.prescription = data;
      })
    })

  }
}
