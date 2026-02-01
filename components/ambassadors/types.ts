/**
 * Represents an ambassador review/testimonial
 */
export interface AmbassadorReview {
  /** URL of the ambassador's avatar image */
  avatar: string;
  /** Ambassador name and follower count */
  name: string;
  /** Testimonial content */
  content: string;
  /** URL of the video file */
  videoHref: string;
  /** URL of the video thumbnail */
  thumbnailHref: string;
}

/**
 * Props for components that display a single ambassador review
 */
export interface AmbassadorReviewProps {
  review: AmbassadorReview;
}

// Legacy type for backwards compatibility
/** @deprecated Use AmbassadorReview instead */
export type AmbassadorReviewType = AmbassadorReview;