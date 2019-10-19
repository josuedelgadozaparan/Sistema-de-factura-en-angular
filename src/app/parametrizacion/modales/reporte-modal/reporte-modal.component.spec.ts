import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteModalComponent } from './reporte-modal.component';

describe('ReporteModalComponent', () => {
  let component: ReporteModalComponent;
  let fixture: ComponentFixture<ReporteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
