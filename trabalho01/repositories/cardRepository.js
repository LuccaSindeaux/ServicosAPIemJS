let cards = [
    { id: 1, name: "Dark Magician", type: "Spellcaster", atk: 2500, def: 2100 },
    { id: 2, name: "Blue-Eyes White Dragon", type: "Dragon", atk: 3000, def: 2500 },
    { id: 3, name: "Red-Eyes Black Dragon", type: "Dragon", atk: 2400, def: 2000 },
    { id: 4, name: "Magnet Warrior", type: "Rock", atk: 3000, def: 1000 },
    { id: 5, name: "Baby Dragon", type: "Dragon", atk: 1200, def: 800 },
    { id: 6, name: "Flame Swordsman", type: "Warrior", atk: 1800, def: 200 }
];

exports.findAll = () => {
    return cards;
};

exports.findById = (id) => {
    return cards.find(c => c.id === id);
};

exports.create = (card) => {
    const newCard = { id: cards.length + 1, ...card };
    cards.push(newCard);
    return newCard;
};