import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Mail, MessageSquare, Clock } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export const metadata = {
    title: 'Contact Us – Brat Generator',
    description: 'Get in touch with Brat Generator. Send feedback, report issues, or ask questions.',
}

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen py-16">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                            Contact Us
                        </h1>

                        <p className="text-slate-400 leading-relaxed mb-12">
                            Have questions, feedback, or need help? We&apos;d love to hear from you.
                        </p>

                        <div className="space-y-6 mb-12">
                            <Card className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#8ACE00]/10 border border-[#8ACE00]/20 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-[#8ACE00]" />
                                    </div>
                                    <div>
                                        <h2 className="font-display text-xl font-semibold text-white mb-2">
                                            Email Us
                                        </h2>
                                        <p className="text-slate-400 leading-relaxed mb-3">
                                            For general inquiries, feedback, or support, send us an email:
                                        </p>
                                        <a
                                            href="mailto:contact@bratgenerator.com"
                                            className="text-[#8ACE00] hover:underline font-medium"
                                        >
                                            contact@bratgenerator.com
                                        </a>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center flex-shrink-0">
                                        <MessageSquare className="w-6 h-6 text-fuchsia-400" />
                                    </div>
                                    <div>
                                        <h2 className="font-display text-xl font-semibold text-white mb-2">
                                            Feedback & Support
                                        </h2>
                                        <p className="text-slate-400 leading-relaxed mb-3">
                                            We value your feedback! Whether you have suggestions for new features, found a bug,
                                            or just want to share how you&apos;re using Brat Generator, we want to hear from you.
                                        </p>
                                        <ul className="list-disc list-inside text-slate-400 space-y-1">
                                            <li>Feature requests and suggestions</li>
                                            <li>Bug reports and technical issues</li>
                                            <li>Questions about how to use the tool</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h2 className="font-display text-xl font-semibold text-white mb-2">
                                            Response Time
                                        </h2>
                                        <p className="text-slate-400 leading-relaxed">
                                            We do our best to respond to all inquiries within 1-3 business days. Please note that
                                            Brat Generator is a community project, so response times may vary.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="prose prose-invert prose-slate max-w-none space-y-6">
                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Before Contacting Us
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-3">
                                    Before reaching out, you might find answers to common questions on our homepage.
                                    The tool is designed to be simple and intuitive, so most issues can be resolved by:
                                </p>
                                <ul className="list-disc list-inside text-slate-400 space-y-2">
                                    <li>Refreshing your browser or clearing your cache</li>
                                    <li>Ensuring you&apos;re using an up-to-date, modern web browser (Chrome, Firefox, Safari, or Edge)</li>
                                    <li>Checking that JavaScript is enabled in your browser</li>
                                    <li>Trying the tool in an incognito/private browsing window</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Privacy Notice
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Any information you provide when contacting us will only be used to respond to your inquiry
                                    and improve our service. We will not share your contact information with third parties or
                                    use it for marketing purposes. For more details, see our Privacy Policy.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-display text-xl font-semibold text-white mb-4">
                                    Community & Social Media
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    While we don&apos;t currently have official social media accounts, we love seeing how people use
                                    Brat Generator! Feel free to share your creations and tag them with #BratGenerator to connect
                                    with other users.
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
