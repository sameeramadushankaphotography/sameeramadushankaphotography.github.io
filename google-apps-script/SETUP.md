# Google Drive Gallery Setup Instructions

## Overview
This guide will help you connect your Google Drive to your photography website so that new photo collections automatically appear on your site.

## How It Works
1. You create folders in Google Drive (one folder = one collection)
2. Google Apps Script reads your folders and serves them as an API
3. Your website fetches from this API and displays the collections

---

## Step 1: Prepare Your Google Drive

### Create a Main Portfolio Folder
1. Open [Google Drive](https://drive.google.com)
2. Create a new folder called **"Portfolio"** (or any name you prefer)
3. Open this folder and copy the **Folder ID** from the URL:
   ```
   https://drive.google.com/drive/folders/1ABC123xyz_YOUR_FOLDER_ID
                                          ↑ This is your Folder ID
   ```

### Organize Your Photos
Inside your Portfolio folder, create subfolders for each photoshoot:
```
Portfolio/
├── Wedding - Kasun & Nethmi Wedding/
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ...
├── Pre-shoot - Sunset Beach Session/
│   └── ...
├── Party - Birthday Celebration/
│   └── ...
└── Model - Fashion Studio Shoot/
    └── ...
```

**Folder Naming Convention:**
- Format: `Category - Event Name`
- Examples:
  - `Wedding - Kasun & Nethmi Wedding`
  - `Pre-shoot - Beach Sunset Session`
  - `Party - John's Birthday`
  - `Model - Summer Fashion Collection`
  - `Studio - Product Photography`

The first image in each folder becomes the cover image.

---

## Step 2: Set Up Google Apps Script

### Create the Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click **"New Project"**
3. Delete the default code
4. Copy the entire content from `Code.gs` file in this folder
5. Paste it into the script editor

### Configure the Script
1. Find this line at the top of the code:
   ```javascript
   const FOLDER_ID = 'YOUR_GOOGLE_DRIVE_FOLDER_ID_HERE';
   ```
2. Replace `YOUR_GOOGLE_DRIVE_FOLDER_ID_HERE` with your actual Portfolio folder ID

### Deploy the Script
1. Click **Deploy** > **New Deployment**
2. Click the gear icon next to "Select type" and choose **"Web app"**
3. Fill in the settings:
   - **Description:** "Photo Gallery API"
   - **Execute as:** "Me"
   - **Who has access:** "Anyone"
4. Click **Deploy**
5. **Important:** Copy the **Web app URL** that appears

The URL looks like:
```
https://script.google.com/macros/s/AKfycbx...long-string.../exec
```

### Test the Script
Open the URL in your browser. You should see JSON data with your collections.

---

## Step 3: Connect to Your Website

### Option A: Environment Variable (Recommended)
1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your Apps Script URL:
   ```
   VITE_GALLERY_API_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
   ```
3. Restart your development server

### Option B: Direct Configuration
Edit `src/config/gallery.ts` and add your URL:
```typescript
export const GALLERY_CONFIG = {
  apiUrl: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec',
  demoMode: false,
  cacheDuration: 5 * 60 * 1000,
};
```

---

## Step 4: Adding New Collections

Once set up, adding new photos is simple:

1. Open your Portfolio folder in Google Drive
2. Create a new folder with the naming format: `Category - Event Name`
3. Upload your photos to this folder
4. Done! Your website will automatically show the new collection

**Note:** Changes may take a few minutes to appear due to caching.

---

## Troubleshooting

### "No collections found"
- Make sure your Portfolio folder has subfolders with images
- Check that the Folder ID is correct in the Apps Script

### "Failed to load collections"
- Verify the Apps Script URL is correct
- Make sure the script is deployed as "Anyone" can access

### Images not loading
- The script automatically makes images viewable
- Large images may take longer to load

### Need to update the script?
1. Go to [Google Apps Script](https://script.google.com)
2. Find your project
3. Make changes
4. Click **Deploy** > **Manage Deployments**
5. Click the edit icon on your deployment
6. Select **"New version"** and click **Deploy**

---

## Tips for Best Results

1. **Image Quality:** Upload high-quality JPEGs (Google Drive compresses them automatically)
2. **Naming:** Name your files with numbers (01.jpg, 02.jpg) to control the order
3. **Cover Image:** The first image alphabetically becomes the cover
4. **Categories:** Use consistent category names for better organization:
   - Wedding
   - Pre-shoot
   - Party
   - Model
   - Studio
   - Outdoor
   - Portrait

---

## Support

If you have issues, check:
1. Google Apps Script console for errors (View > Logs)
2. Browser console for JavaScript errors
3. Network tab to see API responses
