const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');
// Replace ${text} with ${fullText} in the prompt template
// The pattern is: PDF 文本：\n${text}`;
c = c.replace("PDF 文本：\\n${text}`;", "PDF 文本：\\n${fullText}`;");
fs.writeFileSync('index.html', c);
if (c.includes('fullText')) {
  console.log('Fixed: ${text} -> ${fullText}');
} else {
  console.log('Pattern not found');
}