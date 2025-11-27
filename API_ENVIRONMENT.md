# API Environment Configuration

This project uses environment variables for API endpoint configuration, defaulting to the development URL.

## Environment File

### `.env.local` (Development)
Used during local development (`npm run dev`):
```
NEXT_PUBLIC_API_BASE_URL=https://appsail-50035953162.development.catalystappsail.in
```

## API Routes

All API routes use the environment variable with development URL as fallback:

- **Feedback API**: `${NEXT_PUBLIC_API_BASE_URL}/feedback/submit`
- **Newsletter API**: `${NEXT_PUBLIC_API_BASE_URL}/newsletter/subscribe`
- **Contact API**: `${NEXT_PUBLIC_API_BASE_URL}/contact/submit`

## Usage

### Development (Default)
```bash
npm run dev
```
- Uses `.env.local` or falls back to development URL
- API calls go to: `https://appsail-50035953162.development.catalystappsail.in`

### Production
To use production API, set the environment variable in your deployment:
```bash
NEXT_PUBLIC_API_BASE_URL=https://appsail-50035953162.catalystappsail.in
```

## Fallback

If the environment variable is not set, the application falls back to the development URL: `https://appsail-50035953162.development.catalystappsail.in`

## Adding New API Endpoints

When adding new API routes, use the same pattern:

```typescript
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://appsail-50035953162.development.catalystappsail.in';
const response = await fetch(`${apiBaseUrl}/your-endpoint`, {
  // ... options
});
```
