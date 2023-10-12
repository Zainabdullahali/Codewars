function sillycase(silly) {
  const length = Math.ceil(silly.length / 2);
  const firstHalf = silly.slice(0, length).toLowerCase();
  const secondHalf = silly.slice(length).toUpperCase();
  return firstHalf + secondHalf;
}
