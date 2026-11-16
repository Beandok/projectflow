import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {extname,join,normalize} from 'node:path';
const port=Number(process.env.PORT||4173),root=process.cwd();
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.json':'application/json'};
http.createServer(async(req,res)=>{
 try {
  const url=new URL(req.url,'http://localhost');
  let path=decodeURIComponent(url.pathname);
  if(path==='/' )path='/index.html';
  const full=normalize(join(root,path));
  if(!full.startsWith(root+'/')&&full!==root)throw Error('Forbidden');
  if(path.split('/').some(x=>x.startsWith('.'))||/\.(mjs|md|test\.js)$/.test(path))throw Error('Forbidden');
  const file=await stat(full);
  if(!file.isFile())throw Error('Not found');
  res.writeHead(200,{'Content-Type':mime[extname(full)]||'application/octet-stream','Cache-Control':'no-store'});
  res.end(await readFile(full));
 }catch(e){res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found');}
}).listen(port,()=>console.log(`ProjectFlow running at http://localhost:${port}`));
