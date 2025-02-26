import { Injectable, NotFoundException } from '@nestjs/common';
import { v7 as uuid } from 'uuid';
import { Cars } from './interfaces/cars.interface';

@Injectable()
export class CarsService {
    private cars: Cars[] = [
        {
            id: uuid(),
            make: 'Toyota',
            model: 'Corolla',
            year: 2020
        },
        {
            id: uuid(),
            make: 'Honda',
            model: 'Civic',
            year: 2021
        },
        {
            id: uuid(),
            make: 'Ford',
            model: 'Fusion',
            year: 2022
        }
    ];


    findAll() {
        return this.cars;
    }
    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`car with id ${id} not found`);

        return car;
    }
}
