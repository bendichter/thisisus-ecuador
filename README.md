# This Is Us Ecuador

Static one-page site for Giovanni's private tours of Quito, the Equator and the Mindo cloud forest.

## Files

- `index.html`, `styles.css`, `script.js`: the whole site. No build step.
- `images/`: photos, resized to 1600 px and stripped of EXIF (including GPS).
- `video/`: three short muted loops (hummingbirds, butterfly garden, cloud forest), H.264, 5 to 7 MB each.
- `favicon.svg`: the flag stripe.

## Preview locally

Any static server works. Videos need a server that supports HTTP range requests, so use `serve` rather than Python's built-in server:

```
npx serve -l 8765 .
```

Then open http://localhost:8765.

## Deploy

The site is served by GitHub Pages from the `main` branch of github.com/bendichter/thisisus-ecuador at https://bendichter.com/thisisus-ecuador/. Push to `main` and it redeploys in about a minute. Nothing needs to be compiled.

To move it to Giovanni's own domain, add a `CNAME` file with the domain and point the domain's DNS at GitHub Pages.

## Before going live

- Replace `images/logo-hat.jpg` in the Giovanni section with a portrait of Giovanni (square crop, shoulders up).
- Ask Giovanni to check the WhatsApp number (+593 97 939 8449, read from his business profile), the price wording under "Good to know", and the historical claims in the itinerary copy.
- Two guests appear in several photos and one video. Confirm they are happy to be on the site.
- Add real reviews when he has them. None are on the page because none were provided.
