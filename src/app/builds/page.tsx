import type { Metadata } from "next";
import BuildsClient from "@/components/BuildsClient";

export const metadata: Metadata = {
  title: "Builds",
  description:
    "Open-source autonomous engines, radical privacy platforms, offline-first mobile apps, and systems built by Frank Kelechi Oge — LeadRadar, UGC Deal Engine, LeadFinder, Inkognito, Stella AI, OMPH Catholic Chaplaincy AE-FUTHA, and ShopFlow.",
  alternates: { canonical: "https://frankoge.com/builds" },
};

export default function BuildsPage() {
  return <BuildsClient />;
}
