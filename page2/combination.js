const n = document.getElementById('n');
const r = document.getElementById('r');

let x;
setInterval(() => {
  let n2 = n.value;
  let r2 = r.value;
  x = n2 - r2;
}, 10);

const btn = document.getElementById('btn');
const display = document.getElementById('display');

function factorial(nx) {
  if (nx == 0 || nx == null) {
    return 1;
  } else if (nx >= 1) {
    for (let i = nx; i >= nx; i--) {
      return nx * factorial(nx - 1);
    }
  }
  console.log(nx);
}

function factorial2(xy) {
  if (xy == 0 || xy == null) {
    return 1;
  } else if (xy >= 1) {
    for (o = xy; o >= xy; o--) {
      return xy * factorial2(xy - 1);
    }
  }
  console.log(xy);
}

function factorial3(rr) {
  if (rr == 0 || rr == null) {
    return 1;
  } else if (rr >= 1) {
    for (let i = rr; i <= rr; i--) {
      return rr * factorial3(rr - 1);
    }
  }
}

btn.addEventListener('click', () => {
  let ans1 = factorial(n.value);

  let ans2 = factorial2(x);

  let ans3 = factorial3(r.value);

  let finalAns = ans1 / (ans3 * ans2);
  console.log(finalAns);
  display.innerText = finalAns;
});
