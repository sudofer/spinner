const animation = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let time = 200;
for (const frame of animation) {
  setTimeout(()=> {
    process.stdout.write(`\r${frame}       `);
  }, time);
  time += 200;
}