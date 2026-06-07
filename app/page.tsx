import HeaderSection from '@/components/header-section'
import HeroSection from '@/components/hero-section'
import CategoriesSection from '@/components/categories-section'
import WhyBedazzledSection from '@/components/why-bedazzled-section'
import FeaturedProductsSection from '@/components/featured-products-section'
import ProblemSolutionSection from '@/components/problem-solution-section'
import PowerSolutionsSection from '@/components/power-solutions-section'
import HowItWorksSection from '@/components/how-it-works-section'
import TrustSection from '@/components/trust-section'
import FAQSection from '@/components/faq-section'
import FooterSection from '@/components/footer-section'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeaderSection />
      <HeroSection />
      <CategoriesSection />
      <WhyBedazzledSection />
      <FeaturedProductsSection />
      <ProblemSolutionSection />
      <PowerSolutionsSection />
      <HowItWorksSection />
      <TrustSection />
      <FAQSection />
      <FooterSection />
    </main>
  )
}
