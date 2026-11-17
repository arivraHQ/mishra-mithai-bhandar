export type Language = 'en' | 'hi';

export interface CartItem {
  id: string; // `${productId}-${weight}`
  productId: string;
  name: string;
  hindiName: string;
  weight: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  unitType: 'kg' | 'box';
  imagePlaceholderColor: string;
}

export interface CustomerOrderDetails {
  name: string;
  phone: string;
  locality: string;
  notes?: string;
  orderType: 'delivery' | 'pickup';
}
