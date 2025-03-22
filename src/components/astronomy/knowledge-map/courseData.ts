
import { KnowledgeMapNode } from '@/components/astronomy/types';

// Define course shapes, colors, and their topics
export const courseShapes: KnowledgeMapNode[] = [
  {
    id: 'neighbor-worlds',
    label: 'The Neighbor Worlds',
    description: 'Explore Earth, Moon, and Mars',
    progress: 64,
    isCurrent: true,
    color: '#8B5CF6', // Purple
    backgroundColor: '#F2E6FF', // Light purple
    topics: ['earth', 'moon', 'mars', 'space-travel']
  },
  {
    id: 'solar-system',
    label: 'The Solar System', 
    description: 'The Sun and its planetary system',
    progress: 28,
    color: '#10B981', // Green
    backgroundColor: '#E6FFF2', // Light green
    topics: ['sun', 'inner-planets', 'outer-planets', 'asteroid-belt', 'comets']
  },
  {
    id: 'deep-space',
    label: 'Deep Space Objects', 
    description: 'Nebulae, Black Holes and more',
    progress: 10,
    color: '#F97316', // Orange
    backgroundColor: '#FFF0E6', // Light orange
    topics: ['galaxies', 'nebulae', 'black-holes', 'neutron-stars']
  },
  {
    id: 'stellar-evolution',
    label: 'Stellar Evolution', 
    description: 'Birth and death of stars',
    progress: 0,
    color: '#0EA5E9', // Blue
    backgroundColor: '#E6F7FF', // Light blue
    topics: ['star-formation', 'main-sequence', 'red-giants', 'supernovae', 'white-dwarfs']
  },
  {
    id: 'cosmology',
    label: 'Cosmology', 
    description: 'Study of the universe origin and fate',
    progress: 0,
    color: '#EC4899', // Pink
    backgroundColor: '#FFEAF5', // Light pink
    topics: ['big-bang', 'cosmic-microwave', 'dark-matter', 'dark-energy', 'expansion']
  },
  {
    id: 'exoplanets',
    label: 'Exoplanets', 
    description: 'Planets beyond our solar system',
    progress: 0,
    color: '#EAB308', // Yellow
    backgroundColor: '#FFFEE6', // Light yellow
    topics: ['detection-methods', 'habitable-zone', 'planetary-systems', 'exomoons']
  },
  {
    id: 'space-technology',
    label: 'Space Technology', 
    description: 'Telescopes, missions and instruments',
    progress: 5,
    color: '#A855F7', // Purple
    backgroundColor: '#F5E9FF', // Light purple
    topics: ['optical-telescopes', 'radio-telescopes', 'space-missions', 'launch-vehicles', 'satellites']
  },
  {
    id: 'astrobiology',
    label: 'Astrobiology', 
    description: 'Search for life in the universe',
    progress: 0,
    color: '#14B8A6', // Teal
    backgroundColor: '#E6FFFC', // Light teal
    topics: ['origin-of-life', 'extremophiles', 'biosignatures', 'habitability', 'seti']
  },
];

// Helper function to format topic names for display
export function formatTopicName(name: string): string {
  return name.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}
