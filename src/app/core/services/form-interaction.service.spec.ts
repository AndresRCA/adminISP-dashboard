import { TestBed } from '@angular/core/testing';

import { FormInteractionService } from './form-interaction.service';
import { ApiClientService } from './api-client.service';

describe('FormInteractionService', () => {
  let service: FormInteractionService;
  let apiClientServiceSpy: jasmine.SpyObj<ApiClientService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiClientService', ['http']);
    TestBed.configureTestingModule({
      providers: [
        FormInteractionService,
        { provide: ApiClientService, useValue: spy }
      ]
    });
    service = TestBed.inject(FormInteractionService);
    apiClientServiceSpy = TestBed.inject(ApiClientService) as jasmine.SpyObj<ApiClientService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
