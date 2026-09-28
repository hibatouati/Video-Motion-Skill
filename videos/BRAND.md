# Girls Who Ai brand profile for video

The brand, Hiba's standing choices and the films made so far. Every new film reads this first and only asks what is new. Each film prompt points here and only adds its story.
Sources: the GWAI newsletter and email copy skills (palette, type, voice), `reference/gwai-brand.md` in the gwai-motion skill, and Hiba's notes below. When Hiba says something different, update this file: it wins.

## Standing choices (reuse for every film unless she says otherwise)
- Where films play: Instagram Reels and TikTok, 9:16, 1080x1920. Usual length: 15 to 20 s (lessons up to 45 s). Language: English.
- Audience: women who want to stop talking about AI and build with it (founders, marketers, creatives, students), beginners welcome.
- Style per type: showreel for events, launches and challenges; soft for recaps, spotlights, quotes and "send this to her"; lesson for tips and tutorials (`reference/styles.md`).
- Music: generated trap bed for showreels (`synth.py --style trap`, 140 BPM), generated lo-fi bed for soft and lesson (`--style lofi`, 88 BPM, F major, "IV iii ii I").
- Ending: the lockup (Girls Who Ai, the rule, BUILD. CREATE. CONNECT.) + a CTA pill only when there is one ("APPLY NOW", "LINK IN BIO", "SAVE THIS") + girlswhoai.club (Hiba, 2026-09-28).
- Notes from past films that apply to all: <none yet>.

## Chosen by Claude (Hiba can overrule)
- Font stand-in: Inter (OFL) as "GWAI Sans" in place of Helvetica, so renders match on every machine. <date>
- Wordmark set in type until a logo file arrives. <date>

## Assumed, not asked
- <choices made because she said "just go">

## Films
| Film | Type | Style | Date | Hiba's reaction, what changed |
|---|---|---|---|---|
| 100-days-recap | Event recap | Soft | 2026-09-28 | first film; waiting on her notes |

## Assets on file (reusable across films)
| Asset | Path | Notes (size, rights, consent) |
|---|---|---|
| Logo | | none yet: wordmark set in type (the creatives use the same typeset look) |
| Lovable Certified Expert badge | 100-days-recap/assets/images/lovable-badge.png | official, from Lovable; GWAI is certified (Website builder 2026) |
| 100 day challenge creatives, days 1 to 5 | 100-days-recap/assets/images/ | GWAI's own; do not name builders |
| Event photos | | consent of the women shown |
| Build screenshots | | whose build, permission to show |
| Music, voiceover | | licence |

## Colour (only these five)
| Token | Value | Use |
|---|---|---|
| brown | `#442a1f` | wordmark, headlines and text on light scenes, badges, filled pills, dark scenes |
| soft blue | `#bfd9e3` | bands, rules, borders, soft light, the one glow; never text |
| cream | `#fffde7` | paper, text on brown |
| white | `#ffffff` | cards, the prompt box |
| light grey | `#f7f7f7` | quiet backgrounds only |

Hex only for anything that animates (`PF.mix`). Shadows are brown at 10 to 14%.

## Type
- Brand face: Helvetica, bold 700 for headlines and labels, light 300 for body. In films: "GWAI Sans" (`assets/fonts/gwai-sans.woff2`).
- Capitals for labels, pills, card titles and section heads, tracked 0.18 to 0.32 em. Sentence case for lines.
- Sizes at 1080x1920: showreel slams 190 to 280 px; soft lines 96 to 140 px; captions 48 to 56 px; body and prompt text 40 px and up; labels 24 to 34 px.

## Graphic pack (`kit/gwai.js`)
Pill, badge, rule, tracked line, card, prompt box, progress dots, soft light, lockup. See `reference/gwai-brand.md`.

## Voice (on screen)
- Paired fragments with a number: "50 women. One challenge."
- Her real week, minutes not afternoons. Build, not talk (once per film).
- Reassurance in capitals: "NO CODE. NO EXPERIENCE. JUST A LAPTOP."
- Honest scarcity only with Hiba's numbers. "Send this to her."
- No emojis, no em dashes, no hearts or sparkles, no buzzwords. Tools named exactly.

## Brand moment: what bends, what never does
- Bends for video: pace, light, depth, 3D (showreel), camera, transitions, grain, motion blur.
- Never bends: the five colours, the wordmark and logo files, the face, the voice, real facts, consent.

## Claims
- GWAI does: workshops, cohorts, hackathons and challenges that teach women to build with AI tools, in London and online.
- GWAI never promises: jobs, income, guaranteed results.
- Approved lines: "BUILD. CREATE. CONNECT.", "100 days of vibe coding.", "JOIN THE GWAI HUB".
- GWAI is a Lovable Certified Expert (official badge, Website builder 2026).
- Words to avoid: delve, leverage, foster, showcase, unlock, game-changer, journey.

## Workspace
- Films live in `videos/<film>/`; this file is `videos/BRAND.md`.
- Set up with `node <skill>/scripts/setup.mjs videos/<film> --style <showreel|soft|lesson>`.
