"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { mediaManifest } from "@/data/media-manifest";
import { places, stories, type Story } from "@/data/stories";
import DocumentaryVideo from "./DocumentaryVideo";
import MediaFigure from "./MediaFigure";
import StoryDialog from "./StoryDialog";
import ThenNow from "./ThenNow";

const storyById = Object.fromEntries(stories.map((story) => [story.id, story])) as Record<string, Story>;

export default function Experience() {
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const reduceMotion = useReducedMotion();

  function openStory(story: Story) {
    setActiveStory(story);
  }

  function toggleNarration(story: Story) {
    if (!("speechSynthesis" in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(`${story.title}. ${story.subtitle}. ${story.body}`);
    utterance.lang = "en";
    utterance.rate = 0.9;
    utterance.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  }

  return <>
    <a className="skip-link" href="#stories">Skip to cultural stories</a>
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Tunisia — Beyond the Frame, home"><span lang="ar">تونس</span><i /><b>Beyond the Frame</b></a>
      <button className="menu-button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}<i aria-hidden="true" /></button>
      <nav id="site-nav" className={menuOpen ? "site-nav open" : "site-nav"} aria-label="Primary navigation">
        <a href="#artwork" onClick={() => setMenuOpen(false)}>The artwork</a><a href="#stories" onClick={() => setMenuOpen(false)}>Stories</a><a href="#voices" onClick={() => setMenuOpen(false)}>Listen</a><a href="#atlas" onClick={() => setMenuOpen(false)}>Atlas</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a>
      </nav>
    </header>

    <main>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <motion.div className="hero-copy" initial={reduceMotion ? false : { y: 26 }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <p className="hero-context"><span>A cultural exhibition</span><span>ENSIT · Tunisia · 2026</span></p>
          <h1 id="hero-title"><span>Tunisia</span><em>Beyond the Frame</em></h1>
          <p className="hero-tagline">One country. A thousand stories.</p>
          <p className="hero-intro">From the ancient shores of Carthage to the villages of the Sahara, every corner of Tunisia carries a story. Step through the artwork and meet the people, places and living traditions that shape our home.</p>
          <div className="hero-actions"><a href="#stories" className="solid-action">Explore the stories</a><a href="#artwork" className="line-action">Enter the artwork</a></div>
        </motion.div>
        <motion.div className="hero-visual" initial={reduceMotion ? false : { scale: 0.96, rotate: 0 }} animate={{ scale: 1, rotate: 1.2 }} transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
          <div className="photo-slice slice-one"><Image src="/images/stories/harissa-peppers.webp" alt="" fill sizes="18vw" /></div>
          <div className="photo-slice slice-two"><Image src="/images/stories/chenini.webp" alt="" fill sizes="22vw" /></div>
          <div className="poster-frame"><Image src="/poster/tunisia-poster.jpg" alt="An illustrated cultural poster combining Hannibal, Carthage, Kairouan’s mosque, El Jem, Sidi Bou Said, traditional dress, couscous, pottery, carpets, jasmine, olives and the southern desert." fill priority sizes="(max-width: 800px) 84vw, 37vw" /></div>
          <p><span>The cultural poster</span><span>AI-assisted artwork · The Architects</span></p>
        </motion.div>
        <a className="scroll-prompt" href="#threshold"><span>Cross the frame</span><i aria-hidden="true" /></a>
      </section>

      <section className="threshold" id="threshold" aria-labelledby="threshold-title">
        <div className="threshold-copy"><p>See · Explore · Experience</p><h2 id="threshold-title">The artwork is the invitation.<br/><em>The people are the story.</em></h2></div>
        <div className="threshold-images">
          <MediaFigure image={storyById.medina.hero} className="threshold-a" sizes="(max-width: 800px) 88vw, 31vw" />
          <MediaFigure image={storyById.craft.hero} className="threshold-b" sizes="(max-width: 800px) 70vw, 24vw" />
          <MediaFigure image={storyById.olives.hero} className="threshold-c" sizes="(max-width: 800px) 76vw, 28vw" />
        </div>
        <p className="threshold-note">Real places. Real hands. Real histories.</p>
      </section>

      <section className="artwork-section" id="artwork" aria-labelledby="artwork-title">
        <header className="section-heading light-heading"><div><p>Discover the artwork</p><span>11 points of entry</span></div><h2 id="artwork-title">Every detail<br/>opens a door.</h2><p>Select a marker on the poster or use the photographic index. Both lead to the same complete stories.</p></header>
        <div className="poster-explorer">
          <div className="explorer-canvas" role="group" aria-label="Interactive cultural poster">
            <Image src="/poster/tunisia-poster.jpg" alt="" fill sizes="(max-width: 800px) 92vw, 54vw" />
            <div className="hotspots">{stories.map((story, index) => <button key={story.id} style={{ left: `${story.hotspot.x}%`, top: `${story.hotspot.y}%` }} onClick={() => openStory(story)} aria-label={`Open story: ${story.title}`}><span>{String(index + 1).padStart(2, "0")}</span></button>)}</div>
          </div>
          <div className="story-index" role="navigation" aria-label="Stories in the poster">{stories.map((story, index) => <button key={story.id} onClick={() => openStory(story)}><span className="index-number">{String(index + 1).padStart(2, "0")}</span><span className="index-thumb"><Image src={story.hero.src} alt="" fill sizes="84px" /></span><span><strong>{story.title}</strong><small>{story.chapterTitle} · {story.readingTime}</small></span></button>)}</div>
        </div>
      </section>

      <section className="stories-intro" id="stories" aria-labelledby="stories-title"><p>The stories of Tunisia</p><h2 id="stories-title">A small country<br/><em>with a long memory.</em></h2><div><p>Tunisia has always faced outward—toward Africa, the Mediterranean and the wider world.</p><p>Six chapters follow the traces left in stone, earth, cloth, music and shared meals.</p></div></section>

      <section className="chapter chapter-ancient" aria-labelledby="ancient-title">
        <header className="chapter-title"><span>I</span><div><p>Before the empires</p><h2 id="ancient-title">The sea remembers.</h2></div></header>
        <div className="ancient-lead"><div><p className="large-copy">Carthage was a city of sailors, traders, makers and diplomats long before its ruins became an image.</p><button className="story-button" onClick={() => openStory(storyById.carthage)}>Read the story of Carthage</button></div><p>Slide between a nineteenth-century European engraving and the archaeological landscape today. They are not aligned photographs of the same viewpoint; together they show how every era frames the past differently.</p></div>
        <ThenNow thenImage={storyById.carthage.gallery[0]} nowImage={storyById.carthage.hero} />
        <div className="ancient-pair"><MediaFigure image={storyById["el-jem"].hero} className="eljem-figure" sizes="(max-width: 800px) 100vw, 42vw" /><div className="ancient-side"><p>Roman Africa</p><h3>Stone built to hold a city’s roar.</h3><p>At El Jem, engineering and spectacle still rise above the modern town. At the Bardo, mosaics preserve a different intimacy: fish, boats, food and the rhythms of ordinary life.</p><button className="story-button" onClick={() => openStory(storyById["el-jem"])}>Step inside El Jem</button><MediaFigure image={storyById.carthage.gallery[1]} className="mosaic-figure" sizes="(max-width: 800px) 88vw, 25vw" /></div></div>
      </section>

      <aside className="fact-interlude"><span>Did you know?</span><p>The word <em>Africa</em> may first have named the land around ancient Carthage before it came to name a continent.</p><small>Its exact linguistic origin remains debated by historians.</small></aside>

      <section className="chapter chapter-cities" aria-labelledby="cities-title">
        <header className="chapter-title"><span>II</span><div><p>Cities of memory</p><h2 id="cities-title">Follow the light<br/>through the medina.</h2></div></header>
        <div className="medina-collage">
          <MediaFigure image={storyById.medina.hero} className="medina-main" sizes="(max-width: 800px) 100vw, 53vw" />
          <div className="medina-copy"><p>The Medina of Tunis is not a backdrop. It is a lived city of homes, workshops, mosques, schools and neighbours.</p><button className="story-button" onClick={() => openStory(storyById.medina)}>Walk into the Medina</button></div>
          <MediaFigure image={storyById.medina.gallery[1]} className="medina-maker" sizes="(max-width: 800px) 72vw, 23vw" />
        </div>
        <div className="cities-pair">
          <article><MediaFigure image={storyById.kairouan.hero} sizes="(max-width: 800px) 100vw, 42vw" /><p>Courtyard, column, shade</p><h3>Kairouan</h3><button onClick={() => openStory(storyById.kairouan)}>Enter the Great Mosque story</button></article>
          <article><MediaFigure image={storyById["sidi-bou-said"].hero} sizes="(max-width: 800px) 100vw, 34vw" /><p>Threshold, colour, sea</p><h3>Sidi Bou Said</h3><button onClick={() => openStory(storyById["sidi-bou-said"])}>Read beyond the blue door</button></article>
        </div>
      </section>

      <section className="chapter chapter-land" aria-labelledby="land-title">
        <div className="land-image"><Image src={storyById.south.hero.src} alt={storyById.south.hero.alt} fill sizes="100vw" /><span>{storyById.south.hero.credit}</span></div>
        <div className="land-overlay"><div className="chapter-title"><span>III</span><div><p>The land and its people</p><h2 id="land-title">Built with the climate.</h2></div></div><p>In the south, earth architecture answers heat, distance and movement. In the olive country, cultivation follows a different rhythm across north, Sahel, Sfax and farther south.</p><button className="light-button" onClick={() => openStory(storyById.south)}>Travel south</button></div>
      </section>

      <section className="olive-story" aria-labelledby="olive-title"><div className="olive-copy"><p>Across Tunisia</p><h2 id="olive-title">Under the olive tree</h2><p>The olive is not only Cap Bon. Groves shape the Sahel, the vast agricultural landscape of Sfax, northern hills and southern ground. The harvest is ecology, labour, trade and family memory at once.</p><button className="story-button" onClick={() => openStory(storyById.olives)}>Explore the olive story</button></div><MediaFigure image={storyById.olives.gallery[0]} className="olive-harvest" sizes="(max-width: 800px) 100vw, 40vw" /><MediaFigure image={storyById.olives.gallery[1]} className="olive-landscape" sizes="(max-width: 800px) 88vw, 28vw" /></section>

      <section className="chapter chapter-hands" aria-labelledby="hands-title">
        <header className="chapter-title"><span>IV</span><div><p>Made by hand</p><h2 id="hands-title">Not just the object.<br/><em>The person who makes it.</em></h2></div></header>
        <div className="hands-grid"><MediaFigure image={storyById.craft.hero} className="hands-large" sizes="(max-width: 800px) 100vw, 56vw" /><div className="hands-copy"><p className="large-copy">Technique lives in posture, pressure and repetition—the movements one pair of hands teaches another.</p><button className="story-button" onClick={() => openStory(storyById.craft)}>Meet the hands that remember</button></div><MediaFigure image={storyById.craft.gallery[0]} className="hands-small" sizes="(max-width: 800px) 82vw, 28vw" /></div>
        {storyById.craft.video && <div className="feature-film"><header><p>Documentary room</p><h3>Earth, fire, memory</h3><span>Women potters of Sejnane · 1:32</span></header><DocumentaryVideo video={storyById.craft.video} poster={storyById.craft.gallery[0].src} /></div>}
      </section>

      <section className="chapter chapter-clothing" aria-labelledby="clothing-title">
        <header className="chapter-title"><span>IV—B</span><div><p>Worn histories</p><h2 id="clothing-title">A country cannot be<br/>dressed in one costume.</h2></div></header>
        <div className="clothing-spread"><MediaFigure image={storyById.clothing.hero} className="dress-detail" sizes="(max-width: 800px) 100vw, 48vw" /><div className="clothing-copy"><p>Jebba, sefsari, barnous, chechia, wedding dress: each carries a region, an occasion and a chain of skilled labour.</p><button className="story-button" onClick={() => openStory(storyById.clothing)}>Explore regional dress</button></div><MediaFigure image={storyById.clothing.gallery[0]} className="dress-people" sizes="(max-width: 800px) 92vw, 30vw" /><MediaFigure image={storyById.clothing.gallery[1]} className="dress-craft" sizes="(max-width: 800px) 82vw, 25vw" /></div>
      </section>

      <section className="chapter chapter-table" aria-labelledby="table-title"><div className="table-image"><Image src={storyById.table.hero.src} alt={storyById.table.hero.alt} fill sizes="(max-width: 800px) 100vw, 55vw" /><span>{storyById.table.hero.credit}</span></div><div className="table-copy"><div className="chapter-title"><span>V</span><div><p>At the Tunisian table</p><h2 id="table-title">Food is<br/>a gathering.</h2></div></div><p>Before the plate comes work: peppers drying in the sun, grain rolled by hand, broth steaming, oil poured, a table made ready for others.</p><blockquote>“It is prepared together, offered and remembered.”</blockquote><button className="light-button" onClick={() => openStory(storyById.table)}>Sit at the table</button></div></section>

      <section className="chapter chapter-living" aria-labelledby="living-title"><header className="chapter-title"><span>VI</span><div><p>A culture still alive</p><h2 id="living-title">Heritage is not<br/>a display case.</h2></div></header><div className="living-grid"><MediaFigure image={storyById.living.hero} sizes="(max-width: 800px) 100vw, 40vw" /><div><p className="tifinagh" lang="zgh">ⵜⵓⵏⵙ</p><p>Languages, Malouf, festivals, contemporary design and renewed craft practices keep the inheritance moving. Young Tunisians do not merely preserve culture. They reinterpret it.</p><button className="story-button" onClick={() => openStory(storyById.living)}>Listen to a living culture</button></div></div>{storyById.living.video && <DocumentaryVideo video={storyById.living.video} poster={storyById.living.hero.src} />}</section>

      <section className="voices" id="voices" aria-labelledby="voices-title"><div><p>Listen to Tunisia</p><h2 id="voices-title">Let the story<br/>meet your ears.</h2></div><div className="voice-card"><button onClick={() => toggleNarration(storyById.medina)} aria-label={speaking ? "Stop browser narration" : "Play browser narration of the Medina story"}><span aria-hidden="true">{speaking ? "Ⅱ" : "▶"}</span></button><div><strong>The medina is alive</strong><span>English · Synthesized browser voice · Optional</span></div><p>Follow the story while your device reads. This is clearly labeled synthesized speech—not a human recording.</p></div></section>

      <section className="atlas" id="atlas" aria-labelledby="atlas-title"><div className="atlas-copy"><p>Cultural atlas</p><h2 id="atlas-title">Every story<br/>has a place.</h2><p>Geography is not an index. It explains why architecture, materials, food and daily life differ across the country.</p><div className="place-list">{places.map(([name,,,storyId]) => <button key={name} onClick={() => openStory(storyById[storyId])}>{name}</button>)}</div></div><div className="map" role="img" aria-label="A geographic guide locating twelve featured Tunisian places; equivalent place buttons appear alongside."><svg viewBox="0 0 400 700" aria-hidden="true"><path d="M211 18C179 56 159 85 137 121c-18 30-31 76-12 102 20 28 30 54 17 89-18 49-42 79-53 129-9 43 8 78 33 109 21 26 35 65 60 89 18 18 46 44 72 41 24-3 22-39 22-61 0-39 22-63 44-92 17-23 13-48 4-74-13-38 7-73 10-110 3-39-32-59-47-89-12-24-2-56 4-82 7-30-12-49-31-69-16-17-22-48-49-65Z" /></svg>{places.map(([name,x,y]) => <span className="map-place" style={{ left: `${x}%`, top: `${y}%` }} key={name}><i />{name}</span>)}</div></section>

      <section className="closing" aria-labelledby="closing-title"><Image src="/images/stories/olive-cleaning.webp" alt="A Tunisian woman sorting fresh olives after harvest" fill sizes="100vw" /><div className="closing-shade" /><div className="closing-copy"><p>A country is more than its borders.</p><blockquote>It lives in the hands that shape its crafts, in the stories passed between generations, in the places that remember, and in the people who carry those memories forward.</blockquote><h2 id="closing-title">This is Tunisia.<br/><em>And its story continues.</em></h2></div></section>
    </main>

    <footer id="about"><div className="footer-lead"><p>Thank you for discovering our home.</p><h2>Created with pride by<br/><em>The Architects</em></h2></div><div className="footer-about"><p>This independent cultural experience accompanies a poster created by a student team from ENSIT, Tunisia, for the GCD4F 2026 Global Finals in Beijing.</p><p>Photography and film are authentic, locally hosted and individually credited. Historical interpretation links to source institutions inside each story.</p></div><details className="credits"><summary>Photography, film and license credits <span>{mediaManifest.length} records</span></summary><div>{mediaManifest.map((record) => <article key={record.file}><strong>{record.subject}</strong><span>{record.creator} · {record.license}</span><a href={record.source} target="_blank" rel="noreferrer">View original source</a></article>)}</div></details><div className="footer-bottom"><span>ENSIT · Tunisia</span><a href="#top">Return to the beginning ↑</a><span>2026</span></div></footer>

    <StoryDialog story={activeStory} onClose={() => setActiveStory(null)} />
  </>;
}
