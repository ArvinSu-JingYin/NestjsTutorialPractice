import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './app/base/typeorm/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonService } from './pokemon/pokemon.service';
import { PokemonController } from './pokemon/pokemon.controller';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), PokemonModule,],
  controllers: [AppController, PokemonController],
  providers: [AppService, PokemonService],
})
export class AppModule {}
