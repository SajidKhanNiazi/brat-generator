import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'

export const metadata = {
  title: 'Privacy Policy - Brat Generator',
  description: 'Privacy policy for Brat Generator. Learn how we handle your data and protect your privacy.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-invert prose-slate max-w-none space-y-6">
              <p className="text-slate-400 leading-relaxed">
                Last updated: January 2026
              </p>

              <section>
                <h2 className="font-display text-xl font-semibold text-white mb-4">
                  Introduction
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Welcome to Brat Generator. We respect your privacy and are committed to protecting 
                  any information you may provide while using our service. This privacy policy explains 
                  our practices regarding data collection and usage.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-white mb-4">
                  Information We Collect
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Our brat text generator operates entirely in your browser. We do not collect, 
                  store, or transmit any text you enter into our tool. All text transformations 
                  happen locally on your device.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-white mb-4">
                  Cookies and Analytics
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  We may use basic analytics to understand how visitors use our website. This may 
                  include anonymous data such as page views and general location. We do not use 
                  this data to identify individual users.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-white mb-4">
                  Third-Party Services
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Our website may contain links to external sites. We are not responsible for the 
                  privacy practices of these external websites.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-white mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  We may update this privacy policy from time to time. Any changes will be posted 
                  on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-white mb-4">
                  Contact Us
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  If you have any questions about this privacy policy, please contact us through 
                  our website.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
