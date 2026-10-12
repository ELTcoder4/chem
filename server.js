const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const relative = decoded === '/' ? 'index.html' : decoded.replace(/^\/+/, '');
  const resolved = path.resolve(root, relative);
  return resolved.startsWith(root) ? resolved : null;
}

const server = http.createServer((req, res) => {
  let target = safePath(req.url || '/');
  if (!target) { res.writeHead(400); return res.end('Bad request'); }
  if (!fs.existsSync(target) || fs.statSync(target).isDirectory()) {
    target = path.join(root, 'index.html');
  }
  fs.readFile(target, (error, data) => {
    if (error) { res.writeHead(500); return res.end('Unable to load app'); }
    const ext = path.extname(target).toLowerCase();
    res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(data);
  });
});

server.listen(port, '0.0.0.0', () => console.log(`AtomLab listening on 0.0.0.0:${port}`));
