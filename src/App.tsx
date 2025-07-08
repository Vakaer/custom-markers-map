import type { LatLngTuple } from 'leaflet'
import L from 'leaflet'
import { useState } from 'react'
import { MapContainer, Marker, TileLayer, Tooltip, useMap } from 'react-leaflet'
import './App.css'
import { InfoSheet } from './components/info-sheet'
import { places } from './data/places'
import type { Place } from './types/place'

const position: LatLngTuple = [24.709079099415526, 46.67619601696059]

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [placeDetails, setPlaceDetails] = useState<Place | null>(null)

  function FlyToMarker({ position }: { position: LatLngTuple }) {
    const map = useMap();
    map.flyTo(position, 18, { duration: 1.2 });
  return null;
}
  const handleMapClick = async (place: Place) => {
    if (!place.placeId) {
      return;
    }

    setPlaceDetails({
      id: place.id,
      displayName: place.displayName ?? "",
      latLng: { lat: place.latLng.lat, lng: place.latLng.lng },
      photos: place.photos ?? [],
      editorialSummary: place.editorialSummary ?? "",
      placeId: place.placeId,
      type: place.type,
      formatted_address: place.formatted_address ?? "",
    });
    setTimeout(() => {
      setSidebarOpen(true);
    }, 1000);
  }

  return (
    <>
      <MapContainer
        touchZoom={true}
        zoomDelta={1}
        center={position}
        zoom={10}
        zoomControl={false}
        maxBounds={[[24.397, 46.312], [25.004, 47.125]]} // Riyadh bounding box
        maxBoundsViscosity={1.0}
        markerZoomAnimation={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places?.map((place) => (
          <Marker
            key={place.id}
            position={[place.latLng.lat, place.latLng.lng]}
            icon={place.icon ? L.icon({ iconUrl: place.icon, iconSize: [56, 56], iconAnchor: [16, 32] }) : undefined}
            riseOnHover={true}
            zIndexOffset={1000}
            title={place.displayName}
            alt={place.displayName}
            eventHandlers={{
              click: () => {
                handleMapClick(place)
              }
            }}>
              <>
                <Tooltip direction='top'>{place.displayName}</Tooltip>
                {placeDetails?.id === place.id && <FlyToMarker position={[place.latLng.lat, place.latLng.lng]} />}
              </>
          </Marker>
        ))}
      </MapContainer>
      <InfoSheet
        placeDetails={placeDetails}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
    </>
  )
}
