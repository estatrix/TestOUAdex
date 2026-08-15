// data.js
const pokemonData = {
  lucario: {
    name: "Lucario",
    number: "0448",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png",
    description: "It can discern the aura of all things. By catching the aura emanating from others, it can read their thoughts and movements even from a kilometer away.",
    height: "1.2 m",
    weight: "54.0 kg",
    gender: "♂ ♀",
    category: "Aura",
    abilities: ["Steadfast", "Inner Focus"],
    category2: "Folklore",
    types: ["fighting", "steel"],
    stats: { hp: 70, attack: 110, defense: 70, spAttack: 115, spDefense: 70, speed: 90 },
    signatureMove: "Aura Sphere",
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
  template: {
    name: "",
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
    types: ["Dragon", "Water"],
    stats: {
        hp: 120, 
        attack: 80, 
        defense: 145, 
        spAttack: 75, 
        spDefense: 115, 
        speed: 65
    },
    signatureMove: "Origin Pulse",
  },
  lukas: {
    name: "Lukas",
    number: "067",
    image: "https://imgur.com/GF1WTdu.png",
    description: "",
    height: "2 foxes tall",
    weight: "A sheep and a gram",
    gender: "sheep",
    category: "Sheep",
    abilities: ["Fluffy", "Quick Draw"],
    types: ["Normal", "Dark"],
    stats: {
        hp: 50, 
        attack: 130, 
        defense: 120, 
        spAttack: 120, 
        spDefense: 60, 
        speed: 120
    }
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