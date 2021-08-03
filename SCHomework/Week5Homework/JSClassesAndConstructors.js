class Item {
    constructor (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
};

class GameConsoles extends Item {
    constructor (id, name, price, brand) {
        super(id, name, price);
        this.brand = brand;
    }
};

class VideoGames extends Item {
    constructor (id, name, price, title) {
        super(id, name, price);
        this.title = title;
    }
};

const Wii = new GameConsoles(1176,"Wii","$69.99", "Nintendo" );
const MarioKart = new VideoGames(1177, "Mario Kart", "$59.99","Mario Kart 8 Deluxe");
console.log(Wii);
console.log(MarioKart);