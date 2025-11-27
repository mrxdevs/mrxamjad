# API Environment Configuration

This project uses environment-based URLs for API endpoints to automatically switch between development and production environments.

## Environment Files

### `.env.local` (Development)
Used during local development (`npm run dev`):
```
NEXT_PUBLIC_API_BASE_URL=https://appsail-50035953162.development.catalystappsail.in
```

### `.env.production` (Production)
Used during production builds (`npm run build`):
```
NEXT_PUBLIC_API_BASE_URL=https://appsail-50035953162.catalystappsail.in
```

## API Routes

All API routes automatically use the correct environment:

- **Feedback API**: `${NEXT_PUBLIC_API_BASE_URL}/feedback/submit`
- **Newsletter API**: `${NEXT_PUBLIC_API_BASE_URL}/newsletter/subscribe`
- **Contact API**: `${NEXT_PUBLIC_API_BASE_URL}/contact/submit`

## Usage

### Development
```bash
npm run dev
```
- Uses `.env.local`
- API calls go to: `https://appsail-50035953162.development.catalystappsail.in`

### Production
```bash
npm run build
npm start
```
- Uses `.env.production`
- API calls go to: `https://appsail-50035953162.catalystappsail.in`

## Fallback

If the environment variable is not set, the application falls back to the production URL to ensure the app works even without environment configuration.

## Adding New API Endpoints

When adding new API routes, use the same pattern:

```typescript
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://appsail-50035953162.catalystappsail.in';
const response = await fetch(`${apiBaseUrl}/your-endpoint`, {
  // ... options
});
```
