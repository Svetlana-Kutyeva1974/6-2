// TODO: write your code here
import character from './basic.js';

/*
 function t([{id, name, icon, description = 'Описание недоступно'}, ...arguments] = []){
  console.log([...arguments]);
  return [...arguments];
}
}
*/
export default function t([{
  id, name, icon, description = 'описание недоступно',
}, ...obj] = []) {
  obj[0].description = 'описание недоступно';
  return [{
    id, name, icon, description,
  }, ...obj];
}

const { special } = character;
t(special);
