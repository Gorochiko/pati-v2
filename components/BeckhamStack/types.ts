/**
 * Benefit item type for comparison table
 */
export interface BenefitType {
  /** Benefit name/description */
  type: string;
  /** Available in Essentials product */
  isEssensial: boolean;
  /** Available in Beckham Stack */
  isInStack: boolean;
}