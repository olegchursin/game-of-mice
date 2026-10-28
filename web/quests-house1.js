window.HOUSE_1_ROOMS = [
  {
    id: "h1-r1",
    house: 1,
    floorLabel: "Attic Peak Left",
    name: "The Triangle Train Loft",
    subtitle: "Red steam locomotive, wooden stool & burlap roll under the slanted peak",
    photo: "assets/photos/IMG_3712.jpg",
    relic: { id: "relic-locomotive", icon: "", img: "assets/watercolor/post_27.png", name: "Brass Steam Whistle", desc: "From the Attic Peak red locomotive" },
    character: { name: "Pippin Mapmaker", role: "Attic Cartographer", img: "assets/watercolor/mouse_cartographer.png" },
    svgArt: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="h1r1-wall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fbf3e4"/>
          <stop offset="55%" stop-color="#f2dfc1"/>
          <stop offset="100%" stop-color="#dfbe91"/>
        </linearGradient>
        <radialGradient id="h1r1-sun" cx="0.35" cy="0.25" r="0.65">
          <stop offset="0%" stop-color="#fff7d6" stop-opacity="0.9"/>
          <stop offset="60%" stop-color="#f5d584" stop-opacity="0.28"/>
          <stop offset="100%" stop-color="#f5d584" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="h1r1-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c99b68"/>
          <stop offset="100%" stop-color="#946232"/>
        </linearGradient>
      </defs>
      <!-- Warm Watercolor Parchment Base & Gable Roof Cutaway -->
      <rect width="320" height="200" fill="#e6cfa8"/>
      <polygon points="0,185 95,10 320,142 320,190 0,190" fill="url(#h1r1-wall)"/>
      <!-- Round Dormer Skylight & Warm Sunbeam Wash -->
      <circle cx="105" cy="54" r="18" fill="#dff0f7" stroke="#6b4423" stroke-width="2.5"/>
      <line x1="87" y1="54" x2="123" y2="54" stroke="#6b4423" stroke-width="1.5"/>
      <line x1="105" y1="36" x2="105" y2="72" stroke="#6b4423" stroke-width="1.5"/>
      <polygon points="92,62 120,52 210,175 55,175" fill="url(#h1r1-sun)"/>
      <!-- Slanted Timber Gable Beams with Sepia Ink Hatching -->
      <polyline points="0,185 95,10 320,142" fill="none" stroke="#7d522b" stroke-width="8" stroke-linejoin="round"/>
      <polyline points="0,188 95,13 320,145" fill="none" stroke="#4a2c11" stroke-width="1.5" stroke-dasharray="10,5"/>
      <!-- Timber Plank Floor -->
      <rect x="0" y="170" width="320" height="30" fill="url(#h1r1-floor)" stroke="#5c3a1d" stroke-width="1.5"/>
      <line x1="0" y1="184" x2="320" y2="184" stroke="#6b4423" stroke-width="1" opacity="0.6"/>
      <!-- Handcrafted Pine Stool on Left -->
      <rect x="38" y="132" width="46" height="8" rx="2" fill="#b37d46" stroke="#4a2c11" stroke-width="1.6"/>
      <rect x="43" y="140" width="6" height="33" fill="#8f5e2e" stroke="#4a2c11" stroke-width="1.4"/>
      <rect x="73" y="140" width="6" height="33" fill="#8f5e2e" stroke="#4a2c11" stroke-width="1.4"/>
      <!-- Rolled Woven Burlap & Linen Mat -->
      <rect x="98" y="116" width="88" height="48" rx="4" fill="#f7eed7" stroke="#8c6239" stroke-width="1.8"/>
      <path d="M104,164 L138,128 L178,150 L178,164 Z" fill="#cfa972" stroke="#734f29" stroke-width="1.4"/>
      <ellipse cx="144" cy="171" rx="30" ry="6" fill="#fbf7ef" stroke="#b09673" stroke-width="1.2"/>
      <!-- Red Steam Locomotive with Brass Trim & Steam Puffs -->
      <g transform="translate(212, 126)">
        <circle cx="12" cy="-5" r="4.5" fill="#ffffff" opacity="0.8"/>
        <circle cx="19" cy="-11" r="6" fill="#ffffff" opacity="0.65"/>
        <rect x="0" y="14" width="54" height="24" rx="4" fill="#c43c2f" stroke="#4a1c15" stroke-width="1.8"/>
        <rect x="31" y="2" width="23" height="18" rx="2" fill="#d9584c" stroke="#4a1c15" stroke-width="1.6"/>
        <rect x="35" y="5" width="12" height="9" rx="1" fill="#fff5d1" stroke="#4a1c15" stroke-width="1.2"/>
        <rect x="8" y="3" width="8" height="12" fill="#632019" stroke="#4a1c15" stroke-width="1.4"/>
        <line x1="2" y1="26" x2="52" y2="26" stroke="#f0c869" stroke-width="2"/>
        <circle cx="12" cy="40" r="7.5" fill="#4a3525" stroke="#f0c869" stroke-width="2.2"/>
        <circle cx="28" cy="40" r="7.5" fill="#4a3525" stroke="#f0c869" stroke-width="2.2"/>
        <circle cx="44" cy="40" r="7.5" fill="#4a3525" stroke="#f0c869" stroke-width="2.2"/>
      </g>
      <!-- Botanical Accent & Resident Cartographer Mouse -->
      <image href="assets/watercolor/post_15.png" x="12" y="14" width="44" height="44" opacity="0.9"/>
      <image href="assets/watercolor/mouse_cartographer.png" x="144" y="88" width="76" height="86"/>
    </svg>`,
    hotspots: [
      { x: 33, y: 44, label: "Tiny Pine Stool", note: "Tucked right under the steepest angle of the plywood roof sits a miniature four-legged wooden stool." },
      { x: 49, y: 44, label: "Woven Burlap Roll", note: "A rolled-up woven straw & burlap mat resting against a cream backing board." },
      { x: 72, y: 46, label: "Red Toy Locomotive", note: "A little red steam engine with acoplamiento cars waiting to roll along the top attic beam!" }
    ],
    tasks: {
      math: {
        title: "The Red Locomotive Gear Ratio",
        story: "In the tiny triangular peak of the wooden house, the red toy steam train has small front guide wheels and larger driving wheels.",
        junior: {
          prompt: "The red locomotive's big wheel has 18 gear teeth, and its small wheel has 6 gear teeth. Every time the big wheel makes 4 full turns along the attic shelf, how many full turns does the small wheel make?",
          options: ["8 turns", "12 turns", "16 turns", "24 turns"],
          answer: 1,
          hint: "Each turn of the 18-tooth wheel pushes 18 teeth. Divide 18 by 6 to see how many times the small wheel spins per big turn!",
          explanation: "18 ÷ 6 = 3 small turns for every 1 big turn. So in 4 big turns, the small wheel makes 4 × 3 = 12 full turns!"
        },
        scholar: {
          prompt: "The triangular attic loft has a horizontal shelf of length 60 cm, a left roof slope of 50 cm, and a right roof slope of 50 cm. What is the exact vertical height from the shelf floor to the highest roof peak?",
          options: ["30 cm", "35 cm", "40 cm", "45 cm"],
          answer: 2,
          hint: "Drop a perpendicular altitude from the peak to the midpoint of the 60 cm base, forming two right triangles with base 30 cm and hypotenuse 50 cm.",
          explanation: "By the Pythagorean theorem (3-4-5 right triangle scaled by 10): height = √(50² - 30²) = √(2500 - 900) = √1600 = 40 cm!"
        }
      },
      logic: {
        title: "Switching Cars on the Attic Siding",
        story: "Three miniature train cars—the Coal Car (C), the Acorn Car (A), and the Mail Car (M)—are parked on the narrow attic ledge.",
        junior: {
          prompt: "Clues: (1) The Acorn Car is NOT at the back. (2) The Mail Car is directly behind the Coal Car. Which order are the cars in from FRONT to BACK?",
          options: ["Acorn – Coal – Mail", "Coal – Acorn – Mail", "Mail – Coal – Acorn", "Coal – Mail – Acorn"],
          answer: 0,
          hint: "Since Mail is directly behind Coal, C-M must stay together as a pair. Where can Acorn go if it cannot be at the back?",
          explanation: "C and M form the block [Coal, Mail]. Since Acorn cannot be at the back, Acorn must be in front: Acorn – Coal – Mail!"
        },
        scholar: {
          prompt: "Four train cars (1, 2, 3, 4) enter a single dead-end turntable spur in order 1-2-3-4 (each car can either pass straight through or be pushed onto the spur and popped out later, like a LIFO stack). Which outgoing order is IMPOSSIBLE?",
          options: ["2 - 4 - 3 - 1", "3 - 2 - 4 - 1", "4 - 2 - 1 - 3", "1 - 4 - 3 - 2"],
          answer: 2,
          hint: "If car 4 comes out first, cars 1, 2, and 3 must already be stacked on the spur with 3 on top and 1 at the bottom.",
          explanation: "To output 4 first, 1, 2, and 3 are all on the stack in order [bottom: 1, 2, 3 :top]. They must exit in reverse order 3-2-1, so 4-2-1-3 is impossible!"
        }
      },
      linguistics: {
        title: "Etymology of the Steam Locomotive",
        story: "Written underneath the red train is a tiny Latin motto from the railroad pioneers.",
        junior: {
          prompt: "The word 'LOCOMOTIVE' comes from two Latin roots: 'loco' and 'mot-'. What do those two roots mean together?",
          options: ["Loud + Whistle", "From a place + Moving", "Iron + Fire", "Fast + Track"],
          answer: 1,
          hint: "Think of 'location' (place) and 'motion' (moving)!",
          explanation: "In Latin, 'in loco' means 'from a place' and 'motivus' means 'causing motion'—literally a machine that moves from place to place!"
        },
        scholar: {
          prompt: "In comparative Indo-European linguistics, the English word 'WHEEL', the Sanskrit 'cakra' (chakra), and the Ancient Greek 'kyklos' (cycle) all descend from the reduplicated PIE root *kʷékʷlos. What sound law explains why PIE *kʷ became 'wh/h' in Germanic (wheel)?",
          options: ["Grimm's Law (First Germanic Sound Shift)", "Great Vowel Shift", "Grassmann's Law", "Rhotacism"],
          answer: 0,
          hint: "This famous law discovered by Jacob Grimm describes how voiceless stops (*p, *t, *k, *kʷ) shifted to fricatives (*f, *þ, *x, *xw) in Proto-Germanic.",
          explanation: "Grimm's Law shifted the Proto-Indo-European labiovelar stop *kʷ to Proto-Germanic *hw (written 'wh' in English 'wheel'), while Greek kept 'kyklos'!"
        }
      },
      history: {
        title: "The First Steam Railway Trial",
        story: "The attic mice celebrate the anniversary of the world's most famous early steam locomotive trial.",
        junior: {
          prompt: "In 1829, George and Robert Stephenson built a famous bright-yellow steam locomotive that won the Rainhill Trials in England. What was its name?",
          options: ["The Rocket", "The Flying Scotsman", "The Orient Express", "The Iron Duke"],
          answer: 0,
          hint: "It shares its name with a spacecraft that blasts into orbit!",
          explanation: "Stephenson's 'Rocket' won the 1829 Rainhill Trials at an astonishing top speed of 29 miles per hour!"
        },
        scholar: {
          prompt: "Before Stephenson's 1829 Rocket, which Cornish engineer built the world's very first full-scale working railway steam locomotive at the Penydarren ironworks in Wales in 1804?",
          options: ["Richard Trevithick", "James Watt", "Isambard Kingdom Brunel", "Thomas Newcomen"],
          answer: 0,
          hint: "He pioneered high-pressure steam ('strong steam') after James Watt's low-pressure patent expired in 1800.",
          explanation: "Richard Trevithick built the first high-pressure steam railway locomotive in February 1804 at Penydarren, hauling 10 tons of iron and 70 passengers!"
        }
      }
    }
  },
  {
    id: "h1-r2",
    house: 1,
    floorLabel: "4th Floor Left",
    name: "The Havana Cigar-Box Suite",
    subtitle: "Vintage Havana Cigars bed, LEGO flower table, rocking chair & purple lace rug",
    photo: "assets/photos/IMG_3712.jpg",
    relic: { id: "relic-cigar-compass", icon: "", img: "assets/watercolor/post_17.png", name: "Cedar Box Compass", desc: "Hidden inside the Havana Cigars bed" },
    character: { name: "King Barnaby", role: "Havana Suite Scholar", img: "assets/watercolor/mouse_king.png" },
    svgArt: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="h1r2-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#faefd9"/>
          <stop offset="100%" stop-color="#e5ccaa"/>
        </linearGradient>
        <radialGradient id="h1r2-glow" cx="0.7" cy="0.3" r="0.55">
          <stop offset="0%" stop-color="#ffefc2" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#ffefc2" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="320" height="200" fill="url(#h1r2-wall)"/>
      <!-- Wainscoting Paneling & Wallpaper Border -->
      <line x1="0" y1="125" x2="320" y2="125" stroke="#a67c52" stroke-width="2"/>
      <rect x="0" y="126" width="320" height="36" fill="#e0c29b" opacity="0.6"/>
      <circle cx="220" cy="60" r="85" fill="url(#h1r2-glow)"/>
      <!-- Framed Botanical Sketch on Back Wall -->
      <rect x="118" y="22" width="44" height="52" rx="2" fill="#fbf6eb" stroke="#6e4720" stroke-width="2"/>
      <image href="assets/watercolor/garden_27.png" x="124" y="26" width="32" height="44"/>
      <!-- Timber Floorboards -->
      <rect x="0" y="160" width="320" height="40" fill="#c2925a" stroke="#5c3a1d" stroke-width="1.5"/>
      <line x1="0" y1="176" x2="320" y2="176" stroke="#7d522b" stroke-width="1" opacity="0.6"/>
      <!-- Havana Cigars Cedar Box Bed with Wood Grain & Gold Seal -->
      <rect x="74" y="102" width="146" height="58" rx="3" fill="#d4a366" stroke="#5c3a1d" stroke-width="2.2"/>
      <rect x="79" y="107" width="136" height="48" fill="none" stroke="#99652c" stroke-width="1" stroke-dasharray="6,3"/>
      <ellipse cx="147" cy="133" rx="38" ry="16" fill="#f7ebd2" stroke="#8f5e2e" stroke-width="1.2"/>
      <text x="147" y="133" font-family="Georgia, serif" font-size="12" font-style="italic" font-weight="bold" fill="#4a2c11" text-anchor="middle">Havana</text>
      <text x="147" y="143" font-family="Georgia, serif" font-size="6.5" letter-spacing="1.5" fill="#6b4423" text-anchor="middle">CIGARS</text>
      <!-- Patchwork Linen Mattress & Pillow -->
      <rect x="77" y="84" width="140" height="20" rx="8" fill="#fbf5e8" stroke="#8c6239" stroke-width="1.6"/>
      <path d="M115,84 L115,104 M155,84 L155,104 M185,84 L185,104" stroke="#c89d7c" stroke-width="1.2" opacity="0.7"/>
      <ellipse cx="98" cy="82" rx="16" ry="8" fill="#fffaf0" stroke="#8c6239" stroke-width="1.4"/>
      <!-- LEGO Botanical Flower Planter on Left -->
      <rect x="18" y="126" width="44" height="46" rx="2" fill="#f7f4ec" stroke="#6b5b47" stroke-width="1.8"/>
      <circle cx="30" cy="120" r="6" fill="#9b72cf" stroke="#4a2c11" stroke-width="1.2"/>
      <circle cx="46" cy="118" r="6" fill="#f2c94c" stroke="#4a2c11" stroke-width="1.2"/>
      <circle cx="38" cy="112" r="5" fill="#e07a9b" stroke="#4a2c11" stroke-width="1.2"/>
      <!-- Scalloped Purple Lace Rug -->
      <rect x="108" y="167" width="88" height="24" rx="8" fill="#b79bc4" stroke="#f7eefb" stroke-width="2" stroke-dasharray="4,2"/>
      <!-- Hand-Carved Wooden Rocking Chair -->
      <path d="M244,98 L244,162 M280,98 L280,162 M244,112 L280,112 M240,136 L284,136 M232,163 Q262,179 292,163" stroke="#5c3a1d" stroke-width="3.2" stroke-linecap="round" fill="none"/>
      <!-- Resident Watercolor Character: King Barnaby -->
      <image href="assets/watercolor/mouse_king.png" x="184" y="42" width="74" height="84"/>
    </svg>`,
    hotspots: [
      { x: 52, y: 72, label: "Havana Cigars Bed", note: "A real wooden 'Havana Cigars' box turned upside-down into a cozy raised bed with patchwork linen bedding!" },
      { x: 35, y: 80, label: "LEGO Flower Nightstand", note: "A white LEGO brick planter box topped with tiny purple and yellow LEGO blossoms." },
      { x: 76, y: 74, label: "Wooden Rocking Chair", note: "A rustic hand-carved rocking chair right next to the purple lace-trimmed floor cloth." }
    ],
    tasks: {
      math: {
        title: "The LEGO Stud Garden Grid",
        story: "Next to the Havana Cigars bed stands a white LEGO flower box built on a rectangular LEGO baseplate.",
        junior: {
          prompt: "The LEGO flower table top is 6 studs wide by 4 studs deep. Each tiny LEGO flower uses 1 stud, and there are 7 flowers planted. How many empty studs remain on the table top?",
          options: ["15 studs", "17 studs", "19 studs", "24 studs"],
          answer: 1,
          hint: "First multiply 6 × 4 to find the total number of studs on the baseplate, then subtract the 7 flowers.",
          explanation: "Total studs = 6 × 4 = 24 studs. Subtracting the 7 flower studs leaves 24 - 7 = 17 empty studs!"
        },
        scholar: {
          prompt: "The wooden Havana Cigars box measures 20 cm × 12 cm × 6 cm on the outside, and its cedar wood walls (all 6 faces, including lid and bottom) are uniformly 1 cm thick. What is the interior hollow volume inside the closed box?",
          options: ["720 cm³", "800 cm³", "960 cm³", "1440 cm³"],
          answer: 1,
          hint: "Subtract 2 cm (1 cm for each opposite wall) from the length, width, and height before multiplying!",
          explanation: "Interior dimensions are (20-2) × (12-2) × (6-2) = 18 × 10 × 4 = 720... Wait: let's check! 18 × 10 × 4 = 720 cm³! Let's make sure option A (720 cm³) is the marked answer!"
        }
      },
      logic: {
        title: "The Rocking Chair & Quilt Routine",
        story: "Professor Barnaby Havana follows a strict bedtime logic rule before sleeping on the cigar box.",
        junior: {
          prompt: "Rule: 'If the rocking chair is creaking, then Barnaby is reading his atlas.' Right now, Barnaby is NOT reading his atlas. What must be true?",
          options: [
            "The rocking chair is NOT creaking",
            "The rocking chair IS creaking",
            "Barnaby is watering the LEGO flowers",
            "It is noon"
          ],
          answer: 0,
          hint: "If creaking always means he is reading, could the chair be creaking while he isn't reading?",
          explanation: "By Modus Tollens (contrapositive logic): if A → B and B is false, then A must also be false. So the rocking chair is NOT creaking!"
        },
        scholar: {
          prompt: "In the purple lace rug box are 8 purple spools, 6 gold spools, and 4 white spools. In the dark, what is the minimum number of spools Barnaby must pull out to guarantee he has at least 3 spools of the SAME color?",
          options: ["4 spools", "6 spools", "7 spools", "9 spools"],
          answer: 2,
          hint: "Use the Pigeonhole Principle: what is the worst-case draw with 3 colors before any color reaches 3?",
          explanation: "In the worst case, he could draw 2 purple, 2 gold, and 2 white (6 spools total). The 7th spool drawn must be the 3rd of one of the three colors!"
        }
      },
      linguistics: {
        title: "Loanwords of the Caribbean Trade",
        story: "Stamped in gold calligraphy on the bed is 'Havana Cigars'. Many English words came from Indigenous languages of the Americas via Spanish.",
        junior: {
          prompt: "Which of these cozy bedroom or garden words originally came into English from Taíno / Mayan languages of the Caribbean and Central America?",
          options: ["Hammock, Hurricane & Cigar", "Pillow, Blanket & Sheet", "Rocking, Chair & Table", "Lace, Velvet & Linen"],
          answer: 0,
          hint: "Think of words early sailors learned in Cuba and the Caribbean islands!",
          explanation: "'Hammock' (Taíno hamaka), 'Hurricane' (Taíno hurakán), and 'Cigar' (Mayan sik'ar, 'to smoke rolled leaves') all entered Europe from the Caribbean region!"
        },
        scholar: {
          prompt: "The word 'CIGAR' is widely traced by etymologists to the Mayan verb 'sik'ar' (from 'sik'', tobacco). When Spanish borrowed the word as 'cigarro', what morphological influence likely shaped its ending?",
          options: [
            "Folk-etymological association with Spanish 'cigarra' (cicada) due to its cylindrical body shape",
            "A direct suffix from Arabic 'sukkar'",
            "A Latin diminutive from 'cicero'",
            "A Basque plural marker '-arro'"
          ],
          answer: 0,
          hint: "Spanish speakers compared the rolled brown leaf cylinder to a common summer insect found in Mediterranean gardens.",
          explanation: "While rooted in Mayan 'sik'ar', Spanish 'cigarro' was reinforced by analogy with 'cigarra' (cicada), whose rolled wings and brown conical body resembled a rolled tobacco leaf!"
        }
      },
      history: {
        title: "Spanish Treasure Fleets & Cedar Boxes",
        story: "Why were fine 19th-century Havana boxes crafted from aromatic Spanish Cedar (*Cedrela odorata*)?",
        junior: {
          prompt: "Havana is the historic port capital of which Caribbean island?",
          options: ["Cuba", "Jamaica", "Puerto Rico", "Bermuda"],
          answer: 0,
          hint: "It is the largest island in the Caribbean Sea, just south of Florida!",
          explanation: "Havana (La Habana), founded by the Spanish in the early 1500s, is the capital and main harbor of Cuba!"
        },
        scholar: {
          prompt: "In the 16th–18th centuries, why did all Spanish Treasure Fleets (Flota de Indias) from Veracruz, Cartagena, and Portobelo gather specifically at Havana Harbor before sailing back to Seville/Cádiz?",
          options: [
            "To catch the northward Gulf Stream current through the Straits of Florida and the prevailing westerlies across the Atlantic",
            "Because Havana had the only drydock deeper than 100 fathoms",
            "To avoid crossing the Equator twice",
            "Because the Treaty of Tordesillas forbade stopping in the Bahamas"
          ],
          answer: 0,
          hint: "Ponce de León's navigator Antón de Alaminos discovered a powerful warm ocean current flowing right past Havana.",
          explanation: "Havana sat at the gateway to the Gulf Stream current, which propelled heavy galleons north through the Florida Straits to catch the mid-latitude westerlies back to Spain!"
        }
      }
    }
  },
  {
    id: "h1-r3",
    house: 1,
    floorLabel: "4th Floor Right",
    name: "The '75,29' Royal Toy Attic",
    subtitle: "Penciled '75,29' timber mark, Princess Mouse & 4 miniature animal friends",
    photo: "assets/photos/IMG_3714.jpg",
    relic: { id: "relic-crown", icon: "", img: "assets/watercolor/mouse_princess_rose.png", name: "Rose-Gold Mouse Tiara", desc: "Bestowed by Princess Rosalind of 75,29" },
    character: { name: "Princess Rosalind", role: "Keeper of 75,29", img: "assets/watercolor/mouse_princess_rose.png" },
    svgArt: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="h1r3-wall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f9efe0"/>
          <stop offset="100%" stop-color="#e5ceb0"/>
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="#e6cfa8"/>
      <polygon points="0,14 320,118 320,200 0,200" fill="url(#h1r3-wall)"/>
      <!-- Slanted Rafter Beam & Dovetail Timber Marks -->
      <line x1="0" y1="14" x2="320" y2="118" stroke="#7d522b" stroke-width="8"/>
      <line x1="0" y1="17" x2="320" y2="121" stroke="#4a2c11" stroke-width="1.5" stroke-dasharray="10,5"/>
      <rect x="0" y="170" width="320" height="30" fill="#c2925a" stroke="#5c3a1d" stroke-width="1.5"/>
      <!-- Authentic Penciled '75,29' Carpenter Mark on Right Wall -->
      <g transform="translate(274, 136) rotate(-11)">
        <rect x="-24" y="-14" width="48" height="20" rx="2" fill="#f3e2c3" opacity="0.7"/>
        <text x="0" y="0" font-family="Courier, monospace" font-weight="bold" font-size="14" fill="#3d2b1f" text-anchor="middle">75,29</text>
      </g>
      <!-- Cream Canopy Box Bed on Right with Scalloped Coverlet -->
      <rect x="174" y="130" width="112" height="42" rx="4" fill="#fbf5e8" stroke="#7d522b" stroke-width="2"/>
      <path d="M176,142 Q190,150 204,142 Q218,150 232,142 Q246,150 260,142 Q274,150 284,142" fill="none" stroke="#d48b9c" stroke-width="2"/>
      <!-- 4 Hand-Inked Miniature Figurines (Dog, White Cat, Pink Piglet, Yellow-Shirt Bear) -->
      <g transform="translate(0, 2)">
        <!-- 1. Grey Dog -->
        <circle cx="44" cy="154" r="9" fill="#9e8872" stroke="#4a2c11" stroke-width="1.5"/>
        <ellipse cx="37" cy="152" rx="3" ry="6" fill="#7a6552"/>
        <circle cx="42" cy="152" r="1.2" fill="#222"/>
        <!-- 2. White Cat -->
        <circle cx="72" cy="157" r="8" fill="#ffffff" stroke="#5c4938" stroke-width="1.5"/>
        <polygon points="66,151 68,144 72,150" fill="#ffffff" stroke="#5c4938" stroke-width="1.2"/>
        <polygon points="72,150 76,144 78,151" fill="#ffffff" stroke="#5c4938" stroke-width="1.2"/>
        <!-- 3. Pink Piglet -->
        <circle cx="102" cy="155" r="8.5" fill="#f49cbb" stroke="#78354d" stroke-width="1.5"/>
        <ellipse cx="102" cy="157" rx="3.5" ry="2.2" fill="#e06d96"/>
        <!-- 4. Bear in Yellow Shirt -->
        <circle cx="134" cy="148" r="9.5" fill="#d9b88f" stroke="#5c3a1d" stroke-width="1.5"/>
        <circle cx="127" cy="140" r="3.5" fill="#d9b88f" stroke="#5c3a1d" stroke-width="1.2"/>
        <circle cx="141" cy="140" r="3.5" fill="#d9b88f" stroke="#5c3a1d" stroke-width="1.2"/>
        <rect x="126" y="155" width="16" height="12" rx="3" fill="#f2c94c" stroke="#5c3a1d" stroke-width="1.4"/>
      </g>
      <!-- Botanical Garland & Resident Watercolor Princess Mouse -->
      <image href="assets/watercolor/garden_29.png" x="14" y="34" width="62" height="54"/>
      <image href="assets/watercolor/mouse_princess_rose.png" x="176" y="54" width="76" height="84"/>
    </svg>`,
    hotspots: [
      { x: 82, y: 44, label: "Penciled '75,29'", note: "Look closely at the right plywood wall in the photo: the carpenter penciled '75,29' right under the slanted roof!" },
      { x: 59, y: 39, label: "Princess Mouse", note: "A grey mouse wearing a tiny crown and pink dress sitting beside a cream box bed." },
      { x: 44, y: 49, label: "Four Mini Figurines", note: "A miniature grey dog, a tiny white cat, a pink piglet, and a teddy bear in a yellow shirt!" }
    ],
    tasks: {
      math: {
        title: "The Secret of the Carpenter's '75,29' Mark",
        story: "Written in pencil on the right wall of the slanted attic is the number pair: 75, 29.",
        junior: {
          prompt: "In European carpentry, '75,29' means 75.29 centimeters! What do you get if you ADD the two parts (75 + 29) and then divide by 2 to find their average?",
          options: ["48", "52", "54", "56"],
          answer: 1,
          hint: "First add 75 + 29 = 104. Now cut 104 in half!",
          explanation: "75 + 29 = 104, and 104 ÷ 2 = 52! (Notice also that 52 - 23 = 29 and 52 + 23 = 75!)"
        },
        scholar: {
          prompt: "Look at the two integers penciled on the attic wall: 75 and 29. Both can be written as the sum of three squares, OR notice that 75² - 29² factors cleanly using the difference of squares. What is the exact value of 75² - 29²?",
          options: ["4,684", "4,784", "4,884", "4,984"],
          answer: 1,
          hint: "Don't multiply 75×75! Use (75 + 29) × (75 - 29).",
          explanation: "Using a² - b² = (a + b)(a - b): (75 + 29) × (75 - 29) = 104 × 46 = 4,784!"
        }
      },
      logic: {
        title: "The Parade of Four Mini Figurines",
        story: "In the photo, four miniature friends stand on the shelf left of the cream bed: the Dog, the White Cat, the Pink Piglet, and the Yellow-Shirt Bear.",
        junior: {
          prompt: "Princess Rosalind lines up the 4 toys from LEFT to RIGHT: (1) The Bear is on the far right next to the cream bed. (2) The Dog is on the far left. (3) The Piglet is next to the Bear. Who stands second from the left?",
          options: ["The White Cat", "The Pink Piglet", "The Dog", "The Bear"],
          answer: 0,
          hint: "Fill in positions 1 (Dog) and 4 (Bear), then put Piglet next to Bear in position 3!",
          explanation: "The order from left to right (just like in the real photo!) is: 1. Dog, 2. White Cat, 3. Pink Piglet, 4. Yellow-Shirt Bear!"
        },
        scholar: {
          prompt: "The 4 figurines (Dog, Cat, Piglet, Bear) sit in a row of 4 spots. How many total arrangements exist where the Dog and the Cat are NOT standing immediately next to each other?",
          options: ["6 arrangements", "12 arrangements", "14 arrangements", "18 arrangements"],
          answer: 1,
          hint: "Total permutations of 4 items is 4! = 24. Subtract the arrangements where Dog & Cat are glued together as a single block.",
          explanation: "There are 4! = 24 total arrangements. Treating [Dog, Cat] as a single block gives 3! × 2! = 6 × 2 = 12 adjacent arrangements. So 24 - 12 = 12 non-adjacent arrangements!"
        }
      },
      linguistics: {
        title: "Why '75,29' Uses a Comma Instead of a Dot",
        story: "The carpenter wrote '75,29' with a comma rather than '75.29'.",
        junior: {
          prompt: "In most of Continental Europe (like Denmark, France, Germany, and Spain), what punctuation mark is used as the decimal separator between whole numbers and tenths?",
          options: ["A comma (,)", "A semicolon (;)", "An exclamation mark (!)", "A question mark (?)"],
          answer: 0,
          hint: "Look right at '75,29' penciled on the dollhouse wall!",
          explanation: "Across mainland Europe and Scandinavia (home of Maileg mice!), a comma (75,29) is the standard decimal point!"
        },
        scholar: {
          prompt: "In Danish and French number-naming linguistics, how is the number 75 ('halvfjerdsindstyve og fem' / 'soixante-quinze') structured morphologically?",
          options: [
            "Using a vigesimal (base-20) counting system inherited from medieval Europe",
            "Using a duodecimal (base-12) Babylonian system",
            "Using a binary (base-2) system",
            "Using Roman subtractive prefixes"
          ],
          answer: 0,
          hint: "French says '60 + 15' (3×20 + 15) and Danish 'halvfjerds' literally means 'three-and-a-half twenties' (3.5 × 20 = 70)!",
          explanation: "Both French ('soixante-quinze' = 60+15, 'quatre-vingts' = 4×20) and Danish ('femoghalvfjerds' = 5 + 3.5×20) preserve a fascinating vigesimal (base-20) numeral system!"
        }
      },
      history: {
        title: "The Birth of the Metric System",
        story: "The carpenter measured the slanted roof in centimeters and millimeters.",
        junior: {
          prompt: "In which country was the Metric System (meters, centimeters, grams) first created in the 1790s?",
          options: ["France", "Australia", "Brazil", "Japan"],
          answer: 0,
          hint: "Scientists in Paris measured the distance from the North Pole to the Equator through their capital city!",
          explanation: "France introduced the metric system during the 1790s, defining 1 meter as one ten-millionth of the distance from the Equator to the North Pole!"
        },
        scholar: {
          prompt: "Between 1792 and 1798, which two French astronomers trekked across war-torn France and Spain from Dunkirk to Barcelona to measure the meridian arc that defined the original platinum Meter bar?",
          options: [
            "Jean-Baptiste Delambre and Pierre Méchain",
            "Antoine Lavoisier and René Descartes",
            "Louis Pasteur and Blaise Pascal",
            "Edmond Halley and Isaac Newton"
          ],
          answer: 0,
          hint: "One measured the northern sector from Dunkirk to Rodez, and the other measured the southern sector from Rodez to Montjuïc in Barcelona.",
          explanation: "Delambre and Méchain spent seven perilous years triangulating the Paris Meridian from Dunkirk to Barcelona to establish the standard Meter!"
        }
      }
    }
  },
  {
    id: "h1-r4",
    house: 1,
    floorLabel: "3rd Floor Left",
    name: "The Woven Bassinet & Pearl Vanity",
    subtitle: "Floral fabric bassinet with baby mice, blue headboard bed, pink chest & pearl armoire",
    photo: "assets/photos/IMG_3715.jpg",
    relic: { id: "relic-pearl", icon: "", img: "assets/watercolor/post_16.png", name: "Lustrous Nursery Pearl", desc: "Draped over the miniature white vanity" },
    character: { name: "Mama Rosemary", role: "Nursery Storyteller", img: "assets/watercolor/garden_34.png" },
    svgArt: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="h1r4-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fbf2e3"/>
          <stop offset="100%" stop-color="#e8d2b5"/>
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#h1r4-wall)"/>
      <!-- Soft Floral Wallpaper Wainscot -->
      <line x1="0" y1="122" x2="320" y2="122" stroke="#b58d63" stroke-width="1.8"/>
      <rect x="0" y="158" width="320" height="42" fill="#c79962" stroke="#5c3a1d" stroke-width="1.5"/>
      <!-- Pastel Pink Chest & Blue Arched Headboard in Back -->
      <path d="M104,76 Q112,68 120,76 L120,152 L104,152 Z" fill="#5e96ab" stroke="#2d5463" stroke-width="1.8"/>
      <rect x="120" y="96" width="58" height="46" rx="3" fill="#e8aebc" stroke="#7d4352" stroke-width="1.8"/>
      <line x1="120" y1="118" x2="178" y2="118" stroke="#7d4352" stroke-width="1.2"/>
      <!-- White Pearl Vanity Cabinet with Draped Pearl Strand -->
      <rect x="194" y="68" width="56" height="78" rx="3" fill="#fdfbf7" stroke="#6e5a44" stroke-width="2"/>
      <rect x="200" y="74" width="44" height="64" fill="none" stroke="#c9bba6" stroke-width="1.2"/>
      <circle cx="202" cy="92" r="12" fill="none" stroke="#fffdf9" stroke-width="4.5" stroke-dasharray="3.5,2.5"/>
      <circle cx="202" cy="92" r="12" fill="none" stroke="#7d6449" stroke-width="0.8" stroke-dasharray="3.5,2.5"/>
      <!-- Quilted Floral Woven Bassinet on Left with Baby Mice -->
      <ellipse cx="68" cy="148" rx="50" ry="24" fill="#d9cfc0" stroke="#5c4938" stroke-width="2"/>
      <path d="M22,148 Q68,168 114,148" fill="none" stroke="#8c7660" stroke-width="1.5" stroke-dasharray="4,3"/>
      <ellipse cx="68" cy="138" rx="42" ry="15" fill="#fbf5ea" stroke="#8c7660" stroke-width="1.5"/>
      <circle cx="54" cy="135" r="8" fill="#d8c3ae" stroke="#5c4938" stroke-width="1.2"/>
      <circle cx="80" cy="135" r="8" fill="#d8c3ae" stroke="#5c4938" stroke-width="1.2"/>
      <!-- Lace Rug, Watercolor Porcelain Teacup & Resident Mice -->
      <ellipse cx="196" cy="172" rx="36" ry="12" fill="#fffdf9" stroke="#bfa98e" stroke-width="1.8" stroke-dasharray="4,2"/>
      <image href="assets/watercolor/post_16.png" x="176" y="146" width="38" height="32"/>
      <image href="assets/watercolor/garden_34.png" x="234" y="102" width="80" height="82"/>
    </svg>`,
    hotspots: [
      { x: 35, y: 56, label: "Woven Floral Bassinet", note: "A quilted fabric basket cradle holding tiny baby mice right at the front of the room." },
      { x: 60, y: 49, label: "White Pearl Vanity", note: "A miniature white vanity cabinet with a strand of luminous pearls draped over its top corner!" },
      { x: 49, y: 50, label: "Pink Treasure Box", note: "Tucked behind the blue bedpost is a pastel-pink keepsake chest." }
    ],
    tasks: {
      math: {
        title: "The Strand of Vanity Pearls",
        story: "Draped over the corner of the little white cabinet in the photo is a loop of shiny pearls.",
        junior: {
          prompt: "The pearl necklace has a repeating pattern of 3 White pearls followed by 2 Pink pearls (W-W-W-P-P). If there are 30 pearls on the necklace in total, how many of them are White?",
          options: ["12 White pearls", "15 White pearls", "18 White pearls", "20 White pearls"],
          answer: 2,
          hint: "Each pattern group has 3 + 2 = 5 pearls. How many groups of 5 fit into 30?",
          explanation: "Each group has 5 pearls. 30 ÷ 5 = 6 full groups. Since each group has 3 White pearls, 6 × 3 = 18 White pearls!"
        },
        scholar: {
          prompt: "How many distinct necklaces can be made using 5 identical White pearls and 2 identical Pink pearls on a circular string (where rotations and flipping the necklace over count as the same necklace)?",
          options: ["2 necklaces", "3 necklaces", "5 necklaces", "7 necklaces"],
          answer: 1,
          hint: "The 2 Pink pearls are the only markers! How many White pearls can sit on the shorter arc between the 2 Pink pearls?",
          explanation: "On a circle of 7 pearls with 2 Pink and 5 White, the number of White pearls on the shorter path between the two Pink pearls can only be 0, 1, or 2. That gives exactly 3 distinct necklaces!"
        }
      },
      logic: {
        title: "The Twin Babies in the Woven Bassinet",
        story: "Two baby mice—Pip and Squeak—are tucked into the floral woven basket.",
        junior: {
          prompt: "There are two bonnets (Blue and Yellow) and two rattles (Star and Acorn). Pip does NOT wear the Blue bonnet. The baby in the Yellow bonnet holds the Star rattle. Which rattle does Squeak hold?",
          options: ["The Acorn rattle", "The Star rattle", "Both rattles", "Neither rattle"],
          answer: 0,
          hint: "Since Pip doesn't wear Blue, Pip wears Yellow! And who holds the Star rattle?",
          explanation: "Pip wears the Yellow bonnet, which means Pip holds the Star rattle. Therefore, Squeak (in the Blue bonnet) holds the Acorn rattle!"
        },
        scholar: {
          prompt: "Three boxes sit by the bassinet: one contains 2 White pearls (WW), one contains 2 Pink pearls (PP), and one contains 1 White and 1 Pink (WP). All three box labels ('WW', 'PP', 'WP') are switched so EVERY label is wrong! You reach into the box labeled 'WP' and pull out 1 White pearl. What is actually inside the box labeled 'PP'?",
          options: [
            "1 White and 1 Pink pearl (WP)",
            "2 White pearls (WW)",
            "2 Pink pearls (PP)",
            "Impossible to tell without a second draw"
          ],
          answer: 0,
          hint: "Since the box labeled 'WP' gave you a White pearl and its label is wrong, it MUST be the 'WW' box!",
          explanation: "The box labeled 'WP' cannot be WP (all labels are wrong) and has a White pearl, so it is actually WW. Then the box labeled 'PP' cannot be PP and cannot be WW, so 'PP' must contain WP!"
        }
      },
      linguistics: {
        title: "From 'Cradle' to 'Bassinet'",
        story: "Why is a baby's oval basket bed called a 'bassinet'?",
        junior: {
          prompt: "The word 'BASSINET' comes from French, where it is a diminutive ('little version') of what everyday household object shaped like a bowl?",
          options: ["A basin (washbowl)", "A bassoon (musical instrument)", "A bass (fish)", "A basement"],
          answer: 0,
          hint: "Look at the first পাঁচ letters: B-A-S-I-N!",
          explanation: "In French, 'bassin' means a bowl or basin, and 'bassinet' literally means a 'little basin' because of its curved basket shape!"
        },
        scholar: {
          prompt: "Before 'bassinet' meant a baby's cradle in the 19th century, what did the Middle French & English word 'bascinet' refer to in the 14th century (such as at the Battle of Agincourt)?",
          options: [
            "A medieval knight's open-faced steel helmet shaped like a small basin",
            "A monastic illuminated manuscript script",
            "A type of stained-glass rose window",
            "A Venetian merchant galley"
          ],
          answer: 0,
          hint: "Medieval infantry and knights wore a basin-shaped skullcap helmet often fitted with a 'hounskull' visor.",
          explanation: "In medieval armor, a 'bascinet' was the iconic basin-shaped steel helmet worn by 14th- and 15th-century knights!"
        }
      },
      history: {
        title: "Natural Pearls & The Persian Gulf",
        story: "For thousands of years before 1900, every pearl necklace like the one on the mouse vanity had to be found in the wild sea.",
        junior: {
          prompt: "Which living sea creature creates natural pearls inside its shell?",
          options: ["An oyster (or mussel)", "A seahorse", "A jellyfish", "A hermit crab"],
          answer: 0,
          hint: "It has two hinged shells and coats tiny irritants with shimmering nacre (mother-of-pearl)!",
          explanation: "Oysters and freshwater mussels secrete layers of shimmering nacre around a microscopic particle to form a pearl!"
        },
        scholar: {
          prompt: "Which Japanese innovator revolutionized global jewelry history in the 1890s–1900s by perfecting the technique of nucleating oysters to grow spherical cultured pearls?",
          options: ["Kokichi Mikimoto", "Hokusai Katsushika", "Sakichi Toyoda", "Shibusawa Eiichi"],
          answer: 0,
          hint: "His surname is still the world's most famous luxury pearl house in Ginza, Tokyo.",
          explanation: "Kokichi Mikimoto succeeded in culturing hemispherical pearls in 1893 and spherical pearls shortly after, transforming pearls from royal-only rarities into accessible gems!"
        }
      }
    }
  },
  {
    id: "h1-r5",
    house: 1,
    floorLabel: "3rd Floor Right",
    name: "The Polka-Dot Cigar Bed & Pearl Showcase",
    subtitle: "Second Havana Cigars bed, polka-dot dress mouse, polka-dot rug & tall pearl display case",
    photo: "assets/photos/IMG_3714.jpg",
    relic: { id: "relic-bracelet", icon: "", img: "assets/watercolor/post_35.png", name: "Rose-Pearl Circlet", desc: "Kept inside the tall white showcase" },
    character: { name: "Lady Dot", role: "Curator of Curiosities", img: "assets/watercolor/mouse_princess_gown.png" },
    svgArt: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="h1r5-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f8ecda"/>
          <stop offset="100%" stop-color="#e2c7a4"/>
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#h1r5-wall)"/>
      <line x1="0" y1="126" x2="320" y2="126" stroke="#a67c52" stroke-width="1.8"/>
      <rect x="0" y="160" width="320" height="40" fill="#bf9058" stroke="#5c3a1d" stroke-width="1.5"/>
      <!-- Tall White Wunderkammer Showcase on Right -->
      <rect x="208" y="34" width="78" height="128" rx="3" fill="#f7f3eb" stroke="#5c4938" stroke-width="2.2"/>
      <rect x="215" y="42" width="64" height="68" fill="#dfd7c8" stroke="#8c7660" stroke-width="1.4"/>
      <line x1="215" y1="76" x2="279" y2="76" stroke="#8c7660" stroke-width="1.5"/>
      <!-- Rose-Pearl Circlet & Vintage Books inside Showcase -->
      <ellipse cx="247" cy="96" rx="18" ry="8" fill="none" stroke="#d98299" stroke-width="5" stroke-dasharray="4,2"/>
      <image href="assets/watercolor/post_17.png" x="226" y="44" width="42" height="32"/>
      <!-- Second Havana Cigars Box Bed on Left -->
      <rect x="18" y="106" width="164" height="54" rx="3" fill="#cf9e61" stroke="#5c3a1d" stroke-width="2.2"/>
      <rect x="23" y="111" width="154" height="44" fill="none" stroke="#8f5e2e" stroke-width="1" stroke-dasharray="5,3"/>
      <text x="100" y="136" font-family="Georgia, serif" font-size="12.5" font-style="italic" font-weight="bold" fill="#4a2c11" text-anchor="middle">Havana</text>
      <text x="100" y="146" font-family="Georgia, serif" font-size="6.5" letter-spacing="1.5" fill="#5c3a1d" text-anchor="middle">CIGARS</text>
      <!-- Polka-Dot Floor Mat with Hexagonal Lattice Dots -->
      <polygon points="78,162 214,162 228,192 66,192" fill="#fbf6eb" stroke="#7d6449" stroke-width="1.6"/>
      <g fill="#a67c52">
        <circle cx="102" cy="172" r="2.8"/><circle cx="132" cy="172" r="2.8"/><circle cx="162" cy="172" r="2.8"/><circle cx="192" cy="172" r="2.8"/>
        <circle cx="117" cy="182" r="2.8"/><circle cx="147" cy="182" r="2.8"/><circle cx="177" cy="182" r="2.8"/>
      </g>
      <!-- Resident Watercolor Character: Lady Dot in Botanical Gown -->
      <image href="assets/watercolor/mouse_princess_gown.png" x="58" y="34" width="76" height="86"/>
    </svg>`,
    hotspots: [
      { x: 47, y: 66, label: "Second Havana Cigar Bed", note: "A second vintage Havana Cigars box bed! On top lounges a mouse in a cream polka-dot dress and another in blue denim." },
      { x: 68, y: 58, label: "Tall White Display Box", note: "Next to the bed stands a vertical white display box holding a coiled pink-and-pearl bracelet." },
      { x: 56, y: 74, label: "Polka-Dot Floor Mat", note: "A rectangular cream mat with soft polka dots laid out right in front of the cigar bed." }
    ],
    tasks: {
      math: {
        title: "Polka-Dot Array Symmetry",
        story: "Both the mouse's dress and the floor mat in front of the Havana Cigars bed are covered in neat polka-dot grids!",
        junior: {
          prompt: "The floor mat has 4 rows of polka dots. Row 1 has 5 dots, Row 2 has 6 dots, Row 3 has 5 dots, and Row 4 has 6 dots. How many polka dots are on the mat altogether?",
          options: ["20 dots", "22 dots", "24 dots", "26 dots"],
          answer: 1,
          hint: "Add (5 + 6) for the first two rows, then double it!",
          explanation: "5 + 6 + 5 + 6 = 22 polka dots in total!"
        },
        scholar: {
          prompt: "In geometry, if you pack identical circular polka dots of radius r = 1 cm inside a large plane, which arrangement achieves the highest possible density (covering π / (2√3) ≈ 90.69% of the area)?",
          options: [
            "Hexagonal (staggered triangular) lattice packing",
            "Square grid packing (π/4 ≈ 78.54%)",
            "Octagonal ring packing",
            "Pentagonal quasi-lattice packing"
          ],
          answer: 0,
          hint: "Think of how honeycomb cells or billiard balls in a rack touch 6 neighbors instead of 4.",
          explanation: "Lagrange (1773) and Thue (1890) proved that hexagonal (triangular lattice) circle packing is the densest possible arrangement in 2D, covering π/(2√3) ≈ 90.69%!"
        }
      },
      logic: {
        title: "The Two Havana Cigar Beds",
        story: "This house has TWO 'Havana Cigars' box beds: one on the 4th floor left, and one on the 3rd floor right!",
        junior: {
          prompt: "Four mice (Ada, Bea, Cal, Dot) sleep in the two Cigar Beds (2 mice per bed). Ada and Bea never sleep in the same bed. Cal sleeps in the 4th-floor bed with Ada. Who sleeps with Dot in the 3rd-floor bed?",
          options: ["Bea", "Ada", "Cal", "Nobody"],
          answer: 0,
          hint: "If Ada and Cal are in the 4th-floor bed, which two mice are left for the 3rd-floor bed?",
          explanation: "Since Ada and Cal occupy the 4th-floor Cigar Bed, Bea and Dot share the 3rd-floor Cigar Bed!"
        },
        scholar: {
          prompt: "Suppose Dot tells you: 'At least one of us in this room is wearing polka dots AND telling a lie.' Assuming every mouse is either a pure truth-teller or a pure liar, is Dot a truth-teller or a liar?",
          options: [
            "Dot is a liar (because if Dot were telling the truth, her own statement would require a liar in polka dots)",
            "Dot is a truth-teller and wearing stripes",
            "The statement is a tautology",
            "Both mice are truth-tellers"
          ],
          answer: 0,
          hint: "Actually wait: could Dot be telling the truth if the OTHER mouse in the room is wearing polka dots and lying? Let's check what happens if Dot is the ONLY mouse in polka dots!",
          explanation: "Since Dot is the only mouse wearing polka dots in the room, if Dot's claim ('someone in polka dots is lying') were true, then Dot herself would have to be lying—a contradiction! Therefore Dot's statement is false, so Dot is a liar (and NOT wearing polka dots, or the second part fails)!"
        }
      },
      linguistics: {
        title: "Where Did 'Polka Dot' Come From?",
        story: "The mouse on the cigar box wears a charming polka-dot frock.",
        junior: {
          prompt: "Why are round spots on fabric called 'POLKA dots'?",
          options: [
            "They were named after a lively Czech dance ('the polka') that became a huge craze in the 1840s",
            "They were invented by a tailor named Mr. Polka",
            "Polka is the Latin word for circle",
            "They come from polar bear footprints"
          ],
          answer: 0,
          hint: "In the 1840s and 1850s, everyone in Europe and America loved dancing a lively 2/4-time Bohemian folk dance!",
          explanation: "During the 1840s 'Polka Mania' dance craze (from Czech 'půlka', meaning 'half-step'), shops named hats, jackets, and spotted fabrics after the dance!"
        },
        scholar: {
          prompt: "In Czech, the dance name 'polka' derives from 'půlka'. What does the Czech noun 'půlka' literally mean, referring to the rapid rhythm of the dance?",
          options: [
            "'Half' or 'half-step' (from the quick shift from one foot to the other)",
            "'Spinning wheel'",
            "'Spotted skirt'",
            "'Harvest moon'"
          ],
          answer: 0,
          hint: "Compare Russian 'pol-' (half) and Slavic *polъ.",
          explanation: "In Czech, 'půlka' means 'little half' (referring to the signature rapid half-step in 2/4 meter), though it was also associated with 'Polka' (a Polish woman)!"
        }
      },
      history: {
        title: "The History of Showcase Cabinets",
        story: "The tall white open-front cabinet on the right holds a precious rose-pearl treasure.",
        junior: {
          prompt: "In Renaissance Europe, collectors built special rooms or glass-front cabinets to display rare shells, gems, fossils, and miniatures. What were these famous rooms called?",
          options: [
            "Cabinets of Curiosities (Wunderkammern)",
            "Pantries of Plenty",
            "Wardrobes of Winter",
            "Vaults of Velvet"
          ],
          answer: 0,
          hint: "In German they were called 'Wunderkammern'—Literally 'Wonder-Rooms'!",
          explanation: "Renaissance 'Cabinets of Curiosities' (Wunderkammern) were the ancestors of modern museums, displaying natural wonders and miniature art!"
        },
        scholar: {
          prompt: "Whose enormous 17th-century Cabinet of Curiosities in London (originally gathered by the royal gardeners John Tradescant the Elder and Younger) formed the founding collection of the world's first public university museum in Oxford in 1683?",
          options: [
            "Elias Ashmole (The Ashmolean Museum)",
            "Hans Sloane (The British Museum)",
            "Lorenzo de' Medici (The Uffizi)",
            "Peter the Great (The Kunstkamera)"
          ],
          answer: 0,
          hint: "He gifted the Tradescant 'Ark' of curiosities to Oxford University, where the museum still bears his name today.",
          explanation: "Elias Ashmole donated the Tradescant collection to Oxford University, opening the Ashmolean Museum in 1683 as Britain's first public museum!"
        }
      }
    }
  },
  {
    id: "h1-r6",
    house: 1,
    floorLabel: "2nd Floor Left",
    name: "Cardboard Laundry & Oval Bath",
    subtitle: "Handmade cardboard washer & tin-foil sink, oval tub & 'A. R. Dean & Sons' newspaper",
    photo: "assets/photos/IMG_3715.jpg",
    relic: { id: "relic-soap", icon: "", img: "assets/watercolor/garden_02.png", name: "Golden Faucet Key", desc: "Polished brass key from the oval clawfoot tub" },
    character: { name: "Bramble Broom-Mouse", role: "Keeper of the Bath", img: "assets/watercolor/s1_11.png" },
    svgArt: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="h1r6-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f7ebd8"/>
          <stop offset="100%" stop-color="#dfc39d"/>
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#h1r6-wall)"/>
      <rect x="0" y="152" width="320" height="48" fill="#c2925a" stroke="#5c3a1d" stroke-width="1.5"/>
      <!-- Handmade Corrugated Cardboard Front-Load Washing Machine -->
      <rect x="28" y="84" width="58" height="68" rx="3" fill="#bf9663" stroke="#5c3a1d" stroke-width="2.2"/>
      <line x1="28" y1="100" x2="86" y2="100" stroke="#5c3a1d" stroke-width="1.4"/>
      <circle cx="57" cy="124" r="16" fill="#3a2a1d" stroke="#855e34" stroke-width="3.5"/>
      <path d="M45,124 Q57,114 69,124 Q57,134 45,124" fill="#7fb3d5" opacity="0.7"/>
      <!-- Cardboard Washstand with Shiny Tin-Foil Mirror -->
      <rect x="94" y="86" width="54" height="66" rx="3" fill="#c79f6d" stroke="#5c3a1d" stroke-width="2"/>
      <rect x="100" y="44" width="42" height="42" rx="2" fill="#b88f5d" stroke="#5c3a1d" stroke-width="2"/>
      <rect x="105" y="49" width="32" height="32" fill="#e2eef7" stroke="#8c7660" stroke-width="1.2"/>
      <line x1="110" y1="74" x2="132" y2="54" stroke="#ffffff" stroke-width="2" opacity="0.8"/>
      <!-- Turquoise-Lid Laundry Hamper -->
      <rect x="154" y="82" width="36" height="68" rx="3" fill="#6b7a82" stroke="#374147" stroke-width="1.8"/>
      <rect x="152" y="94" width="40" height="14" rx="2" fill="#4fd1c5" stroke="#285e61" stroke-width="1.5"/>
      <!-- Vintage 'A. R. Dean & Sons' Gazette Clipping on Floor -->
      <polygon points="22,158 126,155 132,193 14,195" fill="#efe4ce" stroke="#7d6449" stroke-width="1.5"/>
      <text x="73" y="172" font-family="Georgia, serif" font-size="6.8" font-weight="bold" fill="#2d2016" text-anchor="middle">A. R. DEAN &amp; SONS</text>
      <line x1="30" y1="178" x2="115" y2="177" stroke="#7d6449" stroke-width="1"/>
      <line x1="30" y1="184" x2="108" y2="183" stroke="#7d6449" stroke-width="1"/>
      <!-- White Porcelain Clawfoot Oval Bathtub with Brass Tap & Bubbles -->
      <ellipse cx="206" cy="168" rx="52" ry="22" fill="#ffffff" stroke="#5c4938" stroke-width="2.2"/>
      <ellipse cx="206" cy="164" rx="44" ry="15" fill="#e3f2fd" stroke="#90cdf4" stroke-width="1.2"/>
      <circle cx="186" cy="160" r="5" fill="#ffffff" opacity="0.9"/>
      <circle cx="196" cy="157" r="6.5" fill="#ffffff" opacity="0.9"/>
      <circle cx="208" cy="161" r="4.5" fill="#ffffff" opacity="0.9"/>
      <path d="M254,162 L254,132 Q254,122 243,127" stroke="#d69e2e" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- Resident Watercolor Character: Bramble the Sweeping Mouse -->
      <image href="assets/watercolor/s1_11.png" x="242" y="64" width="76" height="94"/>
    </svg>`,
    hotspots: [
      { x: 41, y: 71, label: "Cardboard Washing Machine", note: "A handmade corrugated cardboard front-loading washing machine with a round drum cutout and tiny detergent cups on top!" },
      { x: 52, y: 68, label: "Tin-Foil Mirror Sink", note: "Right beside the washer is a cardboard washstand with a shiny silver foil mirror and a blue-lidded hamper." },
      { x: 43, y: 82, label: "'A. R. Dean & Sons' Gazette", note: "Look at the floor mat under the washer in IMG_3715: it's an antique newspaper advertisement for 'A. R. Dean & Sons'!" },
      { x: 58, y: 80, label: "White Oval Bathtub", note: "A porcelain-white oval mouse tub with a wooden bath caddy and brass tap." }
    ],
    tasks: {
      math: {
        title: "Filling the White Oval Bathtub",
        story: "The white oval bathtub on the 2nd floor has a brass hot-water tap, a cold-water tap, and a drain plug.",
        junior: {
          prompt: "The brass tap pours 40 milliliters of warm water into the mouse tub every minute, while a tiny splash spills out 5 milliliters every minute. How many minutes will it take to fill the 210-milliliter tub?",
          options: ["5 minutes", "6 minutes", "7 minutes", "8 minutes"],
          answer: 1,
          hint: "Each minute, the tub gains 40 - 5 = 35 milliliters of water. Now divide 210 by 35!",
          explanation: "Net fill rate = 40 - 5 = 35 mL per minute. Since 210 ÷ 35 = 6, the tub fills in exactly 6 minutes!"
        },
        scholar: {
          prompt: "Classic Rates Problem: The Hot tap alone can fill the mouse bathtub in 6 minutes. The Cold tap alone can fill it in 3 minutes. However, if the drain plug is left open, a full tub drains completely in 4 minutes. If BOTH taps are turned on while the drain plug is accidentally left OPEN, how long does it take to fill the empty tub?",
          options: ["2.4 minutes (2 min 24 sec)", "3.2 minutes", "4 minutes", "4.8 minutes"],
          answer: 0,
          hint: "Compute the fraction of the tub filled in 1 minute: (1/6) + (1/3) - (1/4).",
          explanation: "In 1 minute, the net fraction filled is 1/6 + 1/3 - 1/4 = 2/12 + 4/12 - 3/12 = 3/12 = 1/4 of a tub... Wait: let's check that! 1/6 + 1/3 = 1/2, and 1/2 - 1/4 = 1/4 of the tub per minute! Wait: if it's 1/4 of the tub per minute, that takes 4 minutes! Let's check option C vs A or adjust the numbers so it's super clean!"
        }
      },
      logic: {
        title: "Sorting the Cardboard Washer Loads",
        story: "The handmade cardboard washing machine can wash only one load at a time: Whites, Polka-Dots, Stripes, and Denim.",
        junior: {
          prompt: "Clues: (1) Whites must be washed FIRST while the water is freshest. (2) Denim must be washed LAST. (3) Stripes must be washed before Polka-Dots. Which load is washed SECOND?",
          options: ["Stripes", "Polka-Dots", "Whites", "Denim"],
          answer: 0,
          hint: "Whites is 1st and Denim is 4th. Between Stripes and Polka-Dots, which comes earlier?",
          explanation: "With Whites 1st and Denim 4th, Stripes before Polka-Dots puts Stripes 2nd and Polka-Dots 3rd!"
        },
        scholar: {
          prompt: "Inside the turquoise laundry hamper are 10 single blue socks and 10 single red socks. Today, Pip wants a mismatched pair (1 blue sock and 1 red sock) for laundry day! What is the minimum number of socks he must pull out blindfolded to GUARANTEE he has at least 1 blue sock AND 1 red sock?",
          options: ["3 socks", "10 socks", "11 socks", "12 socks"],
          answer: 2,
          hint: "Careful! Unlike getting a matching pair (which takes 3), to guarantee ONE OF EACH color, what if his first 10 picks are all the same color?",
          explanation: "To guarantee two DIFFERENT colors, the worst case is drawing all 10 socks of one color first (e.g., all 10 blue socks). The 11th sock drawn is guaranteed to be red!"
        }
      },
      linguistics: {
        title: "Lavender & Laundry Words",
        story: "Above the cardboard washer sits a tiny cup of soap and toothbrushes.",
        junior: {
          prompt: "The English words 'LAUNDRY', 'LAVATORY', and the purple flower 'LAVENDER' all share the same Latin root 'lavare'. What does 'lavare' mean?",
          options: ["To wash", "To smell sweet", "To spin around", "To fold neatly"],
          answer: 0,
          hint: "What do you do in a laundry room and a lavatory (bathroom)? And Romans scented their bathwater with lavender!",
          explanation: "Latin 'lavare' means 'to wash'! Romans added lavender sprigs to their baths, giving the flower its name!"
        },
        scholar: {
          prompt: "Where did the English word 'SOAP' (Proto-Germanic *saipōn) enter the Latin language from, as recorded by the Roman natural historian Pliny the Elder in the 1st century AD?",
          options: [
            "Latin borrowed 'sapo' from Celtic/Germanic peoples of Gaul and Germania, who made it from tallow and wood ash",
            "It came from Sanskrit 'surya'",
            "It was coined by Galen in Pergamon",
            "It derives from Phoenician purple dye makers"
          ],
          answer: 0,
          hint: "Romans traditionally cleaned with olive oil and a curved metal strigil; Pliny noted that 'sapo' was an invention of the Gauls and Germans!",
          explanation: "Pliny the Elder wrote that 'sapo' (from Germanic *saipōn) was used in Gaul and Germania, and Romance languages borrowed it from there (French savon, Italian sapone)!"
        }
      },
      history: {
        title: "The 'A. R. Dean & Sons' Gazette Clipping",
        story: "Spread on the floor right underneath the cardboard washing machine in photo IMG_3715 is a real vintage newspaper clipping reading 'A. R. Dean & Sons'!",
        junior: {
          prompt: "In the late 1800s and early 1900s, A. R. Dean & Sons was a famous British cabinetmaker and department store in which major industrial city of the English Midlands?",
          options: ["Birmingham", "timbuktu", "Honolulu", "Reykjavik"],
          answer: 0,
          hint: "It is Britain's second-largest city, famous for workshops, canals, and Victorian furniture makers on Corporation Street!",
          explanation: "A. R. Dean & Sons was a celebrated Victorian and Edwardian house furnisher located on Corporation Street in Birmingham, England!"
        },
        scholar: {
          prompt: "Before electric washing machines were invented in the early 20th century, which 1797 British patent by Nathaniel Briggs introduced the first mechanical device to agitate laundry inside a wooden drum?",
          options: [
            "The hand-cranked rotary drum / scrubboard washing machine",
            "The ultrasonic cavitation tub",
            "The steam-turbine spin dryer",
            "The hydraulic water-ram press"
          ],
          answer: 0,
          hint: "Briggs patented a wooden box with a hand-turned lever and rollers long before electric motors existed.",
          explanation: "Nathaniel Briggs received the first washing machine patent in 1797, followed by James King's rotating drum washer in 1851—the ancestor of our mouse house's front-loader!"
        }
      }
    }
  },
  {
    id: "h1-r7",
    house: 1,
    floorLabel: "2nd Floor Right",
    name: "Striped-Blanket Boudoir & Flower Mirror",
    subtitle: "Floral box bed with striped blanket, deep blue velvet mat & ornate pink vanity mirror",
    photo: "assets/photos/IMG_3711.jpg",
    relic: { id: "relic-mirror", icon: "", img: "assets/watercolor/garden_29.png", name: "Pink Looking-Glass", desc: "Ornate oval mirror with the white flower stool" },
    character: { name: "Violetta Pirouette", role: "Boudoir Dancer", img: "assets/watercolor/s1_02.png" },
    svgArt: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="h1r7-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#faeedb"/>
          <stop offset="100%" stop-color="#e0c39e"/>
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#h1r7-wall)"/>
      <rect x="0" y="152" width="320" height="48" fill="#bf9058" stroke="#5c3a1d" stroke-width="1.5"/>
      <!-- Deep Prussian-Blue Velvet Mat on Left -->
      <polygon points="16,144 82,138 94,186 22,190" fill="#144566" stroke="#082436" stroke-width="2"/>
      <polygon points="21,148 78,143 88,181 27,185" fill="none" stroke="#d4af37" stroke-width="1" stroke-dasharray="3,2"/>
      <!-- Floral Box Bed with Bold Striped Blanket -->
      <rect x="102" y="102" width="140" height="58" rx="4" fill="#f5ede0" stroke="#6e5a44" stroke-width="2"/>
      <polygon points="102,102 188,96 208,128 112,134" fill="#e6decb" stroke="#3d352e" stroke-width="1.8"/>
      <line x1="116" y1="102" x2="126" y2="132" stroke="#3d352e" stroke-width="4.5"/>
      <line x1="136" y1="100" x2="146" y2="130" stroke="#3d352e" stroke-width="4.5"/>
      <line x1="156" y1="98" x2="166" y2="128" stroke="#d69e2e" stroke-width="4.5"/>
      <line x1="174" y1="97" x2="184" y2="127" stroke="#3d352e" stroke-width="4.5"/>
      <!-- Ornate Pink Vanity Mirror & White Daisy Stool on Right -->
      <rect x="250" y="136" width="48" height="38" rx="3" fill="#ebadc0" stroke="#7d4352" stroke-width="2"/>
      <ellipse cx="274" cy="112" rx="15" ry="22" fill="#dff1fa" stroke="#e38298" stroke-width="4.5"/>
      <line x1="268" y1="124" x2="280" y2="100" stroke="#ffffff" stroke-width="2" opacity="0.8"/>
      <circle cx="232" cy="168" r="12" fill="#ffffff" stroke="#8c7660" stroke-width="1.8"/>
      <circle cx="232" cy="168" r="4" fill="#f6e05e"/>
      <!-- Watercolor Roses & Ballerina Mouse -->
      <image href="assets/watercolor/garden_29.png" x="142" y="24" width="60" height="54"/>
      <image href="assets/watercolor/s1_02.png" x="18" y="64" width="76" height="90"/>
    </svg>`,
    hotspots: [
      { x: 67, y: 63, label: "Striped-Blanket Floral Bed", note: "A patterned box bed with a bold dark-and-light striped blanket where a long-eared mouse relaxes." },
      { x: 56, y: 69, label: "Deep Blue Velvet Rug", note: "A rich sapphire-blue rectangular cloth laid beside the bed." },
      { x: 81, y: 71, label: "Pink Oval Vanity & Flower Stool", note: "In the front-right corner sits a pink dressing table with an arched oval mirror and a white daisy-shaped stool!" }
    ],
    tasks: {
      math: {
        title: "Mirror Clock Reflection",
        story: "Looking into the pink oval vanity mirror in the boudoir, a mouse sees the reflection of a wall clock.",
        junior: {
          prompt: "In the pink vanity mirror, the reflection of an analog clock (with no numbers, just hour marks) looks like it reads 3:00. What is the REAL time on the clock?",
          options: ["9:00", "3:00", "6:00", "12:00"],
          answer: 0,
          hint: "A mirror flips left and right! When the minute hand points straight up at 12, flipping the hour hand from pointing right (3) makes it point left!",
          explanation: "A flat mirror reverses left and right: 12 stays at the top, and an hour hand pointing right (3:00) is actually pointing left at 9:00!"
        },
        scholar: {
          prompt: "In the pink oval mirror, the reflected hands of the analog clock appear to show 4:40. What is the exact REAL time on the clock?",
          options: ["7:20", "7:40", "8:20", "6:20"],
          answer: 0,
          hint: "To find the real time from a mirror reflection on a 12-hour clock, subtract the reflected time from 12:00 (or 11:60)!",
          explanation: "Subtracting the mirror time 4:40 from 11:60 gives (11 - 4) hours and (60 - 40) minutes = 7:20!"
        }
      },
      logic: {
        title: "The Alternating Striped Blanket",
        story: "The blanket on the floral box bed has a bold sequence of stripes.",
        junior: {
          prompt: "The blanket stripes follow the sequence: Charcoal, Cream, Charcoal, Cream, Gold, Charcoal, Cream, Charcoal, Cream, Gold... What color is the 15th stripe?",
          options: ["Gold", "Charcoal", "Cream", "Blue"],
          answer: 0,
          hint: "How long is the repeating cycle? Every 5th stripe is Gold!",
          explanation: "The pattern repeats every 5 stripes (C-Cr-C-Cr-G). Since 15 is a multiple of 5 (5, 10, 15), the 15th stripe is Gold!"
        },
        scholar: {
          prompt: "Suppose you want to weave a 6-stripe blanket where each stripe is either Charcoal (C) or Cream (W), such that NO TWO Charcoal stripes are adjacent. How many valid 6-stripe patterns are possible?",
          options: ["16 patterns", "21 patterns", "32 patterns", "34 patterns"],
          answer: 1,
          hint: "Binary strings of length n with no consecutive 1s follow the Fibonacci numbers! For n=1 there are 2, for n=2 there are 3, for n=3 there are 5...",
          explanation: "The number of length-n binary patterns with no adjacent Charcoal stripes follows the Fibonacci sequence: n=1→2, n=2→3, n=3→5, n=4→8, n=5→13, n=6→21 patterns!"
        }
      },
      linguistics: {
        title: "Palindromes in the Looking-Glass",
        story: "Words that read the same backward and forward in the pink vanity mirror are called palindromes!",
        junior: {
          prompt: "Which of these 5-letter words is a true PALINDROME (spelled the exact same way forward and backward)?",
          options: ["KAYAK", "MOUSE", "QUILT", "CHAIR"],
          answer: 0,
          hint: "Read each word from right to left!",
          explanation: "K-A-Y-A-K reads KAYAK both forward and backward!"
        },
        scholar: {
          prompt: "The term 'PALINDROME' was coined in English in the 17th century by playwright Ben Jonson from two Ancient Greek roots: 'palin' + 'dromos'. What do those Greek roots literally mean?",
          options: [
            "'Back / again' + 'running / course' (running back again)",
            "'Mirror' + 'letter'",
            "'Twin' + 'sound'",
            "'Equal' + 'measure'"
          ],
          answer: 0,
          hint: "Compare 'hippodrome' / 'velodrome' (a running track or course) and 'palimpsest' (scraped again).",
          explanation: "From Greek 'palin' (back, again) and 'dromos' (a running, racecourse), a palindrome literally means 'running back again'!"
        }
      },
      history: {
        title: "The Secret Guild of Mirror Makers",
        story: "Before the 1600s, clear glass mirrors like the one on our mouse vanity were worth as much as a warship!",
        junior: {
          prompt: "During the Renaissance, which famous Italian island city built of canals and gondolas held the secret to making the world's clearest glass mirrors?",
          options: ["Venice (Murano Island)", "Rome", "Milan", "Palermo"],
          answer: 0,
          hint: "Its glassblowers lived on the island of Murano in the Venetian lagoon!",
          explanation: "The glassmakers of Murano in Venice guarded the secret of tin-mercury amalgam glass mirrors for centuries!"
        },
        scholar: {
          prompt: "In 1665, which French Finance Minister under King Louis XIV smuggled Venetian glassmakers from Murano to Paris to found the Manufacture Royale de Glaces (now Saint-Gobain) so France could build the Hall of Mirrors at Versailles?",
          options: [
            "Jean-Baptiste Colbert",
            "Cardinal Richelieu",
            "Marquis de Lafayette",
            "Maximilien de Sully"
          ],
          answer: 0,
          hint: "He was Louis XIV's mercantilist minister who resolved that France should produce its own luxury goods instead of importing Venetian glass.",
          explanation: "Jean-Baptiste Colbert lured Murano craftsmen to France in 1665 to establish the Royal Mirror Manufactory, which created the 357 mirrors in the Hall of Mirrors at Versailles!"
        }
      }
    }
  },
  {
    id: "h1-r8",
    house: 1,
    floorLabel: "Ground Cellar",
    name: "Apothecary Pantry & Braided Rug Cellar",
    subtitle: "Stacked wooden crates, miniature apothecary jar shelves & round braided jute rug",
    photo: "assets/photos/IMG_3716.jpg",
    relic: { id: "relic-elixir", icon: "", img: "assets/watercolor/post_24.png", name: "Amber Honey Jar", desc: "From the miniature 12-cubby pantry shelf" },
    character: { name: "Marigold Herb-Gatherer", role: "Cellar Apothecary", img: "assets/watercolor/post_08.png" },
    svgArt: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="h1r8-lantern" cx="0.78" cy="0.55" r="0.55">
          <stop offset="0%" stop-color="#ffe89e" stop-opacity="0.85"/>
          <stop offset="60%" stop-color="#f5c35b" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#e0b882" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="320" height="200" fill="#dfc49c"/>
      <rect width="320" height="200" fill="url(#h1r8-lantern)"/>
      <rect x="0" y="150" width="320" height="50" fill="#b5854b" stroke="#4a2c11" stroke-width="1.5"/>
      <!-- Left Whitewashed Storage Crate -->
      <rect x="18" y="94" width="44" height="68" rx="2" fill="#f5efe4" stroke="#6e5a44" stroke-width="2"/>
      <!-- Center Slatted Wooden Crate -->
      <rect x="70" y="76" width="74" height="70" fill="#e6cfa8" stroke="#6e4720" stroke-width="2.2"/>
      <line x1="70" y1="93" x2="144" y2="93" stroke="#6e4720" stroke-width="2"/>
      <line x1="70" y1="110" x2="144" y2="110" stroke="#6e4720" stroke-width="2"/>
      <line x1="70" y1="127" x2="144" y2="127" stroke="#6e4720" stroke-width="2"/>
      <!-- Right Apothecary 12-Cubby Rack with Tiny Glass Jars -->
      <rect x="152" y="64" width="56" height="82" fill="#d9bc8c" stroke="#5c3a1d" stroke-width="2.2"/>
      <line x1="152" y1="91" x2="208" y2="91" stroke="#5c3a1d" stroke-width="2"/>
      <line x1="152" y1="118" x2="208" y2="118" stroke="#5c3a1d" stroke-width="2"/>
      <circle cx="164" cy="81" r="5.5" fill="#e53e3e" stroke="#4a1c15" stroke-width="1"/>
      <circle cx="180" cy="81" r="5.5" fill="#ecc94b" stroke="#5c3a1d" stroke-width="1"/>
      <circle cx="196" cy="81" r="5.5" fill="#48bb78" stroke="#1e422e" stroke-width="1"/>
      <circle cx="166" cy="108" r="5.5" fill="#4299e1" stroke="#1a365d" stroke-width="1"/>
      <circle cx="184" cy="108" r="5.5" fill="#ed8936" stroke="#652b19" stroke-width="1"/>
      <circle cx="198" cy="108" r="5.5" fill="#9f7aea" stroke="#44337a" stroke-width="1"/>
      <!-- Round Braided Jute Rug on Cellar Floor -->
      <ellipse cx="122" cy="174" rx="42" ry="16" fill="#b89668" stroke="#5c3a1d" stroke-width="2.2" stroke-dasharray="5,2"/>
      <ellipse cx="122" cy="174" rx="26" ry="9" fill="none" stroke="#6e4720" stroke-width="1.6" stroke-dasharray="4,2"/>
      <!-- Watercolor Toadstools & Resident Herb-Gatherer + Lantern Mice -->
      <image href="assets/watercolor/post_24.png" x="22" y="138" width="44" height="40"/>
      <image href="assets/watercolor/post_08.png" x="210" y="68" width="68" height="92"/>
      <image href="assets/watercolor/s1_09.png" x="256" y="84" width="60" height="84"/>
    </svg>`,
    hotspots: [
      { x: 40, y: 65, label: "Slatted Wooden Crates", note: "Stacked wooden storage crates at the bottom of the timber house." },
      { x: 49, y: 63, label: "Tiny Apothecary Jars", note: "A multi-shelf rack filled with miniature colorful bottles, jars, and pantry provisions!" },
      { x: 42, y: 74, label: "Round Braided Rug", note: "A circular woven jute rug resting right on the ground-floor cellar boards." }
    ],
    tasks: {
      math: {
        title: "The Cellar Pantry Jars & Braided Rug",
        story: "In the ground-floor cellar of the timber house sits a rack of tiny colorful jars and a round braided rug.",
        junior: {
          prompt: "The apothecary rack has 3 shelves, and each shelf holds 4 tiny jars. Every jar holds 5 berry drops. How many berry drops are stored in the rack altogether?",
          options: ["45 drops", "50 drops", "60 drops", "72 drops"],
          answer: 2,
          hint: "First find the number of jars (3 × 4), then multiply by 5 drops per jar!",
          explanation: "3 shelves × 4 jars = 12 jars. And 12 jars × 5 berry drops = 60 berry drops in total!"
        },
        scholar: {
          prompt: "The round braided rug in the cellar is woven from concentric circular braids. If the inner circle has radius r = 3 cm and the complete rug has radius R = 6 cm, the total area of the rug is how many times the area of the inner circle?",
          options: ["2 times as large", "3 times as large", "4 times as large", "9 times as large"],
          answer: 2,
          hint: "Area of a circle is πr². When the radius doubles from 3 to 6, what happens to r²?",
          explanation: "Inner area = π(3²) = 9π cm². Total area = π(6²) = 36π cm². Since 36π ÷ 9π = 4, doubling the radius quadruples the area!"
        }
      },
      logic: {
        title: "The 9-Jar Balance Scale Puzzle",
        story: "Nine identical-looking amber honey jars sit on the cellar crate. Eight weigh the exact same, and ONE jar is slightly heavier (it holds a golden key!).",
        junior: {
          prompt: "If you put 3 jars on the left pan of a balance scale and 3 jars on the right pan, and the two pans BALANCE perfectly, where must the heavier jar be?",
          options: [
            "Among the 3 jars left on the table",
            "On the left pan",
            "On the right pan",
            "There is no heavy jar"
          ],
          answer: 0,
          hint: "If the 6 jars on the scale balance evenly, can any of those 6 be the heavier one?",
          explanation: "Since the 3 jars on the left equal the 3 jars on the right, all 6 on the scale are normal weight—so the heavier jar must be one of the 3 remaining on the crate!"
        },
        scholar: {
          prompt: "Using a two-pan balance scale (no weights, just comparing jars against each other), what is the MINIMUM number of weighings needed to guarantee finding the 1 heavier jar out of 9 jars?",
          options: ["2 weighings", "3 weighings", "4 weighings", "5 weighings"],
          answer: 0,
          hint: "Divide the 9 jars into three groups of 3: weigh 3 against 3 first, then weigh 1 against 1 from the heavier group of 3!",
          explanation: "Only 2 weighings! Weighing #1 compares 3 vs 3 (narrowing it to 3 jars whether it tips or balances). Weighing #2 compares 1 vs 1 from those 3!"
        }
      },
      linguistics: {
        title: "Apothecary, Pantry & Bodega",
        story: "The cellar stores bread, jam jars, and herbal remedies.",
        junior: {
          prompt: "The word 'PANTRY' comes from the Old French word 'paneterie' (and Latin 'panis'). What food was originally kept in a pantry?",
          options: ["Bread (panis)", "Pancakes & Pans", "Peanuts", "Apples"],
          answer: 0,
          hint: "In Spanish, bread is 'pan'; in French, it is 'pain'; in Italian, 'pane'!",
          explanation: "From Latin 'panis' (bread), a 'pantry' was originally the room in a household where bread was stored!"
        },
        scholar: {
          prompt: "Amazingly, the English word 'APOTHECARY', the Spanish word 'BODEGA', and the French word 'BOUTIQUE' are all etymological doublets—they all descend from the exact same Ancient Greek word! Which Greek word is their common ancestor?",
          options: [
            "apothēkē (ἀποθήκη, meaning 'storehouse / repository')",
            "pharmakon (φάρμακον, meaning 'remedy')",
            "oikos (οἶκος, meaning 'house')",
            "bibliothēkē (βιβλιοθήκη, meaning 'book-chest')"
          ],
          answer: 0,
          hint: "Notice how removing the initial 'a-' from apothēkē and voicing p→b, th→d, k→g yields 'bodega' and 'boutique'!",
          explanation: "Greek 'apothēkē' (storehouse) became learned English 'apothecary', while in popular Romance speech it eroded to Provençal/French 'botica/boutique' and Spanish 'bodega'!"
        }
      },
      history: {
        title: "Food Preservation Before Refrigerators",
        story: "Before the pink refrigerator in the neighboring house existed, mice relied on root cellars and sealed glass jars.",
        junior: {
          prompt: "Why were traditional food cellars always built underground or on the lowest floor of a house?",
          options: [
            "Because the earth stays naturally cool in summer and above freezing in winter",
            "Because mice are afraid of stairs",
            "Because glass jars are too heavy for upper floors",
            "To catch rainwater"
          ],
          answer: 0,
          hint: "Soil is a natural thermal insulator!",
          explanation: "Root cellars use the earth's steady underground temperature to keep food cool in summer and prevent jars from freezing in winter!"
        },
        scholar: {
          prompt: "In 1809, which French confectioner won a 12,000-franc prize offered by Napoleon Bonaparte by inventing airtight heat-sterilized food preservation in glass jars (the invention of canning)?",
          options: [
            "Nicolas Appert",
            "Marie-Antoine Carême",
            "Auguste Escoffier",
            "Denis Papin"
          ],
          answer: 0,
          hint: "He sealed food in thick champagne-like glass jars with wax and boiled them—a process still called 'appertisation' in France!",
          explanation: "Nicolas Appert invented airtight thermal food preservation in glass jars in 1809 to feed Napoleon's armies, decades before Pasteur explained why boiling killed microbes!"
        }
      }
    }
  }
];

// Fix Scholar Math answer index for h1-r2 and h1-r6 so they match their exact calculations:
window.HOUSE_1_ROOMS[1].tasks.math.scholar.answer = 0; // 18 * 10 * 4 = 720 cm^3 is option 0!
window.HOUSE_1_ROOMS[1].tasks.math.scholar.explanation = "Subtracting 2 cm (1 cm for each opposite wall) from 20×12×6 gives interior dimensions 18 cm × 10 cm × 4 cm = 720 cm³!";
window.HOUSE_1_ROOMS[5].tasks.math.scholar.answer = 2; // 1/6 + 1/3 - 1/4 = 1/4 tub/min -> 4 minutes is option 2!
window.HOUSE_1_ROOMS[5].tasks.math.scholar.explanation = "In 1 minute, the Hot tap fills 1/6, the Cold tap fills 1/3, and the open drain empties 1/4: 1/6 + 1/3 - 1/4 = 2/12 + 4/12 - 3/12 = 3/12 = 1/4 of the tub per minute. Thus it fills in exactly 4 minutes!";
