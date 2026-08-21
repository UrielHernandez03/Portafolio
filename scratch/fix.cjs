const fs = require('fs');
let c = fs.readFileSync('src/components/Projects.astro', 'utf8');

let parts = c.split('<section id="proyectos" class="section">');
if(parts.length > 1) {
  let fm = parts[0];
  // Find the array closure `];` then `---` and just trim everything after the first `---` that closes the frontmatter.
  // Actually, we know the frontmatter starts with `---` and ends with `---`. 
  // Let's just find the second `---` and cut off everything between it and `<section`.
  let firstDash = fm.indexOf('---');
  let secondDash = fm.indexOf('---', firstDash + 3);
  if(secondDash !== -1) {
      fm = fm.substring(0, secondDash + 3) + '\n\n';
  }
  
  fs.writeFileSync('src/components/Projects.astro', fm + '<section id="proyectos" class="section">' + parts[1]);
  console.log('Fixed');
}
