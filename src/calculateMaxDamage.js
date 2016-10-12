var combinations = require('combinations')

function calculateDamage (cards) {
  // add up all the spell damage cards
  let spellDamage = cards.filter((card) => {
    return card.spellPower
  }).reduce((total, card) => {
    return total + card.spellPower;
  }, 0);

  // if we have a frostbolt in this combo, track it so we know ice lance is active
  let frozen = cards.some((card) => {
    return card.name === 'Frostbolt'
  })

  return cards.reduce((total, card) => {
    let cardDamage = card.damage
    if (card.name === 'Ice Lance') {
      // if we have a frostbolt, or have already played an ice lance, then it is active
      if (frozen) {
        cardDamage = 4
      } else {
        // if we have 2 ice lances in a combo but no frostbolt, this will activate the second one
        frozen = true
      }
    }
    // if the card deals damage, add the spell power damage. otherwise: nada.
    let damage = cardDamage ? (cardDamage + spellDamage) : 0
    return total + damage
  }, 0)
}

function selectAffordableCombos (mana, combos) {
  return combos.filter((combo) => {
    let totalCost = calculateTotalCost(combo)
    return totalCost <= mana;
  })
}

function calculateTotalCost (cards) {
  return cards.reduce((total, card) => {
    return total + card.cost;
  }, 0)
}

function calculateMaxDamage (mana, cards) {
  let maximum = {damage: 0, cards: []}

  let allCombos = combinations(cards);
  let clonedCombos = JSON.parse(JSON.stringify(allCombos));
  let affordableCombos = selectAffordableCombos(mana, clonedCombos);
  let combosWithHeroPower = affordableCombos.map((combo) => {
    let cost = calculateTotalCost(combo);
    if (mana - cost >= 2) {
      combo.push({name: 'Fireblast', cost: 2, damage: 1, imgSrc: 'fireblast'})
    }
    return combo;
  })
  combosWithHeroPower.forEach((combo) => {
    let damage = calculateDamage(combo)
    if (damage > maximum.damage) {
      maximum.damage = damage
      maximum.cards = combo
    }
  })
  return maximum
}

export default calculateMaxDamage;