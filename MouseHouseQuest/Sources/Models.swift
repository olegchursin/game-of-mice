import SwiftUI
import UIKit

enum DifficultyTier: String, CaseIterable, Identifiable, Codable {
    case junior = "junior"
    case scholar = "scholar"

    var id: String { rawValue }

    var title: String {
        switch self {
        case .junior: return "Junior Explorer (8–11)"
        case .scholar: return "Master Scholar (12+)"
        }
    }

    var badgeIcon: String {
        switch self {
        case .junior: return "I."
        case .scholar: return "II."
        }
    }
}

enum QuestDiscipline: String, CaseIterable, Identifiable, Codable {
    case math = "math"
    case logic = "logic"
    case linguistics = "linguistics"
    case history = "history"

    var id: String { rawValue }

    var title: String {
        switch self {
        case .math: return "Math"
        case .logic: return "Logic"
        case .linguistics: return "Words"
        case .history: return "History"
        }
    }

    var icon: String {
        switch self {
        case .math: return "function"
        case .logic: return "key.horizontal"
        case .linguistics: return "text.book.closed"
        case .history: return "building.columns"
        }
    }

    var themeColor: Color {
        switch self {
        case .math: return Color(red: 0.15, green: 0.42, blue: 0.68)
        case .logic: return Color(red: 0.42, green: 0.24, blue: 0.62)
        case .linguistics: return Color(red: 0.68, green: 0.20, blue: 0.34)
        case .history: return Color(red: 0.64, green: 0.42, blue: 0.10)
        }
    }
}

struct MouseCharacter: Identifiable {
    let id: String
    let name: String
    let emoji: String
    let specialty: String
    let favDiscipline: QuestDiscipline
    let bio: String
    let accentColor: Color

    var portraitImageName: String {
        switch id {
        case "pippin": return "mouse_cartographer.png"
        case "rosalind": return "mouse_princess_rose.png"
        case "barnaby": return "mouse_king.png"
        case "clover": return "post_11.png"
        default: return "s1_09.png"
        }
    }
}

struct QuestTierContent {
    let prompt: String
    let options: [String]
    let answerIndex: Int
    let hint: String
    let explanation: String
}

struct DisciplineQuest {
    let discipline: QuestDiscipline
    let title: String
    let storyContext: String
    let junior: QuestTierContent
    let scholar: QuestTierContent

    func content(for tier: DifficultyTier) -> QuestTierContent {
        tier == .junior ? junior : scholar
    }
}

struct HotspotPin: Identifiable {
    let id = UUID()
    let xPercent: CGFloat
    let yPercent: CGFloat
    let label: String
    let note: String
}

struct RoomRelic {
    let icon: String
    let name: String
    let description: String
}

struct MouseRoom: Identifiable {
    let id: String
    let houseNumber: Int
    let floorLabel: String
    let name: String
    let subtitle: String
    let photoName: String
    let themeColor: Color
    let relic: RoomRelic
    let hotspots: [HotspotPin]
    let quests: [QuestDiscipline: DisciplineQuest]

    var residentSpriteName: String {
        switch id {
        case "h1-r1": return "mouse_cartographer.png"
        case "h1-r2": return "mouse_king.png"
        case "h1-r3": return "mouse_princess_rose.png"
        case "h1-r4": return "garden_34.png"
        case "h1-r5": return "mouse_princess_gown.png"
        case "h1-r6": return "s1_11.png"
        case "h1-r7": return "s1_02.png"
        case "h1-r8": return "post_08.png"
        case "h2-r1": return "s1_05.png"
        case "h2-r2": return "mouse_gentleman.png"
        case "h2-r3": return "s1_08.png"
        case "h2-r4": return "post_11.png"
        case "h2-r5": return "mouse_tailor.png"
        case "h2-r6": return "post_21.png"
        case "h2-r7": return "mouse_hiker.png"
        case "h2-r8": return "s1_12.png"
        default: return "s1_09.png"
        }
    }

    var relicSpriteName: String {
        switch id {
        case "h1-r1", "h2-r4": return "post_27.png"
        case "h1-r2": return "post_17.png"
        case "h1-r3": return "mouse_princess_rose.png"
        case "h1-r4": return "post_16.png"
        case "h1-r5", "h2-r5": return "post_35.png"
        case "h1-r6": return "garden_02.png"
        case "h1-r7", "h2-r2": return "garden_29.png"
        case "h1-r8": return "post_24.png"
        case "h2-r1": return "post_26.png"
        case "h2-r3": return "garden_31.png"
        case "h2-r6": return "post_29.png"
        case "h2-r7": return "post_03.png"
        case "h2-r8": return "garden_19.png"
        default: return "post_01.png"
        }
    }
}

