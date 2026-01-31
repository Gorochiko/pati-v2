import { Header } from '@/components/Header';
import { StickyPromoBar } from '@/components/StickyPromoBar';
import { ProductGallery } from '@/components/ProductGallery';
import { ProductInfo } from '@/components/ProductInfo';
import { ProductAccordion } from '@/components/ProductAccordion';
import { AmbassadorTestimonials } from '@/components/AmbassadorTestimonials';
import ClinicalStudiesSection from '@/components/ClinicalStudiesSection';
import StaticReviewsSection from '@/components/StaticReviewsSection';
import { FivePillars } from '@/components/FivePillars';
// import { AmbassadorTestimonials } from '@/components/AmbassadorTestimonials';
// import { ClinicalStudyBanner } from '@/components/ClinicalStudyBanner';
// import { StickyAddToCart } from '@/components/StickyAddToCart';
// import { CustomerReviews } from '@/components/CustomerReviews';
// import { BodySystemsSupport } from '@/components/BodySystemsSupport';
// import { SupplementReplacement } from '@/components/SupplementReplacement';
// import { ComparisonTable } from '@/components/ComparisonTable';
// import { FivePillars } from '@/components/FivePillars';
// import { TrustedExperts } from '@/components/TrustedExperts';
// import { ScientificAdvisors } from '@/components/ScientificAdvisors';
// import { InfluencerTestimonials } from '@/components/InfluencerTestimonials';
// import { HowToEnjoy } from '@/components/HowToEnjoy';
// import { WelcomeKit } from '@/components/WelcomeKit';
// import { RelatedProducts } from '@/components/RelatedProducts';
// import { FAQ } from '@/components/FAQ';
// import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <StickyPromoBar />
      <Header />

      {/* Product Section */}
      <main
        className="py-6 lg:py-10"
        style={{
          backgroundImage: 'url(https://im8health.com/cdn/shop/files/Frame_1000004811-min.jpg?v=1727698766)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <div className="im8-container">
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 lg:gap-12">
            {/* Left Column - Gallery */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <ProductGallery />
            </div>

            {/* Right Column - Product Info */} 
            <div className="space-y-6">
              <ProductInfo />
              <ProductAccordion />
              <AmbassadorTestimonials />
            </div>
          </div>
        </div>
      </main>


      {/* <ClinicalStudyBanner /> */}
        <ClinicalStudiesSection />

      {/* Customer Reviews */}
      <StaticReviewsSection />

      {/* Body Systems Support */}
      {/* <BodySystemsSupport /> */}

      {/* Supplement Replacement */}
      {/* <SupplementReplacement /> */}

      {/* Comparison Table */}
      {/* <ComparisonTable /> */}

      {/* Five Pillars */}
      <FivePillars />

      {/* Trusted Experts */}
      {/* <TrustedExperts /> */}

      {/* How to Enjoy */}
      {/* <HowToEnjoy /> */}

      {/* Welcome Kit */}
      {/* <WelcomeKit /> */}

      {/* Influencer Testimonials */}
      {/* <InfluencerTestimonials /> */}

      {/* Scientific Advisors */}
      {/* <ScientificAdvisors /> */}

      {/* Related Products */}
      {/* <RelatedProducts /> */}

      {/* FAQ */}
      {/* <FAQ /> */}

      {/* Footer */}
      {/* <Footer /> */}

      {/* Sticky Add to Cart - Mobile Only */}
      {/* <StickyAddToCart /> */}

      {/* Bottom padding for sticky cart on mobile */}
      <div className="h-32 lg:hidden" />
    </div>
  );
}
