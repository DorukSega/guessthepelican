# Guess the Pelican

A static web game built with model-generated artwork from Simon Willison's [pelican-on-a-bicycle LLM benchmark](https://simonwillison.net/2024/Oct/25/pelicans-on-a-bicycle/).

[Play Guess the Pelican](https://doruksega.github.io/guessthepelican/)

Players are shown an AI model name and choose which of three model-generated illustrations matches it. Each game contains 10 randomly selected rounds followed by a bonus round that asks players to match three same-model outputs to their reasoning effort levels. The game also includes streak bonuses, keyboard controls, a locally stored personal best, and a copyable result.

The main playable collection is a curated set of 40 recognizable benchmark outputs. It spans major OpenAI, Anthropic and Google releases; Mistral, xAI and Meta; and Chinese model families from Alibaba (Qwen), DeepSeek, Zhipu AI (GLM), Moonshot AI (Kimi), and Tencent (Hunyuan). Experimental snapshots and near-duplicate size variants are intentionally left out of the main game. Curated effort-level variants for Claude Fable 5.1, Claude Opus 4.8, and Qwen 3.8 Flash Next power the randomized bonus round.

## Credit

Simon Willison created and popularized the “Generate an SVG of a pelican riding a bicycle” benchmark and collected the model outputs used by this game. The original examples come from his public [pelican-bicycle gallery](https://github.com/simonw/pelican-bicycle), with later examples sourced from his ongoing [pelican-riding-a-bicycle archive](https://simonwillison.net/tags/pelican-riding-a-bicycle/).

This project adds the game interface, scoring, curation, and reasoning-level bonus round around Simon's collection. Credit for the benchmark concept and source artwork belongs to Simon and the models he tested.

## Add another pelican

1. Put the SVG, PNG, JPG or WebP image in `assets/pelicans/`.
2. Add one `{ model, file }` entry to the `PELICANS` array at the top of `app.js`.

The file is loaded through an `<img>` element. The game constrains each asset to a padded, clipped stage so illustrations with loose SVG bounds cannot spill into the answer caption.
