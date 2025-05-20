/**
 * Helper function to get the correct path for assets in both development and production
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path

  // For static exports, we need to ensure the path is correct
  // This handles both development and production environments
  return `/${cleanPath}`
}
