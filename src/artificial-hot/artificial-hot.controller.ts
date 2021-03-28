import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArtificialHotService } from './artificial-hot.service';
import { CreateArtificialHotDto } from './dto/create-artificial-hot.dto';

@Controller('artificial-hot')
export class ArtificialHotController {
  constructor(private readonly artificialHotService: ArtificialHotService) {}
}
