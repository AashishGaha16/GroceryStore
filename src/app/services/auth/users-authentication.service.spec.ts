import { TestBed } from '@angular/core/testing';

import { UsersAuthenticationService } from './users-authentication.service';

describe('UsersAuthenticationService', () => {
  let service: UsersAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
