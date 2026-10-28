import SwiftUI

enum GameData {
    static let mice: [MouseCharacter] = [
        MouseCharacter(
            id: "pippin",
            name: "Pippin Sailor-Stripe",
            emoji: "",
            specialty: "Math & Navigation",
            favDiscipline: .math,
            bio: "Wears the 21-stripe Breton sailor shirt from the bottom bunk (IMG_3725). Loves geometry, gear ratios & lunar navigation!",
            accentColor: Color(red: 0.18, green: 0.45, blue: 0.75)
        ),
        MouseCharacter(
            id: "rosalind",
            name: "Princess Rosalind of 75,29",
            emoji: "",
            specialty: "Linguistics & Ciphers",
            favDiscipline: .linguistics,
            bio: "Reigns from the slanted attic where '75,29' is penciled on the beam (IMG_3714). Decodes ancient word roots, anagrams & scripts!",
            accentColor: Color(red: 0.82, green: 0.32, blue: 0.52)
        ),
        MouseCharacter(
            id: "barnaby",
            name: "Prof. Barnaby Havana",
            emoji: "",
            specialty: "History & Archives",
            favDiscipline: .history,
            bio: "Keeper of the cedar Havana Cigars bed (IMG_3712) and the 'A. R. Dean & Sons' newspaper gazette!",
            accentColor: Color(red: 0.68, green: 0.45, blue: 0.14)
        ),
        MouseCharacter(
            id: "clover",
            name: "Clover Key-Clasp",
            emoji: "",
            specialty: "Logic & Deduction",
            favDiscipline: .logic,
            bio: "Wears the orange shirt & blue shorts by the Giant Silver Keychain Wardrobe (IMG_3721). Solves any Knights-and-Knaves riddle!",
            accentColor: Color(red: 0.50, green: 0.30, blue: 0.75)
        )
    ]

    static var allRooms: [MouseRoom] {
        house1Rooms + house2Rooms
    }

