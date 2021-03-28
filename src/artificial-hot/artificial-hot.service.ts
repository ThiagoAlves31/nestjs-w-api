import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArtificialHotDto } from './dto/create-artificial-hot.dto';
import { ArtificialHotRepository } from './repository/artificial-hot.repository'
import { ArtificialHot } from './entities/artificial-hot.entity'
import { Repository } from 'typeorm';

@Injectable()
export class ArtificialHotService {
  
  constructor(
    @InjectRepository(ArtificialHot)
    private artificialHotRepository: Repository<ArtificialHot>,
  ) {}
  
  async create(createArtificialHotDto: CreateArtificialHotDto) {
    const { title, author, ups_count, num_comments } = createArtificialHotDto

    const teste = this.artificialHotRepository.create()
    teste.author = author
    teste.title = title
    teste.ups_count = ups_count
    teste.num_comments = num_comments
    teste.save()

    return this.artificialHotRepository.findOne();
  }
}
