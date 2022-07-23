const images = $(".typography img");
const tables = $(".typography table");
const iframes = $(".typography iframe");
const cssKeys = {
  table: ["overflow-auto"],
  iframe: ["embed-responsive", "embed-responsive-16by9"],
  imgFluid: "img-fluid",
};

/**
 * Inicializuje typograficke triedy na vybranych elementoch
 */
export const typography = () => {
  // prida vsetkym obrazkom triedu aby bol responzivny
  images.forEach((image) => image.classList.add(cssKeys.imgFluid));
  // tabulku wrapne do responzivneho wrapperu
  tables.forEach((table) => {
    wrap(table, cssKeys.table);
    table.classList.add("table");
  });
  // iframe wrapne do responzivneho wrapperu
  iframes.forEach((iframe) => wrap(iframe, cssKeys.iframe));
};
