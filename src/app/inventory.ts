import { Vehicle } from './vehicle';

export const Inventory: Array<Vehicle> = [
  {
    VIN: 'Y123',
    year: 2012,
    make: 'HONDA',
    model: 'Civic',
    mileage: 70000,
    price: 5900.0,
    featured: false,
    photos: [],
  },
  {
    VIN: 'P1023',
    year: 2019,
    make: 'BMW',
    model: '328i',
    mileage: 42000,
    price: 12000.0,
    featured: true,
    photos: ['b-1.png', 'b-2.png', 'b-3.png', 'b-4.png'],
  },
  {
    VIN: 'NM182',
    year: 2018,
    make: 'KIA',
    model: 'Niro',
    mileage: 31000,
    price: 7900.0,
    featured: false,
    photos: ['k-1.png', 'k-2.png', 'k-3.png'],
  },
  {
    VIN: 'Y187',
    year: 2014,
    make: 'HONDA',
    model: 'Accord',
    mileage: 40000,
    price: 8900.0,
    featured: false,
    photos: [],
  },
];
