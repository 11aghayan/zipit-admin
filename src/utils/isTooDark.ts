const isTooDark = (hexcolor: string) => {
  const r = parseInt(hexcolor.substring(1,2),16);
  const g = parseInt(hexcolor.substring(3,2),16);
  const b = parseInt(hexcolor.substring(4,2),16);
  const yiq = ((r*299)+(g*587)+(b*114))/1000;
  // Return new color if to dark, else return the original
  return yiq < 30;
};

export default isTooDark;