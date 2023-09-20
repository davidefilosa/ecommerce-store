import { Product } from "@/types";

const getProduct = async (productId: string): Promise<Product> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`;

  const res = await fetch(url);

  return res.json();
};

export default getProduct;
