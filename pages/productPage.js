import { SELECTORS } from '../utils/selectors';

export class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToProductPage(url) {
    await this.page.goto(url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async getMainProductTitle() {
    const titleEl = this.page.locator(SELECTORS.productTitle);
    await titleEl.waitFor({ timeout: 10000 });
    return await titleEl.textContent();
  }

  async getMainProductPrice() {
    const priceEl = this.page.locator(SELECTORS.mainProductPrice);
    await priceEl.waitFor({ timeout: 10000 });
    return await priceEl.textContent();
  }

  async getRelatedProductsCount() {
    const section = this.page.locator(SELECTORS.relatedProductsSection);
    await section.scrollIntoViewIfNeeded();
    const products = this.page.locator(SELECTORS.relatedProductItem);
    await products.first().waitFor({ timeout: 10000 });
    return await products.count();
  }

  async getRelatedProductTitles() {
    const titles = [];
    const products = await this.page.locator(SELECTORS.relatedProductItem).all();
    for (const product of products) {
      try {
        const titleEl = product.locator(SELECTORS.productTitle);
        await titleEl.waitFor({ timeout: 5000 });
        const title = await titleEl.textContent();
        if (title) titles.push(title.trim());
      } catch {
        console.warn('Skipped product with missing title');
      }
    }
    return titles;
  }

  async getRelatedProductPrices() {
    const prices = [];
    const products = await this.page.locator(SELECTORS.relatedProductItem).all();
    for (const product of products) {
      try {
        const priceEl = product.locator(SELECTORS.productPrice);
        await priceEl.waitFor({ timeout: 5000 });
        const price = await priceEl.textContent();
        if (price) prices.push(price.trim());
      } catch {
        console.warn('Skipped product with missing price');
      }
    }
    return prices;
  }

  async clickSeeAllRelatedProducts() {
    const seeAll = this.page.locator(SELECTORS.seeAllButton);
    await seeAll.waitFor({ timeout: 10000 });
    await seeAll.click();
  }

  async isRelatedProductsSectionVisible() {
    const section = this.page.locator(SELECTORS.relatedProductsSection);
    try {
      return await section.isVisible();
    } catch {
      return false;
    }
  }
}
