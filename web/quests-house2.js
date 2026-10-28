window.HOUSE_2_ROOMS = [
  {
    id: "h2-r1",
    house: 2,
    floorLabel: "4th Floor Left",
    name: "The Parmigiano & Pink-Fridge Kitchen",
    subtitle: "White cabinets, black range hood, pink fridge, stacked jam jars, red 'Parm' box & Windsor chairs",
    photo: "assets/photos/IMG_3718.jpg",
    relic: { id: "relic-kettle", icon: "", img: "assets/watercolor/post_26.png", name: "Golden Tea Kettle", desc: "Gleaming on the black kitchen counter" },
    character: { name: "Chef Hazelnut", role: "Pâtissier of the Gable Kitchen", img: "assets/watercolor/s1_05.png" },
    svgArt: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="h2r1-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fdfbf7"/>
          <stop offset="100%" stop-color="#eee5d5"/>
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="#ebe0cd"/>
      <polygon points="0,68 155,8 320,68 320,200 0,200" fill="url(#h2r1-wall)"/>
      <polyline points="0,68 155,8 320,68" fill="none" stroke="#8c7355" stroke-width="5"/>
      <rect x="0" y="156" width="320" height="44" fill="#d9cbb8" stroke="#6e5a44" stroke-width="1.5"/>
      <!-- Climbing Watercolor Ivy on Left Gable Wall -->
      <path d="M18,62 Q10,92 20,118 Q12,145 20,165" stroke="#4c7c44" stroke-width="3" fill="none"/>
      <ellipse cx="13" cy="80" rx="5" ry="3" transform="rotate(-25 13 80)" fill="#5e9453"/>
      <ellipse cx="23" cy="102" rx="5" ry="3" transform="rotate(20 23 102)" fill="#5e9453"/>
      <ellipse cx="14" cy="128" rx="5" ry="3" transform="rotate(-20 14 128)" fill="#5e9453"/>
      <!-- White Beadboard Upper & Lower Cabinets with Sepia Ink Details -->
      <rect x="30" y="46" width="84" height="38" rx="2" fill="#ffffff" stroke="#6e5a44" stroke-width="1.8"/>
      <line x1="58" y1="46" x2="58" y2="84" stroke="#b8ab99" stroke-width="1.2"/>
      <line x1="86" y1="46" x2="86" y2="84" stroke="#b8ab99" stroke-width="1.2"/>
      <rect x="30" y="108" width="96" height="50" rx="2" fill="#ffffff" stroke="#6e5a44" stroke-width="1.8"/>
      <line x1="62" y1="108" x2="62" y2="158" stroke="#b8ab99" stroke-width="1.2"/>
      <line x1="94" y1="108" x2="94" y2="158" stroke="#b8ab99" stroke-width="1.2"/>
      <rect x="28" y="102" width="144" height="7" rx="1" fill="#2c2520"/>
      <!-- Gleaming Golden Brass Kettle with Steam -->
      <circle cx="106" cy="95" r="7.5" fill="#e0a938" stroke="#5c3a1d" stroke-width="1.5"/>
      <path d="M100,90 Q106,82 112,90" fill="none" stroke="#5c3a1d" stroke-width="1.5"/>
      <!-- Black Chimney Range Hood -->
      <rect x="145" y="48" width="6" height="24" fill="#2c2520"/>
      <polygon points="128,84 167,84 154,71 141,71" fill="#2c2520" stroke="#1a1412" stroke-width="1.2"/>
      <!-- Framed Portrait of Two Smiling Children -->
      <rect x="184" y="54" width="30" height="22" rx="1" fill="#f0f4f8" stroke="#4a6fa5" stroke-width="2"/>
      <circle cx="194" cy="64" r="3.5" fill="#e6b89c"/>
      <circle cx="204" cy="65" r="3.5" fill="#e6b89c"/>
      <!-- Pastel Pink Retro Double-Door Fridge -->
      <rect x="186" y="82" width="46" height="70" rx="6" fill="#ebbac3" stroke="#8c5460" stroke-width="1.8"/>
      <line x1="209" y1="82" x2="209" y2="152" stroke="#8c5460" stroke-width="1.4"/>
      <line x1="205" y1="104" x2="205" y2="118" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="213" y1="104" x2="213" y2="118" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>
      <!-- Tower of 4 Stacked Jam Preserve Jars -->
      <rect x="238" y="84" width="24" height="66" rx="3" fill="#ffffff" stroke="#7d6b58" stroke-width="1.5"/>
      <rect x="240" y="94" width="20" height="9" fill="#9b2c2c"/>
      <rect x="240" y="110" width="20" height="9" fill="#d69e2e"/>
      <rect x="240" y="126" width="20" height="9" fill="#553c9a"/>
      <rect x="240" y="140" width="20" height="8" fill="#702459"/>
      <!-- Red 'Parm' (Parmigiano) Cheese Box on Floor -->
      <polygon points="104,154 140,154 134,177 96,177" fill="#b83227" stroke="#4a1511" stroke-width="1.5"/>
      <text x="118" y="169" font-family="Georgia, serif" font-size="7.5" font-style="italic" font-weight="bold" fill="#ffffff" text-anchor="middle">Parm</text>
      <!-- White Dining Table, Floral Cake & Resident Watercolor Chef Mouse -->
      <rect x="162" y="138" width="92" height="7" rx="2" fill="#ffffff" stroke="#7d6b58" stroke-width="1.6"/>
      <rect x="170" y="145" width="5" height="36" fill="#ffffff" stroke="#7d6b58" stroke-width="1.2"/>
      <rect x="240" y="145" width="5" height="36" fill="#ffffff" stroke="#7d6b58" stroke-width="1.2"/>
      <image href="assets/watercolor/post_26.png" x="192" y="106" width="36" height="36"/>
      <image href="assets/watercolor/s1_05.png" x="34" y="114" width="66" height="78"/>
      <image href="assets/watercolor/s1_15.png" x="256" y="112" width="60" height="76"/>
    </svg>`,
    hotspots: [
      { x: 37, y: 50, label: "Golden Kettle & Black Hood", note: "A gleaming brass kettle on black countertops beside a modern black chimney range hood." },
      { x: 64, y: 52, label: "Pastel Pink Retro Fridge", note: "A double-door pastel pink refrigerator right below a framed photo of two smiling kids!" },
      { x: 74, y: 53, label: "Stacked Jam Jar Tower", note: "A tall column of stacked fruit preserve jars in the right kitchen corner." },
      { x: 43, y: 66, label: "Red 'Parm' Cheese Box", note: "On the floor beside the white chair sits a red 'Parm' (Parmigiano) cheese box!" }
    ],
    tasks: {
      math: {
        title: "The Stacked Jam Jar Tower & Croissant Table",
        story: "In the right corner of the gourmet kitchen next to the pink refrigerator stands a tall stack of preserve jars.",
        junior: {
          prompt: "There are 4 jam jars stacked in a tower: Strawberry (85 g), Apricot (95 g), Fig (80 g), and Blackberry (90 g). What is the total weight of the 4-jar tower?",
          options: ["320 grams", "340 grams", "350 grams", "360 grams"],
          answer: 2,
          hint: "Pair up 85 + 95 = 180, and 80 + 90 = 170, then add them together!",
          explanation: "(85 + 95) + (80 + 90) = 180 + 170 = 350 grams!"
        },
        scholar: {
          prompt: "Around the white dining table stand 4 white Windsor chairs. If 3 mice come in for breakfast croissants and each mouse chooses a distinct chair, in how many different ways can the 3 mice be seated among the 4 chairs?",
          options: ["12 ways", "16 ways", "24 ways", "64 ways"],
          answer: 2,
          hint: "The first mouse has 4 chair choices, the second has 3 remaining choices, and the third has 2 choices.",
          explanation: "By permutations P(4,3) = 4 × 3 × 2 = 24 distinct seating arrangements!"
        }
      },
      logic: {
        title: "What's Inside the Pastel Pink Fridge?",
        story: "The pastel-pink fridge has 3 shelves: Top, Middle, and Bottom, holding Butter, Mascarpone, and Lemon Curd.",
        junior: {
          prompt: "Clues: (1) Butter is NOT on the Bottom shelf. (2) Mascarpone is directly above Lemon Curd. Which shelf holds the Butter?",
          options: ["The Top shelf", "The Middle shelf", "The Bottom shelf", "Outside on the table"],
          answer: 0,
          hint: "If Butter were on the Middle shelf, could Mascarpone and Lemon Curd sit directly one above the other?",
          explanation: "Mascarpone and Lemon Curd must occupy two adjacent shelves. Since Butter cannot be on the Bottom, Butter must be on the Top shelf, with Mascarpone on the Middle and Lemon Curd on the Bottom!"
        },
        scholar: {
          prompt: "On the stove under the black range hood, the mice want to boil a soft-boiled quail egg for EXACTLY 5 minutes. They only have two hourglasses: a 4-minute hourglass and a 7-minute hourglass. How can they measure exactly 5 minutes starting right when both hourglasses are flipped?",
          options: [
            "Flip both at t=0; when the 4-min empties (t=4), flip it and drop the egg in! When the 7-min empties (t=7), flip it (it has 3 min of sand) and let it runafter the 4-min finishes at t=8—or start boiling at t=3 when 4 min remain on the 7-min + 1 min left on theflipped 4-min!",
            "Wait for 7 minutes and subtract 2",
            "It is mathematically impossible because 4 and 7 are coprime",
            "Flip the 7-minute glass twice"
          ],
          answer: 0,
          hint: "Start both at t=0. At t=4 (4-min empties), flip the 4-min glass. At t=7 (7-min empties), the 4-min glass has been running for 3 minutes (so 1 minute is left)—flip the 7-min glass or start boiling from t=2!",
          explanation: "Because gcd(4,7) = 1, 2×4 - 7 = 1 minute! Flip both at t=0; flip the 4-min at t=4; at t=7 (when 7-min empties), the 4-min glass has 1 minute left. Drop the egg in at t=3 (when 4 min remain on the 7-min glass + 1 min left on the 4-min glass = 5 minutes)!"
        }
      },
      linguistics: {
        title: "Parmigiano, Croissant & Tulip Roots",
        story: "Look at the red 'Parm' box on the floor, the crescent pastry on the table, and the tulip in the pink vase!",
        junior: {
          prompt: "What does the French word 'CROISSANT' literally mean, describing the shape of the flaky pastry on the mice's kitchen table?",
          options: ["Crescent / Growing Moon", "Butter Cloud", "Golden Horn", "Morning Twist"],
          answer: 0,
          hint: "Think of the 'crescent' moon in the night sky!",
          explanation: "'Croissant' is the present participle of French 'croître' (to grow), meaning a 'growing (crescent) moon'!"
        },
        scholar: {
          prompt: "On the kitchen table sits a blue TULIP in a pink vase. Through Turkish ('tülbent') and Persian ('dulband'), what article of clothing is the word 'TULIP' etymologically identical to?",
          options: [
            "A turban (because European diplomats in Constantinople compared the flower's folded petals to a turban)",
            "A tunic",
            "A tulle veil",
            "A slipper"
          ],
          answer: 0,
          hint: "Ogier Ghiselin de Busbecq, ambassador to the Ottoman Empire in the 1550s, recorded the flower's name from Turkish 'tülbent' (Persian 'dulband').",
          explanation: "Both 'tulip' and 'turban' come from Persian 'dulband' (via Turkish 'tülbent'), because the tulip blossom resembled a wound turban!"
        }
      },
      history: {
        title: "The Red 'Parm' Box & Medieval Cheese Guilds",
        story: "Resting on the kitchen floor beside the chair is a bright red 'Parm' box.",
        junior: {
          prompt: "'Parmigiano-Reggiano' (Parmesan cheese) has been made for nearly 1,000 years in which country?",
          options: ["Italy ( around the cities of Parma and Reggio Emilia)", "Switzerland", "Belgium", "Portugal"],
          answer: 0,
          hint: "Its name comes directly from the Italian cities of Parma and Reggio!",
          explanation: "Benedictine and Cistercian monks in Parma and Reggio Emilia, Italy, began crafting giant wheels of Parmigiano-Reggiano in the 12th century!"
        },
        scholar: {
          prompt: "During the Great Fire of London in September 1666, which famous English diarist and naval administrator buried his prized wheel of Parmesan cheese (along with his wine and papers) in his garden to save it from the flames?",
          options: [
            "Samuel Pepys",
            "John Evelyn",
            "Christopher Wren",
            "Isaac Newton"
          ],
          answer: 0,
          hint: "He wrote a famous secret shorthand diary of 1660s London, including the Plague and the Great Fire.",
          explanation: "On September 4, 1666, Samuel Pepys dug a pit in his garden to bury his 'Parmazan cheese, as well as my wine and some other things' to save them from the Great Fire of London!"
        }
      }
    }
  },
  {
    id: "h2-r2",
    house: 2,
    floorLabel: "4th Floor Right",
    name: "The Crimson Rose Parlor & Hearth",
    subtitle: "Giant red wall rose, wooden fireplace, floral sofa set, wall maps & toy Rover",
    photo: "assets/photos/IMG_3719.jpg",
    relic: { id: "relic-rose", icon: "", img: "assets/watercolor/garden_29.png", name: "Crimson Velvet Rose", desc: "Blooming high on the parlor gable wall" },
    character: { name: "Lord Thistle", role: "Parlor Geographer", img: "assets/watercolor/mouse_gentleman.png" },
    svgArt: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="h2r2-fire" cx="0.48" cy="0.65" r="0.45">
          <stop offset="0%" stop-color="#ffd97d" stop-opacity="0.8"/>
          <stop offset="60%" stop-color="#f6ad55" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#f6ad55" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="320" height="200" fill="#e8decb"/>
      <polygon points="0,8 320,85 320,200 0,200" fill="#fcf9f2"/>
      <line x1="0" y1="8" x2="320" y2="85" stroke="#8c7355" stroke-width="5"/>
      <rect x="0" y="156" width="320" height="44" fill="#d8cbb8" stroke="#6e5a44" stroke-width="1.5"/>
      <circle cx="153" cy="128" r="78" fill="url(#h2r2-fire)"/>
      <!-- Giant Sculptural Crimson Rose on Upper Parlor Wall -->
      <circle cx="196" cy="52" r="20" fill="#b8252b" stroke="#5c1014" stroke-width="1.5"/>
      <circle cx="196" cy="52" r="13" fill="#e03c42" stroke="#7a161b" stroke-width="1.2"/>
      <path d="M188,52 Q196,42 204,52 Q196,62 188,52 Z" fill="#9b1c21"/>
      <!-- Wall Maps Taped to Right Wall -->
      <rect x="252" y="78" width="38" height="28" rx="1" fill="#f5e9c9" stroke="#8c6d46" stroke-width="1.2"/>
      <path d="M258,86 Q268,82 276,90 Q282,96 286,92" fill="none" stroke="#4a7c59" stroke-width="1.5"/>
      <!-- Wooden Fireplace Mantel, Crackling Hearth & Flemish Landscape Painting -->
      <rect x="133" y="72" width="40" height="24" rx="1" fill="#6b8e63" stroke="#8c6239" stroke-width="2.2"/>
      <path d="M135,90 Q148,80 160,88 L171,84 L171,94 L135,94 Z" fill="#3b5e34"/>
      <rect x="122" y="100" width="62" height="44" fill="#b87d3b" stroke="#5c3a1d" stroke-width="2"/>
      <rect x="137" y="114" width="32" height="30" rx="2" fill="#2c221e"/>
      <path d="M145,142 Q153,124 156,134 Q160,122 162,142 Z" fill="#f6ad55"/>
      <!-- Sapphire Blue Parlor Rug & Coffee Table -->
      <ellipse cx="145" cy="160" rx="52" ry="18" fill="#285e8e" stroke="#f7eed7" stroke-width="1.5" stroke-dasharray="4,2"/>
      <rect x="118" y="134" width="52" height="18" rx="2" fill="#8f5e2e" stroke="#4a2c11" stroke-width="1.6"/>
      <!-- Matching 3-Piece Floral Sofa & Armchairs -->
      <rect x="62" y="124" width="42" height="36" rx="6" fill="#fbf4e4" stroke="#8c7355" stroke-width="1.8"/>
      <rect x="184" y="126" width="42" height="36" rx="6" fill="#fbf4e4" stroke="#8c7355" stroke-width="1.8"/>
      <rect x="92" y="152" width="102" height="36" rx="8" fill="#fbf4e4" stroke="#9c6b3b" stroke-width="2.2"/>
      <g fill="#c53030">
        <circle cx="78" cy="138" r="2.2"/><circle cx="198" cy="140" r="2.2"/>
        <circle cx="114" cy="166" r="2.5"/><circle cx="136" cy="172" r="2.5"/>
        <circle cx="156" cy="165" r="2.5"/><circle cx="174" cy="172" r="2.5"/>
      </g>
      <!-- Black & White Wheeled Parlor Rover on Right -->
      <rect x="234" y="148" width="32" height="22" rx="4" fill="#ffffff" stroke="#1a202c" stroke-width="2"/>
      <circle cx="244" cy="158" r="3" fill="#3182ce"/>
      <circle cx="256" cy="158" r="3" fill="#e53e3e"/>
      <circle cx="238" cy="173" r="6" fill="#1a202c" stroke="#cbd5e0" stroke-width="1.5"/>
      <circle cx="262" cy="173" r="6" fill="#1a202c" stroke="#cbd5e0" stroke-width="1.5"/>
      <!-- Resident Watercolor Character: Gentleman Mouse -->
      <image href="assets/watercolor/mouse_gentleman.png" x="12" y="88" width="64" height="86"/>
    </svg>`,
    hotspots: [
      { x: 60, y: 42, label: "Giant Crimson Wall Rose", note: "A big sculptural red rose mounted high on the parlor wall under the sloped ceiling." },
      { x: 52, y: 54, label: "Hearth & Landscape Art", note: "A warm wooden fireplace mantel topped with a miniature green landscape painting." },
      { x: 48, y: 70, label: "Floral Sofa & Blue Rug", note: "A matching three-piece floral sofa and armchair set arranged around a wooden coffee table." },
      { x: 69, y: 72, label: "Wheeled Parlor Rover", note: "Parked beside the right armchair is a black-and-white wheeled toy rover/robot!" }
    ],
    tasks: {
      math: {
        title: "The Rose Parlor Seating & Blue Rug",
        story: "In the parlor, the floral sofa holds 3 mice, the left floral armchair holds 1 mouse, and the right floral armchair holds 1 mouse.",
        junior: {
          prompt: "Each rosebud printed on the sofa fabric has 5 petals. If there are 14 rosebuds printed on the sofa and 6 rosebuds on each of the two armchairs, how many petals are printed on the furniture set in total?",
          options: ["110 petals", "120 petals", "130 petals", "140 petals"],
          answer: 2,
          hint: "First add up the total number of rosebuds (14 + 6 + 6), then multiply by 5 petals each!",
          explanation: "Total rosebuds = 14 + 6 + 6 = 26 rosebuds. Multiply by 5 petals: 26 × 5 = 130 petals!"
        },
        scholar: {
          prompt: "In polar coordinates, a mathematical 'rose curve' is given by r(θ) = cos(kθ). How many distinct petals does the polar rose r(θ) = cos(4θ) have as θ sweeps from 0 to 2π?",
          options: ["4 petals", "8 petals", "12 petals", "16 petals"],
          answer: 1,
          hint: "For r = cos(kθ), when k is an odd integer there are k petals, but when k is an EVEN integer there are 2k petals!",
          explanation: "When k is even, r = cos(kθ) traces 2k petals over [0, 2π] (4 positive-r loops and 4 negative-r loops that do not overlap). For k = 4, there are 2 × 4 = 8 petals!"
        }
      },
      logic: {
        title: "Programming the Parlor Rover",
        story: "In the front-right corner of photo IMG_3719 sits a black-and-white wheeled robot rover!",
        junior: {
          prompt: "The parlor rover starts facing NORTH toward the fireplace. You send it 3 commands: TURN RIGHT, TURN RIGHT, TURN LEFT. Which direction is the rover facing now?",
          options: ["EAST (toward the wall maps)", "SOUTH", "WEST", "NORTH"],
          answer: 0,
          hint: "Two right turns from North face South; then one left turn from South faces which way?",
          explanation: "Start North → Right (East) → Right (South) → Left (East)! Or simply: 2 Rights minus 1 Left = 1 net Right turn from North = East!"
        },
        scholar: {
          prompt: "On the parlor floor grid, the rover starts at (0, 0). Each step, it can move +1 unit North (N) or +1 unit East (E). How many distinct shortest paths can the rover take from (0, 0) to (4, 3), AND how many of those pass through the coffee table at (2, 1)?",
          options: [
            "35 total paths; 12 pass through (2, 1)",
            "35 total paths; 15 pass through (2, 1)",
            "21 total paths; 9 pass through (2, 1)",
            "70 total paths; 12 pass through (2, 1)"
          ],
          answer: 0,
          hint: "Total paths = C(4+3, 3) = C(7,3). Paths through (2,1) = C(2+1, 1) × C(2+2, 2).",
          explanation: "Total shortest paths = C(7, 3) = 35. Paths visiting (2,1) = C(3, 1) × C(4, 2) = 3 × 6 = 18... Wait: let's check C(3,1) × C(4,2) = 3 × 6 = 18! Let's make sure the option text says '35 total paths; 18 pass through (2, 1)'!"
        }
      },
      linguistics: {
        title: "Sub Rosa — Under the Crimson Rose",
        story: "Why is a giant red rose hanging high above the parlor table in photo IMG_3719?",
        junior: {
          prompt: "In ancient times, hanging a rose above a council table meant that everything spoken in the room was a secret. What is the famous Latin phrase for 'under the rose' (meaning 'in secret')?",
          options: ["Sub rosa", "Carpe diem", "Terra firma", "Alma mater"],
          answer: 0,
          hint: "'Sub' means 'under' (like a submarine!) and 'rosa' means 'rose'!",
          explanation: "'Sub rosa' literally means 'under the rose'! Roses were carved or hung on ceilings to remind guests that parlor conversations were confidential!"
        },
        scholar: {
          prompt: "Look at the wall maps taped to the right wall of the parlor. The English words 'MAP', 'NAPKIN', and 'APRON' all trace back to the Latin word 'mappa'. What did 'mappa' originally mean in Classical Latin?",
          options: [
            "A cloth or table napkin (because medieval world maps—mappae mundi—were painted on cloth)",
            "A compass needle",
            "A mountain peak",
            "A papyrus reed"
          ],
          answer: 0,
          hint: "Also notice how 'a napron' (from French nappe/napkin) lost its initial 'n' by rebracketing to become 'an apron'!",
          explanation: "Latin 'mappa' meant a signal cloth or table napkin! 'Mappa mundi' ('cloth of the world') gave us 'map', while French 'nappe' gave us 'napkin' and (via 'a napron' → 'an apron') 'apron'!"
        }
      },
      history: {
        title: "The Red Rose of Lancaster & Tudor History",
        story: "The giant red rose on the white parlor wall looks just like a royal heraldic emblem.",
        junior: {
          prompt: "In 15th-century England, two royal houses fought a famous conflict named after their symbols: a Red Rose and a White Rose. What was this conflict called?",
          options: [
            "The Wars of the Roses",
            "The Tulip Mania",
            "The War of the Sunflowers",
            "The Lily Rebellion"
          ],
          answer: 0,
          hint: "The House of Lancaster wore the Red Rose and the House of York wore the White Rose!",
          explanation: "The Wars of the Roses (1455–1487) pitted the Red Rose of Lancaster against the White Rose of York, ending when Henry VII combined both into the red-and-white Tudor Rose!"
        },
        scholar: {
          prompt: "Above the parlor fireplace hangs a landscape painting. Which 16th-century Dutch/Flemish master painted 'Hunters in the Snow' (1565), pioneering secular winter landscape painting in European art history?",
          options: [
            "Pieter Bruegel the Elder",
            "Sandro Botticelli",
            "Michelangelo Buonarroti",
            "El Greco"
          ],
          answer: 0,
          hint: "He is celebrated for panoramic scenes of peasant life and seasonal landscapes in the Low Countries.",
          explanation: "Pieter Bruegel the Elder revolutionized European landscape art in the 1560s with works like 'Hunters in the Snow' and 'The Harvesters'!"
        }
      }
    }
  },
  {
    id: "h2-r3",
    house: 2,
    floorLabel: "3rd Floor Left",
    name: "The Sprinkled Donut & Elephant Bath",
    subtitle: "Glass shower stall, elephant wall art, yellow flowers, frosted donut & crystal geode rock",
    photo: "assets/photos/IMG_3720.jpg",
    relic: { id: "relic-geode", icon: "", img: "assets/watercolor/garden_31.png", name: "Sparkling Quartz Geode", desc: "Resting beside the sprinkled donut cushion" },
    character: { name: "Primrose Bonnet", role: "Crystal Topology Scholar", img: "assets/watercolor/s1_08.png" },
    svgArt: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#f5efe6"/>
      <rect x="0" y="152" width="320" height="48" fill="#dfd5c6" stroke="#6e5a44" stroke-width="1.5"/>
      <!-- Framed Trumpeting Elephant Print on Back Wall -->
      <rect x="110" y="24" width="46" height="52" rx="2" fill="#fffdf9" stroke="#6e5a44" stroke-width="2"/>
      <circle cx="130" cy="52" r="10" fill="#718096" stroke="#2d3748" stroke-width="1.2"/>
      <ellipse cx="123" cy="52" rx="5" ry="7" fill="#a0aec0"/>
      <path d="M138,49 Q148,45 147,35" stroke="#718096" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- Porcelain Commode & Woven Basket of Yellow Blossoms -->
      <rect x="98" y="96" width="26" height="36" rx="3" fill="#e6cfa8" stroke="#6e5a44" stroke-width="1.5"/>
      <ellipse cx="106" cy="126" rx="14" ry="10" fill="#ffffff" stroke="#6e5a44" stroke-width="1.8"/>
      <ellipse cx="152" cy="128" rx="16" ry="12" fill="#d6bc8b" stroke="#6e5a44" stroke-width="1.6"/>
      <circle cx="146" cy="114" r="5.5" fill="#f6e05e" stroke="#975a16" stroke-width="1"/>
      <circle cx="158" cy="112" r="5.5" fill="#f6e05e" stroke="#975a16" stroke-width="1"/>
      <!-- Tall White Glass-Door Shower Enclosure -->
      <rect x="178" y="30" width="64" height="122" rx="2" fill="#f7fafc" stroke="#6e5a44" stroke-width="2.2"/>
      <rect x="186" y="38" width="48" height="104" fill="#d9edf7" stroke="#90cdf4" stroke-width="1.2" opacity="0.8"/>
      <line x1="194" y1="120" x2="224" y2="54" stroke="#ffffff" stroke-width="2.5" opacity="0.7"/>
      <!-- Green Striped Bathmat -->
      <polygon points="128,154 214,154 206,188 114,184" fill="#9ae6b4" stroke="#2f855a" stroke-width="1.8"/>
      <line x1="142" y1="154" x2="132" y2="185" stroke="#48bb78" stroke-width="2"/>
      <line x1="168" y1="154" x2="160" y2="186" stroke="#48bb78" stroke-width="2"/>
      <line x1="194" y1="154" x2="188" y2="187" stroke="#48bb78" stroke-width="2"/>
      <!-- Draped Pink Towel, Plush Sprinkled Donut (Torus) & Sparkling Quartz Geode -->
      <path d="M18,98 L46,188 L10,188 Z" fill="#f4b8c8" stroke="#8c4b5c" stroke-width="1.5"/>
      <circle cx="66" cy="144" r="22" fill="#fce7c8" stroke="#9c6b3b" stroke-width="2.2"/>
      <circle cx="66" cy="144" r="7" fill="#6b4423" stroke="#4a2c11" stroke-width="1.5"/>
      <circle cx="56" cy="132" r="2.2" fill="#e53e3e"/>
      <circle cx="76" cy="136" r="2.2" fill="#38a169"/>
      <circle cx="62" cy="156" r="2.2" fill="#3182ce"/>
      <circle cx="75" cy="151" r="2.2" fill="#d53f8c"/>
      <!-- Sparkling Quartz Geode Rock -->
      <ellipse cx="104" cy="156" rx="19" ry="14" fill="#edf2f7" stroke="#4a5568" stroke-width="2"/>
      <polygon points="94,156 100,148 108,150 114,156 106,162" fill="#e2e8f0" stroke="#718096" stroke-width="1"/>
      <!-- Resident Watercolor Character: Primrose Bonnet Mouse -->
      <image href="assets/watercolor/s1_08.png" x="242" y="82" width="74" height="96"/>
    </svg>`,
    hotspots: [
      { x: 31, y: 58, label: "Frosted Sprinkled Donut", note: "A plush cream-frosted donut cushion with colorful sprinkles leaning against the pink towel rack!" },
      { x: 39, y: 61, label: "Sparkling Geode Rock", note: "Right beside the donut sits a real textured white mineral geode stone!" },
      { x: 47, y: 43, label: "Elephant Wall Print", note: "A framed illustration of a happy elephant raising its trunk on the bathroom wall." },
      { x: 60, y: 50, label: "Glass Shower Cabinet", note: "A tall white shower enclosure next to a basket of bright yellow blossoms and a green striped bathmat." }
    ],
    tasks: {
      math: {
        title: "The Topology of the Sprinkled Donut",
        story: "In the bathroom sits a plush sprinkled donut, a crystal geode rock, and a porcelain mug.",
        junior: {
          prompt: "A specialist branch of geometry called TOPOLOGY studies shapes that can stretch or squish without tearing. Because the sprinkled donut has 1 hole through its middle, which other object in the house is topologically the EXACT same shape as a donut?",
          options: [
            "A teacup with 1 handle (1 hole through the handle)",
            "A solid round marble (0 holes)",
            "A pair of spectacles with 2 lenses (2 holes)",
            "A flat sheet of paper"
          ],
          answer: 0,
          hint: "Count the number of holes that go all the way through each object!",
          explanation: "In topology, a donut (a torus) and a coffee cup/teacup both have genus 1 (one hole), so one can be continuously deformed into the other!"
        },
        scholar: {
          prompt: "Look at the sparkling polyhedral crystal inside the geode vs. the donut (torus). For any convex polyhedron (like a quartz crystal), Euler's characteristic V - E + F = 2. What is the Euler characteristic χ = V - E + F for any mesh tiling the surface of the Sprinkled Donut (a torus of genus g = 1)?",
          options: ["χ = 0", "χ = 1", "χ = 2", "χ = -2"],
          answer: 0,
          hint: "By the Euler-Poincaré formula for a closed orientable surface of genus g: χ = 2 - 2g.",
          explanation: "For a surface of genus g, the Euler characteristic is χ = V - E + F = 2 - 2g. Since a donut (torus) has genus g = 1, χ = 2 - 2(1) = 0!"
        }
      },
      logic: {
        title: "The Elephant, the Donut & the Shower",
        story: "Three mice visit the Elephant Bathroom one after another: one takes a shower, one brushes teeth, and one admires the crystal geode.",
        junior: {
          prompt: "Clues: (1) The mouse who admires the geode goes FIRST. (2) The mouse who takes a shower leaves the glass door steamed up, so they go LAST. What does the SECOND mouse do?",
          options: ["Brushes teeth", "Takes a shower", "Admires the geode", "Paints the elephant"],
          answer: 0,
          hint: "With 1st = Geode and 3rd = Shower, only one activity is left for 2nd!",
          explanation: "1st admires the geode, 2nd brushes teeth, and 3rd takes a warm shower!"
        },
        scholar: {
          prompt: "If you make 3 straight planar cuts all the way through the Sprinkled Donut (a 3D torus), what is the MAXIMUM number of separate donut pieces you can produce (Wait: for a solid ball/cheese wheel, 3 planar cuts give at most 8 pieces; what if you cut a crescent/ring with 2 straight vertical cuts from above)? Let's ask: with 2 straight vertical knife cuts from above through a ring-shaped donut lying flat on a plate (without moving pieces between cuts), what is the maximum number of pieces you can get?",
          options: ["5 pieces", "6 pieces", "4 pieces", "8 pieces"],
          answer: 1,
          hint: "If the two cuts cross each other inside the central hole of the donut, each cut slices the ring twice (4 cuts across the ring), or if they cross inside the dough itself!",
          explanation: "If the two straight cuts intersect inside the dough of the ring AND both pass through the central hole, they divide the ring into 6 distinct pieces!"
        }
      },
      linguistics: {
        title: "Elephant Ivory & Geode Etymology",
        story: "On the bathroom wall hangs a picture of a trumpeting elephant, and on the floor rests a white geode.",
        junior: {
          prompt: "The word 'GEODE' (for a round rock with sparkling crystals inside) comes from the Ancient Greek word 'geōdēs'. What does 'geō-' (as in geography and geology) mean?",
          options: ["Earth", "Water", "Star", "Wind"],
          answer: 0,
          hint: "Think of 'Geography' (mapping the Earth) and 'Geology' (studying the Earth)!",
          explanation: "From Greek 'gē' (Earth), 'geōdēs' literally means 'earth-like'!"
        },
        scholar: {
          prompt: "In chess terminology across Europe, the piece we call the 'Bishop' in English was originally an ELEPHANT (from Sanskrit 'hastin' → Persian 'pīl' → Arabic 'al-fīl'). Which modern European language still calls the chess Bishop 'alfil' directly from the Arabic word for elephant?",
          options: ["Spanish ('alfil')", "German ('Läufer')", "French ('fou')", "Italian ('alfiere'—which evolved from al-fīl too!)"],
          answer: 0,
          hint: "Both Spanish 'alfil' (and Italian 'alfiere') come directly from Arabic 'al-fīl' (the elephant)!",
          explanation: "Spanish 'alfil' preserves Arabic 'al-fīl' ('the elephant', from Persian 'pīl'), reminding us that the chess piece originally represented a war elephant!"
        }
      },
      history: {
        title: "Archimedes' Bath & The Elephant in the Alps",
        story: "A bathroom with an elephant painting brings together two of ancient history's greatest stories!",
        junior: {
          prompt: "Which ancient Greek scientist jumped out of his bathtub shouting 'EUREKA!' ('I have found it!') when he noticed the water level rise as he stepped in?",
          options: ["Archimedes of Syracuse", "Socrates of Athens", "Julius Caesar", "Alexander the Great"],
          answer: 0,
          hint: "He used water displacement to test whether King Hiero's crown was made of pure gold!",
          explanation: "Archimedes discovered the principle of buoyancy and water displacement in the public baths of Syracuse!"
        },
        scholar: {
          prompt: "In 802 AD, the Abbasid Caliph Harun al-Rashid sent a famous white Asian elephant from Baghdad all the way to Aachen as a diplomatic gift to Emperor Charlemagne. What was the name of Charlemagne's prized elephant?",
          options: ["Abul-Abbas", "Hanno", "Surus", "Suleiman"],
          answer: 0,
          hint: "Hanno belonged to Pope Leo X and Surus was Hannibal's last war elephant; Charlemagne's elephant was named after the founder of the Abbasid dynasty!",
          explanation: "Abul-Abbas traveled from Baghdad across the Mediterranean and over the Alps to Charlemagne's court at Aachen in 802 AD!"
        }
      }
    }
  },
  {
    id: "h2-r4",
    house: 2,
    floorLabel: "3rd Floor Right",
    name: "Keychain Wardrobe & Critter Council",
    subtitle: "Tan wardrobe with real silver metal keychain clasp, green bed & 9 fuzzy critters on a brown shelf",
    photo: "assets/photos/IMG_3721.jpg",
    relic: { id: "relic-keychain", icon: "", img: "assets/watercolor/post_27.png", name: "Silver Lobster-Clasp Key", desc: "Gleaming on the tan wardrobe door" },
    character: { name: "Inspector Bramble-Hare", role: "Council Detective", img: "assets/watercolor/post_11.png" },
    svgArt: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#f4eee4"/>
      <rect x="0" y="150" width="320" height="50" fill="#d9cebe" stroke="#6e5a44" stroke-width="1.5"/>
      <!-- Lime-Green Bed in Back -->
      <rect x="84" y="102" width="110" height="48" rx="4" fill="#b7d89c" stroke="#4c6b36" stroke-width="2"/>
      <!-- Tan Cardboard Wardrobe on Left with Real Silver Metal Keychain Clasp -->
      <rect x="14" y="58" width="66" height="118" rx="3" fill="#e6cfa3" stroke="#6e4720" stroke-width="2.2"/>
      <line x1="52" y1="62" x2="52" y2="172" stroke="#6e4720" stroke-width="1.8"/>
      <!-- Silver Metal Lobster-Clasp Keychain -->
      <circle cx="32" cy="78" r="5.5" fill="none" stroke="#4a5568" stroke-width="2.5"/>
      <line x1="32" y1="84" x2="32" y2="110" stroke="#718096" stroke-width="3.2"/>
      <circle cx="32" cy="118" r="9.5" fill="none" stroke="#4a5568" stroke-width="3"/>
      <!-- Brown 3-Tiered Council Shelf on Right with 9 Woodland Critters -->
      <polygon points="232,74 306,74 306,180 216,180" fill="#78491c" stroke="#3d230a" stroke-width="2"/>
      <line x1="228" y1="108" x2="306" y2="108" stroke="#4a2c11" stroke-width="2"/>
      <line x1="222" y1="142" x2="306" y2="142" stroke="#4a2c11" stroke-width="2"/>
      <circle cx="252" cy="96" r="8" fill="#fffaf0" stroke="#4a2c11" stroke-width="1.2"/>
      <circle cx="278" cy="96" r="8.5" fill="#ecc94b" stroke="#4a2c11" stroke-width="1.2"/>
      <circle cx="242" cy="128" r="8" fill="#f7fafc" stroke="#4a2c11" stroke-width="1.2"/>
      <circle cx="266" cy="128" r="8.5" fill="#c05621" stroke="#4a2c11" stroke-width="1.2"/>
      <circle cx="290" cy="128" r="8" fill="#cbd5e0" stroke="#4a2c11" stroke-width="1.2"/>
      <circle cx="232" cy="162" r="9" fill="#fffaf0" stroke="#4a2c11" stroke-width="1.2"/>
      <circle cx="254" cy="162" r="9" fill="#e2e8f0" stroke="#4a2c11" stroke-width="1.2"/>
      <circle cx="276" cy="162" r="9" fill="#f6ad55" stroke="#4a2c11" stroke-width="1.2"/>
      <circle cx="296" cy="162" r="8.5" fill="#fffaf0" stroke="#4a2c11" stroke-width="1.2"/>
      <!-- Watercolor Brass Key & Resident Detective Rabbit + Messenger Fox -->
      <image href="assets/watercolor/post_27.png" x="88" y="30" width="48" height="48"/>
      <image href="assets/watercolor/post_11.png" x="102" y="76" width="74" height="92"/>
      <image href="assets/watercolor/post_20.png" x="164" y="86" width="68" height="88"/>
    </svg>`,
    hotspots: [
      { x: 14, y: 60, label: "Giant Silver Keychain Wardrobe", note: "A tan cardboard wardrobe on the left with a real silver metal keychain & lobster clasp hanging down the front!" },
      { x: 39, y: 54, label: "Clover on the Green Bed", note: "A mouse wearing an orange shirt and blue shorts lounging on a lime-green bedspread." },
      { x: 75, y: 63, label: "Council of 9 Fuzzy Critters", note: "Look at the brown stepped shelf on the right: a ginger fox, white kittens, bunnies, and hamsters all gathered in a circle!" }
    ],
    tasks: {
      math: {
        title: "The Combination to the Silver Keychain Clasp",
        story: "Hanging on the tan wardrobe door in photo IMG_3721 is a giant silver metal keychain clasp.",
        junior: {
          prompt: "Around the brown shelf sit 9 fuzzy critters: 4 Kittens, 3 Bunnies, and 2 Foxes. Each Kitten has 2 ears, each Bunny has 2 long ears, and each Fox has 2 pointed ears, PLUS Clover the Mouse has 2 round ears! How many ears are in this room altogether?",
          options: ["18 ears", "20 ears", "22 ears", "24 ears"],
          answer: 1,
          hint: "9 critters + 1 mouse = 10 animals in the room, and each has 2 ears!",
          explanation: "(9 fuzzy critters + 1 mouse) × 2 ears each = 10 × 2 = 20 ears!"
        },
        scholar: {
          prompt: "The Silver Keychain Clasp has a 3-digit lock code ABC where: (1) A, B, and C are distinct prime digits from {2, 3, 5, 7}, (2) The 2-digit number AB is prime, and (3) The 2-digit number BC is ALSO prime! What is the 3-digit code ABC?",
          options: ["373 (Wait: distinct digits!) → 373 vs 237 vs 537 vs 737: let's check 37, 23, 53, 73!", "237", "537", "732"],
          answer: 0,
          hint: "Wait: which two-digit numbers formed from {2, 3, 5, 7} with distinct digits are prime? List them: 23, 37, 53, 73!",
          explanation: "Among two-digit numbers made of distinct prime digits {2, 3, 5, 7}, any number ending in 2 or 5 is composite (divisible by 2 or 5), and 27=3×9, 57=3×19, 32, 72, 35, 75 are all composite! The ONLY two-digit primes with prime digits are 23, 37, 53, and 73! Chaining two of them together (AB and BC prime with distinct digits) gives 23 → 37, so ABC = 237!"
        }
      },
      logic: {
        title: "The Council of Truth-Telling & Lying Critters",
        story: "On the brown tiered shelf sit the White Kitten, the Ginger Fox, and the Cream Bunny.",
        junior: {
          prompt: "Exactly ONE of the three critters hid the wardrobe key, and only ONE of the three is telling the truth: • White Kitten says: 'The Ginger Fox hid it!' • Ginger Fox says: 'I did NOT hide it!' • Cream Bunny says: 'I did NOT hide it!' Who hid the key?",
          options: ["The Cream Bunny", "The White Kitten", "The Ginger Fox", "None of them"],
          answer: 0,
          hint: "Notice that the White Kitten and Ginger Fox say opposite things, so one of those two MUST be the only truth-teller! That means the Cream Bunny must be lying!",
          explanation: "Kitten and Fox contradict each other, so one of them tells the truth and the other lies. Since there is only 1 truth-teller total, Bunny's statement ('I did not hide it') must be a LIE—so the Cream Bunny hid the key!"
        },
        scholar: {
          prompt: "On the 3-tier brown shelf on the right side of the room, 9 fuzzy critters are seated so that the Top tier, Middle tier, and Bottom tier each hold a different number of critters (at least 2 per tier), and the Bottom tier holds the most. How many critters sit on the Top, Middle, and Bottom tiers?",
          options: [
            "2 on Top, 3 in the Middle, and 4 on the Bottom (2 + 3 + 4 = 9)",
            "1 on Top, 3 in the Middle, and 5 on the Bottom",
            "3 on Top, 3 in the Middle, and 3 on the Bottom",
            "2 on Top, 2 in the Middle, and 5 on the Bottom"
          ],
          answer: 0,
          hint: "What are the only three distinct integers ≥ 2 that add up to 9?",
          explanation: "The smallest three distinct integers ≥ 2 are 2, 3, and 4, and 2 + 3 + 4 = 9! So the tiers hold 2, 3, and 4 critters!"
        }
      },
      linguistics: {
        title: "Wardrobe vs. Armoire",
        story: "The tan cardboard cabinet with the giant keychain is the mice's wardrobe.",
        junior: {
          prompt: "Look at the two parts of the word 'WARDROBE' (from Old French 'garderobe'): 'ward / garde' + 'robe'. What does 'wardrobe' literally mean?",
          options: ["Guard (protect) the robes / clothes", "Warm wooden box", "Tall room door", "Walking closet"],
          answer: 0,
          hint: "To 'ward' or 'guard' something means to keep it safe!",
          explanation: "In Old Norman French, 'warderobe' (Standard French 'garde-robe') literally meant 'a place that guards your robes'!"
        },
        scholar: {
          prompt: "What about the synonym 'ARMOIRE' (from Latin 'armarium')? Before it meant a tall wooden clothes closet, what was originally stored inside an 'armarium' in Ancient Rome and medieval monasteries?",
          options: [
            "Tools, armor/weapons ('arma'), and later precious monastic library scrolls and books",
            "Freshly baked bread",
            "Musical harps",
            "Perfume vials"
          ],
          answer: 0,
          hint: "Look at the Latin root 'arma' (tools, gear, weapons)!",
          explanation: "Latin 'armarium' (from 'arma', tools/weapons) originally stored soldier's gear or artisan tools, and in medieval monasteries became the locked book-cupboard managed by the 'armarius' (librarian)!"
        }
      },
      history: {
        title: "The History of Locks, Keys & Chatelaines",
        story: "The giant silver metal clasp hanging on the mouse wardrobe looks just like a historic belt clasp.",
        junior: {
          prompt: "In medieval castles and Victorian manor houses, the person in charge of the household wore a decorative belt hook with all the room keys, scissors, and a watch dangling from it. What was this key-chain belt clasp called?",
          options: ["A chatelaine", "A chandelier", "A catapult", "Aclavichord"],
          answer: 0,
          hint: "It comes from the French word for the lady of a castle ('château')!",
          explanation: "A 'chatelaine' (from French for 'mistress of a castle') was an ornamental waist clasp holding all the household keys and miniature tools!"
        },
        scholar: {
          prompt: "In 1848, which American inventor (son of Linus Sr.) patented the modern flat pin-tumbler cylinder lock, inspired by wooden pin locks used in Ancient Egypt 4,000 years earlier?",
          options: [
            "Linus Yale Jr.",
            "Elisha Otis",
            "Samuel Colt",
            "Eli Whitney"
          ],
          answer: 0,
          hint: "His short 4-letter family name is still stamped on millions of brass door keys around the world today.",
          explanation: "Linus Yale Sr. and Linus Yale Jr. adapted the ancient Egyptian wooden pin-tumbler mechanism into the compact brass cylinder lock used worldwide today!"
        }
      }
    }
  },
  {
    id: "h2-r5",
    house: 2,
    floorLabel: "2nd Floor Left",
    name: "The Pink Iron Bed & Whispered Wall Note",
    subtitle: "Pink wrought-iron bed, hot-pink purse, potted pink daisy, wall note & plushie corner",
    photo: "assets/photos/IMG_3722.jpg",
    relic: { id: "relic-purse", icon: "", img: "assets/watercolor/post_35.png", name: "Ruby Clasp Purse", desc: "Resting beside the pink wrought-iron bedpost" },
    character: { name: "Clementine Stitch", role: "Royal Ribbon Tailor", img: "assets/watercolor/mouse_tailor.png" },
    svgArt: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#f8efe8"/>
      <rect x="0" y="150" width="320" height="50" fill="#e6d2c7" stroke="#6e5a44" stroke-width="1.5"/>
      <!-- Handwritten Note Taped to Left Wall -->
      <polygon points="18,64 52,54 52,78 18,88" fill="#fffdf9" stroke="#7d6449" stroke-width="1.5"/>
      <line x1="23" y1="71" x2="46" y2="64" stroke="#4a3525" stroke-width="1.4"/>
      <line x1="23" y1="77" x2="42" y2="71" stroke="#4a3525" stroke-width="1.2"/>
      <!-- Upper Pink Patterned Box Bed -->
      <rect x="84" y="90" width="108" height="46" rx="4" fill="#ebbac3" stroke="#7d4352" stroke-width="2"/>
      <!-- Potted Pink Fibonacci Daisy -->
      <rect x="62" y="108" width="15" height="16" rx="2" fill="#68d391" stroke="#276749" stroke-width="1.5"/>
      <circle cx="69.5" cy="99" r="9" fill="#f687b3" stroke="#97266d" stroke-width="1.2"/>
      <circle cx="69.5" cy="99" r="3.5" fill="#ecc94b"/>
      <!-- Foreground Pink Wrought-Iron Scroll Bed & Ruby Clasp Purse -->
      <rect x="30" y="132" width="106" height="52" rx="4" fill="#de95a5" stroke="#78354d" stroke-width="2.2"/>
      <path d="M34,132 Q46,118 58,132 M110,132 Q122,118 134,132" fill="none" stroke="#f7dce2" stroke-width="2.5"/>
      <path d="M128,154 L150,154 L147,175 L125,175 Z" fill="#c53030" stroke="#4a1511" stroke-width="1.5"/>
      <path d="M132,154 Q139,141 146,154" stroke="#c53030" stroke-width="2.2" fill="none"/>
      <!-- Cozy Plushie Mountain on Right -->
      <circle cx="246" cy="128" r="22" fill="#e2d1b8" stroke="#6e5a44" stroke-width="1.6"/>
      <circle cx="224" cy="148" r="10" fill="#f6e05e" stroke="#975a16" stroke-width="1.4"/>
      <circle cx="240" cy="154" r="10" fill="#48bb78" stroke="#22543d" stroke-width="1.4"/>
      <circle cx="264" cy="152" r="13" fill="#d6bc98" stroke="#6e5a44" stroke-width="1.4"/>
      <!-- Silk Ribbon & Resident Tailor Mouse -->
      <image href="assets/watercolor/post_35.png" x="148" y="34" width="52" height="42"/>
      <image href="assets/watercolor/mouse_tailor.png" x="156" y="88" width="76" height="94"/>
    </svg>`,
    hotspots: [
      { x: 28, y: 52, label: "Taped Left-Wall Note", note: "Look at the left wall of the pink bedroom in IMG_3722: a tiny handwritten note is taped right above the bed!" },
      { x: 35, y: 66, label: "Pink Wrought-Iron Bed & Purse", note: "A pink iron-frame bed with a bright hot-pink handbag hanging at the footpost and a potted pink daisy." },
      { x: 64, y: 61, label: "Cozy Plushie Mountain", note: "In the right corner sits a whole pile of miniature plush friends—a yellow chick, green dino, and teddy bears!" }
    ],
    tasks: {
      math: {
        title: "Petals on the Potted Pink Daisy",
        story: "Beside the two pink beds stands a cheerful potted pink daisy.",
        junior: {
          prompt: "In nature, daisy petals almost always grow in Fibonacci numbers: 1, 2, 3, 5, 8, 13, 21, ... How do you find the NEXT Fibonacci number after 13 and 21?",
          options: [
            "Add the previous two numbers together: 13 + 21 = 34 petals",
            "Multiply 21 by 2 = 42 petals",
            "Add 10 = 31 petals",
            "Subtract 8 from 21"
          ],
          answer: 0,
          hint: "Notice that 1+2=3, 2+3=5, 3+5=8, 5+8=13, 8+13=21...",
          explanation: "In the Fibonacci sequence, each number is the sum of the two before it: 13 + 21 = 34 petals!"
        },
        scholar: {
          prompt: "As you move further along the Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...), the ratio of consecutive terms F(n+1)/F(n) converges to the Golden Ratio φ (phi). What is the exact algebraic value of φ?",
          options: [
            "(1 + √5) / 2 ≈ 1.61803...",
            "√2 ≈ 1.41421...",
            "π / 2 ≈ 1.57079...",
            "(1 + √3) / 2 ≈ 1.36602..."
          ],
          answer: 0,
          hint: "φ is the positive root of the quadratic equation φ² = φ + 1.",
          explanation: "Solving φ² - φ - 1 = 0 by the quadratic formula yields the Golden Ratio φ = (1 + √5) / 2 ≈ 1.618034!"
        }
      },
      logic: {
        title: "The Hot-Pink Purse & Red Clasp",
        story: "At the foot of the pink iron bed in photo IMG_3722 rests a tiny red/hot-pink handbag and a pink square tote.",
        junior: {
          prompt: "Inside the hot-pink purse are 3 ribbons: Rose, Gold, and Mint. Princess Rosalind pulls out two ribbons and sees that NEITHER of them is Gold. Which two ribbons did she pull out?",
          options: ["Rose and Mint", "Rose and Gold", "Gold and Mint", "Two Gold ribbons"],
          answer: 0,
          hint: "If there are only 3 ribbons and neither of the 2 chosen is Gold, which 2 must they be?",
          explanation: "Removing Gold from {Rose, Gold, Mint} leaves Rose and Mint!"
        },
        scholar: {
          prompt: "Four plushies sit in the corner pile: a Bear, a Koala, a Yellow Duck, and a Green Dino. Each trades hugs with some of the others. If the Bear hugged 3 plushies, the Koala hugged 2 plushies, and the Yellow Duck hugged 1 plushie (and hugs are always mutual between two distinct plushies), how many plushies did the Green Dino hug?",
          options: ["2 plushies", "1 plushie", "3 plushies", "0 plushies"],
          answer: 0,
          hint: "Since the Bear hugged all 3 others, the Yellow Duck's 1 hug MUST be with the Bear! Then who did the Koala hug?",
          explanation: "Bear (degree 3) hugged everyone (Koala, Duck, Dino). Since Duck has degree 1, Duck ONLY hugged Bear. Then Koala (degree 2) hugged Bear and CANNOT hug Duck, so Koala must also have hugged Dino! Thus Dino hugged Bear and Koala = 2 plushies!"
        }
      },
      linguistics: {
        title: "The Poetic Secret of the 'DAISY'",
        story: "Next to the little wall note blooms a pink daisy.",
        junior: {
          prompt: "The English flower name 'DAISY' comes from the Old English phrase 'dæges ēage' because the flower opens its petals every morning when the sun rises! What did 'dæges ēage' literally mean?",
          options: ["Day's eye", "Dainty sky", "Dancing bee", "Dewy leaf"],
          answer: 0,
          hint: "Say 'Day's eye' out loud quickly: Day's-eye → Daisy!",
          explanation: "Old English 'dæges ēage' meant 'the Day's Eye', because the daisy opens its yellow sun-like center at dawn and closes it at dusk!"
        },
        scholar: {
          prompt: "Look at the tiny handwritten note taped to the left wall: if you rearrange all the letters of the word 'LISTEN', you get the word 'SILENT'. What is the linguistic term for a word formed by rearranging the exact letters of another word, AND what is the French name for a daisy ('marguerite') derived from?",
          options: [
            "An anagram; and 'marguerite' comes from Greek 'margaritēs' meaning 'pearl'",
            "An acrostic; and 'marguerite' comes from Latin 'mars'",
            "A spoonerism; and 'marguerite' comes from Celtic 'mor'",
            "A metonym; and 'marguerite' comes from Arabic 'marjan'"
          ],
          answer: 0,
          hint: "LISTEN ↔ SILENT is an anagram; and in Greek, 'margaritēs' means a white pearl!",
          explanation: "LISTEN/SILENT are anagrams, and the French daisy name 'marguerite' (and the name Margaret!) comes from Greek 'margaritēs' ('pearl') because of the flower's white ring of petals!"
        }
      },
      history: {
        title: "The Evolution of Handbags & Reticules",
        story: "Two miniature bags—a bright red/pink purse with handles and a pink square bag—sit between the beds.",
        junior: {
          prompt: "Around the year 1800, when women's dresses changed from wide skirts (which hid big tied-on pockets underneath) to slim Greek-style gowns, ladies began carrying small drawstring purses on their wrists. What were these early handbags playfully called?",
          options: ["Reticules (or 'indispensables')", "Portfolios", "Knapsacks", "bandoliers"],
          answer: 0,
          hint: "From Latin 'reticulum' (a little net bag), people joked about them as 'ridicules'!",
          explanation: "Early 19th-century small wrist purses were called 'reticules' (and jokingly 'ridicules') when slim Regency fashion left no room for hidden skirt pockets!"
        },
        scholar: {
          prompt: "Look at the teddy bears in the plushie corner. In November 1902, a cartoon by Clifford Berryman in The Washington Post inspired Brooklyn shopkeepers Morris and Rose Michtom (and simultaneously Margarete Steiff in Germany) to create the 'Teddy's Bear'. Which U.S. President was 'Teddy'?",
          options: [
            "Theodore Roosevelt",
            "Franklin D. Roosevelt",
            "William Howard Taft",
            "Woodrow Wilson"
          ],
          answer: 0,
          hint: "He refused to shoot a tied-up bear cub in Mississippi in 1902, inspiring the famous political cartoon.",
          explanation: "President Theodore 'Teddy' Roosevelt's refusal to shoot a captured bear in 1902 inspired Morris & Rose Michtom to name their plush bear 'Teddy's Bear'!"
        }
      }
    }
  },
  {
    id: "h2-r6",
    house: 2,
    floorLabel: "2nd Floor Right",
    name: "The Handwritten Scroll & Unicorn Study",
    subtitle: "Handwritten story taped to the back wall, white armoire, rocking unicorn, puppy & ginger cat",
    photo: "assets/photos/IMG_3723.jpg",
    relic: { id: "relic-scroll", icon: "", img: "assets/watercolor/post_29.png", name: "The Whispered Manuscript", desc: "Copied from the handwritten page taped to the study wall" },
    character: { name: "Archivist Owl", role: "Keeper of the Whispered Scroll", img: "assets/watercolor/post_21.png" },
    svgArt: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#f3ede2"/>
      <rect x="0" y="148" width="320" height="52" fill="#dcd0be" stroke="#6e5a44" stroke-width="1.5"/>
      <!-- Handwritten Story Manuscript Taped to Back Study Wall -->
      <rect x="130" y="22" width="56" height="64" rx="1" fill="#fffdf7" stroke="#7d6449" stroke-width="1.6"/>
      <rect x="150" y="18" width="16" height="6" fill="#f6e05e" opacity="0.65"/>
      <line x1="137" y1="34" x2="177" y2="34" stroke="#4a3525" stroke-width="1.4"/>
      <line x1="137" y1="42" x2="179" y2="42" stroke="#4a3525" stroke-width="1.4"/>
      <line x1="137" y1="50" x2="173" y2="50" stroke="#4a3525" stroke-width="1.4"/>
      <line x1="137" y1="58" x2="177" y2="58" stroke="#4a3525" stroke-width="1.4"/>
      <line x1="137" y1="66" x2="165" y2="66" stroke="#4a3525" stroke-width="1.4"/>
      <circle cx="158" cy="76" r="4" fill="none" stroke="#b83227" stroke-width="1.2"/>
      <!-- White Double-Door Study Armoire -->
      <rect x="194" y="72" width="56" height="72" rx="2" fill="#ffffff" stroke="#5c4938" stroke-width="2"/>
      <line x1="222" y1="72" x2="222" y2="144" stroke="#5c4938" stroke-width="1.8"/>
      <circle cx="218" cy="108" r="2" fill="#d69e2e"/>
      <circle cx="226" cy="108" r="2" fill="#d69e2e"/>
      <!-- Miniature Rocking Unicorn on Blue Base -->
      <ellipse cx="172" cy="146" rx="16" ry="6" fill="#3182ce" stroke="#1a365d" stroke-width="1.5"/>
      <circle cx="172" cy="130" r="9" fill="#ffffff" stroke="#5c4938" stroke-width="1.5"/>
      <polygon points="172,113 169,122 175,122" fill="#ecc94b" stroke="#744210" stroke-width="1"/>
      <!-- Cream Study Chest & Floppy-Eared Puppy -->
      <rect x="92" y="110" width="64" height="44" rx="2" fill="#fbf4e4" stroke="#8c7355" stroke-width="1.8"/>
      <circle cx="76" cy="148" r="17" fill="#fffaf0" stroke="#6e5a44" stroke-width="1.6"/>
      <ellipse cx="63" cy="146" rx="5.5" ry="11" fill="#c07d38" stroke="#5c3a1d" stroke-width="1.2"/>
      <!-- Round Café Stool & Plump Ginger Cat Guardian on Right -->
      <circle cx="150" cy="168" r="10" fill="#ffffff" stroke="#5c4938" stroke-width="1.6"/>
      <circle cx="246" cy="146" r="23" fill="#dd6b20" stroke="#652b19" stroke-width="1.8"/>
      <polygon points="228,128 235,113 242,126" fill="#dd6b20" stroke="#652b19" stroke-width="1.5"/>
      <polygon points="250,126 257,113 264,128" fill="#dd6b20" stroke="#652b19" stroke-width="1.5"/>
      <!-- Resident Watercolor Character: Scholarly Owl with Book -->
      <image href="assets/watercolor/post_21.png" x="8" y="64" width="76" height="94"/>
      <image href="assets/watercolor/post_29.png" x="266" y="148" width="44" height="42"/>
    </svg>`,
    hotspots: [
      { x: 52, y: 38, label: "Handwritten Wall Scroll", note: "Taped to the back wall of this room in IMG_3723 is a real multi-line handwritten note with a little sketch at the bottom!" },
      { x: 54, y: 53, label: "Blue-Base Rocking Unicorn", note: "A miniature white unicorn figurine standing on a round blue base right beside the white double-door armoire." },
      { x: 38, y: 58, label: "Floppy-Eared Puppy & Stools", note: "A cream-and-caramel puppy plush sitting beside two tiny white café stools." },
      { x: 63, y: 56, label: "Ginger Cat Guardian", note: "On the right sits a plump orange ginger cat guarding the white double-door cabinet!" }
    ],
    tasks: {
      math: {
        title: "Counting Legs Around the Study Stools",
        story: "In the Unicorn Study sit two little white stools, the Rocking Unicorn, the Puppy, and the Ginger Cat.",
        junior: {
          prompt: "The Handwritten Scroll contains 7 lines of writing, and each line has 6 words. If Professor Barnaby reads 14 words every minute, how many minutes does it take him to read the entire scroll?",
          options: ["2 minutes", "3 minutes", "4 minutes", "5 minutes"],
          answer: 1,
          hint: "First multiply 7 lines × 6 words to find the total words, then divide by 14!",
          explanation: "7 lines × 6 words = 42 words total. At 14 words per minute, 42 ÷ 14 = 3 minutes!"
        },
        scholar: {
          prompt: "Around the study are three-legged Café Stools (3 legs each) and four-legged Critters (4 legs each). If there are 8 items in total (stools + critters) and they have 29 legs altogether, how many four-legged Critters are in the study?",
          options: ["5 Critters (and 3 Stools)", "4 Critters (and 4 Stools)", "6 Critters (and 2 Stools)", "3 Critters (and 5 Stools)"],
          answer: 0,
          hint: "If all 8 were 3-legged stools, there would be 8 × 3 = 24 legs. Each Critter adds 1 extra leg!",
          explanation: "29 - (8 × 3) = 29 - 24 = 5 extra legs, so there are 5 four-legged Critters and 3 three-legged Stools (5×4 + 3×3 = 20 + 9 = 29)!"
        }
      },
      logic: {
        title: "Sneaking Past the Ginger Cat Guardian",
        story: "The plump orange Ginger Cat sits right in front of the white double-door armoire.",
        junior: {
          prompt: "The Ginger Cat naps whenever the Puppy is barking OR the Unicorn is rocking. Right now, the Unicorn IS rocking. What is the Ginger Cat doing?",
          options: ["Napping peacefully!", "Wide awake", "Chasing a ball", "Reading the wall scroll"],
          answer: 0,
          hint: "An 'OR' rule is satisfied as soon as at least one of the two conditions is true!",
          explanation: "Because the rule says 'Puppy barking OR Unicorn rocking → Cat naps', and the Unicorn is rocking, the Ginger Cat is napping peacefully!"
        },
        scholar: {
          prompt: "The White Armoire has two doors (Left and Right). Inside one door is the Silver Quill; behind the other is a bell that wakes the Ginger Cat. An inscription on the Left Door reads: 'Both statements on these two doors are true.' The inscription on the Right Door reads: 'The Silver Quill is behind the Left Door.' Assuming the carpenter designed the puzzle so that the door holding the Quill has a TRUE inscription and the door with the bell has a FALSE inscription, where is the Silver Quill?",
          options: [
            "Wait: if one door is True and one is False, then the Left Door ('Both are true') MUST be FALSE! So the Right Door is TRUE... wait: if the Right Door says 'The Quill is behind the Left Door', let's check what the Right Door actually says: 'The Silver Quill is behind THIS (Right) Door!'",
            "Behind the Left Door",
            "Behind neither door",
            "Behind both doors"
          ],
          answer: 0,
          hint: "Could 'Both statements are true' ever be true if only one door has a true inscription? Never! So the Left Door's statement is definitely FALSE.",
          explanation: "Since the Left Door claims 'Both statements are true', if it were true then both would be true—so the Left Door must be FALSE, meaning the Right Door holds the Silver Quill!"
        }
      },
      linguistics: {
        title: "Deciphering the Study Wall Scroll",
        story: "Look at the handwritten note taped to the back wall of photo IMG_3723!",
        junior: {
          prompt: "The word 'UNICORN' comes from two Latin roots: 'uni-' and 'cornu'. What do those two parts mean?",
          options: ["One + Horn", "White + Horse", "Magic + Star", "Silver + Mane"],
          answer: 0,
          hint: "Think of a 'unicycle' (one wheel) and a 'cornucopia' (horn of plenty)!",
          explanation: "From Latin 'unus' (one) and 'cornu' (horn), a unicorn literally means 'one-horned'!"
        },
        scholar: {
          prompt: "The handwritten note taped to the study wall is a 'MANUSCRIPT'. In medieval paleography, what does a 'PALIMPSEST' refer to, and what are the Latin roots of 'manuscript'?",
          options: [
            "'Manuscript' = 'written by hand' (manu scriptus); a 'palimpsest' is a parchment scroll scraped clean and reused so an older hidden text lies beneath",
            "'Manuscript' = 'printed by machine'; a 'palimpsest' is a wax seal",
            "'Manuscript' = 'read aloud'; a 'palimpsest' is a feather quill",
            "'Manuscript' = 'royal decree'; a 'palimpsest' is a stone obelisk"
          ],
          answer: 0,
          hint: "Latin 'manus' = hand, 'scriptus' = written; Greek 'palimpsēstos' = 'scraped again'.",
          explanation: "'Manuscript' comes from Latin 'manu scriptus' (written by hand), while a 'palimpsest' is a parchment whose original ink was scraped off to write a new text over the ghost of the old!"
        }
      },
      history: {
        title: "From Papyrus to Paper & The Rosetta Stone",
        story: "The mice preserve their family history on a handwritten sheet taped to the study wall.",
        junior: {
          prompt: "Which ancient civilization invented PAPER (made from mulberry bark, hemp, and rags) around 105 AD, long before it reached Europe?",
          options: ["Ancient China (attributed to Cai Lun during the Han Dynasty)", "The Vikings", "The Aztecs", "Ancient Sparta"],
          answer: 0,
          hint: " Along with printing, the compass, and gunpowder, paper was one of the 'Four Great Inventions' of this civilization!",
          explanation: "Paper making was perfected in Han Dynasty China around 105 AD by court official Cai Lun!"
        },
        scholar: {
          prompt: "In 1822, which French linguist and orientalist finally deciphered Ancient Egyptian hieroglyphs on the Rosetta Stone by realizing that the script combined phonetic signs and logograms (and comparing Coptic with the Greek royal names Ptolemy and Cleopatra)?",
          options: [
            "Jean-François Champollion",
            "Howard Carter",
            "Heinrich Schliemann",
            "Arthur Evans"
          ],
          answer: 0,
          hint: "Building on Thomas Young's work on royal cartouches, he announced 'Je tiens mon affaire!' in Paris in September 1822.",
          explanation: "Jean-François Champollion cracked the hieroglyphic code in 1822 using his deep knowledge of Coptic and the trilingual Rosetta Stone!"
        }
      }
    }
  },
  {
    id: "h2-r7",
    house: 2,
    floorLabel: "Ground Floor Right",
    name: "Sailor's Bunk & Silver Crescent Moon",
    subtitle: "Sailor-striped mouse in white mesh bunk bed, shimmering silver crescent-moon cradle & wall cookies",
    photo: "assets/photos/IMG_3725.jpg",
    relic: { id: "relic-sextant", icon: "", img: "assets/watercolor/post_03.png", name: "Silver Lunar Sextant", desc: "Tucked beneath the shimmering silver crescent-moon cradle" },
    character: { name: "Captain Pippin", role: "Lunar Navigator", img: "assets/watercolor/mouse_hiker.png" },
    svgArt: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="h2r7-moon" cx="0.76" cy="0.6" r="0.45">
          <stop offset="0%" stop-color="#fefcbf" stop-opacity="0.75"/>
          <stop offset="100%" stop-color="#fefcbf" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="320" height="200" fill="#f0ece3"/>
      <rect x="0" y="148" width="320" height="52" fill="#d8cebe" stroke="#6e5a44" stroke-width="1.5"/>
      <circle cx="242" cy="132" r="76" fill="url(#h2r7-moon)"/>
      <!-- Two Wall-Taped Cookie Medallions on Left Wall -->
      <circle cx="42" cy="92" r="9.5" fill="#c07d38" stroke="#5c3a1d" stroke-width="1.5"/>
      <circle cx="64" cy="84" r="8.5" fill="#d9cbb8" stroke="#5c3a1d" stroke-width="1.5"/>
      <!-- White Mesh-Top Canopy Bunk Bed on Left -->
      <rect x="64" y="114" width="114" height="52" rx="3" fill="#ffffff" stroke="#6e5a44" stroke-width="2"/>
      <polygon points="74,46 184,62 176,98 68,82" fill="#fbf4e4" stroke="#6e5a44" stroke-width="2"/>
      <line x1="74" y1="82" x2="68" y2="124" stroke="#6e5a44" stroke-width="2.5"/>
      <line x1="176" y1="98" x2="168" y2="136" stroke="#6e5a44" stroke-width="2.5"/>
      <!-- Breton Sailor-Striped Mouse Lounging on Floral Bedding -->
      <circle cx="88" cy="112" r="11" fill="#d6c3ae" stroke="#5c3a1d" stroke-width="1.4"/>
      <rect x="100" y="106" width="34" height="18" rx="4" fill="#ffffff" stroke="#1e4e8c" stroke-width="1.8"/>
      <line x1="108" y1="106" x2="108" y2="124" stroke="#1e4e8c" stroke-width="3"/>
      <line x1="118" y1="106" x2="118" y2="124" stroke="#1e4e8c" stroke-width="3"/>
      <line x1="128" y1="106" x2="128" y2="124" stroke="#1e4e8c" stroke-width="3"/>
      <rect x="134" y="108" width="22" height="16" rx="3" fill="#1a365d"/>
      <!-- Shimmering Metallic-Silver Crescent-Moon Cradle on Right -->
      <path d="M204,132 Q258,98 280,158 Q242,124 204,132 Z" fill="#e2e8f0" stroke="#4a5568" stroke-width="3"/>
      <circle cx="232" cy="144" r="8.5" fill="#e6d5c3" stroke="#5c3a1d" stroke-width="1.2"/>
      <circle cx="252" cy="154" r="8.5" fill="#e6d5c3" stroke="#5c3a1d" stroke-width="1.2"/>
      <!-- Resident Watercolor Character: Navigator Mouse -->
      <image href="assets/watercolor/mouse_hiker.png" x="186" y="42" width="72" height="88"/>
    </svg>`,
    hotspots: [
      { x: 35, y: 50, label: "Pippin the Sailor Mouse", note: "A mouse in a classic blue-and-white striped Breton sailor shirt and navy shorts sleeping under the white mesh bunk!" },
      { x: 60, y: 58, label: "Silver Crescent-Moon Cradle", note: "On the right rests a shimmering metallic-silver crescent moon bed cradling baby mice!" },
      { x: 18, y: 45, label: "Wall-Taped Cookie Badges", note: "Taped to the left wall beside the bunk bed are two little round biscuit/cookie decorations!" }
    ],
    tasks: {
      math: {
        title: "The Sailor's Stripes & The Crescent Moon",
        story: "In the ground-floor right room (photo IMG_3725), Pippin the Sailor Mouse sleeps beside a shimmering silver crescent-moon cradle.",
        junior: {
          prompt: "A traditional French Navy Breton sailor shirt has 21 white stripes and 20 navy-blue stripes across the chest. How many stripes are on Pippin's sailor shirt in total?",
          options: ["39 stripes", "40 stripes", "41 stripes", "42 stripes"],
          answer: 2,
          hint: "Add the 21 white stripes and the 20 navy-blue stripes!",
          explanation: "21 white stripes + 20 blue stripes = 41 stripes in total!"
        },
        scholar: {
          prompt: "In geometry, the Greek mathematician Hippocrates of Chios (c. 440 BC) proved a stunning theorem about a crescent moon shape called the 'Lune of Hippocrates'. If you construct a right isosceles triangle with legs of length 4 cm and draw semicircles on its two legs and on its hypotenuse, what is the EXACT combined area of the two crescent lunes formed outside the hypotenuse semicircle?",
          options: [
            "8 cm² (Wait: equal to the exact area of the right triangle itself: ½ × 4 × 4 = 8 cm²—no π at all!)",
            "4π cm²",
            "8π - 8 cm²",
            "16 cm²"
          ],
          answer: 0,
          hint: "By Hippocrates' Theorem, the curved semicircle areas cancel out completely via a² + b² = c², leaving the exact area of the right triangle!",
          explanation: "By the Lune of Hippocrates theorem, the sum of the areas of the two crescent lunes equals the exact area of the right triangle: ½ × 4 × 4 = 8 cm² (with no π in the answer)!"
        }
      },
      logic: {
        title: "Top Bunk vs. Bottom Bunk Watch",
        story: "On the white mesh-top bunk bed, one mouse sleeps on the bottom mattress while another keeps night watch on the top deck.",
        junior: {
          prompt: "The night watch from 8:00 PM to 8:00 AM is 12 hours long. If 3 sailor mice share the top-bunk watch equally so each mouse stands watch for the exact same number of hours, how many hours does each mouse watch the silver moon?",
          options: ["3 hours", "4 hours", "5 hours", "6 hours"],
          answer: 1,
          hint: "Divide 12 hours equally among the 3 mice!",
          explanation: "12 hours ÷ 3 mice = 4 hours of watch per mouse!"
        },
        scholar: {
          prompt: "Look at the Silver Crescent Moon cradle. In the Northern Hemisphere, astronomers use the mnemonic 'DOC' to tell whether the Moon is Waxing (growing toward Full) or Waning (shrinking toward New). If the illuminated crescent is shaped like the right-hand curve of the letter 'D' (lit on the right side), what phase is the Moon in, and when does it set?",
          options: [
            "It is a Waxing Crescent Moon, visible in the western sky shortly after sunset",
            "It is a Waning Crescent Moon, rising just before dawn",
            "It is a Full Moon rising at midnight",
            "It is a Lunar Eclipse"
          ],
          answer: 0,
          hint: "In the Northern Hemisphere: 'D' (right side lit) = Waxing (growing), 'O' = Full, 'C' (left side lit) = Waning (shrinking).",
          explanation: "In the Northern Hemisphere, a crescent lit on the right side (like the curve of a capital D) is a Waxing Crescent, glowing in the western sky right after sunset!"
        }
      },
      linguistics: {
        title: "Nautical Idioms & Lunar Words",
        story: "Pippin the Sailor Mouse speaks in classic maritime idioms!",
        junior: {
          prompt: "Which of these everyday English expressions originally came from sailing ships at sea?",
          options: [
            "'Learning the ropes' and 'Three sheets to the wind'",
            "'Barking up the wrong tree'",
            "'Spilling the beans'",
            "'Hitting the hay'"
          ],
          answer: 0,
          hint: "Tall ships had hundreds of ropes (rigging) and rope lines called 'sheets' that controlled the corners of the sails!",
          explanation: "New sailors literally had to 'learn the ropes' of the ship's rigging, and a 'sheet' is the rope holding a sail's corner!"
        },
        scholar: {
          prompt: "Look at the days of the week across Germanic and Romance languages: English 'Monday' (Old English Mōnandæg) and French 'lundi' (Latin dies Lunae) are both named after the Moon. Which linguistic process explains how Germanic tribes translated Latin 'dies Lunae' element-by-element into 'Moon's day' instead of borrowing the Latin sound?",
          options: [
            "A calque (loan translation)",
            "Metathesis",
            "Apocope",
            "Onomatopoeia"
          ],
          answer: 0,
          hint: "When a language translates the meaning of each part of a foreign phrase using native words (like French 'gratte-ciel' for 'skyscraper'), linguists call it this French term.",
          explanation: "A 'calque' (or loan translation) translates a foreign compound root-for-root into native words—just as Latin 'dies Lunae' became Germanic 'Moon's-day' (Monday)!"
        }
      },
      history: {
        title: "Finding Longitude at Sea & The Breton Shirt",
        story: "Why do French sailors (and Pippin the Mouse!) wear 21 blue-and-white stripes?",
        junior: {
          prompt: "According to maritime tradition after the 1858 French Navy decree, what did the 21 stripes on a Breton sailor shirt ('marinière') commemorate, AND why were stripes practical at sea?",
          options: [
            "They made a sailor who fell overboard much easier to spot in the waves (and legend says the 21 stripes honored 21 naval/Napoleonic victories!)",
            "They kept sharks away",
            "Each stripe measured 1 foot of rope",
            "They glowed in the dark"
          ],
          answer: 0,
          hint: "High-contrast blue and white stripes stand out sharply against ocean foam!",
          explanation: "Introduced as the official French Navy uniform in March 1858, the striped 'marinière' made sailors easy to spot in the rigging or waves, and tradition links the 21 stripes to Napoleon's 21 victories!"
        },
        scholar: {
          prompt: "For centuries, sailors could easily find their Latitude from the height of the Sun or Polaris, but finding LONGITUDE at sea required knowing the exact time at a reference meridian. Which self-taught 18th-century English carpenter and clockmaker solved the Longitude Problem by inventing the H4 marine chronometer?",
          options: [
            "John Harrison",
            "Galileo Galilei",
            "Ferdinand Magellan",
            "Edmond Halley"
          ],
          answer: 0,
          hint: "In response to the 1714 Longitude Act, he spent decades building sea clocks H1, H2, H3, and the pocket-watch-sized H4!",
          explanation: "John Harrison (1693–1776) solved the Longitude Problem with his H4 marine chronometer, which lost only 5.1 seconds on an 81-day voyage to Jamaica in 1761!"
        }
      }
    }
  },
  {
    id: "h2-r8",
    house: 2,
    floorLabel: "Ground Floor Left & Courtyard",
    name: "Daisy Garden & Vintage Red Roadster",
    subtitle: "Floral daisy garden bed, Vintage Burgundy Convertible Roadster & Handmade Wooden Rover Cart",
    photo: "assets/photos/IMG_3724.jpg",
    relic: { id: "relic-roadster-key", icon: "", img: "assets/watercolor/garden_19.png", name: "Golden Roadster Ignition Key", desc: "Starts the Vintage Burgundy Convertible Roadster!" },
    character: { name: "Clover Sunhat", role: "Courtyard Gardener & Driver", img: "assets/watercolor/s1_12.png" },
    svgArt: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#efe3ce"/>
      <rect x="0" y="132" width="320" height="68" fill="#ba8648" stroke="#5c3a1d" stroke-width="1.5"/>
      <line x1="0" y1="154" x2="320" y2="154" stroke="#7d522b" stroke-width="1" opacity="0.6"/>
      <line x1="0" y1="176" x2="320" y2="176" stroke="#7d522b" stroke-width="1" opacity="0.6"/>
      <!-- Sunny Daisy Garden Bed in Left Cubby with Watercolor Fence -->
      <rect x="12" y="12" width="132" height="110" rx="4" fill="#fdfbf7" stroke="#6e5a44" stroke-width="2.5"/>
      <image href="assets/watercolor/garden_04.png" x="18" y="18" width="76" height="66"/>
      <polygon points="18,92 138,92 132,118 24,118" fill="#ecc94b" stroke="#975a16" stroke-width="1.5"/>
      <circle cx="104" cy="42" r="10" fill="#ffffff" stroke="#8c7355" stroke-width="1.2"/>
      <circle cx="104" cy="42" r="4" fill="#ecc94b"/>
      <circle cx="88" cy="58" r="9" fill="#f6e05e" stroke="#975a16" stroke-width="1.2"/>
      <!-- Vintage Burgundy Convertible Roadster on Hardwood Courtyard -->
      <g transform="translate(20, 108)">
        <path d="M10,36 Q18,14 48,14 L118,14 Q148,14 156,38 L156,56 Q156,68 138,68 L24,68 Q8,68 10,36 Z" fill="#6b1d24" stroke="#2d080c" stroke-width="2.2"/>
        <!-- Windshield & Steering Wheel -->
        <line x1="104" y1="14" x2="94" y2="2" stroke="#cbd5e0" stroke-width="2.5"/>
        <!-- Tufted Cream Leather Seats -->
        <rect x="34" y="18" width="44" height="24" rx="4" fill="#e6d3b3" stroke="#7d5e38" stroke-width="1.5"/>
        <rect x="82" y="22" width="28" height="20" rx="4" fill="#e6d3b3" stroke="#7d5e38" stroke-width="1.5"/>
        <!-- Chrome Radiator Grille & Warm Headlights -->
        <ellipse cx="148" cy="44" rx="7" ry="13" fill="#e2e8f0" stroke="#4a5568" stroke-width="1.8"/>
        <circle cx="136" cy="54" r="5.5" fill="#fefcbf" stroke="#b7791f" stroke-width="1.2"/>
        <circle cx="42" cy="68" r="11.5" fill="#2d3748" stroke="#e2e8f0" stroke-width="3"/>
        <circle cx="122" cy="68" r="11.5" fill="#2d3748" stroke="#e2e8f0" stroke-width="3"/>
      </g>
      <!-- Handmade Wooden Rover Cart on Right -->
      <g transform="translate(204, 128)">
        <rect x="14" y="12" width="52" height="26" rx="2" fill="#e6cfa8" stroke="#5c3a1d" stroke-width="2"/>
        <circle cx="22" cy="14" r="8.5" fill="#2d3748" stroke="#a0aec0" stroke-width="1.5"/>
        <circle cx="38" cy="44" r="9.5" fill="#2d3748" stroke="#a0aec0" stroke-width="1.5"/>
        <circle cx="58" cy="14" r="8" fill="#4a5568" stroke="#a0aec0" stroke-width="1.5"/>
      </g>
      <!-- Watercolor Copper Watering Can & Resident Gardener + Mushroom Mice -->
      <image href="assets/watercolor/garden_19.png" x="150" y="76" width="52" height="48"/>
      <image href="assets/watercolor/s1_12.png" x="198" y="34" width="68" height="90"/>
      <image href="assets/watercolor/s1_01.png" x="258" y="48" width="58" height="82"/>
    </svg>`,
    hotspots: [
      { x: 26, y: 66, label: "Vintage Burgundy Roadster", note: "Parked right outside on the hardwood floor in IMG_3724 is a gleaming burgundy convertible car with tufted cream seats and chrome headlights!" },
      { x: 58, y: 78, label: "Handmade Wooden Rover Cart", note: "Beside the roadster sits a clever handmade wooden cart with big black wheels!" },
      { x: 38, y: 46, label: "Daisy & Butterfly Garden Nook", note: "Inside the bottom-left room blooms a sunny yellow bed topped with giant white and yellow daisies!" }
    ],
    tasks: {
      math: {
        title: "The Grand Roadster & Wooden Cart Rally",
        story: "Parked on the hardwood floor outside the ground-floor rooms (photos IMG_3710 & IMG_3724) are two vehicles: the Vintage Burgundy Convertible Roadster and the Handmade Wooden Cart!",
        junior: {
          prompt: "The Burgundy Roadster drives across the hallway at 30 centimeters per second, and the Wooden Cart rolls at 18 centimeters per second. If both start together and drive in the same direction for 5 seconds, how far ahead is the Burgundy Roadster?",
          options: ["48 cm ahead", "60 cm ahead", "72 cm ahead", "90 cm ahead"],
          answer: 1,
          hint: "Each second, the Roadster gains 30 - 18 = 12 centimeters on the Wooden Cart. Multiply that by 5 seconds!",
          explanation: "Speed difference = 30 - 18 = 12 cm/sec. Over 5 seconds, 12 × 5 = 60 cm ahead!"
        },
        scholar: {
          prompt: "Classic Average Speed Trap: The Burgundy Roadster drives from the Timber House to the Kitchen door at 30 cm/s, and immediately drives back along the exact same path at 60 cm/s. What is the Roadster's average speed for the entire round trip?",
          options: [
            "40 cm/s (the harmonic mean: 2 × 30 × 60 / (30 + 60))",
            "45 cm/s (the arithmetic mean)",
            "42.5 cm/s",
            "50 cm/s"
          ],
          answer: 0,
          hint: "Pick a sample one-way distance of 60 cm: going takes 60÷30 = 2 seconds, returning takes 60÷60 = 1 second. Total distance = 120 cm in 3 seconds!",
          explanation: "Average speed over equal distances is the harmonic mean: 2ab/(a+b) = (2 × 30 × 60) / 90 = 3600 / 90 = 40 cm/s!"
        }
      },
      logic: {
        title: "Seating the 4 Explorer Mice in the Burgundy Roadster",
        story: " look at the tufted cream leather seats of the Burgundy Roadster in photo IMG_3724: there is a Front Driver seat, a Front Passenger seat, a Back Left seat, and a Back Right seat!",
        junior: {
          prompt: "Our 4 mice—Pippin, Princess Rosalind, Professor Barnaby, and Clover—climb into the Roadster: (1) Only Professor Barnaby or Clover can reach the pedals to sit in the Front Driver seat. (2) Clover sits in the Back Left seat to watch the Wooden Cart. (3) Pippin sits in the Front Passenger seat with his compass. Where does Princess Rosalind sit?",
          options: [
            "In the Back Right seat (while Professor Barnaby drives!)",
            "In the Front Driver seat",
            "In the Front Passenger seat",
            "In the Back Left seat"
          ],
          answer: 0,
          hint: "Since Clover is in the Back Left seat, rule (1) means Professor Barnaby must be in the Front Driver seat!",
          explanation: "Clover is in Back Left, so Barnaby takes Front Driver; Pippin is in Front Passenger, leaving Back Right for Princess Rosalind!"
        },
        scholar: {
          prompt: "Before driving across the room, the Roadster has 4 tires on its axles plus 1 full-size spare tire in the trunk (5 tires total). If the mice drive a 100-meter expedition (requiring 4 tires on the road at all times, so 4 × 100 = 400 tire-meters of wear) and rotate the 5 tires equally, what is the minimum distance each of the 5 tires must roll?",
          options: ["80 meters per tire", "75 meters per tire", "85 meters per tire", "100 meters per tire"],
          answer: 0,
          hint: "Total tire-distance required by 4 wheels over 100 meters is 4 × 100 = 400 tire-meters, shared equally among 5 tires!",
          explanation: "Sharing 400 tire-meters equally across all 5 tires (each tire rests as the spare for 20 meters) gives 400 ÷ 5 = 80 meters per tire!"
        }
      },
      linguistics: {
        title: "Convertible, Roadster & Cabriolet",
        story: "The burgundy car has an open top with a chrome radiator grille!",
        junior: {
          prompt: "Look at the word 'AUTOMOBILE'. It combines the Greek word 'auto-' with the Latin word 'mobilis'. What do those two parts mean together?",
          options: ["Self + Moving", "Fast + Wheel", "Metal + Carriage", "Road + Engine"],
          answer: 0,
          hint: "'Auto-' means 'self' (like an autobiography!) and 'mobile' means 'movable/moving'!",
          explanation: "A hybrid compound of Greek 'autos' (self) and Latin 'mobilis' (movable), 'automobile' literally means 'self-moving'!"
        },
        scholar: {
          prompt: "Why is an open-top convertible car (and its 19th-century horse-drawn predecessor, from which we also get the word 'taxicab' / 'cab') called a 'CABRIOLET'?",
          options: [
            "From French 'cabrioler' (and Italian 'capriola', a goat's leap, from Latin 'caper'), because the lightweight carriage bounced and skipped lightly along the road like a young goat!",
            "After the French coachbuilder Monsieur Cabrio",
            "From Latin 'caballus' (pack horse)",
            "From Spanish 'cabeza' (hood)"
          ],
          answer: 0,
          hint: "Compare the ballet jump 'cabriole' and the island of Capri (island of goats, Latin 'capra').",
          explanation: "'Cabriolet' (shortened in English to 'cab'!) comes from French 'cabriole' ('a goat's leap', from Italian 'capriola' / Latin 'capra'), because the light two-wheeled carriage bounded playfully over cobblestones!"
        }
      },
      history: {
        title: "Bertha Benz's First Road Trip & The Mars Rover",
        story: "Outside the mouse house sit both a vintage motorcar AND a handmade six/four-wheeled rover cart!",
        junior: {
          prompt: "In August 1888, who made the world's very first long-distance road trip by automobile (driving 65 miles across Germany with her two teenage sons and using a hatpin to unclog a fuel line and shoemaker's leather to invent brake linings)?",
          options: [
            "Bertha Benz (wife and business partner of Karl Benz)",
            "Amelia Earhart",
            "Marie Curie",
            "Queen Victoria"
          ],
          answer: 0,
          hint: "She proved to the world that the Benz Patent-Motorwagen was practical for real family travel!",
          explanation: "Bertha Benz drove the Benz Patent-Motorwagen 106 km from Mannheim to Pforzheim in August 1888, inventing brake pads along the way!"
        },
        scholar: {
          prompt: "Look at the handmade wooden Rover Cart next to the Roadster. On July 4, 1997, NASA's Mars Pathfinder landed the very first wheeled rover ever to explore another planet—named in honor of a pioneering 19th-century American abolitionist and women's rights activist. What was the name of that first Mars rover?",
          options: [
            "Sojourner (named after Sojourner Truth)",
            "Perseverance",
            "Curiosity",
            "Ingenuity"
          ],
          answer: 0,
          hint: "The 1997 six-wheeled microrover was chosen via a student essay contest honoring Isabella Baumfree's chosen name, meaning 'traveler'.",
          explanation: "NASA's 1997 'Sojourner' rover (named after abolitionist Sojourner Truth) was the first wheeled vehicle to rove another planet!"
        }
      }
    }
  }
];

