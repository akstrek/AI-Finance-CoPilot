'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

interface SignupPageProps {
  onBack?: () => void;
  onLogin?: () => void;
}

export default function SignupPage({ onBack, onLogin }: SignupPageProps) {
  const [showPassword, setShowPassword] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen w-full flex bg-[#020402]"
    >
      {/* Left Panel - 40% - 3D Visuals */}
      <div className="hidden lg:flex w-[40%] relative overflow-hidden flex-col items-center justify-center border-r border-[#00ff50]/5">
        {/* Glow and Background FX */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="fog f2 opacity-40 scale-150 top-[20%] left-[-20%]"></div>
          <div className="fog f1 opacity-30 bottom-[-10%] right-[-10%]"></div>
          <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-[#00ff50]/5 to-transparent opacity-60"></div>
        </div>

        {/* 3D Visual */}
        <div className="relative z-10 flex flex-col items-center">
            <div className="scene-logo scale-[2] mb-24">
            <div className="logo-3d-wrapper animate-[logoSpin_20s_infinite_linear]">
                <div className="l-diamond ld-outer shadow-[0_0_40px_rgba(0,255,80,0.1)]"></div>
                <div className="l-diamond ld-inner"></div>
                <div className="l-diamond ld-inner-2"></div>
            </div>
            </div>
            <div className="mt-4 px-12 text-center">
                <h3 className="text-xl font-bold text-white font-syne tracking-tight">The Future of Capital</h3>
                <p className="text-sm text-white/40 mt-2 max-w-[280px]">Autonomous intelligence for the modern portfolio manager.</p>
            </div>
        </div>

        {/* Teal Ambient Glow Beneath */}
        <div className="absolute bottom-[20%] w-[300px] h-[60px] bg-[#00ff50]/10 blur-[60px] rounded-full"></div>
      </div>

      {/* Right Panel - 60% - Sign Up Form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 relative py-20 lg:py-0">
        <button
          onClick={onBack}
          className="lg:fixed lg:top-8 lg:left-8 mb-12 lg:mb-0 text-[10px] uppercase font-bold tracking-widest text-white/40 hover:text-[#00ff50] transition-colors flex items-center gap-2 self-start"
        >
          <ArrowLeft size={14} strokeWidth={3} /> Back to LUCE
        </button>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[480px] space-y-8"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <h2 className="text-4xl font-bold text-white font-syne tracking-tight">
                Create your account
            </h2>
            <p className="text-white/40 mt-2 text-lg leading-relaxed">
                Join the autonomous era of asset management.
            </p>
          </motion.div>

          <div className="space-y-5">
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#00ff50]/70 font-semibold ml-1">First Name</label>
                <Input
                   type="text"
                   placeholder="Luce"
                   className="bg-[#0a140a]/80 border-[#00ff50]/10 focus-visible:ring-[#00ff50]/30 text-white h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#00ff50]/70 font-semibold ml-1">Last Name</label>
                <Input
                   type="text"
                   placeholder="Pilot"
                   className="bg-[#0a140a]/80 border-[#00ff50]/10 focus-visible:ring-[#00ff50]/30 text-white h-12"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#00ff50]/70 font-semibold ml-1">Email Address</label>
              <Input
                type="email"
                placeholder="luce@aurora.ai"
                className="bg-[#0a140a]/80 border-[#00ff50]/10 focus-visible:ring-[#00ff50]/30 text-white h-12"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2 relative">
              <label className="text-[10px] uppercase tracking-widest text-[#00ff50]/70 font-semibold ml-1">Password</label>
              <div className="relative">
                <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="bg-[#0a140a]/80 border-[#00ff50]/10 focus-visible:ring-[#00ff50]/30 text-white h-12 pr-12"
                />
                <button
                   type="button"
                   onClick={() => setShowPassword(!showPassword)}
                   className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-[#00ff50] transition-colors"
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <Button
                className="w-full h-14 bg-[#00ff50] text-[#020402] hover:bg-[#00ff50]/90 font-bold text-lg tracking-tight rounded-xl shadow-[0_0_20px_rgba(0,255,80,0.2)] transition-all hover:scale-[1.01] active:scale-[0.98]"
              >
                Create Account
              </Button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center pt-2">
            <p className="text-sm text-white/50">
              Already have an account?{' '}
              <button
                onClick={onLogin}
                className="text-white hover:underline underline-offset-4 font-bold decoration-white/30"
              >
                Sign in
              </button>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
