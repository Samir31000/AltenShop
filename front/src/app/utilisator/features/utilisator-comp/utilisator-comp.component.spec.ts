import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisatorCompComponent } from './utilisator-comp.component';

describe('UtilisatorCompComponent', () => {
  let component: UtilisatorCompComponent;
  let fixture: ComponentFixture<UtilisatorCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilisatorCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisatorCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
