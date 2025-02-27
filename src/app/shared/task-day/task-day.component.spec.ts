import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDayComponent } from './task-day.component';

describe('TaskDayComponent', () => {
  let component: TaskDayComponent;
  let fixture: ComponentFixture<TaskDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
