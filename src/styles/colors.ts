export const orange = {
  10: "#FFF5F0",
  20: "#FFE1D0",
  30: "#FFCCAF",
  40: "#FFB78F",
  50: "#F89E6B",
  60: "#D68253",
  70: "#B4683E",
  80: "#92502C",
  90: "#703A1D",
  100: "#4E2710",
};

export const blue = {
  10: "#F4F7FF",
  20: "#D2E1FD",
  30: "#A5C3FB",
  40: "#78A5FA",
  50: "#4B87F8",
  60: "#1E69F6",
  70: "#1854C5",
  80: "#123F94",
  90: "#0C2A62",
  100: "#061531",
};

export const grey = {
  0: "#FFFFFF",
  2: "#FFFDF9",
  5: "#F5F3EB",
  10: "#E1DED4",
  20: "#CCC9BD",
  30: "#B8B5A7",
  40: "#A3A092",
  50: "#8F8C7E",
  60: "#7B776A",
  70: "#666357",
  80: "#524F44",
  90: "#3D3B32",
  95: "#22201B",
  100: "#11100E",
};

export const red = {
  10: "#FDF5F5",
  20: "#F8D6D6",
  30: "#F2ADAC",
  40: "#EB8583",
  50: "#E55C59",
  60: "#DE3330",
  70: "#B22926",
  80: "#851F1D",
  90: "#591413",
  100: "#2C0A0A",
};

export const green = {
  10: "#EFF6F2",
  20: "#D5E6DC",
  30: "#B8D6C3",
  40: "#9BC6AB",
  50: "#7EB693",
  60: "#62A67B",
  70: "#499666",
  80: "#347851",
  90: "#285D3E",
  100: "#23322F",
};

export const yellow = {
  10: "#FEFCF2",
  20: "#FCF3CD",
  30: "#FAE79B",
  40: "#F7DA68",
  50: "#F5CE36",
  60: "#F2C204",
  70: "#C29B03",
  80: "#917402",
  90: "#614E02",
  100: "#302701",
};

export const purple = {
  10: "#F7F6FD",
  20: "#DEDAF7",
  30: "#BDB5EF",
  40: "#9C91E7",
  50: "#7B6CDF",
  60: "#5A47D7",
  70: "#4839AC",
  80: "#362B81",
  90: "#241C56",
  100: "#120E2B",
};

export const teal = {
  10: "#F4FEFC",
  20: "#D5FBF4",
  30: "#ABF6E9",
  40: "#80F2DD",
  50: "#56EDD2",
  60: "#2CE9C7",
  70: "#23BA9F",
  80: "#1A8C77",
  90: "#125D50",
  100: "#092F28",
};

export const olive = {
  10: "#FEFDF3",
  20: "#FAF9D0",
  30: "#F5F2A1",
  40: "#F1EC71",
  50: "#ECE542",
  60: "#E7DF13",
  70: "#B9B20F",
  80: "#8B860B",
  90: "#5C5908",
  100: "#2E2D04",
};

