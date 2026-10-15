"use client";

import { useState } from "react";
import type { StoryVideo } from "@/data/stories";

export default function DocumentaryVideo({ video, poster }: { video: StoryVideo; poster: string }) {
  const [showTranscript, setShowTranscript] = useState(false);

  return <figure className="documentary">
    <video controls preload="none" poster={poster} playsInline>
      <source src={video.src} type="video/mp4" />
      <track kind="captions" src={video.captions} srcLang="en" label="English visual descriptions" default />
      Your browser does not support HTML video. The transcript remains available below.
    </video>
    <figcaption>
      <div><strong>{video.title}</strong><span>{video.language} · {video.credit}</span></div>
      <button aria-expanded={showTranscript} onClick={() => setShowTranscript(!showTranscript)}>{showTranscript ? "Hide transcript" : "Read transcript"}</button>
    </figcaption>
    {showTranscript && <div className="video-transcript"><h4>Contextual transcript</h4><p>{video.transcript}</p><p className="transcript-note">This is a contextual description, not a verbatim translation of speech.</p></div>}
  </figure>;
}
