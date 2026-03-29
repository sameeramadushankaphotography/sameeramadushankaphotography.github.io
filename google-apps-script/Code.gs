/**
 * Google Apps Script - Google Drive Photo Gallery API
 * For: Sameera Madushanka Photography / Studio 3rd Eye
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Copy this entire code into the editor
 * 4. Replace FOLDER_ID below with your Google Drive folder ID
 * 5. Click Deploy > New Deployment
 * 6. Select "Web app"
 * 7. Set "Execute as" to "Me"
 * 8. Set "Who has access" to "Anyone"
 * 9. Click Deploy and copy the URL
 * 10. Paste that URL in your website's config
 */

// ============================================
// CONFIGURATION - UPDATE THIS!
// ============================================
const FOLDER_ID = 'YOUR_GOOGLE_DRIVE_FOLDER_ID_HERE';
// To get folder ID: Open folder in Google Drive, copy ID from URL
// Example: https://drive.google.com/drive/folders/1ABC123xyz <- this is the ID

// ============================================
// DO NOT MODIFY BELOW THIS LINE
// ============================================

function doGet(e) {
  const action = e.parameter.action || 'collections';
  const collectionId = e.parameter.id;

  let result;

  try {
    if (action === 'collections') {
      result = getCollections();
    } else if (action === 'photos' && collectionId) {
      result = getPhotosInCollection(collectionId);
    } else {
      result = { error: 'Invalid action or missing parameters' };
    }
  } catch (error) {
    result = { error: error.toString() };
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

function getCollections() {
  const mainFolder = DriveApp.getFolderById(FOLDER_ID);
  const subFolders = mainFolder.getFolders();
  const collections = [];

  while (subFolders.hasNext()) {
    const folder = subFolders.next();
    const folderId = folder.getId();
    const folderName = folder.getName();
    const created = folder.getDateCreated();

    // Get cover image (first image in folder)
    const files = folder.getFilesByType(MimeType.JPEG);
    let coverImage = null;
    let photoCount = 0;

    // Count all images and get cover
    const allImages = folder.getFiles();
    while (allImages.hasNext()) {
      const file = allImages.next();
      const mimeType = file.getMimeType();
      if (mimeType.startsWith('image/')) {
        photoCount++;
        if (!coverImage) {
          coverImage = getFileUrl(file);
        }
      }
    }

    // Parse folder name for category (format: "Category - Event Name" or just "Event Name")
    const nameParts = folderName.split(' - ');
    const category = nameParts.length > 1 ? nameParts[0].trim() : 'Photography';
    const title = nameParts.length > 1 ? nameParts.slice(1).join(' - ').trim() : folderName;

    collections.push({
      id: folderId,
      title: title,
      category: category,
      folderName: folderName,
      coverImage: coverImage,
      photoCount: photoCount,
      createdAt: created.toISOString(),
    });
  }

  // Sort by creation date (newest first)
  collections.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return {
    success: true,
    collections: collections,
    total: collections.length
  };
}

function getPhotosInCollection(folderId) {
  const folder = DriveApp.getFolderById(folderId);
  const folderName = folder.getName();
  const files = folder.getFiles();
  const photos = [];

  while (files.hasNext()) {
    const file = files.next();
    const mimeType = file.getMimeType();

    // Only include images
    if (mimeType.startsWith('image/')) {
      photos.push({
        id: file.getId(),
        name: file.getName(),
        url: getFileUrl(file),
        thumbnailUrl: getThumbnailUrl(file),
        mimeType: mimeType,
        size: file.getSize(),
        createdAt: file.getDateCreated().toISOString(),
      });
    }
  }

  // Sort by name (to maintain order)
  photos.sort((a, b) => a.name.localeCompare(b.name));

  // Parse folder name
  const nameParts = folderName.split(' - ');
  const category = nameParts.length > 1 ? nameParts[0].trim() : 'Photography';
  const title = nameParts.length > 1 ? nameParts.slice(1).join(' - ').trim() : folderName;

  return {
    success: true,
    collection: {
      id: folderId,
      title: title,
      category: category,
      folderName: folderName,
    },
    photos: photos,
    total: photos.length
  };
}

function getFileUrl(file) {
  // Make file publicly accessible
  try {
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  } catch (e) {
    // File might already be shared or user might not have permission
  }

  const fileId = file.getId();
  // Use lh3.googleusercontent.com format for better compatibility
  return `https://lh3.googleusercontent.com/d/${fileId}=w1200`;
}

function getThumbnailUrl(file) {
  // Make file publicly accessible
  try {
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  } catch (e) {
    // File might already be shared or user might not have permission
  }

  const fileId = file.getId();
  // Thumbnail URL using lh3 format (better CORS support)
  return `https://lh3.googleusercontent.com/d/${fileId}=w400`;
}

// Test function - run this to verify your setup
function testGetCollections() {
  const result = getCollections();
  Logger.log(JSON.stringify(result, null, 2));
}
