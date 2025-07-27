import { find } from '../models/Product';

export async function getProducts(req, res) {
  try {
    const products = await find({});
    res.json(products);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Error al obtener los productos', error: error.message });
  }
}