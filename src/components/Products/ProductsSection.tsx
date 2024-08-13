import ProductList from "./ProductList";

export default function ProductsSection() {
  return (
    <>
      <h1 className="text-2xl leading-tight font-bold text-rose-900">
        Desserts
      </h1>
      <div className="mt-8 grid md:grid-cols-3 md:gap-x-6 md:gap-y-8 grid-cols-1 gap-y-6">
        <ProductList />
      </div>
    </>
  );
}
