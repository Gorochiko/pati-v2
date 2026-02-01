import { Header } from '@/components/Header';
import { StickyPromoBar } from '@/components/StickyPromoBar';
import { ProductGallery } from '@/components/ProductGallery';
import { ProductInfo } from '@/components/ProductInfo';
import { ProductAccordion } from '@/components/ProductAccordion';
import { AmbassadorTestimonials } from '@/components/ProductInfo/AmbassadorTestimonials';
import ClinicalStudiesSection from '@/components/ClinicalStudiesSection';
import StaticReviewsSection from '@/components/StaticReviewsSection';
import { FivePillars } from '@/components/FivePillars';
import OrganSystems from '@/components/OrganSystems';
import Footer from '@/components/Footer';
import Faqs from '../components/FAQ';
import Premium from '@/components/Premium';
import BeckhamStack from '@/components/BeckhamStack';
import TeamMember from '@/components/TeamMember';
import Ambassadors from '@/components/ambassadors';
import DailyUltimate from '@/components/DailyUltimate';
import GoldStandard from '@/components/GoldStandard';
import MonthlyBreakdown from '@/components/Monthly';


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

      {/* Organ Systems */}
      <OrganSystems />

      <MonthlyBreakdown/>

      <GoldStandard/>
    
      {/* Five Pillars */}
      <FivePillars />

      {/* Daily Ultimate Nutrition */}
      <DailyUltimate />

      {/* Ambassador Section */}
      <Ambassadors />

      {/* Team */}
      <TeamMember />

      {/* Beckham Stack */}
      <BeckhamStack />

      {/* Premium Section */}
      <Premium />

      {/* FAQ */}
      <Faqs />

      {/* Footer */}
      <Footer />



      {/* Bottom padding for sticky cart on mobile */}
      <div className="h-32 lg:hidden" />
    </div>
  );
}
