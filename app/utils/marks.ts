// Arabic count agreement for marks: 1 درجة واحدة، 2 درجتان، 3–10 درجات، 11+ درجة.
export function marksLabel(n: number): string {
  if (n === 1) return 'درجة واحدة';
  if (n === 2) return 'درجتان';
  if (n >= 3 && n <= 10) return `${n} درجات`;
  return `${n} درجة`;
}
