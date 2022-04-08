import chroma from "chroma-js";

export const stylesConfig = {
  menu: (styles) => ({
    ...styles,
    position: "relative",
    border: "none",
    boxShadow: "none",
    zIndex: "0"
  }),
  menuList: (styles) => ({
    ...styles,
    display: "inline-flex",
    flexWrap: "wrap",
    gap: "5px",
    padding: "4px 1px"
  }),
  option: (styles, { isDisabled, isFocused }) => {
    const primaryColor = chroma("#00B4FF");
    const textColor = chroma("#4E4E4E");
    return {
      ...styles,
      boxShadow: isFocused
        ? `0 0 0 1px ${primaryColor.alpha(0.5).css()}`
        : null,
      cursor: isDisabled ? "not-allowed" : "default",
      display: "inline-block",
      width: "unset",
      padding: "0",
      borderRadius: "20px",
      lineHeight: "1",
      color: isDisabled ? textColor.alpha(0.5).css() : textColor.css()
    };
  },
  control: (styles) => ({
    ...styles,
    border: "none",
    borderRadius: "2px",
    backgroundColor: "#e6e6e6"
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: "4px 8px"
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none"
  })
};
