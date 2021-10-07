import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedUserComponent } from './uploaded-user.component';

describe('UploadedUserComponent', () => {
  let component: UploadedUserComponent;
  let fixture: ComponentFixture<UploadedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
