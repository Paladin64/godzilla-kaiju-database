const godzillaList = [
  {
    name: "1954 Godzilla",
    link: "/godzilla-1954",
    image: "https://sciencefiction.com/wp-content/uploads/2020/04/Gojira.jpeg",
    appearances: [
      "Godzilla 1954",
      "Godzilla Against Mechagodzilla (As a skeleton and Kiryu)"
    ],
    abilities: [
      "Invulnerable to human weaponry",
      "Atomic Breath",
      "Swimming",
      "Radioactive"
    ],
    height: {
      meters: 50,
      feet: 160
    }
  },
  {
    name: "Showa Godzilla",
    link: "/showa-godzilla",
    image:
      "https://becominggodzilla.com/wp-content/uploads/2020/03/Megalon_1973_main_2-768x548.jpg",
    appearances: [
      "Godzilla Raids Again",
      "King Kong vs Godzilla",
      "Mothra vs Godzilla",
      "Ghidorah, the Three-Headed Monster",
      "Invasion of the Astro-Monster",
      "Ebirah, Horror of the Deep",
      "Son of Godzilla",
      "Destroy All Monsters",
      "All Monsters Attack",
      "Godzilla vs Hedorah",
      "Godzilla vs Gigan",
      "Godzilla vs Megalon",
      "Zone Fighter",
      "Godzilla vs Mechagodzilla",
      "Terror of Mechagodzilla"
    ],
    abilities: [
      "Invulnerable to human weaponry",
      "Atomic Breath",
      "Atomic Absorbtion",
      "Lateral drop kicks",
      "Flight",
      "Jumping",
      "Magnetic",
      "Swimming",
      "Radioactive"
    ],
    height: {
      meters: 50,
      feet: 160
    }
  },
  {
    name: "Showa Minilla",
    link: "/showa-minila",
    image:
      "https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2018/05/screen_shot_2018-05-04_at_5.35.50_pm.png?offset-y=0",
    appearances: [
      "Son of Godzilla",
      "Destroy All Monsters",
      "All Monsters Attack"
    ],
    abilities: [
      "Radio Telepathy",
      "Atomic Smoke Rings",
      "Atomic Breath",
      "Size Manipulation",
      "Speak Japanese"
    ],
    height: {
      meters: 18,
      feet: 59
    }
  },
  {
    name: "Hanna-Barbara Godzilla",
    link: "/hanna-barbara-godzilla",
    image:
      "https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2018/01/godzilla-04.jpg?offset-x=0&offset-y=0",
    appearances: ["Hanna-Barbara Cartoons"],
    abilities: [
      "Atomic Breath",
      "Laser Vision",
      "Digging",
      "Durability",
      "Advanced Senses"
    ],
    height: {
      meters: 122,
      feet: 400
    }
  },
  {
    name: "Marvel Godzilla",
    link: "/marvel-godzilla",
    image:
      "https://bloody-disgusting.com/wp-content/uploads/2019/06/marvel-godzilla.png",
    appearances: ["Marvel's Godzilla, King of the Monster"],
    abilities: ["Atomic Breath", "Thor-level strength"],
    height: {
      meters: "Inconsistent",
      feet: "Inconsistent"
    }
  },
  {
    name: "Heisei Godzilla(before growth spurt)",
    link: "/heisei-godzilla",
    image: "http://www.kaijubattle.net/uploads/2/9/5/7/29570123/771672710.jpg",
    appearances: [
      "The Return of Godzilla",
      "Godzilla vs Biollante",
      "Godzilla vs King Ghidorah"
    ],
    abilities: [
      "Swimming",
      "Atomic Breath",
      "Intense heat resistance",
      "Resistance to human weapons",
      "Atomic absorbtion"
    ],
    height: {
      meters: 80,
      feet: 262
    }
  },
  {
    name: "Dark Horse Godzilla",
    link: "/dark-horse-godzilla",
    image:
      "https://i.pinimg.com/originals/ce/1e/12/ce1e12ce6297f4663b53887dd1c45be9.jpg",
    appearances: ["Dark Horse Comics"],
    abilities: ["Atomic Breath", "Swimming"],
    height: {
      meters: 100,
      feet: 328
    }
  },
  {
    name: "Heisei Godzilla(after growth spurt)",
    link: "/heisei-godzilla-grown",
    image:
      "https://becominggodzilla.com/wp-content/uploads/2020/06/Space_1994_Screencaps_06.jpg",
    appearances: [
      "Godzilla vs King Ghidorah",
      "Godzilla vs Mechagodzilla II",
      "Godzilla vs Spacegodzilla"
    ],
    abilities: [
      "Atomic Breath",
      "Atomic Pulse",
      "Spiral Ray",
      "Spiral Heat Ray",
      "Resistance to advanced weaponry",
      "Swimming",
      "Resistance to intense heat"
    ],
    height: {
      meters: 100,
      feet: 328
    }
  },
  {
    name: "Baby Godzilla",
    link: "/baby-godzilla",
    image:
      "https://i.pinimg.com/originals/1c/77/28/1c77283d7f6934d9fc8d1e3230ac5b69.jpg",
    appearances: ["Godzilla vs Mechagodzilla II"],
    abilities: ["Swimming", "Telepathy"],
    height: {
      meters: 1.64,
      feet: 5.4
    }
  },
  {
    name: "Little Godzilla",
    link: "/little-godzilla",
    image: "https://i.ytimg.com/vi/XeJJ6IWwtTo/maxresdefault.jpg",
    appearances: ["Godzilla vs Spacegodzilla"],
    abilities: ["Atomic Spark Breath", "Swimming", "Telepathy"],
    height: {
      meters: 30,
      feet: 98
    }
  },
  {
    name: "Godzilla Junior",
    link: "/godzilla-junior",
    image:
      "https://i.pinimg.com/originals/73/95/a7/7395a72bbaba8e0405d38337c0d38265.jpg",
    appearances: ["Godzilla vs Destroyah"],
    abilities: ["Atomic Breath", "Swimming", "Atomic absorbtion", "Telepathy"],
    height: {
      meters: 40,
      feet: 131
    }
  },
  {
    name: "Burning Heisei Godzilla",
    link: "/burning-heisei-godzilla",
    image: "https://bloody-disgusting.com/wp-content/uploads/2014/11/gz5.png",
    appearances: ["Godzilla vs Destroyah"],
    abilities: [
      "Atomic Heat Ray",
      "Atomic Pulse",
      "Meltdown",
      "Infinite Heat Ray",
      "Swimming",
      "Intense heat",
      "Resistance to human weapons"
    ],
    height: {
      meters: 100,
      feet: 328
    }
  },
  {
    name: "1998 Godzilla",
    link: "/godzilla-1998",
    image:
      "https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2018/05/godzilla-1998-di-03.jpg?offset-y=0",
    appearances: ["Godzilla 1998", "Godzilla The Series"],
    abilities: [
      "Power Breath",
      "Minor resistance to human weapons",
      "Digging",
      "Swimming"
    ],
    height: {
      meters: 60,
      feet: 197
    }
  },
  {
    name: "Animated Series Godzilla Junior",
    link: "/animated-godzilla-junior",
    image:
      "https://www.scified.com/articles/why-godzilla-the-series-was-great-21.jpg",
    appearances: ["Godzilla The Series"],
    abilities: [
      "Agility",
      "Atomic Breath",
      "Digging",
      "Swimming",
      "Resistance to human weapons"
    ],
    height: {
      meters: 55,
      feet: 180
    }
  },
  {
    name: "Cyber Godzilla",
    link: "cyber-godzilla",
    image:
      "http://pm1.narvii.com/6308/5189093bee12c67b2958fc9bf3c3bcfd329720ca_00.jpg",
    appearances: ["Godzilla The Series"],
    abilities: [
      "Agility",
      "Atomic Heat Ray",
      "Chest Mounted Refractor",
      "Durability",
      "Dorsal Missles"
    ],
    height: {
      meters: 55,
      feet: 180
    }
  },
  {
    name: "Millenium Godzilla",
    link: "/millenium-godzilla",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0ed398efa83b3b1be00de21835301183a49f306d8743dd50524c9574d6d73b08._V_SX1080_.jpg",
    appearances: ["Godzilla 2000"],
    abilities: [
      "Atomic Breath",
      "Swimming",
      "Resistance to human weapons",
      "Regeneration",
      "Atomic Pulse"
    ],
    height: {
      meters: 55,
      feet: 180
    }
  },
  {
    name: "Megaguirus Godzilla",
    link: "/megaguirus-godzilla",
    image:
      "http://basementrejects.com/wp-content/uploads/2014/08/godzilla-vs-megaguirus-movie-review-roar-600x300.jpg",
    appearances: ["Godzilla vs Megaguirus"],
    abilities: [
      "Atomic Breath",
      "Swimming",
      "Atomic Absorbtion",
      "Energy Absorbtion",
      "Agility"
    ],
    height: {
      meters: 55,
      feet: 180
    }
  },
  {
    name: "Ghost Godzilla",
    link: "/ghost-godzilla",
    image:
      "https://becominggodzilla.com/wp-content/uploads/2020/08/GMK_2001_Screengrabs_19-1-768x549.jpg",
    appearances: [
      "Godzilla, Mothra, King Ghidorah: Giant Monsters All Out Attack"
    ],
    abilities: [
      "Atomic Breath",
      "Swimming",
      "Resistance to human weapons",
      "Resistance to kaiju attacks"
    ],
    height: {
      meters: 60,
      feet: 197
    }
  },
  {
    name: "Kiryu Saga Godzilla",
    link: "/kiryu-godzilla",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDlhYzRkMWQtNGRlMC00OTZmLWJlZGItN2M3NGI3NjU4MDQyXkEyXkFqcGdeQXVyNjQ2MzU1NzQ@._V1_.jpg",
    appearances: ["Godzilla Against Mechagodzilla", "Godzilla: Tokyo SOS"],
    abilities: [
      "Atomic Breath",
      "Resistance to advanced weapons",
      "Resistance to intense cold",
      "Swimming",
      "Lightning Absorbtion"
    ],
    height: {
      meters: 55,
      feet: 180
    }
  },
  {
    name: "Final Wars Godzilla",
    link: "/final-wars-godzilla",
    image: "https://www.scified.com/topics/506144177948641.jpg",
    appearances: ["Godzilla: Final Wars"],
    abilities: [
      "Atomic Breath",
      "Spiral Heat Ray",
      "Intense Durability",
      "Swimming",
      "Atomic Pulse"
    ],
    height: {
      meters: 100,
      feet: 328
    }
  },
  {
    name: "Final Wars Minila",
    link: "/final-wars-minila",
    image: "https://i.ytimg.com/vi/ddB4twIlTek/maxresdefault.jpg",
    appearances: ["Godzilla: Final Wars"],
    abilities: ["Atomic Breath", "Atomic Smoke Rings", "Size Manipulation"],
    height: {
      meters: 20,
      feet: 66
    }
  },
  {
    name: "IDW Godzilla",
    link: "/idw-godzilla",
    image:
      "https://www.mandatory.com/assets/uploads/2013/06/godzillaroe1658.jpg",
    appearances: ["IDW Comics"],
    abilities: ["Atomic Breath", "Swimming"],
    height: {
      meters: 100,
      feet: 328
    }
  },
  {
    name: "Dagon",
    link: "/Dagon",
    image:
      "https://external-preview.redd.it/CKQLjRbewF3ygmyklJe5AywOVI3ZWE0c_ZyRS9htO3Q.jpg?auto=webp&s=9a7c44b0a46765d5ed3769dee9945ebd7ef879e9",
    appearances: ["Godzilla: Aftershock", "Godzilla 2014 (as a skeleton)"],
    abilities: [
      "Atomic Breath",
      "Atomic absorbtion",
      "Resistance to Oxygen Destroyer",
      "Swimming",
      "Alpha Titan",
      "Absorb Mothra's energy to briefly become Burning Godzilla"
    ],
    height: {
      meters: 108,
      feet: 354
    }
  },
  {
    name: "Legendary Godzilla 2014",
    link: "/legendary-godzilla-2014",
    image:
      "https://decider.com/wp-content/uploads/2019/05/godzilla-2014.jpg?quality=80&strip=all",
    appearances: ["Godzilla 2014"],
    abilities: [
      "Atomic Breath",
      "Atomic absorbtion",
      "Resistance to Oxygen Destroyer",
      "Swimming",
      "Alpha Titan",
      "Absorb Mothra's energy to briefly become Burning Godzilla"
    ],
    height: {
      meters: 108,
      feet: 355
    }
  },
  {
    name: "Kamata Kun",
    link: "/kamata-kun",
    image:
      "https://images.squarespace-cdn.com/content/570a86d07c65e49ce613b080/1482766007009-TPZVE4IKL2ZQDBAK71JS/?content-type=image%2Fjpeg",
    appearances: ["Shin Godzilla"],
    abilities: ["Swimming", "Resistance to human weapons", "Mutation"],
    height: {
      meters: 28,
      feet: 92
    }
  },
  {
    name: "Shinagawa Kun",
    link: "/shinagawa-kun",
    image: "https://pbs.twimg.com/media/EhLGNqmWkAAcI-f.jpg",
    appearances: ["Shin Godzilla"],
    abilities: ["Swimming", "Resistance to human weapons", "Mutation"],
    height: {
      meters: 57,
      feet: 187
    }
  },
  {
    name: "Shin Godzilla",
    link: "/shin-godzilla",
    image:
      "https://static.rogerebert.com/uploads/review/primary_image/reviews/shin-godzilla-2016/Shin-Godzilla-2016-2.jpg",
    appearances: ["Shin Godzilla"],
    abilities: [
      "Swimming",
      "Immunity to human weapons",
      "Atomic Breath",
      "Atomic Back Beams",
      "Atomic Tail Beam",
      "Mutation"
    ],
    height: {
      meters: 119,
      feet: 389
    }
  },
  {
    name: "Godzilla Earth",
    link: "/godzilla-earth",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea914385-70d7-476d-aa3b-37d0c449c464/dc0cqc8-2918e6ad-7a98-43c3-bb6e-ad8ef91a5b5b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZWE5MTQzODUtNzBkNy00NzZkLWFhM2ItMzdkMGM0NDljNDY0XC9kYzBjcWM4LTI5MThlNmFkLTdhOTgtNDNjMy1iYjZlLWFkOGVmOTFhNWI1Yi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.AG9w6KBw5qzPg-YkIhnCg-7pAql3cJisoRUnQF8fB-M",
    appearances: [
      "Godzilla: Monster Apocalypse",
      "Godzilla: Project Mechagodzilla",
      "Godzilla: Planet of the Monsters",
      "Godzilla: City on the Edge of Battle",
      "Godzilla: The Planet Eater"
    ],
    abilities: [
      "Charged Particle Breath",
      "Immunity to human weapons",
      "Resistance to supernatural",
      "Propagation",
      "Longevity",
      "Spiral Particle Breath",
      "EMP",
      "Electromagnetic Shield",
      "Oscillatory Wave",
      "Plasma Cutter",
      "Regeneration"
    ],
    height: {
      meters: 318,
      feet: 1043
    }
  },
  {
    name: "Godzilla Filius",
    link: "/godzilla-filius",
    image: "https://i.ytimg.com/vi/4YxrBpO6eqc/maxresdefault.jpg",
    appearances: ["Godzilla: Planet of the Monsters"],
    abilities: [
      "Resistance to human weapons",
      "Energy Shield",
      "Charged Particle Breath",
      "Regeneration"
    ],
    height: {
      meters: 50,
      feet: 160
    }
  },
  {
    name: "Legendary Godzilla",
    link: "/legendary-godzilla",
    image:
      "https://livewire.thewire.in/wp-content/uploads/2019/06/godzilla1.0.jpg",
    appearances: [
      "Godzilla: Aftershock",
      "Godzilla: King of the Monsters",
      "Godzilla vs Kong"
    ],
    abilities: [
      "Atomic Breath",
      "Atomic absorbtion",
      "Resistance to Oxygen Destroyer",
      "Swimming",
      "Alpha Titan",
      "Absorb Mothra's energy to briefly become Burning Godzilla"
    ],
    height: {
      meters: 120,
      feet: 395
    }
  },
  {
    name: "Burning Legendary Godzilla",
    link: "/burning-legendary-godzilla",
    image:
      "https://anygoodfilms.com/wp-content/uploads/2019/05/godzilla-2-pic.jpg",
    appearances: ["Godzilla: King of the Monsters"],
    abilities: ["Emits intense heat", "Thermalnuclear Pulse"],
    height: {
      meters: 120,
      feet: 395
    }
  },
  {
    name: "Snow Godzilla",
    link: "/snow-godzilla",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/14d2c096-88a2-4df2-bd85-433d1e61eb22/ddox6fy-2b94d63e-b94e-43a9-9424-11a67556685d.png/v1/fill/w_1280,h_720,q_80,strp/snow_godzilla__by_venom_rules_all_ddox6fy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MjAiLCJwYXRoIjoiXC9mXC8xNGQyYzA5Ni04OGEyLTRkZjItYmQ4NS00MzNkMWU2MWViMjJcL2Rkb3g2ZnktMmI5NGQ2M2UtYjk0ZS00M2E5LTk0MjQtMTFhNjc1NTY2ODVkLnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yE5eoOhUvfglYdctIigGcnE5qNdI1P2w_S4B7bFBvgU",
    appearances: [
      "Shinkansen Henkei Robo Shinkalion the Movie: The Marvelous Fast ALFA-X That Comes From the Future"
    ],
    abilities: [
      "Atomic Breath",
      "Ice Breath",
      "Teleportation",
      "Create Blizzards",
      "Regeneration",
      "Immortality",
      "Interdimesional Travel"
    ],
    height: {
      meters: 119,
      feet: 389
    }
  },
  {
    name: "Singular Point Godzilla",
    link: "/singular-point-godzilla",
    image:
      "https://www.tvovermind.com/wp-content/uploads/2021/03/Singular-Point.jpg",
    appearances: ["Godzilla Singular Point"],
    abilities: ["Atomic Breath", "Swimming", "to be announced"],
    height: {
      meters: "TBA",
      feet: "TBA"
    }
  }
];

export default godzillaList;