const colors = {
  /************ BG ************/
  // BRAND
  BG_BRAND_WEAKEST: green[10],
  BG_BRAND_WEAKER: green[20],
  BG_BRAND_WEAK: green[30],
  BG_BRAND_NORMAL: green[60],
  BG_BRAND_STRONG: green[70],
  BG_BRAND_STRONGER: green[90],
  BG_BRAND_STRONGEST: green[100],

  //ACCENT
  BG_ACCENT_WEAKEST: orange[10],
  BG_ACCENT_WEAKER: orange[20],
  BG_ACCENT_WEAK: orange[50],
  BG_ACCENT_NORMAL: orange[60],
  BG_ACCENT_STRONG: orange[70],
  BG_ACCENT_STRONGER: orange[80],
  BG_ACCENT_STRONGEST: orange[90],

  // NEGATIVE
  BG_NEGATIVE_WEAKEST: red[10],
  BG_NEGATIVE_WEAKER: red[20],
  BG_NEGATIVE_WEAK: red[50],
  BG_NEGATIVE_NORMAL: red[60],
  BG_NEGATIVE_STRONG: red[70],
  BG_NEGATIVE_STRONGER: red[80],
  BG_NEGATIVE_STRONGEST: red[90],

  // POSITIVE
  BG_POSITIVE_WEAKEST: green[10],
  BG_POSITIVE_WEAKER: green[20],
  BG_POSITIVE_WEAK: green[50],
  BG_POSITIVE_NORMAL: green[60],
  BG_POSITIVE_STRONG: green[70],
  BG_POSITIVE_STRONGER: green[80],
  BG_POSITIVE_STRONGEST: green[90],

  // WARNING
  BG_WARNING_WEAKEST: yellow[10],
  BG_WARNING_WEAKER: yellow[20],
  BG_WARNING_WEAK: yellow[50],
  BG_WARNING_NORMAL: yellow[60],
  BG_WARNING_STRONG: yellow[70],
  BG_WARNING_STRONGER: yellow[80],
  BG_WARNING_STRONGEST: yellow[90],

  // NEUTRAL
  BG_SURFACE: grey[2],
  BG_NEUTRAL_WEAKEST: grey[5],
  BG_NEUTRAL_WEAKER: grey[10],
  BG_NEUTRAL_WEAK: grey[20],
  BG_NEUTRAL_NORMAL: grey[30],
  BG_NEUTRAL_STRONG: grey[80],
  BG_NEUTRAL_STRONGER: grey[95],
  BG_NEUTRAL_STRONGEST: grey[100],

  /************ TEXT ************/
  // BRAND
  TEXT_BRAND_WEAKEST: green[30],
  TEXT_BRAND_WEAK: green[40],
  TEXT_BRAND_NORMAL: green[80],
  TEXT_BRAND_STRONG: green[100],

  // ACCENT
  TEXT_ACCENT_WEAKEST: orange[30],
  TEXT_ACCENT_WEAK: orange[50],
  TEXT_ACCENT_NORMAL: orange[60],
  TEXT_ACCENT_STRONG: orange[70],

  // NEGATIVE
  TEXT_NEGATIVE_WEAKEST: red[30],
  TEXT_NEGATIVE_WEAK: red[50],
  TEXT_NEGATIVE_NORMAL: red[60],
  TEXT_NEGATIVE_STRONG: red[70],

  // POSITIVE
  TEXT_POSITIVE_WEAKEST: green[30],
  TEXT_POSITIVE_WEAK: green[50],
  TEXT_POSITIVE_NORMAL: green[60],
  TEXT_POSITIVE_STRONG: green[70],

  // WARNING
  TEXT_WARNING_WEAKEST: yellow[30],
  TEXT_WARNING_WEAK: yellow[50],
  TEXT_WARNING_NORMAL: yellow[60],
  TEXT_WARNING_STRONG: yellow[70],

  // NEUTRAL
  TEXT_INVERTED: grey[0],
  TEXT_NEUTRAL_WEAKEST: grey[30],
  TEXT_NEUTRAL_WEAK: grey[50],
  TEXT_NEUTRAL_NORMAL: grey[80],
  TEXT_NEUTRAL_STRONG: grey[100],

  /************ BORDER ************/
  // BRAND
  BORDER_BRAND_WEAKEST: green[20],
  BORDER_BRAND_WEAK: green[30],
  BORDER_BRAND_NORMAL: green[40],
  BORDER_BRAND_STRONG: green[70],

  // ACCENT
  BORDER_ACCENT_WEAKEST: orange[20],
  BORDER_ACCENT_WEAK: orange[30],
  BORDER_ACCENT_NORMAL: orange[60],
  BORDER_ACCENT_STRONG: orange[70],

  // NEGATIVE
  BORDER_NEGATIVE_WEAKEST: red[20],
  BORDER_NEGATIVE_WEAK: red[30],
  BORDER_NEGATIVE_NORMAL: red[50],
  BORDER_NEGATIVE_STRONG: red[70],

  // POSITIVE
  BORDER_POSITIVE_WEAKEST: green[20],
  BORDER_POSITIVE_WEAK: green[30],
  BORDER_POSITIVE_NORMAL: green[50],
  BORDER_POSITIVE_STRONG: green[70],

  // WARNING
  BORDER_WARNING_WEAKEST: yellow[20],
  BORDER_WARNING_WEAK: yellow[30],
  BORDER_WARNING_NORMAL: yellow[50],
  BORDER_WARNING_STRONG: yellow[70],

  // NEUTRAL
  BORDER_INVERTED: grey[2],
  BORDER_NEUTRAL_WEAKEST: grey[5],
  BORDER_NEUTRAL_WEAK: grey[10],
  BORDER_NEUTRAL_NORMAL: grey[20],
  BORDER_NEUTRAL_STRONG: grey[70],

  /************ ICON ************/
  // BRAND
  ICON_BRAND_WEAKEST: green[40],
  ICON_BRAND_WEAK: green[50],
  ICON_BRAND_NORMAL: green[70],
  ICON_BRAND_STRONG: green[90],

  // ACCENT
  ICON_ACCENT_WEAKEST: orange[30],
  ICON_ACCENT_WEAK: orange[50],
  ICON_ACCENT_NORMAL: orange[60],
  ICON_ACCENT_STRONG: orange[70],

  // NEGATIVE
  ICON_NEGATIVE_WEAKEST: red[30],
  ICON_NEGATIVE_WEAK: red[50],
  ICON_NEGATIVE_NORMAL: red[60],
  ICON_NEGATIVE_STRONG: red[70],

  // POSITIVE
  ICON_POSITIVE_WEAKEST: green[30],
  ICON_POSITIVE_WEAK: green[50],
  ICON_POSITIVE_NORMAL: green[60],
  ICON_POSITIVE_STRONG: green[70],

  // WARNING
  ICON_WARNING_WEAKEST: yellow[30],
  ICON_WARNING_WEAK: yellow[50],
  ICON_WARNING_NORMAL: yellow[60],
  ICON_WARNING_STRONG: yellow[70],

  // NEUTRAL
  ICON_INVERTED: grey[0],
  ICON_NEUTRAL_WEAKEST: grey[40],
  ICON_NEUTRAL_WEAK: grey[50],
  ICON_NEUTRAL_NORMAL: grey[70],
  ICON_NEUTRAL_STRONG: grey[100],
};

export default colors;
