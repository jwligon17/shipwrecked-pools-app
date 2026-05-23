#!/usr/bin/env node

import { existsSync, readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const requiredPaths = [
  'apps/mobile',
  'apps/admin',
  'apps/api',
  'packages/shared-types',
  'packages/api-client',
  'packages/ui',
  'packages/db',
  'docs/prompt-packs/STATUS_BOARD.md',
  '.env.example',
  'apps/mobile/.env.example',
  'apps/admin/.env.example',
  'apps/api/.env.example',
];

let hasError = false;

const logOk = (msg) => console.log(`OK: ${msg}`);
const logWarn = (msg) => console.log(`WARN: ${msg}`);
const logErr = (msg) => {
  hasError = true;
  console.log(`ERROR: ${msg}`);
};

const majorVersion = Number(process.versions.node.split('.')[0]);
if (majorVersion >= 20) {
  logOk(`Node.js ${process.versions.node}`);
} else {
  logErr(`Node.js 20+ required, found ${process.versions.node}`);
}

try {
  const pnpmVersion = execSync('pnpm --version', { stdio: ['ignore', 'pipe', 'pipe'] })
    .toString()
    .trim();
  logOk(`pnpm ${pnpmVersion}`);
} catch {
  logErr('pnpm is not installed or not in PATH');
}

for (const path of requiredPaths) {
  if (existsSync(path)) {
    logOk(`Exists: ${path}`);
  } else {
    logErr(`Missing required path: ${path}`);
  }
}

const envExample = readFileSync('.env.example', 'utf8');
if (envExample.includes('sk_live_') || envExample.includes('pk_live_') || envExample.includes('-----BEGIN')) {
  logErr('Potential real secret marker detected in .env.example');
} else {
  logOk('.env.example secret marker scan passed');
}

if (hasError) {
  console.log('\nWorkspace doctor found issues.');
  process.exit(1);
}

logWarn('No package install/typecheck/lint/test commands were run by this doctor.');
console.log('\nWorkspace doctor passed baseline checks.');
