import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleViewComponent } from './module-view.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ModuleViewComponent', () => {
  let component: ModuleViewComponent;
  let fixture: ComponentFixture<ModuleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleViewComponent ],
      providers: [{ provide: ActivatedRoute, useValue: { data: of({module: '', contentBlocks: ''}) } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
