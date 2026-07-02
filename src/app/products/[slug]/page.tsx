import { PRODUCT_DATA } from "@/lib/productData";
import ProductPageClient from "./ProductPageClient";

export async function generateStaticParams() {
  return Object.keys(PRODUCT_DATA).map((slug) => ({ slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductPageClient slug={slug} />;
}
