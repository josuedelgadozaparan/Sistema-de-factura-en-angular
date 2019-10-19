import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosModalComponent } from './nosotros-modal.component';

describe('NosotrosModalComponent', () => {
  let component: NosotrosModalComponent;
  let fixture: ComponentFixture<NosotrosModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotrosModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
