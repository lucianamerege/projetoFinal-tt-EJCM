import { TestBed, async, inject } from '@angular/core/testing';

import { PrecisaEstarLogadoGuard } from './precisa-estar-logado.guard';

describe('PrecisaEstarLogadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrecisaEstarLogadoGuard]
    });
  });

  it('should ...', inject([PrecisaEstarLogadoGuard], (guard: PrecisaEstarLogadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
