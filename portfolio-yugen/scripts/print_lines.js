import fs from 'fs';
const path = 'src/components/sucuriu-console.tsx';
const s = fs.readFileSync(path, 'utf8');
const lines = s.split('\n');
for(let i=0;i<lines.length;i++){
  console.log((i+1).toString().padStart(4,' ')+': '+lines[i]);
}
