import { Test, TestingModule } from '@nestjs/testing';
import { ClientesPfController } from './clientes-pf.controller';
import { ClientesPfService } from './clientes-pf.service';

describe('ClientesPfController', () => {
  let controller: ClientesPfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientesPfController],
      providers: [ClientesPfService],
    }).compile();

    controller = module.get<ClientesPfController>(ClientesPfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
