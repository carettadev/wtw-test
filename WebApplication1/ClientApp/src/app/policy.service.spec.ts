import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { PolicyService } from "./policy.service";

describe("PolicyService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it("should be created", () => {
    const service: PolicyService = TestBed.get(PolicyService);
    expect(service).toBeTruthy();
  });

  describe("getPolicies", () => {
    it("should return policies", () => {
      inject(
        [HttpTestingController, PolicyService],
        (httpMock: HttpTestingController, service: PolicyService) => {
          var policiesReturned = [
            {
              policyNumber: 123456,
              policyHolder: {
                name: "test1",
                age: 34,
                gender: "0"
              }
            },
            {
              policyNumber: 654321,
              policyHolder: {
                name: "test2",
                age: 45,
                gender: "1"
              }
            }
          ];
          service.getPolicies().subscribe(() => {});

          // We set the expectations for the HttpClient mock
          const req = httpMock.expectOne("https://localhost:44319/api/policy");
          expect(req.request.method).toEqual("GET");
          // Then we set the fake data to be returned by the mock
          req.flush({
            data: policiesReturned
          });
          httpMock.verify();
        }
      );
    });
    afterEach(inject(
      [HttpTestingController],
      (httpMock: HttpTestingController) => {
        httpMock.verify();
      }
    ));
  });

  describe("addPolicy", () => {
    it("should return policies", () => {
      inject(
        [HttpTestingController, PolicyService],
        (httpMock: HttpTestingController, service: PolicyService) => {
          var policiesReturned = [
            {
              policyNumber: 123456,
              policyHolder: {
                name: "test1",
                age: 34,
                gender: "0"
              }
            },
            {
              policyNumber: 654321,
              policyHolder: {
                name: "test2",
                age: 45,
                gender: "1"
              }
            }
          ];

          service
            .addPolicy({
              policyNumber: 654321,
              policyHolder: {
                name: "test2",
                age: 45,
                gender: "1"
              }
            })
            .subscribe(() => {});

          // We set the expectations for the HttpClient mock
          const req = httpMock.expectOne("https://localhost:44319/api/policy");
          expect(req.request.method).toEqual("POST");
          // Then we set the fake data to be returned by the mock
          req.flush({
            data: policiesReturned
          });
          httpMock.verify();
        }
      );
    });
    afterEach(inject(
      [HttpTestingController],
      (httpMock: HttpTestingController) => {
        httpMock.verify();
      }
    ));
  });

  describe("updatePolicy", () => {
    it("should return policies", () => {
      inject(
        [HttpTestingController, PolicyService],
        (httpMock: HttpTestingController, service: PolicyService) => {
          var policiesReturned = [
            {
              policyNumber: 123456,
              policyHolder: {
                name: "test1",
                age: 34,
                gender: "0"
              }
            },
            {
              policyNumber: 654321,
              policyHolder: {
                name: "test2",
                age: 45,
                gender: "1"
              }
            }
          ];

          service
            .updatePolicy({
              policyNumber: 654321,
              policyHolder: {
                name: "test2",
                age: 45,
                gender: "1"
              }
            })
            .subscribe(() => {});

          // We set the expectations for the HttpClient mock
          const req = httpMock.expectOne(
            "https://localhost:44319/api/policy/654321"
          );
          expect(req.request.method).toEqual("PUT");
          // Then we set the fake data to be returned by the mock
          req.flush({
            data: policiesReturned
          });

          httpMock.verify();
        }
      );
    });
    afterEach(inject(
      [HttpTestingController],
      (httpMock: HttpTestingController) => {
        httpMock.verify();
      }
    ));
  });

  describe("deletePolicy", () => {
    it("should return policies", () => {
      inject(
        [HttpTestingController, PolicyService],
        (httpMock: HttpTestingController, service: PolicyService) => {
          var policiesReturned = [
            {
              policyNumber: 123456,
              policyHolder: {
                name: "test1",
                age: 34,
                gender: "0"
              }
            },
            {
              policyNumber: 654321,
              policyHolder: {
                name: "test2",
                age: 45,
                gender: "1"
              }
            }
          ];
          service.deletePolicy(654321).subscribe(() => {});

          // We set the expectations for the HttpClient mock
          const req = httpMock.expectOne(
            "https://localhost:44319/api/policy/123456"
          );
          expect(req.request.method).toEqual("DELETE");
          // Then we set the fake data to be returned by the mock
          req.flush({
            data: policiesReturned
          });
          httpMock.verify();
        }
      );
    });
    afterEach(inject(
      [HttpTestingController],
      (httpMock: HttpTestingController) => {
        httpMock.verify();
      }
    ));
  });
});
