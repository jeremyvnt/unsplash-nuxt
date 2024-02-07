import { Routes } from '~/types/Routes';

export interface Topic {
  id: string;
  name: string;
  href: string;
}

export const topics: Topic[] = [
  { id: 'wallpapers', name: 'Wallpapers', href: `${Routes.Topics}/wallpapers` },
  { id: '3d-renders', name: 'Rendus 3D', href: `${Routes.Topics}/3d-renders` },
  { id: 'nature', name: 'Nature', href: `${Routes.Topics}/nature` },
  { id: 'travel', name: 'Voyager', href: `${Routes.Topics}/travel` },
  {
    id: 'architecture-interior',
    name: 'Architecture Et Intérieurs',
    href: `${Routes.Topics}/architecture-interior`,
  },
  {
    id: 'textures-patterns',
    name: 'Textures & Motifs',
    href: `${Routes.Topics}/textures-patterns`,
  },
  {
    id: 'street-photography',
    name: 'Photographie De Rue',
    href: `${Routes.Topics}/street-photography`,
  },
  { id: 'film', name: 'Film', href: `${Routes.Topics}/film` },
  { id: 'archival', name: 'Archivistique', href: `${Routes.Topics}/archival` },
  { id: 'experimental', name: 'Experimental', href: `${Routes.Topics}/experimental` },
  { id: 'animals', name: 'Animaux', href: `${Routes.Topics}/animals` },
  { id: 'fashion-beauty', name: 'Mode & Beauté', href: `${Routes.Topics}/fashion-beauty` },
  { id: 'people', name: 'Gens', href: `${Routes.Topics}/people` },
  { id: 'spirituality', name: 'Spiritualité', href: `${Routes.Topics}/spirituality` },
  { id: 'business-work', name: 'Affaires Et Travail', href: `${Routes.Topics}/business-work` },
  { id: 'food-drink', name: 'Nourriture Et Boissons', href: `${Routes.Topics}/food-drink` },
  { id: 'health', name: 'Santé Et Bien être', href: `${Routes.Topics}/health` },
  { id: 'sports', name: 'Sportif', href: `${Routes.Topics}/sports` },
  { id: 'current-event', name: 'Actualités', href: `${Routes.Topics}/current-event` },
];
