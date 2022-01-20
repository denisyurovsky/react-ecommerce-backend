const PORT = 5000;
const ORIGIN_URL = 'http://localhost:' + PORT;
const NUMBER_OF_PRODUCTS = 70;
const NUMBER_OF_CATEGORIES = 10;
const NUMBER_OF_FEEDBACKS = 10;

const USER_ROLE = {
    ADMIN: 'admin',
    SELLER: 'seller',
    CONSUMER: 'consumer',
    GUEST: 'guest',
};

const TEST_IMAGE_URLS = {
    0: ['http://localhost:5000/products/images/photo_test_11.webp',
        'http://localhost:5000/products/images/photo_test_12.webp',
        'http://localhost:5000/products/images/photo_test_13.webp',
        'http://localhost:5000/products/images/photo_test_14.webp',
        'http://localhost:5000/products/images/photo_test_15.webp'],
    1: ['http://localhost:5000/products/images/photo_test_21.webp',
        'http://localhost:5000/products/images/photo_test_22.webp',
        'http://localhost:5000/products/images/photo_test_23.webp',
        'http://localhost:5000/products/images/photo_test_24.webp'],
    2: ['http://localhost:5000/products/images/photo_test_31.webp',
        'http://localhost:5000/products/images/photo_test_32.webp',
        'http://localhost:5000/products/images/photo_test_33.webp'],
    3: ['http://localhost:5000/products/images/photo_test_41.webp',
        'http://localhost:5000/products/images/photo_test_42.webp'],
    4: ['http://localhost:5000/products/images/photo_test_51.webp']
};

module.exports = {
    PORT,
    ORIGIN_URL,
    NUMBER_OF_PRODUCTS,
    NUMBER_OF_CATEGORIES,
    NUMBER_OF_FEEDBACKS,
    USER_ROLE,
    TEST_IMAGE_URLS,
}
