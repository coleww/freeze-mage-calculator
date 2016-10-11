const cardData = [
  {
    name: 'Forgotten Torch',
    cost: 3,
    damage: 3,
    imgSrc: 'forgottenTorch',
    spellPower: 0,
    createOnPlay: {
      name: 'Roaring Torch',
      cost: 3,
      damage: 6,
      imgSrc: 'roaringTorch',
      spellPower: 0
    }
  },
  {
    name: 'Fireball',
    cost: 4,
    damage: 6,
    imgSrc: 'fireball',
    spellPower: 0
  },
  {
    name: 'Frostbolt',
    cost: 2,
    damage: 3,
    imgSrc: 'frostbolt',
    spellPower: 0,
    freeze: true
  },
  {
    name: 'Ice Lance',
    cost: 1,
    damage: 0,
    imgSrc: 'iceLance',
    spellPower: 0,
    freeze: true,
    frozenPower: 4
  },
  {
    name: 'Forgotten Torch',
    cost: 3,
    damage: 3,
    imgSrc: 'forgottenTorch',
    spellPower: 0,
    createOnPlay: {
      name: 'Roaring Torch',
      cost: 3,
      damage: 6,
      imgSrc: 'roaringTorch',
      spellPower: 0
    }
  },
  {
    name: 'Fireball',
    cost: 4,
    damage: 6,
    imgSrc: 'fireball',
    spellPower: 0
  },
  {
    name: 'Frostbolt',
    cost: 2,
    damage: 3,
    imgSrc: 'frostbolt',
    spellPower: 0,
    freeze: true
  },
  {
    name: 'Ice Lance',
    cost: 1,
    damage: 0,
    imgSrc: 'iceLance',
    spellPower: 0,
    frozenPower: 4
  },
  {
    name: 'Evolved Kobold',
    cost: 4,
    damage: 0,
    imgSrc: 'evolvedKobold',
    spellPower: 2
  },
  {
    name: 'Bloodmage Thalnos',
    cost: 2,
    damage: 0,
    imgSrc: 'bloodmageThalnos',
    spellPower: 1
  }
]

export default cardData;