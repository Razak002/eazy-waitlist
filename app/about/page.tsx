// app/about/page.tsx
'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Users, Zap, Briefcase, Handshake } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Bricolage_Grotesque } from 'next/font/google';
import { cn } from '@/lib/utils';

const brico = Bricolage_Grotesque({
    subsets: ['latin'],
});

export default function About() {
    const { resolvedTheme } = useTheme();

    return (
        <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden xl:h-screen">
            <div className="relative z-[100] mx-auto w-full max-w-2xl px-4 py-8 text-center sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link
                        href="/"
                        className="border-primary/10 from-primary/15 to-primary/5 inline-flex items-center gap-2 rounded-md border bg-gradient-to-r px-4 py-2 backdrop-blur-sm"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span className="text-sm font-medium">Go Back</span>
                    </Link>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={cn(
                        'from-foreground via-foreground/80 to-foreground/40 mb-4  bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent sm:text-7xl',
                        brico.className,
                    )}
                >
                    About{' '}
                    <span className="bg-primary from-foreground to-primary via-orange-300 bg-clip-text text-transparent dark:bg-gradient-to-b">
                        EasyLinc
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-muted-foreground mt-2 mb-12 text-base sm:text-lg"
                >
                    EasyLinc is your trusted platform for connecting with verified service providers. Our mission is to make finding reliable help easy, fast, and safe, providing peace of mind for both service seekers and providers.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2"
                >
                    <div
                        className={cn(
                            'border-primary/10 flex flex-col items-start rounded-xl border bg-white/5 p-8 backdrop-blur-md',
                            resolvedTheme === 'dark' ? 'glass' : 'glass2',
                        )}
                    >
                        <div className=' flex flex-row items-start'>
                            <Briefcase className="text-primary mb-4 h-8 w-8 mr-4" />
                            <h3 className="mb-2 text-2xl font-bold">Our Vision</h3>
                        </div>

                        <p className="text-muted-foreground text-left text-sm">
                            We envision a world where finding reliable and skilled service providers is effortless and transparent. By leveraging technology, we aim to build a community based on trust, quality, and mutual respect, empowering both service seekers and professionals.
                        </p>
                    </div>
                    <div
                        className={cn(
                            'border-primary/10 flex flex-col items-start rounded-xl border bg-white/5 p-8 backdrop-blur-md',
                            resolvedTheme === 'dark' ? 'glass' : 'glass2',
                        )}
                    >
                        <div className=' flex flex-row items-start'>
                            <Handshake className="text-primary mb-4 h-8 w-8 mr-4" />
                            <h3 className="mb-2 text-2xl font-bold">How We Help</h3>
                        </div>

                        <p className="text-muted-foreground text-left text-sm">
                            EasyLinc simplifies your search by providing a curated list of vetted professionals. We handle the background checks and verification, so you can focus on finding the right fit for your needs, from house helps and drivers to cleaners and more.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
                >
                    <div
                        className={cn(
                            'border-primary/10 flex flex-col items-center justify-center rounded-xl border bg-white/5 p-8 backdrop-blur-md',
                            resolvedTheme === 'dark' ? 'glass' : 'glass2',
                        )}
                    >
                        <ShieldCheck className="text-primary mb-4 h-8 w-8" />
                        <h3 className="text-lg font-bold">Trust & Safety</h3>
                        <p className="text-muted-foreground text-center text-sm">Every service provider is background-verified to ensure your safety.</p>
                    </div>

                    <div
                        className={cn(
                            'border-primary/10 flex flex-col items-center justify-center rounded-xl border bg-white/5 p-8 backdrop-blur-md',
                            resolvedTheme === 'dark' ? 'glass' : 'glass2',
                        )}
                    >
                        <Users className="text-primary mb-4 h-8 w-8" />
                        <h3 className="text-lg font-bold">Vast Network</h3>
                        <p className="text-muted-foreground text-center text-sm">Access a wide range of professionals, from house helps to drivers.</p>
                    </div>

                    <div
                        className={cn(
                            'border-primary/10 flex flex-col items-center justify-center rounded-xl border bg-white/5 p-8 backdrop-blur-md',
                            resolvedTheme === 'dark' ? 'glass' : 'glass2',
                        )}
                    >
                        <Zap className="text-primary mb-4 h-8 w-8" />
                        <h3 className="text-lg font-bold">Fast & Efficient</h3>
                        <p className="text-muted-foreground text-center text-sm">Find and hire the right person for the job in minutes, not days.</p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}