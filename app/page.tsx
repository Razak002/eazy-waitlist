'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Users, ShieldCheck, Zap, Wallet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Bricolage_Grotesque } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const brico = Bricolage_Grotesque({
  subsets: ['latin']
})

const users = [
  { imgUrl: './assets/abdul.png' },
  { imgUrl: './assets/lucid.png' },
  { imgUrl: './assets/john.png' },
  { imgUrl: './assets/linda.png' },
];

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState('#000')

  useEffect(() => {
    setColor(resolvedTheme === 'dark' ? '#000' : '#FF8C00')
  }, [resolvedTheme])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (data.status === "ok") {
        setSubmitted(true);
      } else {
        setError(data.message || "Something went wrong.")
      }
    } catch (err) {
      setError("Network error, please try again")
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <main className=" relative flex min-h-screen w-full  items-center justify-center overflow-hidden xl:h-screen">

      <div className="relative z-[100] mx-auto max-w-2xl px-4 py-8 text-center">

        <Link
          href="/about"
          aria-label='About Eazy_Linc'
          className="border-primary/10 from-primary/15 to-primary/5 mb-4 inline-flex items-center gap-2 rounded-md border bg-gradient-to-r px-4 backdrop-blur-sm"
        >
          <img
            src="./assets/easy2.png"
            alt="logo"
            className="animate-spin h-12 w-12"
          />
          <span className="text-sm font-medium">EasyLinc</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </Link>


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={cn(
            'from-foreground via-foreground/80 to-foreground/40 mb-4 bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent sm:text-7xl',
            brico.className,
          )}
        >
          Join the{' '}
          <span className="bg-primary from-foreground to-primary via-orange-300 bg-clip-text text-transparent dark:bg-gradient-to-b">
            Waitlist
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-muted-foreground mt-2 mb-12 sm:text-lg"
        >
          Be the first to experience   <Link href="/about" aria-label='About Eazy_Linc'> <span className='text-primary font-semibold underline'>Easylinc</span></Link> the smarter way to connect with trusted service providers.
          Find house helps, drivers, cleaners, and more, faster than ever before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          <div
            className={cn(
              'border-primary/10 flex flex-col items-center justify-center rounded-xl border bg-white/5 p-4 backdrop-blur-md',
              resolvedTheme === 'dark' ? 'glass' : 'glass2',
            )}
          >
            <Users className="text-primary mb-2 h-5 w-5" />
            <span className="text-xl font-bold">100+</span>
            <span className="text-muted-foreground text-xs">Service Providers</span>
          </div>

          <div
            className={cn(
              'border-primary/10 flex flex-col items-center justify-center rounded-xl border bg-white/5 p-4 backdrop-blur-md',
              resolvedTheme === 'dark' ? 'glass' : 'glass2',
            )}
          >
            <ShieldCheck className="text-primary mb-2 h-5 w-5" />
            <span className="text-xl font-bold">Trusted</span>
            <span className="text-muted-foreground text-xs">Background Verified</span>
          </div>

          <div
            className={cn(
              'border-primary/10 flex flex-col items-center justify-center rounded-xl border bg-white/5 p-4 backdrop-blur-md',
              resolvedTheme === 'dark' ? 'glass' : 'glass2',
            )}
          >
            <Zap className="text-primary mb-2 h-5 w-5" />
            <span className="text-xl font-bold">Fast</span>
            <span className="text-muted-foreground text-xs">Easy Connections</span>
          </div>
          <div
            className={cn(
              'border-primary/10 flex flex-col items-center justify-center rounded-xl border bg-white/5 p-4 backdrop-blur-md',
              resolvedTheme === 'dark' ? 'glass' : 'glass2',
            )}
          >
            <Wallet className="text-primary mb-2 h-5 w-5" />
            <span className="text-xl font-bold">Affordable</span>
            <span className="text-muted-foreground text-xs">Fair Pricing</span>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="mx-auto flex flex-col gap-4 sm:flex-row"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <>
                <div className="relative flex-1">
                  <motion.input
                    key="email-input"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    required
                    className="border-primary/20 text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-primary/30 w-full rounded-xl border bg-white/5 px-6 py-4 backdrop-blur-md transition-all focus:ring-2 focus:outline-none"
                  />
                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="border-destructive/40 bg-destructive/10 text-destructive mt-2 rounded-xl border px-4 py-1 text-sm sm:absolute"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="group focus:ring-primary/50 relative overflow-hidden rounded-xl cursor-pointer bg-gradient-to-b from-orange-500 to-orange-700 px-8 py-4 font-semibold text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] transition-all duration-300 hover:shadow-[#FF8C00]/50  focus:ring-2 focus:outline-none active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                    <Sparkles className="h-4 w-4 transition-all duration-300 group-hover:rotate-12" />
                  </span>
                  <span className="to-primary absolute inset-0 z-0 bg-gradient-to-r from-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </button>
              </>
            ) : (
              <motion.div
                key="thank-you-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className={cn(
                  'border-primary/20 from-primary/10 to-primary/10 text-primary flex-1 cursor-pointer rounded-xl border bg-gradient-to-r via-transparent px-6 py-4 font-medium backdrop-blur-md transition-all duration-300 hover:shadow-[#FF8C00]/50 active:brightness-125',
                  resolvedTheme === 'dark' ? 'glass' : 'glass2',
                )}
              >
                <span className="flex items-center justify-center gap-2">
                  Thanks for joining!{' '}
                  <Sparkles className="h-4 w-4 animate-pulse" />
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-10 flex items-center justify-center gap-1"
        >
          <div className="flex -space-x-3">
            {users.map((user, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: -10 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.2 }}
                className="border-background from-primary size-10 rounded-full border-2 bg-gradient-to-r to-orange-500 p-[2px]"
              >
                <div className="overflow-hidden rounded-full">
                  <img
                    src={user.imgUrl}
                    alt="Avatar"
                    className="rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6"
                    width={40}
                    height={40}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-muted-foreground ml-2"
          >
            <span className="text-primary font-semibold">100+</span> already
            joined ✨
          </motion.span>
        </motion.div>
      </div>
    </main>
  );
}
