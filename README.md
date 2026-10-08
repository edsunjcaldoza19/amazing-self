# Amazing Self

## Website overview

Amazing Self is a static personal development website with course information, free resources, and articles about happiness, mindset, success, and wealth. It brings the saved website pages into a shared HTML, CSS, and JavaScript project while preserving their content and established layouts.

The repository contains 25 pages: eight root pages and 17 blog articles. Images, favicons, fonts, stylesheets, and scripts are stored locally. Forms and selected media connect to the original online services.

## Pages and features

| Page | Purpose |
| --- | --- |
| [Home](index.html) | Amazing Self course information and purchase links |
| [Contact](contact.html) | Contact form |
| [Member login](member.html) | Login and password-recovery forms |
| [Privacy](privacy.html) | Privacy policy |
| [Cookies](cookies.html) | Cookie policy |
| [GDPR](gdpr.html) | Data protection information |
| [Blog](blog.html) | First blog listing |
| [Blog — page 2](blog-page-2.html) | Second blog listing |
| [Blog articles](blog/) | 17 individual article pages |

The two blog listings link to each other and to the saved articles. Article pages retain previous/next navigation and existing comment anchors. Saved comments are read-only; comment submission and reply controls have been removed.

Navigation between available pages uses local relative paths. All pages share the existing favicon assets. Responsive navigation adapts to smaller screens, and the blog retains its Astra layout with a breakpoint around 921px.

## Project structure

```text
.
├── index.html
├── contact.html, member.html
├── privacy.html, cookies.html, gdpr.html
├── blog.html, blog-page-2.html
├── blog/                     # 17 article HTML files
├── assets/
│   ├── css/main.css          # Shared and scoped page styles
│   ├── js/main.js            # Shared behavior and page scripts
│   ├── js/vendor/astra-blog.js
│   ├── images/               # Images, avatars, and favicons
│   └── fonts/                # Local font files
├── class-map.json
└── README.md
```

`class-map.json` records the legacy-to-current class names for maintenance and future integrations. The HTML, CSS, and JavaScript already use the mapped classes; the browser does not load this file.

## Local preview

From the repository root, start a simple static server:

```bash
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) to view the homepage. Keep the terminal running while previewing; press `Ctrl+C` to stop the server.

Python must be installed to use this command. The website itself has no package installation, build step, or local application server requirement. Another static file server can also serve the same files.

## Deployment

The repository is [edsunjcaldoza19/amazing-self](https://github.com/edsunjcaldoza19/amazing-self).

Configure static hosting to publish the repository root, with `index.html` as the homepage and no build command. Include all root HTML pages, the article HTML files, and their referenced assets. Preserve the folder structure and filename casing so relative links continue to resolve.

Include responsive image candidates and font fallback files when selecting assets for upload. The README and class mapping provide repository documentation; the website runs from the HTML and its linked assets.

After publishing, check navigation, images, favicons, fonts, mobile menus, form destinations, and video embeds.

## Maintenance and online services

Root pages reference shared assets through `assets/` and article pages reference them through `../assets/`. Articles link to sibling articles by filename and to root pages through `../`.

Keep styles in `assets/css/main.css` and shared behavior in `assets/js/main.js`. Blog styles are scoped to `html[data-site-section="blog"]`, with separate listing/article variants and blog-specific font families. Use a browser with CSS `@scope` support. The local Astra vendor script loads on blog pages only.

Apply the class mapping consistently across HTML class attributes, CSS selectors, and JavaScript hooks. Preserve IDs and comment fragments when updating navigation.

Contact and member forms submit to the original Amazing Self endpoints. Purchase, download, audio, and affiliate destinations remain external. Two articles use online YouTube embeds. Four articles—[Affirmations](blog/affirmations.html), [Be Happy](blog/behappy.html), [Subconscious](blog/subconscious.html), and [Goals](blog/goals.html)—link to their original articles in place of unavailable legacy players. These services require an internet connection; this repository supplies the static pages.
