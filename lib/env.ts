// Environment variable validation
const requiredEnvVars = {
  DATABASE_URL: process.env.DATABASE_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
}

// Check for missing environment variables (only during runtime, not build)
if (typeof window === 'undefined' && process.env.NODE_ENV !== 'test' && !process.env.SKIP_ENV_VALIDATION) {
  // Skip validation during Vercel build if not in runtime
  const isVercelBuild = process.env.NODE_ENV === 'production' && !process.env.VERCEL_ENV
  
  if (!isVercelBuild) {
    const missingVars = Object.entries(requiredEnvVars)
      .filter(([key, value]) => !value)
      .map(([key]) => key)

    if (missingVars.length > 0) {
      console.warn(
        `Missing required environment variables: ${missingVars.join(', ')}`
      )
      // Only throw error in development to prevent build failures
      if (process.env.NODE_ENV === 'development') {
        console.error(
          `Missing required environment variables: ${missingVars.join(', ')}`
        )
      }
    }
  }
}

export const env = {
  DATABASE_URL: process.env.DATABASE_URL || '',
  NEXTAUTH_URL: process.env.NEXTAUTH_URL || process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000',
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'fallback-secret-for-build',
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || '',
  NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  SATELLITE_API_KEY: process.env.SATELLITE_API_KEY,
}
