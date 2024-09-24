import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerLoginFormComponent } from './container-login-form.component';

describe('ContainerLoginFormComponent', () => {
  let component: ContainerLoginFormComponent;
  let fixture: ComponentFixture<ContainerLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerLoginFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
