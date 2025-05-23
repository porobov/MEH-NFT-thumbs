import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Constants
const TOTAL_TOKENS = 10000;
const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'token');
const HOST = 'https://api.themillionetherhomepage.com';

// Helper function from the original code
function blockXY(blockId) {
    let remainder = blockId % 100;
    let y;
    if (remainder === 0) {
        y = Math.floor(blockId / 100);
    } else {
        y = Math.floor(blockId / 100) + 1;
    }
    let x = blockId - ((y - 1) * 100);
    return [x, y];
}

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Generate metadata for each token
for (let tokenId = 1; tokenId <= TOTAL_TOKENS; tokenId++) {
    const [tileX, tileY] = blockXY(tokenId);
    const data = {
        'name': `Tile #${tokenId}`,
        'attributes': {
            'X Coordinate': tileX,
            'Y Coordinate': tileY,
        },
        'description': `This NFT confirms ownership of tile #${tokenId} at https://themillionetherhomepage.com. Owner can put ads within the area they own.`,
        'external_url': `https://themillionetherhomepage.com/token/${tokenId}`,
        'image': `${HOST}/images/${tokenId}.png`
    };

    // Write the metadata file
    const filePath = path.join(OUTPUT_DIR, `${tokenId}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

console.log(`Generated ${TOTAL_TOKENS} metadata files in ${OUTPUT_DIR}/`); 