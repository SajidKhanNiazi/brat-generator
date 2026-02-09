import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'

export const metadata = {
    title: 'Cookie Policy – Brat Generator',
    description: 'Learn about cookies and analytics used by Brat Generator. Understand how we track website usage.',
}

export default function CookiePolicyPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen py-16">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
                            Cookie Policy
                        </h1>

                        <div className="prose prose-invert prose-slate max-w-none space-y-6">
                            <p className="text-slate-400 leading-relaxed">
                                Last updated: February 2026
                            </p>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    What Are Cookies
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-3">
                                    Cookies are small text files that are placed on your device when you visit a website.
                                    They are widely used to make websites work more efficiently and provide information to
                                    the site owners. Cookies help websites remember your preferences and improve your browsing
                                    experience.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    Brat Generator uses cookies and similar technologies to enhance your experience and understand
                                    how visitors interact with our website. This helps us improve the tool and make it more useful
                                    for everyone.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    How We Use Cookies
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-3">
                                    We use cookies for the following purposes:
                                </p>
                                <ul className="list-disc list-inside text-slate-400 space-y-2 mb-3">
                                    <li><strong className="text-white">Essential functionality:</strong> To ensure the Brat Generator tool works correctly in your browser</li>
                                    <li><strong className="text-white">Analytics:</strong> To understand how visitors use our website and which features are most popular</li>
                                    <li><strong className="text-white">Preferences:</strong> To remember your color and style choices for a better user experience</li>
                                </ul>
                                <p className="text-slate-400 leading-relaxed">
                                    All image generation and text processing happens locally in your browser. We do not send your
                                    text or images to our servers. Cookies are only used for website functionality and analytics.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Types of Cookies We Use
                                </h2>

                                <h3 className="font-display text-lg font-semibold text-white mb-3 mt-4">
                                    Essential Cookies
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-4">
                                    These cookies are necessary for the website to function properly. They enable basic features
                                    like navigation and access to secure areas of the website. The website cannot function properly
                                    without these cookies. These cookies do not collect personally identifiable information.
                                </p>

                                <h3 className="font-display text-lg font-semibold text-white mb-3">
                                    Analytics Cookies
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-4">
                                    We may use analytics cookies to collect information about how visitors use our website. This
                                    includes data like which pages are visited most often, how long visitors stay on the site, and
                                    general geographic location. This data is anonymous and helps us improve the website.
                                </p>

                                <h3 className="font-display text-lg font-semibold text-white mb-3">
                                    Preference Cookies
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    These cookies remember your choices and preferences, such as your selected color schemes or
                                    recently used text. This makes it easier and faster to use Brat Generator on return visits.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Third-Party Cookies
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-3">
                                    Brat Generator may use third-party services for analytics and website performance monitoring.
                                    These services may place their own cookies on your device. We do not control these third-party
                                    cookies.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    Any third-party services we use are chosen carefully and are required to handle data responsibly
                                    and in accordance with privacy regulations. For more information about how these services use
                                    cookies, please refer to their respective privacy policies.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Managing Cookies
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-3">
                                    You have the right to decide whether to accept or reject cookies. Most web browsers automatically
                                    accept cookies, but you can usually modify your browser settings to decline cookies if you prefer.
                                </p>

                                <h3 className="font-display text-lg font-semibold text-white mb-3 mt-4">
                                    How to Disable Cookies
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-3">
                                    You can control and manage cookies in your browser settings. Here&apos;s how to access cookie settings
                                    in popular browsers:
                                </p>
                                <ul className="list-disc list-inside text-slate-400 space-y-2 mb-3">
                                    <li><strong className="text-white">Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                                    <li><strong className="text-white">Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                                    <li><strong className="text-white">Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                                    <li><strong className="text-white">Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                                </ul>

                                <h3 className="font-display text-lg font-semibold text-white mb-3 mt-4">
                                    Impact of Disabling Cookies
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    If you choose to disable cookies, some features of Brat Generator may not work as intended. For
                                    example, your color preferences may not be saved, and your browsing experience may be less personalized.
                                    However, the core image generation functionality will still work.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Changes to This Cookie Policy
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    We may update this Cookie Policy from time to time to reflect changes in technology, legislation,
                                    or our practices. Any changes will be posted on this page with an updated date. We encourage you
                                    to review this policy periodically.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    More Information
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    If you have any questions about our use of cookies or this Cookie Policy, please visit our
                                    Contact page or email us. For more information about how we handle your data in general,
                                    please see our Privacy Policy.
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
