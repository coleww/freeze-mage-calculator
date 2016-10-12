FREEZE-MAGE-CALCULATOR
---------------------------------------

A handy dandy UI for tracking yr potential burst damage in hearthstone. 
Because I got tired of counting my spell damage every turn. 
Built with react and redux.

### HOW 2 USE

- when you draw a card, click on it to move it from the deck to your hand
- increment your mana crystal counter each turn, or move it up/down to predict damage on future turns
- click on your good friend Emperor Thaurissan to apply his discount to the cards in your hand
- if you play a combo card, click on it to move it to your graveyard
- made a mistake? click a card in yr graveyard to move it back to your deck
- the app will automatically calculate the max damage you can deal based on yr hand and mana

### FAQ:

- Q: is this cheating?
- A: nah, blizzard says deck trackers are OK, and those things do waaaaay more than this does. Counting up damage every turn is not what makes freeze mage difficult.

- Q: could you make this work for {other_combo_deck}?
- A: nah, but you can! i believe in you! All of the logic for calculating max damage based on cards in hand can be found [here](https://github.com/coleww/freeze-mage-calculator/blob/master/src/calculateMaxDamage.js).

- Q: how dare you play a non-interactive deck like freeze mage!
- A: can't hear you, you and all of yr minions are frozen :p


### development

- `npm install` // download all them sweet sweet dependencies

- `npm run start` // fire up the dev server
- `npm run test` // will run any test files in `./src` that end in `.test.js`
- `npm run build` // bundles up a production version of the app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
