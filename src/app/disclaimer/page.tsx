import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'

export const metadata = {
    title: 'Disclaimer – Brat Generator',
    description: 'Brat Generator is an independent tool. It is not officially affiliated with Charli XCX.',
}

export default function DisclaimerPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen py-16">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
                            Disclaimer
                        </h1>

                        <div className="prose prose-invert prose-slate max-w-none space-y-6">
                            <p className="text-slate-400 leading-relaxed">
                                Last updated: February 2026
                            </p>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Purpose of the Tool
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-3">
                                    Brat Generator is a free online tool designed to create text-based images inspired by
                                    the visual aesthetic of Charli XCX&apos;s &quot;Brat&quot; album cover. The tool allows users to generate
                                    custom images featuring lowercase typography and bold background colors in a minimalist style.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    This tool is intended for creative, personal, and educational purposes. Users can create
                                    images for social media posts, memes, profile pictures, and other non-commercial creative
                                    projects. All image generation happens directly in your browser for privacy and speed.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    No Official Affiliation
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-3">
                                    <strong className="text-white">Important:</strong> Brat Generator is NOT officially affiliated
                                    with, endorsed by, or connected to Charli XCX, Atlantic Records, or any other official entity
                                    associated with the &quot;Brat&quot; album or Charli XCX&apos;s work.
                                </p>
                                <p className="text-slate-400 leading-relaxed mb-3">
                                    This is an independent, fan-made tool created to celebrate the iconic visual style of the
                                    Brat album. The tool&apos;s design is inspired by the album&apos;s aesthetic, but it is not an official
                                    product and should not be confused with any official merchandise or services.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    All trademarks, logos, and brand names mentioned on this website are the property of their
                                    respective owners. The use of these names, trademarks, and brands does not imply endorsement.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Limitations of Service
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-3">
                                    Brat Generator is provided &quot;as is&quot; without any warranties or guarantees. While we strive to
                                    provide a reliable and functional service, we cannot guarantee that the tool will always be
                                    available, error-free, or meet your specific requirements.
                                </p>
                                <ul className="list-disc list-inside text-slate-400 space-y-2">
                                    <li>We do not guarantee continuous, uninterrupted, or secure access to the service</li>
                                    <li>The tool may be temporarily unavailable due to maintenance or technical issues</li>
                                    <li>We are not responsible for any errors or inaccuracies in generated images</li>
                                    <li>Browser compatibility may vary; the tool works best on modern, updated browsers</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Fair Use Statement
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-3">
                                    Users are responsible for ensuring their use of Brat Generator and any images they create
                                    comply with applicable copyright laws, trademark laws, and fair use principles. While the
                                    tool is inspired by a specific aesthetic, users should be mindful of intellectual property
                                    rights when creating and sharing content.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    We encourage users to be respectful of artists, creators, and intellectual property rights.
                                    If you plan to use generated images commercially or publicly, please ensure you have the
                                    necessary rights and permissions for any text, logos, or other elements you include.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    User Responsibility
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    By using Brat Generator, you acknowledge that you are solely responsible for any content
                                    you create and how you choose to use it. We do not monitor, review, or control user-generated
                                    content. You agree to use the tool legally and ethically, and to respect the rights of others.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Changes to This Disclaimer
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    We may update this disclaimer from time to time to reflect changes in our service or legal
                                    requirements. Any updates will be posted on this page with a revised date. Please review
                                    this disclaimer periodically.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Questions or Concerns
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    If you have any questions about this disclaimer or the Brat Generator service, please visit
                                    our{' '}
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
