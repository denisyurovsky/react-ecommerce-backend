const data = require('../data/data');

module.exports = (req, res) => {
  let { name } = req.params;

  try {
    const categoryToDelete = data.categories.find(
      (category) => category.name === name
    );

    if (!categoryToDelete) {
      return res.status(400).json({ message: `No category with name ${name}` });
    }

    data.products = data.products.filter(
      (product) => product.category.name.toLowerCase() !== name.toLowerCase()
    );

    data.categories = data.categories.filter(
      (category) => category.name.toLowerCase() !== name.toLowerCase()
    );

    res
      .status(200)
      .json({ message: 'Category and products were successfully deleted' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};
