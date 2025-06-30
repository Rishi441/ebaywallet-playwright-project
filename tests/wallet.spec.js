import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/productPage';
import { SELECTORS } from '../utils/selectors';

const PRODUCT_URL = 'https://www.ebay.com/itm/167614907733';

test.describe('eBay Wallet Product Page - Related Products Feature', () => {
  let productPage;
  let mainProductPriceText;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    await productPage.navigateToProductPage(PRODUCT_URL);

    await page.waitForSelector(SELECTORS.mainProductPrice, { timeout: 15000 });
    const rawPrice = await page.locator(SELECTORS.mainProductPrice).textContent();
    mainProductPriceText = rawPrice ? rawPrice.replace(/[^\d.]/g, '') : '0';
  });


  test('TC003: Verify Related Products are in the same category as the main product (Wallet)', async () => {
    const titles = await productPage.getRelatedProductTitles();

    if (titles.length === 0) {
      console.warn('⚠️ No related product titles found – skipping TC003.');
      test.skip(); // or return;
    }

    for (const title of titles) {
      expect(title.toLowerCase()).toMatch(/wallet|purse|card holder|leather/);
    }
  });

  test('TC004: Verify Related Products are in the same price range as the main product', async () => {
    const mainPrice = parseFloat(mainProductPriceText);
    expect(mainPrice).toBeGreaterThan(0);

    const prices = await productPage.getRelatedProductPrices();
    const tolerance = 0.20;

    for (const priceText of prices) {
      const price = parseFloat(priceText.replace(/[^\d.]/g, ''));
      const [low, high] = [mainPrice * (1 - tolerance), mainPrice * (1 + tolerance)];
      expect(price).toBeGreaterThanOrEqual(low);
      expect(price).toBeLessThanOrEqual(high);
    }
  });

  test('TC001: Verify Related Products section is displayed', async () => {
    await expect(productPage.page.locator(SELECTORS.relatedProductsSection)).toBeVisible();
  });

  test('TC002: Verify up to six best seller products are displayed in related products section', async () => {
    const count = await productPage.getRelatedProductsCount();
    expect(count).toBeLessThanOrEqual(6);
  });


  test('TC006 (Negative): Verify behavior when no related products are found', async ({ page }) => {
    const isVisible = await productPage.isRelatedProductsSectionVisible();
    if (!isVisible) {
      console.log('No related products section present (expected for negative test).');
    } else {
      const count = await productPage.getRelatedProductsCount();
      expect(count).toBe(0);
    }
  });

  test('TC007 (Negative): Verify behavior with invalid product URL', async ({ page }) => {
    await productPage.navigateToProductPage('https://www.ebay.com/itm/INVALID_PRODUCT_ID');
    await expect(page.locator('text=We looked everywhere')).toBeVisible();
  });
});
