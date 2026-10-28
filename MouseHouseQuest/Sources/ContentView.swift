import SwiftUI

struct BundledSpriteView: View {
    let name: String
    var contentMode: ContentMode = .fit

    var body: some View {
        if let uiImage = GameStore.loadBundledImage(named: name) {
            Image(uiImage: uiImage)
                .resizable()
                .aspectRatio(contentMode: contentMode)
        } else {
            Image(systemName: "sparkles")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .foregroundColor(.orange)
        }
    }
}

struct ContentView: View {
    @EnvironmentObject var store: GameStore

    var body: some View {
        NavigationStack {
            ZStack {
                // Cold-Press Watercolor Paper or Candlelit Twilight Wash
                if store.candleLightMode {
                    LinearGradient(
                        colors: [
                            Color(red: 0.14, green: 0.12, blue: 0.16),
                            Color(red: 0.18, green: 0.14, blue: 0.12),
                            Color(red: 0.11, green: 0.09, blue: 0.11)
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                    .ignoresSafeArea()
                } else {
                    LinearGradient(
                        colors: [
                            Color(red: 0.98, green: 0.95, blue: 0.89),
                            Color(red: 0.94, green: 0.88, blue: 0.78),
                            Color(red: 0.90, green: 0.82, blue: 0.69)
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                    .ignoresSafeArea()
                }

                ScrollView {
                    VStack(spacing: 18) {
                        StorybookHeroHeader()
                        WatercolorCompanionGuildBar()
                        RealmAndDisciplineFilterBar()

                        if store.houseFilter == 3 {
                            PostboxLaneVillageSection()
                        } else {
                            if store.houseFilter == 0 || store.houseFilter == 1 {
                                DollhouseCutawaySection(
                                    houseNumber: 1,
                                    romanBadge: "MANOR I · EST. 75,29",
                                    title: "The Timber-Frame Havana & Rose Gables",
                                    subtitle: "Plywood rafters, twin Havana Cigars beds, penciled 75,29 attic & A. R. Dean & Sons laundry",
                                    roofColor: Color(red: 0.45, green: 0.28, blue: 0.15),
                                    frameColor: Color(red: 0.62, green: 0.42, blue: 0.23),
                                    garlandSprite: "garden_31.png",
                                    rooms: GameData.house1Rooms
                                )
                            }

                            if store.houseFilter == 0 || store.houseFilter == 2 {
                                DollhouseCutawaySection(
                                    houseNumber: 2,
                                    romanBadge: "MANOR II · SUB ROSA",
                                    title: "The White Rose-Gable Manor & Courtyard",
                                    subtitle: "Parmigiano & Pink-Fridge Kitchen, Crimson Rose Parlor, Keychain Wardrobe & Burgundy Roadster",
                                    roofColor: Color(red: 0.28, green: 0.33, blue: 0.40),
                                    frameColor: Color(red: 0.82, green: 0.77, blue: 0.70),
                                    garlandSprite: "garden_29.png",
                                    rooms: GameData.house2Rooms
                                )
                            }
                        }

                        WunderkammerRelicsSection()
                    }
                    .padding(.horizontal, 14)
                    .padding(.bottom, 32)
                }
            }
            .navigationBarHidden(true)
            .sheet(item: $store.presentedRoom) { room in
                RoomDetailView(room: room)
                    .environmentObject(store)
            }
        }
    }
}

// MARK: - Heirloom Watercolor Storybook Header
struct StorybookHeroHeader: View {
    @EnvironmentObject var store: GameStore

    var cardBg: Color {
        store.candleLightMode ? Color(red: 0.19, green: 0.15, blue: 0.12) : Color(red: 0.99, green: 0.97, blue: 0.92)
    }
    var primaryInk: Color {
        store.candleLightMode ? Color(red: 1.0, green: 0.90, blue: 0.68) : Color(red: 0.20, green: 0.12, blue: 0.06)
    }

    var body: some View {
        VStack(spacing: 12) {
            HStack(alignment: .center, spacing: 8) {
                BundledSpriteView(name: "s1_09.png")
                    .frame(width: 62, height: 68)
                    .shadow(color: .black.opacity(0.18), radius: 4, y: 2)

                VStack(spacing: 3) {
                    BundledSpriteView(name: "post_33.png")
                        .frame(height: 30)
                    Text("THE WHISPERING MOUSE HOUSES")
                        .font(.system(size: 19, weight: .heavy, design: .serif))
                        .foregroundColor(primaryInk)
                        .multilineTextAlignment(.center)
                    Text("An Illustrated Watercolor & Pen-and-Ink Exploration")
                        .font(.system(size: 12, weight: .medium, design: .serif))
                        .italic()
                        .foregroundColor(primaryInk.opacity(0.78))
                        .multilineTextAlignment(.center)
                }
                .frame(maxWidth: .infinity)

                BundledSpriteView(name: "mouse_cartographer.png")
                    .frame(width: 62, height: 68)
                    .shadow(color: .black.opacity(0.18), radius: 4, y: 2)
            }

            // Postage-Stamp Progress Row
            HStack(spacing: 8) {
                PostalStampBadge(
                    sprite: "post_01.png",
                    label: "FOLIOS",
                    value: "\(store.totalSolvedForCurrentTier)/64"
                )
                PostalStampBadge(
                    sprite: "post_03.png",
                    label: "RELICS",
                    value: "\(GameData.allRooms.filter { store.isRelicUnlocked(for: $0.id) }.count)/16"
                )

                Spacer()

                Button {
                    store.triggerTapHaptic()
                    withAnimation(.easeInOut(duration: 0.35)) {
                        store.candleLightMode.toggle()
                    }
                } label: {
                    HStack(spacing: 5) {
                        Image(systemName: store.candleLightMode ? "sun.max.fill" : "flame.fill")
                            .font(.system(size: 10))
                        Text(store.candleLightMode ? "Sunlit" : "Candlelight")
                            .font(.system(size: 11, weight: .bold, design: .serif))
                    }
                    .padding(.horizontal, 10)
                    .padding(.vertical, 7)
                    .background(
                        Capsule()
                            .fill(store.candleLightMode ? Color.orange.opacity(0.25) : Color(red: 0.93, green: 0.85, blue: 0.72))
                    )
                    .overlay(
                        Capsule()
                            .stroke(Color(red: 0.58, green: 0.40, blue: 0.22), lineWidth: 1.2)
                    )
                    .foregroundColor(primaryInk)
                }
            }

            // Junior Explorer vs Master Scholar Toggle
            HStack(spacing: 8) {
                ForEach(DifficultyTier.allCases) { tier in
                    let isSelected = store.difficulty == tier
                    Button {
                        store.triggerTapHaptic()
                        withAnimation(.spring(response: 0.3)) {
                            store.difficulty = tier
                        }
                    } label: {
                        HStack(spacing: 5) {
                            Text(tier.badgeIcon)
                            Text(tier.title)
                                .font(.system(size: 12, weight: .bold, design: .serif))
                        }
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 8)
                        .background(
                            RoundedRectangle(cornerRadius: 10)
                                .fill(isSelected ? Color(red: 0.56, green: 0.17, blue: 0.21) : Color.black.opacity(0.06))
                        )
                        .foregroundColor(isSelected ? .white : primaryInk)
                    }
                    .buttonStyle(.plain)
                }
            }
        }
        .padding(14)
        .background(
            RoundedRectangle(cornerRadius: 18)
                .fill(cardBg)
                .shadow(color: .black.opacity(0.14), radius: 10, y: 4)
        )
        .overlay(
            RoundedRectangle(cornerRadius: 18)
                .stroke(Color(red: 0.58, green: 0.40, blue: 0.22), lineWidth: 2)
        )
        .padding(.top, 6)
    }
}

struct PostalStampBadge: View {
    let sprite: String
    let label: String
    let value: String

    var body: some View {
        HStack(spacing: 6) {
            BundledSpriteView(name: sprite)
                .frame(width: 28, height: 32)
            VStack(alignment: .leading, spacing: 1) {
                Text(label)
                    .font(.system(size: 9, weight: .bold, design: .serif))
                    .foregroundColor(Color(red: 0.48, green: 0.34, blue: 0.20))
                Text(value)
                    .font(.system(size: 13, weight: .heavy, design: .serif))
                    .foregroundColor(Color(red: 0.20, green: 0.12, blue: 0.06))
            }
        }
        .padding(.horizontal, 9)
        .padding(.vertical, 5)
        .background(
            RoundedRectangle(cornerRadius: 8)
                .fill(Color(red: 0.99, green: 0.97, blue: 0.92))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 8)
                .stroke(Color(red: 0.62, green: 0.46, blue: 0.30), style: StrokeStyle(lineWidth: 1.2, dash: [3, 2]))
        )
    }
}

// MARK: - Guild of Watercolor Mouse Companions
struct WatercolorCompanionGuildBar: View {
    @EnvironmentObject var store: GameStore

    var cardBg: Color {
        store.candleLightMode ? Color(red: 0.19, green: 0.15, blue: 0.12) : Color(red: 0.99, green: 0.96, blue: 0.90)
    }
    var primaryInk: Color {
        store.candleLightMode ? Color(red: 1.0, green: 0.90, blue: 0.68) : Color(red: 0.20, green: 0.12, blue: 0.06)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack {
                BundledSpriteView(name: "post_15.png")
                    .frame(width: 26, height: 26)
                Text("THE GUILD OF PAINTED MOUSE COMPANIONS")
                    .font(.system(size: 11, weight: .heavy, design: .serif))
                    .tracking(0.8)
                    .foregroundColor(Color(red: 0.62, green: 0.18, blue: 0.22))
                Spacer()
            }

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 10) {
                    ForEach(GameData.mice) { mouse in
                        let isSelected = mouse.id == store.selectedMouseID
                        Button {
                            store.triggerTapHaptic()
                            withAnimation(.spring(response: 0.3)) {
                                store.selectedMouseID = mouse.id
                            }
                        } label: {
                            HStack(spacing: 8) {
                                BundledSpriteView(name: mouse.portraitImageName)
                                    .frame(width: 44, height: 48)
                                    .background(
                                        Circle()
                                            .fill(Color(red: 0.97, green: 0.92, blue: 0.83))
                                    )
                                    .overlay(
                                        Circle()
                                            .stroke(Color(red: 0.58, green: 0.40, blue: 0.22), lineWidth: 1.2)
                                    )

                                VStack(alignment: .leading, spacing: 2) {
                                    Text(mouse.name)
                                        .font(.system(size: 13, weight: .bold, design: .serif))
                                        .foregroundColor(isSelected ? .white : primaryInk)
                                    Text(mouse.specialty)
                                        .font(.system(size: 11, weight: .medium, design: .serif))
                                        .italic()
                                        .foregroundColor(isSelected ? .white.opacity(0.88) : primaryInk.opacity(0.7))
                                }
                            }
                            .padding(.horizontal, 11)
                            .padding(.vertical, 7)
                            .background(
                                RoundedRectangle(cornerRadius: 12)
                                    .fill(isSelected ? Color(red: 0.46, green: 0.27, blue: 0.14) : cardBg)
                            )
                            .overlay(
                                RoundedRectangle(cornerRadius: 12)
                                    .stroke(isSelected ? Color(red: 0.82, green: 0.62, blue: 0.30) : Color(red: 0.68, green: 0.52, blue: 0.35), lineWidth: 1.5)
                            )
                        }
                        .buttonStyle(.plain)
                    }
                }
            }

            // Whisper Banner
            HStack(alignment: .center, spacing: 10) {
                BundledSpriteView(name: store.selectedMouse.portraitImageName)
                    .frame(width: 44, height: 48)
                VStack(alignment: .leading, spacing: 2) {
                    Text("\(store.selectedMouse.name) whispers:")
                        .font(.system(size: 11, weight: .bold, design: .serif))
                        .foregroundColor(Color(red: 0.62, green: 0.18, blue: 0.22))
                    Text("\"\(store.selectedMouse.bio)\"")
                        .font(.system(size: 12, weight: .regular, design: .serif))
                        .italic()
                        .foregroundColor(primaryInk.opacity(0.9))
                }
            }
            .padding(10)
            .background(
                RoundedRectangle(cornerRadius: 10)
                    .fill(Color.black.opacity(0.04))
            )
        }
        .padding(13)
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(cardBg)
        )
        .overlay(
            RoundedRectangle(cornerRadius: 16)
                .stroke(Color(red: 0.58, green: 0.40, blue: 0.22), lineWidth: 1.6)
        )
    }
}

