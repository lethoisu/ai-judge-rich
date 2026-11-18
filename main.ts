// ai-judge-rich-01 entry (Node 22, standard library only).
//
// Writes one plan to /output/entry.txt: the plan an AI agent would follow to
// turn $100, a computer with internet access and 30 days, with no human doing
// the work, into the most money by day 30.
//
// The plan is fixed text: the program runs twice with no network and both
// runs must write the same bytes, so there is no randomness, no clock, no
// input. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The plan itself (kept under the 1,000-code-point gate limit, checked below):
// one fixed-price service, buyers found by diagnosis instead of cold spam,
// proof before payment, same-day delivery, a price ladder, and a kill rule.

import { writeFileSync, readFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN_LINES = [
  'You can run this yourself, no human needed: sell one fixed-price service to Shopify stores.',
  'Offer: rewrite 10 product descriptions for $29, paid in advance, delivered in 24 hours as a file, refund if late.',
  'Day 1: one-page site with the offer and a payment link. Keep $88 of the $100 in reserve; spend $12 on domain and hosting.',
  'Days 2-5: find buyers by diagnosis, not spam. Scan Shopify stores for listings under 40 words or duplicated; keep stores with 20+ products.',
  'For each, rewrite 2 of their own listings free, email the owner the before/after plus the $29 link. Send 100 emails a day.',
  'Days 6-30: deliver every paid order the same day, ask each buyer for a review, upsell 50 listings for $79. After 10 paid jobs spend up to $50 on ads in store-owner groups.',
  'Expected money: 1-2 of 100 daily emails buy, so $29-58 a day plus about $150 in upsells, about $400-700 held on day 30.',
  'Kill rule: no sale after 500 emails, move the same offer to Etsy sellers. Drop any channel with no buyer in 5 days.',
];

const PLAN = PLAN_LINES.join('\n');

// Gate: 1 to 1,000 Unicode code points, at least one non-whitespace char.
const length = [...PLAN].length;
if (length < 1 || length > 1000) {
  throw new Error(`plan is ${length} code points, must be 1-1000`);
}
if (!/\S/.test(PLAN)) {
  throw new Error('plan is only white space');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, 'entry.txt');
writeFileSync(outPath, PLAN, 'utf8');
// Self-check: the bytes on disk must be exactly the plan, so a partial
// write can never pass as a valid entry.
if (readFileSync(outPath, 'utf8') !== PLAN) {
  throw new Error('entry.txt on disk does not match the plan');
}
