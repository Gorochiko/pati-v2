/**
 * Represents a standard/feature in the comparison table
 */
export interface Standard {
  /** Whether this feature is included/true */
  isTrue: boolean;
  /** The feature/item name */
  item: string;
  /** Optional additional description */
  description: string;
}

// Legacy type for backwards compatibility
/** @deprecated Use Standard instead */
export type StandardType = Standard;
