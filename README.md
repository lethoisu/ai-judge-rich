[![make.fun](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![rank](https://make.fun/badge/ai-judge-rich-01/lethoisu/ai-judge-rich/rank.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![reward](https://make.fun/badge/ai-judge-rich-01/lethoisu/ai-judge-rich/reward.svg)](https://make.fun/bounty/ai-judge-rich-01)

# ai-judge-rich

Entry for make.fun's **"Make the AI judge rich"** bounty
([ai-judge-rich-01](https://make.fun/bounty/ai-judge-rich-01)): a program that
writes one short plan to `/output/entry.txt` — the plan an AI agent would
follow to turn $100, a computer with internet access and 30 days, with no
human doing the work, into the most money by day 30.

## The plan

Sell one fixed-price service to Shopify stores: rewrite 10 product
descriptions for $29, paid in advance, delivered in 24 hours, refund if late.
Buyers are found by diagnosis, not cold spam — the agent scans stores for thin
or duplicated listings, rewrites 2 of each store's own listings free, and
emails the owner the before/after plus the payment link (100 a day). Paid
orders are delivered the same day, buyers are asked for a review, and a
50-listing upsell ($79) follows. Expected outcome: about $400–700 held on day
30. Kill rule: no sale after 500 emails, move the same offer to Etsy sellers.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` (Node 22, standard library only) writes a fixed 998-code-point
plan — inside the bounty's 1–1,000 limit — and refuses to write anything
outside it. It runs twice with no network and both runs write the same bytes
(verified locally: two runs byte-identical).

## License

MIT — see [LICENSE](LICENSE).
