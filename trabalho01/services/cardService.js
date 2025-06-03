const cardRepository = require('../repositories/cardRepository');

exports.getAllCards = () => {
    return cardRepository.findAll();
};

exports.getCardById = (id) => {
    return cardRepository.findById(id);
};

exports.createCard = (cardData) => {
    return cardRepository.create(cardData);
};
