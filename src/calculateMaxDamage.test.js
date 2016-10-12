import calculateMaxDamage from './calculateMaxDamage';

it('handles empty input', () => {
  const output = calculateMaxDamage(1, []);
  expect(output).toEqual({damage: 0, cards: []});
});

it('handles the simplest case', () => {
  const output = calculateMaxDamage(2, [{name: 'Frostbolt', cost: 2, damage: 3}]);
  expect(output).toEqual({damage: 3, cards: [{name: 'Frostbolt', cost: 2, damage: 3}]});
});

it('handles the frostbolt/ice lance combo', () => {
  const output = calculateMaxDamage(4, [
    {name: 'Frostbolt', cost: 2, damage: 3},
    {name: 'Frostbolt', cost: 2, damage: 3},
    {name: 'Ice Lance', cost: 1, damage: 0}
  ]);
  expect(output).toEqual({damage: 7, cards: [
    {name: 'Frostbolt', cost: 2, damage: 3},
    {name: 'Ice Lance', cost: 1, damage: 0}
  ]});
});

it('handles ice lance activations combo', () => {
  const output = calculateMaxDamage(3, [
    {name: 'Frostbolt', cost: 2, damage: 3},
    {name: 'Frostbolt', cost: 2, damage: 3},
    {name: 'Ice Lance', cost: 1, damage: 0},
    {name: 'Ice Lance', cost: 1, damage: 0}
  ]);
  expect(output).toEqual({damage: 7, cards: [
    {name: 'Frostbolt', cost: 2, damage: 3},
    {name: 'Ice Lance', cost: 1, damage: 0}
  ]});
});

it('handles spellpower', () => {
  const output = calculateMaxDamage(10, [
    {name: 'Evolved Kobold', cost: 4, spellPower: 2, damage: 0},
    {name: 'Frostbolt', cost: 2, damage: 3},
    {name: 'Frostbolt', cost: 2, damage: 3},
    {name: 'Ice Lance', cost: 1, damage: 0},
    {name: 'Ice Lance', cost: 1, damage: 0},
    {name: 'Fireball', cost: 4, damage: 6}
  ]);
  expect(output).toEqual({damage: 22, cards: [
    {name: 'Evolved Kobold', cost: 4, spellPower: 2, damage: 0},
    {name: 'Frostbolt', cost: 2, damage: 3},
    {name: 'Frostbolt', cost: 2, damage: 3},
    {name: 'Ice Lance', cost: 1, damage: 0},
    {name: 'Ice Lance', cost: 1, damage: 0}
  ]});
});

it('handles double ice lance', () => {
  const output = calculateMaxDamage(2, [
    {name: 'Frostbolt', cost: 2, damage: 3},
    {name: 'Frostbolt', cost: 2, damage: 3},
    {name: 'Ice Lance', cost: 1, damage: 0},
    {name: 'Ice Lance', cost: 1, damage: 0}
  ]);
  expect(output).toEqual({damage: 4, cards: [
    {name: 'Ice Lance', cost: 1, damage: 0},
    {name: 'Ice Lance', cost: 1, damage: 0}
  ]});
});
