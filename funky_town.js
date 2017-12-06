var fibonacci = function (n) {
  if (n == 0){
    return 0;
  }
  else if (n == 1){
    return 1;
  }
  else {
    return fibonacci(n - 1) + (fibonacci(n - 2));
  }
}

var gcd = function (a,b){
  if (b == 0){
    return a;
  }
  else {
    return gcd(b, a % b);
  }
}

PERIODNINE = [ 'Yu Qi', 'Michela', 'Kristin', 'Fabiha', 'Maxim', 'Marcus', 'Ish',
'James', 'Ryan', 'Edward', 'Adeeb', 'Jake', 'Cynthia', 'Kevin', 'Levi', 'Edmond',
'Kyle', 'Andrew', 'Max', 'Jenny', 'Philip', 'Shan', 'Mansour', 'Ray', 'Jake', 'Ida',
'Kerry', 'Stanley', 'Jackie', 'William', 'Tina', 'Michael'];

var randomStudent = function () {
  return PERIODNINE[Math.floor(Math.random() * PERIODNINE.length)];
}
