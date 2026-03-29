export interface Collection {
  id: string;
  title: string;
  category: string;
  folderName: string;
  coverImage: string | null;
  photoCount: number;
  createdAt: string;
}

export interface Photo {
  id: string;
  name: string;
  url: string;
  thumbnailUrl: string;
  mimeType: string;
  size: number;
  createdAt: string;
}

export interface CollectionsResponse {
  success: boolean;
  collections: Collection[];
  total: number;
  error?: string;
}

export interface PhotosResponse {
  success: boolean;
  collection: {
    id: string;
    title: string;
    category: string;
    folderName: string;
  };
  photos: Photo[];
  total: number;
  error?: string;
}
