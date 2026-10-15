# Tunisia — Beyond the Frame

Interactive cultural exhibition created by The Architects, ENSIT, for GCD4F 2026.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm start
```

The application uses Next.js App Router and has no backend. Deploy the repository directly to Vercel.

## Content and media

Cultural stories live in `src/data/stories.ts`. Media provenance lives in `src/data/media-manifest.ts`.

The supplied poster is an AI-assisted illustration owned by the project team. It is intentionally labeled as artwork and is not presented as documentary photography.

The exhibition also includes locally hosted, optimized documentary media:

- 22 photographs and archival images from Wikimedia Commons.
- A captioned Sejnane pottery documentary.
- A captioned Malouf performance by La Rachidia.
- A contextual transcript for each film.
- A credited historical/current Carthage comparison.

Every media record includes creator, original file page, license, attribution, and modification notes. New media must be added to the manifest before use. Do not replace identified Tunisian food, clothing, craft, or places with generic regional imagery.

Historical summaries cite UNESCO, Tunisia’s Institut National du Patrimoine, Tunisia’s National Office of Handicrafts, and the International Olive Council. Editorial review by Tunisian cultural specialists remains recommended before public launch.

## Accessibility

The poster explorer uses normalized hotspots and has a complete photographic/text index. Native dialogs provide focus management. Videos use native controls, descriptive caption tracks, and contextual transcripts. Narration is opt-in and explicitly identified as browser synthesis. Motion honors `prefers-reduced-motion`.
