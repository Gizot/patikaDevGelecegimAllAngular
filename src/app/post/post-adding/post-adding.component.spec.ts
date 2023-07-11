import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddingComponent } from './post-adding.component';

describe('PostAddingComponent', () => {
  let component: PostAddingComponent;
  let fixture: ComponentFixture<PostAddingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostAddingComponent]
    });
    fixture = TestBed.createComponent(PostAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
