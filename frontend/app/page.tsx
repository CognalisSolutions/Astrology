"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BookingSection } from "@/components/BookingSection";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { CosmicHero } from "@/components/CosmicHero";
import { Card } from "@/components/ui/Card";

const phone = process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? "9291513999";
const email = "gurujiramaraju077@gmail.com";

const reviews = [
  {
    name: "Nagaraj Kokkiligadda.",
    text: "Good astrologer He solved my problems, Thank you guruji,🙏🙏🙏🙏.",
    stars: 5,
  },
  {
    name: "Sirigiri Sarika.",
    text: "Good astrologer Na life lo jarigina samasyalu motam chepparu and Na samasyalaku parishkaram chupincharu🙏🙏🙏 Thank you sir 🙏🙏🙏.",
    stars: 5,
  },
  {
    name: "Sravanthi Ragulakollu.",
    text: "Its very good interaction to known the pros and cons in unpredictable life. Thank for your positive guidance and support.",
    stars: 5,
  },
];

const services = [
  { title: "Vedic Astrology", description: "Complete horoscope analysis based on planetary positions and dasha periods. Guidance for present life situations and upcoming opportunities." },
  { title: "Kundali Reading", description: "Detailed birth-chart reading to understand strengths, challenges, and life direction. Useful for education, career, family, and health planning." },
  { title: "Marriage Compatibility", description: "Guna matching and compatibility study for couples with practical advice. Focus includes emotional harmony and long-term stability." },
  { title: "Love & Relationship Guidance", description: "Personal guidance to resolve misunderstandings and relationship stress. Remedies and timing suggestions to improve mutual understanding." },
  { title: "Family Issue Resolution", description: "Astrological assessment of recurring family conflicts and causes. Specific remedies to restore peace and positive energy at home." },
  { title: "Career Astrology", description: "Career path evaluation based on horoscope combinations and planetary periods. Helps with role selection and job change timing." },
  { title: "Finance & Wealth Guidance", description: "Financial trend analysis to identify strong and cautious periods. Practical advice and remedies for stability and prosperity." },
  { title: "Muhurta Selection", description: "Auspicious date and time selection for major life events like marriage and housewarming." },
  { title: "Pooja & Remedies", description: "Customized spiritual remedies based on chart-specific needs. Includes pooja suggestions and mantra guidance." },
  { title: "Black Magic Solutions", description: "Traditional spiritual guidance for negative-energy related concerns with protective remedial measures." },
  { title: "Online Consultation", description: "Convenient remote consultation with the same depth as in-person sessions." },
  { title: "Offline Consultation", description: "In-person consultation at the Jyothisyalayam for direct interaction." },
];

const freeReadings = [
  { title: "Match Making", src: "/readings-match-making.jpg", href: "/match-making" },
  { title: "Kundli", src: "/readings-kundli.jpg", href: "/kundli" },
  { title: "Planet Transits", src: "/readings-planet-transits.jpg", href: "/planet-transits" },
  { title: "Remedies", src: "/readings-remedies.jpg", href: "/remedies" },
  { title: "Love", src: "/readings-love.jpg", href: "/love" },
  { title: "Panchang", src: "/readings-panchang.jpg", href: "/panchang" },
  { title: "Tarot Reading", src: "/readings-tarot.jpg", href: "/tarot-reading" },
  { title: "Numerology", src: "/readings-numerology.jpg", href: "/numerology" },
  { title: "Vastu", src: "/readings-vastu.jpg", href: "/vastu" },
  { title: "Zodiac Signs", src: "/readings-zodiac-signs.jpg", href: "/zodiac-signs" },
  { title: "Festivals", src: "/readings-festivals.jpg", href: "/festivals" },
  { title: "Spirituality", src: "/readings-spirituality.jpg", href: "/spirituality" },
];

const servicesDecor = [
  { symbol: "⭐", top: "14%", left: "8%", delay: "0s" },
  { symbol: "✨", top: "20%", right: "10%", delay: "1s" },
  { symbol: "⭐", top: "62%", left: "6%", delay: "0.6s" },
  { symbol: "✨", top: "70%", right: "8%", delay: "1.6s" },
];


const readingsDecor = [
  { symbol: "⭐", top: "18%", left: "10%", delay: "0.2s" },
  { symbol: "✨", top: "24%", right: "12%", delay: "1.2s" },
  { symbol: "⭐", top: "68%", left: "8%", delay: "0.8s" },
  { symbol: "✨", top: "72%", right: "10%", delay: "1.8s" },
];


