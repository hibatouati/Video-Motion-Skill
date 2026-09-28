# Styles: showreel, soft, lesson

The brand never changes between styles: five colours, one face, the pack, the voice, the lockup. What changes is energy: tempo, how often the picture changes, how things move and how much 3D there is.

| | Showreel | Soft | Lesson |
|---|---|---|---|
| Length | 15 to 25 s | 12 to 25 s | 20 to 45 s |
| Tempo | 135 to 150 BPM, `synth.py --style trap` (or `punchy` 120 to 128) | 80 to 92 BPM, `--style lofi` | 80 to 92 BPM `lofi`, or silent with captions |
| New picture | every 2 beats | every 1 to 2 bars | every step (2 to 4 bars) |
| Words | 1 to 3 giant capitals at a time, slammed, under 20 in the film | one line at a time, rising softly, 96 to 140 px | captions 48 to 56 px, the prompt itself, step labels |
| Backgrounds | a flip on every chapter: brown, soft blue, cream | cream paper, one brown moment (the ending or the key line) | cream paper, white cards, one brown ending |
| 3D | at least half the scenes, lit, satin and gloss in cream and brown, soft blue glow | none, or one slow satin shape | none |
| Moves | slams, floods, irises, whips, shake on the drop | rises, fades, floods, a slow drift of soft light | rises, the prompt typing, the answer arriving, badges popping, one magic move per step |
| Chrome | viewfinder HUD in tracked capitals (`PF.hud`) | none | lesson progress dots (`G.progress`) |
| Grain | 0.05 to 0.07 | 0.03 to 0.04 | 0.02 to 0.03 or none |
| Starter | `templates/index.html` | `templates/index-soft.html` | `templates/index-soft.html` |

## Choosing

Recommend from the video type ([video-types.md](video-types.md)), then let her choose:
- **Showreel** for the big moments: a hackathon, a cohort launch, a challenge kick-off, a milestone. Energy sells the room.
- **Soft** when the words carry it: an announcement with details, a quote, a recap of photos, a member spotlight, "send this to her". Calm reads premium and gives the words time.
- **Lesson** when she is teaching: an AI tip, a prompt, a tool, a workflow. Clarity beats energy; the viewer should be able to pause on any step and copy it.

A series keeps its style. If she posts a weekly tip, every tip is a lesson with the same progress dots, the same music key and the same ending.

## Showreel, the GWAI way

Everything in [showreel.md](showreel.md) applies, with this palette:
- Chapters flip between brown (cream words), soft blue (brown words) and cream (brown words). Never two in a row on the same colour.
- 3D objects: satin cream and brown shapes, glossy white cards, a glowing soft blue point or curve as the one highlight. Fog to the scene colour.
- Slam the paired fragments one per beat: "50" (beat 1) "WOMEN." (beat 2) / "ONE" (beat 3) "CHALLENGE." (beat 4).
- The drop is the key fact (the date, the prize, the seat count) or the build itself (a screenshot of what women made, as a lit card).
- End with a cream flood up and the lockup in brown.

## Soft

- Cream paper, `G.float` soft light behind everything (blue and white, blurred 40 px, drifting on slow sines).
- Words enter with a small blur (4 to 8 px), rise 24 to 36 px over 0.5 s on `G.ease`, and hold at least 2 beats at 88 BPM. Exits are quicker than entries.
- Pills and rules draw themselves; cards rise and settle; photos arrive as white-bordered cards with a soft brown shadow, slightly rotated (1 to 3 degrees), one at a time.
- One brown moment: a flood down to brown for the key line or the ending, with cream words.
- Transitions: a flood in a palette colour, a crossfade with a rise, or a card that grows to fill the frame. No whips, no shake.

## Lesson

- One skill per film. Three steps at most; a fourth goes in the next video.
- Shape: the hook (the problem in her words, 1 to 2 bars) → the steps (each: a badge, the prompt box or a screenshot, the result) → the takeaway card → the lockup with "SAVE THIS" or "FOLLOW FOR MORE".
- The prompt box (`G.prompt`) is the hero. The prompt must be real and copyable; give it at least 1 s per 30 characters of typing, then press send on a beat, then the answer arrives in rows.
- For a real tool screen, use her screenshot or screen recording as a card (`assets.md`), with a soft blue border, and zoom (scale on `G.ease`) to the one thing that matters. Never recreate a real product's interface pixel for pixel and present it as a screenshot.
- `G.progress` shows the step; captions carry the explanation for muted viewers; sound effects are `type` under the typing, `send` on the press, `pop` as each answer row lands, `chime` on the takeaway.
- Hold the final result long enough to screenshot: 2 bars at 88 BPM.
