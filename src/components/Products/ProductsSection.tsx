import ProductList from "./ProductList";

export default function ProductsSection() {
  return (
    <>
      <h1 className="text-2xl leading-tight font-bold text-rose-900">
        Desserts
      </h1>
      <div className="mt-8 grid grid-cols-3 gap-x-6 gap-y-8">
        <ProductList />
      </div>
    </>
  );
}
