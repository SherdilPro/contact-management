import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAddressesComponent } from './email-addresses.component';

describe('EmailAddressesComponent', () => {
  let component: EmailAddressesComponent;
  let fixture: ComponentFixture<EmailAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailAddressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
