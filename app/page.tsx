import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Download } from "lucide-react"
import { articles } from "@/data/articles"
import { ArticleCarousel } from "@/components/article-carousel"
import { NewsletterForm } from "@/components/newsletter-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-blue to-darker-blue text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-cube-pattern opacity-20 z-0"></div>

      <div className="max-w-5xl mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple to-blue rounded-lg blur-md opacity-70"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-16%20at%2011.13.41%E2%80%AFPM-wBLMyNH263ROVl17iqRk2rdwP8L7kR.png"
                width={400}
                height={550}
                alt="CKS Handbook Cover"
                className="relative rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Book Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Certified Kubernetes Security Specialist (CKS) Handbook
            </h1>
            <p className="text-xl mb-2 text-purple-light">2nd Edition</p>
            <p className="text-lg mb-8 text-gray-300">
              The essential guide for mastering Kubernetes security and passing the CKS exam with confidence.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 bg-dark-blue/50">
                <CheckCircle className="h-6 w-6 text-purple mt-0.5 flex-shrink-0" />
                <p>Written by a Kubestronaut who&apos;s been there, done that.</p>
              </div>
              <div className="flex items-start gap-3 bg-dark-blue/50">
                <CheckCircle className="h-6 w-6 text-purple mt-0.5 flex-shrink-0" />
                <p>Practical hands-on, real exam focus - no fluff.</p>
              </div>
              <div className="flex items-start gap-3 bg-dark-blue/50">
                <CheckCircle className="h-6 w-6 text-purple mt-0.5 flex-shrink-0" />
                <p>Prepare smartly and pass the exam with flying colors.</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link
                href="https://ptuladhar.gumroad.com/l/cks-handbook"
                className="bg-purple-dark hover:bg-purple text-white px-4 py-2 rounded-2xl font-medium text-2xl transition-colors shadow-glow"
              >
                Get the book
              </Link>
              <div className="bg-gradient-to-r from-purple to-blue text-white rounded-full w-20 h-20 flex items-center justify-center shadow-glow rotate-12">
                <div className="text-center">
                  <div className="text-sm">only</div>
                  <div className="text-3xl font-bold">$15</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Chapters</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { num: "1", title: "Exam Environment", desc: "Exam UI, terminals, applications, exam scores." },
              { num: "2", title: "Quick References", desc: "Quick access and references." },
              { num: "3", title: "Search Quickly", desc: "3-step mantra to searching quickly." },
              { num: "4", title: "Shell Hacks", desc: "Navigate shell efficiently." },
              { num: "5", title: "Exam Simulation", desc: "Free and paid exam simulators, playgrounds." },
              {
                num: "6",
                title: "Cluster Setup — 15%",
                desc: "Network policy, CIS benchmark, Ingress TLS, metadata, platform binaries.",
              },
              {
                num: "7",
                title: "Cluster Hardening — 15%",
                desc: "Restrict API access, RBAC, service accounts and cluster upgrade.",
              },
              { num: "8", title: "System Hardening — 10%", desc: "Kernel hardening and reduce attack surface" },
              {
                num: "9",
                title: "Minimize Microservice Vulnerabilities — 20%",
                desc: "Security context, PSS, OPA gateway, secrets, runtime sandboxes, pod-to-pod encryption.",
              },
              {
                num: "10",
                title: "Supply Chain Security — 20%",
                desc: "Image footprint, supply chain, static analysis, and image scanning.",
              },
              {
                num: "11",
                title: "Monitoring, Logging, and Runtime Security — 20%",
                desc: "Behavioral analytics, immutable containers, audit logs.",
              },
              { num: "12", title: "The End", desc: "Well done on making this far!" },
            ].map((chapter, index) => (
              <div
                key={index}
                className="bg-dark-blue/50 rounded-lg p-4 border border-purple/20 hover:border-purple transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-purple/20 rounded-full w-8 h-8 flex items-center justify-center text-purple-light flex-shrink-0">
                    {chapter.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{chapter.title}</h3>
                    <p className="text-gray-400 text-sm">{chapter.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Insightful Exam Articles */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gradient text-center">Exam Articles</h2>
          <p className="mb-8 text-lg text-gray-300">
            Read my latest articles on CKS exam topics. These articles complement the book content with additional
            insights.
          </p>

          <ArticleCarousel articles={articles} />
        </section>

        {/* Newsletter Signup Form - NEW SECTION 
        <section className="mb-20">
          <NewsletterForm />
        </section>
        */}

        {/* One-page preview */}
        <section className="mb-20">
          <h2 className="text-center text-3xl font-bold mb-8 text-gradient">Book sample. No email address needed.</h2>

          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple to-blue rounded-lg blur-md opacity-50"></div>
              <Image
                src="/images/cks-handbook-sample.png"
                width={150}
                height={250}
                alt="CKS Handbook Sample Page"
                className="relative rounded-lg border border-purple/30"
              />
            </div>

            <div className="mt-6">
              <Link
                href="https://github.com/tuladhar/certified-kubernetes-security-specialist-handbook/blob/main/Certified%20Kubernetes%20Security%20Specialist%20(CKS)%20Handbook%20-%20First%20Edition%20(Sample).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple/20 hover:bg-purple/30 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>Download sample</span>
              </Link>
            </div>

            <div className="flex justify-center mt-8">
              <Link
                href="https://ptuladhar.gumroad.com/l/cks-handbook"
                className="bg-purple-dark hover:bg-purple text-white px-4 py-2 rounded-2xl font-medium text-2xl transition-colors shadow-glow"
              >
                Buy a copy
              </Link>
            </div>

            <p className="text-center text-gray-400 mt-4">Just at $15.00</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gradient">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-dark-blue/50 rounded-lg p-6 border border-purple/20 hover:border-purple transition-colors">
              <h3 className="font-semibold text-xl mb-2 text-white">Which versions of CKS exam is covered?</h3>
              <p className="text-gray-300">
                The 2nd edition of the book covers the latest CKS exam changes introduced in{" "}
                <span className="text-blue">October 2024</span>
              </p>
            </div>

            <div className="bg-dark-blue/50 rounded-lg p-6 border border-purple/20 hover:border-purple transition-colors">
              <h3 className="font-semibold text-xl mb-2 text-white">
                Is this book good for someone just preparing for CKS exam?
              </h3>
              <p className="text-gray-300">
                Absolutely. This book is ideal for those just beginning their CKS exam preparation or those who are
                gearing up to take the exam.
              </p>
            </div>
          </div>
        </section>

        {/* Author Bio - Updated with new profile picture */}
        <section className="mb-20 rotate-1">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Author</h2>

          <div className="bg-dark-blue/50 rounded-lg overflow-hidden border border-purple/20">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1 p-6 flex justify-center items-center">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple to-blue rounded-full blur-md opacity-50"></div>
                  <Image
                    src="/images/author-profile.png"
                    width={250}
                    height={250}
                    alt="Puru Tuladhar"
                    className="relative rounded-full border-2 border-purple/30"
                  />
                </div>
              </div>
              <div className="md:col-span-2 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Puru Tuladhar</h3>
                <p className="text-purple-light font-medium mb-4">Kubestronaut</p>

                <div className="space-y-4 text-gray-300">
                  <p>
                    Hello there! I&apos;m Puru, a cloud and open-source expert who&apos;s been deep into Linux for 17
                    years and playing around with AWS for the past 8 (yes, I&apos;m AWS certified!). Kubernetes has been
                    my playground for about 5 years now, and I&apos;ve recently started exploring the exciting world of
                    AI.
                  </p>

                  <p>
                    I love programming, writing books and blogs, and giving back to the open-source and cloud-native
                    communities. When I&apos;m not tinkering with code or cloud infrastructure, you&apos;ll probably
                    find me sharing what I&apos;ve learned or contributing to projects that make tech better for
                    everyone.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="bg-purple/20 text-purple-light text-xs font-semibold px-3 py-1 rounded-full">
                      KCNA
                    </span>
                    <span className="bg-purple/20 text-purple-light text-xs font-semibold px-3 py-1 rounded-full">
                      KCSA
                    </span>
                    <span className="bg-purple/20 text-purple-light text-xs font-semibold px-3 py-1 rounded-full">
                      CKAD
                    </span>
                    <span className="bg-purple/20 text-purple-light text-xs font-semibold px-3 py-1 rounded-full">
                      CKA
                    </span>
                    <span className="bg-purple/20 text-purple-light text-xs font-semibold px-3 py-1 rounded-full">
                      CKS
                    </span>
                    <span className="bg-purple/20 text-purple-light text-xs font-semibold px-3 py-1 rounded-full">
                      AWS Certified
                    </span>
                    <span className="bg-purple/20 text-purple-light text-xs font-semibold px-3 py-1 rounded-full">
                      CNCF Kubestronaut
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <Link
                      href="https://linkedin.com/in/ptuladhar3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-light transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://twitter.com/ptuladhar3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-light transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://github.com/tuladhar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-light transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center mb-16">
          <div className="bg-gradient-to-r from-purple/20 to-blue/20 rounded-lg p-8 border border-purple/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to become Kubernetes security ninja?</h3>
            <p className="text-lg mb-6 text-gray-300">
              Get your copy today and start your journey to becoming a Kubernetes security expert.
            </p>
            <Link
              href="https://ptuladhar.gumroad.com/l/cks-handbook"
              className="bg-purple-dark hover:bg-purple text-white px-4 py-2 rounded-md font-medium text-2xl transition-colors shadow-glow inline-block"
            >
              Buy a copy
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
