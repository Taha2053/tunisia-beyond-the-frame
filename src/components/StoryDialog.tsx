"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Story } from "@/data/stories";
import DocumentaryVideo from "./DocumentaryVideo";

export default function StoryDialog({ story, onClose }: { story: Story | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    if (story && !dialogRef.current?.open) dialogRef.current?.showModal();
  }, [story]);

  function close() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setSpeaking(false);
    dialogRef.current?.close();
    onClose();
  }

  function toggleNarration() {
    if (!story || !("speechSynthesis" in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(`${story.title}. ${story.subtitle}. ${story.body}. ${story.fact}`);
    utterance.lang = "en";
    utterance.rate = 0.9;
    utterance.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  }

  return <dialog ref={dialogRef} className="story-dialog" onCancel={(event) => { event.preventDefault(); close(); }} onClose={() => story && onClose()}>
    {story && <div className="dialog-shell">
      <button className="dialog-close" onClick={close}><span>Close story</span><i aria-hidden="true">×</i></button>
      <article>
        <header className="dialog-header">
          <div className="dialog-hero"><Image src={story.hero.src} alt={story.hero.alt} fill sizes="100vw" /><span>{story.hero.credit}</span></div>
          <div className="dialog-title"><p>{story.chapter} · {story.chapterTitle}</p><h2>{story.title}</h2><p>{story.subtitle}</p><div className="dialog-meta"><span>{story.readingTime} read</span><span>{story.location}</span></div></div>
        </header>
        <div className="dialog-narrative">
          <aside><button onClick={toggleNarration}>{speaking ? "Stop narration" : "Listen to this story"}</button><span>Optional synthesized English voice</span></aside>
          <div><p className="dialog-body">{story.body}</p><blockquote>{story.fact}</blockquote></div>
        </div>
        {story.gallery.length > 0 && <div className={`dialog-gallery gallery-${story.gallery.length}`}>
          {story.gallery.map((image) => <figure key={image.src}><div><Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 100vw, 45vw" /></div><figcaption>{image.credit}</figcaption></figure>)}
        </div>}
        {story.video && <DocumentaryVideo video={story.video} poster={story.hero.src} />}
        <footer className="dialog-sources"><h3>Sources and place</h3><dl><div><dt>Place</dt><dd>{story.location}</dd></div><div><dt>Coordinates</dt><dd>{story.coordinates}</dd></div>{story.sources.map((source) => <div key={source.url}><dt>Reference</dt><dd><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></dd></div>)}</dl></footer>
      </article>
    </div>}
  </dialog>;
}
