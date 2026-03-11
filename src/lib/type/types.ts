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
export interface DimensionsType {
  width: number;
  height: number;
  depth: number;
}

export interface ReviewsType {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
export interface MetaType {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
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
  dimensions: DimensionsType;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ReviewsType;
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
