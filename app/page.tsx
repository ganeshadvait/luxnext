import './globals.css';
import {
  Hero,
  Second,
  HospitalLocation,
  DoctorCard,
  HospitalComparison,
  Accreditations,
  VideoSection,
  PatientTalks,
  Luxgpt,
  Whatare,
  Faqs
} from "./components/DynamicComponents";

export default function Home() {
  return (
    <>
      <Hero />
      <Second />
      <HospitalLocation />
      <DoctorCard />
      <HospitalComparison />
      <Accreditations />
      <VideoSection />
      <PatientTalks />
      <Luxgpt />
      <Whatare />
      <Faqs />
    </>
  );
}
