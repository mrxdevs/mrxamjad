# Google Analytics Data API Setup Guide

This guide will help you set up the Google Analytics Data API to fetch real analytics data for your dashboard.

## Overview

Your analytics implementation now works as follows:
1. **Client-side**: Firebase Analytics tracks all user events automatically
2. **Server-side**: Google Analytics Data API fetches analytics data for the dashboard
3. **Dashboard**: Displays real data from Firebase Analytics via the API route

## Prerequisites

- Firebase project with Analytics enabled (✅ Already configured)
- Google Cloud Console access
- A few minutes to set up service account credentials

## Step-by-Step Setup

### 1. Enable Google Analytics Data API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project: **mrxamjad-portfolio**
3. Navigate to **APIs & Services** → **Enable APIs and Services**
4. Search for **"Google Analytics Data API"**
5. Click **Enable**

### 2. Create a Service Account

1. In Google Cloud Console, go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **Service Account**
3. Fill in the details:
   - **Name**: `analytics-dashboard-api`
   - **Description**: `Service account for fetching analytics data`
4. Click **Create and Continue**
5. Skip roles (click **Continue**)
6. Skip granting users access (click **Done**)

### 3. Generate Service Account Key

1. Click on the service account you just created
2. Go to the **Keys** tab
3. Click **Add Key** → **Create new key**
4. Choose **JSON** format
5. Click **Create** - a JSON file will download

> **⚠️ Important**: Keep this file secure! It contains sensitive credentials.

### 4. Get Your GA4 Property ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. Click ⚙️ **Admin** (bottom left)
4. Under **Property**, click **Property Settings**
5. Copy your **Property ID** (should be a number like `464633595`)

### 5. Grant Service Account Access to Analytics

1. Still in Google Analytics → **Admin**
2. Under **Property**, click **Property Access Management**
3. Click **+** (Add users)
4. Enter your service account email (found in the JSON file, looks like `analytics-dashboard-api@mrxamjad-portfolio.iam.gserviceaccount.com`)
5. Select **Viewer** role
6. Click **Add**

### 6. Configure Environment Variables

#### Option A: For Production/Vercel Deployment

1. Copy the contents of your service account JSON file
2. Minify it to a single line (remove all line breaks)
3. Add to your hosting platform's environment variables:
   ```
   GOOGLE_APPLICATION_CREDENTIALS={"type":"service_account","project_id":"mrxamjad-portfolio",...}
   GA4_PROPERTY_ID=464633595
   ```

#### Option B: For Local Development

1. Save the service account JSON file to your project root as `service-account-key.json`
2. Add to `.gitignore`:
   ```
   service-account-key.json
   ```
3. Create or update `.env.local`:
   ```env
   # Path to service account key file (local dev only)
   GOOGLE_APPLICATION_CREDENTIALS=./service-account-key.json
   
   # Your GA4 Property ID
   GA4_PROPERTY_ID=464633595
   ```

### 7. Update API Route (if using file path)

If using a file path locally, update `/src/app/api/analytics/route.ts`:

```typescript
const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});
```

### 8. Test the Integration

1. Restart your dev server: `npm run dev`
2. Visit `http://localhost:3000/analytics`
3. You should see real data from Firebase Analytics!

## Troubleshooting

### "Google Analytics Data API not configured" Message

- Verify service account JSON is correctly added to environment variables
- Check that `GA4_PROPERTY_ID` is set correctly
- Restart your dev server after adding environment variables

### "Permission denied" or "403" Errors

- Make sure service account email is added to Google Analytics with Viewer role
- Wait a few minutes for permissions to propagate

### No Data Showing

- **Fresh project**: If your Firebase Analytics is new, it may take 24-48 hours for data to be available via the Data API
- **Development**: Use Firebase Analytics DebugView to see real-time events during development
- **Check Firebase Console**: Verify events are being received in Firebase Console → Analytics → Events

## What Data Is Available

The dashboard fetches:
- **Total Page Views** (last 30 days)
- **Total Events** (last 30 days)
- **Top Pages** (top 10 most visited pages)
- **Recent Events** (last 7 days)

All data comes directly from Firebase Analytics via the Google Analytics Data API!

## Production Deployment

When deploying to production:
1. Add environment variables to your hosting platform
2. Make sure `GOOGLE_APPLICATION_CREDENTIALS` is the JSON string (minified)
3. Set `GA4_PROPERTY_ID` to your property ID
4. Deploy and test

## Next Steps

- Monitor your analytics in Firebase Console
- Customize the dashboard metrics in `/src/app/api/analytics/route.ts`
- Add more event tracking throughout your site

## Security Note

> **🔒 Security**: The service account key grants access to your Analytics data. Never commit it to git or share it publicly. In production, use environment variables or secret management services.
