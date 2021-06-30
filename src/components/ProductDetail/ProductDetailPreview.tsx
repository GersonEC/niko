interface ProductDetailPreviewProps {
  description: string;
  name: string;
  price: number;
  images?: string[];
}
export default function ProductDetailPreview(props: ProductDetailPreviewProps) {
  return (
    <div>
      <p>{props.description}</p>
      <div>
        <p>{props.name}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}