export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const prefetchReadings = () => {
      freeReadings.forEach((item) => router.prefetch(item.href));
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(prefetchReadings, { timeout: 1500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(prefetchReadings, 800);
    return () => globalThis.clearTimeout(timeoutId);
  }, [router]);

  return (
    <>
      <CosmicHero />

      <main className="hero-page-shell pt-[100vh]">
        <section className="hero-banner-section w-full m-0 pt-2 md:pt-3 pb-0 flex justify-center">
          <Image
            src="/top-banner.png"
            alt="Sri Sammaka Sarakka Jyothisyalayam banner"
            width={2048}
            height={1365}
            priority
            quality={100}
            className="w-full max-w-[3200px] h-auto max-h-[700px] md:max-h-[860px] object-contain border-y border-accent/25 block"
            sizes="100vw"
          />
        </section>

        <div className="site-cosmic-flow">

        {/* Services */}
        <section
          id="services"
          className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20 divine-services-section relative overflow-hidden"
        >
          <div className="section-floating-layer" aria-hidden>
            {servicesDecor.map((item, index) => (
              <span
                key={`services-${index}`}
                className="section-float-icon"
                style={{ top: item.top, left: item.left, right: item.right, animationDelay: item.delay }}
              >
                {item.symbol}
              </span>
            ))}
          </div>
          <motion.h2 className="section-title mb-6 text-center" 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Divine Services
          </motion.h2>
          <p className="text-muted text-center mb-12 text-lg leading-relaxed">
            Personalized cosmic guidance for all life matters.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {services.map((service, index) => (
              <motion.div key={service.title} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.1 }} 
                viewport={{ once: true }}
              >
                <Card className="aspect-square flex flex-col p-6 h-full">
                  <h3 className="text-accent font-cinzel text-xl font-bold mb-3 flex-shrink-0">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-grow mt-auto">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Free Readings */}
        <section className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20 free-readings-section relative overflow-hidden">
          <div className="section-floating-layer" aria-hidden>
            {readingsDecor.map((item, index) => (
              <span
                key={`readings-${index}`}
                className="section-float-icon"
                style={{ top: item.top, left: item.left, right: item.right, animationDelay: item.delay }}
              >
                {item.symbol}
              </span>
            ))}
          </div>
          <motion.h2 className="section-title mb-6 text-center" 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Free Readings
          </motion.h2>
          <p className="text-muted text-center mb-12 text-lg leading-relaxed">
            Quick insights – book detailed consultations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
            {freeReadings.map((item, index) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ delay: index * 0.05 }} 
                viewport={{ once: true }}
              >
                <Link
                  href={item.href}
                  className="block group"
                  prefetch
                  onPointerEnter={() => router.prefetch(item.href)}
                  onFocus={() => router.prefetch(item.href)}
                >
                  <Card className="overflow-hidden h-full p-4">
                    <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-accent/30 group-hover:border-accent transition-all">
                      <Image
                        src={item.src}
                        alt={`${item.title} reading`}
                        fill
                        quality={100}
                        className="object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                      />
                    </div>
                    <p className="text-center mt-4 font-semibold text-text group-hover:text-accent transition-colors">
                      {item.title}
                    </p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pooja Gallery */}
        <section className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <motion.h2 className="section-title mb-6 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Divine Harmony Ritual
          </motion.h2>
          <p className="text-muted text-center mb-12 text-lg leading-relaxed">
            Sacred rituals for divine blessings and harmony.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: "/Santhanam Pooja 1.jpeg", caption: "Santhana Pooja" },
              { src: "/Santhanam Pooja 2.jpeg", caption: "Kuja Dosham" },
              { src: "/Santhanam Pooja 3.jpeg", caption: "Chethabadi Nivarana Pooja" },
            ].map((img, index) => (
              <motion.div key={img.src} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} viewport={{ once: true }}>
                <Card className="overflow-hidden">
                  <div className="aspect-[4/5] relative">
                    <Image src={img.src} alt={img.caption} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="mt-6 text-muted text-center font-medium">
                    {img.caption}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <BookingSection />

        {/* Testimonials */}
        <section id="reviews" className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <motion.h2 className="section-title mb-8 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Devotee Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, index) => (
              <motion.div key={r.name} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2 }} viewport={{ once: true }}>
                <Card>
                  <p className="italic text-muted mb-6 leading-relaxed text-lg">&ldquo;{r.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-accent">{'★'.repeat(r.stars)}</span>
                    <span className="font-semibold text-accent">{r.name}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="border-t border-accent/20 py-12 mt-16 w-full px-6 md:px-12 lg:px-20">
          <div className="text-center">
            <h3 className="text-2xl font-cinzel font-bold text-text mb-6">
              Sri Sammaka Sarakka Jyothisyalayam
            </h3>
            <div className="space-y-2 text-muted mb-6">
              <p>Phone: <Link href={`tel:+91${phone}`} className="hover:text-accent font-semibold transition-all">{`+91 ${phone}`}</Link></p>
              <p>Email: <Link href={`mailto:${email}`} className="hover:text-accent font-semibold transition-all">{email}</Link></p>
            </div>
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} — Consultations by divine appointment.
            </p>
          </div>
        </footer>

          <WhatsAppFab />
        </div>
      </main>
    </>
  );
}

