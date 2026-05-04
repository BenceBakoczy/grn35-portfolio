# grn.35 — make project Vercel-independent

- [ ] Inspect current image URLs in client/src/pages/Home.tsx
- [ ] Find originals in /home/ubuntu/webdev-static-assets/
- [ ] Copy 6 photos into client/src/assets/ (Vite imports them, hashes filenames at build, fingerprints for caching)
- [ ] Update Home.tsx: replace remote /manus-storage/ URLs with `import` statements at top of file
- [ ] Run pnpm build to verify no error and assets emit into dist/public/assets/
- [ ] Quick visual check via dev server preview
- [ ] Save webdev checkpoint
- [ ] Brief the user with deploy instructions for Vercel (CLI + drag-and-drop + GitHub paths)
