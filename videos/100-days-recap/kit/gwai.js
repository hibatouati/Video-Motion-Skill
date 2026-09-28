/*
 * gwai.js: the Girls Who Ai graphic pack, as frame-driven pieces.
 * Load after film.js, motion.js, draw.js and fx.js.
 *
 * Everything the brand already uses in its emails and posts, rebuilt for
 * video: the outlined pill, the numbered brown badge, the short soft blue
 * rule, the wordmark lockup with "BUILD. CREATE. CONNECT.", the white card
 * with a soft blue border, and the AI prompt box (a prompt typing, a send
 * press, an answer arriving) that most lessons need.
 *
 * Each builder makes its DOM once (call it in setup()) and returns
 * { el, draw(t) }. Call draw(t) every frame. Nothing here runs its own clock.
 *
 *   const G = PF.gwai;
 *   const pill = G.pill($("#words"), "FREE WORKSHOP", { x: 540, y: 520, at: b(2), out: b(4) });
 *   ...in draw(t): pill.draw(t);
 */
(function () {
  const PF = window.PF;
  const G = (PF.gwai = {});

  /* The palette. Only these five, nothing else (source: the GWAI newsletter skill). */
  G.C = {
    brown: "#442a1f", // wordmark, headings, body text, badges, buttons, dark scenes
    blue: "#bfd9e3", // bands, borders, rules, soft scenes
    cream: "#fffde7", // paper, text on brown
    white: "#ffffff", // cards
    grey: "#f7f7f7", // quiet backgrounds only
  };
  /* Helvetica is the brand face. The film ships Inter (vendored by setup.mjs) as the
     stand-in so every machine renders the same pixels; swap in licensed Helvetica
     files under assets/fonts/ if you have them. */
  G.FONT = '"GWAI Sans", Helvetica, Arial, sans-serif';
  G.TAGLINE = "BUILD. CREATE. CONNECT.";
  G.WORDMARK = "Girls Who Ai";

  /* The readable ink on a palette colour: cream on brown, brown on everything else. */
  G.on = (hex) => (String(hex).toLowerCase() === G.C.brown ? G.C.cream : G.C.brown);

  /* The house curve: soft in, no overshoot (the brand is warm, not bouncy). */
  G.ease = PF.bezier(0.22, 1, 0.36, 1);
  G.easeOut = PF.bezier(0.55, 0, 0.75, 0.2);

  const div = (parent, css, text) => {
    const d = document.createElement("div");
    d.style.cssText = css;
    if (text != null) d.textContent = text;
    parent.appendChild(d);
    return d;
  };
  const svgNS = "http://www.w3.org/2000/svg";

  /** 0..1 in, then 1..0 out, on the house curves. */
  G.life = (t, at, out, { enter = 0.45, leave = 0.3 } = {}) => {
    const a = G.ease(PF.progress(t, at, enter));
    const b = out == null ? 0 : G.easeOut(PF.progress(t, out - leave, leave));
    return a * (1 - b);
  };

  /**
   * The outlined pill ("FREE WORKSHOP", "LONDON", "SEPT 12"). The border draws
   * itself, then the label rises in. filled: brown with cream text (a CTA).
   */
  G.pill = function (parent, text, { x, y, size = 34, color = G.C.brown, fill = null, ink, at, out, track = 0.18, stroke = 3 } = {}) {
    const box = div(parent, `position:absolute;left:${x}px;top:${y}px;transform:translate(-50%,-50%);visibility:hidden;white-space:nowrap`);
    const label = div(box, `position:relative;padding:${size * 0.5}px ${size * 1.05}px;font:700 ${size}px/1 ${G.FONT};letter-spacing:${track}em;text-transform:uppercase;color:${ink || (fill ? G.on(fill) : color)}`, text);
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("style", "position:absolute;left:0;top:0;width:100%;height:100%;overflow:visible");
    const bg = document.createElementNS(svgNS, "rect");
    const rim = document.createElementNS(svgNS, "rect");
    svg.appendChild(bg);
    svg.appendChild(rim);
    box.insertBefore(svg, label);
    let drawRim;
    const api = {
      el: box,
      layout() {
        const w = label.offsetWidth, h = label.offsetHeight;
        for (const r of [bg, rim]) {
          r.setAttribute("x", stroke / 2); r.setAttribute("y", stroke / 2);
          r.setAttribute("width", w - stroke); r.setAttribute("height", h - stroke);
          r.setAttribute("rx", (h - stroke) / 2);
        }
        bg.setAttribute("fill", fill || "none");
        rim.setAttribute("fill", "none");
        rim.setAttribute("stroke", fill || color);
        rim.setAttribute("stroke-width", stroke);
        drawRim = PF.drawable(rim);
      },
      draw(t) {
        const live = t >= at && (out == null || t < out);
        PF.show(box, live);
        if (!live) return;
        const v = G.life(t, at, out);
        drawRim(G.ease(PF.progress(t, at, 0.5)));
        const u = G.ease(PF.progress(t, at + 0.12, 0.4));
        PF.css(bg, { opacity: (fill ? u : 0).toFixed(3) });
        PF.css(label, { opacity: u.toFixed(3), transform: `translateY(${((1 - u) * 14).toFixed(2)}px)` });
        PF.css(box, { opacity: v.toFixed(3) });
      },
    };
    api.layout();
    return api;
  };

  /** The numbered brown circle (step 1, 2, 3). Pops in with a soft scale, no bounce. */
  G.badge = function (parent, n, { x, y, d = 120, fill = G.C.brown, ink = G.C.cream, at, out } = {}) {
    const el = div(parent, `position:absolute;left:${x - d / 2}px;top:${y - d / 2}px;width:${d}px;height:${d}px;border-radius:50%;background:${fill};color:${ink};display:grid;place-items:center;font:700 ${d * 0.46}px/1 ${G.FONT};visibility:hidden`, String(n));
    return {
      el,
      draw(t) {
        const live = t >= at && (out == null || t < out);
        PF.show(el, live);
        if (!live) return;
        const u = G.ease(PF.progress(t, at, 0.4));
        const v = G.life(t, at, out);
        PF.css(el, { opacity: v.toFixed(3), transform: `scale(${(0.6 + 0.4 * u).toFixed(4)})` });
      },
    };
  };

  /** The short soft blue rule that separates everything in GWAI layouts. Grows from its centre. */
  G.rule = function (parent, { x, y, w = 88, h = 6, color = G.C.blue, at, out } = {}) {
    const el = div(parent, `position:absolute;left:${x - w / 2}px;top:${y - h / 2}px;width:${w}px;height:${h}px;border-radius:${h}px;background:${color};visibility:hidden`);
    return {
      el,
      draw(t) {
        const live = t >= at && (out == null || t < out);
        PF.show(el, live);
        if (!live) return;
        const u = G.ease(PF.progress(t, at, 0.5));
        PF.css(el, { transform: `scaleX(${u.toFixed(4)})`, opacity: G.life(t, at, out).toFixed(3) });
      },
    };
  };

  /**
   * Letterspaced capitals that land word by word ("BUILD. CREATE. CONNECT.").
   * The tracking closes a little as each word lands: calm, not a slam.
   */
  G.tracked = function (parent, text, { x, y, size = 30, color = G.C.brown, at, every = 0.25, out, track = 0.32, weight = 700 } = {}) {
    const row = div(parent, `position:absolute;left:0;right:0;top:${y}px;transform:translateY(-50%);display:flex;justify-content:center;gap:0.6em;font:${weight} ${size}px/1 ${G.FONT};color:${color};text-transform:uppercase;white-space:nowrap;visibility:hidden`);
    if (x != null) PF.css(row, { left: `${x}px`, right: "auto", transform: "translate(-50%,-50%)" });
    const words = text.split(" ").map((w) => div(row, `display:inline-block;letter-spacing:${track}em`, w));
    return {
      el: row,
      draw(t) {
        const live = t >= at && (out == null || t < out);
        PF.show(row, live);
        if (!live) return;
        PF.css(row, { opacity: G.life(t, at, out).toFixed(3) });
        words.forEach((w, i) => {
          const u = G.ease(PF.progress(t, at + i * every, 0.45));
          PF.css(w, { opacity: u.toFixed(3), letterSpacing: `${(track + (1 - u) * 0.25).toFixed(3)}em`, transform: `translateY(${((1 - u) * 10).toFixed(2)}px)` });
        });
      },
    };
  };

  /**
   * The ending: the wordmark rises, the rule grows under it, the tagline lands
   * word by word. Every GWAI film ends here (hold it 2 s or more).
   * cta: an optional filled pill under the tagline ("LINK IN BIO", "APPLY NOW").
   */
  G.lockup = function (parent, { y, size = 128, color = G.C.brown, rule = G.C.blue, at, cta, handle } = {}) {
    const W = parent.offsetWidth || 1080;
    const mark = div(parent, `position:absolute;left:0;right:0;top:${y}px;transform:translateY(-50%);text-align:center;font:700 ${size}px/1 ${G.FONT};letter-spacing:-0.02em;color:${color};white-space:nowrap;visibility:hidden`, G.WORDMARK);
    const line = G.rule(parent, { x: W / 2, y: y + size * 0.8, w: size * 0.9, h: Math.max(5, size * 0.05), color: rule, at: at + 0.35 });
    const tag = G.tracked(parent, G.TAGLINE, { y: y + size * 1.25, size: size * 0.24, color, at: at + 0.6, every: 0.28 });
    const pill = cta ? G.pill(parent, cta, { x: W / 2, y: y + size * 2.05, size: size * 0.26, fill: color, at: at + 1.5 }) : null;
    const hand = handle ? G.tracked(parent, handle, { y: y + size * (cta ? 2.75 : 2.0), size: size * 0.2, color, at: at + 1.7, track: 0.12, weight: 400 }) : null;
    return {
      el: mark,
      draw(t) {
        const live = t >= at;
        PF.show(mark, live);
        if (live) {
          const u = G.ease(PF.progress(t, at, 0.6));
          PF.css(mark, { opacity: u.toFixed(3), transform: `translateY(calc(-50% + ${((1 - u) * 40).toFixed(2)}px))` });
        }
        line.draw(t);
        tag.draw(t);
        if (pill) pill.draw(t);
        if (hand) hand.draw(t);
      },
    };
  };

  /**
   * The white card with a 1px soft blue border and a soft shadow (the email
   * block, as a video card). { label, title, body } are optional lines:
   * label in tracked capitals, title bold capitals, body light sentence case.
   * n: an optional numbered badge on the card's top-left.
   */
  G.card = function (parent, { x, y, w = 860, label, title, body, n, at, out, pad = 56, size = 1 } = {}) {
    const card = div(parent, `position:absolute;left:${x - w / 2}px;top:${y}px;width:${w}px;transform:translateY(-50%);background:${G.C.white};border:2px solid ${G.C.blue};border-radius:28px;box-shadow:0 30px 60px rgba(68,42,31,.12);padding:${pad}px;color:${G.C.brown};font-family:${G.FONT};visibility:hidden`);
    const lines = [];
    if (n != null) {
      const b = div(card, `width:${84 * size}px;height:${84 * size}px;border-radius:50%;background:${G.C.brown};color:${G.C.cream};display:grid;place-items:center;font:700 ${40 * size}px/1 ${G.FONT};margin-bottom:${28 * size}px`, String(n));
      lines.push(b);
    }
    if (label) lines.push(div(card, `font:700 ${26 * size}px/1.2 ${G.FONT};letter-spacing:0.22em;text-transform:uppercase;opacity:.8;margin-bottom:${18 * size}px`, label));
    if (title) lines.push(div(card, `font:700 ${60 * size}px/1.08 ${G.FONT};text-transform:uppercase;letter-spacing:-0.01em;margin-bottom:${body ? 22 * size : 0}px`, title));
    if (body) lines.push(div(card, `font:300 ${42 * size}px/1.3 ${G.FONT}`, body));
    return {
      el: card,
      draw(t) {
        const live = t >= at && (out == null || t < out);
        PF.show(card, live);
        if (!live) return;
        const u = G.ease(PF.progress(t, at, 0.55));
        PF.css(card, { opacity: G.life(t, at, out).toFixed(3), transform: `translateY(calc(-50% + ${((1 - u) * 60).toFixed(2)}px)) scale(${(0.96 + 0.04 * u).toFixed(4)})` });
        lines.forEach((l, i) => {
          const v = G.ease(PF.progress(t, at + 0.15 + i * 0.12, 0.4));
          PF.css(l, { opacity: v.toFixed(3), transform: `translateY(${((1 - v) * 16).toFixed(2)}px)` });
        });
      },
    };
  };

  /**
   * An AI chat moment, the core picture of a lesson: a prompt types itself
   * into the box, the send button presses, the answer arrives (shimmering
   * lines first, then the words). All the text comes from the user or the
   * lesson; never invent what a tool answered.
   *
   *   const chat = G.prompt($("#words"), { x: 540, y: 980, w: 900,
   *     tool: "Claude", prompt: "Turn my notes into a 5 slide outline",
   *     reply: ["1. The problem", "2. Why now", "3. Our fix"],
   *     at: b(3), typeFor: b.bar, replyAt: b(5) });
   */
  G.prompt = function (parent, { x, y, w = 900, tool = "", prompt, reply = [], at, typeFor = 2, replyAt, out, size = 40 } = {}) {
    const box = div(parent, `position:absolute;left:${x - w / 2}px;top:${y}px;width:${w}px;transform:translateY(-50%);font-family:${G.FONT};color:${G.C.brown};visibility:hidden`);
    const head = tool ? div(box, `font:700 ${size * 0.6}px/1 ${G.FONT};letter-spacing:0.22em;text-transform:uppercase;margin:0 0 ${size * 0.5}px ${size * 0.2}px;opacity:.75`, tool) : null;
    const field = div(box, `position:relative;background:${G.C.white};border:2px solid ${G.C.blue};border-radius:${size * 0.8}px;padding:${size * 0.7}px ${size * 2.6}px ${size * 0.7}px ${size * 0.8}px;min-height:${size * 2.6}px;box-shadow:0 24px 50px rgba(68,42,31,.10)`);
    const typed = div(field, `font:400 ${size}px/1.3 ${G.FONT};white-space:pre-wrap`);
    const send = div(field, `position:absolute;right:${size * 0.5}px;bottom:${size * 0.5}px;width:${size * 1.6}px;height:${size * 1.6}px;border-radius:50%;background:${G.C.brown};display:grid;place-items:center`);
    send.innerHTML = `<svg viewBox="0 0 24 24" width="${size * 0.8}" height="${size * 0.8}"><path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="${G.C.cream}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    const answer = div(box, `margin-top:${size * 0.7}px;background:${G.C.cream};border-radius:${size * 0.8}px;padding:${size * 0.7}px ${size * 0.8}px;border:2px solid ${G.C.blue}`);
    const rows = reply.map((r) => {
      const row = div(answer, `position:relative;font:400 ${size * 0.9}px/1.35 ${G.FONT};margin:${size * 0.12}px 0`);
      const txt = div(row, "", r);
      const bar = div(row, `position:absolute;left:0;top:18%;height:64%;border-radius:${size}px;background:${G.C.blue}`);
      return { txt, bar };
    });
    const sendAt = at + typeFor;
    const replyStart = replyAt == null ? sendAt + 0.6 : replyAt;
    return {
      el: box,
      field,
      draw(t) {
        const live = t >= at && (out == null || t < out);
        PF.show(box, live);
        if (!live) return;
        const v = G.life(t, at, out);
        const u = G.ease(PF.progress(t, at, 0.5));
        PF.css(box, { opacity: v.toFixed(3), transform: `translateY(calc(-50% + ${((1 - u) * 40).toFixed(2)}px))` });
        if (head) PF.css(head, { opacity: (0.75 * u).toFixed(3) });
        const cps = prompt.length / Math.max(0.3, typeFor - 0.25);
        PF.typewriter(typed, prompt, t, at + 0.2, { cps, beat: 0.5, caretColor: G.C.brown, caret: t < sendAt + 0.1 });
        // send: a short press, then it stays calm
        const press = PF.progress(t, sendAt, 0.18);
        const k = press > 0 && press < 1 ? 1 - 0.12 * Math.sin(Math.PI * press) : 1;
        PF.css(send, { transform: `scale(${k.toFixed(4)})` });
        // answer: shimmer bars, then text, one row every 0.3 s
        const a = G.ease(PF.progress(t, replyStart, 0.4));
        PF.show(answer, a > 0);
        PF.css(answer, { opacity: a.toFixed(3), transform: `translateY(${((1 - a) * 24).toFixed(2)}px)` });
        rows.forEach(({ txt, bar }, i) => {
          const s = replyStart + 0.25 + i * 0.3;
          const shimmer = PF.progress(t, s, 0.25);
          const reveal = G.ease(PF.progress(t, s + 0.25, 0.3));
          PF.css(bar, { width: `${(shimmer * 100 * (1 - reveal)).toFixed(1)}%`, opacity: (0.9 * (1 - reveal)).toFixed(3) });
          PF.css(txt, { opacity: reveal.toFixed(3) });
        });
      },
    };
  };

  /**
   * Lesson progress for the soft and lesson styles (in place of the showreel's
   * viewfinder HUD): n dots along the top, the current step filled brown, a
   * label under them ("STEP 2 OF 3"). steps: [{ at, label }]. Hidden from `out`.
   */
  G.progress = function (parent, steps, { y = 300, gap = 44, d = 18, color = G.C.brown, track = G.C.blue, labelSize = 24, out } = {}) {
    const row = div(parent, `position:absolute;left:0;right:0;top:${y}px;display:flex;justify-content:center;gap:${gap - d}px`);
    const dots = steps.map(() => div(row, `width:${d}px;height:${d}px;border-radius:50%;background:${track}`));
    const label = div(parent, `position:absolute;left:0;right:0;top:${y + d + 18}px;text-align:center;font:700 ${labelSize}px/1 ${G.FONT};letter-spacing:0.24em;text-transform:uppercase;color:${color}`);
    return {
      el: row,
      draw(t) {
        let cur = -1;
        steps.forEach((s, i) => { if (t >= s.at) cur = i; });
        if (out != null && t >= out) cur = -1;
        PF.show(row, cur >= 0);
        PF.show(label, cur >= 0);
        dots.forEach((dot, i) => {
          const u = cur >= i ? G.ease(PF.progress(t, steps[i].at, 0.35)) : 0;
          PF.css(dot, { background: PF.mix(track, color, u), transform: `scale(${(1 + (i === cur ? 0.35 * u : 0)).toFixed(3)})` });
        });
        const text = cur >= 0 ? steps[cur].label || `STEP ${cur + 1} OF ${steps.length}` : "";
        if (label.textContent !== text) label.textContent = text;
        PF.css(label, { opacity: cur >= 0 ? G.ease(PF.progress(t, steps[cur].at, 0.35)).toFixed(3) : 0 });
      },
    };
  };

  /**
   * Soft floating shapes behind a calm scene: blurred discs in blue and cream
   * drifting slowly on fixed sines (seeded, so the same t gives the same frame).
   * Returns draw(t). Mark the layer data-layout-ignore.
   */
  G.float = function (parent, { n = 7, seed = 11, colors = [G.C.blue, G.C.white], min = 180, max = 420, blur = 40, opacity = 0.7 } = {}) {
    const W = parent.offsetWidth || 1080, H = parent.offsetHeight || 1920;
    const r = PF.random(seed);
    const blobs = Array.from({ length: n }, (_, i) => {
      const s = min + r() * (max - min);
      const el = div(parent, `position:absolute;left:0;top:0;width:${s}px;height:${s}px;border-radius:50%;background:${colors[i % colors.length]};filter:blur(${blur}px);opacity:${opacity}`);
      return { el, s, x: r() * W, y: r() * H, ax: 30 + r() * 60, ay: 40 + r() * 80, fx: 0.05 + r() * 0.08, fy: 0.04 + r() * 0.07, ph: r() * 6.283 };
    });
    return (t) => blobs.forEach((b) => {
      const x = b.x + b.ax * Math.sin(t * b.fx * 6.283 + b.ph) - b.s / 2;
      const y = b.y + b.ay * Math.cos(t * b.fy * 6.283 + b.ph) - b.s / 2;
      PF.css(b.el, { transform: `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)` });
    });
  };
})();
