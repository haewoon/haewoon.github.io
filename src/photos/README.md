# Photos

Drop image files here, one folder per album:

    src/photos/<album-slug>/*.jpg|png

For example:

    src/photos/kyoto-2025/001.jpg
    src/photos/kyoto-2025/002.jpg

Images live under `src/` (not `public/`) so Astro's build can resize them and
emit webp/avif with a responsive srcset. Originals are never served as-is.

Folder names become URLs, so keep them lowercase with hyphens.
