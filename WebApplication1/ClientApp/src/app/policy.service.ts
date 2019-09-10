import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { Policy } from "./types/policy.type";

// TODO: move to config
const endpoint = "https://localhost:44319/api/";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class PolicyService {
  constructor(private http: HttpClient) {}

  getPolicies(): Observable<Policy[]> {
    return this.http
      .get<Policy[]>(endpoint + "policy")
      .pipe(
        map((data: any[]) => data.map((item: any) => this.mapPolicy(item)))
      );
  }

  mapPolicy(data: any): Policy {
    return {
      policyNumber: data.policyNumber,
      policyHolder: {
        name: data.policyHolder.name,
        age: data.policyHolder.age,
        gender: data.policyHolder.gender // ? "Female" : "Male"
      }
    };
  }
  // addProduct (product): Observable<any> {
  //   console.log(product);
  //   return this.http.post<any>(endpoint + 'products', JSON.stringify(product), httpOptions).pipe(
  //     tap((product) => console.log(`added product w/ id=${product.id}`)),
  //     catchError(this.handleError<any>('addProduct'))
  //   );
  // }

  updatePolicy(policy: Policy): Observable<Policy[]> {
    return this.http
      .put(
        endpoint + "policy/" + policy.policyNumber,
        JSON.stringify(policy),
        httpOptions
      )
      .pipe(
        map((data: any[]) => data.map((item: any) => this.mapPolicy(item)))
      );
  }

  deletePolicy(policyNumber: number): Observable<Policy[]> {
    return this.http
      .delete<any>(endpoint + "policy/" + policyNumber, httpOptions)
      .pipe(
        map((data: any[]) => data.map((item: any) => this.mapPolicy(item)))
      );
  }
}
