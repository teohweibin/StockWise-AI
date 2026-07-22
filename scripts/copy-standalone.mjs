import { cp, mkdir, stat } from 'node:fs/promises';

const sourceStatic = '.next/static';
const standaloneRoot = '.next/standalone';

await stat(standaloneRoot);
await mkdir(`${standaloneRoot}/.next`, { recursive: true });
await cp(sourceStatic, `${standaloneRoot}/.next/static`, { recursive: true });
await cp('public', `${standaloneRoot}/public`, { recursive: true });
await cp('db', `${standaloneRoot}/db`, { recursive: true });
