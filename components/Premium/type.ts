/**
 * Product deal/card type for Premium section
 */
export interface DealType {
  /** Primary product image URL */
  firstImg: string;
  /** Hover/secondary product image URL */
  secondImg: string;
  /** Mobile-optimized image URL */
  imgSm: string;
  /** Display best seller badge */
  isBestSeller: boolean;
  /** Use gradient background for message badge */
  isGradient: boolean;
  /** Badge message text */
  message: string;
  /** Product name/title */
  name: string;
  /** Product description */
  description: string;
  /** Starting price */
  price: number;
  /** Product page URL */
  href: string;
}