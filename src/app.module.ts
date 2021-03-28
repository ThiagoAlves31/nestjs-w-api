import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { ArtificialHotModule } from './artificial-hot/artificial-hot.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ArtificialHotModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
