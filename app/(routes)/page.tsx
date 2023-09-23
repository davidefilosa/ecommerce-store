import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import React from "react";
import Billboard from "../components/billboard";
import ProductList from "../components/product-list";

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboards = await getBillboards(
    "6b150501-d809-4bb2-b945-7afdcdd2567b"
  );
  return (
    <>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
