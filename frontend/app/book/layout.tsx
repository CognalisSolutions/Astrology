import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book consultation",
  description:
    "Choose a slot for online or offline astrology consultation and pay using UPI.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
