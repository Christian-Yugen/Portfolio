import fs from 'fs';
const path = 'src/components/sucuriu-console.tsx';
const s = fs.readFileSync(path, 'utf8');
const chars = ['(',')','{','}','`','\'','"','/'];
const counts = {};
for(const c of chars) counts[c] = 0;
for(const ch of s) if(Object.prototype.hasOwnProperty.call(counts, ch)) counts[ch]++;
console.log('counts for', path);
console.log(counts);

// Find unmatched parentheses by tracking depth
{
	let depth = 0;
	const lines = s.split('\n');
	const stack = [];
	for(let i=0;i<lines.length;i++){
		const line = lines[i];
		for(let j=0;j<line.length;j++){
			const ch = line[j];
			if(ch === '(') stack.push({line:i+1,col:j+1});
			else if(ch === ')') stack.pop();
			if(stack.length < 0){
				console.error('Unmatched ) at', i+1, j+1);
				process.exit(2);
			}
		}
	}
	if(stack.length > 0){
		const last = stack[stack.length-1];
		console.error('Unmatched ( count at EOF:', stack.length, ' — last ( at', last);
		const ctxLine = lines[last.line-1] || '';
		console.error('Line content:', ctxLine);
		console.error('Context:', ctxLine.slice(Math.max(0,last.col-10), last.col+10));
	}
}
// Print last few '(' and ')' positions for inspection
{
	const opens = [];
	const closes = [];
	const lines = s.split('\n');
	for(let i=0;i<lines.length;i++){
		const line = lines[i];
		for(let j=0;j<line.length;j++){
			const ch = line[j];
			if(ch === '(') opens.push({line:i+1,col:j+1});
			if(ch === ')') closes.push({line:i+1,col:j+1});
		}
	}
	console.error('Last 5 opens:', opens.slice(-5));
	console.error('Last 5 closes:', closes.slice(-5));
	const inspectLine = (n) => {
		const line = s.split('\n')[n-1] || '';
		console.error('Line', n, ':', line);
		console.error(line.split('').map((ch,i)=>`${i+1}:${ch}`).join(' | '));
	}
	inspectLine(376);
	inspectLine(392);
	inspectLine(394);
}
