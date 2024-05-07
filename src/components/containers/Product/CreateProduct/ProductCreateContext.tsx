import {createContext} from 'react';

export const ProductCreateContext = createContext({
  name: '',
  quantity: 100,
  nutrients: {
    calories: 0,
    protein: 0,
    fat: 0,
    carbohydrates: 0,
    water: 0,
    dietaryFiber: 0,
  },
  vitamins: {
    B1: '0',
    B2: '0',
    B3: '0',
    B5: '0',
    B6: '0',
    B7: '0',
    B9: '0',
    B12: '0',
    C: '0',
    A: '0',
    D: '0',
    E: '0',
    K: '0',
  },
  minerals: {
    Mn: '0',
    Fe: '0',
    NaCL: '0',
    Mg: '0',
    P: '0',
    Ca: '0',
    Na: '0',
    Zn: '0',
    Cu: '0',
    I: '0',
    Se: '0',
    Cr: '0',
    K: '0',
    Mo: '0',
  },
});