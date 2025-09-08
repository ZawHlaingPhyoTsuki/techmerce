import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechMerce | Nextjs E-commerce template",
  description: "This is Home for TechMerce Template",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