// MARK: - Realm Filter Bar
struct RealmAndDisciplineFilterBar: View {
    @EnvironmentObject var store: GameStore

    let tabs: [(Int, String)] = [
        (0, "Both Manors"),
        (1, "Manor I · Timber"),
        (2, "Manor II · White Rose"),
        (3, "Teapot Village")
    ]

    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 8) {
                ForEach(tabs, id: \.0) { item in
                    let active = store.houseFilter == item.0
                    Button {
                        store.triggerTapHaptic()
                        withAnimation(.easeInOut(duration: 0.22)) {
                            store.houseFilter = item.0
                        }
                    } label: {
                        Text(item.1)
                            .font(.system(size: 12, weight: .bold, design: .serif))
                            .padding(.horizontal, 13)
                            .padding(.vertical, 8)
                            .background(
                                RoundedRectangle(cornerRadius: 10)
                                    .fill(active ? Color(red: 0.36, green: 0.22, blue: 0.11) : Color(red: 0.96, green: 0.90, blue: 0.79))
                            )
                            .overlay(
                                RoundedRectangle(cornerRadius: 10)
                                    .stroke(Color(red: 0.58, green: 0.40, blue: 0.22), lineWidth: 1.3)
                            )
                            .foregroundColor(active ? Color(red: 1.0, green: 0.96, blue: 0.88) : Color(red: 0.25, green: 0.15, blue: 0.07))
                    }
                    .buttonStyle(.plain)
                }
            }
        }
    }
}

