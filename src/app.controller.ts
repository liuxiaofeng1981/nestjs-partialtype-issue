import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UpdateDto } from './update.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Patch('/:id')
  async updatePromotion(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateDto,
  ): Promise<boolean> {
    return true;
  }
}
