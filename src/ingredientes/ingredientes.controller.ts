import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('ingrediente')
export class IngredientesController {
  constructor(private readonly ingredientesService: IngredientesService) {}

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  create(@Body() createIngredienteDto: CreateIngredienteDto) {
    return this.ingredientesService.create(createIngredienteDto);
  }

  @Get('/all')
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.ingredientesService.findAll();
  }

  @Get(':nombre')
  findIngredientebyName(@Param('nombre') nombre: string) {
    const ingrediente = this.ingredientesService.findByName(nombre);
    return ingrediente;
  }
}
