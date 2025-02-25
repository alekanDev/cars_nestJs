import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            make: 'Toyota',
            model: 'Corolla',
            year: 2020
        },
        {
            id: 2,
            make: 'Honda',
            model: 'Civic',
            year: 2020
        },
        {
            id: 3,
            make: 'Ford',
            model: 'Fusion',
            year: 2020
        }
    ];


    findAll() {
        return this.cars;
    }
    findOneById(id: number) {
        return this.cars.find(car => car.id === id);
    }
}
