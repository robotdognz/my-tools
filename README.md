# My Tools

A personal collection of useful web tools that work offline as a Progressive Web App (PWA).

## 🚀 Use It

**[Open My Tools](https://rmmarco.github.io/my-tools/)**

To see if there are any changes that haven't gone live yet, you can check here [Actions](https://github.com/rmmarco/my-tools/actions)

### Install on Your Phone

1. Open the link above in Chrome (Android) or Safari (iOS)
2. Tap the menu → "Add to Home screen"
3. It now works offline like a native app

---

## 🛠 Tools Included

| Tool | Description |
|------|-------------|
| [Preference Sorter](tools/preference-sorter.html) | Rank a list of options through pairwise comparisons using smart adaptive questioning |

---

## 📁 How It Works

```
/
├── index.html          # Main launcher page with links to all tools
├── manifest.json       # PWA config (name, icons, theme color)
├── sw.js               # Service worker for offline caching
├── icon-192.png        # App icon (small)
├── icon-512.png        # App icon (large)
└── tools/
    └── preference-sorter.html   # Each tool is a standalone HTML file
```

### Adding a New Tool

1. Create a new `.html` file in `tools/` (self-contained with all CSS/JS inline)

2. Add a link to `index.html`:
   ```html
   <a href="tools/my-new-tool.html" class="block p-4 bg-white rounded-xl shadow-sm">
     <div class="font-semibold text-gray-800">My New Tool</div>
     <div class="text-sm text-gray-500">Description of what it does</div>
   </a>
   ```

3. Add the file to the cache list in `sw.js`:
   ```js
   const ASSETS_TO_CACHE = [
     '/',
     '/index.html',
     '/tools/preference-sorter.html',
     '/tools/my-new-tool.html',  // ← add this
     'https://cdn.tailwindcss.com'
   ];
   ```

4. Bump the cache version in `sw.js` to force an update:
   ```js
   const CACHE_NAME = 'my-tools-v2';  // ← increment this
   ```

5. Push to GitHub — changes deploy automatically

### Forcing an Update on Your Phone

After pushing changes, the service worker will update automatically on the next visit. If you want to force it immediately:

1. Open the app
2. Close it completely
3. Reopen it twice

Or clear the site data in your browser settings.

---

## 🔧 Initial Setup

If you're setting this up for the first time:

1. Fork or clone this repo

2. Enable GitHub Pages:
   - Go to Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Click Save

3. Wait 1-2 minutes for deployment

4. Update the URL in this README to match your username

5. (Optional) Convert the `.svg` icons to `.png` for better compatibility

---

## 📝 Notes

- All tools are single-file HTML with inline CSS/JS for simplicity
- Uses [Tailwind CSS](https://tailwindcss.com) via CDN for styling
- Uses [React](https://react.dev) via CDN for interactive tools
- Works fully offline once cached
- No build step, no dependencies, no server required
