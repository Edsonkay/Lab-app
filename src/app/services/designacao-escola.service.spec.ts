import { TestBed } from '@angular/core/testing';

import { DesignacaoEscolaService } from './designacao-escola.service';

describe('DesignacaoEscolaService', () => {
  let service: DesignacaoEscolaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignacaoEscolaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
