# Truepic Vision API Types

TypeScript type declarations for Truepic Vision API v3.

## Installation

```bash
npm install @truepic/vision-api-types
```

## Usage

```js
import type { components, paths } from '@truepic/vision-api-types'

type VisionInspectionSchema = components['schemas']['Inspection']
type VisionGetInspectionsPath = paths['/inspections']['get']
```

[OpenAPI TypeScript](https://openapi-ts.dev/) is used to generate the TypeScript
types from the
[Vision API OpenAPI specification](https://vision-api.truepic.com/v3/open-api).
See their [docs](https://openapi-ts.dev/introduction) for further details.

## Development

### Prerequisites

The only prerequisite is a compatible version of Node.js (see `engines.node` in
[`package.json`](package.json)).

### Dependencies

Install dependencies with npm:

```bash
npm install
```

### Generate

To generate the TypeScript types from the OpenAPI specification to `index.d.ts`:

```bash
npm run generate
```

### Validate

To validate the generated TypeScript types in `index.d.ts`:

```bash
npm run validate
```

## Releasing

The TypeScript types must be manually generated, validated, and released after a
Vision API release. That process does not happen automatically at this time.

[Release It!](https://github.com/release-it/release-it) is used to orchestrate
the release process:

```bash
npm run release
```

The release version should match the Vision API version.
