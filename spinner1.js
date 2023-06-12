process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700);

// ... fill in the rest yourself ...

const spinnerAnimation = () => {
  const spinnerChars = ['|', '/', '-', '\\'];
  let delay = 100;

  for (const char of spinnerChars) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, delay);
    delay += 200;
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, delay);
};

spinnerAnimation();

