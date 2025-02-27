import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { version } from 'os';
import { CreatecarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
    constructor(
        private readonly carsService: CarsService
    ) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', new ParseUUIDPipe({ version: '7' })) id: string) {
        return this.carsService.findOneById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createCar(@Body() body: CreatecarDto) {
        return body;
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any
    ) {
        return body
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return {
            method: 'DELETE',
            id
        };
    }
}
