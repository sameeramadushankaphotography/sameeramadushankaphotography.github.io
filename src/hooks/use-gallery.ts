import { useQuery } from '@tanstack/react-query';
import { GALLERY_CONFIG } from '@/config/gallery';
import type { CollectionsResponse, PhotosResponse, Collection, Photo } from '@/types/gallery';

// Demo data for when API is not configured
const demoCollections: Collection[] = [
  {
    id: 'demo-1',
    title: 'Kasun & Nethmi Wedding',
    category: 'Wedding',
    folderName: 'Wedding - Kasun & Nethmi Wedding',
    coverImage: '/placeholder.svg',
    photoCount: 150,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'demo-2',
    title: 'Sunset Pre-shoot Session',
    category: 'Pre-shoot',
    folderName: 'Pre-shoot - Sunset Pre-shoot Session',
    coverImage: '/placeholder.svg',
    photoCount: 45,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'demo-3',
    title: 'Studio Fashion Shoot',
    category: 'Model',
    folderName: 'Model - Studio Fashion Shoot',
    coverImage: '/placeholder.svg',
    photoCount: 80,
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'demo-4',
    title: 'Birthday Celebration',
    category: 'Party',
    folderName: 'Party - Birthday Celebration',
    coverImage: '/placeholder.svg',
    photoCount: 120,
    createdAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

const demoPhotos: Photo[] = Array.from({ length: 12 }, (_, i) => ({
  id: `demo-photo-${i + 1}`,
  name: `photo-${i + 1}.jpg`,
  url: '/placeholder.svg',
  thumbnailUrl: '/placeholder.svg',
  mimeType: 'image/jpeg',
  size: 1024 * 1024 * 2,
  createdAt: new Date().toISOString(),
}));

async function fetchCollections(): Promise<CollectionsResponse> {
  if (GALLERY_CONFIG.demoMode) {
    // Return demo data
    return {
      success: true,
      collections: demoCollections,
      total: demoCollections.length,
    };
  }

  const response = await fetch(`${GALLERY_CONFIG.apiUrl}?action=collections`);
  if (!response.ok) {
    throw new Error('Failed to fetch collections');
  }
  return response.json();
}

async function fetchPhotos(collectionId: string): Promise<PhotosResponse> {
  if (GALLERY_CONFIG.demoMode) {
    const collection = demoCollections.find(c => c.id === collectionId);
    return {
      success: true,
      collection: collection ? {
        id: collection.id,
        title: collection.title,
        category: collection.category,
        folderName: collection.folderName,
      } : {
        id: collectionId,
        title: 'Demo Collection',
        category: 'Photography',
        folderName: 'Demo Collection',
      },
      photos: demoPhotos,
      total: demoPhotos.length,
    };
  }

  const response = await fetch(`${GALLERY_CONFIG.apiUrl}?action=photos&id=${collectionId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch photos');
  }
  return response.json();
}

export function useCollections() {
  return useQuery({
    queryKey: ['collections'],
    queryFn: fetchCollections,
    staleTime: GALLERY_CONFIG.cacheDuration,
    select: (data) => data.collections,
  });
}

export function usePhotos(collectionId: string | undefined) {
  return useQuery({
    queryKey: ['photos', collectionId],
    queryFn: () => fetchPhotos(collectionId!),
    enabled: !!collectionId,
    staleTime: GALLERY_CONFIG.cacheDuration,
  });
}

export function useRecentCollections(limit: number = 4) {
  return useQuery({
    queryKey: ['collections'],
    queryFn: fetchCollections,
    staleTime: GALLERY_CONFIG.cacheDuration,
    select: (data) => data.collections.slice(0, limit),
  });
}
