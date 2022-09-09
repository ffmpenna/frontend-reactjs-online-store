export async function getCategories() {
  const API_URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(API_URL);
  const responseJson = await response.json();
  return responseJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const API_URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(API_URL);
  const responseJson = await response.json();
  const results = responseJson;
  return results;
}

export async function getProductById(productId) {
  const request = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const requestJson = await request.json();
  return requestJson;
}
