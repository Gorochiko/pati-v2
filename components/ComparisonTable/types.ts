/**
 * Types for ComparisonTable component
 */

export interface ComparisonFeature {
  id: number;
  im8Content: string | { main: string; detail?: string };
  im8HasFeature: boolean;
  competitorContent: string | { main: string; detail?: string };
  competitorHasFeature: boolean;
  isInitiallyVisible: boolean;
}

export interface ProductInfo {
  name: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  brandColor: string;
  backgroundColor: string;
}

export interface ComparisonData {
  im8: ProductInfo;
  competitor: ProductInfo;
  features: ComparisonFeature[];
}
