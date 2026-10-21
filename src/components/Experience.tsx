"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { mediaManifest } from "@/data/media-manifest";
import type { Story } from "@/data/stories";
import DocumentaryVideo from "./DocumentaryVideo";
import LanguageSwitcher from "./LanguageSwitcher";
import MediaFigure from "./MediaFigure";
import StoryDialog from "./StoryDialog";
import ThenNow from "./ThenNow";

function ExperienceInner() {
  const { dict, meta, stories, storyById, places } = useLanguage();
  const [activeStoryId, setActiveStoryId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const reduceMotion = useReducedMotion();

  const activeStory = activeStoryId ? storyById[activeStoryId] ?? null : null;

  function openStory(story: Story) {
    setActiveStoryId(story.id);
  }

  function toggleNarration(story: Story) {
    if (!("speechSynthesis" in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(
      `${story.title}. ${story.subtitle}. ${story.body}`
    );
    utterance.lang = meta.speechLang;
    utterance.rate = 0.9;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  }

  return (
    <>
      <a className="skip-link" href="#stories">
        {dict.nav.skipLink}
      </a>
      <header className="site-header">
        <a href="#top" className="brand" aria-label={`${dict.brand.country} — ${dict.brand.beyond}`}>
          <span lang="ar">تونس</span>
          <i />
          <b>{dict.brand.beyond}</b>
        </a>

        <div className="header-actions">
          <LanguageSwitcher className="header-lang" />
          <button
            type="button"
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? dict.nav.menuClose : dict.nav.menuOpen}
            <i aria-hidden="true" />
          </button>
        </div>

        <nav
          id="site-nav"
          className={menuOpen ? "site-nav open" : "site-nav"}
          aria-label={dict.nav.about}
        >
          <a href="#artwork" onClick={() => setMenuOpen(false)}>
            {dict.nav.artwork}
          </a>
          <a href="#stories" onClick={() => setMenuOpen(false)}>
            {dict.nav.stories}
          </a>
          <a href="#voices" onClick={() => setMenuOpen(false)}>
            {dict.nav.voices}
          </a>
          <a href="#atlas" onClick={() => setMenuOpen(false)}>
            {dict.nav.atlas}
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {dict.nav.about}
          </a>
          <LanguageSwitcher className="mobile-lang" />
        </nav>
      </header>

      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <motion.div
            className="hero-copy"
            initial={reduceMotion ? false : { y: 26 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero-context">
              <span>{dict.hero.contextBadge}</span>
              <span>{dict.hero.contextDate}</span>
            </p>
            <h1 id="hero-title">
              <span>{dict.hero.titleMain}</span>
              <em>{dict.hero.titleEmp}</em>
            </h1>
            <p className="hero-tagline">{dict.hero.tagline}</p>
            <p className="hero-intro">{dict.hero.intro}</p>
            <div className="hero-actions">
              <a href="#stories" className="solid-action">
                {dict.hero.exploreBtn}
              </a>
              <a href="#artwork" className="line-action">
                {dict.hero.artworkBtn}
              </a>
            </div>
          </motion.div>
          <motion.div
            className="hero-visual"
            initial={reduceMotion ? false : { scale: 0.96, rotate: 0 }}
            animate={{ scale: 1, rotate: meta.dir === "rtl" ? -1.2 : 1.2 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="photo-slice slice-one">
              <Image src="/images/stories/harissa-peppers.webp" alt="" fill sizes="18vw" />
            </div>
            <div className="photo-slice slice-two">
              <Image src="/images/stories/chenini.webp" alt="" fill sizes="22vw" />
            </div>
            <div className="poster-frame">
              <Image
                src="/poster/tunisia-poster.jpg"
                alt="Illustrated cultural poster of Tunisia"
                fill
                priority
                sizes="(max-width: 800px) 84vw, 37vw"
              />
            </div>
            <p>
              <span>{dict.hero.posterCap1}</span>
              <span>{dict.hero.posterCap2}</span>
            </p>
          </motion.div>
          <a className="scroll-prompt" href="#threshold">
            <span>{dict.hero.scrollPrompt}</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="threshold" id="threshold" aria-labelledby="threshold-title">
          <div className="threshold-copy">
            <p>{dict.threshold.tag}</p>
            <h2 id="threshold-title">
              {dict.threshold.title1}
              <br />
              <em>{dict.threshold.title2}</em>
            </h2>
          </div>
          <div className="threshold-images">
            <MediaFigure
              image={storyById.medina.hero}
              className="threshold-a"
              sizes="(max-width: 800px) 88vw, 31vw"
            />
            <MediaFigure
              image={storyById.craft.hero}
              className="threshold-b"
              sizes="(max-width: 800px) 70vw, 24vw"
            />
            <MediaFigure
              image={storyById.olives.hero}
              className="threshold-c"
              sizes="(max-width: 800px) 76vw, 28vw"
            />
          </div>
          <p className="threshold-note">{dict.threshold.note}</p>
        </section>

        <section className="artwork-section" id="artwork" aria-labelledby="artwork-title">
          <header className="section-heading light-heading">
            <div>
              <p>{dict.artwork.tag}</p>
              <span>{dict.artwork.entryCount}</span>
            </div>
            <h2 id="artwork-title">{dict.artwork.title}</h2>
            <p>{dict.artwork.desc}</p>
          </header>
          <div className="poster-explorer">
            <div
              className="explorer-canvas"
              role="group"
              aria-label={dict.artwork.canvasAria}
              dir="ltr"
            >
              <Image
                src="/poster/tunisia-poster.jpg"
                alt=""
                fill
                sizes="(max-width: 800px) 92vw, 54vw"
              />
              <div className="hotspots">
                {stories.map((story, index) => (
                  <button
                    key={story.id}
                    type="button"
                    style={{ left: `${story.hotspot.x}%`, top: `${story.hotspot.y}%` }}
                    onClick={() => openStory(story)}
                    aria-label={`${dict.artwork.openStoryAria} ${story.title}`}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="story-index" role="navigation" aria-label={dict.artwork.storyIndexAria}>
              {stories.map((story, index) => (
                <button key={story.id} type="button" onClick={() => openStory(story)}>
                  <span className="index-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="index-thumb">
                    <Image src={story.hero.src} alt="" fill sizes="84px" />
                  </span>
                  <span>
                    <strong>{story.title}</strong>
                    <small>
                      {story.chapterTitle} · {story.readingTime}
                    </small>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="stories-intro" id="stories" aria-labelledby="stories-title">
          <p>{dict.storiesIntro.tag}</p>
          <h2 id="stories-title">
            {dict.storiesIntro.title1}
            <br />
            <em>{dict.storiesIntro.title2}</em>
          </h2>
          <div>
            <p>{dict.storiesIntro.desc1}</p>
            <p>{dict.storiesIntro.desc2}</p>
          </div>
        </section>

        <section className="chapter chapter-ancient" aria-labelledby="ancient-title">
          <header className="chapter-title">
            <span>I</span>
            <div>
              <p>{dict.ancient.tag}</p>
              <h2 id="ancient-title">{dict.ancient.title}</h2>
            </div>
          </header>
          <div className="ancient-lead">
            <div>
              <p className="large-copy">{dict.ancient.lead}</p>
              <button
                type="button"
                className="story-button"
                onClick={() => openStory(storyById.carthage)}
              >
                {dict.ancient.readCarthageBtn}
              </button>
            </div>
            <p>{dict.ancient.compareDesc}</p>
          </div>
          <ThenNow
            thenImage={storyById.carthage.gallery[0]}
            nowImage={storyById.carthage.hero}
          />
          <div className="ancient-pair">
            <MediaFigure
              image={storyById["el-jem"].hero}
              className="eljem-figure"
              sizes="(max-width: 800px) 100vw, 42vw"
            />
            <div className="ancient-side">
              <p>{dict.ancient.romanAfricaTag}</p>
              <h3>{dict.ancient.romanAfricaTitle}</h3>
              <p>{dict.ancient.romanAfricaDesc}</p>
              <button
                type="button"
                className="story-button"
                onClick={() => openStory(storyById["el-jem"])}
              >
                {dict.ancient.elJemBtn}
              </button>
              <MediaFigure
                image={storyById.carthage.gallery[1]}
                className="mosaic-figure"
                sizes="(max-width: 800px) 88vw, 25vw"
              />
            </div>
          </div>
        </section>

        <aside className="fact-interlude">
          <span>{dict.factInterlude.tag}</span>
          <p>{dict.factInterlude.text}</p>
          <small>{dict.factInterlude.note}</small>
        </aside>

        <section className="chapter chapter-cities" aria-labelledby="cities-title">
          <header className="chapter-title">
            <span>II</span>
            <div>
              <p>{dict.cities.tag}</p>
              <h2 id="cities-title">{dict.cities.title}</h2>
            </div>
          </header>
          <div className="medina-collage">
            <MediaFigure
              image={storyById.medina.hero}
              className="medina-main"
              sizes="(max-width: 800px) 100vw, 53vw"
            />
            <div className="medina-copy">
              <p>{dict.cities.medinaLead}</p>
              <button
                type="button"
                className="story-button"
                onClick={() => openStory(storyById.medina)}
              >
                {dict.cities.medinaBtn}
              </button>
            </div>
            <MediaFigure
              image={storyById.medina.gallery[1]}
              className="medina-maker"
              sizes="(max-width: 800px) 72vw, 23vw"
            />
          </div>
          <div className="cities-pair">
            <article>
              <MediaFigure
                image={storyById.kairouan.hero}
                sizes="(max-width: 800px) 100vw, 42vw"
              />
              <p>{dict.cities.kairouanTag}</p>
              <h3>{dict.cities.kairouanTitle}</h3>
              <button type="button" onClick={() => openStory(storyById.kairouan)}>
                {dict.cities.kairouanBtn}
              </button>
            </article>
            <article>
              <MediaFigure
                image={storyById["sidi-bou-said"].hero}
                sizes="(max-width: 800px) 100vw, 34vw"
              />
              <p>{dict.cities.sidiTag}</p>
              <h3>{dict.cities.sidiTitle}</h3>
              <button type="button" onClick={() => openStory(storyById["sidi-bou-said"])}>
                {dict.cities.sidiBtn}
              </button>
            </article>
          </div>
        </section>

        <section className="chapter chapter-land" aria-labelledby="land-title">
          <div className="land-image">
            <Image
              src={storyById.south.hero.src}
              alt={storyById.south.hero.alt}
              fill
              sizes="100vw"
            />
            <span>{storyById.south.hero.credit}</span>
          </div>
          <div className="land-overlay">
            <div className="chapter-title">
              <span>III</span>
              <div>
                <p>{dict.land.tag}</p>
                <h2 id="land-title">{dict.land.title}</h2>
              </div>
            </div>
            <p>{dict.land.desc}</p>
            <button
              type="button"
              className="light-button"
              onClick={() => openStory(storyById.south)}
            >
              {dict.land.btn}
            </button>
          </div>
        </section>

        <section className="olive-story" aria-labelledby="olive-title">
          <div className="olive-copy">
            <p>{dict.olives.tag}</p>
            <h2 id="olive-title">{dict.olives.title}</h2>
            <p>{dict.olives.desc}</p>
            <button
              type="button"
              className="story-button"
              onClick={() => openStory(storyById.olives)}
            >
              {dict.olives.btn}
            </button>
          </div>
          <MediaFigure
            image={storyById.olives.gallery[0]}
            className="olive-harvest"
            sizes="(max-width: 800px) 100vw, 40vw"
          />
          <MediaFigure
            image={storyById.olives.gallery[1]}
            className="olive-landscape"
            sizes="(max-width: 800px) 88vw, 28vw"
          />
        </section>

        <section className="chapter chapter-hands" aria-labelledby="hands-title">
          <header className="chapter-title">
            <span>IV</span>
            <div>
              <p>{dict.hands.tag}</p>
              <h2 id="hands-title">
                {dict.hands.title1}
                <br />
                <em>{dict.hands.title2}</em>
              </h2>
            </div>
          </header>
          <div className="hands-grid">
            <MediaFigure
              image={storyById.craft.hero}
              className="hands-large"
              sizes="(max-width: 800px) 100vw, 56vw"
            />
            <div className="hands-copy">
              <p className="large-copy">{dict.hands.lead}</p>
              <button
                type="button"
                className="story-button"
                onClick={() => openStory(storyById.craft)}
              >
                {dict.hands.btn}
              </button>
            </div>
            <MediaFigure
              image={storyById.craft.gallery[0]}
              className="hands-small"
              sizes="(max-width: 800px) 82vw, 28vw"
            />
          </div>
          {storyById.craft.video && (
            <div className="feature-film">
              <header>
                <p>{dict.hands.docRoom}</p>
                <h3>{dict.hands.docTitle}</h3>
                <span>{dict.hands.docSubtitle}</span>
              </header>
              <DocumentaryVideo
                video={storyById.craft.video}
                poster={storyById.craft.gallery[0].src}
              />
            </div>
          )}
        </section>

        <section className="chapter chapter-clothing" aria-labelledby="clothing-title">
          <header className="chapter-title">
            <span>IV—B</span>
            <div>
              <p>{dict.clothing.tag}</p>
              <h2 id="clothing-title">{dict.clothing.title}</h2>
            </div>
          </header>
          <div className="clothing-spread">
            <MediaFigure
              image={storyById.clothing.hero}
              className="dress-detail"
              sizes="(max-width: 800px) 100vw, 48vw"
            />
            <div className="clothing-copy">
              <p>{dict.clothing.lead}</p>
              <button
                type="button"
                className="story-button"
                onClick={() => openStory(storyById.clothing)}
              >
                {dict.clothing.btn}
              </button>
            </div>
            <MediaFigure
              image={storyById.clothing.gallery[0]}
              className="dress-people"
              sizes="(max-width: 800px) 92vw, 30vw"
            />
            <MediaFigure
              image={storyById.clothing.gallery[1]}
              className="dress-craft"
              sizes="(max-width: 800px) 82vw, 25vw"
            />
          </div>
        </section>

        <section className="chapter chapter-table" aria-labelledby="table-title">
          <div className="table-image">
            <Image
              src={storyById.table.hero.src}
              alt={storyById.table.hero.alt}
              fill
              sizes="(max-width: 800px) 100vw, 55vw"
            />
            <span>{storyById.table.hero.credit}</span>
          </div>
          <div className="table-copy">
            <div className="chapter-title">
              <span>V</span>
              <div>
                <p>{dict.table.tag}</p>
                <h2 id="table-title">{dict.table.title}</h2>
              </div>
            </div>
            <p>{dict.table.lead}</p>
            <blockquote>{dict.table.quote}</blockquote>
            <button
              type="button"
              className="light-button"
              onClick={() => openStory(storyById.table)}
            >
              {dict.table.btn}
            </button>
          </div>
        </section>

        <section className="chapter chapter-living" aria-labelledby="living-title">
          <header className="chapter-title">
            <span>VI</span>
            <div>
              <p>{dict.living.tag}</p>
              <h2 id="living-title">{dict.living.title}</h2>
            </div>
          </header>
          <div className="living-grid">
            <MediaFigure
              image={storyById.living.hero}
              sizes="(max-width: 800px) 100vw, 40vw"
            />
            <div>
              <p className="tifinagh" lang="zgh">
                ⵜⵓⵏⵙ
              </p>
              <p>{dict.living.lead}</p>
              <button
                type="button"
                className="story-button"
                onClick={() => openStory(storyById.living)}
              >
                {dict.living.btn}
              </button>
            </div>
          </div>
          {storyById.living.video && (
            <DocumentaryVideo
              video={storyById.living.video}
              poster={storyById.living.hero.src}
            />
          )}
        </section>

        <section className="voices" id="voices" aria-labelledby="voices-title">
          <div>
            <p>{dict.voices.tag}</p>
            <h2 id="voices-title">{dict.voices.title}</h2>
          </div>
          <div className="voice-card">
            <button
              type="button"
              onClick={() => toggleNarration(storyById.medina)}
              aria-label={speaking ? dict.voices.stopAria : dict.voices.playAria}
            >
              <span aria-hidden="true">{speaking ? "Ⅱ" : "▶"}</span>
            </button>
            <div>
              <strong>{dict.voices.sampleTitle}</strong>
              <span>{dict.voices.voiceMeta}</span>
            </div>
            <p>{dict.voices.note}</p>
          </div>
        </section>

        <section className="atlas" id="atlas" aria-labelledby="atlas-title">
          <div className="atlas-copy">
            <p>{dict.atlas.tag}</p>
            <h2 id="atlas-title">{dict.atlas.title}</h2>
            <p>{dict.atlas.desc}</p>
            <div className="place-list">
              {places.map((place) => (
                <button
                  key={place.name}
                  type="button"
                  onClick={() => openStory(storyById[place.storyId])}
                >
                  {place.name}
                </button>
              ))}
            </div>
          </div>
          <div className="map" role="img" aria-label={dict.atlas.mapAria} dir="ltr">
            <svg viewBox="0 0 400 700" aria-hidden="true">
              <path
                d="M211 18C179 56 159 85 137 121c-18 30-31 76-12 102 20 28 30 54 17 89-18 49-42 79-53 129-9 43 8 78 33 109 21 26 38 52 46 84 9 37 4 75-10 110-18 45-42 85-64 127-14 27-24 55-27 86-4 35 12 70 34 97 12 15 28 26 47 31 23 6 47 1 68-10 32-17 56-45 74-78 24-44 38-93 43-143 5-51-1-102-15-151-12-42-32-81-54-120-24-42-49-84-63-131-15-50-13-104-5-156 6-41 18-81 21-123 2-28-5-57-19-81-12-21-30-38-51-49-7-4-15-6-23-6z"
                opacity=".3"
              />
              <path d="M220 26c-27 34-45 61-64 92-16 26-27 65-11 87 17 24 26 46 15 76-15 42-36 67-46 110-8 37 7 67 28 93 18 22 33 45 40 72 8 32 3 64-9 94-15 39-36 73-55 109-12 23-21 47-23 74-3 30 10 60 29 83 10 13 24 22 40 27 20 5 40 1 58-9 27-15 48-39 63-67 21-38 33-80 37-123 4-44-1-87-13-129-10-36-27-69-46-103-21-36-42-72-54-112-13-43-11-89-4-134 5-35 15-69 18-105 2-24-4-49-16-69-10-18-26-32-44-42-6-3-13-5-20-5z" />
            </svg>
            {places.map((place) => (
              <span
                key={place.name}
                className="map-place"
                style={{ left: `${place.x}%`, top: `${place.y}%` }}
              >
                <i />
                {place.name}
              </span>
            ))}
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <Image
            src="/images/stories/olive-cleaning.webp"
            alt="A Tunisian woman sorting fresh olives after harvest"
            fill
            sizes="100vw"
          />
          <div className="closing-shade" />
          <div className="closing-copy">
            <p>{dict.closing.tag}</p>
            <blockquote>{dict.closing.quote}</blockquote>
            <h2 id="closing-title">
              {dict.closing.title1}
              <br />
              <em>{dict.closing.title2}</em>
            </h2>
          </div>
        </section>
      </main>

      <footer id="about">
        <div className="footer-lead">
          <p>{dict.footer.leadTag}</p>
          <h2>
            {dict.footer.leadTitle1}
            <br />
            <em>{dict.footer.leadTitle2}</em>
          </h2>
        </div>
        <div className="footer-about">
          <p>{dict.footer.about1}</p>
          <p>{dict.footer.about2}</p>
        </div>
        <details className="credits">
          <summary>
            {dict.footer.creditsSummary}{" "}
            <span>
              {mediaManifest.length} {dict.footer.recordsSuffix}
            </span>
          </summary>
          <div>
            {mediaManifest.map((record) => (
              <article key={record.file}>
                <strong>{record.subject}</strong>
                <span>
                  {record.creator} · {record.license}
                </span>
                <span>{record.usage}</span>
                {record.licenseUrl && (
                  <a href={record.licenseUrl} target="_blank" rel="noreferrer">
                    License
                  </a>
                )}
              </article>
            ))}
          </div>
        </details>
        <div className="footer-bottom">
          <span>{dict.hero.contextDate}</span>
          <a href="#top">↑ {dict.brand.beyond}</a>
        </div>
      </footer>

      <StoryDialog story={activeStory} onClose={() => setActiveStoryId(null)} />
    </>
  );
}

export default function Experience() {
  return (
    <LanguageProvider>
      <ExperienceInner />
    </LanguageProvider>
  );
}
