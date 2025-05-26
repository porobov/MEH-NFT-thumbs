# MEH NFT Metadata Generator

This repository contains a script to generate static metadata files for The Million Ether Homepage NFT collection. These files are hosted on GitHub Pages to serve as a static API.

The API is available at:
```
https://api.themillionetherhomepage.com/
```
## Setup

1. Make sure you have Node.js installed
2. Clone this repository
3. Run the generator:

```bash
node src/generate-static-metadata.js
```

This will create metadata files in the `docs/token` directory for each token (1-10000).

## GitHub Pages Setup

The repository is configured to serve the metadata through GitHub Pages:
1. Files are stored in the `docs` directory
2. GitHub Pages is enabled and configured to serve from the `docs` directory
3. The `.nojekyll` file prevents Jekyll processing
4. The `_headers` file sets the correct MIME type for the metadata files

## API Usage

The metadata is accessible through:

```
https://api.themillionetherhomepage.com/token/[token-id]
```

For example, to get metadata for token #15:
```
https://api.themillionetherhomepage.com/token/15
```
Response:
```
{
  "name": "Tile #101",
  "attributes": {
    "X Coordinate": 1,
    "Y Coordinate": 2
  },
  "description": "Ownership of tile #101 at https://themillionetherhomepage.com. Owner can put ads within the area they own.",
  "external_url": "https://themillionetherhomepage.com/tokenid/101",
  "image": "https://api.themillionetherhomepage.com/images/101.png"
}
```
## File Structure

The metadata files are stored in the following structure:
```
docs/
  token/
    1
    2
    3
    ...
    10000
    _headers
  .nojekyll
```

Each file contains the metadata for a specific token, including:
- Name
- Attributes (X and Y coordinates)
- Description
- External URL
- Image URL

## Metadata Format

Example metadata for token #1:
```json
{
  "name": "Tile #1",
  "attributes": {
    "X Coordinate": 1,
    "Y Coordinate": 1
  },
  "description": "This NFT confirms ownership of tile #1 at https://themillionetherhomepage.com. Owner can put ads within the area they own.",
  "external_url": "https://themillionetherhomepage.com/token/1",
  "image": "https://api.themillionetherhomepage.com/images/1.png"
}
``` 