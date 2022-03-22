import 'dotenv/config';

export const PORT = process.env.PORT || 5000;
export const ORIGIN_URL = 'http://localhost:' + PORT;
export const NUMBER_OF_PRODUCTS = 70;
export const NUMBER_OF_CATEGORIES = 10;
export const NUMBER_OF_FEEDBACKS = 10;

export const TEST_IMAGE_URLS: Record<string, string[]> = {
  0: [
    'http://localhost:5000/products/images/photo_test_11.webp',
    'http://localhost:5000/products/images/photo_test_12.webp',
    'http://localhost:5000/products/images/photo_test_13.webp',
    'http://localhost:5000/products/images/photo_test_14.webp',
    'http://localhost:5000/products/images/photo_test_15.webp',
  ],
  1: [
    'http://localhost:5000/products/images/photo_test_21.webp',
    'http://localhost:5000/products/images/photo_test_22.webp',
    'http://localhost:5000/products/images/photo_test_23.webp',
    'http://localhost:5000/products/images/photo_test_24.webp',
  ],
  2: [
    'http://localhost:5000/products/images/photo_test_31.webp',
    'http://localhost:5000/products/images/photo_test_32.webp',
    'http://localhost:5000/products/images/photo_test_33.webp',
  ],
  3: [
    'http://localhost:5000/products/images/photo_test_41.webp',
    'http://localhost:5000/products/images/photo_test_42.webp',
  ],
  4: ['http://localhost:5000/products/images/photo_test_51.webp'],
};
