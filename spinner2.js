const spinnerAnimation = () => {
  const spinnerChars = ['|', '/', '-', '\\'];
  let delay = 100;

  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const char = spinnerChars[i % spinnerChars.length];
      process.stdout.write(`\r${char}   `);
    }, delay);
    delay += 200;
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, delay);
};

spinnerAnimation();