// MARK: - Architectural Dollhouse Cutaway Section
struct DollhouseCutawaySection: View {
    @EnvironmentObject var store: GameStore
    let houseNumber: Int
    let romanBadge: String
    let title: String
    let subtitle: String
    let roofColor: Color
    let frameColor: Color
    let garlandSprite: String
    let rooms: [MouseRoom]

    let columns = [
        GridItem(.flexible(), spacing: 10),
        GridItem(.flexible(), spacing: 10)
    ]

    var body: some View {
        VStack(spacing: 0) {
            // Illustrated Gable Roof Header
            ZStack(alignment: .bottom) {
                RoofGableShape(asymmetric: houseNumber == 1)
                    .fill(
                        LinearGradient(
                            colors: [roofColor, roofColor.opacity(0.82)],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    )
                    .frame(height: 86)
                    .overlay(
                        RoofGableShape(asymmetric: houseNumber == 1)
                            .stroke(Color(red: 0.25, green: 0.15, blue: 0.07), lineWidth: 3)
                    )

                HStack {
                    BundledSpriteView(name: garlandSprite)
                        .frame(width: 56, height: 50)
                    Spacer()
                    VStack(spacing: 2) {
                        Text(romanBadge)
                            .font(.system(size: 9, weight: .heavy, design: .serif))
                            .tracking(1.1)
                            .foregroundColor(Color(red: 1.0, green: 0.88, blue: 0.62))
                        Text(title)
                            .font(.system(size: 15, weight: .heavy, design: .serif))
                            .foregroundColor(.white)
                            .multilineTextAlignment(.center)
                    }
                    Spacer()
                    Image(systemName: "flame.fill")
                        .font(.system(size: 16))
                        .foregroundColor(Color(red: 1.0, green: 0.84, blue: 0.40))
                        .shadow(color: .yellow, radius: store.candleLightMode ? 8 : 2)
                }
                .padding(.horizontal, 14)
                .padding(.bottom, 8)
            }

            // Cutaway Timber/Manor Frame
            VStack(spacing: 10) {
                Text(subtitle)
                    .font(.system(size: 11, weight: .medium, design: .serif))
                    .italic()
                    .foregroundColor(houseNumber == 1 ? .white.opacity(0.92) : Color(red: 0.24, green: 0.16, blue: 0.09))
                    .multilineTextAlignment(.center)
                    .padding(.top, 8)

                LazyVGrid(columns: columns, spacing: 10) {
                    ForEach(rooms) { room in
                        WatercolorRoomCutawayCard(room: room)
                    }
                }

                // Garden Cobblestone Base
                HStack {
                    BundledSpriteView(name: houseNumber == 1 ? "garden_04.png" : "post_28.png")
                        .frame(width: 42, height: 38)
                    Spacer()
                    Text(houseNumber == 1 ? "Root Cellar Steps & Lavender Hedge" : "Burgundy Roadster Courtyard & Daisies")
                        .font(.system(size: 11, weight: .bold, design: .serif))
                        .foregroundColor(Color(red: 0.96, green: 0.93, blue: 0.84))
                    Spacer()
                    BundledSpriteView(name: houseNumber == 1 ? "post_24.png" : "garden_19.png")
                        .frame(width: 38, height: 36)
                }
                .padding(.horizontal, 12)
                .padding(.vertical, 6)
                .background(
                    RoundedRectangle(cornerRadius: 10)
                        .fill(Color(red: 0.34, green: 0.43, blue: 0.26))
                )
            }
            .padding(11)
            .background(frameColor)
            .clipShape(RoundedRectangle(cornerRadius: 16))
            .overlay(
                RoundedRectangle(cornerRadius: 16)
                    .stroke(Color(red: 0.28, green: 0.17, blue: 0.08), lineWidth: 3)
            )
        }
        .shadow(color: .black.opacity(0.18), radius: 12, y: 5)
    }
}

struct RoofGableShape: Shape {
    var asymmetric: Bool = false
    func path(in rect: CGRect) -> Path {
        var path = Path()
        let peakX = asymmetric ? rect.width * 0.36 : rect.width * 0.5
        path.move(to: CGPoint(x: 0, y: rect.maxY))
        path.addLine(to: CGPoint(x: peakX, y: rect.minY + 4))
        path.addLine(to: CGPoint(x: rect.maxX, y: rect.maxY))
        path.closeSubpath()
        return path
    }
}

struct WatercolorRoomCutawayCard: View {
    @EnvironmentObject var store: GameStore
    let room: MouseRoom

