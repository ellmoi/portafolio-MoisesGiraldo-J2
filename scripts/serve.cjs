const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };
http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400).end(); return; }
  const relative = pathname === '/' ? 'index.html' : pathname.slice(1);
  const file = path.resolve(root, relative);
  const safe = file.startsWith(root + path.sep) && !relative.split(/[\\/]/).some(part => part.startsWith('.'));
  if (!safe || !types[path.extname(file)] || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404).end('No encontrado'); return;
  }
  res.writeHead(200, { 'Content-Type': types[path.extname(file)] });
  fs.createReadStream(file).pipe(res);
}).listen(8080, '127.0.0.1', () => console.log('Portafolio: http://127.0.0.1:8080'));
