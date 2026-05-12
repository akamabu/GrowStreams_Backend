# @growstreams/sdk

TypeScript SDK for interacting with the GrowStreams REST API on Vara Network.

## Installation

```bash
npm install @growstreams/sdk
```

## Usage

```ts
import { GrowStreams } from '@growstreams/sdk';

const client = new GrowStreams({
  baseUrl: 'https://growstreams-core-production.up.railway.app',
});

const health = await client.health();
console.log(health.status);

const { total } = await client.streams.total();
console.log(`Total streams: ${total}`);
```

## Main helpers

- `health()` — API health check
- `streams.*` — stream config, creation, pause/resume/stop, balances
- `vault.*` — deposits, withdrawals, allocations
- `splits.*` — split group helpers
- `permissions.*` — delegation helpers
- `bounty.*` — bounty stream helpers

## Requirements

- Node.js 20+
- Runtime with `fetch` support
