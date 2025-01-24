const a = parseFloat(prompt("Введите коэффициент a:"));
const b = parseFloat(prompt("Введите коэффициент b:"));
const c = parseFloat(prompt("Введите коэффициент c:"));

const discr = b ** 2 - 4 * a * c;

alert("Дискриминант D = " + discr.toString());
