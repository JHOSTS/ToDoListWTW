import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisaotempoComponent } from './previsaotempo.component';

describe('PrevisaotempoComponent', () => {
  let component: PrevisaotempoComponent;
  let fixture: ComponentFixture<PrevisaotempoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrevisaotempoComponent]
    });
    fixture = TestBed.createComponent(PrevisaotempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
