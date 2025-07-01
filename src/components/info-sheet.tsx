import { PlaceIcon } from "@/assets/icons/place-icon"
import { type Place } from "@/types/place"
import ImageGallery from "./image-gallery"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet"

type InfoSheetProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  placeDetails: Place | null;
}

export const InfoSheet = ({placeDetails, setSidebarOpen, sidebarOpen}: InfoSheetProps) => {
  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" style={{zIndex: 9999}} className="max-w-sm w-full">
          <SheetHeader className='p-0'>
            <div className='h-10 bg-blue-950 w-full'></div>
            <SheetDescription asChild>
              <div className="space-y-4">
                {placeDetails?.photos && placeDetails.photos.length > 0 ? (
                  <ImageGallery photos={placeDetails.photos} />
                ) : (
                  <div className="text-center text-gray-500">No photos available.</div>
                )}
              </div>
            </SheetDescription>
            <SheetTitle className='px-4 text-2xl'>
              {placeDetails ? placeDetails.displayName : 'Place Details'}
            </SheetTitle>
              {placeDetails?.formatted_address &&
                <p className='px-4 flex gap-2 items-center text-sm text-slate-600'>
                  <PlaceIcon/>
                  {placeDetails?.formatted_address}
                </p>
              }
          </SheetHeader>
        {placeDetails?.editorialSummary ? (
          <p
            className=' px-4 text-sm text-slate-600 overflow-y-scroll'
            dangerouslySetInnerHTML={{ __html: placeDetails.editorialSummary }}
          />
        ) : (
          <p className=' px-4 text-sm text-slate-600 overflow-y-scroll'>
            No summary available.
          </p>
        )}
        </SheetContent>
      </Sheet>
  )
}