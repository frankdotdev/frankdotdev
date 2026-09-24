import type { Metadata } from "next";
import BuildsClient from "@/components/BuildsClient";

export const metadata: Metadata = {
  title: "Builds",
  description:
    "Projects, offline-first mobile apps, and systems built by Frank Kelechi Oge — ShopFlow, Fiorio, Hacker's Medicare, Stella AI, Fluo, Inkognito, and client solutions with APK downloads.",
  alternates: { canonical: "https://frankoge.com/builds" },
};

export default function BuildsPage() {
  return <BuildsClient />;
}
