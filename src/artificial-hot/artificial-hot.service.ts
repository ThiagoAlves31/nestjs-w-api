import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArtificialHotDto } from './dto/create-artificial-hot.dto';
import { ArtificialHotRepository } from './repository/artificial-hot.repository'
import { ArtificialHot } from './entities/artificial-hot.entity'
import { Repository } from 'typeorm';
import { SchedulerRegistry } from '@nestjs/schedule';
import axios from 'axios';
import { timeLog, timeStamp } from 'console';

@Injectable()
export class ArtificialHotService {
  constructor(
    @InjectRepository(ArtificialHot)
    private artificialHotRepository: Repository<ArtificialHot>,
    private schedulerRegistry: SchedulerRegistry,
  ){}

  async onModuleInit() {
    let intervalOn = 0

    const callback = async () => {
      const result = await axios.get(process.env.LINK_ARTIFICIAL_HOT)
      const children = result.data.data.children
      
      children.forEach(async element => {

        const title = element.data.title
        const author = element.data.author
        const ups_count = element.data.ups
        const num_comments = element.data.num_comments
  
        await this.create({ title, author, ups_count, num_comments })
      });
      console.log(Date())
      if(intervalOn == 0) {
        const intervalInitial = this.schedulerRegistry.getInterval('inittial');
        clearInterval(intervalInitial);
        
        let interval = setInterval(callback,parseInt(process.env.TIME_MILLISECONDS));
        this.schedulerRegistry.addInterval('timeGetNewArtificialHot', interval);
        intervalOn = 1
      }
    };

    let interval = setInterval(callback,3000);
    this.schedulerRegistry.addInterval('inittial', interval);
      
  }
  
  async create(createArtificialHotDto: CreateArtificialHotDto) {

    const { title, author, ups_count, num_comments } = createArtificialHotDto

    const newData = this.artificialHotRepository.create()
    newData.author = author
    newData.title = title
    newData.ups_count = ups_count
    newData.num_comments = num_comments
    newData.save()
  }
}
