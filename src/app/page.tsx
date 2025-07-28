import {
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection
} from '@/components/sections';

export default function Home(){
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}