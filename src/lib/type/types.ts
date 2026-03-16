// Tek dosyada tüm category tiplerini topladık

export interface CategoryType {
  slug: string;
  name: string;
  url: string;
}

export interface CategoryContextType {
  categories: CategoryType[];
  loading: boolean;
  error: string | null;
}
export interface MetaType {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}
export interface Reviews {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  } 
export interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Reviews[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: MetaType;
  thumbnail: string;
  images: string[];
}

export type CartItem = ProductType & {
  quantity: number;
};

export type CartContextType = {
  items: CartItem[];
  addToCart: (product: ProductType) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
};
