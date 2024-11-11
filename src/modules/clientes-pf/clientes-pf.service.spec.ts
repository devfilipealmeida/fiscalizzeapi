import { Test, TestingModule } from '@nestjs/testing';
import { ClientesPfService } from './clientes-pf.service';

describe('ClientesPfService', () => {
  let service: ClientesPfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientesPfService],
    }).compile();

    service = module.get<ClientesPfService>(ClientesPfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
