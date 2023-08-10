import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNaveBarreComponent } from './side-nave-barre.component';

describe('SideNaveBarreComponent', () => {
  let component: SideNaveBarreComponent;
  let fixture: ComponentFixture<SideNaveBarreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNaveBarreComponent]
    });
    fixture = TestBed.createComponent(SideNaveBarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
