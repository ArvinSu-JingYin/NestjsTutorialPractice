import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './app/base/typeorm/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonService } from './pokemon/pokemon.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),],
  controllers: [AppController],
  providers: [AppService, PokemonService],
})
export class AppModule {}
