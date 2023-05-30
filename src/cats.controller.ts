
import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    const response = `This action adds a new cat named ${createCatDto.name}, aged: ${createCatDto.breed} `
    return response;
  }

  @Get()
  allCats() {
    return `This action returns a ALL the cats`;
  }

  @Get(':id')
  findOne(@Param('id') gato: string) {
    return `This action returns a #${gato} cat`;
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}