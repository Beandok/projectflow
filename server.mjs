import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, resolve, extname } from 'node:path';
const root = resolve(process.env.PROJECTFLOW_ROOT || process.cwd());
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.svg':'image/svg+xml','.png':'image/png'};
const server = createServer(async (req,res)=>{
  try {
    const raw = decodeURIComponent((req.url || '/').split('?')[0]);
    const path = resolve(join(root, raw === '/' ? 'index.html' : raw.replace(/^\//,'')));
    if (!(path === root || path.startsWith(root + '/'))) {res.writeHead(403);res.end('Forbidden');return;}
    const info = await stat(path);
    const file = info.isDirectory() ? join(path,'index.html') : path;
    const content = await readFile(file);
    res.writeHead(200, {'Content-Type':types[extname(file)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    res.end(content);
  } catch {res.writeHead(404, {'Content-Type':'text/plain'});res.end('Not found');}
});
if (process.argv[1] && import.meta.url === new URL('file://' + process.argv[1]).href) {
  const port = Number(process.env.PORT) || 4173;
  server.listen(port, () => console.log(`ProjectFlow running at http://localhost:${port}`));
}
export {server};