import AlcIcon from "@/assets/icons/alc-icon.png";
import KingdomIcon from "@/assets/icons/kingdom-center.png";
import MosqueIcon from "@/assets/icons/mosque.png";
import ParkIcon from "@/assets/icons/Park.png";
import AlcNight from "@/assets/images/alc/alc-building-night.jpg";
import AlcBuilding from "@/assets/images/alc/alc-building.jpg";
import AlcInsideOne from "@/assets/images/alc/alc-inside-1.jpg";
import AlcInside from "@/assets/images/alc/alc-inside.jpg";
import type { Place } from "@/types/place";

import KingdomCenter1 from "@/assets/images/kingdom-center/kingdom-center-1.jpg";
import KingdomCenter2 from "@/assets/images/kingdom-center/kingdom-center-2.jpg";
import KingdomCenter3 from "@/assets/images/kingdom-center/kingdom-center-3.jpg";

import AbdullahPark1 from "@/assets/images/abdullah-park/abdullah-park-1.jpg";
import AbdullahPark2 from "@/assets/images/abdullah-park/abdullah-park-2.jpg";
import AbdullahPark3 from "@/assets/images/abdullah-park/abdullah-park-3.jpg";

import RajhiMosque1 from "@/assets/images/rajhi-mosque/rajhi-mosque-1.jpg";
import RajhiMosque2 from "@/assets/images/rajhi-mosque/rajhi-mosque-2.jpg";
import RajhiMosque3 from "@/assets/images/rajhi-mosque/rajhi-mosque-3.jpg";


export const places: Place[] = [
  {
    id: "1",
    placeId: "ChIJi6ga3poCLz4RcR_jtM6Usos",
    displayName: "Rajhi Mosque, Ahmad Al Baqli, Riyadh Saudi Arabia",
    latLng: {
      lat: 24.68023080261718,
      lng: 46.77933550899842,
    },
    formatted_address:
      "RQJB7131، 2157 Eastern Ring Branch Rd، حي الجزيرة، 7131, Riyadh 14251, Saudi Arabia",
    photos: [RajhiMosque1, RajhiMosque2, RajhiMosque3],
    editorialSummary:
      "Striking mosque with a dome, twin minarets & a cavernous prayer hall, illuminated at night.",
    icon: MosqueIcon,
    type: "mosque",
  },
  {
    id: "2",
    placeId: "ChIJN1RXRTsELz4RvVlDwc69vqI",
    displayName: "King Abdullah Park",
    latLng: {
      lat: 24.66661917430415,
      lng: 46.73714866613366,
    },
    formatted_address:
      "Al Ameen Abdullah Al Ali Al Naeem St, Al Malaz, Riyadh 12836, Saudi Arabia",
    photos: [AbdullahPark1, AbdullahPark2, AbdullahPark3],
    editorialSummary:
      "Big city park with 12-m. walkways, play & sports areas & dancing water fountain displays.",
    icon: ParkIcon,
    type: "park",
  },
  {
    id: "3",
    placeId: "ChIJmW8EDigDLz4REqJgseo3dwM",
    displayName: "Kingdom Centre",
    latLng: {
      lat: 24.711910581339605,
      lng: 46.67538265763386,
    },
    formatted_address: "King Fahd Rd, Al Olaya, Riyadh 12214, Saudi Arabia",
    photos: [
      KingdomCenter1,
      KingdomCenter2,
      KingdomCenter3
    ],
    editorialSummary:
      "Futuristic shopping mall with luxury brands, plus a sky bridge offering panoramic city views.",
    icon: KingdomIcon,
    type: "kingdom_hall",
  },
  {
    id: "4",
    placeId: "ChIJw2lfYtYCLz4ROT2TR-sbtPI",
    displayName: "Advanced Learning Company",
    latLng: {
      lat: 24.709079099415526,
      lng: 46.67619601696059,
    },
    formatted_address:
      "PM5G+HCH, Al-Thumamah Valley St, Al Olaya, Riyadh 12214, Saudi Arabia",
    photos: [AlcBuilding, AlcInside, AlcInsideOne, AlcNight],
    editorialSummary: `
      <p>
        <a
          href="https://advanced-learning.sa/"
          target="_blank"
          rel="noopener noreferrer"
          style="color: #2563eb; text-decoration: underline; font-weight: 500;"
        >
          Advanced Learning Company
        </a>
        envisions a future where personalized, technology-enabled learning transforms education and training, fostering sustainable, lifelong growth and maximizing human capacity globally.
      </p>

      <p>At Advanced Learning Company, we make and provide learning solutions to individuals and key accounts in the private and public sectors, bundling innovative educational products and services in partnership projects and commercial alliances, all powered by our state-of-the-art education and training platforms.</p>

      <p>ALC aligns with the Saudi Human Capability Development Program values, strategic pillars, and commitments, and directly supports the objective of developing globally competitive citizens across the three community segments: children, youths, and adults.</p>

      <p>We also lean into the World Economic Forum’s Education 4.0 framework of shifting learning content and experiences toward the needs of the future through built-in mechanisms for skills adaptation and by leveraging innovative pedagogies.</p>

      <p>Our state-of-the-art platform and ecosystem, Advanced Learning World, powers the core of our mission and education transformation strategy.</p>

      <p>Implementing the Saudi curriculum, our technology enables the transition from textbooks to dynamic eLearning content delivered both synchronously and asynchronously.</p>

      <p>Our state-of-the-art Advanced Learning Schools (ALS) is an IB Continuum World School offering Primary, Middle, and Diploma Years Programs, accredited by the Council of International Schools (CIS) and the International Baccalaureate Organization (IBO).</p>
    `,
    icon: AlcIcon,
    type: "training_center",
  },
];
