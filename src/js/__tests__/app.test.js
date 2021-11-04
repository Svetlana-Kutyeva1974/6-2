import character from '../basic.js';
import t from '../app.js';

test('Возвращаем обьект', () => {
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

test('Возвращаем обьект, у которого нет описания', () => {
  delete character.special[0].description;
  expect(t(character.special)).toEqual([
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'описание недоступно',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'описание недоступно',
    },
  ]);
});
