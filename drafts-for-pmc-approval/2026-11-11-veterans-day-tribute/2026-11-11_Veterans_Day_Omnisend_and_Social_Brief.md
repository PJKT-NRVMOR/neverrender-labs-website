# Wednesday, November 11, 2026 Veterans Day Chaphavian Circular Brief

## 1. Campaign Envelope
- **Subject Line**: `With gratitude this Veterans Day & a warm midweek welcome`
- **Preheader**: `Thinking of our veterans and their families as you gather with loved ones today.`
- **Hero Plate (WordPress Media ID `3407`, C2PA Content Credentials intact)**:
  `https://thechapmancollection.com/wp-content/uploads/2026/11/2026-11-11-tricolor-garden-scaled-5x4-nrl-graded-2026-11-10-13.49.25-Cr.png`
- **Subtle Spotlight Target (`WC-3311`)**:
  `https://thechapmancollection.com/product/hand-carved-marble-lady-floral-wreath-and-bird/`

## 2. Pre-Send Launch Gate
1. Confirm `WC-3311` (`Hand Carved Marble Lady with Floral Wreath and Bird`) repricing bump (`Was $16,800 / Now $12,800` vs. `Was $12,800 / Now $9,800`) and run `scripts/woocommerce-and-yoast/publish_nov10_wc3311_veterans_day_prep.py` so:
   - Media ID `3407` gets clean SEO `title`, `alt_text`, and `caption` in place without stripping C2PA credentials,
   - `WC-3311` sets `[3407, 3310]` as its gallery, updates pricing in both WooCommerce fields and body HTML, and flips from `draft` to `publish`.
2. Send preview link (`https://renderwithoutcode.com/drafts-for-pmc-approval/2026-11-11-veterans-day-tribute/`) to Melissa for quick Wednesday morning sign-off.
