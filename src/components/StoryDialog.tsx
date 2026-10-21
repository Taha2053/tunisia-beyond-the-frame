"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Story } from "@/data/stories";
import DocumentaryVideo from "./DocumentaryVideo";

export default function StoryDialog({ story, onClose }: { story: Story | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);
  const [speaking, setSpeaking] = useState(false);
  const { dict, meta } = useLanguage();

  useEffect(() => {
    if (story) {
      triggerElementRef.current = document.activeElement as HTMLElement;
      if (!dialogRef.current?.open) dialogRef.current?.showModal();
    }
  }, [story]);

  function close() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setSpeaking(false);
    dialogRef.current?.close();
    onClose();
    triggerElementRef.current?.focus();
  }

  function toggleNarration() {
    if (!story || !("speechSynthesis" in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(
      `${story.title}. ${story.subtitle}. ${story.body}. ${story.fact}`
    );
    utterance.lang = meta.speechLang;
    utterance.rate = 0.9;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  }

  return (
    <dialog
      ref={dialogRef}
      className="story-dialog"
      dir={meta.dir}
      aria-labelledby="story-dialog-title"
      onClick={(event) => {
        if (event.target === dialogRef.current) close();
      }}
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClose={() => story && onClose()}
    >
      {story && (
        <div className="dialog-shell">
          <button type="button" className="dialog-close" onClick={close}>
            <span>{dict.dialog.close}</span>
            <i aria-hidden="true">×</i>
          </button>
          <article>
            <header className="dialog-header">
              <div className="dialog-hero">
                <Image src={story.hero.src} alt={story.hero.alt} fill sizes="100vw" />
                <span>{story.hero.credit}</span>
              </div>
              <div className="dialog-title">
                <p>
                  {story.chapter} · {story.chapterTitle}
                </p>
                <h2 id="story-dialog-title">{story.title}</h2>
                <p>{story.subtitle}</p>
                <div className="dialog-meta">
                  <span>{story.readingTime}</span>
                  <span>{story.location}</span>
                </div>
              </div>
            </header>
            <div className="dialog-narrative">
              <aside>
                <button type="button" onClick={toggleNarration}>
                  {speaking ? dict.dialog.stop : dict.dialog.listen}
                </button>
                <span>{dict.dialog.voiceBadge}</span>
              </aside>
              <div>
                <p className="dialog-body">{story.body}</p>
                <blockquote>{story.fact}</blockquote>
              </div>
            </div>
            {story.gallery.length > 0 && (
              <div className={`dialog-gallery gallery-${story.gallery.length}`}>
                {story.gallery.map((image) => (
                  <figure key={image.src}>
                    <div>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 800px) 100vw, 45vw"
                      />
                    </div>
                    <figcaption>{image.credit}</figcaption>
                  </figure>
                ))}
              </div>
            )}
            {story.video && <DocumentaryVideo video={story.video} poster={story.hero.src} />}
            <footer className="dialog-sources">
              <h3>{dict.dialog.sourcesTitle}</h3>
              <dl>
                <div>
                  <dt>{dict.dialog.place}</dt>
                  <dd>{story.location}</dd>
                </div>
                <div>
                  <dt>{dict.dialog.coordinates}</dt>
                  <dd>{story.coordinates}</dd>
                </div>
                {story.sources.map((source) => (
                  <div key={source.url}>
                    <dt>{dict.dialog.reference}</dt>
                    <dd>
                      <a href={source.url} target="_blank" rel="noreferrer">
                        {source.label}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </footer>
          </article>
        </div>
      )}
    </dialog>
  );
}
