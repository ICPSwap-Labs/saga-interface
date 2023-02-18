const config = {
  // basename: only at build time to set, and don't add '/' at end off BASENAME for breadcrumbs, also don't put only '/' use blank('') instead,
  // like '/berry-material-react/react/default'
  basename: "",
  defaultPath: "/",
  fontFamily: `'Poppins','Roboto',sans-serif`,
  borderRadius: 12,
  outlinedFilled: true,
  theme: "dark",
  presetColor: "default", // default, theme1, theme2, theme3, theme4, theme5, theme6
  // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
  i18n: "en",
  rtlLayout: false,
};

export default config;
