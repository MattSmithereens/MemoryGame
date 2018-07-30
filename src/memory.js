export function Card(color, id) {
  this.color = color;
  this.id = id;
}

export function cardMatch(firstChoice, secondChoice) {
  if (firstChoice === secondChoice) {
    return true;
  } else {
    return false;
  }
}
