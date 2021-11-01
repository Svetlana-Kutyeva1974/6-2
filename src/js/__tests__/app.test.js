import character from '../basic.js';
import t from '../app.js';

test('return sort obj', () => {
  expect(t(character.special)).toEqual([
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'описание недоступно',
    },
  ]);
});
