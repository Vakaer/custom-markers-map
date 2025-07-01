import { useState } from "react"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { ScrollBar } from "./ui/scroll-area"
import { Skeleton } from "./ui/skeleton"

function ImageGallery({ photos }: { photos: string[] }) {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [mainLoaded, setMainLoaded] = useState(false)
  const [thumbLoaded, setThumbLoaded] = useState(Array(photos.length).fill(false))

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIdx(idx => (idx === 0 ? photos.length - 1 : idx - 1))
    setMainLoaded(false)
  }

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIdx(idx => (idx === photos.length - 1 ? 0 : idx + 1))
    setMainLoaded(false)
  }

  const handleThumbLoad = (idx: number) => {
    setThumbLoaded(loaded => {
      const copy = [...loaded]
      copy[idx] = true
      return copy
    })
  }

  return (
    <>
      {/* Main Image */}
      <div className="w-full flex items-center justify-center mb-2 min-h-[20rem] relative">
        {!mainLoaded && (
          <Skeleton className="absolute w-full h-full max-h-80 min-h-[58px] rounded" />
        )}
        <img
          src={photos[selectedIdx]}
          className={`w-full max-h-80 min-h-[58px] object-cover cursor-pointer rounded transition-opacity ${mainLoaded ? "opacity-100" : "opacity-0"}`}
          alt="Place"
          onClick={() => setPreviewOpen(true)}
          onLoad={() => setMainLoaded(true)}
        />
      </div>
      {/* Thumbnails */}
      <ScrollArea className="max-w-sm overflow-scroll rounded-md whitespace-nowrap">
        <div className="flex w-max space-x-4 p-4">
          {photos.map((photo, idx) => (
            <button
              key={photo}
              onClick={() => {
                setSelectedIdx(idx)
                setMainLoaded(false)
              }}
              className={`border-2 aspect-square rounded ${selectedIdx === idx ? 'border-blue-500' : 'border-transparent'}`}
              style={{ padding: 0, background: 'none' }}
              tabIndex={0}
              aria-label={`Show image ${idx + 1}`}
            >
              <div className="relative w-24 h-24">
                {!thumbLoaded[idx] && (
                  <Skeleton className="absolute w-full h-full rounded" />
                )}
                <img
                  src={photo}
                  className={`w-24 h-24 border object-cover rounded transition-opacity ${thumbLoaded[idx] ? "opacity-100" : "opacity-0"}`}
                  alt={`Thumbnail ${idx + 1}`}
                  crossOrigin='anonymous'
                  loading="lazy"
                  onLoad={() => handleThumbLoad(idx)}
                />
              </div>
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {/* Fullscreen Preview */}
      {previewOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setPreviewOpen(false)}
          style={{ cursor: 'zoom-out' }}
        >
          {/* Prev Button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl font-bold px-2 py-1 bg-black bg-opacity-30 rounded-full hover:bg-opacity-60 transition"
            onClick={goPrev}
            aria-label="Previous image"
            style={{ zIndex: 51 }}
          >
            &#8592;
          </button>
          {/* Fullscreen Image */}
          <img
            src={photos[selectedIdx]}
            alt="Full Preview"
            className="w-screen h-screen object-contain rounded shadow-lg"
            onClick={e => e.stopPropagation()}
            style={{ background: 'black' }}
          />
          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl font-bold px-2 py-1 bg-black bg-opacity-30 rounded-full hover:bg-opacity-60 transition"
            onClick={goNext}
            aria-label="Next image"
            style={{ zIndex: 51 }}
          >
            &#8594;
          </button>
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setPreviewOpen(false)}
            aria-label="Close preview"
            style={{ background: 'none', border: 'none', cursor: 'pointer', zIndex: 52 }}
          >
            &times;
          </button>
        </div>
      )}
    </>
  )
}

export default ImageGallery;