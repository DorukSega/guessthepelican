# Guess the Pelican

A zero-build static web game inspired by Simon Willison's [pelican-on-a-bicycle LLM benchmark](https://simonwillison.net/2024/Oct/25/pelicans-on-a-bicycle/).

Players are shown an AI model name and choose which of three model-generated illustrations matches it. Each game contains 10 randomly selected rounds followed by a bonus round that asks players to match three same-model outputs to their reasoning effort levels. The game also includes streak bonuses, keyboard controls, a locally stored personal best, and a copyable result.

The main playable collection is a curated set of 40 recognizable benchmark outputs. It spans major OpenAI, Anthropic and Google releases; Mistral, xAI and Meta; and Chinese model families from Alibaba (Qwen), DeepSeek, Zhipu AI (GLM), Moonshot AI (Kimi), and Tencent (Hunyuan). Experimental snapshots and near-duplicate size variants are intentionally left out of the main game. Curated effort-level variants for Claude Fable 5.1, Claude Opus 4.8, and Qwen 3.8 Flash Next power the randomized bonus round.

## Run it

Open `index.html` directly, or serve the folder with any static server:

```bash
python3 -m http.server 4173
```

Then visit <http://localhost:4173>.

There is no package install or build step.

## Add another pelican

1. Put the SVG, PNG, JPG or WebP image in `assets/pelicans/`.
2. Add one `{ model, file }` entry to the `PELICANS` array at the top of `app.js`.

The file is loaded through an `<img>` element. The game constrains each asset to a padded, clipped stage so illustrations with loose SVG bounds cannot spill into the answer caption.

## Data source

The original 22 examples are stored locally from Simon Willison's public [pelican-bicycle gallery](https://github.com/simonw/pelican-bicycle). Later examples are local copies of benchmark images published under his [pelican-riding-a-bicycle archive](https://simonwillison.net/tags/pelican-riding-a-bicycle/). The gallery was generated with the prompt:

> Generate an SVG of a pelican riding a bicycle
