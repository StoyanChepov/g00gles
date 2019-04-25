import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prescription } from '../models/prescription';
import { Observable } from 'rxjs';


const createP = "http://localhost:5000/prescription/create";

const getAllP = "http://localhost:5000/prescription/all";

const getSingleP = "http://localhost:5000/prescription/details/";

@Injectable({
  providedIn: 'root'
})

export class PrescriptionService {
  constructor(private http: HttpClient) {
  }

  createPrescription(data) {
    return this.http.post(createP, data);
  }

  getAllPrescriptions(): Observable<Array<Prescription>> {
    return this.http.get<Array<Prescription>>(getAllP)
  }

  getPrescription(id): Observable<Prescription>  {
    return this.http.get<Prescription>(getSingleP + id)
  }
}
