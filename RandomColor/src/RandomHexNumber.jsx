const RandomHexNumber = () => {
  const Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const RandomHexNumber = ["#"];
  for (let i = 0; i < 6; i++) {
    const RandomIndex = Math.floor(Math.random() * Hex.length);
    RandomHexNumber.push(Hex[RandomIndex]);
  }
  RandomHexNumber.join("")
  return ( <>{RandomHexNumber}</>);
};

export default RandomHexNumber;
