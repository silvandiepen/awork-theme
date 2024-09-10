// Main colors
const colors = {
  // Tones
  "white": "#dae1e8",
  "smoke": "#000000",
  "ice": "#c3c7d5",
  "sky": "#abb0c4",
  "fog": "#9097b1",
  "dust": "#595d76",
  "light-steel": "#4c4f64",
  "steel": "#35384a",
  "slate": "#282a39",
  "midnight": "#1e202d",
  "asphalt": "#141622",
  "night": "#1a1c28",

  // Colors
  "red": "#ff4398",
  "yellow": "#ffd466",
  "green": "#45e59f",
  "blue": "#4d9aff",
  "purple": "#a157f6",
  "orange": "#ff7666",
  "cyan": "#5ce2f1",
  "indigo": "#9373ff",
  "teal": "#9bf2d2",
}

export const color = (key: keyof typeof colors) => {
  return colors[key];
}
