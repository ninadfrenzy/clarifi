import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDayGridComponent } from './task-day-grid.component';

describe('TaskDayGridComponent', () => {
  let component: TaskDayGridComponent;
  let fixture: ComponentFixture<TaskDayGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDayGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDayGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
