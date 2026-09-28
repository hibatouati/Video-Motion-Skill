/*
 * cues.js: the beat sheet as data. The composition reads it in the browser
 * (window.CUES) and the scripts read it in Node (beat-sheet, place-audio,
 * stills, render). Scene code never holds a literal time: it asks b(bar, beat).
 * `at` / `from` / `to` are [bar, beat, fraction] on the grid, or seconds.
 */
window.CUES = {
  name: "film", // file name of the deliverables
  title: "Girls Who Ai",
  style: "__STYLE__", // showreel | soft | lesson (reference/styles.md)
  width: __W__,
  height: __H__,
  duration: __DUR__, // seconds: a whole number of bars (plus an optional ring-out); keep root data-duration equal
  grid: { bpm: __BPM__, firstBeat: 0, pickupBeats: 0, beatsPerBar: 4 }, // from beats.py / synth.py
  music: null, // { src: "assets/audio/bed.wav", volume: 1, license: "generated with synth.py" }
  sfx: { dir: "assets/audio/sfx", peaks: "assets/audio/sfx/peaks.json" },
  safe: { top: 250, bottom: 420, left: 60, right: 150 }, // 9:16 social (reference/social.md); null for 16:9
  scenes: [
    // { name: "Opening", from: [1, 1], to: [3, 1], what: "the logo draws itself" },
  ],
  events: [
    // { at: [3, 1], what: "first punchline word", sfx: "tick", volume: 0.3 },
  ],
};
