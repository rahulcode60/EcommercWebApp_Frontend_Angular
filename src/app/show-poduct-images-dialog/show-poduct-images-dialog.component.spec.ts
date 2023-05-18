import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPoductImagesDialogComponent } from './show-poduct-images-dialog.component';

describe('ShowPoductImagesDialogComponent', () => {
  let component: ShowPoductImagesDialogComponent;
  let fixture: ComponentFixture<ShowPoductImagesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPoductImagesDialogComponent]
    });
    fixture = TestBed.createComponent(ShowPoductImagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
