import { spawn } from 'child_process';

const server = spawn('npm', ['run', 'dev', '--', '--port', '3000'], {
  stdio: 'inherit',
  shell: true,
  cwd: import.meta.dirname,
});

server.on('error', (err) => {
  console.error('Failed to start dev server:', err);
  process.exit(1);
});

process.on('SIGINT', () => server.kill('SIGINT'));
process.on('SIGTERM', () => server.kill('SIGTERM'));
