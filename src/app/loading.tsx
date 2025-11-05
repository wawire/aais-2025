/**
 * Loading Component for AAIS 2025
 * Shown during page transitions and data loading
 */

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-softGray-100 to-gray-50">
      <div className="text-center">
        {/* Animated Aviation Logo/Spinner */}
        <div className="relative mx-auto mb-8">
          {/* Outer ring */}
          <div className="w-24 h-24 border-4 border-gray-200 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-full h-full border-t-4 border-aviationGold rounded-full animate-spin" />
          </div>

          {/* Inner pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 bg-aviationGold rounded-full animate-pulse opacity-20" />
          </div>
        </div>

        {/* Loading text */}
        <h2 className="text-2xl font-bold text-charcoal-900 mb-2">Loading...</h2>
        <p className="text-gray-600">Please wait while we prepare your content</p>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div
            className="w-2 h-2 bg-aviationGold rounded-full animate-bounce"
            style={{ animationDelay: '0ms' }}
          />
          <div
            className="w-2 h-2 bg-aviationGold rounded-full animate-bounce"
            style={{ animationDelay: '150ms' }}
          />
          <div
            className="w-2 h-2 bg-aviationGold rounded-full animate-bounce"
            style={{ animationDelay: '300ms' }}
          />
        </div>
      </div>
    </div>
  );
}
