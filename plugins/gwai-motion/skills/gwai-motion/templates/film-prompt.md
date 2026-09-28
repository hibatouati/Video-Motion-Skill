<context>
Girls Who Ai teaches women to build with AI. This film is about <the event, cohort, lesson or person, in one sentence>.
This film plays <where, from the interview>. It must read <with the sound off, if it plays muted>.
Read `videos/BRAND.md` first. It holds the five colours, the face, the graphic pack, the voice, Hiba's standing choices and what we may claim. This prompt only adds the story.
</context>

<inputs>
Type: <event | cohort launch | AI tip | challenge | recap | spotlight | send this to her | deadline | quote> (reference/video-types.md).
Style: <showreel | soft | lesson> (reference/styles.md).
Facts from Hiba, word for word: <date, time, place, price, seats, prizes, partners, link, prompt and real answer>. Left out because not given: <...>.
Consent: <the women in the photos agreed | faces skipped | no people shown>.
Assets used: <files in assets/, and what each becomes>. Missing, replaced by: <...>.
Decided: <width>x<height>, 60 fps, <dark|light>, <N> bars at <BPM> BPM, <seconds> s. Music: <title, artist, license | generated with synth.py: key, progression, energy | silent>, in `assets/audio/`. Edit (licensed track): song bars <a-b>, <c-d> (`edit.json`).
</inputs>

<direction>
<The feel in 3 short lines, in the GWAI voice.>
The message, in three statements: <1.> <2.> <3.>
Style defaults (reference/styles.md): <showreel: a lit 3D showpiece per chapter, a cut every 2 beats, slammed capitals, a colour flip per chapter, the HUD | soft: cream paper, soft light, rising lines, one brown moment | lesson: progress dots, the prompt box, numbered steps, the takeaway card>. Always the lockup at the end.
Only the five GWAI colours, GWAI Sans and the graphic pack.
Banned: emojis, em dashes, hearts and sparkles, buzzwords, any fact Hiba did not give, robot and brain imagery, purple AI gradients.
</direction>

<cast>
- The brand element: the wordmark lockup at the end <or the logo file Hiba sent>.
- Pack pieces used: <pills, badges, rule, cards, prompt box, progress dots, soft light>.
- Her assets and what each becomes: <photo -> card, screenshot -> zoomed card, recording -> clip in a card>.
</cast>

<structure>
<BPM>, 4/4, <N> bars. One beat is <s> s. Something happens on every beat.

Per chapter: what is on screen, the words, the pack piece, the transition out, the sound.
<The chapters of the video type, bar by bar, from reference/video-types.md.>
Last 2 bars (+ hold): the lockup, the CTA pill if there is one, the handle.
</structure>

<build>
1. HyperFrames project in `videos/<film>/` (`scripts/setup.mjs`), set up as BRAND.md "Workspace" says. Kit in `kit/`, runtimes vendored in `vendor/`.
2. Every style is a pure function of t: `setup()` builds and measures once, `draw(t)` sets styles. Anything on its own clock gets a frame-driven twin.
3. `cues.js` is the beat sheet as data; scene code never holds a literal time. `scripts/beat-sheet.mjs` writes the table.
4. Springs are closed form; values that retarget sum one spring per key (`PF.track`).
5. Transitions as chosen; magic moves use `PF.move` + `PF.travel`, measured in `setup()` and checked with `scripts/stills.mjs --debug`.
6. Music: `scripts/synth.py music` (or `beats.py` + `audio-edit.py` for a licensed track); effects with `synth.py sfx` and `scripts/place-audio.mjs`.
7. Gate: `npx hyperframes check`. Final: `scripts/render.mjs` (240 fps master, motion blur), then `scripts/verify.py` (duration, colors, tags, loudness, probes). Report file sizes.
</build>

<gotchas>
No closing script tag in any script or comment. Shown means visibility: inherit. Measure after fonts. Never put will-change on anything the camera scales. Text never travels across text. Keep a slot for every word before it lands. A texture under words stays thin there; behind UI it stays calm. If the film loops, the last frame equals frame 0. Draw dashes as SVG strokes. Judge the encoded file, and decode its pixels.
Soft blue is never text. A prompt types at 1 s per 30 characters or slower. GWAI never promises jobs, income or guaranteed results.
</gotchas>

<start>
Read `videos/BRAND.md`. Before any scene code, show the beat sheet on the grid and three style frames: the hook, one middle scene, the ending. Wait for OK.
</start>
