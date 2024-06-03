import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicControlComponent } from './dynamic-control.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('DynamicControlComponent', () => {
  let component: DynamicControlComponent;
  let fixture: ComponentFixture<DynamicControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicControlComponent);
    component = fixture.componentInstance;

    // set inputs
    component.control = {
      name: 'test',
    };
    let group: any = {};
    group[component.control.name] = new FormControl(component.control.attributes?.value || null);
    component.parentFormGroup = new FormGroup(group)

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