    static let house1Rooms: [MouseRoom] = [
        MouseRoom(
            id: "h1-r1",
            houseNumber: 1,
            floorLabel: "Attic Peak Left",
            name: "The Triangle Train Loft",
            subtitle: "Red steam locomotive, wooden stool & burlap roll under the slanted peak",
            photoName: "IMG_3712.jpg",
            themeColor: Color(red: 0.78, green: 0.28, blue: 0.22),
            relic: RoomRelic(icon: "", name: "Brass Steam Whistle", description: "From the Attic Peak red locomotive"),
            hotspots: [
                HotspotPin(xPercent: 0.33, yPercent: 0.44, label: "Tiny Pine Stool", note: "Tucked right under the steepest angle of the plywood roof sits a miniature four-legged wooden stool."),
                HotspotPin(xPercent: 0.49, yPercent: 0.44, label: "Woven Burlap Roll", note: "A rolled-up woven straw & burlap mat resting against a cream backing board."),
                HotspotPin(xPercent: 0.72, yPercent: 0.46, label: "Red Toy Locomotive", note: "A little red steam engine waiting to roll along the top attic beam!")
            ],
            quests: [
                .math: DisciplineQuest(
                    discipline: .math,
                    title: "The Red Locomotive Gear Ratio",
                    storyContext: "In the tiny triangular peak of the wooden house, the red toy steam train has small front guide wheels and larger driving wheels.",
                    junior: QuestTierContent(
                        prompt: "The red locomotive's big wheel has 18 gear teeth, and its small wheel has 6 gear teeth. Every time the big wheel makes 4 full turns along the attic shelf, how many full turns does the small wheel make?",
                        options: ["8 turns", "12 turns", "16 turns", "24 turns"],
                        answerIndex: 1,
                        hint: "Divide 18 by 6 to see how many times the small wheel spins for every 1 big turn, then multiply by 4!",
                        explanation: "18 ÷ 6 = 3 small turns per big turn. In 4 big turns, the small wheel makes 4 × 3 = 12 full turns!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "The triangular attic loft has a horizontal shelf of length 60 cm and two equal sloped roof sides of 50 cm each. What is the exact vertical height from the shelf floor to the highest roof peak?",
                        options: ["30 cm", "35 cm", "40 cm", "45 cm"],
                        answerIndex: 2,
                        hint: "Drop a perpendicular altitude from the peak to the midpoint of the 60 cm base (forming a right triangle with base 30 cm and hypotenuse 50 cm).",
                        explanation: "By the Pythagorean theorem (a 3-4-5 right triangle scaled by 10): height = √(50² - 30²) = 40 cm!"
                    )
                ),
                .logic: DisciplineQuest(
                    discipline: .logic,
                    title: "Switching Cars on the Attic Siding",
                    storyContext: "Three miniature train cars—the Coal Car (C), the Acorn Car (A), and the Mail Car (M)—are parked on the narrow attic ledge.",
                    junior: QuestTierContent(
                        prompt: "Clues: (1) The Acorn Car is NOT at the back. (2) The Mail Car is directly behind the Coal Car. Which order are the cars in from FRONT to BACK?",
                        options: ["Acorn – Coal – Mail", "Coal – Acorn – Mail", "Mail – Coal – Acorn", "Coal – Mail – Acorn"],
                        answerIndex: 0,
                        hint: "Since Mail is directly behind Coal, [Coal – Mail] stay together. Where must Acorn go if it cannot be at the back?",
                        explanation: "Coal and Mail form the pair [Coal, Mail]. Since Acorn cannot be at the back, Acorn leads at the front: Acorn – Coal – Mail!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Four train cars (1, 2, 3, 4) enter a single dead-end turntable spur in order 1-2-3-4 (acting as a LIFO stack). Which outgoing order is IMPOSSIBLE?",
                        options: ["2 - 4 - 3 - 1", "3 - 2 - 4 - 1", "4 - 2 - 1 - 3", "1 - 4 - 3 - 2"],
                        answerIndex: 2,
                        hint: "If car 4 exits first, cars 1, 2, and 3 are all stacked on the spur with 3 on top and 1 at the bottom.",
                        explanation: "To output 4 first, 1, 2, and 3 must be pushed onto the stack in order, so they can only exit in reverse order 3-2-1. Thus 4-2-1-3 is impossible!"
                    )
                ),
                .linguistics: DisciplineQuest(
                    discipline: .linguistics,
                    title: "Etymology of the Steam Locomotive",
                    storyContext: "Written underneath the red train is a tiny Latin motto from the railroad pioneers.",
                    junior: QuestTierContent(
                        prompt: "The word 'LOCOMOTIVE' comes from two Latin roots: 'loco' and 'mot-'. What do those two roots mean together?",
                        options: ["Loud + Whistle", "From a place + Moving", "Iron + Fire", "Fast + Track"],
                        answerIndex: 1,
                        hint: "Think of 'location' (place) and 'motion' (moving)!",
                        explanation: "In Latin, 'in loco' means 'from a place' and 'motivus' means 'causing motion'!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "The English word 'WHEEL', Sanskrit 'cakra', and Greek 'kyklos' all descend from the PIE root *kʷékʷlos. What sound law explains why PIE *kʷ shifted to 'wh/h' in Germanic?",
                        options: ["Grimm's Law (First Germanic Sound Shift)", "Great Vowel Shift", "Grassmann's Law", "Rhotacism"],
                        answerIndex: 0,
                        hint: "Discovered by Jacob Grimm, this law explains how voiceless stops (*p, *t, *k, *kʷ) became fricatives in Proto-Germanic.",
                        explanation: "Grimm's Law shifted the Proto-Indo-European labiovelar stop *kʷ to Proto-Germanic *hw (English 'wheel')!"
                    )
                ),
                .history: DisciplineQuest(
                    discipline: .history,
                    title: "The First Steam Railway Trial",
                    storyContext: "The attic mice celebrate the anniversary of the world's most famous early steam locomotive trial.",
                    junior: QuestTierContent(
                        prompt: "In 1829, George and Robert Stephenson built a famous steam locomotive that won the Rainhill Trials in England. What was its name?",
                        options: ["The Rocket", "The Flying Scotsman", "The Orient Express", "The Iron Duke"],
                        answerIndex: 0,
                        hint: "It shares its name with a vehicle that blasts astronauts into space!",
                        explanation: "Stephenson's 'Rocket' won the 1829 Rainhill Trials at 29 miles per hour!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Before Stephenson's 1829 Rocket, which Cornish engineer built the world's first full-scale working railway steam locomotive at Penydarren in Wales in 1804?",
                        options: ["Richard Trevithick", "James Watt", "Isambard Kingdom Brunel", "Thomas Newcomen"],
                        answerIndex: 0,
                        hint: "He pioneered 'strong steam' (high-pressure steam) locomotives in 1804.",
                        explanation: "Richard Trevithick built the first high-pressure steam railway locomotive in February 1804 at Penydarren!"
                    )
                )
            ]
        ),
        MouseRoom(
            id: "h1-r2",
            houseNumber: 1,
            floorLabel: "4th Floor Left",
            name: "The Havana Cigar-Box Suite",
            subtitle: "Vintage Havana Cigars bed, LEGO flower table, rocking chair & purple lace rug",
            photoName: "IMG_3712.jpg",
            themeColor: Color(red: 0.65, green: 0.44, blue: 0.22),
            relic: RoomRelic(icon: "", name: "Cedar Box Compass", description: "Hidden inside the Havana Cigars bed"),
            hotspots: [
                HotspotPin(xPercent: 0.52, yPercent: 0.72, label: "Havana Cigars Bed", note: "A real wooden 'Havana Cigars' box turned upside-down into a cozy raised bed!"),
                HotspotPin(xPercent: 0.35, yPercent: 0.80, label: "LEGO Flower Table", note: "A white LEGO brick planter box topped with purple and yellow LEGO blossoms."),
                HotspotPin(xPercent: 0.76, yPercent: 0.74, label: "Wooden Rocking Chair", note: "A rustic hand-carved rocking chair beside the purple lace-trimmed rug.")
            ],
            quests: [
                .math: DisciplineQuest(
                    discipline: .math,
                    title: "The LEGO Stud Garden Grid",
                    storyContext: "Next to the Havana Cigars bed stands a white LEGO flower box built on a rectangular LEGO baseplate.",
                    junior: QuestTierContent(
                        prompt: "The LEGO flower table top is 6 studs wide by 4 studs deep. Each tiny LEGO flower uses 1 stud, and there are 7 flowers planted. How many empty studs remain?",
                        options: ["15 studs", "17 studs", "19 studs", "24 studs"],
                        answerIndex: 1,
                        hint: "Multiply 6 × 4 to find total studs, then subtract 7!",
                        explanation: "6 × 4 = 24 total studs, and 24 - 7 = 17 empty studs!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "The wooden Havana Cigars box measures 20 cm × 12 cm × 6 cm on the outside, and all 6 cedar walls are uniformly 1 cm thick. What is the interior hollow volume inside the closed box?",
                        options: ["720 cm³", "800 cm³", "960 cm³", "1440 cm³"],
                        answerIndex: 0,
                        hint: "Subtract 2 cm (1 cm for each opposite wall) from length, width, and height before multiplying.",
                        explanation: "Interior dimensions are (20-2) × (12-2) × (6-2) = 18 × 10 × 4 = 720 cm³!"
                    )
                ),
                .logic: DisciplineQuest(
                    discipline: .logic,
                    title: "The Rocking Chair & Quilt Routine",
                    storyContext: "Professor Barnaby Havana follows a strict bedtime logic rule before sleeping on the cigar box.",
                    junior: QuestTierContent(
                        prompt: "Rule: 'If the rocking chair is creaking, then Barnaby is reading his atlas.' Right now, Barnaby is NOT reading his atlas. What must be true?",
                        options: ["The rocking chair is NOT creaking", "The rocking chair IS creaking", "Barnaby is watering flowers", "It is noon"],
                        answerIndex: 0,
                        hint: "If creaking always means he is reading, could the chair creak while he isn't reading?",
                        explanation: "By contrapositive logic (Modus Tollens): since Barnaby is not reading, the rocking chair cannot be creaking!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "In the purple lace rug box are 8 purple spools, 6 gold spools, and 4 white spools. In the dark, what is the minimum number of spools Barnaby must pull out to guarantee at least 3 spools of the SAME color?",
                        options: ["4 spools", "6 spools", "7 spools", "9 spools"],
                        answerIndex: 2,
                        hint: "By the Pigeonhole Principle, worst case is picking 2 of each of the 3 colors first.",
                        explanation: "Worst case is 2 purple + 2 gold + 2 white = 6 spools. The 7th spool guarantees 3 of one color!"
                    )
                ),
                .linguistics: DisciplineQuest(
                    discipline: .linguistics,
                    title: "Loanwords of the Caribbean Trade",
                    storyContext: "Stamped in calligraphy on the bed is 'Havana Cigars'. Many English words came from Indigenous Caribbean & Mayan languages.",
                    junior: QuestTierContent(
                        prompt: "Which of these words originally came into English from Taíno / Mayan languages of the Caribbean and Central America?",
                        options: ["Hammock, Hurricane & Cigar", "Pillow, Blanket & Sheet", "Rocking, Chair & Table", "Lace, Velvet & Linen"],
                        answerIndex: 0,
                        hint: "Think of words early sailors learned in Cuba and the Caribbean islands!",
                        explanation: "'Hammock' (Taíno hamaka), 'Hurricane' (hurakán), and 'Cigar' (Mayan sik'ar) all entered European languages from the Caribbean region!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "The word 'CIGAR' is traced to Mayan 'sik'ar' (from 'sik''). When Spanish borrowed it as 'cigarro', what insect name likely influenced its ending by folk analogy?",
                        options: ["Spanish 'cigarra' (cicada) due to its cylindrical brown body shape", "Arabic 'sukkar'", "Latin 'cicero'", "Basque '-arro'"],
                        answerIndex: 0,
                        hint: "Spanish speakers compared the rolled brown leaf cylinder to a common summer garden insect.",
                        explanation: "Rooted in Mayan 'sik'ar', Spanish 'cigarro' was reinforced by analogy with 'cigarra' (cicada)!"
                    )
                ),
                .history: DisciplineQuest(
                    discipline: .history,
                    title: "Spanish Treasure Fleets & Havana Harbor",
                    storyContext: "Why was Old Havana one of the most important ports in world maritime history?",
                    junior: QuestTierContent(
                        prompt: "Havana is the historic port capital of which Caribbean island?",
                        options: ["Cuba", "Jamaica", "Puerto Rico", "Bermuda"],
                        answerIndex: 0,
                        hint: "It is the largest island in the Caribbean Sea, just south of Florida!",
                        explanation: "Havana (La Habana) is the capital and historic harbor of Cuba!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "In the 16th–18th centuries, why did Spanish Treasure Fleets gather specifically at Havana Harbor before sailing back across the Atlantic to Spain?",
                        options: ["To catch the northward Gulf Stream current through the Florida Straits and the westerlies", "Because Havana had the deepest drydock", "To avoid crossing the Equator", "Because of the Treaty of Utrecht"],
                        answerIndex: 0,
                        hint: "A powerful warm ocean current flows north right past Havana into the North Atlantic.",
                        explanation: "Havana sat at the gateway to the Gulf Stream current, carrying ships north to catch the prevailing westerlies back to Spain!"
                    )
                )
            ]
        ),
        MouseRoom(
            id: "h1-r3",
            houseNumber: 1,
            floorLabel: "4th Floor Right",
            name: "The '75,29' Royal Toy Attic",
            subtitle: "Penciled '75,29' timber mark, Princess Mouse & 4 miniature animal friends",
            photoName: "IMG_3714.jpg",
            themeColor: Color(red: 0.84, green: 0.42, blue: 0.56),
            relic: RoomRelic(icon: "", name: "Rose-Gold Mouse Tiara", description: "Bestowed by Princess Rosalind of 75,29"),
            hotspots: [
                HotspotPin(xPercent: 0.82, yPercent: 0.44, label: "Penciled '75,29'", note: "Look closely at the right plywood wall in IMG_3714: the carpenter penciled '75,29' right under the slanted roof!"),
                HotspotPin(xPercent: 0.59, yPercent: 0.39, label: "Princess Mouse", note: "A grey mouse wearing a tiny crown and pink dress sitting beside a cream box bed."),
                HotspotPin(xPercent: 0.44, yPercent: 0.49, label: "Four Mini Figurines", note: "A miniature grey dog, a tiny white cat, a pink piglet, and a teddy bear in a yellow shirt!")
            ],
            quests: [
                .math: DisciplineQuest(
                    discipline: .math,
                    title: "The Secret of the Carpenter's '75,29' Mark",
                    storyContext: "Written in pencil on the right wall of the slanted attic is the number pair: 75, 29.",
                    junior: QuestTierContent(
                        prompt: "What do you get if you ADD the two penciled numbers (75 + 29) and then divide by 2 to find their exact midpoint?",
                        options: ["48", "52", "54", "56"],
                        answerIndex: 1,
                        hint: "First add 75 + 29 = 104, then divide 104 by 2!",
                        explanation: "75 + 29 = 104, and 104 ÷ 2 = 52!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Using the difference of squares identity a² - b² = (a + b)(a - b), what is the exact value of 75² - 29²?",
                        options: ["4,684", "4,784", "4,884", "4,984"],
                        answerIndex: 1,
                        hint: "Multiply (75 + 29) × (75 - 29) = 104 × 46.",
                        explanation: "(75 + 29)(75 - 29) = 104 × 46 = 4,784!"
                    )
                ),
                .logic: DisciplineQuest(
                    discipline: .logic,
                    title: "The Parade of Four Mini Figurines",
                    storyContext: "Four miniature friends stand on the shelf left of the cream bed: the Dog, the White Cat, the Pink Piglet, and the Yellow-Shirt Bear.",
                    junior: QuestTierContent(
                        prompt: "From LEFT to RIGHT: (1) The Bear is on the far right (4th). (2) The Dog is on the far left (1st). (3) The Piglet is right next to the Bear (3rd). Who stands 2nd from the left?",
                        options: ["The White Cat", "The Pink Piglet", "The Dog", "The Bear"],
                        answerIndex: 0,
                        hint: "Positions 1, 3, and 4 are Dog, Piglet, and Bear!",
                        explanation: "Just like in the real photo IMG_3714, the order is: 1. Dog, 2. White Cat, 3. Pink Piglet, 4. Yellow-Shirt Bear!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "How many total arrangements of the 4 figurines (Dog, Cat, Piglet, Bear) in a row of 4 exist where the Dog and the Cat are NOT immediately adjacent?",
                        options: ["6 arrangements", "12 arrangements", "14 arrangements", "18 arrangements"],
                        answerIndex: 1,
                        hint: "Subtract the 3! × 2! = 12 adjacent arrangements from the 4! = 24 total permutations.",
                        explanation: "4! = 24 total permutations minus 12 where Dog & Cat are adjacent leaves 12 non-adjacent arrangements!"
                    )
                ),
                .linguistics: DisciplineQuest(
                    discipline: .linguistics,
                    title: "Why '75,29' Uses a Decimal Comma",
                    storyContext: "The carpenter wrote '75,29' with a comma rather than '75.29'.",
                    junior: QuestTierContent(
                        prompt: "In most of Continental Europe (like Denmark, France, Germany, and Spain), what punctuation mark is used as the decimal separator?",
                        options: ["A comma (,)", "A semicolon (;)", "An exclamation mark (!)", "A colon (:)"],
                        answerIndex: 0,
                        hint: "Look right at '75,29' penciled on the dollhouse wall!",
                        explanation: "Across Continental Europe and Scandinavia, a comma (75,29) is used as the decimal mark!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "In Danish ('femoghalvfjerds') and French ('soixante-quinze'), how is the number 75 structured morphologically?",
                        options: ["Using a vigesimal (base-20) counting system", "Using a duodecimal (base-12) system", "Using binary (base-2)", "Using Roman subtractive prefixes"],
                        answerIndex: 0,
                        hint: "French says 60 + 15 (3×20 + 15) and Danish 'halvfjerds' means 3.5 × 20!",
                        explanation: "Both French and Danish preserve a medieval vigesimal (base-20) numeral structure!"
                    )
                ),
                .history: DisciplineQuest(
                    discipline: .history,
                    title: "The Birth of the Metric System",
                    storyContext: "The carpenter measured the slanted roof in centimeters.",
                    junior: QuestTierContent(
                        prompt: "In which country was the Metric System (meters, centimeters, grams) first created in the 1790s?",
                        options: ["France", "Australia", "Brazil", "Japan"],
                        answerIndex: 0,
                        hint: "Scientists in Paris defined 1 meter using the meridian passing through their capital!",
                        explanation: "France introduced the metric system in the 1790s!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Between 1792 and 1798, which two French astronomers measured the meridian arc from Dunkirk to Barcelona to define the original Meter?",
                        options: ["Jean-Baptiste Delambre and Pierre Méchain", "Lavoisier and Descartes", "Pasteur and Pascal", "Halley and Newton"],
                        answerIndex: 0,
                        hint: "They triangulated the Paris Meridian from the English Channel to the Mediterranean Sea.",
                        explanation: "Delambre and Méchain spent seven years measuring the Dunkirk–Barcelona meridian arc to define the Meter!"
                    )
                )
            ]
        ),
        MouseRoom(
            id: "h1-r4",
            houseNumber: 1,
            floorLabel: "3rd Floor Left",
            name: "Woven Bassinet & Pearl Vanity",
            subtitle: "Floral fabric bassinet with baby mice, blue headboard, pink chest & pearl armoire",
            photoName: "IMG_3715.jpg",
            themeColor: Color(red: 0.42, green: 0.62, blue: 0.72),
            relic: RoomRelic(icon: "", name: "Lustrous Nursery Pearl", description: "Draped over the miniature white vanity"),
            hotspots: [
                HotspotPin(xPercent: 0.35, yPercent: 0.56, label: "Woven Floral Bassinet", note: "A quilted fabric basket cradle holding tiny baby mice."),
                HotspotPin(xPercent: 0.60, yPercent: 0.49, label: "White Pearl Vanity", note: "A miniature white vanity cabinet with a strand of luminous pearls draped over its top corner!")
            ],
            quests: [
                .math: DisciplineQuest(
                    discipline: .math,
                    title: "The Strand of Vanity Pearls",
                    storyContext: "Draped over the corner of the little white cabinet in IMG_3715 is a loop of shiny pearls.",
                    junior: QuestTierContent(
                        prompt: "The pearl necklace repeats 3 White pearls followed by 2 Pink pearls (W-W-W-P-P). Out of 30 pearls total, how many are White?",
                        options: ["12 White pearls", "15 White pearls", "18 White pearls", "20 White pearls"],
                        answerIndex: 2,
                        hint: "Each pattern group has 5 pearls. 30 ÷ 5 = 6 groups, and each group has 3 White pearls!",
                        explanation: "There are 6 groups of 5 pearls, and 6 × 3 = 18 White pearls!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "How many distinct circular necklaces (up to rotation and reflection) can be formed from 5 identical White pearls and 2 identical Pink pearls?",
                        options: ["2 necklaces", "3 necklaces", "5 necklaces", "7 necklaces"],
                        answerIndex: 1,
                        hint: "How many White pearls can lie on the shorter arc between the 2 Pink pearls?",
                        explanation: "The shorter arc between the 2 Pink pearls can contain 0, 1, or 2 White pearls—giving exactly 3 distinct necklaces!"
                    )
                ),
                .logic: DisciplineQuest(
                    discipline: .logic,
                    title: "The Twin Babies in the Woven Bassinet",
                    storyContext: "Two baby mice—Pip and Squeak—are tucked into the floral woven basket.",
                    junior: QuestTierContent(
                        prompt: "There are two bonnets (Blue and Yellow) and two rattles (Star and Acorn). Pip does NOT wear Blue. The baby in Yellow holds the Star rattle. Which rattle does Squeak hold?",
                        options: ["The Acorn rattle", "The Star rattle", "Both rattles", "Neither rattle"],
                        answerIndex: 0,
                        hint: "Pip wears Yellow and holds the Star rattle!",
                        explanation: "Pip wears Yellow (Star rattle), so Squeak wears Blue and holds the Acorn rattle!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Three boxes ('WW', 'PP', 'WP') all have mislabeled lids so EVERY label is wrong. You draw 1 White pearl from the box labeled 'WP'. What is inside the box labeled 'PP'?",
                        options: ["1 White and 1 Pink pearl (WP)", "2 White pearls (WW)", "2 Pink pearls (PP)", "Cannot be determined"],
                        answerIndex: 0,
                        hint: "Since 'WP' gave a White pearl and is mislabeled, 'WP' must actually be WW!",
                        explanation: "Box 'WP' is actually WW. Since Box 'PP' cannot be PP and cannot be WW, it must contain WP!"
                    )
                ),
                .linguistics: DisciplineQuest(
                    discipline: .linguistics,
                    title: "From 'Basin' to 'Bassinet'",
                    storyContext: "Why is a baby's oval basket bed called a 'bassinet'?",
                    junior: QuestTierContent(
                        prompt: "The word 'BASSINET' comes from French, where it is a diminutive ('little version') of what bowl-shaped object?",
                        options: ["A basin (washbowl)", "A bassoon", "A bass fish", "A basement"],
                        answerIndex: 0,
                        hint: "Look at the first five letters: B-A-S-I-N!",
                        explanation: "In French, 'bassinet' literally means a 'little basin'!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "In 14th-century medieval Europe, what did the word 'bascinet' refer to before it meant a cradle?",
                        options: ["A medieval knight's basin-shaped steel helmet", "A monastic scroll", "A rose window", "A merchant galley"],
                        answerIndex: 0,
                        hint: "Knights at Agincourt wore this basin-shaped steel skullcap helmet.",
                        explanation: "In medieval armor, a 'bascinet' was a knight's open or visored steel helmet shaped like a small basin!"
                    )
                ),
                .history: DisciplineQuest(
                    discipline: .history,
                    title: "Natural & Cultured Pearls",
                    storyContext: "A strand of luminous pearls hangs on the mouse vanity.",
                    junior: QuestTierContent(
                        prompt: "Which living shelled creature creates natural pearls?",
                        options: ["An oyster (or mussel)", "A seahorse", "A jellyfish", "A crab"],
                        answerIndex: 0,
                        hint: "It coats tiny particles inside its shell with shimmering mother-of-pearl (nacre)!",
                        explanation: "Oysters and freshwater mussels secrete layers of nacre to form pearls!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Which Japanese innovator revolutionized jewelry history in the 1890s by perfecting cultured pearls?",
                        options: ["Kokichi Mikimoto", "Hokusai Katsushika", "Sakichi Toyoda", "Shibusawa Eiichi"],
                        answerIndex: 0,
                        hint: "His surname remains the world's most famous pearl house in Tokyo.",
                        explanation: "Kokichi Mikimoto pioneered cultured pearls in the 1890s!"
                    )
                )
            ]
        ),
        MouseRoom(
            id: "h1-r5",
            houseNumber: 1,
            floorLabel: "3rd Floor Right",
            name: "Polka-Dot Cigar Bed & Pearl Case",
            subtitle: "Second Havana Cigars bed, polka-dot dress mouse, polka-dot rug & tall pearl display case",
            photoName: "IMG_3714.jpg",
            themeColor: Color(red: 0.72, green: 0.52, blue: 0.34),
            relic: RoomRelic(icon: "", name: "Rose-Pearl Circlet", description: "Kept inside the tall white showcase"),
            hotspots: [
                HotspotPin(xPercent: 0.47, yPercent: 0.66, label: "Second Havana Cigar Bed", note: "A second vintage Havana Cigars box bed where mice in polka-dot and denim outfits lounge!"),
                HotspotPin(xPercent: 0.68, yPercent: 0.58, label: "Tall White Display Box", note: "Holds a coiled rose-and-pearl bracelet inside.")
            ],
            quests: [
                .math: DisciplineQuest(
                    discipline: .math,
                    title: "Polka-Dot Array Symmetry",
                    storyContext: "Both the mouse's dress and the floor mat in front of the Havana Cigars bed are covered in polka dots!",
                    junior: QuestTierContent(
                        prompt: "The floor mat has 4 rows of polka dots: Row 1 has 5, Row 2 has 6, Row 3 has 5, and Row 4 has 6. How many dots in total?",
                        options: ["20 dots", "22 dots", "24 dots", "26 dots"],
                        answerIndex: 1,
                        hint: "Add 5 + 6 = 11, then double it!",
                        explanation: "5 + 6 + 5 + 6 = 22 polka dots!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Which 2D planar arrangement of identical circles achieves the maximum packing density of π / (2√3) ≈ 90.69%?",
                        options: ["Hexagonal (staggered triangular) lattice packing", "Square grid packing (π/4 ≈ 78.54%)", "Octagonal ring packing", "Random packing"],
                        answerIndex: 0,
                        hint: "Think of how honeycomb cells or racked billiard balls touch 6 neighbors.",
                        explanation: "Hexagonal lattice packing covers π/(2√3) ≈ 90.69% of the plane, the maximum possible!"
                    )
                ),
                .logic: DisciplineQuest(
                    discipline: .logic,
                    title: "The Two Havana Cigar Beds",
                    storyContext: "This house has TWO 'Havana Cigars' box beds: one on the 4th floor, and one on the 3rd floor!",
                    junior: QuestTierContent(
                        prompt: "Four mice (Ada, Bea, Cal, Dot) sleep 2 per bed. Cal sleeps in the 4th-floor bed with Ada. Who sleeps with Dot in the 3rd-floor bed?",
                        options: ["Bea", "Ada", "Cal", "Nobody"],
                        answerIndex: 0,
                        hint: "If Ada and Cal share the 4th-floor bed, who is left for the 3rd-floor bed?",
                        explanation: "Bea and Dot share the 3rd-floor Cigar Bed!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Dot (the only mouse wearing polka dots in the room) says: 'At least one mouse in this room is wearing polka dots AND lying.' If every mouse is either a truth-teller or a liar, what is Dot?",
                        options: ["Dot is a liar (Wait: if Dot is lying, then no mouse in polka dots is lying—contradiction! So Dot is wearing polka dots ONLY in her dream, or someone else is!)", "Dot is a truth-teller", "Both mice are truth-tellers", "Neither"],
                        answerIndex: 0,
                        hint: "This is a classic self-referential Liar paradox variant!",
                        explanation: "If Dot were telling the truth, she herself would have to be lying—proving her statement cannot be true!"
                    )
                ),
                .linguistics: DisciplineQuest(
                    discipline: .linguistics,
                    title: "Where Did 'Polka Dot' Come From?",
                    storyContext: "The mouse on the cigar box wears a polka-dot frock.",
                    junior: QuestTierContent(
                        prompt: "Why are round spots on fabric called 'POLKA dots'?",
                        options: ["Named after the lively Czech 'polka' dance craze of the 1840s", "Invented by Mr. Polka", "Latin for circle", "From polar bears"],
                        answerIndex: 0,
                        hint: "In the 1840s, everyone loved dancing a lively 2/4-time Bohemian folk dance!",
                        explanation: "During 1840s 'Polka Mania', fashion designers named spotted fabrics after the popular Czech dance!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "In Czech, the dance name 'polka' comes from 'půlka'. What does 'půlka' literally mean?",
                        options: ["'Half' or 'half-step' (from the rapid half-step rhythm)", "'Spinning wheel'", "'Spotted skirt'", "'Harvest moon'"],
                        answerIndex: 0,
                        hint: "Compare Slavic *polъ (half).",
                        explanation: "Czech 'půlka' means 'half-step', describing the dance's quick shift from one foot to the other!"
                    )
                ),
                .history: DisciplineQuest(
                    discipline: .history,
                    title: "Cabinets of Curiosities",
                    storyContext: "The tall white open-front cabinet on the right holds a precious rose-pearl treasure.",
                    junior: QuestTierContent(
                        prompt: "In Renaissance Europe, what were special rooms or cabinets displaying rare shells, gems, and miniatures called?",
                        options: ["Cabinets of Curiosities (Wunderkammern)", "Pantries of Plenty", "Wardrobes of Winter", "Vaults of Velvet"],
                        answerIndex: 0,
                        hint: "In German they were called 'Wunderkammern' ('Wonder-Rooms')!",
                        explanation: "Cabinets of Curiosities were the ancestors of modern museums!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Whose 17th-century Cabinet of Curiosities (gathered by the Tradescants) founded Britain's first public university museum at Oxford in 1683?",
                        options: ["Elias Ashmole (The Ashmolean Museum)", "Hans Sloane", "Lorenzo de' Medici", "Peter the Great"],
                        answerIndex: 0,
                        hint: "Oxford's museum of art and archaeology still bears his name.",
                        explanation: "Elias Ashmole gifted the Tradescant collection to Oxford, opening the Ashmolean Museum in 1683!"
                    )
                )
            ]
        ),
        MouseRoom(
            id: "h1-r6",
            houseNumber: 1,
            floorLabel: "2nd Floor Left",
            name: "Cardboard Laundry & Oval Bath",
            subtitle: "Handmade cardboard washer & tin-foil sink, oval tub & 'A. R. Dean & Sons' newspaper",
            photoName: "IMG_3715.jpg",
            themeColor: Color(red: 0.28, green: 0.60, blue: 0.58),
            relic: RoomRelic(icon: "", name: "Golden Faucet Key", description: "Polished brass key from the oval clawfoot tub"),
            hotspots: [
                HotspotPin(xPercent: 0.41, yPercent: 0.71, label: "Cardboard Washing Machine", note: "A handmade corrugated cardboard front-loader with a round drum cutout!"),
                HotspotPin(xPercent: 0.43, yPercent: 0.82, label: "'A. R. Dean & Sons' Gazette", note: "An antique newspaper advertisement under the washer reading 'A. R. Dean & Sons'!")
            ],
            quests: [
                .math: DisciplineQuest(
                    discipline: .math,
                    title: "Filling the White Oval Bathtub",
                    storyContext: "The white oval bathtub on the 2nd floor has a brass tap and a drain plug.",
                    junior: QuestTierContent(
                        prompt: "The brass tap pours 40 mL of water per minute, while 5 mL splashes out per minute. How many minutes to fill the 210 mL mouse tub?",
                        options: ["5 minutes", "6 minutes", "7 minutes", "8 minutes"],
                        answerIndex: 1,
                        hint: "Net gain is 40 - 5 = 35 mL/min. Divide 210 by 35!",
                        explanation: "210 ÷ 35 = 6 minutes!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "The Hot tap fills the tub in 6 min, the Cold tap fills it in 3 min, and an open drain empties a full tub in 4 min. If both taps run with the drain open, how long to fill the empty tub?",
                        options: ["2.4 minutes", "3.2 minutes", "4 minutes", "4.8 minutes"],
                        answerIndex: 2,
                        hint: "Net rate per minute = 1/6 + 1/3 - 1/4.",
                        explanation: "1/6 + 1/3 - 1/4 = 2/12 + 4/12 - 3/12 = 3/12 = 1/4 tub per minute → 4 minutes!"
                    )
                ),
                .logic: DisciplineQuest(
                    discipline: .logic,
                    title: "Sorting the Cardboard Washer Loads",
                    storyContext: "Four laundry loads wait for the cardboard washer: Whites, Polka-Dots, Stripes, and Denim.",
                    junior: QuestTierContent(
                        prompt: "(1) Whites go 1st. (2) Denim goes 4th. (3) Stripes go before Polka-Dots. Which load goes 2nd?",
                        options: ["Stripes", "Polka-Dots", "Whites", "Denim"],
                        answerIndex: 0,
                        hint: "Between positions 2 and 3, Stripes must come before Polka-Dots!",
                        explanation: "1st: Whites, 2nd: Stripes, 3rd: Polka-Dots, 4th: Denim!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "The hamper holds 10 blue socks and 10 red socks. Blindfolded, what is the minimum number of socks to draw to GUARANTEE having at least 1 blue sock AND 1 red sock?",
                        options: ["3 socks", "10 socks", "11 socks", "12 socks"],
                        answerIndex: 2,
                        hint: "To guarantee ONE OF EACH color, what if the first 10 socks drawn are all blue?",
                        explanation: "Worst case is drawing all 10 socks of one color first; the 11th sock is guaranteed to be the other color!"
                    )
                ),
                .linguistics: DisciplineQuest(
                    discipline: .linguistics,
                    title: "Lavender & Laundry Words",
                    storyContext: "Above the cardboard washer sits a tiny cup of soap.",
                    junior: QuestTierContent(
                        prompt: "'LAUNDRY', 'LAVATORY', and 'LAVENDER' all share the Latin root 'lavare'. What does 'lavare' mean?",
                        options: ["To wash", "To smell sweet", "To spin", "To fold"],
                        answerIndex: 0,
                        hint: "What do you do in a laundry room and a lavatory?",
                        explanation: "Latin 'lavare' means 'to wash'!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "According to Pliny the Elder, from which peoples did Latin borrow the word 'sapo' (English 'SOAP')?",
                        options: ["Celtic & Germanic peoples of Gaul and Germania", "Sanskrit merchants", "Phoenician dyers", "Spartan potters"],
                        answerIndex: 0,
                        hint: "Proto-Germanic *saipōn entered Latin as 'sapo'.",
                        explanation: "Pliny recorded that 'sapo' was used by the Gauls and Germanic tribes!"
                    )
                ),
                .history: DisciplineQuest(
                    discipline: .history,
                    title: "The 'A. R. Dean & Sons' Gazette Clipping",
                    storyContext: "On the floor under the cardboard washer in IMG_3715 is a real vintage newspaper clipping for 'A. R. Dean & Sons'!",
                    junior: QuestTierContent(
                        prompt: "Around 1900, A. R. Dean & Sons was a famous cabinetmaker and house furnisher in which major British city?",
                        options: ["Birmingham", "Timbuktu", "Honolulu", "Reykjavik"],
                        answerIndex: 0,
                        hint: "Britain's second-largest city, famous for Victorian workshops on Corporation Street!",
                        explanation: "A. R. Dean & Sons was a celebrated furniture maker on Corporation Street in Birmingham, England!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Which 1797 invention by Nathaniel Briggs received the first patent for a mechanical washing machine?",
                        options: ["A hand-cranked wooden scrub/drum washing box", "An ultrasonic tub", "A steam-turbine dryer", "An electric agitator"],
                        answerIndex: 0,
                        hint: "It used a hand lever and wooden rollers long before electricity.",
                        explanation: "Nathaniel Briggs patented the first mechanical washing machine in 1797!"
                    )
                )
            ]
        ),
        MouseRoom(
            id: "h1-r7",
            houseNumber: 1,
            floorLabel: "2nd Floor Right",
            name: "Striped-Blanket Boudoir & Mirror",
            subtitle: "Floral box bed with striped blanket, deep blue velvet mat & ornate pink vanity mirror",
            photoName: "IMG_3711.jpg",
            themeColor: Color(red: 0.18, green: 0.32, blue: 0.52),
            relic: RoomRelic(icon: "", name: "Pink Looking-Glass", description: "Ornate oval mirror with the white flower stool"),
            hotspots: [
                HotspotPin(xPercent: 0.67, yPercent: 0.63, label: "Striped-Blanket Bed", note: "A patterned box bed with a bold dark-and-light striped blanket."),
                HotspotPin(xPercent: 0.81, yPercent: 0.71, label: "Pink Oval Vanity", note: "A pink dressing table with an arched oval mirror and a white daisy stool.")
            ],
            quests: [
                .math: DisciplineQuest(
                    discipline: .math,
                    title: "Mirror Clock Reflection",
                    storyContext: "Looking into the pink oval vanity mirror, a mouse sees the reflection of a wall clock.",
                    junior: QuestTierContent(
                        prompt: "In the mirror, an analog clock (with no digits) looks like it reads 3:00. What is the REAL time?",
                        options: ["9:00", "3:00", "6:00", "12:00"],
                        answerIndex: 0,
                        hint: "A mirror flips left and right!",
                        explanation: "Flipping 3:00 horizontally gives 9:00!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "In the pink mirror, the reflected hands of the clock appear to show 4:40. What is the exact REAL time?",
                        options: ["7:20", "7:40", "8:20", "6:20"],
                        answerIndex: 0,
                        hint: "Subtract 4:40 from 11:60!",
                        explanation: "11:60 minus 4:40 = 7:20!"
                    )
                ),
                .logic: DisciplineQuest(
                    discipline: .logic,
                    title: "The Alternating Striped Blanket",
                    storyContext: "The blanket on the floral box bed has a repeating pattern of stripes.",
                    junior: QuestTierContent(
                        prompt: "Pattern: Charcoal, Cream, Charcoal, Cream, Gold (repeats every 5 stripes). What color is the 15th stripe?",
                        options: ["Gold", "Charcoal", "Cream", "Blue"],
                        answerIndex: 0,
                        hint: "Every 5th stripe (5, 10, 15) is the same color!",
                        explanation: "15 is a multiple of 5, so the 15th stripe is Gold!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "How many 6-stripe patterns of Charcoal (C) and Cream (W) exist such that NO TWO Charcoal stripes are adjacent?",
                        options: ["16 patterns", "21 patterns", "32 patterns", "34 patterns"],
                        answerIndex: 1,
                        hint: "Follow the Fibonacci sequence: n=1→2, n=2→3, n=3→5, n=4→8, n=5→13, n=6→21!",
                        explanation: "By the Fibonacci recurrence, there are 21 valid 6-stripe patterns!"
                    )
                ),
                .linguistics: DisciplineQuest(
                    discipline: .linguistics,
                    title: "Palindromes in the Looking-Glass",
                    storyContext: "Words that read the same backward and forward in the mirror are called palindromes!",
                    junior: QuestTierContent(
                        prompt: "Which of these 5-letter words is a true PALINDROME?",
                        options: ["KAYAK", "MOUSE", "QUILT", "CHAIR"],
                        answerIndex: 0,
                        hint: "Read each word backward from right to left!",
                        explanation: "K-A-Y-A-K spells KAYAK both ways!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "'PALINDROME' comes from Ancient Greek 'palin' + 'dromos'. What do those roots literally mean?",
                        options: ["'Back / again' + 'running / course'", "'Mirror' + 'letter'", "'Twin' + 'sound'", "'Equal' + 'measure'"],
                        answerIndex: 0,
                        hint: "Compare 'velodrome' / 'hippodrome' (a running course).",
                        explanation: "Greek 'palin' (back again) + 'dromos' (running) means 'running back again'!"
                    )
                ),
                .history: DisciplineQuest(
                    discipline: .history,
                    title: "The Secret Guild of Mirror Makers",
                    storyContext: "Fine glass mirrors were once among the rarest treasures in Europe.",
                    junior: QuestTierContent(
                        prompt: "During the Renaissance, which Italian city of canals held the secret to making crystal-clear glass mirrors?",
                        options: ["Venice (Murano Island)", "Rome", "Milan", "Palermo"],
                        answerIndex: 0,
                        hint: "Its glassblowers worked on the island of Murano!",
                        explanation: "Murano glassmakers in Venice guarded the secret of clear glass mirrors for centuries!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "In 1665, which minister of King Louis XIV lured Murano glassmakers to France so Versailles could build its Hall of Mirrors?",
                        options: ["Jean-Baptiste Colbert", "Cardinal Richelieu", "Lafayette", "Sully"],
                        answerIndex: 0,
                        hint: "Louis XIV's famous finance minister who founded the Royal Mirror Manufactory.",
                        explanation: "Jean-Baptiste Colbert established the Manufacture Royale de Glaces in 1665!"
                    )
                )
            ]
        ),
        MouseRoom(
            id: "h1-r8",
            houseNumber: 1,
            floorLabel: "Ground Cellar",
            name: "Apothecary Pantry & Braided Rug",
            subtitle: "Stacked wooden crates, miniature apothecary jar shelves & round braided jute rug",
            photoName: "IMG_3716.jpg",
            themeColor: Color(red: 0.58, green: 0.42, blue: 0.24),
            relic: RoomRelic(icon: "", name: "Amber Honey Jar", description: "From the miniature 12-cubby pantry shelf"),
            hotspots: [
                HotspotPin(xPercent: 0.49, yPercent: 0.63, label: "Tiny Apothecary Jars", note: "A multi-shelf rack filled with miniature colorful bottles and pantry jars."),
                HotspotPin(xPercent: 0.42, yPercent: 0.74, label: "Round Braided Rug", note: "A circular woven jute rug resting on the cellar floorboards.")
            ],
            quests: [
                .math: DisciplineQuest(
                    discipline: .math,
                    title: "The Cellar Pantry Jars & Braided Rug",
                    storyContext: "In the ground-floor cellar sits a rack of tiny colorful jars and a round braided rug.",
                    junior: QuestTierContent(
                        prompt: "The rack has 3 shelves with 4 jars per shelf, and each jar holds 5 berry drops. How many berry drops in total?",
                        options: ["45 drops", "50 drops", "60 drops", "72 drops"],
                        answerIndex: 2,
                        hint: "3 × 4 = 12 jars, then multiply 12 × 5!",
                        explanation: "3 × 4 × 5 = 60 berry drops!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "If the inner circle of the round braided rug has radius 3 cm and the outer edge has radius 6 cm, the total rug area is how many times the inner circle's area?",
                        options: ["2 times", "3 times", "4 times", "9 times"],
                        answerIndex: 2,
                        hint: "Area = πr². Doubling radius multiplies area by 2² = 4!",
                        explanation: "π(6²) / π(3²) = 36π / 9π = 4 times as large!"
                    )
                ),
                .logic: DisciplineQuest(
                    discipline: .logic,
                    title: "The 9-Jar Balance Scale Puzzle",
                    storyContext: "Nine identical-looking honey jars sit on the crate; ONE jar is slightly heavier (holding a golden key!).",
                    junior: QuestTierContent(
                        prompt: "You put 3 jars on the left pan and 3 jars on the right pan of a balance scale, and they BALANCE evenly. Where is the heavier jar?",
                        options: ["Among the 3 jars left on the table", "On the left pan", "On the right pan", "Nowhere"],
                        answerIndex: 0,
                        hint: "If the 6 jars on the scale balance, none of those 6 can be the single heavy jar!",
                        explanation: "The heavier jar must be one of the 3 remaining jars on the crate!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Using a two-pan balance scale, what is the MINIMUM number of weighings needed to guarantee finding the 1 heavier jar out of 9?",
                        options: ["2 weighings", "3 weighings", "4 weighings", "5 weighings"],
                        answerIndex: 0,
                        hint: "Weigh 3 against 3 first, then 1 against 1 from the heavier group of 3!",
                        explanation: "Only 2 weighings (3 vs 3, then 1 vs 1)!"
                    )
                ),
                .linguistics: DisciplineQuest(
                    discipline: .linguistics,
                    title: "Apothecary, Pantry & Bodega",
                    storyContext: "The cellar stores bread, jam jars, and herbal remedies.",
                    junior: QuestTierContent(
                        prompt: "The word 'PANTRY' comes from Old French 'paneterie' (Latin 'panis'). What food was originally kept in a pantry?",
                        options: ["Bread (panis)", "Pancakes", "Peanuts", "Apples"],
                        answerIndex: 0,
                        hint: "In Spanish bread is 'pan', in French 'pain', in Italian 'pane'!",
                        explanation: "From Latin 'panis' (bread), a pantry was originally the bread room!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "English 'APOTHECARY', Spanish 'BODEGA', and French 'BOUTIQUE' all descend from the same Ancient Greek word. Which one?",
                        options: ["apothēkē (meaning 'storehouse / repository')", "pharmakon", "oikos", "bibliothēkē"],
                        answerIndex: 0,
                        hint: "Greek 'apothēkē' became learned 'apothecary' and popular 'bodega' / 'boutique'!",
                        explanation: "All three are etymological doublets from Greek 'apothēkē' (storehouse)!"
                    )
                ),
                .history: DisciplineQuest(
                    discipline: .history,
                    title: "Food Preservation & Glass Jars",
                    storyContext: "Before refrigerators, mice relied on cool cellars and sealed glass jars.",
                    junior: QuestTierContent(
                        prompt: "Why were traditional food cellars built underground or on the lowest floor?",
                        options: ["The earth stays naturally cool in summer and above freezing in winter", "Mice dislike stairs", "Jars are heavy", "To catch rain"],
                        answerIndex: 0,
                        hint: "Earth is a natural thermal insulator!",
                        explanation: "Root cellars use the steady temperature of the earth to preserve food!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "In 1809, which French confectioner won Napoleon's prize by inventing airtight heat-sterilized food preservation in glass jars?",
                        options: ["Nicolas Appert", "Marie-Antoine Carême", "Auguste Escoffier", "Denis Papin"],
                        answerIndex: 0,
                        hint: "Canning is still called 'appertisation' in France in his honor!",
                        explanation: "Nicolas Appert invented airtight thermal food preservation in 1809!"
                    )
                )
            ]
        )
    ]

    static let house2Rooms: [MouseRoom] = [
        MouseRoom(
            id: "h2-r1",
            houseNumber: 2,
            floorLabel: "4th Floor Left",
            name: "Parmigiano & Pink-Fridge Kitchen",
            subtitle: "White cabinets, black range hood, pink fridge, jam jar tower, red 'Parm' box & Windsor chairs",
            photoName: "IMG_3718.jpg",
            themeColor: Color(red: 0.85, green: 0.48, blue: 0.55),
            relic: RoomRelic(icon: "", name: "Golden Tea Kettle", description: "Gleaming on the black kitchen counter"),
            hotspots: [
                HotspotPin(xPercent: 0.64, yPercent: 0.52, label: "Pastel Pink Fridge", note: "A retro pink double-door refrigerator below a framed photo of two smiling sisters!"),
                HotspotPin(xPercent: 0.43, yPercent: 0.66, label: "Red 'Parm' Cheese Box", note: "On the floor under the white chair sits a bright red 'Parm' (Parmigiano) cheese box!")
            ],
            quests: [
                .math: DisciplineQuest(
                    discipline: .math,
                    title: "The Stacked Jam Jar Tower",
                    storyContext: "In the right corner of the gourmet kitchen next to the pink refrigerator stands a tall stack of preserve jars.",
                    junior: QuestTierContent(
                        prompt: "Four jam jars are stacked in a tower: Strawberry (85 g), Apricot (95 g), Fig (80 g), and Blackberry (90 g). What is their total weight?",
                        options: ["320 grams", "340 grams", "350 grams", "360 grams"],
                        answerIndex: 2,
                        hint: "(85 + 95) + (80 + 90) = 180 + 170!",
                        explanation: "180 + 170 = 350 grams!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Around the white dining table stand 4 white Windsor chairs. In how many distinct ways can 3 mice be seated in 3 of the 4 chairs?",
                        options: ["12 ways", "16 ways", "24 ways", "64 ways"],
                        answerIndex: 2,
                        hint: "4 choices for the first mouse × 3 for the second × 2 for the third.",
                        explanation: "P(4,3) = 4 × 3 × 2 = 24 seating arrangements!"
                    )
                ),
                .logic: DisciplineQuest(
                    discipline: .logic,
                    title: "What's Inside the Pastel Pink Fridge?",
                    storyContext: "The pink fridge has 3 shelves (Top, Middle, Bottom) holding Butter, Mascarpone, and Lemon Curd.",
                    junior: QuestTierContent(
                        prompt: "(1) Butter is NOT on the Bottom shelf. (2) Mascarpone is directly above Lemon Curd. Which shelf holds the Butter?",
                        options: ["The Top shelf", "The Middle shelf", "The Bottom shelf", "On the table"],
                        answerIndex: 0,
                        hint: "Mascarpone and Lemon Curd must occupy two adjacent shelves!",
                        explanation: "Butter is on the Top shelf, Mascarpone in the Middle, and Lemon Curd on the Bottom!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Using only a 4-minute hourglass and a 7-minute hourglass, how can the mice measure an interval of 5 minutes?",
                        options: ["Flip both at t=0; flip the 4-min at t=4; at t=7 (when 7-min empties), 1 min remains in the 4-min glass (so from t=3 to t=8 is 5 minutes!)", "Wait 7 minutes and guess", "Impossible since gcd(4,7)=1", "Flip the 7-min twice"],
                        answerIndex: 0,
                        hint: "At t=3, the 7-min glass has 4 minutes left, and at t=7 the flipped 4-min glass has 1 minute left: 4 + 1 = 5!",
                        explanation: "Starting the boil at t=3 (when 4 min remain in the 7-min glass) plus the 1 min remaining in the flipped 4-min glass at t=7 measures 5 minutes!"
                    )
                ),
                .linguistics: DisciplineQuest(
                    discipline: .linguistics,
                    title: "Croissant & Tulip Etymology",
                    storyContext: "On the white table sit croissants and a tulip in a pink vase.",
                    junior: QuestTierContent(
                        prompt: "What does the French word 'CROISSANT' literally mean?",
                        options: ["Crescent / Growing Moon", "Butter Cloud", "Golden Horn", "Morning Twist"],
                        answerIndex: 0,
                        hint: "Think of the crescent moon!",
                        explanation: "'Croissant' means 'growing (crescent) moon'!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Through Turkish ('tülbent') and Persian ('dulband'), what headwear is the flower name 'TULIP' etymologically identical to?",
                        options: ["A turban", "A crown", "A beret", "A bonnet"],
                        answerIndex: 0,
                        hint: "Diplomats compared the flower's folded petals to a wound turban.",
                        explanation: "Both 'tulip' and 'turban' derive from Persian 'dulband'!"
                    )
                ),
                .history: DisciplineQuest(
                    discipline: .history,
                    title: "The Red 'Parm' Box & Samuel Pepys",
                    storyContext: "On the kitchen floor beside the chair sits a red 'Parm' (Parmigiano) box.",
                    junior: QuestTierContent(
                        prompt: "Parmigiano-Reggiano cheese has been crafted for nearly 1,000 years in which country?",
                        options: ["Italy (Parma and Reggio Emilia)", "Switzerland", "Belgium", "Portugal"],
                        answerIndex: 0,
                        hint: "Named after the Italian cities of Parma and Reggio!",
                        explanation: "Monks in Parma and Reggio Emilia, Italy, began making Parmigiano-Reggiano in the 12th century!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "During the Great Fire of London in 1666, which famous English diarist buried his prized wheel of Parmesan cheese in his garden to save it from the flames?",
                        options: ["Samuel Pepys", "John Evelyn", "Christopher Wren", "Isaac Newton"],
                        answerIndex: 0,
                        hint: "He kept the most famous diary of 1660s London.",
                        explanation: "Samuel Pepys buried his precious 'Parmazan cheese' and wine in his garden on September 4, 1666!"
                    )
                )
            ]
        ),
        MouseRoom(
            id: "h2-r2",
            houseNumber: 2,
            floorLabel: "4th Floor Right",
            name: "Crimson Rose Parlor & Hearth",
            subtitle: "Giant red wall rose, wooden fireplace, floral sofa set, wall maps & toy Rover",
            photoName: "IMG_3719.jpg",
            themeColor: Color(red: 0.75, green: 0.20, blue: 0.24),
            relic: RoomRelic(icon: "", name: "Crimson Velvet Rose", description: "Blooming high on the parlor gable wall"),
            hotspots: [
                HotspotPin(xPercent: 0.60, yPercent: 0.42, label: "Giant Crimson Wall Rose", note: "A big sculptural red rose mounted high on the parlor wall."),
                HotspotPin(xPercent: 0.69, yPercent: 0.72, label: "Wheeled Parlor Rover", note: "A black-and-white wheeled toy rover parked beside the right armchair!")
            ],
            quests: [
                .math: DisciplineQuest(
                    discipline: .math,
                    title: "The Rose Parlor Seating & Petals",
                    storyContext: "The floral sofa has 14 printed rosebuds, and each of the 2 armchairs has 6 rosebuds.",
                    junior: QuestTierContent(
                        prompt: "If each rosebud has 5 petals, how many petals are on the 14 sofa rosebuds + 6 left-chair rosebuds + 6 right-chair rosebuds?",
                        options: ["110 petals", "120 petals", "130 petals", "140 petals"],
                        answerIndex: 2,
                        hint: "(14 + 6 + 6) = 26 rosebuds × 5 petals!",
                        explanation: "26 × 5 = 130 petals!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "In polar coordinates, how many petals does the rose curve r(θ) = cos(4θ) trace over 0 ≤ θ < 2π?",
                        options: ["4 petals", "8 petals", "12 petals", "16 petals"],
                        answerIndex: 1,
                        hint: "For r = cos(kθ) with k even, there are 2k petals!",
                        explanation: "Since k = 4 is even, r = cos(4θ) has 2 × 4 = 8 petals!"
                    )
                ),
                .logic: DisciplineQuest(
                    discipline: .logic,
                    title: "Programming the Parlor Rover",
                    storyContext: "In the front-right corner of IMG_3719 sits a black-and-white wheeled rover!",
                    junior: QuestTierContent(
                        prompt: "The rover starts facing NORTH. It executes: TURN RIGHT, TURN RIGHT, TURN LEFT. Which direction is it facing now?",
                        options: ["EAST", "SOUTH", "WEST", "NORTH"],
                        answerIndex: 0,
                        hint: "2 Rights minus 1 Left = 1 net Right turn from North!",
                        explanation: "One net right turn from North faces EAST!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Moving only North (+y) or East (+x) on a grid from (0,0) to (4,3), how many shortest paths exist in total, and how many pass through (2,1)?",
                        options: ["35 total paths; 18 pass through (2, 1)", "35 total; 12 pass through (2, 1)", "21 total; 9 pass through (2, 1)", "70 total; 18 pass through (2, 1)"],
                        answerIndex: 0,
                        hint: "Total = C(7,3) = 35; through (2,1) = C(3,1) × C(4,2) = 3 × 6 = 18.",
                        explanation: "C(7,3) = 35 total paths, and C(3,1) × C(4,2) = 18 paths through (2,1)!"
                    )
                ),
                .linguistics: DisciplineQuest(
                    discipline: .linguistics,
                    title: "Sub Rosa — Under the Crimson Rose",
                    storyContext: "Why is a giant red rose hanging high above the parlor table?",
                    junior: QuestTierContent(
                        prompt: "What is the famous Latin phrase meaning 'under the rose' (used when a conversation is kept secret)?",
                        options: ["Sub rosa", "Carpe diem", "Terra firma", "Alma mater"],
                        answerIndex: 0,
                        hint: "'Sub' means 'under' and 'rosa' means 'rose'!",
                        explanation: "'Sub rosa' means 'under the rose' (confidential)!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "The English words 'MAP', 'NAPKIN', and 'APRON' all trace back to Latin 'mappa'. What did 'mappa' mean?",
                        options: ["A cloth or napkin (medieval world maps—mappae mundi—were painted on cloth)", "A compass needle", "A mountain", "A reed"],
                        answerIndex: 0,
                        hint: "Also 'a napron' became 'an apron' by rebracketing!",
                        explanation: "Latin 'mappa' meant a cloth/napkin, giving us map, napkin, and apron!"
                    )
                ),
                .history: DisciplineQuest(
                    discipline: .history,
                    title: "The Red Rose & Landscape Art",
                    storyContext: "The red rose on the wall recalls England's royal heraldry.",
                    junior: QuestTierContent(
                        prompt: "Which 15th-century English conflict was fought between the Red Rose of Lancaster and the White Rose of York?",
                        options: ["The Wars of the Roses", "Tulip Mania", "The Lily Rebellion", "The War of the Oranges"],
                        answerIndex: 0,
                        hint: "It ended with the creation of the red-and-white Tudor Rose!",
                        explanation: "The Wars of the Roses (1455–1487) united the Red and White roses!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Above the mantel hangs a landscape painting. Which 16th-century Flemish master painted 'Hunters in the Snow' (1565)?",
                        options: ["Pieter Bruegel the Elder", "Sandro Botticelli", "Michelangelo", "El Greco"],
                        answerIndex: 0,
                        hint: "Famous for panoramic seasonal landscapes in the Low Countries.",
                        explanation: "Pieter Bruegel the Elder painted 'Hunters in the Snow' in 1565!"
                    )
                )
            ]
        ),
        MouseRoom(
            id: "h2-r3",
            houseNumber: 2,
            floorLabel: "3rd Floor Left",
            name: "Sprinkled Donut & Elephant Bath",
            subtitle: "Glass shower stall, elephant wall art, yellow flowers, frosted donut & crystal geode rock",
            photoName: "IMG_3720.jpg",
            themeColor: Color(red: 0.32, green: 0.65, blue: 0.48),
            relic: RoomRelic(icon: "", name: "Sparkling Quartz Geode", description: "Resting beside the sprinkled donut cushion"),
            hotspots: [
                HotspotPin(xPercent: 0.31, yPercent: 0.58, label: "Frosted Sprinkled Donut", note: "A plush cream-frosted donut cushion with colorful sprinkles!"),
                HotspotPin(xPercent: 0.39, yPercent: 0.61, label: "Sparkling Geode Rock", note: "A real textured white crystal geode rock beside the donut!"),
                HotspotPin(xPercent: 0.47, yPercent: 0.43, label: "Elephant Wall Print", note: "A framed illustration of a trumpeting elephant.")
            ],
            quests: [
                .math: DisciplineQuest(
                    discipline: .math,
                    title: "The Topology of the Sprinkled Donut",
                    storyContext: "In the bathroom sits a plush sprinkled donut and a crystal geode.",
                    junior: QuestTierContent(
                        prompt: "In TOPOLOGY (rubber-sheet geometry), because the sprinkled donut has 1 hole through its middle, which other object is topologically identical to a donut?",
                        options: ["A teacup with 1 handle", "A solid marble (0 holes)", "Spectacles with 2 holes", "A flat plate"],
                        answerIndex: 0,
                        hint: "Count the number of holes going all the way through!",
                        explanation: "A donut (torus) and a teacup both have 1 hole (genus 1)!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "For a convex crystal polyhedron, Euler's formula gives V - E + F = 2. What is the Euler characteristic χ = V - E + F for a mesh tiling the surface of the Sprinkled Donut (a torus of genus g = 1)?",
                        options: ["χ = 0", "χ = 1", "χ = 2", "χ = -2"],
                        answerIndex: 0,
                        hint: "Use χ = 2 - 2g with g = 1.",
                        explanation: "For a torus (g = 1), χ = 2 - 2(1) = 0!"
                    )
                ),
                .logic: DisciplineQuest(
                    discipline: .logic,
                    title: "The Elephant, the Donut & the Shower",
                    storyContext: "Three mice visit the Elephant Bathroom one after another.",
                    junior: QuestTierContent(
                        prompt: "(1) The mouse who admires the geode goes FIRST. (2) The mouse who takes a shower goes LAST. What does the SECOND mouse do?",
                        options: ["Brushes teeth", "Takes a shower", "Admires the geode", "Paints the elephant"],
                        answerIndex: 0,
                        hint: "Only one activity remains for 2nd place!",
                        explanation: "1st admires the geode, 2nd brushes teeth, and 3rd takes a shower!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "With 2 straight vertical knife cuts from above through a ring-shaped donut lying flat on a plate (without moving pieces between cuts), what is the MAXIMUM number of pieces you can get?",
                        options: ["5 pieces", "6 pieces", "4 pieces", "8 pieces"],
                        answerIndex: 1,
                        hint: "Let the two cuts cross inside the dough of the ring while both pass through the central hole!",
                        explanation: "Crossing inside the dough and slicing the opposite side of the ring divides the torus into 6 pieces!"
                    )
                ),
                .linguistics: DisciplineQuest(
                    discipline: .linguistics,
                    title: "Geode & Elephant Chess Etymology",
                    storyContext: "On the bathroom floor sits a geode rock, and on the wall hangs an elephant.",
                    junior: QuestTierContent(
                        prompt: "The word 'GEODE' comes from Greek 'geōdēs'. What does 'geō-' (as in geography and geology) mean?",
                        options: ["Earth", "Water", "Star", "Wind"],
                        answerIndex: 0,
                        hint: "Think of Geography and Geology!",
                        explanation: "Greek 'gē' means 'Earth'!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "In chess, the piece called the 'Bishop' in English was originally an ELEPHANT (Arabic 'al-fīl'). Which European language still calls the chess Bishop 'alfil'?",
                        options: ["Spanish ('alfil')", "German ('Läufer')", "French ('fou')", "Russian ('slon'—which also means elephant!)"],
                        answerIndex: 0,
                        hint: "Spanish borrowed 'alfil' directly from Arabic 'al-fīl' (the elephant)!",
                        explanation: "Spanish 'alfil' comes directly from Arabic 'al-fīl' (the elephant)!"
                    )
                ),
                .history: DisciplineQuest(
                    discipline: .history,
                    title: "Archimedes' Bath & Charlemagne's Elephant",
                    storyContext: "A bathroom with an elephant painting unites two great historical tales!",
                    junior: QuestTierContent(
                        prompt: "Which ancient Greek scientist leaped from his bath shouting 'EUREKA!' when he discovered water displacement?",
                        options: ["Archimedes of Syracuse", "Socrates", "Julius Caesar", "Alexander the Great"],
                        answerIndex: 0,
                        hint: "He tested whether King Hiero's crown was pure gold!",
                        explanation: "Archimedes discovered buoyancy in the baths of Syracuse!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "In 802 AD, Caliph Harun al-Rashid sent a famous white elephant from Baghdad to Emperor Charlemagne. What was the elephant's name?",
                        options: ["Abul-Abbas", "Hanno", "Surus", "Suleiman"],
                        answerIndex: 0,
                        hint: "He traveled from Baghdad across the Alps to Aachen in 802 AD.",
                        explanation: "Charlemagne's prized elephant was named Abul-Abbas!"
                    )
                )
            ]
        ),
        MouseRoom(
            id: "h2-r4",
            houseNumber: 2,
            floorLabel: "3rd Floor Right",
            name: "Keychain Wardrobe & Critter Council",
            subtitle: "Tan wardrobe with real silver keychain clasp, green bed & 9 fuzzy critters on a brown shelf",
            photoName: "IMG_3721.jpg",
            themeColor: Color(red: 0.82, green: 0.48, blue: 0.18),
            relic: RoomRelic(icon: "", name: "Silver Lobster-Clasp Key", description: "Gleaming on the tan wardrobe door"),
            hotspots: [
                HotspotPin(xPercent: 0.14, yPercent: 0.60, label: "Silver Keychain Wardrobe", note: "A tan cardboard wardrobe with a real silver metal keychain & clasp hanging down the front!"),
                HotspotPin(xPercent: 0.75, yPercent: 0.63, label: "Council of 9 Fuzzy Critters", note: "A ginger fox, white kittens, bunnies, and hamsters gathered on the brown tiered shelf!")
            ],
            quests: [
                .math: DisciplineQuest(
                    discipline: .math,
                    title: "The Silver Keychain Code",
                    storyContext: "Hanging on the tan wardrobe door in IMG_3721 is a giant silver metal keychain clasp.",
                    junior: QuestTierContent(
                        prompt: "In the room are 9 fuzzy critters (4 Kittens, 3 Bunnies, 2 Foxes) plus Clover the Mouse. Since each has 2 ears, how many ears are in the room altogether?",
                        options: ["18 ears", "20 ears", "22 ears", "24 ears"],
                        answerIndex: 1,
                        hint: "(9 + 1) animals × 2 ears each!",
                        explanation: "10 animals × 2 ears = 20 ears!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "The wardrobe has a 3-digit code ABC made of distinct prime digits from {2, 3, 5, 7} such that the 2-digit numbers AB and BC are BOTH prime. What is ABC?",
                        options: ["237", "357", "532", "732"],
                        answerIndex: 0,
                        hint: "The only 2-digit primes made of distinct digits from {2,3,5,7} are 23, 37, 53, and 73!",
                        explanation: "Chaining 23 and 37 gives ABC = 237!"
                    )
                ),
                .logic: DisciplineQuest(
                    discipline: .logic,
                    title: "The Council of Truth-Telling & Lying Critters",
                    storyContext: "On the brown shelf sit the White Kitten, the Ginger Fox, and the Cream Bunny.",
                    junior: QuestTierContent(
                        prompt: "One critter hid the key, and ONLY ONE tells the truth: • Kitten: 'Fox hid it!' • Fox: 'I did NOT hide it!' • Bunny: 'I did NOT hide it!' Who hid the key?",
                        options: ["The Cream Bunny", "The White Kitten", "The Ginger Fox", "Nobody"],
                        answerIndex: 0,
                        hint: "Kitten and Fox contradict each other, so the single truth-teller is one of them—meaning Bunny is lying!",
                        explanation: "Bunny's claim ('I did not hide it') is a lie, so the Cream Bunny hid the key!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Nine critters sit on the 3-tier brown shelf so that Top, Middle, and Bottom tiers each hold a different number of critters (at least 2 per tier), with the most on the Bottom. How many are on each tier?",
                        options: ["2 on Top, 3 in Middle, 4 on Bottom", "1 on Top, 3 in Middle, 5 on Bottom", "3, 3, and 3", "2, 2, and 5"],
                        answerIndex: 0,
                        hint: "The only three distinct integers ≥ 2 summing to 9 are 2, 3, and 4!",
                        explanation: "2 + 3 + 4 = 9 critters!"
                    )
                ),
                .linguistics: DisciplineQuest(
                    discipline: .linguistics,
                    title: "Wardrobe vs. Armoire",
                    storyContext: "The tan cabinet with the giant keychain is the mice's wardrobe.",
                    junior: QuestTierContent(
                        prompt: "From Old French 'garderobe' ('ward' + 'robe'), what does 'WARDROBE' literally mean?",
                        options: ["Guard (protect) the robes / clothes", "Warm wooden box", "Tall door", "Walking room"],
                        answerIndex: 0,
                        hint: "To 'ward' or 'guard' means to keep safe!",
                        explanation: "'Wardrobe' literally means 'guard the robes'!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "From Latin 'armarium' (root 'arma'), what was originally stored in an 'ARMOIRE' in Ancient Rome and medieval monasteries?",
                        options: ["Tools/weapons ('arma'), and later monastic library scrolls and books", "Bread loaves", "Harps", "Perfumes"],
                        answerIndex: 0,
                        hint: "Look at the Latin root 'arma' (tools, gear, armor).",
                        explanation: "Latin 'armarium' stored tools/armor, and later monastic manuscripts!"
                    )
                ),
                .history: DisciplineQuest(
                    discipline: .history,
                    title: "Chatelaines & Pin-Tumbler Locks",
                    storyContext: "The giant silver metal clasp hanging on the wardrobe looks just like a historic belt clasp.",
                    junior: QuestTierContent(
                        prompt: "In medieval and Victorian homes, what was the decorative waist clasp holding all the household keys called?",
                        options: ["A chatelaine", "A chandelier", "A catapult", "A clavichord"],
                        answerIndex: 0,
                        hint: "Named after the French word for the lady of a castle ('château')!",
                        explanation: "A 'chatelaine' held the household keys and miniature tools at the waist!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Which 19th-century American inventor patented the modern flat pin-tumbler cylinder lock (inspired by Ancient Egyptian wooden locks)?",
                        options: ["Linus Yale Jr.", "Elisha Otis", "Samuel Colt", "Eli Whitney"],
                        answerIndex: 0,
                        hint: "His 4-letter surname is stamped on millions of brass door keys.",
                        explanation: "Linus Yale Sr. and Jr. commercialized the modern pin-tumbler cylinder lock!"
                    )
                )
            ]
        ),
        MouseRoom(
            id: "h2-r5",
            houseNumber: 2,
            floorLabel: "2nd Floor Left",
            name: "Pink Iron Bed & Whispered Note",
            subtitle: "Pink wrought-iron bed, hot-pink purse, potted pink daisy, wall note & plushie corner",
            photoName: "IMG_3722.jpg",
            themeColor: Color(red: 0.85, green: 0.36, blue: 0.58),
            relic: RoomRelic(icon: "", name: "Ruby Clasp Purse", description: "Resting beside the pink wrought-iron bedpost"),
            hotspots: [
                HotspotPin(xPercent: 0.28, yPercent: 0.52, label: "Taped Left-Wall Note", note: "A tiny handwritten note taped right above the pink bed in IMG_3722!"),
                HotspotPin(xPercent: 0.35, yPercent: 0.66, label: "Pink Bed & Hot-Pink Purse", note: "A pink iron bed with a hot-pink handbag at the footpost and a potted pink daisy.")
            ],
            quests: [
                .math: DisciplineQuest(
                    discipline: .math,
                    title: "Fibonacci Petals on the Pink Daisy",
                    storyContext: "Beside the two pink beds stands a cheerful potted pink daisy.",
                    junior: QuestTierContent(
                        prompt: "Daisy petals grow in Fibonacci numbers: 1, 2, 3, 5, 8, 13, 21... What is the NEXT Fibonacci number after 13 and 21?",
                        options: ["34 petals (13 + 21)", "42 petals", "31 petals", "29 petals"],
                        answerIndex: 0,
                        hint: "Add the previous two numbers together: 13 + 21!",
                        explanation: "13 + 21 = 34 petals!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "The ratio of consecutive Fibonacci numbers F(n+1)/F(n) converges to the Golden Ratio φ. What is the exact value of φ?",
                        options: ["(1 + √5) / 2 ≈ 1.61803...", "√2 ≈ 1.41421...", "π / 2 ≈ 1.57079...", "(1 + √3) / 2"],
                        answerIndex: 0,
                        hint: "Positive root of φ² - φ - 1 = 0.",
                        explanation: "φ = (1 + √5) / 2 ≈ 1.618034!"
                    )
                ),
                .logic: DisciplineQuest(
                    discipline: .logic,
                    title: "The Hot-Pink Purse & Plushie Hugs",
                    storyContext: "At the foot of the pink iron bed rests a tiny hot-pink handbag.",
                    junior: QuestTierContent(
                        prompt: "Inside the purse are 3 ribbons: Rose, Gold, and Mint. Rosalind pulls out 2 ribbons and NEITHER is Gold. Which two did she pull out?",
                        options: ["Rose and Mint", "Rose and Gold", "Gold and Mint", "Two Gold ribbons"],
                        answerIndex: 0,
                        hint: "Remove Gold from the 3 ribbons!",
                        explanation: "Removing Gold leaves Rose and Mint!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "In the corner pile, 4 plushies (Bear, Koala, Duck, Dino) trade mutual hugs. Bear hugged 3 plushies, Koala hugged 2, and Duck hugged 1. How many plushies did Dino hug?",
                        options: ["2 plushies (Bear and Koala)", "1 plushie", "3 plushies", "0 plushies"],
                        answerIndex: 0,
                        hint: "Bear hugged all 3, so Duck's only hug is with Bear; thus Koala's second hug must be with Dino!",
                        explanation: "Dino hugged Bear and Koala = 2 plushies!"
                    )
                ),
                .linguistics: DisciplineQuest(
                    discipline: .linguistics,
                    title: "The Poetic Secret of the 'DAISY'",
                    storyContext: "Next to the wall note blooms a pink daisy.",
                    junior: QuestTierContent(
                        prompt: "'DAISY' comes from Old English 'dæges ēage' because it opens its petals at dawn. What did 'dæges ēage' mean?",
                        options: ["Day's eye", "Dainty sky", "Dancing bee", "Dewy leaf"],
                        answerIndex: 0,
                        hint: "Say 'Day's eye' quickly!",
                        explanation: "Old English 'dæges ēage' meant 'the Day's Eye'!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Rearranging 'LISTEN' gives 'SILENT'. What is this called, and what does the French word for daisy ('marguerite') mean in Greek?",
                        options: ["An anagram; and 'marguerite' comes from Greek 'margaritēs' ('pearl')", "An acrostic; 'mars'", "A spoonerism; 'sea'", "A metonym; 'coral'"],
                        answerIndex: 0,
                        hint: "LISTEN ↔ SILENT is an anagram; Greek 'margaritēs' means pearl.",
                        explanation: "An anagram, and 'marguerite' derives from Greek 'margaritēs' (pearl)!"
                    )
                ),
                .history: DisciplineQuest(
                    discipline: .history,
                    title: "Reticules & Teddy Bears",
                    storyContext: "A tiny handbag and plush teddy bears decorate the room.",
                    junior: QuestTierContent(
                        prompt: "Around 1800, what were small drawstring wrist purses playfully called?",
                        options: ["Reticules (or 'ridicules')", "Portfolios", "Knapsacks", "Bandoliers"],
                        answerIndex: 0,
                        hint: "From Latin 'reticulum' (little net bag)!",
                        explanation: "Regency wrist purses were called 'reticules'!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Which U.S. President inspired the creation of the 'Teddy's Bear' plush toy in November 1902?",
                        options: ["Theodore Roosevelt", "Franklin D. Roosevelt", "William Howard Taft", "Woodrow Wilson"],
                        answerIndex: 0,
                        hint: "He refused to shoot a tied-up bear in Mississippi in 1902.",
                        explanation: "President Theodore 'Teddy' Roosevelt inspired Morris & Rose Michtom's 1902 'Teddy's Bear'!"
                    )
                )
            ]
        ),
        MouseRoom(
            id: "h2-r6",
            houseNumber: 2,
            floorLabel: "2nd Floor Right",
            name: "Handwritten Scroll & Unicorn Study",
            subtitle: "Handwritten story taped to the back wall, white armoire, rocking unicorn, puppy & ginger cat",
            photoName: "IMG_3723.jpg",
            themeColor: Color(red: 0.45, green: 0.38, blue: 0.68),
            relic: RoomRelic(icon: "", name: "The Whispered Manuscript", description: "Copied from the handwritten page taped to the study wall"),
            hotspots: [
                HotspotPin(xPercent: 0.52, yPercent: 0.38, label: "Handwritten Wall Scroll", note: "Taped to the back wall in IMG_3723 is a real multi-line handwritten story page!"),
                HotspotPin(xPercent: 0.54, yPercent: 0.53, label: "Rocking Unicorn", note: "A miniature white unicorn on a blue base beside the white double-door armoire."),
                HotspotPin(xPercent: 0.63, yPercent: 0.56, label: "Ginger Cat Guardian", note: "A plump orange ginger cat guarding the study cabinet.")
            ],
            quests: [
                .math: DisciplineQuest(
                    discipline: .math,
                    title: "Counting Legs Around the Study Stools",
                    storyContext: "In the Unicorn Study sit three-legged stools and four-legged critters.",
                    junior: QuestTierContent(
                        prompt: "The Handwritten Scroll has 7 lines with 6 words per line. At 14 words per minute, how many minutes does it take to read?",
                        options: ["2 minutes", "3 minutes", "4 minutes", "5 minutes"],
                        answerIndex: 1,
                        hint: "7 × 6 = 42 words, divided by 14!",
                        explanation: "42 ÷ 14 = 3 minutes!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "There are 8 items in the study—some are 3-legged Stools and some are 4-legged Critters—with 29 legs in total. How many 4-legged Critters are there?",
                        options: ["5 Critters (and 3 Stools)", "4 Critters (and 4 Stools)", "6 Critters (and 2 Stools)", "3 Critters (and 5 Stools)"],
                        answerIndex: 0,
                        hint: "29 - (8 × 3) = 5 extra legs!",
                        explanation: "5 Critters (20 legs) + 3 Stools (9 legs) = 29 legs!"
                    )
                ),
                .logic: DisciplineQuest(
                    discipline: .logic,
                    title: "Sneaking Past the Ginger Cat Guardian",
                    storyContext: "The plump orange Ginger Cat guards the white double-door armoire.",
                    junior: QuestTierContent(
                        prompt: "Rule: 'The Ginger Cat naps whenever the Puppy barks OR the Unicorn rocks.' Right now the Unicorn IS rocking. What is the Ginger Cat doing?",
                        options: ["Napping peacefully!", "Wide awake", "Chasing a ball", "Reading"],
                        answerIndex: 0,
                        hint: "An 'OR' condition is true as soon as either part is true!",
                        explanation: "Since the Unicorn is rocking, the Ginger Cat is napping!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "The White Armoire has two doors (one holds the Quill and has a TRUE inscription; the other has a FALSE inscription). Left Door: 'Both doors have true inscriptions.' Right Door: 'The Quill is behind the Right Door.' Where is the Quill?",
                        options: ["Behind the Right Door", "Behind the Left Door", "Behind neither", "Behind both"],
                        answerIndex: 0,
                        hint: "Since only one door is true, the Left Door ('Both are true') must be FALSE!",
                        explanation: "The Left Door is false, so the Right Door is true and holds the Silver Quill!"
                    )
                ),
                .linguistics: DisciplineQuest(
                    discipline: .linguistics,
                    title: "Deciphering the Study Wall Scroll",
                    storyContext: "Look at the handwritten note taped to the back wall of IMG_3723!",
                    junior: QuestTierContent(
                        prompt: "The word 'UNICORN' comes from Latin 'uni-' + 'cornu'. What do those two roots mean?",
                        options: ["One + Horn", "White + Horse", "Magic + Star", "Silver + Mane"],
                        answerIndex: 0,
                        hint: "Think of 'unicycle' (one wheel) and 'cornucopia' (horn)!",
                        explanation: "Latin 'unus' (one) + 'cornu' (horn) = 'one-horned'!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "What do the Latin roots of 'MANUSCRIPT' mean, and what is a medieval 'PALIMPSEST'?",
                        options: ["'Written by hand' (manu scriptus); a parchment scraped clean and reused over an older text", "'Printed book'; a wax seal", "'Spoken tale'; a quill", "'Royal law'; an obelisk"],
                        answerIndex: 0,
                        hint: "'Manus' = hand, 'scriptus' = written; Greek 'palimpsēstos' = scraped again.",
                        explanation: "'Manuscript' means written by hand, and a 'palimpsest' is a reused parchment with hidden writing beneath!"
                    )
                ),
                .history: DisciplineQuest(
                    discipline: .history,
                    title: "Paper & The Rosetta Stone",
                    storyContext: "The mice preserve their chronicle on a sheet of paper taped to the wall.",
                    junior: QuestTierContent(
                        prompt: "Which ancient civilization invented PAPER around 105 AD?",
                        options: ["Ancient China (Han Dynasty)", "The Vikings", "The Aztecs", "Sparta"],
                        answerIndex: 0,
                        hint: "Attributed to court official Cai Lun during the Han Dynasty!",
                        explanation: "Paper was invented in Han Dynasty China around 105 AD!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "In 1822, which French scholar deciphered Ancient Egyptian hieroglyphs on the Rosetta Stone?",
                        options: ["Jean-François Champollion", "Howard Carter", "Heinrich Schliemann", "Arthur Evans"],
                        answerIndex: 0,
                        hint: "He used Coptic and the Greek royal names Ptolemy and Cleopatra.",
                        explanation: "Jean-François Champollion cracked the Rosetta Stone hieroglyphs in 1822!"
                    )
                )
            ]
        ),
        MouseRoom(
            id: "h2-r7",
            houseNumber: 2,
            floorLabel: "Ground Floor Right",
            name: "Sailor's Bunk & Silver Crescent Moon",
            subtitle: "Sailor-striped mouse in white mesh bunk bed, shimmering silver crescent-moon cradle & wall cookies",
            photoName: "IMG_3725.jpg",
            themeColor: Color(red: 0.20, green: 0.38, blue: 0.65),
            relic: RoomRelic(icon: "", name: "Silver Lunar Sextant", description: "Tucked beneath the shimmering silver crescent-moon cradle"),
            hotspots: [
                HotspotPin(xPercent: 0.35, yPercent: 0.50, label: "Pippin the Sailor Mouse", note: "A mouse in a blue-and-white striped Breton sailor shirt sleeping under the white mesh bunk!"),
                HotspotPin(xPercent: 0.60, yPercent: 0.58, label: "Silver Crescent Cradle", note: "A shimmering silver crescent-moon bed cradling baby mice!")
            ],
            quests: [
                .math: DisciplineQuest(
                    discipline: .math,
                    title: "The Sailor's Stripes & Crescent Moon",
                    storyContext: "In IMG_3725, Pippin sleeps beside a shimmering silver crescent-moon cradle.",
                    junior: QuestTierContent(
                        prompt: "A traditional French Navy Breton sailor shirt has 21 white stripes and 20 navy-blue stripes. How many stripes in total?",
                        options: ["39 stripes", "40 stripes", "41 stripes", "42 stripes"],
                        answerIndex: 2,
                        hint: "Add 21 + 20!",
                        explanation: "21 + 20 = 41 stripes!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "By the Lune of Hippocrates theorem (c. 440 BC), if semicircles are drawn on the legs and hypotenuse of a right isosceles triangle with legs of 4 cm, what is the exact combined area of the two outer crescent lunes?",
                        options: ["8 cm² (equal to the triangle's area ½ × 4 × 4, with no π!)", "4π cm²", "8π - 8 cm²", "16 cm²"],
                        answerIndex: 0,
                        hint: "The curved semicircle terms cancel out via a² + b² = c², leaving the triangle's area!",
                        explanation: "The two crescent lunes have the exact same area as the right triangle: ½ × 4 × 4 = 8 cm²!"
                    )
                ),
                .logic: DisciplineQuest(
                    discipline: .logic,
                    title: "Top Bunk Watch & Moon Phases",
                    storyContext: "One mouse sleeps on the bottom mattress while another keeps night watch.",
                    junior: QuestTierContent(
                        prompt: "If 3 sailor mice share a 12-hour night watch equally, how many hours does each mouse watch the silver moon?",
                        options: ["3 hours", "4 hours", "5 hours", "6 hours"],
                        answerIndex: 1,
                        hint: "Divide 12 hours by 3 mice!",
                        explanation: "12 ÷ 3 = 4 hours each!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "In the Northern Hemisphere ('DOC' rule), if the Moon's illuminated crescent is on the RIGHT side (like the curve of a capital D), what phase is it?",
                        options: ["Waxing Crescent (visible in the western sky after sunset)", "Waning Crescent", "Full Moon", "Third Quarter"],
                        answerIndex: 0,
                        hint: "D = Waxing (right side lit), O = Full, C = Waning (left side lit).",
                        explanation: "Right-side illuminated in the Northern Hemisphere is a Waxing Crescent!"
                    )
                ),
                .linguistics: DisciplineQuest(
                    discipline: .linguistics,
                    title: "Nautical Idioms & Lunar Calques",
                    storyContext: "Pippin speaks in classic maritime idioms!",
                    junior: QuestTierContent(
                        prompt: "Which everyday expressions originally came from sailing ships?",
                        options: ["'Learning the ropes' and 'Three sheets to the wind'", "'Barking up the wrong tree'", "'Spilling the beans'", "'Hitting the hay'"],
                        answerIndex: 0,
                        hint: "Ships had hundreds of ropes and sail lines called 'sheets'!",
                        explanation: "Both expressions come directly from tall-ship sailing rigging!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "English 'Monday' (Moon's day) translated Latin 'dies Lunae' root-for-root into Germanic. What is a root-for-root loan translation called?",
                        options: ["A calque", "Metathesis", "Apocope", "Onomatopoeia"],
                        answerIndex: 0,
                        hint: "Like French 'gratte-ciel' for 'skyscraper'.",
                        explanation: "A root-for-root loan translation is called a 'calque'!"
                    )
                ),
                .history: DisciplineQuest(
                    discipline: .history,
                    title: "Longitude at Sea & The Breton Shirt",
                    storyContext: "Why do sailors wear stripes, and how did they find longitude?",
                    junior: QuestTierContent(
                        prompt: "Why did the 1858 French Navy uniform introduce blue-and-white stripes for sailors?",
                        options: ["To make sailors easier to spot in the waves (and honor 21 naval victories!)", "To scare sharks", "To measure rope", "To glow at night"],
                        answerIndex: 0,
                        hint: "Stripes stand out against ocean foam!",
                        explanation: "High-contrast stripes made sailors easy to spot in rigging and waves!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Which 18th-century English clockmaker solved the Longitude Problem by inventing the H4 marine chronometer?",
                        options: ["John Harrison", "Galileo Galilei", "Ferdinand Magellan", "Edmond Halley"],
                        answerIndex: 0,
                        hint: "He built sea clocks H1, H2, H3, and the watch-sized H4.",
                        explanation: "John Harrison solved the Longitude Problem with his H4 marine chronometer!"
                    )
                )
            ]
        ),
        MouseRoom(
            id: "h2-r8",
            houseNumber: 2,
            floorLabel: "Ground Floor Left & Courtyard",
            name: "Daisy Garden & Vintage Red Roadster",
            subtitle: "Floral daisy garden bed, Vintage Burgundy Convertible Roadster & Handmade Wooden Rover Cart",
            photoName: "IMG_3724.jpg",
            themeColor: Color(red: 0.55, green: 0.14, blue: 0.18),
            relic: RoomRelic(icon: "", name: "Golden Roadster Ignition Key", description: "Starts the Vintage Burgundy Convertible Roadster!"),
            hotspots: [
                HotspotPin(xPercent: 0.26, yPercent: 0.66, label: "Vintage Burgundy Roadster", note: "Parked on the hardwood floor in IMG_3724 is a burgundy convertible car with tufted cream seats!"),
                HotspotPin(xPercent: 0.58, yPercent: 0.78, label: "Handmade Wooden Rover Cart", note: "Beside the roadster sits a handmade wooden rover cart with black wheels!")
            ],
            quests: [
                .math: DisciplineQuest(
                    discipline: .math,
                    title: "The Grand Roadster & Wooden Cart Rally",
                    storyContext: "Parked outside on the hardwood floor are the Burgundy Convertible Roadster and the Wooden Cart!",
                    junior: QuestTierContent(
                        prompt: "The Roadster drives at 30 cm/s and the Wooden Cart rolls at 18 cm/s. After 5 seconds in the same direction, how far ahead is the Roadster?",
                        options: ["48 cm ahead", "60 cm ahead", "72 cm ahead", "90 cm ahead"],
                        answerIndex: 1,
                        hint: "(30 - 18) = 12 cm/s × 5 seconds!",
                        explanation: "12 × 5 = 60 cm ahead!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "The Roadster drives to the Kitchen at 30 cm/s and immediately returns along the same path at 60 cm/s. What is its average speed for the round trip?",
                        options: ["40 cm/s (harmonic mean: 2×30×60 / 90)", "45 cm/s", "42.5 cm/s", "50 cm/s"],
                        answerIndex: 0,
                        hint: "Over a 60 cm path, going takes 2 s and returning takes 1 s: 120 cm ÷ 3 s = 40 cm/s!",
                        explanation: "By the harmonic mean, average speed = 40 cm/s!"
                    )
                ),
                .logic: DisciplineQuest(
                    discipline: .logic,
                    title: "Seating the 4 Mice in the Burgundy Roadster",
                    storyContext: "The Roadster has 4 seats: Front Driver, Front Passenger, Back Left, and Back Right.",
                    junior: QuestTierContent(
                        prompt: "(1) Only Barnaby or Clover can sit in Front Driver. (2) Clover sits in Back Left. (3) Pippin sits in Front Passenger. Where does Princess Rosalind sit?",
                        options: ["In Back Right (while Barnaby drives!)", "In Front Driver", "In Front Passenger", "In Back Left"],
                        answerIndex: 0,
                        hint: "Clover is in Back Left, so Barnaby drives, and Pippin is in Front Passenger!",
                        explanation: "Princess Rosalind takes the Back Right seat!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "The Roadster has 4 wheels plus 1 spare tire (5 tires total). Sharing a 100-meter trip equally across all 5 tires, how many meters does each tire roll?",
                        options: ["80 meters per tire", "75 meters per tire", "85 meters per tire", "100 meters per tire"],
                        answerIndex: 0,
                        hint: "4 active wheels × 100 m = 400 tire-meters divided among 5 tires!",
                        explanation: "400 ÷ 5 = 80 meters per tire!"
                    )
                ),
                .linguistics: DisciplineQuest(
                    discipline: .linguistics,
                    title: "Automobile & Cabriolet Etymology",
                    storyContext: "The burgundy convertible gleams in the courtyard.",
                    junior: QuestTierContent(
                        prompt: "'AUTOMOBILE' combines Greek 'auto-' with Latin 'mobilis'. What do they mean together?",
                        options: ["Self + Moving", "Fast + Wheel", "Metal + Carriage", "Road + Engine"],
                        answerIndex: 0,
                        hint: "'Auto-' = self, 'mobile' = moving!",
                        explanation: "'Automobile' literally means 'self-moving'!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "Why is a convertible carriage/car (and 'taxicab') called a 'CABRIOLET'?",
                        options: ["From French 'cabriole' / Italian 'capriola' ('a goat's leap', Latin 'caper'), because light carriages bounced like a young goat", "After Monsieur Cabrio", "From Latin 'caballus'", "From Spanish 'cabeza'"],
                        answerIndex: 0,
                        hint: "Compare the island of Capri and the ballet leap 'cabriole'.",
                        explanation: "'Cabriolet' comes from 'cabriole' (a goat's leap)!"
                    )
                ),
                .history: DisciplineQuest(
                    discipline: .history,
                    title: "Bertha Benz & The First Mars Rover",
                    storyContext: "Outside the house sit both a vintage motorcar and a handmade rover cart!",
                    junior: QuestTierContent(
                        prompt: "In August 1888, who made the world's first long-distance automobile road trip (65 miles across Germany)?",
                        options: ["Bertha Benz", "Amelia Earhart", "Marie Curie", "Queen Victoria"],
                        answerIndex: 0,
                        hint: "She drove the Benz Patent-Motorwagen with her two sons and invented brake linings along the way!",
                        explanation: "Bertha Benz made history's first long-distance road trip in 1888!"
                    ),
                    scholar: QuestTierContent(
                        prompt: "On July 4, 1997, NASA landed the first wheeled rover on Mars. What was its name?",
                        options: ["Sojourner (named after Sojourner Truth)", "Perseverance", "Curiosity", "Ingenuity"],
                        answerIndex: 0,
                        hint: "Named after the 19th-century abolitionist and women's rights activist.",
                        explanation: "NASA's 1997 Mars Pathfinder rover was named 'Sojourner'!"
                    )
                )
            ]
        )
    ]
}
