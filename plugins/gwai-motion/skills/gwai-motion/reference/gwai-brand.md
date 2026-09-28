# The Girls Who Ai brand, for video

Girls Who Ai is a community teaching women to build with AI: workshops, cohorts, hackathons and challenges, in London and online. The films speak to women who want to stop talking about AI and start building with it.

Sources: the GWAI newsletter and email copy skills (palette, type, voice, drawn from emails GWAI actually sent in August and September 2026). When Hiba says something different, she wins: write it into `videos/BRAND.md`.

## Colour

| Name | Hex | In films |
|---|---|---|
| Brown | `#442a1f` | the wordmark, headlines and body text on light scenes, badges, filled pills, dark scenes |
| Soft blue | `#bfd9e3` | bands, rules, card borders, soft light, the one glow in 3D, light scenes |
| Cream | `#fffde7` | paper (the default background of soft and lesson films), text on brown |
| White | `#ffffff` | cards and the prompt box |
| Light grey | `#f7f7f7` | a quiet background only |

`PF.gwai.C` holds them. Nothing else, ever: no pink, red, green, purple, neon, no rainbow "AI" gradient. A shadow is brown at 10 to 14% opacity. A scrim is the scene colour. In 3D, ramps run inside the palette (`PF.three.ramp([C.brown, C.blue, C.cream])`).

Contrast pairs that pass: brown on cream, brown on white, brown on soft blue, cream on brown. Pairs that fail: soft blue on cream, soft blue on white, grey on anything. Soft blue is never text.

## Type

- The brand face is Helvetica: bold (700) for headlines and labels, light (300) for body.
- Films use `"GWAI Sans"`: Inter (OFL), vendored by `setup.mjs` into `assets/fonts/gwai-sans.woff2`, so every render matches. If Hiba provides licensed Helvetica files, drop them in `assets/fonts/` and point the `@font-face` at them.
- No serif, no script, no display fonts, no monospace (the showreel HUD uses the brand face in tracked capitals).
- Labels, pills, section heads and card titles are CAPITALS, tracked 0.18 to 0.32 em. Lines under them are sentence case.

## The graphic pack (`kit/gwai.js`)

These are the brand's own shapes, taken from its emails and posts. Use them instead of inventing decoration.

| Piece | Look | Kit | Use for |
|---|---|---|---|
| Pill | outlined, fully rounded, capitals inside; filled brown with cream text for a call to action | `G.pill` | what it is ("FREE WORKSHOP"), where ("LONDON"), when ("SEPT 12"), the CTA |
| Badge | a brown circle with a cream number | `G.badge`, `G.card({ n })` | steps, numbered lists, "3 things" |
| Rule | a short soft blue line, rounded | `G.rule` | under a headline, between two ideas |
| Tracked line | spaced capitals landing word by word | `G.tracked` | BUILD. CREATE. CONNECT., eyebrows |
| Card | white, 2 px soft blue border, 28 px radius, soft brown shadow | `G.card` | one idea, one takeaway, one offer |
| Prompt box | a white field with the tool's name above, a brown round send button, a cream answer card | `G.prompt` | every AI lesson or tip |
| Progress | dots along the top, the current one brown, "STEP 2 OF 3" | `G.progress` | lessons (in place of the showreel HUD) |
| Soft light | big blurred discs in soft blue and white drifting slowly | `G.float` | behind soft and lesson scenes |
| Lockup | "Girls Who Ai" wordmark, the rule, BUILD. CREATE. CONNECT., optional CTA pill and handle | `G.lockup` | the ending of every film |

The wordmark is set in type ("Girls Who Ai", with a lower case i) until Hiba sends a logo file. If she sends one (SVG best, transparent PNG fine), use the file in the lockup and never redraw it.

## Voice on screen

A woman who builds, talking to women who want to build. Warm, direct, a little bold, never cute. Not a brand, not a coach, not a LinkedIn post.

- **Paired fragments with a number or a size.** The signature move, perfect for slams and headlines: "50 women. One challenge." / "100 DAYS. 100 BUILDS." / "A small room. One clear roadmap." / "Two hours. One working product."
- **Her real week.** Name what AI takes off her plate: "the emails, decks and reports that fill your week", "minutes, not afternoons".
- **Build, not talk.** "Stop talking about AI. Build with it." Once per film at most.
- **Reassurance in capitals.** One short all-caps line that removes the fear: "NO CODE. NO EXPERIENCE. JUST A LAPTOP."
- **Honest scarcity.** Only numbers Hiba gave: "Only 50 places." Never a fake countdown.
- **Send this to her.** Recruitment films end with a line that makes her think of a friend: "Send this to her." / "Tag the friend who keeps saying "I have an idea"."
- **Proof by names and numbers.** "40+ women built at our first hackathon." Tools named exactly: Claude, ChatGPT, Lovable, Genspark, Pomelli, Canva.

Rules: no emojis, no em dashes, no hearts or sparkles, no "delve", "leverage", "foster", "showcase", "unlock", "game-changer", "journey". "Do not" reads calmer than "don't" in reassurance lines. Women are the subject of the sentences. Straight double quotes.

## What films never do

- Invent a date, price, seat count, prize, partner, quote or tool answer.
- Show a woman's face without her consent, or change how she looks.
- Use a colour off the palette, a stock "robot" or "brain" image, glowing circuit boards, or a purple AI gradient.
- Promise an outcome ("get hired", "make money with AI") GWAI has not stated.
- Mix the two speakers: "we" (the brand) and "I" (Nasima, first person, only for her personal follow-ups).
