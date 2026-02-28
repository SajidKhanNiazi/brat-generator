import React from 'react'
import { BlogLayout } from '@/components/layout/BlogLayout'
import Link from 'next/link'
import Image from 'next/image'
import { Check, Clock, Palette, Smartphone, Video, Zap } from 'lucide-react'

export default function BratTikTokStoryGuidePost() {
    return (
        <BlogLayout
            title="Brat Image for TikTok Story — How to Create the Perfect Brat Aesthetic Story"
            description="Master the vertical format with our guide on creating viral Brat aesthetic images specifically for TikTok Stories and Reels."
            breadcrumb={[
                { label: 'Blog', href: '/blog' },
                { label: 'TikTok Story Guide', href: '/blog/how-to-make-a-brat-image-for-tiktok-story' }
            ]}
        >
            <div className="mb-8 sm:mb-12 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <Image
                    src="/blog/feature-tiktok.png"
                    alt="Brat Image for TikTok Story Guide Feature"
                    width={1200}
                    height={630}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>

            <h2 className="!text-[#8ACE00] !not-italic !text-2xl sm:!text-3xl">Vertical Format is Everything (9:16 Ratio)</h2>
            <p className="text-lg sm:text-xl leading-relaxed">
                If you want to create a strong <strong>brat image for a tiktok story</strong>, you must think in vertical format first. TikTok Stories use a <strong>9:16 ratio</strong>, which means your design should be tall, not square.
            </p>
            <p>
                Many people make the mistake of using a square 1:1 image, which leaves big empty gaps at the top and bottom of the screen. To truly capture the <strong>brat aesthetic</strong>, your image should fill the entire screen, making your message bold and impossible to miss.
            </p>

            <div className="bg-[#8ACE00]/10 border-l-4 border-[#8ACE00] p-5 sm:p-8 my-8 rounded-r-2xl text-white font-medium italic">
                &ldquo;A great TikTok story doesn&apos;t just share information; it stops the thumb. The Brat aesthetic is the literal definition of a scroll-stopper.&rdquo;
            </div>

            <div className="my-14 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8ACE00] via-fuchsia-400 to-[#8ACE00] rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative p-1 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#8ACE00]/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-400/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>

                    <div className="relative p-8 text-center sm:p-12">
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-[#8ACE00] uppercase bg-[#8ACE00]/10 rounded-full">
                            Viral Tool
                        </span>
                        <h3 className="text-white text-3xl sm:text-4xl font-black mb-6 !mt-0 leading-tight">
                            Ready to go viral with your own <span className="text-[#8ACE00]">Brat style on TikTok?</span>
                        </h3>
                        <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                            Stop scrolling and start creating. Join the trend and generate your own high-quality vertical Brat images for TikTok in seconds.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-10 py-5 text-xl font-black !text-black bg-[#8ACE00] rounded-full hover:bg-white transition-all hover:scale-105 shadow-[0_0_30px_rgba(138,206,0,0.5)] group-hover:shadow-[0_0_50px_rgba(138,206,0,0.7)]"
                        >
                            Start Generating for TikTok Now
                        </Link>
                        <p className="mt-6 text-slate-500 text-sm font-medium">
                            No sign-up required &bull; 100% Free &bull; 9:16 Vertical Export
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="!text-fuchsia-400 !not-italic !text-2xl sm:!text-3xl">Key Design Elements for TikTok</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                    <h3 className="text-white font-bold flex items-center gap-2 mb-2">
                        <Smartphone className="w-5 h-5 text-[#8ACE00]" />
                        Mobile Optimized
                    </h3>
                    <p className="text-sm text-slate-400 !m-0">Designed specifically for the vertical 9:16 aspect ratio of mobile phones.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                    <h3 className="text-white font-bold flex items-center gap-2 mb-2">
                        <Zap className="w-5 h-5 text-fuchsia-400" />
                        High Contrast
                    </h3>
                    <p className="text-sm text-slate-400 !m-0">Vibrant neon green backgrounds that pop against TikTok&apos;s interface.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                    <h3 className="text-white font-bold flex items-center gap-2 mb-2">
                        <Video className="w-5 h-5 text-sky-400" />
                        Video Ready
                    </h3>
                    <p className="text-sm text-slate-400 !m-0">Perfect for use as backgrounds in Green Screen effects or video overlays.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                    <h3 className="text-white font-bold flex items-center gap-2 mb-2">
                        <Palette className="w-5 h-5 text-yellow-400" />
                        Authentic Fonts
                    </h3>
                    <p className="text-sm text-slate-400 !m-0">The characteristic low-res, slightly blurred Arial-style typography.</p>
                </div>
            </div>

            <h2 className="!text-sky-400 !not-italic !text-2xl sm:!text-3xl">Mind the TikTok Safe Zones</h2>
            <p>
                One of the most important parts of a <strong>TikTok Story</strong> is avoiding the &ldquo;dead zones.&rdquo; TikTok places your profile icon, sharing buttons, and reply box over your story. If you place your <strong>Brat text</strong> too low or too high, it will be covered.
            </p>
            <div className="bg-slate-900/60 rounded-3xl p-6 sm:p-10 border border-slate-800 my-10 shadow-xl">
                <h3 className="text-white font-bold text-xl mb-6">Safe Zone Checklist:</h3>
                <ul className="space-y-4 !m-0 list-none p-0">
                    <li className="flex items-start gap-3 text-slate-400">
                        <Check className="w-5 h-5 text-[#8ACE00] mt-1 flex-shrink-0" />
                        <div>
                            <strong className="text-white">Top 15% Buffer:</strong> Keep the top clear for the progress bar and your profile name.
                        </div>
                    </li>
                    <li className="flex items-start gap-3 text-slate-400">
                        <Check className="w-5 h-5 text-[#8ACE00] mt-1 flex-shrink-0" />
                        <div>
                            <strong className="text-white">Bottom 25% Buffer:</strong> Avoid the bottom for the reply box and caption area.
                        </div>
                    </li>
                    <li className="flex items-start gap-3 text-slate-400">
                        <Check className="w-5 h-5 text-[#8ACE00] mt-1 flex-shrink-0" />
                        <div>
                            <strong className="text-white">Center Focus:</strong> Always place your main text in the middle third of the screen for maximum impact.
                        </div>
                    </li>
                </ul>
            </div>

            <h2 className="text-white !not-italic !text-2xl sm:!text-3xl">How to Create Your Story Step-by-Step</h2>
            <div className="space-y-4 my-8">
                <div className="flex gap-4 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:bg-slate-900 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#8ACE00] text-black font-black flex items-center justify-center flex-shrink-0 shadow-lg">1</div>
                    <div>
                        <p className="!m-0 text-white font-bold">Open Brat-Gen</p>
                        <p className="!m-0 text-slate-400 text-sm">Head to <Link href="/"><strong>Brat Generator</strong></Link> on your mobile browser.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:bg-slate-900 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#8ACE00] text-black font-black flex items-center justify-center flex-shrink-0 shadow-lg">2</div>
                    <div>
                        <p className="!m-0 text-white font-bold">Choose Story Size</p>
                        <p className="!m-0 text-slate-400 text-sm">Select the <strong>9:16 (Story)</strong> aspect ratio option.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:bg-slate-900 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#8ACE00] text-black font-black flex items-center justify-center flex-shrink-0 shadow-lg">3</div>
                    <div>
                        <p className="!m-0 text-white font-bold">Type Your Thought</p>
                        <p className="!m-0 text-slate-400 text-sm">Keep it short, lowercase, and full of &ldquo;brat&rdquo; energy.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:bg-slate-900 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#8ACE00] text-black font-black flex items-center justify-center flex-shrink-0 shadow-lg">4</div>
                    <div>
                        <p className="!m-0 text-white font-bold">Upload to TikTok</p>
                        <p className="!m-0 text-slate-400 text-sm">Download the PNG and upload it directly to your Stories or as a background for your Reel.</p>
                    </div>
                </div>
            </div>

            <h2 className="!text-[#8ACE00] !not-italic !text-2xl sm:!text-3xl mt-12">FAQs</h2>
            <div className="space-y-8 my-8">
                <div>
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-3">Why are my TikTok stories blurry?</h3>
                    <p className="text-slate-400 !m-0">TikTok compresses images. To avoid this, use a high-resolution generator like <Link href="/"><strong>Brat-Gen</strong></Link> that exports at 1080x1920px for crystal-clear results.</p>
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-3">Can I use Brat images for TikTok Reels?</h3>
                    <p className="text-slate-400 !m-0">Absolutely! Many creators use a static Brat image as the background for their Reels while they speak or use the search-bar trend.</p>
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-3">What are safe zones for TikTok stories?</h3>
                    <p className="text-slate-400 !m-0">Safe zones are areas that aren&apos;t covered by TikTok&apos;s UI (buttons, names, etc.). Always keep your text in the center 60% of the screen.</p>
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-3">Does the Brat aesthetic still work in 2026?</h3>
                    <p className="text-slate-400 !m-0">Yes, the minimalist, high-contrast look has become a staple of internet culture, evolving into a timeless way to share quick thoughts.</p>
                </div>
            </div>
        </BlogLayout>
    )
}
