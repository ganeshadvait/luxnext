"use client";
import dynamic from "next/dynamic";

export const Hero = dynamic(() => import("./hero/hero"));
export const Faqs = dynamic(() => import("./faqs/faq"));
export const Whatare = dynamic(() => import("./what/whatare"));
export const Luxgpt = dynamic(() => import("./luxgpt/luxgpt"));
export const VideoSection = dynamic(() => import("./Videosection/videos"), { ssr: false });
export const PatientTalks = dynamic(() => import("./Patienttalks/patients"), { ssr: false });
export const Second = dynamic(() => import("./second/second"));
export const HospitalLocation = dynamic(() => import("./HospitalLocation/hospitallocations"));
export const HospitalComparison = dynamic(() => import("./Treatmenttable/Hospitalcomparison"));
export const Accreditations = dynamic(() => import("./Accreditions/accreditions"));
export const DoctorCard = dynamic(() => import("./topdoctors/ourdoctors"));
