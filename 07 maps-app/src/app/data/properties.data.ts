import { v4 as UUIDV4 } from 'uuid';
import { HouseProperty } from '../interfaces/property-house.interface';

export const propertyhouses : HouseProperty[] = [
    {
      id: UUIDV4(),
      name: 'Hacienda del Lago',
      description:
        'Encantadora hacienda con acceso directo al lago y un entorno natural impresionante.',
      price: 950_000,
      lngLat: { lng: -100.3157623, lat: 20.5648449 },
      tags: ['Casa', 'Lago', 'Hacienda'],
    },
    {
      id: UUIDV4(),
      name: 'Villa Serenidad',
      description:
        'Un refugio tranquilo con vistas panorámicas al mar y jardines exuberantes.',
      price: 500_000,
      lngLat: {lng: -0.861526, lat: 41.65649 },
      tags: ['Villa', 'Mar', 'Jardines'],
    },
    {
      id: UUIDV4(),
      name: 'Residencia Esmeralda',
      description:
        'Elegante propiedad con acabados de lujo y un diseño arquitectónico moderno.',
      price: 1_200_000,
      lngLat: { lng: -100.365322, lat: 20.5853754 },
      tags: ['Casa', 'Esmeralda', 'Acabados'],
    },
    {
      id: UUIDV4(),
      name: 'Casa del Sol',
      description:
        'Una casa luminosa y acogedora con amplias terrazas y piscina privada.',
      price: 750_000,
      lngLat: { lng: -100.3288255, lat: 20.5673766 },
      tags: ['Casa', 'Sol', 'Terrazas'],
    },
  ];