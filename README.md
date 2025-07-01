# Custom Markers Map

A React + TypeScript + Vite project that displays a map with custom markers for different places in Riyadh, Saudi Arabia. Each marker represents a location such as a mosque, park, training center, or landmark, and clicking a marker opens a sidebar with detailed information and an image gallery.

## Features

- 🗺️ **Interactive Map**: Built with [react-leaflet](https://react-leaflet.js.org/) and [Leaflet](https://leafletjs.com/).
- 📍 **Custom Markers**: Each place type (mosque, park, etc.) uses a unique icon.
- 🖼️ **Image Gallery**: View multiple photos for each place, with fullscreen preview and navigation.
- ℹ️ **Info Sidebar**: Click a marker to open a sidebar with details, address, and summary.
- 🎨 **Modern UI**: Styled with [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/).
- 📱 **Responsive**: Works on desktop and mobile devices.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [bun](https://bun.sh/)

### Installation

```sh
bun install
```

### Development

```sh
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```sh
bun run build
```


## Project Structure

- `src/`
  - `App.tsx` — Main app with map and marker logic
  - `data/places.tsx` — Place data and marker info
  - `components/` — UI components (info sheet, image gallery, etc.)
  - `assets/icons/` — Custom SVG and PNG marker icons
  - `types/place.ts` — TypeScript types for places

## Customization

- Add or edit places in [`src/data/places.tsx`](src/data/places.tsx).
- Add new icons in [`src/assets/icons/`](src/assets/icons/).
- Update styles in [`src/index.css`](src/index.css) or [`src/App.css`](src/App.css).

## Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Leaflet](https://leafletjs.com/)
- [react-leaflet](https://react-leaflet.js.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

MIT
