import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

const standaloneRoot = resolve('.next/standalone');
const databaseUrl = `file:${resolve(standaloneRoot, 'db/custom.db').replaceAll('\\', '/')}`;

const child = spawn(process.execPath, ['server.js'], {
  cwd: standaloneRoot,
  env: {
    ...process.env,
    DATABASE_URL: process.env.DATABASE_URL ?? databaseUrl,
    NODE_ENV: 'production',
  },
  stdio: 'inherit',
});

child.on('exit', (code, signal) => {
  process.exitCode = code ?? (signal ? 1 : 0);
});

child.on('error', (error) => {
  console.error(error);
  process.exitCode = 1;
});
