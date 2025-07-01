export interface Place {
  id: string;
  displayName: string;
  latLng: {lat: number; lng: number};
  photos: string[];
  editorialSummary?: string;
  placeId?: string;
  formatted_address?: string;
  phoneNumber?: string;
  website?: string;
  rating?: number;
  userRatingsTotal?: number;
  openingHours?: {
    openNow: boolean;
    periods?: Array<{
      open: {
        day: number;
        time: string;
      };
      close: {
        day: number;
        time: string;
      };
    }>;
    weekdayText?: string[];
  };
  types?: string[];
  vicinity?: string;
  priceLevel?: number;
  utcOffset?: number;
  internationalPhoneNumber?: string;
  icon?: string;
  type: PlaceType
}

export const PlaceType = {
  MOSQUE: "mosque",
  PARK: "park",
  KINGDOM_HALL: "kingdom_hall",
  TRAINING_CENTER: "training_center"
} as const;

export type PlaceType = typeof PlaceType[keyof typeof PlaceType];