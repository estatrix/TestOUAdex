// data.js
const pokemonData = {
  template: {
    name: "empty_template",
    number: "",
    image: "",
    description: "",
    height: "",
    weight: "",
    gender: "",
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
    name: "Liv",
    number: "0001",
    image: "https://imgur.com/Jbvllv0.png",
    description: "test",
    height: "1.71 m",
    weight: "214 kg",
    gender: "♂",
    category: "Leviathan",
    category2: "Folklore",
    abilities: ["Dry Skin", "Wonder Guard"],
    types: ["Dragon", "Water"],
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
        image: "https://imgur.com/u13ECcO.png",
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
  }
};