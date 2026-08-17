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
    image: "https://imgur.com/TBuZrAd.png",
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
        image: "https://imgur.com/TBuZrAd.png",
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
    category2: "Mythology",
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
        hp: 90, 
        attack: 80, 
        defense: 75, 
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
    abilities: ["Keen Eye", "Minds Eye"],
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
  tina: {
    name: "Tina Bell",
    number: "000",
    image: "https://imgur.com/WzbA91p.png",
    description: "Tina is a bit of a rambunctious girl who is tricksy and nosy, but not in a way that would make it unfun. She has good intentions, she's just very curious and not exactly a rules follower.",
    height: "0.6 m",
    weight: "1 blaze rod",
    gender: "♀",
    category: "Season Fairy (Summer)",
    abilities: ["Chlorophyll", "Solar Power"],
    types: ["Fairy", "Fire"],
    stats: {
        hp: 20, 
        attack: 25, 
        defense: 40, 
        spAttack: 125, 
        spDefense: 100, 
        speed: 130
    },
    signatureMove: "Fiery Dance",
    category2: "Fairytale"
  },
  enso: {
    name: "Enso Hades",
    number: "000",
    image: "https://imgur.com/QXvEzRW.png",
    description: "Growing up as a son of hades his father had high expectations of him, but Enso had no interest in such things and his heart was only filled with greed, he wanted more than just a throne, he wanted power, but he never let his father know his true intentions of taking all his riches for himself and continued to train under his father and the underworlds strongest demons to reach his goal using his natural born abilities and wits to fool all those around him",
    height: "1.60 m",
    weight: "1 dead body & half",
    gender: "♂",
    category: "Death",
    abilities: ["Merciless", "Supreme Overlord"],
    types: ["Dark","Fighting"],
    stats: {
        hp: 95, 
        attack: 120, 
        defense: 85, 
        spAttack: 105, 
        spDefense: 95, 
        speed: 100
    },
    signatureMove: "Power Trip",
    category2: "Mythology"
  },
  eliska: {
    name: "Eliśka Ivanovich",
    number: "000",
    image: "https://imgur.com/Fs050Jf.png",
    description: "idk, uh, horse gal, hell yeah",
    height: "2 rainbowdash",
    weight: "1 applejack",
    gender: "♀",
    category: "Firebird / Red Fox",
    abilities: ["Harvest", "Hustle"],
    types: ["Fire", "Ground"],
    stats: {
        hp: 100, 
        attack: 125, 
        defense: 100, 
        spAttack: 55, 
        spDefense: 85, 
        speed: 35
    },
    signatureMove: "High Horsepower",
    category2: "Fairytale"
  },
  kuro: {
    name: "Kuro Tsukuyomi",
    number: "000",
    image: "https://imgur.com/aD0eSQ2.png",
    description: "In the midst of night under the pale blue moon Kuro was left soundly asleep on the steps of an old temple that hasn't been visited in over 100 years and then was found by a group of lunar rabbits and up until he reached the age of 16 he was cared for then set a foot to travel to bookhaven.",
    height: "8 rabbits",
    weight: "1 giant carrot",
    gender: "♂",
    category: "Moon",
    abilities: ["Tangled Feet", "Super Luck"],
    types: ["Dark", "Grass"],
    stats: {
        hp: 75, 
        attack: 70, 
        defense: 70, 
        spAttack: 40, 
        spDefense: 80, 
        speed: 90
    },
    signatureMove: "False Surrender",
    category2: "Mythology"
  },
  winona: {
    name: "Winona Cantu",
    number: "000",
    image: "https://imgur.com/Kw7ytNt.png",
    description: "She’s a bright individual when she’s at the school, however has struggled to keep friends as her personality tends to shift at night due to her paranoia. When around her (at night) you can hear the screams of her mother crying out “Mis hijos! Ay mis hijos!”. Which has left her to be the weird kid at times.",
    height: "1.63 m",
    weight: "62 kg",
    gender: "♀",
    category: "Wheep",
    abilities: ["Tangling Hair", "Cursed Body"],
    types: ["Water", "Ghost"],
    stats: {
        hp: 55, 
        attack: 55, 
        defense: 55, 
        spAttack: 135, 
        spDefense: 135, 
        speed: 95
    },
    signatureMove: "Whirlpool",
    category2: "Folklore"
  },
  malos: {
    name: "Malos Wynn Grimoire",
    number: "000",
    image: "https://imgur.com/LIBVEZf.png",
    description: "Being the son to the sorcerer Merlin, Malos left the castle to travel and learn about the world. He seeks to be a great advisor like his father, but instead of helping royalty and knights, Malos seeks to aid the new generation and common folk. While wandering, he finds an application to join Book Haven. He is missing is right arm from the bicep down due to a magic incident. Malos replaces it with a mana construct he conjures like a prosthetic.",
    height: "2.01 m",
    weight: "93 kg",
    gender: "♂",
    category: "Wizard",
    abilities: ["Magic Guard", "Earth Eater"],
    types: ["Psychic", "Ground"],
    stats: {
        hp: 55, 
        attack: 90, 
        defense: 55, 
        spAttack: 135, 
        spDefense: 95, 
        speed: 70
    },
    signatureMove: "Gravity",
    category2: "Fairytale"
  },
  ampi: {
    name: "Rampion Kingston",
    number: "000",
    image: "https://imgur.com/zHdbih7.png",
    description: "Like a little ray of sunshine! He tries to make sure everyone around him is happy, but if he needs to he'll stand up for people being picked on. He tries his best to see the good in everyone. He's very quietly ambitious- a bit shy at first, but will go out of his way to comfort, cheer up, or make someone laugh once they're close enough. He loves spending quality time with people and sometimes the only way he knows how to connect with people is through gift giving.",
    height: "1.82 m",
    weight: "76.8 kg",
    gender: "♂",
    category: "Lost Prince",
    abilities: ["Serene Grace", "Clear Body"],
    types: ["Normal", "Water"],
    stats: {
        hp: 75, 
        attack: 80, 
        defense: 60, 
        spAttack: 65, 
        spDefense: 90, 
        speed: 100
    },
    signatureMove: "Present",
    category2: "Fairytale"
  },
  gus: {
    name: "Augustus Queen",
    number: "000",
    image: "https://imgur.com/f2mOv1Y.png",
    description: "They came to Bookhaven after the fire at Feylore Prep. Augustus didn’t care to think much on it, as long as he fulfills his destiny, he doesn’t care which school he was to attend. When he first arrived, he fumbled around a bit, struggling to find his footing and seem evil. He was the least intimidating boy ever. The first friend he makes is the head girl Maggie, but not before Gus breaks into her cabin and steals her diary. Plans went awry and Gus gave Maggie a shitty apology, but later actually does his best to make it up to her.",
    height: "1.7 m",
    weight: "65.9 kg",
    gender: "♂",
    category: "Evil Queen",
    abilities: ["Unburden", "Pressure"],
    types: ["Dark", "Normal"],
    stats: {
        hp: 65, 
        attack: 70, 
        defense: 75, 
        spAttack: 80, 
        spDefense: 85, 
        speed: 90
    },
    signatureMove: "Embargo",
    category2: "Fairytale"
  },
  mirr: {
    name: "Zot Mirr",
    number: "000",
    image: "https://imgur.com/LruxOjh.png",
    description: "Mr.mirr has lead an interesting life. He has had 3 brothers Adam Malcom and Maelor and a sister pharra. Mr.mirr is married to the evil queen autumn queen who he met at the school during his years here breaking off a 16 year long betrothal and engagement to that cycles sleeping beauty to be with autumn his true love.",
    height: "1 bathroom mirror",
    weight: "10 mirrors",
    gender: "mirror",
    category: "Mirror",
    abilities: ["Mirror Armor", "Magic Bounce"],
    types: ["Psychic", "Steel"],
    stats: {
        hp: 75, 
        attack: 90, 
        defense: 110, 
        spAttack: 70, 
        spDefense: 80, 
        speed: 60
    },
    signatureMove: "Mirror Move",
    category2: "Folklore"
  },
  elio: {
    name: "Elio Ray",
    number: "000",
    image: "https://imgur.com/ULSYJLc.png",
    description: "Elio grew up with a lot of turmoil at home. At 5 years old, his mother passed away, a commonality with Apollo’s descendants. During those 5 years, he was very close to his mother, and her sudden death left deep scars on him. Growing up without her, Elio threw himself into training to become the next Apollo, with the guidance of his father.",
    height: "1.68 m",
    weight: "72.1 kg",
    gender: "♂",
    category: "Sun",
    abilities: ["Blaze", "Fire Mane"],
    types: ["Fire", "Flying"],
    stats: {
        hp: 90, 
        attack: 100, 
        defense: 90, 
        spAttack: 125, 
        spDefense: 85, 
        speed: 90
    },
    signatureMove: "Searing Shot",
    category2: "Mythology"
  },
  aita: {
    name: "Aita Moon",
    number: "000",
    image: "https://imgur.com/btBeEix.png",
    description: "Aita is a shy closed of girl who sticks to herself and reads she also primarily likes to stay up at night to look at the beautiful sky but if you talk to her she will open up since she does deep down want friends its just she doesn't have the best social skills…",
    height: "1.72 m",
    weight: "58.7 kg",
    gender: "♀",
    category: "Hunter",
    abilities: ["Compound Eyes", "No Guard"],
    types: ["Fighting", "Dark"],
    stats: {
        hp: 65, 
        attack: 95, 
        defense: 75, 
        spAttack: 65, 
        spDefense: 60, 
        speed: 115
    },
    signatureMove: "Triple Arrows",
    category2: "Mythology"
  },
  maggie: {
    name: "Echo Bosse",
    number: "000",
    image: "https://imgur.com/wnnINGl.png",
    description: "Echo was born on a cold February evening to mother Carolyne Bosse in the hospital wing of the palace of the winter fairies with two wings, two eyes, two ears and.. a wild life ahead of her. Taken in her infancy and raised by her captor, assumed mother, Pharah Godfairy.. Echo.. or was it Maggie..? Always assumed that life would hold the door open for her to waltz into destiny when she was ready to meet it.. little did she know how wrong she was. Now seemingly being flung about by the whims of the fates themselves, Echo has many different types of hurdles to overcome.. will she be a good Queen? More importantly, will he let her fail?",
    height: "5 apples tall",
    weight: "The weight of all the lore in her shoulders",
    gender: "♀",
    category: "Season Fairy (Winter)",
    abilities: ["Shadow Tag", "Magician"],
    types: ["Fairy", "Dark"],
    stats: {
        hp: 95, 
        attack: 90, 
        defense: 65, 
        spAttack: 135, 
        spDefense: 95, 
        speed: 75
    },
    signatureMove: "Nasty Plot",
    category2: "Fairytale"
  },
  bella: {
    name: "Bellarose Knight",
    number: "000",
    image: "https://imgur.com/kCMu6aV.png",
    description: "Bella has been sheltered for most of her life on Circe's Island. She doesn't know much about who her mother is and who she is. She really enjoys reading and finding new recipes to try out. Her mother raised her to eventually take over a small portion of the island, but that isn't what Bella wants. She wants to explore the world and meet new people(without turning them into animals). Since she grew up with an overbearing mother, she learned ways to sneak away and go explore different areas outside of the island without her mothers knowledge. Which is how she learned how to be proficient with a bow and how to make new recipes",
    height: "1.73 m",
    weight: "72.1 kg",
    gender: "♀",
    category: "Magic Warrior",
    abilities: ["Steadfast", "Mold Breaker"],
    types: ["Fighting", "Psychic"],
    stats: {
        hp: 60, 
        attack: 125, 
        defense: 65, 
        spAttack: 125, 
        spDefense: 75, 
        speed: 100
    },
    signatureMove: "Secret Sword",
    category2: "Mythology"
  },
};