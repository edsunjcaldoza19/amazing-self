# Remote downloadable files

Source audit: **2026-10-08**, in the original Amazing Self project.

Checked all **25 created HTML pages** and both shared/vendor JavaScript files. Found **four unique remote file links: three PDFs and one MP3**. No local copies of these four files are present in the project.

This inventory records links found in the source files. Remote availability, response types, and file contents were not checked.

## File downloads

| Resource | Type | Filename | Remote download URL | Referenced from |
| --- | --- | --- | --- | --- |
| 14 Secrets to Attaining the Life of Your Dreams | PDF | `14secrets.pdf` | [Download](https://www.amazingself.com/downloads/?f=14secrets.pdf) | [blog/14secrets.html](blog/14secrets.html) — line 258 |
| How to Be Happier, Wealthier, and Have People Like You More | PDF | `happierwealthier.pdf` | [Download](https://amazingself.com/downloads/?f=happierwealthier.pdf) | [blog/happierwealthier.html](blog/happierwealthier.html) — line 258 |
| 20 Traits of the Millionaire Mindset | PDF | `20traitsmillionaires.pdf` | [Download](https://www.amazingself.com/downloads/?f=20traitsmillionaires.pdf) | [blog/happierwealthier.html](blog/happierwealthier.html) — line 312 |
| Online Wealth Creation Audio Interview | MP3 | `eben1.mp3` | [Download](https://www.gatormatt.com/amazingself/eben1.mp3) | [blog/online-wealth-creation-audio-interview.html](blog/online-wealth-creation-audio-interview.html) — line 239 |

The PDF filenames are passed through the original `/downloads/?f=` endpoint. The MP3 is linked directly from gatormatt.com.

## Related software download page

| Destination | URL | Referenced from |
| --- | --- | --- |
| Adobe Acrobat Reader download page | [Adobe Reader](https://get.adobe.com/reader/) | [blog/14secrets.html](blog/14secrets.html) — line 277<br>[blog/happierwealthier.html](blog/happierwealthier.html) — line 274<br>[blog/happierwealthier.html](blog/happierwealthier.html) — line 330 |

The Adobe link opens a software download page; it does not identify a specific installer file in this project.

Checkout links, form actions, YouTube embeds, video fallback links, and general external navigation are outside this file-download list. The pages and their links were unchanged during the audit.
