
for (var i = 100; i <= 200; i++) {
  if (Number(i) % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse");
  }
  else if (Number(i) % 4 === 0) {
    console.log("Lighthouse");
  }
  else if (Number(i) % 3 === 0) {
    console.log("Loopy");
  }
  else {
    console.log(i);
  }
}