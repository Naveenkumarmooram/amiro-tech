import {
  CaseStudyPreviewSection,
  FinalCTASection,
  HeroSection,
  ProcessPreviewSection,
  ServicesOverviewSection,
  TechnologySection,
  ValueStripSection,
  WorkflowSection,
  WhyAmiroSection,
} from '../components/home'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueStripSection />
      <WhyAmiroSection />
      <ServicesOverviewSection />
      <WorkflowSection />
      <ProcessPreviewSection />
      <CaseStudyPreviewSection />
      <TechnologySection />
      <FinalCTASection />
    </>
  )
}
