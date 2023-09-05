import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'dbtopicos.sqlite',
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    IngredientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
