console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const uName = process.stdin.read();

  if (uName) {
    process.stdout.write(`Your name is: ${uName}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
