export const SELECTORS = { 
    mainProductImage: '[data-testid="ux-image-carousel-container"] img.img-scale-down', // Product image in carousel
    mainProductPrice: '[data-testid="x-price-primary"] span.ux-textspans', // Main price element
    relatedProductsSection: '//*[@data-testid="x-rx-slot-101875"]', // XPath selector
    relatedProductItem: '[data-testid="x-rx-slot-101875"] .Mgpb.rgAU',
    productTitle: '//*[@data-testid="x-item-title"]/h1[@class="x-item-title__mainTitle"]/span',
    productPrice: '.x-price-primary span.ux-textspans', // Price in related product card
    seeAllButton: 'a.recs-see-all-link-align-with-subtitle[href*="recs"]', // "See All" button for related items
  };