    var body: some View {
        let solvedCount = store.solvedCount(for: room.id)
        let relicUnlocked = store.isRelicUnlocked(for: room.id)

        Button {
            store.openRoom(room)
        } label: {
            VStack(alignment: .leading, spacing: 0) {
                // Top Timber Mullion Bar
                HStack {
                    Text(room.floorLabel.uppercased())
                        .font(.system(size: 9, weight: .bold, design: .serif))
                        .foregroundColor(Color(red: 0.98, green: 0.93, blue: 0.82))
                        .lineLimit(1)
                    Spacer()
                    Text("\(solvedCount)/4")
                        .font(.system(size: 9, weight: .heavy, design: .serif))
                        .foregroundColor(solvedCount == 4 ? .yellow : .white.opacity(0.9))
                }
                .padding(.horizontal, 8)
                .padding(.vertical, 4)
                .background(Color(red: 0.30, green: 0.18, blue: 0.09))

                // Room Photo + Resident Watercolor Mouse Overlay
                ZStack(alignment: .bottomTrailing) {
                    if let uiImage = GameStore.loadBundledImage(named: room.photoName) {
                        Image(uiImage: uiImage)
                            .resizable()
                            .scaledToFill()
                            .frame(height: 96)
                            .clipped()
                            .overlay(
                                RadialGradient(
                                    colors: [
                                        Color.yellow.opacity(store.candleLightMode ? 0.26 : 0.10),
                                        Color.black.opacity(0.24)
                                    ],
                                    center: .center,
                                    startRadius: 8,
                                    endRadius: 72
                                )
                            )
                    } else {
                        Rectangle()
                            .fill(Color(red: 0.95, green: 0.89, blue: 0.78))
                            .frame(height: 96)
                    }

                    // Resident Watercolor Character Sprite
                    BundledSpriteView(name: room.residentSpriteName)
                        .frame(width: 46, height: 50)
                        .padding(3)
                        .shadow(color: .black.opacity(0.4), radius: 3, y: 1)

                    if relicUnlocked {
                        VStack {
                            HStack {
                                BundledSpriteView(name: "post_01.png")
                                    .frame(width: 24, height: 28)
                                    .rotationEffect(.degrees(-8))
                                    .padding(4)
                                Spacer()
                            }
                            Spacer()
                        }
                    }
                }
                .frame(height: 96)

                // Parchment Room Caption & 4 Discipline Pips
                VStack(alignment: .leading, spacing: 4) {
                    Text(room.name)
                        .font(.system(size: 12, weight: .heavy, design: .serif))
                        .foregroundColor(Color(red: 0.18, green: 0.11, blue: 0.05))
                        .lineLimit(1)

                    Text(room.subtitle)
                        .font(.system(size: 10, weight: .regular, design: .serif))
                        .foregroundColor(Color(red: 0.42, green: 0.29, blue: 0.17))
                        .lineLimit(2)
                        .frame(minHeight: 25, alignment: .topLeading)

                    HStack(spacing: 4) {
                        ForEach(QuestDiscipline.allCases) { disc in
                            let solved = store.isSolved(roomID: room.id, discipline: disc)
                            HStack(spacing: 2) {
                                Image(systemName: disc.icon)
                                    .font(.system(size: 9, weight: .semibold))
                                    .foregroundColor(Color(red: 0.30, green: 0.18, blue: 0.09))
                                if solved {
                                    Image(systemName: "checkmark.seal.fill")
                                        .font(.system(size: 8))
                                        .foregroundColor(Color(red: 0.18, green: 0.50, blue: 0.28))
                                }
                            }
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 3)
                            .background(
                                RoundedRectangle(cornerRadius: 5)
                                    .fill(solved ? Color(red: 0.85, green: 0.94, blue: 0.86) : Color(red: 0.92, green: 0.86, blue: 0.76))
                            )
                        }
                    }
                }
                .padding(8)
                .background(Color(red: 0.99, green: 0.96, blue: 0.90))
            }
            .clipShape(RoundedRectangle(cornerRadius: 11))
            .overlay(
                RoundedRectangle(cornerRadius: 11)
                    .stroke(solvedCount == 4 ? Color.orange : Color(red: 0.28, green: 0.17, blue: 0.08), lineWidth: 2)
            )
            .shadow(color: store.candleLightMode ? Color.orange.opacity(0.28) : Color.black.opacity(0.15), radius: 6, y: 3)
        }
        .buttonStyle(.plain)
    }
}

