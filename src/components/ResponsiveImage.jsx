import React from "react";

export default function ResponsiveImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px",
  loading = "lazy",
  useLocalImages = false,
  maxWidth = "1920px",
  quality = 80,
  ...props
}) {
  if (useLocalImages) {
    // For local images, assume you have different sizes in public folder
    // e.g., hero-image-640.webp, hero-image-1024.webp, hero-image.webp
    const baseName = src.replace(/\.[^/.]+$/, ""); // Remove extension

    return (
      <picture className={className}>
        {/* WebP sources for modern browsers */}
        <source
          srcSet={`/${baseName}-640.webp 640w, /${baseName}-1024.webp 1024w`}
          sizes={sizes}
          media="(max-width: 1024px)"
          type="image/webp"
        />
        {/* Fallback JPEG sources */}
        <source
          srcSet={`/${baseName}-640.jpg 640w, /${baseName}-1024.jpg 1024w`}
          sizes={sizes}
          media="(max-width: 1024px)"
        />
        {/* Desktop WebP */}
        <source
          srcSet={`/${baseName}.webp`}
          type="image/webp"
        />
        {/* Fallback */}
        <img
          src={`/${baseName}.jpg`}
          alt={alt}
          loading={loading}
          className={`w-full max-w-${maxWidth} h-auto object-cover ${className.includes('rounded') ? '' : 'rounded-xl'} mx-auto`}
          {...props}
        />
      </picture>
    );
  }

  // For external images (like Unsplash), use optimized parameters
  return (
    <picture className={className}>
      {/* WebP sources for modern browsers */}
      <source
        srcSet={`${src}?w=640&h=480&fit=crop&auto=format&fm=webp&q=${quality} 640w, ${src}?w=1024&h=768&fit=crop&auto=format&fm=webp&q=${quality} 1024w`}
        media="(max-width: 1024px)"
        sizes={sizes}
        type="image/webp"
      />
      {/* JPEG sources for older browsers */}
      <source
        srcSet={`${src}?w=640&h=480&fit=crop&auto=format&q=${quality} 640w, ${src}?w=1024&h=768&fit=crop&auto=format&q=${quality} 1024w`}
        media="(max-width: 1024px)"
        sizes={sizes}
      />
      {/* Desktop WebP */}
      <source
        srcSet={`${src}?w=1920&h=1080&fit=crop&auto=format&fm=webp&q=${quality}`}
        type="image/webp"
      />
      {/* Fallback */}
      <img
        src={`${src}?w=1920&h=1080&fit=crop&auto=format&q=${quality}`}
        alt={alt}
        loading={loading}
        className={`w-full max-w-${maxWidth} h-auto object-cover ${className.includes('rounded') ? '' : 'rounded-xl'} mx-auto`}
        {...props}
      />
    </picture>
  );
}
