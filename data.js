// data.js
const pokemonData = {
  template: {
    name: "empty_template",
    number: "",
    image: "",
    description: "",
    height: "",
    weight: "",
    gender: "♂♀",
    category: "",
    abilities: ["", ""],
    types: ["", ""],
    stats: {
        hp: 78, 
        attack: 84, 
        defense: 78, 
        spAttack: 109, 
        spDefense: 85, 
        speed: 100
    },
    signatureMove: "Aura Sphere",
    category2: "Folklore, myth, fairytale",
    evolution: [
      {
        name: "Riolu",
        number: "0447",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png",
        types: ["Fighting"]
      },
      {
        condition: "High Friendship + Day",
        name: "Lucario",
        number: "0448",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png",
        types: ["Fighting", "Steel"]
      }
    ]
  },
  liviath: {
    name: "Liviath",
    number: "0001",
    image: "https://imgur.com/Jbvllv0.png",
    description: "test",
    height: "1.71 m",
    weight: "214 kg",
    gender: "♂",
    category: "Leviathan",
    category2: "Folklore",
    abilities: ["Dry Skin", "Wonder Guard"],
    types: ["Water", "Poison"],
    stats: {
        hp: 120, 
        attack: 80, 
        defense: 145, 
        spAttack: 75, 
        spDefense: 115, 
        speed: 65
    },
    signatureMove: "Liquidation",
    evolution: [
      {
        name: "Liv",
        number: "000",
        image: "https://imgur.com/Jbvllv0.png",
        types: ["Water","Poison"]
      },
      {
        condition: "Dark Stone, lvl. 65",
        name: "Liviath",
        number: "000",
        image: "https://imgur.com/Y0hA4Op.png",
        types: ["Dragon", "Water"]
      }
    ]
  },
  amba: {
    name: "Ambrosia Thimble",
    number: "002",
    image: "https://imgur.com/Dhq2boW.png",
    description: "Despite her tiny size, Ambrosia is overflowing with energy and determination. She loves making friends and standing up for those who are overlooked. Having left the safety of the Fairy Autumn Kingdom to attend human school, she is fascinated by the vast world around her, but must constantly watch out for careless footsteps, swinging arms, and her fear of water. After losing her wings, Ambrosia has discovered that surviving the human world requires more courage, instinct, and adaptability than she ever expected.",
    height: "2 apples",
    weight: "half an apple",
    gender: "♀",
    category: "Season Fairy (Autumn)",
    category2: "Fairytale",
    abilities: ["Flower Gift", "Pixilate"],
    types: ["Fairy", "Grass"],
    stats: {
        hp: 20, 
        attack: 40, 
        defense: 15, 
        spAttack: 135, 
        spDefense: 135, 
        speed: 140
    },
    signatureMove: "Syrup Bomb",
  },
  mai: {
    name: "Lac Hoa Mai",
    number: "000",
    image: "https://imgur.com/pnKJUWP.png",
    description: "Bubbly and friendly, Mai creates attachments rather easily to people who are kind to her and give her attention. She’s girlish but likes to think she can hold her own from years of sparring with her siblings, much to the chagrin of her mother who wanted the perfect daughter. Like her father, she’s brash and will stand up if anyone threatens those she cares about.",
    height: "1.58 m",
    weight: "2 pelicans",
    gender: "♀",
    category: "Dragon Fairy Seagull whatever",
    category2: "Fairytale",
    abilities: ["Aroma Veil", "Friend Guard"],
    types: ["Fairy", "Flying"],
    stats: {
        hp: 85, 
        attack: 130, 
        defense: 105, 
        spAttack: 60, 
        spDefense: 115, 
        speed: 80
    },
    signatureMove: "Spirit Break",
    evolution: [
      {
        name: "Mai",
        number: "000",
        image: "https://imgur.com/pnKJUWP.png",
        types: ["Fairy","Flying"]
      },
      {
        condition: "King Rock",
        name: "Lac Hoa",
        number: "000",
        image: "https://imgur.com/7Sv2COH.png",
        types: ["Dragon", "Fairy"]
      }
    ]
  },
  astriel: {
    name: "Astriel",
    number: "000",
    image: "https://imgur.com/SAWokWL.png",
    description: "Astriel was magically manifested from the previous Unicorn, born sort of, out of magic. But still her daughter. But even though Astriel was born a normal unicorn, the times she and her mother did come across another, she could tell her mother was unlike the rest. She used to be carefree. She once dreamed hopefully of her destiny, of love, but as she grew older, she began to realize a certain look in her mother's eyes: longing. It was a tired look, and one that also spoke of her mother's mortality, and her mother's sleeptalk of one day rejoining love only exemplified it, as her mother never did any of the things she said. Astriel's dreams slowly turned to nightmares after that, and yet, she knows she must follow her destiny. So she learned to mask her fears, for the sake of her mother, of other unicorns, and most of all, of herself.",
    height: "1.67 m",
    weight: "A horse and a horn",
    gender: "♀",
    category: "Unicorn",
    abilities: ["Quick Feet", "Bad Dreams"],
    types: ["Normal", "Fairy"],
    stats: {
        hp: 105, 
        attack: 80, 
        defense: 90, 
        spAttack: 130, 
        spDefense: 95, 
        speed: 120
    },
    signatureMove: "Misty Terrain",
    category2: "Fairytale"
  },
  apno: {
    name: "Apno Spectis",
    number: "000",
    image: "https://imgur.com/q7WPnHf.png",
    description: "He does his best to appear confident and optimistic. Due to his uprising, he is a bit of stickler for rules and thus prefers to be around with what he is the most familiar with, even if it comes at the expense of his own being. He constantly tells himself that the needs of his people override the needs of his own causing him to subconsciously place other people's desires over his in normal interactions. However, deep down Apno is a free-spirit who wants to prioritize himself above all else only being stopped by being repulsed at his own selfishness. He fears that once he has a taste for freedom, he'll become enraptured by it and change into something else beyond recognition. Someone that would abandon their duties, even at the cost of everything else to satisfy their own unsightly desires.",
    height: "1.76 m",
    weight: "90 thousand flowers",
    gender: "♂",
    category: "Hyacinthus",
    abilities: ["Oblivious", "Aroma Veil"],
    types: ["Normal", "Grass"],
    stats: {
        hp: 80, 
        attack: 125, 
        defense: 85, 
        spAttack: 75, 
        spDefense: 85, 
        speed: 60
    },
    signatureMove: "Sweet Scent",
    category2: "Mythology"
  },
  lyle: {
    name: "Lyle Di Sarpedon",
    number: "000",
    image: "https://imgur.com/plKlqrj.png",
    description: "Little introverted worry-wart. Poor buddy is too scared to interact with anyone, let alone make connections knowing the danger he is to others",
    height: "1.55 m",
    weight: "2 king cobras",
    gender: "♂",
    category: "Gorgon",
    abilities: ["Keen Eye", "Mind's Eye"],
    types: ["Normal", "Poison"],
    stats: {
        hp: 60, 
        attack: 95, 
        defense: 70, 
        spAttack: 110, 
        spDefense: 100, 
        speed: 90
    },
    signatureMove: "Scary Face",
    category2: "Mythology"
  },
};