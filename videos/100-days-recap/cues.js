/*
 * cues.js: the beat sheet for "Our first 30 days", a hyped recap of the
 * 100 Day Vibe Code Challenge. 12 bars at 124 BPM (a bar is 1.935 s).
 * Scene code never holds a literal time.
 */
window.CUES = {
  name: "gwai-first-30-days",
  title: "Our first 30 days",
  style: "soft, hyped",
  width: 1080,
  height: 1920,
  duration: 23.2258, // 12 bars at 124 BPM; keep root data-duration equal
  grid: { bpm: 124, firstBeat: 0, pickupBeats: 0, beatsPerBar: 4 }, // from assets/audio/bed.grid.json
  music: { src: "assets/audio/bed.wav", volume: 1, license: "generated with synth.py (punchy, D major), royalty-free" },
  sfx: { dir: "assets/audio/sfx", peaks: "assets/audio/sfx/peaks.json" },
  safe: { top: 250, bottom: 420, left: 60, right: 150 },
  scenes: [
    { name: "Hook", from: [1, 1], to: [3, 1], what: "pill, Our first 30 days., then Here are some of our best builds." },
    { name: "The builds", from: [3, 1], to: [6, 1], what: "Days 1 to 5 slam onto a pile, one every 2 beats, name pill above, facts below" },
    { name: "With you", from: [6, 1], to: [7, 1], what: "Building with you on Lovable." },
    { name: "Suspense", from: [7, 1], to: [8, 1], what: "brown floods down, Guess what..., the riser builds" },
    { name: "The badge", from: [8, 1], to: [9, 3], what: "breath, drop, cream floods up: We are now + the badge" },
    { name: "Ending", from: [9, 3], to: [13, 1], what: "brown: Keep building with us., then the lockup, JOIN THE GWAI HUB, girlswhoai.club" },
  ],
  events: [
    { at: [1, 1, 0.25], what: "pill draws", sfx: "tick", volume: 0.25 },
    { at: [1, 3], what: "30 days slams", sfx: "thud", volume: 0.35 },
    { at: [2, 1], what: "best builds", sfx: "pop", volume: 0.25 },
    { at: [3, 1], what: "day 1 card", sfx: "whoosh", volume: 0.3 },
    { at: [3, 3], what: "day 2 card", sfx: "whoosh", volume: 0.3 },
    { at: [4, 1], what: "day 3 card", sfx: "whoosh", volume: 0.3 },
    { at: [4, 3], what: "day 4 card", sfx: "whoosh", volume: 0.3 },
    { at: [5, 1], what: "day 5 card", sfx: "whoosh", volume: 0.3 },
    { at: [6, 1], what: "Building with you" },
    { at: [7, 1], what: "brown flood", sfx: "whoosh", volume: 0.25 },
    { at: [7, 2], what: "Guess" },
    { at: [7, 3], what: "what..." },
    { at: [8, 1], what: "the badge lands", sfx: "chime", volume: 0.45 },
    { at: [9, 3], what: "Keep building with us.", sfx: "whoosh", volume: 0.25 },
    { at: [10, 3], what: "lockup" },
    { at: [11, 1], what: "JOIN THE GWAI HUB", sfx: "pop", volume: 0.25 },
  ],
};
