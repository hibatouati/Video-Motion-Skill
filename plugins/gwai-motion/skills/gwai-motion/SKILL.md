---
name: gwai-motion
description: Make on-brand motion videos for Girls Who Ai (GWAI), the community teaching women AI, in code with HyperFrames (HTML to video). Soft blue, vanilla cream and brown, Helvetica, the GWAI voice and graphic pack (outlined pills, numbered brown badges, the soft blue rule, the wordmark lockup with BUILD. CREATE. CONNECT.). Three styles - a fast showreel with lit Three.js scenes cut to a trap beat, a soft editorial film on cream paper with a lo-fi bed, and a step by step AI lesson with a prompt box that types and answers. Covers event and hackathon announcements, cohort and course launches, AI tips and tool tutorials, challenges, recaps from event photos, member spotlights, "send this to her" recruitment, deadlines and quotes, as Instagram Reels, TikToks, Shorts, stories or square posts. Use whenever Hiba or the GWAI team asks for a video, Reel, TikTok, promo, motion post, animated announcement, lesson video or recap, including casual asks like "make a reel for the hackathon" or "turn these photos into a video", and when they send images or screenshots to animate.
---

# Girls Who Ai motion

Videos for a community of women learning to build with AI. Every film looks like Girls Who Ai made it (the five colours, Helvetica, the pill, the badge, the rule, the lockup) and sounds like GWAI talks (warm, direct, a little bold, never cute). The brand is already known: never run a brand interview. Built as a HyperFrames project (plain HTML, CSS and JS rendered to MP4), editable in HyperFrames Studio.

Read [reference/gwai-brand.md](reference/gwai-brand.md) before writing a single word on screen, and [reference/styles.md](reference/styles.md) before planning a single scene.

## Three styles

| | Showreel | Soft | Lesson |
|---|---|---|---|
| Feels like | a launch trailer | a calm editorial post | a friend showing you how |
| For | hackathons, cohort launches, challenges, big news | announcements, quotes, recaps, spotlights, "send this to her" | AI tips, tool tutorials, prompts, workflows |
| Tempo | 135 to 150 BPM trap | 80 to 92 BPM lo-fi | 80 to 92 BPM lo-fi, or silent with captions |
| Picture | lit Three.js, a cut every 2 beats, slammed capitals | cream paper, drifting soft blue light, words that rise | the prompt box, numbered steps, cards, real screenshots |
| Starter | `--style showreel` | `--style soft` | `--style lesson` |

Pick the style from the video type ([reference/video-types.md](reference/video-types.md)), then offer it in the interview with that pick marked "(Recommended)". The user can always switch.

## Non-negotiables

- **The palette is five hexes and nothing else.** Brown `#442a1f`, soft blue `#bfd9e3`, cream `#fffde7`, white `#ffffff`, light grey `#f7f7f7`. No pink, no red, no green, no purple "AI gradient". Depth comes from light, blur and fog towards these colours, never from a new colour. Photos keep their own colours; the frame around them stays on palette.
- **The GWAI voice on screen.** Short paired fragments with numbers ("50 women. One challenge."), capitals for labels and pills, sentence case for lines, no emojis, no em dashes, no hearts or decorative glyphs. Name the tools exactly (Claude, ChatGPT, Lovable, Canva, Genspark). See [reference/gwai-brand.md](reference/gwai-brand.md).
- **Real facts only.** Dates, prices, seat counts, prizes, partner names, links and what a tool answered come from the user word for word. Never invent one to make a slam land. If a fact is missing, ask for it or leave it out and say so.
- **Teach true things.** A prompt shown on screen must be one that works; an answer shown must be what the tool really gave or a faithful short version the user approved. No fake screenshots of real products' interfaces presented as real; the kit's prompt box is a neutral GWAI box with the tool's name as a label.
- **People and photos.** Only photos the user sends and has the right to use. Faces of attendees need their consent; say so once when photos of people arrive. Never generate or alter a real woman's face.
- **Every frame is a pure function of time.** One clock drives everything: `PF.film` calls `draw(t)` on every seek. No CSS transitions or keyframes, no timers, no `Date.now()`, no unseeded `Math.random()`, no network at render time.
- **Measure, never guess.** Beats from the grid, positions from the DOM (`PF.rectOf`, `--debug` stills), colours and loudness from the decoded final files.
- **Remember.** Every choice and every note on a finished film goes into `videos/BRAND.md` so the next film starts where this one ended.
- **Ask first** before committing, pushing or publishing. Every render is kept (`out/<film>/v1`, `v2`, ...).

## Workflow