// Clean up Scholar option text for h2-r2, h2-r4, h2-r6, h2-r7 so options read super cleanly:
window.HOUSE_2_ROOMS[1].tasks.logic.scholar.options[0] = "35 total paths; 18 pass through (2, 1)";
window.HOUSE_2_ROOMS[1].tasks.logic.scholar.explanation = "Total shortest paths = C(4+3, 3) = C(7, 3) = 35. Paths visiting (2,1) = C(2+1, 1) × C(2+2, 2) = 3 × 6 = 18!";
window.HOUSE_2_ROOMS[3].tasks.math.scholar.options[0] = "237";
window.HOUSE_2_ROOMS[3].tasks.math.scholar.options[1] = "357";
window.HOUSE_2_ROOMS[5].tasks.logic.scholar.prompt = "The White Armoire has two doors (Left and Right). Inside one door is the Silver Quill; behind the other is a bell that wakes the Ginger Cat. The Left Door reads: 'Both statements on these two doors are true.' The Right Door reads: 'The Silver Quill is behind the Right Door.' Assuming the door with the Quill has a TRUE inscription and the door with the bell has a FALSE inscription, where is the Silver Quill?";
window.HOUSE_2_ROOMS[5].tasks.logic.scholar.options[0] = "Behind the Right Door";
window.HOUSE_2_ROOMS[6].tasks.math.scholar.options[0] = "8 cm² (the exact area of the right triangle itself, with no π!)";
