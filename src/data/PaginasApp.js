import Menu from '../components/Menu';
import Ejercicio1 from '../components/Ejercicio1';
import Ejercicio2 from '../components/Ejercicio2';
import Ejercicio3 from '../components/Ejercicio3';

export const Paginas = [
  {
    id: 1,
    path: '/',
    title: 'Menu',
    component: Menu,
  },
  {
    id: 2,
    path: '/ejercicio1',
    title: 'Ejercicio 1',
    component: Ejercicio1,
  },
  {
    id: 3,
    path: '/ejercicio2',
    title: 'Ejercicio 2',
    component: Ejercicio2,
  },
  {
    id: 4,
    path: '/ejercicio3',
    title: 'Ejercicio 3',
    component: Ejercicio3,
  },
];
