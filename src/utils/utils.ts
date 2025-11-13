export function getImage(product: any) {
  const path = product.folder
    ? `${product.folder}${product.file}`
    : product.file;
  return new URL("../assets/" + path, import.meta.url).href;
}
