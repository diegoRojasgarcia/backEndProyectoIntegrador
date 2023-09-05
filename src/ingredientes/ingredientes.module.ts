import { Module } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { IngredientesController } from './ingredientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ingrediente } from './entities/ingrediente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ingrediente])],
  controllers: [IngredientesController],
  providers: [IngredientesService],
  exports: [IngredientesService],
})
export class IngredientesModule {}
