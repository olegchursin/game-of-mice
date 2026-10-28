import SwiftUI

struct RoomDetailView: View {
    @EnvironmentObject var store: GameStore
    @Environment(\.dismiss) private var dismiss
    let room: MouseRoom

    private var currentQuest: DisciplineQuest? {
        room.quests[store.selectedDiscipline]
    }

    var body: some View {
        NavigationStack {
            ZStack {
                LinearGradient(
                    colors: [
                        Color(red: 0.99, green: 0.96, blue: 0.90),
                        Color(red: 0.94, green: 0.88, blue: 0.77)
                    ],
                    startPoint: .top,
                    endPoint: .bottom
                )
                .ignoresSafeArea()

                ScrollView {
                    VStack(alignment: .leading, spacing: 14) {
                        // Top Journal Folio Header with Resident Watercolor Mouse
                        HStack(alignment: .center, spacing: 12) {
                            BundledSpriteView(name: room.residentSpriteName)
                                .frame(width: 60, height: 66)
                                .background(
                                    Circle()
                                        .fill(Color(red: 0.98, green: 0.93, blue: 0.83))
                                )
                                .overlay(
                                    Circle()
                                        .stroke(Color(red: 0.58, green: 0.40, blue: 0.22), lineWidth: 1.5)
                                )

                            VStack(alignment: .leading, spacing: 3) {
                                Text("MANOR \(room.houseNumber == 1 ? "I · TIMBER GABLES" : "II · WHITE ROSE") · \(room.floorLabel.uppercased())")
                                    .font(.system(size: 10, weight: .heavy, design: .serif))
                                    .foregroundColor(Color(red: 0.62, green: 0.18, blue: 0.22))

                                Text(room.name)
                                    .font(.system(size: 20, weight: .heavy, design: .serif))
                                    .foregroundColor(Color(red: 0.18, green: 0.11, blue: 0.05))

                                Text(room.subtitle)
                                    .font(.system(size: 12, weight: .regular, design: .serif))
                                    .italic()
                                    .foregroundColor(Color(red: 0.42, green: 0.29, blue: 0.17))
                            }
                            Spacer()
                        }

                        // Visual Mode Switcher (Real Photo vs Da Vinci Blueprint vs Diorama)
                        HStack(spacing: 6) {
                            Button {
                                store.triggerTapHaptic()
                                store.showRealPhotoInModal = true
                                store.blueprintMode = false
                            } label: {
                                Text("Archival Photo")
                                    .font(.system(size: 11, weight: .bold, design: .serif))
                                    .padding(.horizontal, 10)
                                    .padding(.vertical, 6)
                                    .background(
                                        RoundedRectangle(cornerRadius: 8)
                                            .fill(store.showRealPhotoInModal && !store.blueprintMode ? Color(red: 0.36, green: 0.22, blue: 0.11) : Color.black.opacity(0.06))
                                    )
                                    .foregroundColor(store.showRealPhotoInModal && !store.blueprintMode ? .white : Color(red: 0.24, green: 0.15, blue: 0.07))
                            }
                            .buttonStyle(.plain)

                            Button {
                                store.triggerTapHaptic()
                                store.showRealPhotoInModal = true
                                store.blueprintMode = true
                            } label: {
                                Text("Da Vinci Blueprint")
                                    .font(.system(size: 11, weight: .bold, design: .serif))
                                    .padding(.horizontal, 10)
                                    .padding(.vertical, 6)
                                    .background(
                                        RoundedRectangle(cornerRadius: 8)
                                            .fill(store.blueprintMode ? Color(red: 0.15, green: 0.32, blue: 0.50) : Color.black.opacity(0.06))
                                    )
                                    .foregroundColor(store.blueprintMode ? .white : Color(red: 0.24, green: 0.15, blue: 0.07))
                            }
                            .buttonStyle(.plain)

                            Button {
                                store.triggerTapHaptic()
                                store.showRealPhotoInModal = false
                                store.blueprintMode = false
                            } label: {
                                Text("Watercolor Scene")
                                    .font(.system(size: 11, weight: .bold, design: .serif))
                                    .padding(.horizontal, 10)
                                    .padding(.vertical, 6)
                                    .background(
                                        RoundedRectangle(cornerRadius: 8)
                                            .fill(!store.showRealPhotoInModal ? Color(red: 0.56, green: 0.17, blue: 0.21) : Color.black.opacity(0.06))
                                    )
                                    .foregroundColor(!store.showRealPhotoInModal ? .white : Color(red: 0.24, green: 0.15, blue: 0.07))
                            }
                            .buttonStyle(.plain)

                            Spacer()
                        }

                        // Interactive Specimen Frame with Clue Pins
                        GeometryReader { geo in
                            ZStack {
                                if store.showRealPhotoInModal,
                                   let uiImage = GameStore.loadBundledImage(named: room.photoName) {
                                    Image(uiImage: uiImage)
                                        .resizable()
                                        .scaledToFill()
                                        .frame(width: geo.size.width, height: 230)
                                        .clipped()
                                        .colorMultiply(store.blueprintMode ? Color(red: 0.68, green: 0.85, blue: 1.0) : .white)
                                        .contrast(store.blueprintMode ? 1.2 : 1.0)
                                } else {
                                    RoomWatercolorSceneBanner(room: room)
                                        .frame(width: geo.size.width, height: 230)
                                }

                                // Interactive Wax Hotspot Pins
                                ForEach(room.hotspots) { pin in
                                    Button {
                                        store.triggerTapHaptic()
                                        withAnimation(.easeInOut(duration: 0.2)) {
                                            store.inspectedHotspotNote = "\(pin.label): \(pin.note)"
                                        }
                                    } label: {
                                        Text(pin.label)
                                            .font(.system(size: 10, weight: .bold, design: .serif))
                                            .foregroundColor(Color(red: 0.18, green: 0.11, blue: 0.05))
                                            .padding(.horizontal, 8)
                                            .padding(.vertical, 4)
                                            .background(
                                                Capsule()
                                                    .fill(Color(red: 0.99, green: 0.96, blue: 0.89).opacity(0.95))
                                                    .shadow(color: .black.opacity(0.3), radius: 4, y: 2)
                                            )
                                            .overlay(
                                                Capsule()
                                                    .stroke(Color(red: 0.62, green: 0.18, blue: 0.22), lineWidth: 1.5)
                                            )
                                    }
                                    .position(
                                        x: max(54, min(geo.size.width - 54, geo.size.width * pin.xPercent)),
                                        y: max(22, min(208, 230 * pin.yPercent))
                                    )
                                }
                            }
                        }
                        .frame(height: 230)
                        .clipShape(RoundedRectangle(cornerRadius: 14))
                        .overlay(
                            RoundedRectangle(cornerRadius: 14)
                                .stroke(Color(red: 0.42, green: 0.26, blue: 0.12), lineWidth: 2.5)
                        )

                        // Field Note Callout
                        if !store.inspectedHotspotNote.isEmpty {
                            HStack(alignment: .top, spacing: 8) {
                                Image(systemName: "pencil.and.outline")
                                    .font(.system(size: 13, weight: .semibold))
                                    .foregroundColor(Color(red: 0.56, green: 0.17, blue: 0.21))
                                Text(store.inspectedHotspotNote)
                                    .font(.system(size: 12, weight: .medium, design: .serif))
                                    .foregroundColor(Color(red: 0.24, green: 0.15, blue: 0.07))
                                Spacer()
                            }
                            .padding(10)
                            .background(
                                RoundedRectangle(cornerRadius: 10)
                                    .fill(Color(red: 0.97, green: 0.91, blue: 0.79))
                            )
                            .overlay(
                                RoundedRectangle(cornerRadius: 10)
                                    .stroke(Color(red: 0.68, green: 0.52, blue: 0.35), lineWidth: 1.2)
                            )
                        }

                        // 4 Scholarly Discipline Tabs
                        HStack(spacing: 6) {
                            ForEach(QuestDiscipline.allCases) { disc in
                                let isSelected = store.selectedDiscipline == disc
                                let isSolved = store.isSolved(roomID: room.id, discipline: disc)

                                Button {
                                    store.triggerTapHaptic()
                                    withAnimation(.easeInOut(duration: 0.2)) {
                                        store.selectedDiscipline = disc
                                        store.selectedOptionIndex = nil
                                        store.showHint = false
                                    }
                                } label: {
                                    VStack(spacing: 3) {
                                        HStack(spacing: 3) {
                                            Image(systemName: disc.icon)
                                                .font(.system(size: 12, weight: .semibold))
                                            if isSolved {
                                                Image(systemName: "checkmark.seal.fill")
                                                    .font(.system(size: 10))
                                                    .foregroundColor(.green)
                                            }
                                        }
                                        Text(disc.title)
                                            .font(.system(size: 11, weight: .bold, design: .serif))
                                            .lineLimit(1)
                                    }
                                    .frame(maxWidth: .infinity)
                                    .padding(.vertical, 8)
                                    .background(
                                        RoundedRectangle(cornerRadius: 10)
                                            .fill(isSelected ? Color(red: 0.36, green: 0.22, blue: 0.11) : Color(red: 0.95, green: 0.89, blue: 0.78))
                                    )
                                    .overlay(
                                        RoundedRectangle(cornerRadius: 10)
                                            .stroke(Color(red: 0.58, green: 0.40, blue: 0.22), lineWidth: 1.2)
                                    )
                                    .foregroundColor(isSelected ? .white : Color(red: 0.24, green: 0.15, blue: 0.07))
                                }
                                .buttonStyle(.plain)
                            }
                        }

                        // Active Quest Manuscript Card
                        if let quest = currentQuest {
                            let content = quest.content(for: store.difficulty)
                            let alreadySolved = store.isSolved(roomID: room.id, discipline: store.selectedDiscipline)

                            VStack(alignment: .leading, spacing: 12) {
                                HStack {
                                    Text("\(store.selectedDiscipline.title.uppercased()) FOLIO")
                                        .font(.system(size: 10, weight: .heavy, design: .serif))
                                        .padding(.horizontal, 8)
                                        .padding(.vertical, 4)
                                        .background(Capsule().fill(Color(red: 0.92, green: 0.84, blue: 0.71)))
                                        .foregroundColor(Color(red: 0.36, green: 0.22, blue: 0.11))

                                    Spacer()

                                    Menu {
                                        ForEach(DifficultyTier.allCases) { t in
                                            Button("\(t.badgeIcon) \(t.title)") {
                                                store.difficulty = t
                                                store.selectedOptionIndex = nil
                                            }
                                        }
                                    } label: {
                                        HStack(spacing: 4) {
                                            Text(store.difficulty.badgeIcon)
                                            Text(store.difficulty == .junior ? "Junior Explorer" : "Master Scholar")
                                                .font(.system(size: 11, weight: .bold, design: .serif))
                                            Image(systemName: "chevron.down")
                                                .font(.system(size: 9, weight: .bold))
                                        }
                                        .padding(.horizontal, 9)
                                        .padding(.vertical, 4)
                                        .background(Capsule().fill(Color(red: 0.92, green: 0.84, blue: 0.71)))
                                        .foregroundColor(Color(red: 0.24, green: 0.15, blue: 0.07))
                                    }
                                }

                                Text(quest.title)
                                    .font(.system(size: 18, weight: .heavy, design: .serif))
                                    .foregroundColor(Color(red: 0.18, green: 0.11, blue: 0.05))

                                Text(quest.storyContext)
                                    .font(.system(size: 13, weight: .regular, design: .serif))
                                    .italic()
                                    .foregroundColor(Color(red: 0.38, green: 0.25, blue: 0.14))
                                    .padding(10)
                                    .frame(maxWidth: .infinity, alignment: .leading)
                                    .background(
                                        RoundedRectangle(cornerRadius: 8)
                                            .fill(Color(red: 0.96, green: 0.90, blue: 0.79))
                                    )

                                Text(content.prompt)
                                    .font(.system(size: 15, weight: .semibold, design: .serif))
                                    .foregroundColor(Color(red: 0.16, green: 0.10, blue: 0.04))
                                    .fixedSize(horizontal: false, vertical: true)

                                // 4 Options
                                VStack(spacing: 8) {
                                    ForEach(Array(content.options.enumerated()), id: \.offset) { index, optionText in
                                        let isCorrectOption = index == content.answerIndex
                                        let isChosen = store.selectedOptionIndex == index
                                        let showGreen = alreadySolved ? isCorrectOption : (isChosen && isCorrectOption)
                                        let showRed = isChosen && !isCorrectOption

                                        Button {
                                            store.selectedOptionIndex = index
                                            if isCorrectOption {
                                                store.markSolved(roomID: room.id, discipline: store.selectedDiscipline)
                                            } else {
                                                store.triggerWrongHaptic()
                                            }
                                        } label: {
                                            HStack(alignment: .center, spacing: 10) {
                                                Text(["A", "B", "C", "D"][index])
                                                    .font(.system(size: 13, weight: .heavy, design: .serif))
                                                    .frame(width: 28, height: 28)
                                                    .background(
                                                        Circle()
                                                            .fill(
                                                                showGreen ? Color(red: 0.18, green: 0.52, blue: 0.30) :
                                                                showRed ? Color(red: 0.72, green: 0.20, blue: 0.20) :
                                                                Color(red: 0.92, green: 0.85, blue: 0.73)
                                                            )
                                                    )
                                                    .foregroundColor((showGreen || showRed) ? .white : Color(red: 0.24, green: 0.15, blue: 0.07))

                                                Text(optionText)
                                                    .font(.system(size: 14, weight: .medium, design: .serif))
                                                    .foregroundColor(Color(red: 0.18, green: 0.11, blue: 0.05))
                                                    .multilineTextAlignment(.leading)

                                                Spacer()
                                            }
                                            .padding(11)
                                            .background(
                                                RoundedRectangle(cornerRadius: 10)
                                                    .fill(
                                                        showGreen ? Color(red: 0.87, green: 0.95, blue: 0.88) :
                                                        showRed ? Color(red: 0.99, green: 0.89, blue: 0.89) :
                                                        Color.white
                                                    )
                                            )
                                            .overlay(
                                                RoundedRectangle(cornerRadius: 10)
                                                    .stroke(
                                                        showGreen ? Color(red: 0.18, green: 0.52, blue: 0.30) :
                                                        showRed ? Color(red: 0.72, green: 0.20, blue: 0.20) :
                                                        Color(red: 0.75, green: 0.60, blue: 0.44),
                                                        lineWidth: (showGreen || showRed) ? 2 : 1.2
                                                    )
                                            )
                                        }
                                        .buttonStyle(.plain)
                                    }
                                }

                                // Companion Wax-Seal Hint Button
                                HStack {
                                    Button {
                                        store.triggerTapHaptic()
                                        withAnimation {
                                            store.showHint.toggle()
                                        }
                                    } label: {
                                        HStack(spacing: 6) {
                                            Circle()
                                                .fill(Color(red: 0.68, green: 0.18, blue: 0.22))
                                                .frame(width: 8, height: 8)
                                            Text(store.showHint ? "Hide Companion Hint" : "Unseal \(store.selectedMouse.name)'s Hint")
                                                .font(.system(size: 12, weight: .bold, design: .serif))
                                        }
                                        .padding(.horizontal, 12)
                                        .padding(.vertical, 7)
                                        .background(Capsule().fill(Color(red: 0.98, green: 0.92, blue: 0.78)))
                                        .overlay(Capsule().stroke(Color(red: 0.68, green: 0.48, blue: 0.20), lineWidth: 1.2))
                                        .foregroundColor(Color(red: 0.36, green: 0.22, blue: 0.11))
                                    }
                                    .buttonStyle(.plain)

                                    Spacer()
                                }

                                if store.showHint {
                                    HStack(alignment: .top, spacing: 8) {
                                        BundledSpriteView(name: store.selectedMouse.portraitImageName)
                                            .frame(width: 34, height: 38)
                                        Text(content.hint)
                                            .font(.system(size: 13, weight: .medium, design: .serif))
                                            .italic()
                                            .foregroundColor(Color(red: 0.32, green: 0.20, blue: 0.08))
                                    }
                                    .padding(10)
                                    .background(
                                        RoundedRectangle(cornerRadius: 10)
                                            .fill(Color(red: 1.0, green: 0.96, blue: 0.85))
                                    )
                                }

                                // Explanation Banner
                                if alreadySolved || (store.selectedOptionIndex == content.answerIndex) {
                                    HStack(alignment: .top, spacing: 10) {
                                        BundledSpriteView(name: room.relicSpriteName)
                                            .frame(width: 38, height: 38)
                                        VStack(alignment: .leading, spacing: 3) {
                                            Text("✦ Postmarked & Verified! Relic Unsealed: \(room.relic.name)")
                                                .font(.system(size: 13, weight: .heavy, design: .serif))
                                                .foregroundColor(Color(red: 0.14, green: 0.42, blue: 0.24))
                                            Text(content.explanation)
                                                .font(.system(size: 12, weight: .regular, design: .serif))
                                                .foregroundColor(Color(red: 0.18, green: 0.11, blue: 0.05))
                                        }
                                    }
                                    .padding(12)
                                    .background(
                                        RoundedRectangle(cornerRadius: 12)
                                            .fill(Color(red: 0.88, green: 0.95, blue: 0.89))
                                    )
                                    .overlay(
                                        RoundedRectangle(cornerRadius: 12)
                                            .stroke(Color(red: 0.22, green: 0.56, blue: 0.34), lineWidth: 1.5)
                                    )
                                } else if let chosen = store.selectedOptionIndex, chosen != content.answerIndex {
                                    Text("Not quite that parchment. Unseal the companion hint or inspect the room photo pins above and try another option.")
                                        .font(.system(size: 12, weight: .bold, design: .serif))
                                        .foregroundColor(Color(red: 0.62, green: 0.16, blue: 0.16))
                                        .padding(10)
                                        .frame(maxWidth: .infinity, alignment: .leading)
                                        .background(
                                            RoundedRectangle(cornerRadius: 10)
                                                .fill(Color(red: 0.99, green: 0.89, blue: 0.89))
                                        )
                                }
                            }
                            .padding(15)
                            .background(
                                RoundedRectangle(cornerRadius: 16)
                                    .fill(Color(red: 0.99, green: 0.97, blue: 0.93))
                            )
                            .overlay(
                                RoundedRectangle(cornerRadius: 16)
                                    .stroke(Color(red: 0.68, green: 0.52, blue: 0.35), lineWidth: 1.8)
                            )
                        }
                    }
                    .padding(16)
                }
            }
            .navigationTitle(room.floorLabel)
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Close Journal") {
                        dismiss()
                    }
                    .font(.system(size: 14, weight: .bold, design: .serif))
                }
            }
        }
    }
}

