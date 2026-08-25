import fs from 'fs';
import { parse, compileTemplate } from 'vue/compiler-sfc';

const dir = 'd:\\lec 1\\app\\components\\javascript\\';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.vue'));

let hasError = false;

for (const file of files) {
  const content = fs.readFileSync(dir + file, 'utf-8');
  const { descriptor } = parse(content);
  
  if (descriptor.template) {
    const { errors } = compileTemplate({
      source: descriptor.template.content,
      filename: file,
      id: file
    });
    
    if (errors && errors.length > 0) {
      console.log(`Template compilation error in ${file}:`);
      errors.forEach(e => console.log(e));
      hasError = true;
    }
  }
}

if (!hasError) {
  console.log("All templates compiled successfully.");
}