final class GameStore: ObservableObject {
    @Published var selectedMouseID: String = "pippin" {
        didSet { save() }
    }
    @Published var difficulty: DifficultyTier = .junior {
        didSet { save() }
    }
    @Published var solvedKeys: Set<String> = [] {
        didSet { save() }
    }
    @Published var activeRoomID: String = "h1-r2"
    @Published var presentedRoom: MouseRoom? = nil
    @Published var houseFilter: Int = 0
    @Published var showPhotoThumbnails: Bool = true
    @Published var candleLightMode: Bool = false
    @Published var blueprintMode: Bool = false

    // Room Detail Interactive State
    @Published var selectedDiscipline: QuestDiscipline = .math
    @Published var showRealPhotoInModal: Bool = true
    @Published var inspectedHotspotNote: String = ""
    @Published var selectedOptionIndex: Int? = nil
    @Published var showHint: Bool = false

    private let storageKey = "MouseHouseQuest_Solved_v1"
    private let mouseKey = "MouseHouseQuest_Mouse_v1"
    private let tierKey = "MouseHouseQuest_Tier_v1"

    init() {
        if let savedSolved = UserDefaults.standard.stringArray(forKey: storageKey) {
            self.solvedKeys = Set(savedSolved)
        }
        if let savedMouse = UserDefaults.standard.string(forKey: mouseKey) {
            self.selectedMouseID = savedMouse
        }
        if let savedTier = UserDefaults.standard.string(forKey: tierKey),
           let tier = DifficultyTier(rawValue: savedTier) {
            self.difficulty = tier
        }
    }

    var selectedMouse: MouseCharacter {
        GameData.mice.first(where: { $0.id == selectedMouseID }) ?? GameData.mice[0]
    }

    func openRoom(_ room: MouseRoom) {
        triggerTapHaptic()
        activeRoomID = room.id
        selectedDiscipline = .math
        selectedOptionIndex = nil
        showHint = false
        if let firstPin = room.hotspots.first {
            inspectedHotspotNote = "\(firstPin.label): \(firstPin.note)"
        } else {
            inspectedHotspotNote = ""
        }
        presentedRoom = room
    }

    func key(roomID: String, discipline: QuestDiscipline, tier: DifficultyTier? = nil) -> String {
        let t = tier ?? difficulty
        return "\(roomID):\(discipline.rawValue):\(t.rawValue)"
    }

    func isSolved(roomID: String, discipline: QuestDiscipline, tier: DifficultyTier? = nil) -> Bool {
        solvedKeys.contains(key(roomID: roomID, discipline: discipline, tier: tier))
    }

    func markSolved(roomID: String, discipline: QuestDiscipline) {
        let k = key(roomID: roomID, discipline: discipline, tier: difficulty)
        solvedKeys.insert(k)
        let generator = UINotificationFeedbackGenerator()
        generator.notificationOccurred(.success)
    }

    func triggerWrongHaptic() {
        let generator = UINotificationFeedbackGenerator()
        generator.notificationOccurred(.warning)
    }

    func triggerTapHaptic() {
        let generator = UIImpactFeedbackGenerator(style: .light)
        generator.impactOccurred()
    }

    func solvedCount(for roomID: String) -> Int {
        QuestDiscipline.allCases.filter { isSolved(roomID: roomID, discipline: $0) }.count
    }

    func isRelicUnlocked(for roomID: String) -> Bool {
        QuestDiscipline.allCases.contains { disc in
            isSolved(roomID: roomID, discipline: disc, tier: .junior) ||
            isSolved(roomID: roomID, discipline: disc, tier: .scholar)
        }
    }

    func disciplineSolvedCount(_ discipline: QuestDiscipline) -> Int {
        GameData.allRooms.filter { isSolved(roomID: $0.id, discipline: discipline) }.count
    }

    var totalSolvedForCurrentTier: Int {
        QuestDiscipline.allCases.reduce(0) { $0 + disciplineSolvedCount($1) }
    }

    static func loadBundledImage(named fileName: String) -> UIImage? {
        let base = (fileName as NSString).deletingPathExtension
        let ext = (fileName as NSString).pathExtension
        if let path = Bundle.main.path(forResource: base, ofType: ext, inDirectory: "Photos"),
           let img = UIImage(contentsOfFile: path) {
            return img
        }
        if let path = Bundle.main.path(forResource: base, ofType: ext),
           let img = UIImage(contentsOfFile: path) {
            return img
        }
        return UIImage(named: base) ?? UIImage(named: fileName)
    }

    private func save() {
        UserDefaults.standard.set(Array(solvedKeys), forKey: storageKey)
        UserDefaults.standard.set(selectedMouseID, forKey: mouseKey)
        UserDefaults.standard.set(difficulty.rawValue, forKey: tierKey)
    }
}
