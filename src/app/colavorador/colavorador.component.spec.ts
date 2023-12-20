import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColavoradorComponent } from './colavorador.component';

describe('ColavoradorComponent', () => {
  let component: ColavoradorComponent;
  let fixture: ComponentFixture<ColavoradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColavoradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColavoradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
