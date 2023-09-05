import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ingrediente {
  @PrimaryGeneratedColumn()
  idingrediente: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  cantidad: number;

  @Column()
  precio: number;
}
