import chroma from "chroma-js";

export const stylesConfig = {
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    const color = chroma("#00B4FF");
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? color.alpha(0.7).css()
        : isFocused
        ? color.alpha(0.5).css()
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "#494950"
        : isFocused
        ? "white"
        : "#494950",
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor:
          !isDisabled && (isSelected ? color.name() : color.alpha(0.7).css())
      }
    };
  },
  placeholder: (styles) => ({
    ...styles,
    color: "inherit"
  }),
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
