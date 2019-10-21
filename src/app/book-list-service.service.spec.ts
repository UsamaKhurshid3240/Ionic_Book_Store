import { TestBed } from '@angular/core/testing';

import { BookListServiceService } from './book-list-service.service';

describe('BookListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookListServiceService = TestBed.get(BookListServiceService);
    expect(service).toBeTruthy();
  });
});
