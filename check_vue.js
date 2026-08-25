const fs = require('fs');
const compiler = require('vue/compiler-sfc');

const file = fs.readFileSync('d:\\lec 1\\app\\components\\javascript\\ImportantExample.vue', 'utf-8');
const { errors } = compiler.parse(file);

if (errors.length > 0) {
  console.log("Errors in ImportantExample.vue:", errors);
} else {
  console.log("ImportantExample.vue parsed successfully.");
}

const file2 = fs.readFileSync('d:\\lec 1\\app\\components\\javascript\\CommonMistakes.vue', 'utf-8');
const { errors: errors2 } = compiler.parse(file2);

if (errors2.length > 0) {
  console.log("Errors in CommonMistakes.vue:", errors2);
} else {
  console.log("CommonMistakes.vue parsed successfully.");
}
