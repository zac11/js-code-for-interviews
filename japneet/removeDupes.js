let string = "spanner, span, spaniel, span";

let unique = [...new Set(string.split(", "))];

console.log(unique);