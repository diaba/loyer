import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLocataireComponent } from './view-locataire.component';

describe('ViewLocataireComponent', () => {
  let component: ViewLocataireComponent;
  let fixture: ComponentFixture<ViewLocataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLocataireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLocataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