// MARK: - Postbox Lane & Teapot Village Section
struct PostboxLaneVillageSection: View {
    @EnvironmentObject var store: GameStore

    struct CottageItem: Identifiable {
        let id: String
        let lane: String
        let title: String
        let sprite: String
        let keeperSprite: String
        let lore: String
        let jumpRoomID: String
    }

    let cottages: [CottageItem] = [
        CottageItem(id: "c1", lane: "No. 1 Postbox Lane", title: "The Whimsical Red-Door Teapot Cottage", sprite: "cottage_teapot1_01.png", keeperSprite: "mouse_cartographer.png", lore: "Crowned with a porcelain spout and hot-air balloons drifting past the attic, charting the skies above the Twin Dollhouses.", jumpRoomID: "h1-r1"),
        CottageItem(id: "c2", lane: "No. 2 Postbox Lane", title: "The Striped-Umbrella Teapot Café", sprite: "cottage_teapot2_01.png", keeperSprite: "s1_05.png", lore: "Harvest pumpkins and a chalkboard menu welcome hungry mice for warm croissants, fig jam, and Earl Grey tea.", jumpRoomID: "h2-r1"),
        CottageItem(id: "c3", lane: "No. 3 Postbox Lane", title: "The Festoon-Lit Village Tea Shop", sprite: "cottage_teashop_01.png", keeperSprite: "mouse_princess_gown.png", lore: "Festooned with glowing string bulbs and lace awnings, displaying rose-rimmed porcelain teacups and polka-dot linens.", jumpRoomID: "h1-r5"),
        CottageItem(id: "c4", lane: "No. 4 Postbox Lane", title: "The Wrought-Iron Lantern Antique Shop", sprite: "cottage_antique_01.png", keeperSprite: "mouse_king.png", lore: "Behind scrolled ironwork arches sit antique Havana cedar boxes, Venetian mirrors, and brass compasses.", jumpRoomID: "h1-r2"),
        CottageItem(id: "c5", lane: "No. 5 Whispering Woods", title: "The Four-Story Oak Treehouse Manor", sprite: "arch_treehouse_manor.jpg", keeperSprite: "s1_11.png", lore: "Carved into the living trunk of an ancient hollow oak with a root-cellar kitchen, library hearth, and winding stair.", jumpRoomID: "h1-r4"),
        CottageItem(id: "c6", lane: "No. 6 Inkwell Alley", title: "The Half-Timbered Tudor Bookshop", sprite: "arch_bookshop.jpg", keeperSprite: "post_21.png", lore: "Ivy climbs the leaded bay windows where Archivist Owl deciphers palimpsests and the study wall scroll.", jumpRoomID: "h2-r6")
    ]

