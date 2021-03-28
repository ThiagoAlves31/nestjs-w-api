import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArtificialHotService } from './artificial-hot.service';
import { FilterOneArtificialHotDto } from './dto/create-artificial-hot.filterOne.dto';
import { FilterTwoArtificialHotDto } from './dto/create-artificial-hot.filterTwo.dto';

@Controller('artificial-hot')
export class ArtificialHotController {
  constructor(private readonly artificialHotService: ArtificialHotService) {}

  @Get(':initDate/:finalDate/:order')
  async findFilterOne(@Param() filter: FilterOneArtificialHotDto): Promise<any> {
    return await this.artificialHotService.filterOne(filter);
  }

  @Get(':order')
  async findFilterTwo(@Param() filter: FilterTwoArtificialHotDto): Promise<any> {
    return await this.artificialHotService.filterTwo(filter);
  }
}