1. **Read the profile.** `videos/BRAND.md` (the GWAI profile; `setup.mjs` writes it from [templates/BRAND.md](templates/BRAND.md) the first time). Reuse its standing choices and past notes.
2. **Look at what she sent.** Open every image, screenshot and video before planning: what is in it, its size, whether faces are visible. See [reference/assets.md](reference/assets.md).
3. **Interview (AskUserQuestion).** The video type, the style, where it plays and how long, the one message, the facts the type needs, the music. Every question has "You choose for me". Never ask about colours, fonts or voice. See [reference/interview.md](reference/interview.md).
4. **Project.** `node <skill>/scripts/setup.mjs videos/<film> --style <showreel|soft|lesson> --size 1080x1920 [--katex] [--no-three]`: a HyperFrames project with the kit (including `kit/gwai.js`, the brand pack), the brand font, vendored GSAP and Three.js, and the starter for the style. Soft and lesson films can pass `--no-three`.
5. **Story → `videos/<film>/PROMPT.md` and `cues.js`.** Fill [templates/film-prompt.md](templates/film-prompt.md); write the beat sheet as data in `cues.js`, with the chapters of the video type. `node <skill>/scripts/beat-sheet.mjs videos/<film>` prints the table and flags dead bars. See [reference/story.md](reference/story.md).
6. **Music.** Showreel: `synth.py music --style trap`. Soft and lesson: `synth.py music --style lofi --bpm 88`. Her own licensed track: `beats.py` then `audio-edit.py`. Effects (`type`, `send`, `pop`, `chime`, `whoosh`, `thud`): `synth.py sfx`, then `place-audio.mjs`. See [reference/music.md](reference/music.md).
7. **Build.** Read [reference/engine.md](reference/engine.md). `setup()` builds and measures once; `draw(t)` sets every style from `t` and the cues. Use `PF.gwai` pieces for everything the brand already owns. Checkpoint with the user: the beat sheet and 3 style frames (the hook, one middle scene, the ending).
8. **Review loop.** See [reference/review.md](reference/review.md): stills at every handoff (`--debug` to measure), `npx hyperframes check`, a `--draft` render and a contact sheet. Fix, repeat, show her frames as you go.
9. **Final render, verify, deliver.** See [reference/render.md](reference/render.md) and [reference/social.md](reference/social.md): `render.mjs`, then `verify.py`, then send the files with a two-line caption and a suggested post caption in the GWAI voice.
10. **Remember.** Add the film and her reactions to "Films" in `videos/BRAND.md`; turn lasting notes into standing choices.

## Quality floor (every style)

- **Only the five colours.** Scenes alternate brown, cream and soft blue; white is for cards; grey only for a quiet background. Text is brown on light scenes and cream on brown. Never soft blue text on cream (too little contrast): soft blue is for bands, rules, borders, glow and light.
- **Readable on a phone.** Fewer words beat smaller words. At 1080 wide: body 40 px and up, captions 48 px and up, prompt box text 40 px and up.
- **Text is never covered** by a card, a photo or a texture, and never crosses other text in a move. Words keep their slots while they build.
- **Something happens on every beat** in the showreel, every bar in the soft and lesson styles. A lesson step holds long enough to read twice.
- **Keep inside the safe zone** of the platform (social UI covers the top and bottom of a 9:16 frame).
- **Always end on the lockup.** The wordmark, the rule, BUILD. CREATE. CONNECT., and a call to action only if she gave one (a pill: "APPLY NOW", "LINK IN BIO", "SAVE THIS"). Hold it 2 s or more.
- **Showreel only:** at least half the scenes lit 3D (env map, satin or gloss materials in cream and brown, bloom only on the soft blue glow), a camera re-frame every 2 beats. See [reference/showreel.md](reference/showreel.md).
- **Soft and lesson:** no slams, no shake, no HUD, no hard whips. Moves are rises, fades, floods and one magic move per scene at most. The one busy moment is the answer arriving or the key number landing.

## Traps that cost real time (each one happened)

- **A closing script tag inside any kit or inline script, even in a comment, breaks the film:** HyperFrames inlines scripts, so the rest of the file prints into the frame as text.
- **`visibility: visible` on a child beats a hidden parent.** A shown element must be `visibility: inherit` (`PF.show` does this), or it leaks into every other scene.
- **Measure only after every font has loaded.** `PF.film` loads every declared `@font-face` first; `PF.gwai.pill` measures its label in setup for that reason. Re-measure after any font or layout change.
- **Lint must see a literal `window.__timelines["<id>"] = tl`.** Pass it as `register` to `PF.film`, and register only after the build.
- **An invisible element still has a box.** `check` measures boxes, not pixels: end a scene (hide it) when its content has faded.
- **No CDN at render time.** `setup.mjs` vendors GSAP, Three.js, KaTeX and the font; everything else lives in `assets/`.
- **Every `<audio>` needs an id, a `data-start` and a `data-duration`.** Let `place-audio.mjs` write them.
- **Soft blue on cream fails contrast.** `hyperframes check` will flag it. Use brown for any text on cream or blue; keep soft blue for shapes.
- **Grain or any canvas over text:** set the strength as the element's opacity (`PF.grain` does), and mark decorative layers (grain, soft light, vignettes, word walls) `data-layout-ignore`.
- **Three.js loads as a module, after the classic scripts.** Resolve `PF.signal("three")` in the module and pass it to `PF.film({ waitFor })`. Render with `st.render()` inside `draw(t)`.
- **Bloom threshold under 1 turns the scene to milk,** and on cream it is worse. Threshold 1.0, `environmentIntensity` about 0.5, exposure about 0.95; only `mat("glow")` crosses the threshold.
- **Cream rendered lit comes out yellow-grey.** Anything that must match a swatch is `MeshBasicMaterial` with `toneMapped: false` (`PF.three.card` default).
- **3D renders slowly on software GL** (about 1 frame a second with bloom). Review with stills and `--draft` first; soft and lesson films skip 3D and render many times faster.
- **Typed prompts:** the prompt box types at a fixed rate from `typeFor`; a long prompt typed in one beat reads as a flash. Give it at least 1 s per 30 characters, or cut the prompt.
- Stop only the processes you started; other sessions may be waiting on the machine.

## Credits

Built on brand-motion-design by Raed Ouerfelli (MIT), itself based on product-film by Anthony Riera (MIT). See LICENSE at the repository root.
