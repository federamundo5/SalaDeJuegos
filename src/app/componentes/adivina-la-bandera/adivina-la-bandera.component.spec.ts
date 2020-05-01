import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaLaBanderaComponent } from './adivina-la-bandera.component';

describe('AdivinaLaBanderaComponent', () => {
  let component: AdivinaLaBanderaComponent;
  let fixture: ComponentFixture<AdivinaLaBanderaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdivinaLaBanderaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinaLaBanderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
