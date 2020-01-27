import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Param,
  Post,
} from '@nestjs/common';

import { BaseController } from '../../../shared/base/base.controller';
import { ParseIntPipe } from '../../../shared/pipes/parse-int.pipe';
import { CreateCatDto } from '../dto/create-cat.dto';
import { Cat } from '../service/cat.interface';
import { CatsService } from '../service/cats.service';

@Controller('cats')
export class CatsController extends BaseController {
  constructor(
    private readonly catsService: CatsService,
    @Inject('winston') private readonly logger: Logger,
  ) {
    super();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    this.logger.debug(this.catsService.findAll());

    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe())
    id,
  ) {
    // logic
  }
}