    var body: some View {
        VStack(spacing: 14) {
            ForEach(cottages) { c in
                VStack(alignment: .leading, spacing: 10) {
                    ZStack(alignment: .bottomTrailing) {
                        BundledSpriteView(name: c.sprite)
                            .frame(maxWidth: .infinity)
                            .frame(height: 190)
                            .background(Color(red: 0.97, green: 0.93, blue: 0.85))
                            .clipShape(RoundedRectangle(cornerRadius: 12))

                        BundledSpriteView(name: c.keeperSprite)
                            .frame(width: 52, height: 56)
                            .padding(6)
                            .background(Circle().fill(Color.white.opacity(0.92)))
                            .padding(8)
                    }

                    Text(c.lane.uppercased())
                        .font(.system(size: 10, weight: .bold, design: .serif))
                        .foregroundColor(Color(red: 0.62, green: 0.18, blue: 0.22))

                    Text(c.title)
                        .font(.system(size: 16, weight: .heavy, design: .serif))
                        .foregroundColor(Color(red: 0.20, green: 0.12, blue: 0.06))

                    Text(c.lore)
                        .font(.system(size: 12, weight: .regular, design: .serif))
                        .foregroundColor(Color(red: 0.36, green: 0.24, blue: 0.14))

                    Button {
                        if let room = GameData.allRooms.first(where: { $0.id == c.jumpRoomID }) {
                            store.openRoom(room)
                        }
                    } label: {
                        HStack {
                            Text("Enter Corresponding Manor Room")
                                .font(.system(size: 12, weight: .bold, design: .serif))
                            Spacer()
                            Image(systemName: "arrow.right")
                        }
                        .padding(10)
                        .background(RoundedRectangle(cornerRadius: 10).fill(Color(red: 0.38, green: 0.23, blue: 0.11)))
                        .foregroundColor(.white)
                    }
                    .buttonStyle(.plain)
                }
                .padding(14)
                .background(RoundedRectangle(cornerRadius: 16).fill(Color(red: 0.99, green: 0.96, blue: 0.90)))
                .overlay(RoundedRectangle(cornerRadius: 16).stroke(Color(red: 0.58, green: 0.40, blue: 0.22), lineWidth: 1.6))
            }
        }
    }
}

