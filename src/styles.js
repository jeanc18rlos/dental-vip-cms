const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

const sizes = {
  body: 16,
  xsTitle: 18,
  smTitle: 18,
  mdTitle: 18,
  lgTitle: 18,
  xlTitle: 18
};

const lineH = {
    stretch: .75,
    base: 1,
    half: 1.5,
    double: 2
}

const device = {
  portrait: `(orientation: portrait)`,
  landsCape: `(orientation: landscape)`,
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

const colors = {
  black: "#000000",
  codGray: "#0a0a0a",
  codGrayLight: "#1c1c1c",
  codGrayTransparent: "rgba(12, 12, 12, 0.7019607843)",
  mineShaft: "#222222",
  mineShaftDark: "#202020",
  mineShaftDarker: "#2e2e2e",
  mineShafMedium: "#333",
  mineShaftLight: "#3a3a3a",
  mineShaftTransparent: "rgba(51, 51, 51, 0.8)",
  dustyGray: "#999999",
  dustyGrayDark: "#9b9a9a",
  dustyGrayLight: "#9a9a9a",
  doveGray: "#666666",
  gallery: "#eeeeee",
  galleryDark: "#ededed",
  white: "#ffffff",
  pistachio: "#91c508",
  scorpion: "#5f5f5f",
  mercury: "#e4e3e3",
  mercuryLight: "#e6e6e6",
  nobel: "#b7b7b7",
  boulder: "#767575",
  christi: "#7eaa0b",
  limeade: "#568900",
  tundora: "#4444444",
  tundoraLight: "#4c4c4c",
  wildSand: "#f5f5f5",
  wildSandDark: "#f4f4f4",
  silverChalice: "#aaaaaa",
  gray: "#808080",
  silver: "#c2c2c2",
  red: "#ff0000",
  alto: "#dddddd",
  altoLight: "#d8d8d8",
  emperor: "#555555"
};

export { colors, device, sizes, lineH };
