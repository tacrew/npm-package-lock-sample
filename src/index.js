import { createHash } from 'node:crypto';

const message = 'Hello from pnpm security demo';
const digest = createHash('sha256').update(message).digest('hex');

console.log('Message:', message);
console.log('SHA-256 digest:', digest);
console.log('Use `pnpm audit` to check dependency vulnerabilities.');
