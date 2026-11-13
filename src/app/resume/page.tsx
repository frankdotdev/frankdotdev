import type { Metadata } from "next";
import ResumeClient from "@/components/ResumeClient";

export const metadata: Metadata = {
  title: "Resume & CV — Frank Kelechi Oge",
  description:
    "Official Curriculum Vitae and Resume of Frank Kelechi Oge — Software Engineer specializing in Full-Stack, Backend Systems, and AI Product Development. Download the official PDF or view online.",
  alternates: { canonical: "https://frankoge.com/resume" },
};

export default function ResumePage() {
  return <ResumeClient />;
}
