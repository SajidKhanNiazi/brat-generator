import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'

export const metadata = {
    title: 'Terms & Conditions – Brat Generator',
    description: 'Read the terms and rules for using Brat Generator. Learn about user responsibilities and limitations.',
}

export default function TermsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen py-16">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
                            Terms & Conditions
                        </h1>

                        <div className="prose prose-invert prose-slate max-w-none space-y-6">
                            <p className="text-slate-400 leading-relaxed">
                                Last updated: February 2026
                            </p>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Agreement to Terms
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    By accessing and using Brat Generator, you agree to be bound by these Terms and Conditions.
                                    If you do not agree with any part of these terms, you should not use our service.
                                    We reserve the right to modify these terms at any time, and your continued use of the
                                    service constitutes acceptance of any changes.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    User Conduct
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-3">
                                    When using Brat Generator, you agree to use the tool responsibly and legally. You must not
                                    use the service to create content that is harmful, offensive, or violates any laws or regulations.
                                </p>
                                <ul className="list-disc list-inside text-slate-400 space-y-2">
                                    <li>Do not create content that infringes on others' intellectual property rights</li>
                                    <li>Do not use the tool for illegal purposes or to spread misinformation</li>
                                    <li>Do not attempt to harm, disrupt, or gain unauthorized access to the service</li>
                                    <li>Do not use the tool to harass, abuse, or harm others</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Intellectual Property
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-3">
                                    The Brat Generator tool and website design are the intellectual property of their creators.
                                    The tool is inspired by the aesthetic of Charli XCX's "Brat" album cover, but is not officially
                                    affiliated with or endorsed by Charli XCX or any related parties.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    You retain all rights to the images you create using Brat Generator. However, you are solely
                                    responsible for ensuring that your creations do not infringe on the intellectual property rights
                                    of others, including trademarks, copyrights, and publicity rights.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Limitation of Liability
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-3">
                                    Brat Generator is provided "as is" without any warranties of any kind, either express or implied.
                                    We do not guarantee that the service will be error-free, uninterrupted, or secure.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    To the fullest extent permitted by law, we shall not be liable for any direct, indirect,
                                    incidental, special, or consequential damages resulting from your use of or inability to use
                                    the service. This includes any damages arising from errors, omissions, interruptions, or
                                    loss of data.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    User-Generated Content
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    All images and content you create using Brat Generator are your responsibility. We do not
                                    monitor, review, or control the content you generate. You are solely responsible for ensuring
                                    that your content complies with all applicable laws and does not infringe on the rights of others.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Governing Law
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    These Terms and Conditions shall be governed by and construed in accordance with applicable
                                    international law. Any disputes arising from these terms or your use of Brat Generator shall
                                    be resolved through good faith negotiation.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Changes to Terms
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    We reserve the right to modify or update these Terms and Conditions at any time. Changes
                                    will be posted on this page with an updated revision date. Your continued use of the service
                                    after any changes indicates your acceptance of the new terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Contact Information
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    If you have any questions about these Terms and Conditions, please visit our{' '}
                                    <Link href="/contact" className="text-[#8ACE00] hover:underline">
                                        Contact page
                                    </Link>.
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
