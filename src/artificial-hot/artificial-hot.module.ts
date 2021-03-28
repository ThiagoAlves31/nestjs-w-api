import { Module } from '@nestjs/common';
import { ArtificialHotService } from './artificial-hot.service';
import { ArtificialHotController } from './artificial-hot.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtificialHotRepository } from './repository/artificial-hot.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ArtificialHotRepository])],
  controllers: [ArtificialHotController],
  providers: [ArtificialHotService]
})
export class ArtificialHotModule {}
