/*
 * cues.js: the beat sheet for "100 days of vibe coding", a soft recap.
 * 12 bars at 88 BPM (a bar is 2.727 s). Scene code never holds a literal time.
 */
window.CUES = {
  name: "gwai-100-days-recap",
  title: "100 days of vibe coding",
  style: "soft",
  width: 1080,
  height: 1920,
  duration: 32.7273, // 12 bars at 88 BPM; keep root data-duration equal
  grid: { bpm: 88, firstBeat: 0, pickupBeats: 0, beatsPerBar: 4 }, // from assets/audio/bed.grid.json
  music: { src: "assets/audio/bed.wav", volume: 1, license: "generated with synth.py (lofi), royalty-free" },
  sfx: { dir: "assets/audio/sfx", peaks: "assets/audio/sfx/peaks.json" },
  safe: { top: 250, bottom: 420, left: 60, right: 150 },
  scenes: [
    { name: "Hook", from: [1, 1], to: [3, 1], what: "pill 100 DAY VIBE CODE CHALLENGE, then 100 days of vibe coding." },
    { name: "The builds", from: [3, 1], to: [7, 1], what: "Days 1 to 5 land as a pile of cards, one every 3 beats, name pill above, facts below" },
    { name: "With you", from: [7, 1], to: [8, 1], what: "Building with you on Lovable." },
    { name: "Suspense", from: [8, 1], to: [9, 1], what: "brown floods down, Guess what... word by word, the music thins out" },
    { name: "The badge", from: [9, 1], to: [10, 3], what: "breath, then cream floods up: We are now + the Lovable Certified Expert badge" },
    { name: "Ending", from: [10, 3], to: [13, 1], what: "brown floods down: Keep building with us., then the lockup, JOIN THE GWAI HUB, girlswhoai.club" },
  ],
  events: [
    { at: [1, 1, 0.3], what: "pill draws", sfx: "tick", volume: 0.25 },
    { at: [2, 2], what: "rule", sfx: "pop", volume: 0.2 },
    { at: [3, 1], what: "day 1 card", sfx: "whoosh", volume: 0.3 },
    { at: [3, 4], what: "day 2 card", sfx: "whoosh", volume: 0.3 },
    { at: [4, 3], what: "day 3 card", sfx: "whoosh", volume: 0.3 },
    { at: [5, 2], what: "day 4 card", sfx: "whoosh", volume: 0.3 },
    { at: [6, 1], what: "day 5 card", sfx: "whoosh", volume: 0.3 },
    { at: [7, 1], what: "Building with you" },
    { at: [8, 1], what: "brown flood", sfx: "whoosh", volume: 0.25 },
    { at: [8, 2], what: "Guess" },
    { at: [8, 3], what: "what..." },
    { at: [9, 1], what: "the badge lands", sfx: "chime", volume: 0.4 },
    { at: [10, 3], what: "Keep building with us.", sfx: "whoosh", volume: 0.25 },
    { at: [11, 1], what: "lockup" },
    { at: [11, 3], what: "JOIN THE GWAI HUB", sfx: "pop", volume: 0.25 },
  ],
};