// MARK: - Wunderkammer Curio Cabinet
struct WunderkammerRelicsSection: View {
    @EnvironmentObject var store: GameStore

    let columns = [
        GridItem(.adaptive(minimum: 145), spacing: 10)
    ]

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack {
                BundledSpriteView(name: "post_27.png")
                    .frame(width: 30, height: 30)
                VStack(alignment: .leading, spacing: 2) {
                    Text("WUNDERKAMMER CURIO CABINET")
                        .font(.system(size: 12, weight: .heavy, design: .serif))
                        .foregroundColor(Color(red: 0.20, green: 0.12, blue: 0.06))
                    Text("Solve 1 quest in any room to unseal its painted relic")
                        .font(.system(size: 11, weight: .regular, design: .serif))
                        .italic()
                        .foregroundColor(Color(red: 0.45, green: 0.32, blue: 0.19))
                }
                Spacer()
            }

            LazyVGrid(columns: columns, spacing: 8) {
                ForEach(GameData.allRooms) { room in
                    let unlocked = store.isRelicUnlocked(for: room.id)
                    Button {
                        store.openRoom(room)
                    } label: {
                        HStack(spacing: 8) {
                            BundledSpriteView(name: room.relicSpriteName)
                                .frame(width: 32, height: 32)
                                .saturation(unlocked ? 1.0 : 0.0)
                                .opacity(unlocked ? 1.0 : 0.45)

                            VStack(alignment: .leading, spacing: 1) {
                                Text(unlocked ? room.relic.name : "Unsealed Curio")
                                    .font(.system(size: 11, weight: .bold, design: .serif))
                                    .foregroundColor(Color(red: 0.20, green: 0.12, blue: 0.06))
                                    .lineLimit(1)
                                Text(room.name)
                                    .font(.system(size: 9, weight: .regular, design: .serif))
                                    .foregroundColor(Color(red: 0.48, green: 0.34, blue: 0.20))
                                    .lineLimit(1)
                            }
                            Spacer(minLength: 0)
                        }
                        .padding(8)
                        .background(
                            RoundedRectangle(cornerRadius: 10)
                                .fill(unlocked ? Color(red: 1.0, green: 0.96, blue: 0.85) : Color.white.opacity(0.55))
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: 10)
                                .stroke(unlocked ? Color.orange : Color(red: 0.72, green: 0.58, blue: 0.42), lineWidth: 1.2)
                        )
                    }
                    .buttonStyle(.plain)
                }
            }
        }
        .padding(14)
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(Color(red: 0.98, green: 0.94, blue: 0.86))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 16)
                .stroke(Color(red: 0.58, green: 0.40, blue: 0.22), lineWidth: 1.8)
        )
    }
}
