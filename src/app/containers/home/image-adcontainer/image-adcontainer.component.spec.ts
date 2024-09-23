import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageADContainerComponent } from './image-adcontainer.component';

describe('ImageADContainerComponent', () => {
  let component: ImageADContainerComponent;
  let fixture: ComponentFixture<ImageADContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageADContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageADContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
