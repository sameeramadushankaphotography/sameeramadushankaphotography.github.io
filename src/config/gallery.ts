/**
 * Gallery Configuration
 *
 * SETUP: After deploying your Google Apps Script, paste the deployment URL here.
 * The URL should look like: https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
 */

export const GALLERY_CONFIG = {
  // Replace this with your Google Apps Script deployment URL
  apiUrl: import.meta.env.VITE_GALLERY_API_URL || '',

  // Fallback to demo mode if no API URL is configured
  demoMode: !import.meta.env.VITE_GALLERY_API_URL,

  // Cache duration in milliseconds (5 minutes)
  cacheDuration: 5 * 60 * 1000,
};
