import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBgComponent } from './image-bg.component';

describe('ImageBgComponent', () => {
  let component: ImageBgComponent;
  let fixture: ComponentFixture<ImageBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageBgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
