import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArtificialHotDto } from './dto/create-artificial-hot.dto';
import { ArtificialHotRepository } from './repository/artificial-hot.repository'
import { ArtificialHot } from './entities/artificial-hot.entity'
import { LessThan, Repository } from 'typeorm';
import { SchedulerRegistry } from '@nestjs/schedule';
import axios from 'axios';
import { FilterOneArtificialHotDto } from './dto/create-artificial-hot.filterOne.dto';
import { FilterTwoArtificialHotDto } from './dto/create-artificial-hot.filterTwo.dto';

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
    newData.ups = ups_count
    newData.num_comments = num_comments
    newData.save()
  }

  async filterOne(filter: FilterOneArtificialHotDto): Promise<ArtificialHot[]> {
    
    const { initDate, finalDate, order} = filter
    const query = this.artificialHotRepository.createQueryBuilder('hot');
    query.where(
      "substring(hot.createdAt,1,10) BETWEEN :initDate AND :finalDate",
      { initDate, finalDate }
    );
    query.orderBy(`hot.${order}`)
    const data = await query.execute();
    return data;
  }

  async filterTwo(filter: FilterTwoArtificialHotDto): Promise<ArtificialHot[]> {
    
    const { order } = filter
    const query = this.artificialHotRepository.createQueryBuilder('hot');
    query.orderBy(`hot.${order}`, 'DESC',)

    const data = await query.execute();
    return data;
  }
}
