import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  userId: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @PrimaryColumn()
  userEmail: string;

  @Column()
  userPassword: string;

  @Column()
  created: Date;
}
