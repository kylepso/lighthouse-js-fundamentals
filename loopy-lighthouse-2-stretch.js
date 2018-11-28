function loopyLighthouse(range, numbers, words) {
    for (var i = range[0]; i <= range[1]; i++) {
        if (Number(i) % numbers[0] === 0 && i % numbers[1] === 0) {
          console.log(words[0] + words[1]);
        }
        else if (Number(i) % numbers[0] === 0) {
          console.log(words[0]);
        }
        else if (Number(i) % numbers[1] === 0) {
          console.log(words[1]);
        }
        else {
          console.log(i);
        }
      }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);