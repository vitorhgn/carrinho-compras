import Product from "../models/Product";

class ProductController {
  async store(req, res) {
    const { id, name, description, url } = await Product.create(req.body);

    return res.json({
      id,
      name,
      description,
      url,
    });
  }

  async index(req, res) {
    const listProd = await Product.findAll({
      attributes: ["id", "name", "url", "price", "description"],
    });
    return res.json(listProd);
  }
}

export default new ProductController();
