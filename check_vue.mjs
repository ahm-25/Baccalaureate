import fs from 'fs';
import { parse } from 'vue/compiler-sfc';

const dir = 'd:\\lec 1\\app\\components\\javascript\\';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.vue'));

let hasError = false;

for (const file of files) {
  const content = fs.readFileSync(dir + file, 'utf-8');
  const { errors } = parse(content);
  
  if (errors && errors.length > 0) {
    console.log(`Error in ${file}:`, errors);
    hasError = true;
  }
}

const lessonFile = 'd:\\lec 1\\app\\pages\\second-baccalaureate\\javascript\\lesson-01.vue';
const lessonContent = fs.readFileSync(lessonFile, 'utf-8');
const { errors: lessonErrors } = parse(lessonContent);
if (lessonErrors && lessonErrors.length > 0) {
  console.log(`Error in lesson-01.vue:`, lessonErrors);
  hasError = true;
}

if (!hasError) {
  console.log("All Vue files parsed successfully.");
}