struct RoomWatercolorSceneBanner: View {
    let room: MouseRoom

    var body: some View {
        ZStack {
            LinearGradient(
                colors: [
                    Color(red: 0.98, green: 0.93, blue: 0.83),
                    Color(red: 0.90, green: 0.80, blue: 0.65)
                ],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )

            HStack(spacing: 18) {
                BundledSpriteView(name: room.residentSpriteName)
                    .frame(width: 110, height: 125)
                    .shadow(color: .black.opacity(0.25), radius: 6, y: 3)

                VStack(alignment: .leading, spacing: 6) {
                    BundledSpriteView(name: room.relicSpriteName)
                        .frame(width: 48, height: 48)
                    Text(room.name)
                        .font(.system(size: 16, weight: .heavy, design: .serif))
                        .foregroundColor(Color(red: 0.20, green: 0.12, blue: 0.06))
                    Text(room.relic.name)
                        .font(.system(size: 12, weight: .bold, design: .serif))
                        .foregroundColor(Color(red: 0.62, green: 0.18, blue: 0.22))
                    Text(room.relic.description)
                        .font(.system(size: 11, weight: .regular, design: .serif))
                        .italic()
                        .foregroundColor(Color(red: 0.38, green: 0.25, blue: 0.14))
                }
            }
            .padding(16)
        }
    }
}
