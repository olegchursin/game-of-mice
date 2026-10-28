/**
 * The Whispering Mouse Houses — Interactive Watercolor Storybook & Architectural Quest Engine
 */
(function () {
  const STORAGE_KEY = "twin_mouse_houses_save_v2";

  const SUBJECT_META = {
    math: { svgId: "#ink-math", label: "Mathematics", short: "Math" },
    logic: { svgId: "#ink-logic", label: "Logic", short: "Logic" },
    linguistics: { svgId: "#ink-words", label: "Word Craft", short: "Words" },
    history: { svgId: "#ink-history", label: "History", short: "History" }
  };

  // The 8 Hand-Painted Watercolor Mouse & Woodland Companions
  const CHARACTERS = [
    {
      id: "pippin",
      name: "Pippin Mapmaker",
      role: "Attic Cartographer & Sailor",
      img: "assets/watercolor/mouse_cartographer.png",
      quote: "Every penciled number and miniature teacup in these twin houses hides a true story. Try the Brass Magnifying Loupe on any room photo!",
      favRoom: "h1-r1"
    },
    {
      id: "rosalind",
      name: "Princess Rosalind",
      role: "Keeper of 75,29 & Rose Gables",
      img: "assets/watercolor/mouse_princess_rose.png",
      quote: "Look closely at the right plywood rafter in my attic—the carpenter penciled '75,29' in European decimal notation!",
      favRoom: "h1-r3"
    },
    {
      id: "barnaby",
      name: "King Barnaby",
      role: "Havana Cedar-Box Historian",
      img: "assets/watercolor/mouse_king.png",
      quote: "Our two vintage 'Havana Cigars' box beds were crafted from aromatic Spanish cedar—just like the treasure chests of old!",
      favRoom: "h1-r2"
    },
    {
      id: "lantern",
      name: "Aurelius Lantern-Mouse",
      role: "Keeper of the Evening Glow",
      img: "assets/watercolor/s1_09.png",
      quote: "Select 'Candlelight Mode' in the top bar whenever you wish to see our dollhouse windows and iron lanterns glow in the twilight!",
      favRoom: "h1-r8"
    },
    {
      id: "marigold",
      name: "Marigold Herb-Mouse",
      role: "Cellar Apothecary & Botanist",
      img: "assets/watercolor/post_08.png",
      quote: "Down in the root cellar and kitchen, lavender, rosemary, and twelve tiny apothecary jars keep our village healthy all winter.",
      favRoom: "h1-r8"
    },
    {
      id: "hazelnut",
      name: "Chef Hazelnut",
      role: "Teacup Pâtissier",
      img: "assets/watercolor/s1_05.png",
      quote: "In our vaulted White Manor kitchen, four jam jars stand stacked beside the pastel-pink fridge and a red wheel of Parmigiano!",
      favRoom: "h2-r1"
    },
    {
      id: "bramblehare",
      name: "Inspector Bramble-Hare",
      role: "Keychain & Critter Detective",
      img: "assets/watercolor/post_11.png",
      quote: "Have you seen the giant silver metal lobster-clasp keychain hanging down the tan wardrobe door on the 3rd floor?",
      favRoom: "h2-r4"
    },
    {
      id: "archivist",
      name: "Archivist Owl",
      role: "Scholar of the Whispered Scroll",
      img: "assets/watercolor/post_21.png",
      quote: "Switch between 'Junior Explorer' and 'Master Scholar' at any time—each room holds two complete tiers of scholarly riddles!",
      favRoom: "h2-r6"
    }
  ];

  // Postbox Lane & Whispering Teapot Village Cottages (from ideas/watercolor)
  const VILLAGE_COTTAGES = [
    {
      id: "vc-teapot-1",
      laneTag: "No. 1 Postbox Lane · Aerial Observatory",
      title: "The Whimsical Red-Door Teapot Cottage",
      img: "assets/watercolor/cottage_teapot1_01.png",
      keeperImg: "assets/watercolor/mouse_cartographer.png",
      keeperName: "Pippin Mapmaker",
      lore: "Crowned with a porcelain spout, geranium window boxes, and hot-air balloons drifting past the attic, this teapot cottage charts the skies between the Twin Dollhouses.",
      roomId: "h1-r1",
      roomLabel: "Enter Attic Train Loft (Manor I)"
    },
    {
      id: "vc-teapot-2",
      laneTag: "No. 2 Postbox Lane · Autumn Pâtisserie",
      title: "The Striped-Umbrella Teapot Café",
      img: "assets/watercolor/cottage_teapot2_01.png",
      keeperImg: "assets/watercolor/s1_05.png",
      keeperName: "Chef Hazelnut",
      lore: "Beneath a scalloped red-and-cream umbrella roof, harvest pumpkins and a chalkboard menu welcome hungry mice for warm croissants, fig jam, and Earl Grey tea.",
      roomId: "h2-r1",
      roomLabel: "Enter Parmigiano & Pink-Fridge Kitchen (Manor II)"
    },
    {
      id: "vc-teashop",
      laneTag: "No. 3 Postbox Lane · Porcelain Salon",
      title: "The Festoon-Lit Village Tea Shop",
      img: "assets/watercolor/cottage_teashop_01.png",
      keeperImg: "assets/watercolor/mouse_princess_gown.png",
      keeperName: "Lady Dot",
      lore: "Festooned with glowing string bulbs and lace awnings, the Tea Shop displays rows of rose-rimmed porcelain teacups and polka-dot table linens.",
      roomId: "h1-r5",
      roomLabel: "Enter Polka-Dot Cigar Suite & Showcase (Manor I)"
    },
    {
      id: "vc-antique",
      laneTag: "No. 4 Postbox Lane · Wunderkammer Guild",
      title: "The Wrought-Iron Lantern Antique Shop",
      img: "assets/watercolor/cottage_antique_01.png",
      keeperImg: "assets/watercolor/mouse_king.png",
      keeperName: "King Barnaby",
      lore: "Behind scrolled ironwork arches and flickering amber streetlamps sit antique Havana cedar boxes, Venetian looking-glasses, and brass pocket compasses.",
      roomId: "h1-r2",
      roomLabel: "Enter Havana Cigar-Box Suite (Manor I)"
    },
    {
      id: "vc-treehouse",
      laneTag: "No. 5 Whispering Woods · Hollow Oak",
      title: "The Four-Story Oak Treehouse Manor",
      img: "assets/watercolor/arch_treehouse_manor.jpg",
      keeperImg: "assets/watercolor/s1_11.png",
      keeperName: "Bramble & Mama Rosemary",
      lore: "Carved into the living trunk of an ancient hollow oak, this cutaway woodland home mirrors our timber dollhouse—complete with a root-cellar kitchen, library hearth, and winding stair.",
      roomId: "h1-r4",
      roomLabel: "Enter Woven Bassinet & Pearl Vanity (Manor I)"
    },
    {
      id: "vc-bookshop",
      laneTag: "No. 6 Inkwell Alley · Rare Manuscripts",
      title: "The Half-Timbered Tudor Bookshop",
      img: "assets/watercolor/arch_bookshop.jpg",
      keeperImg: "assets/watercolor/post_21.png",
      keeperName: "Archivist Owl",
      lore: "Ivy climbs the leaded bay windows where Archivist Owl deciphers palimpsests, Rosetta cartouches, and the handwritten story scroll taped to the study wall.",
      roomId: "h2-r6",
      roomLabel: "Enter Handwritten Scroll & Unicorn Study (Manor II)"
    },
    {
      id: "vc-blueprint",
      laneTag: "No. 7 Carpenter's Square · Measured Drawings",
      title: "The Da Vinci Blueprint Clocktower",
      img: "assets/watercolor/arch_blueprint_tower.jpg",
      keeperImg: "assets/watercolor/post_11.png",
      keeperName: "Inspector Bramble-Hare",
      lore: "Drafted in sepia ink with gear ratios, compass roses, and carpenter annotations like '75,29', this tower inspires our Da Vinci Blueprint inspection mode.",
      roomId: "h1-r3",
      roomLabel: "Enter The '75,29' Royal Toy Attic (Manor I)"
    },
    {
      id: "vc-greenhouse",
      laneTag: "No. 8 Botanical Walk · Seed & Herb Store",
      title: "The Apothecary Glasshouse Cabinet",
      img: "assets/watercolor/arch_greenhouse_cabinet.jpg",
      keeperImg: "assets/watercolor/post_08.png",
      keeperName: "Marigold Herb-Gatherer",
      lore: "A multi-tiered wooden curio cabinet overflowing with terracotta rosemary pots, Fibonacci daisies, quartz geodes, and golden honey jars.",
      roomId: "h1-r8",
      roomLabel: "Enter Apothecary Pantry & Cellar (Manor I)"
    }
  ];

  const ALL_ROOMS = [...(window.HOUSE_1_ROOMS || []), ...(window.HOUSE_2_ROOMS || [])];

  // Application State
  let state = {
    tier: "junior",        // "junior" | "scholar"
    houseFilter: "all",    // "all" | "1" | "2" | "village"
    subjectFilter: "all",  // "all" | "math" | "logic" | "linguistics" | "history"
    soundEnabled: true,
    nightMode: false,
    activeCompanionId: "pippin",
    activeRoomId: null,
    activeSubject: "math",
    visualMode: "photo",   // "photo" | "watercolor" | "blueprint"
    loupeEnabled: true,
    solved: {}             // key: `${roomId}:${subject}:${tier}` -> true
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("twin_mouse_houses_save_v1");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          state.solved = parsed.solved || {};
          if (parsed.tier) state.tier = parsed.tier;
          if (typeof parsed.soundEnabled === "boolean") state.soundEnabled = parsed.soundEnabled;
          if (typeof parsed.nightMode === "boolean") state.nightMode = parsed.nightMode;
        }
      }
    } catch (e) {
      console.warn("Could not load saved state:", e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          solved: state.solved,
          tier: state.tier,
          soundEnabled: state.soundEnabled,
          nightMode: state.nightMode
        })
      );
    } catch (e) {
      console.warn("Could not save state:", e);
    }
  }

  // Gentle Music-Box WebAudio Synthesizer
  let audioCtx = null;
  function playTone(type) {
    if (!state.soundEnabled) return;
    try {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
      }
      if (audioCtx.state === "suspended") audioCtx.resume();
      const now = audioCtx.currentTime;

      if (type === "success") {
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, i) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now + i * 0.085);
          gain.gain.setValueAtTime(0.11, now + i * 0.085);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.085 + 0.36);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + i * 0.085);
          osc.stop(now + i * 0.085 + 0.36);
        });
      } else if (type === "click") {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(620, now);
        gain.gain.setValueAtTime(0.045, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.07);
      } else if (type === "wrong") {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(240, now);
        osc.frequency.linearRampToValueAtTime(185, now + 0.22);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      }
    } catch (e) {
      // Ignore audio errors
    }
  }

  // Query Helpers
  function isSolved(roomId, subject, tier) {
    return !!state.solved[`${roomId}:${subject}:${tier}`];
  }

  function isSubjectAnySolved(roomId, subject) {
    return isSolved(roomId, subject, "junior") || isSolved(roomId, subject, "scholar");
  }

  function isRoomRelicUnlocked(roomId) {
    return ["math", "logic", "linguistics", "history"].some((s) => isSubjectAnySolved(roomId, s));
  }

  function isRoomCompleteForCurrentTier(roomId) {
    return ["math", "logic", "linguistics", "history"].every((s) => isSolved(roomId, s, state.tier));
  }

  function computeTotals() {
    let stars = 0;
    let solvedDisciplines = 0;
    let completedRooms = 0;

    ALL_ROOMS.forEach((room) => {
      let roomDone = true;
      ["math", "logic", "linguistics", "history"].forEach((subj) => {
        const jr = isSolved(room.id, subj, "junior");
        const sc = isSolved(room.id, subj, "scholar");
        if (jr) stars += 1;
        if (sc) stars += 2;
        if (jr || sc) solvedDisciplines += 1;
        else roomDone = false;
      });
      if (roomDone) completedRooms += 1;
    });

    return { stars, solvedDisciplines, completedRooms };
  }

  // Atmospheric Floating Petals & Fireflies
  function renderAtmosphereParticles() {
    const canvas = document.getElementById("skyCanvas");
    if (!canvas) return;
    canvas.innerHTML = "";
    const count = 18;
    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "atmo-particle " + (state.nightMode ? "atmo-firefly" : "atmo-petal");
      el.style.left = `${(i * 5.7 + (i % 3) * 3) % 98}%`;
      el.style.animationDuration = `${11 + (i % 7) * 2.4}s`;
      el.style.animationDelay = `${-(i * 1.3)}s`;
      canvas.appendChild(el);
    }
  }

  function applyAmbianceMode() {
    document.body.classList.toggle("ambiance-night", state.nightMode);
    document.body.classList.toggle("ambiance-day", !state.nightMode);
    const label = document.getElementById("ambianceLabel");
    if (label) {
      label.textContent = state.nightMode ? "Sunlit Wash" : "Candlelight Mode";
    }
    renderAtmosphereParticles();
  }

  // Render Top HUD & Companions
  function renderHUD() {
    const { stars, solvedDisciplines, completedRooms } = computeTotals();
    document.getElementById("starScore").textContent = `${stars} / 192`;
    document.getElementById("questProgress").textContent = `${solvedDisciplines} / 64`;
    document.getElementById("roomProgress").textContent = `${completedRooms} / 16`;

    document.getElementById("tierJuniorBtn").classList.toggle("active", state.tier === "junior");
    document.getElementById("tierScholarBtn").classList.toggle("active", state.tier === "scholar");
    document.getElementById("soundIcon").textContent = state.soundEnabled ? "Chimes: On" : "Chimes: Muted";
  }

  function setWhisper(charObj, customText) {
    const avatar = document.getElementById("whisperAvatar");
    const speaker = document.getElementById("whisperSpeaker");
    const text = document.getElementById("whisperText");
    if (avatar && charObj) avatar.src = charObj.img;
    if (speaker && charObj) speaker.textContent = `${charObj.name} · ${charObj.role}`;
    if (text) text.textContent = `"${customText || (charObj ? charObj.quote : "")}"`;
  }

  function renderCharacters() {
    const row = document.getElementById("charactersRow");
    if (!row) return;
    row.innerHTML = CHARACTERS.map((c) => {
      const isActive = c.id === state.activeCompanionId;
      return `
        <div class="character-card ${isActive ? "active-companion" : ""}" data-char="${c.id}" title="Select to hear ${c.name}'s story">
          <div class="char-portrait-wrap">
            <img src="${c.img}" alt="${c.name}" class="char-portrait-img" loading="lazy" />
          </div>
          <div class="char-info">
            <div class="char-name">${c.name}</div>
            <div class="char-role">${c.role}</div>
          </div>
        </div>
      `;
    }).join("");

    row.querySelectorAll(".character-card").forEach((card) => {
      card.addEventListener("click", () => {
        const c = CHARACTERS.find((x) => x.id === card.dataset.char);
        if (!c) return;
        playTone("click");
        state.activeCompanionId = c.id;
        setWhisper(c);
        renderCharacters();
      });
    });
  }

  // Render Architectural Dollhouse Room Grids
  function renderHouseGrid(rooms, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = rooms
      .map((room, idx) => {
        const complete = isRoomCompleteForCurrentTier(room.id);
        const relicUnlocked = isRoomRelicUnlocked(room.id);
        const stampImg = idx % 2 === 0 ? "assets/watercolor/post_01.png" : "assets/watercolor/post_03.png";

        const pipsHtml = ["math", "logic", "linguistics", "history"]
          .map((subj) => {
            const meta = SUBJECT_META[subj];
            const jr = isSolved(room.id, subj, "junior");
            const sc = isSolved(room.id, subj, "scholar");
            let pipClass = "subject-pip";
            if (sc) pipClass += " pip-scholar";
            else if (jr) pipClass += " pip-junior";
            if (state.subjectFilter !== "all" && state.subjectFilter === subj) {
              pipClass += " pip-highlighted";
            }
            const statusText = sc ? "II" : jr ? "I" : meta.short;
            return `<div class="${pipClass}" title="${meta.label}">
              <svg class="pip-svg" width="12" height="12"><use href="${meta.svgId}"/></svg>
              <span>${statusText}</span>
            </div>`;
          })
          .join("");

        return `
          <div class="room-card ${complete ? "room-complete" : ""}" data-room-id="${room.id}">
            <div class="room-top-bar">
              <span>${room.floorLabel}</span>
              ${
                complete
                  ? `<span class="room-complete-seal">Mastered</span>`
                  : relicUnlocked
                  ? `<span class="room-complete-seal">Relic Unsealed</span>`
                  : `<span>Plate ${room.id.toUpperCase()}</span>`
              }
            </div>
            <div class="room-art-stage">
              ${room.svgArt}
              <div class="room-candle-overlay"></div>
              ${
                relicUnlocked
                  ? `<img src="${stampImg}" alt="Postmarked Stamp" class="room-postmark-stamp" title="Royal Mouse Post Stamp Earned" />`
                  : ""
              }
            </div>
            <div class="room-card-body">
              <div class="room-title-row">
                <div class="room-name">${room.name}</div>
              </div>
              <div class="room-subtitle">${room.subtitle}</div>
              <div class="room-subject-pips">${pipsHtml}</div>
            </div>
          </div>
        `;
      })
      .join("");

    container.querySelectorAll(".room-card").forEach((card) => {
      card.addEventListener("click", () => {
        playTone("click");
        const rId = card.getAttribute("data-room-id");
        const initialSubj = state.subjectFilter !== "all" ? state.subjectFilter : "math";
        openRoomModal(rId, initialSubj);
      });
    });
  }

  // Render Postbox Lane & Whispering Teapot Village
  function renderVillageGrid() {
    const grid = document.getElementById("villageGrid");
    if (!grid) return;
    grid.innerHTML = VILLAGE_COTTAGES.map((c) => {
      return `
        <article class="village-cottage-card">
          <div class="cottage-painting-wrap">
            <img src="${c.img}" alt="${c.title}" class="cottage-painting-img" loading="lazy" />
            <img src="${c.keeperImg}" alt="${c.keeperName}" class="cottage-keeper-badge" title="Guild Keeper: ${c.keeperName}" />
          </div>
          <div class="cottage-card-body">
            <div class="cottage-lane-tag">${c.laneTag}</div>
            <h3 class="cottage-title">${c.title}</h3>
            <p class="cottage-lore">${c.lore}</p>
            <button class="cottage-jump-btn" data-jump-room="${c.roomId}">
              ${c.roomLabel} &rarr;
            </button>
          </div>
        </article>
      `;
    }).join("");

    grid.querySelectorAll(".cottage-jump-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        playTone("click");
        const roomId = btn.getAttribute("data-jump-room");
        openRoomModal(roomId, "math");
      });
    });
  }

  // Render Wunderkammer Relics & Stamp Album
  function renderRelics() {
    const grid = document.getElementById("relicsGrid");
    if (!grid) return;
    grid.innerHTML = ALL_ROOMS.map((room) => {
      const unlocked = isRoomRelicUnlocked(room.id);
      const relicImg = room.relic.img || "assets/watercolor/post_27.png";
      return `
        <div class="relic-slot ${unlocked ? "unlocked" : ""}" data-room-id="${room.id}" title="${room.relic.desc}">
          <img src="${relicImg}" alt="${room.relic.name}" class="relic-thumb-img" loading="lazy" />
          <div>
            <div class="relic-name">${unlocked ? room.relic.name : "Unsealed Curio"}</div>
            <div class="relic-room">${room.name}</div>
          </div>
        </div>
      `;
    }).join("");

    grid.querySelectorAll(".relic-slot").forEach((slot) => {
      slot.addEventListener("click", () => {
        playTone("click");
        openRoomModal(slot.getAttribute("data-room-id"), "math");
      });
    });
  }

  function renderAll() {
    renderHUD();
    renderCharacters();
    renderHouseGrid(window.HOUSE_1_ROOMS || [], "house1Grid");
    renderHouseGrid(window.HOUSE_2_ROOMS || [], "house2Grid");
    renderVillageGrid();
    renderRelics();

    const h1 = document.getElementById("house1Container");
    const h2 = document.getElementById("house2Container");
    const stage = document.getElementById("housesStage");
    const villageSec = document.getElementById("villageSection");

    if (state.houseFilter === "village") {
      stage.classList.add("hidden");
      villageSec.classList.remove("hidden");
    } else {
      villageSec.classList.add("hidden");
      stage.classList.remove("hidden");
      if (state.houseFilter === "1") {
        h1.classList.remove("hidden");
        h2.classList.add("hidden");
        stage.classList.add("single-house-view");
      } else if (state.houseFilter === "2") {
        h1.classList.add("hidden");
        h2.classList.remove("hidden");
        stage.classList.add("single-house-view");
      } else {
        h1.classList.remove("hidden");
        h2.classList.remove("hidden");
        stage.classList.remove("single-house-view");
      }
    }
  }

  // ==========================================================================
  // OPEN 2-PAGE FIELD JOURNAL MODAL & MAGNIFYING LOUPE
  // ==========================================================================
  function applyVisualMode() {
    const photoEl = document.getElementById("modalRoomPhoto");
    const svgEl = document.getElementById("modalRoomSvg");
    const frameEl = document.getElementById("photoFrame");
    const loupeEl = document.getElementById("photoLoupe");

    document.getElementById("viewPhotoBtn").classList.toggle("active", state.visualMode === "photo");
    document.getElementById("viewSvgBtn").classList.toggle("active", state.visualMode === "watercolor");
    document.getElementById("viewBlueprintBtn").classList.toggle("active", state.visualMode === "blueprint");

    frameEl.classList.toggle("blueprint-mode", state.visualMode === "blueprint");

    if (state.visualMode === "watercolor") {
      photoEl.classList.add("hidden");
      svgEl.classList.remove("hidden");
      loupeEl.classList.add("hidden");
    } else {
      photoEl.classList.remove("hidden");
      svgEl.classList.add("hidden");
    }
  }

  function openRoomModal(roomId, subject) {
    const room = ALL_ROOMS.find((r) => r.id === roomId);
    if (!room) return;

    state.activeRoomId = roomId;
    state.activeSubject = subject || "math";

    document.getElementById("modalHouseBadge").textContent =
      `Manor ${room.house === 1 ? "I · Timber Gables" : "II · White Rose Manor"} — ${room.floorLabel}`;
    document.getElementById("modalRoomTitle").textContent = room.name;
    document.getElementById("modalRoomSubtitle").textContent = room.subtitle;

    const photoEl = document.getElementById("modalRoomPhoto");
    const svgEl = document.getElementById("modalRoomSvg");
    photoEl.src = room.photo;
    svgEl.innerHTML = room.svgArt;

    // Configure Magnifying Glass Loupe image
    const loupeEl = document.getElementById("photoLoupe");
    loupeEl.style.backgroundImage = `url('${room.photo}')`;

    applyVisualMode();

    // Render Interactive Clue Hotspots
    const hotspotLayer = document.getElementById("hotspotLayer");
    const calloutText = document.getElementById("hotspotCalloutText");
    calloutText.innerHTML = `<strong>Field Note:</strong> Move your brass magnifying loupe across the photograph or select the numbered wax pins to inspect real miniature clues.`;

    hotspotLayer.innerHTML = (room.hotspots || [])
      .map(
        (h, i) => `
      <button class="hotspot-pin" style="left:${h.x}%; top:${h.y}%;" data-idx="${i}">
        <span class="pin-number">${i + 1}.</span> ${h.label}
      </button>
    `
      )
      .join("");

    hotspotLayer.querySelectorAll(".hotspot-pin").forEach((pin) => {
      pin.addEventListener("click", (e) => {
        e.stopPropagation();
        playTone("click");
        const h = room.hotspots[Number(pin.dataset.idx)];
        if (h) {
          calloutText.innerHTML = `<strong>${h.label}:</strong> ${h.note}`;
        }
      });
    });

    // Render Resident Companion & Relic Footer on Left Page
    const residentCard = document.getElementById("modalResidentCard");
    const charInfo = room.character || {
      name: "Pippin Mapmaker",
      role: "House Guide",
      img: "assets/watercolor/mouse_cartographer.png"
    };
    const relicUnlocked = isRoomRelicUnlocked(room.id);
    residentCard.innerHTML = `
      <div class="resident-mini-profile">
        <img src="${charInfo.img}" alt="${charInfo.name}" class="resident-mini-img" />
        <div>
          <div class="char-name">Resident Guide: ${charInfo.name}</div>
          <div class="char-role">${charInfo.role}</div>
        </div>
      </div>
      <div class="resident-mini-profile">
        <img src="${room.relic.img || "assets/watercolor/post_27.png"}" alt="${room.relic.name}" class="resident-mini-img" />
        <div>
          <div class="char-name">${relicUnlocked ? room.relic.name + " (Unsealed)" : room.relic.name + " (Sealed)"}</div>
          <div class="char-role">${room.relic.desc}</div>
        </div>
      </div>
    `;

    renderModalSubject();
    document.getElementById("roomModal").classList.remove("hidden");
  }

  function renderModalSubject() {
    const room = ALL_ROOMS.find((r) => r.id === state.activeRoomId);
    if (!room) return;

    // Update 4 subject tabs
    ["math", "logic", "linguistics", "history"].forEach((subj) => {
      const statusEl = document.getElementById(`status-${subj}`);
      const jr = isSolved(room.id, subj, "junior");
      const sc = isSolved(room.id, subj, "scholar");
      if (statusEl) {
        statusEl.textContent = sc ? "Mastered" : jr ? "Solved" : "Unsealed";
      }
    });

    document.querySelectorAll("#subjectTabs .dfolio-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.subject === state.activeSubject);
    });

    const taskGroup = room.tasks[state.activeSubject];
    const tierData = taskGroup[state.tier];
    const subjMeta = SUBJECT_META[state.activeSubject];

    const tierLabel = state.tier === "junior" ? "Tier I · Junior Explorer" : "Tier II · Master Scholar";
    document.getElementById("modalTierIndicator").textContent = tierLabel;
    document.getElementById("questSubjectTag").textContent = `${subjMeta.label} Folio`;
    document.getElementById("questDifficultyTag").textContent = tierLabel;

    document.getElementById("questTitle").textContent = taskGroup.title;
    document.getElementById("questStory").textContent = taskGroup.story;
    document.getElementById("questPrompt").textContent = tierData.prompt;

    const hintBox = document.getElementById("hintBox");
    hintBox.classList.add("hidden");
    hintBox.innerHTML = `<strong>Companion Margin Whisper:</strong> ${tierData.hint}`;

    const feedbackBanner = document.getElementById("feedbackBanner");
    const alreadySolved = isSolved(room.id, state.activeSubject, state.tier);

    if (alreadySolved) {
      feedbackBanner.className = "feedback-parchment-banner success";
      feedbackBanner.innerHTML = `<strong>Postmarked &amp; Verified:</strong> ${tierData.explanation}`;
      feedbackBanner.classList.remove("hidden");
    } else {
      feedbackBanner.classList.add("hidden");
    }

    const letters = ["A", "B", "C", "D"];
    const optionsEl = document.getElementById("questOptions");
    optionsEl.innerHTML = tierData.options
      .map((opt, idx) => {
        const isCorrectClass = alreadySolved && idx === tierData.answer ? "correct" : "";
        return `
        <button class="option-btn ${isCorrectClass}" data-idx="${idx}" ${alreadySolved ? "disabled" : ""}>
          <span class="option-letter">${letters[idx]}</span>
          <span>${opt}</span>
        </button>
      `;
      })
      .join("");

    optionsEl.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chosen = Number(btn.dataset.idx);
        handleAnswerChoice(room, state.activeSubject, state.tier, chosen, btn);
      });
    });
  }

  function handleAnswerChoice(room, subject, tier, chosenIdx, btnEl) {
    const tierData = room.tasks[subject][tier];
    const feedbackBanner = document.getElementById("feedbackBanner");

    if (chosenIdx === tierData.answer) {
      playTone("success");
      btnEl.classList.add("correct");
      document.querySelectorAll("#questOptions .option-btn").forEach((b) => {
        b.disabled = true;
      });

      const key = `${room.id}:${subject}:${tier}`;
      const wasSolved = !!state.solved[key];
      state.solved[key] = true;
      saveState();

      feedbackBanner.className = "feedback-parchment-banner success";
      feedbackBanner.innerHTML = `<strong>Splendid Deduction!</strong> ${tierData.explanation} <br/><em>+${tier === "scholar" ? "2 Scholar Merit Points" : "1 Explorer Merit Point"} &amp; Relic Seal Recorded.</em>`;
      feedbackBanner.classList.remove("hidden");

      if (!wasSolved) {
        spawnConfetti();
      }
      renderAll();
      renderModalSubject();
    } else {
      playTone("wrong");
      btnEl.classList.add("wrong");
      feedbackBanner.className = "feedback-parchment-banner try-again";
      feedbackBanner.innerHTML = `<strong>Not quite that parchment.</strong> Select <em>"Unseal Companion Hint"</em> or inspect the room clues on the left page and try another option.`;
      feedbackBanner.classList.remove("hidden");
    }
  }

  function spawnConfetti() {
    for (let i = 0; i < 22; i++) {
      const span = document.createElement("span");
      span.className = "confetti-piece " + (i % 2 === 0 ? "confetti-petal" : "confetti-leaf");
      span.style.left = `${8 + Math.random() * 84}vw`;
      span.style.animationDuration = `${1.9 + Math.random() * 1.4}s`;
      document.body.appendChild(span);
      setTimeout(() => span.remove(), 3400);
    }
  }

  // Interactive Brass Magnifying Glass Loupe on the Specimen Frame
  function initMagnifyingLoupe() {
    const frame = document.getElementById("photoFrame");
    const loupe = document.getElementById("photoLoupe");
    const toggleBtn = document.getElementById("toggleLoupeBtn");
    if (!frame || !loupe || !toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
      playTone("click");
      state.loupeEnabled = !state.loupeEnabled;
      toggleBtn.classList.toggle("active", state.loupeEnabled);
      toggleBtn.textContent = state.loupeEnabled ? "Brass Loupe: On" : "Brass Loupe: Off";
      if (!state.loupeEnabled) loupe.classList.add("hidden");
    });

    function moveLoupe(clientX, clientY) {
      if (!state.loupeEnabled || state.visualMode === "watercolor") {
        loupe.classList.add("hidden");
        return;
      }
      const rect = frame.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        loupe.classList.add("hidden");
        return;
      }
      loupe.classList.remove("hidden");
      loupe.style.left = `${x}px`;
      loupe.style.top = `${y}px`;
      const zoom = 2.25;
      loupe.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`;
      const bgX = -(x * zoom - loupe.offsetWidth / 2);
      const bgY = -(y * zoom - loupe.offsetHeight / 2);
      loupe.style.backgroundPosition = `${bgX}px ${bgY}px`;
    }

    frame.addEventListener("mousemove", (e) => moveLoupe(e.clientX, e.clientY));
    frame.addEventListener("mouseleave", () => loupe.classList.add("hidden"));
  }

  // Wire UI Events
  function initEvents() {
    // Difficulty tier buttons
    document.querySelectorAll(".tier-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        playTone("click");
        state.tier = btn.dataset.tier;
        saveState();
        renderAll();
        if (!document.getElementById("roomModal").classList.contains("hidden")) {
          renderModalSubject();
        }
      });
    });

    // Ambiance Day / Candlelight Night Toggle
    document.getElementById("ambianceToggleBtn").addEventListener("click", () => {
      playTone("click");
      state.nightMode = !state.nightMode;
      saveState();
      applyAmbianceMode();
    });

    // Sound toggle
    document.getElementById("soundToggleBtn").addEventListener("click", () => {
      state.soundEnabled = !state.soundEnabled;
      saveState();
      renderHUD();
      if (state.soundEnabled) playTone("click");
    });

    // Realm View tabs (Both Manors, House 1, House 2, Village)
    document.querySelectorAll(".realm-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        playTone("click");
        document.querySelectorAll(".realm-tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        state.houseFilter = tab.dataset.house;
        renderAll();
      });
    });

    // Subject Ink Filter pills
    document.querySelectorAll(".ink-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        playTone("click");
        document.querySelectorAll(".ink-pill").forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        state.subjectFilter = pill.dataset.subject;
        renderAll();
      });
    });

    // Subject tabs inside Field Journal Modal
    document.querySelectorAll("#subjectTabs .dfolio-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        playTone("click");
        state.activeSubject = tab.dataset.subject;
        renderModalSubject();
      });
    });

    // 3-Way Visual Mode Switcher inside Modal (Photo, Watercolor, Blueprint)
    document.querySelectorAll(".vmode-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        playTone("click");
        state.visualMode = btn.dataset.vmode;
        applyVisualMode();
      });
    });

    // Hint button
    document.getElementById("hintBtn").addEventListener("click", () => {
      playTone("click");
      document.getElementById("hintBox").classList.toggle("hidden");
    });

    // Close modals
    document.getElementById("closeRoomModal").addEventListener("click", () => {
      document.getElementById("roomModal").classList.add("hidden");
    });
    document.getElementById("roomModal").addEventListener("click", (e) => {
      if (e.target.id === "roomModal") {
        document.getElementById("roomModal").classList.add("hidden");
      }
    });

    // Open & Close Photo Atlas Modal
    document.getElementById("openAtlasBtn").addEventListener("click", () => {
      playTone("click");
      document.getElementById("atlasModal").classList.remove("hidden");
    });
    document.querySelectorAll(".manor-photo-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        playTone("click");
        document.getElementById("atlasModal").classList.remove("hidden");
      });
    });
    document.getElementById("closeAtlasModal").addEventListener("click", () => {
      document.getElementById("atlasModal").classList.add("hidden");
    });
    document.getElementById("atlasModal").addEventListener("click", (e) => {
      if (e.target.id === "atlasModal") {
        document.getElementById("atlasModal").classList.add("hidden");
      }
    });

    // Reset progress
    document.getElementById("resetProgressBtn").addEventListener("click", () => {
      if (confirm("Reset all solved folios, merit points, and unsealed curios across both Mouse Manors?")) {
        state.solved = {};
        saveState();
        renderAll();
      }
    });

    // Escape key closes open modal
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.getElementById("roomModal").classList.add("hidden");
        document.getElementById("atlasModal").classList.add("hidden");
      }
    });

    initMagnifyingLoupe();
  }

  // Initialize Application
  loadState();
  initEvents();
  applyAmbianceMode();
  renderAll();
})();
