# MEH NFT Metadata Generator

This repository contains a script to generate static metadata files for The Million Ether Homepage NFT collection. These files can be hosted on GitHub Pages to serve as a static API.

## Setup

1. Make sure you have Node.js installed
2. Clone this repository
3. Run the generator:

```bash
node scripts/generate-static-metadata.js
```

This will create a `static-metadata` directory containing JSON files for each token (1-10000).

## GitHub Pages Setup

1. Create a new GitHub repository
2. Push the generated `static-metadata` directory to the repository
3. Enable GitHub Pages in your repository settings
4. Set the source to the branch containing your files

## API Usage

Once deployed, you can access the metadata for any token using:

```
https://[your-github-username].github.io/[repo-name]/static-metadata/[token-id].json
```

For example, to get metadata for token #15:
```
https://[your-github-username].github.io/[repo-name]/static-metadata/15.json
```

## File Structure

The generated files will be in the following structure:
```
static-metadata/
  1.json
  2.json
  3.json
  ...
  10000.json
```

Each JSON file contains the metadata for a specific token, including:
- Name
- Attributes (X and Y coordinates)
- Description
- External URL
- Image URL 