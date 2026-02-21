import { createRequire } from 'module';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const puppeteer = require('C:/Users/styso/AppData/Local/Temp/puppeteer-test/node_modules/puppeteer');

const CHROME_HEADLESS_SHELL = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const SCREENSHOTS_DIR = join(__dirname, 'temporary screenshots');

if (!existsSync(SCREENSHOTS_DIR)) {
  mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

const [,, url, label] = process.argv;

if (!url) {
  console.error('Usage: node screenshot.mjs <url> [label]');
  process.exit(1);
}

function getNextFilename(label) {
  const existing = existsSync(SCREENSHOTS_DIR)
    ? readdirSync(SCREENSHOTS_DIR).filter(f => f.endsWith('.png'))
    : [];

  let n = 1;
  while (true) {
    const name = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
    if (!existing.includes(name)) return name;
    n++;
  }
}

const filename = getNextFilename(label);
const outputPath = join(SCREENSHOTS_DIR, filename);

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_HEADLESS_SHELL,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    const fullPage = label === 'full' || process.argv.includes('--full');
    await page.screenshot({ path: outputPath, fullPage });
    console.log(`Screenshot saved: ${outputPath}`);
  } finally {
    await browser.close();
  }
})();
