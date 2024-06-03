import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormComponent } from './json-form.component';
import { FormInteractionService } from 'src/app/core/services/form-interaction.service';
import { ApiClientService } from 'src/app/core/services/api-client.service';

describe('JsonFormComponent', () => {
  let component: JsonFormComponent;
  let fixture: ComponentFixture<JsonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonFormComponent ],
      providers: [
        FormInteractionService,
        ApiClientService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonFormComponent);
    component = fixture.componentInstance;
    
    // set the inputs
    component.jsonForm = {
      id: 1,
      name: 'test form',
      formGroups: [],
      submitTarget: 'test/submit'
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
