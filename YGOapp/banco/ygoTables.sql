-- Tabela para armazenar as cartas de Yu-Gi-Oh!
CREATE TABLE cards (
    id SERIAL PRIMARY KEY, -- ID único que se auto-incrementa
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100),
    atk INTEGER NOT NULL,
    def INTEGER NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP -- Data de criação
);

-- Tabela para armazenar os decks
CREATE TABLE decks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE, -- O nome do deck deve ser único
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Ligação (Junction Table) para relacionar cartas e decks
-- Um deck pode ter várias cartas, e uma carta pode estar em vários decks.
CREATE TABLE deck_cards (
    id SERIAL PRIMARY KEY, -- Chave primária simples para a relação
    deck_id INTEGER NOT NULL,
    card_id INTEGER NOT NULL,
    
    -- Define as chaves estrangeiras, garantindo a integridade dos dados
    CONSTRAINT fk_deck
        FOREIGN KEY(deck_id) 
        REFERENCES decks(id)
        ON DELETE CASCADE, -- Se um deck for deletado, as cartas são removidas dele
        
    CONSTRAINT fk_card
        FOREIGN KEY(card_id) 
        REFERENCES cards(id)
        ON DELETE CASCADE -- Se uma carta for deletada do jogo, ela sai de todos os decks
);

-- (Opcional) Criar alguns índices para acelerar as buscas
CREATE INDEX idx_deck_cards_deck_id ON deck_cards(deck_id);
CREATE INDEX idx_deck_cards_card_id ON deck_cards(card_id);

-- Exemplo de como inserir uma carta para testes
INSERT INTO cards (name, type, atk, def, description) VALUES 
('Mago Negro', 'Mago', 2500, 2100, 'O mago definitivo em termos de ataque e defesa.'),
('Dragão Branco de Olhos Azuis', 'Dragão', 3000, 2500, 'Um dragão lendário que poucos viram.');