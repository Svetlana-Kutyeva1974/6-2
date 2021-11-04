// TODO: write your code here
import character from './basic.js';

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
