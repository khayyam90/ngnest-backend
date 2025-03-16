import { Controller,  Get,  Post,  Body,  Delete,  Param,  HttpException,  HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Movie } from './app.service';


@Controller('api/movies')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  list(): Movie[] {
    try {
      return this.appService.list();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Post()
  add(@Body() { name, director }: Movie): Movie[] {
    try {
      return this.appService.add(name, director);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Delete(':id')
  delete(@Param('id') id: number): Movie[] {
    try {
      return this.appService.delete(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}