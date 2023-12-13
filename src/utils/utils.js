const generateNavLinkClass = (param) => {
  const alternatingButtonClasses = [
    param
      ? ["btn-primary", "text-white"].join(" ")
      : ["btn-secondary", "text-black"].join(" "),
  ];

  return [...alternatingButtonClasses, "btn"].join(" ");
};

export default generateNavLinkClass;
