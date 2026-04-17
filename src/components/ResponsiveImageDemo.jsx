import React from "react";
import ResponsiveImage from "./ResponsiveImage";

export default function ResponsiveImageDemo() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold text-center mb-8">Responsive Image Demo</h2>

      {/* Example 1: Hero-style background */}
      <div className="relative h-64 rounded-lg overflow-hidden">
        <ResponsiveImage
          src="/hero-image"
          alt="Hero background image"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h3 className="text-white text-xl font-bold">Hero Background</h3>
        </div>
      </div>

      {/* Example 2: Content image */}
      <div className="max-w-md mx-auto">
        <ResponsiveImage
          src="/content-image"
          alt="Content image example"
          className="rounded-lg shadow-lg"
        />
        <p className="text-center mt-4 text-gray-600">
          This image automatically loads the appropriate size based on screen width
        </p>
      </div>

      {/* Usage Instructions */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">How to Use Responsive Images:</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>Create multiple sizes of your image (e.g., image-640.jpg, image-1024.jpg, image.jpg)</li>
          <li>Place them in the <code className="bg-gray-200 px-1 rounded">public/</code> folder</li>
          <li>Use the ResponsiveImage component with the base image name</li>
          <li>The component automatically selects the best size for each device</li>
        </ol>
      </div>
    </div>
  );
}
