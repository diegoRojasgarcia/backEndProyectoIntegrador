import { Injectable } from '@nestjs/common';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { ingrediente } from './entities/ingrediente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientesService {
  constructor(
    @InjectRepository(ingrediente)
    private ingredienteRepository: Repository<ingrediente>,
  ) {}

  create(createIngredienteDto: CreateIngredienteDto) {
    const newIngrediente =
      this.ingredienteRepository.create(createIngredienteDto);
    this.ingredienteRepository.save(newIngrediente);
    return newIngrediente;
  }

  findAll(): Promise<ingrediente[]> {
    return this.ingredienteRepository.find();
  }

  findByName(nombre: string): Promise<ingrediente | null> {
    return this.ingredienteRepository.findOne({ where: { nombre } });
  }
}
