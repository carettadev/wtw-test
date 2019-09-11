import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { PolicyListComponent } from "./policy-list/policy-list.component";
import { PolicyComponent } from "./policy/policy.component";
import { AddPolicyDialogComponent } from "./add-policy-dialog/add-policy-dialog.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatCardModule,
  MatToolbarModule,
  MatGridListModule,
  MatDividerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDialogModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PolicyListComponent,
        PolicyComponent,
        AddPolicyDialogComponent
      ],
      imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatToolbarModule,
        MatGridListModule,
        MatDividerModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatSnackBarModule,
        MatDialogModule
      ]
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ClientApp'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("ClientApp");
  }));
});
