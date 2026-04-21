'use client'
import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface LoginPageProps {
  onLoginSuccess?: () => void;
  onBack?: () => void;
  onSignup?: () => void;
}

export default function LoginPage({ onLoginSuccess, onBack, onSignup }: LoginPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen w-full flex flex-col items-center justify-center relative bg-[#020402] px-6"
    >
      {/* Background Decorative Rings/Logic */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="fog f1"></div>
        <div className="fog f2"></div>
      </div>

      <div className="w-full max-w-[400px] flex flex-col items-center z-10">
        {/* 3D revolving Luce logo */}
        <div className="scene-logo scale-125 mb-8">
          <div className="logo-3d-wrapper">
            <div className="l-diamond ld-outer"></div>
            <div className="l-diamond ld-inner"></div>
            <div className="l-diamond ld-inner-2"></div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-8 font-syne text-center">
          Log in to LUCE
        </h2>

        <div className="w-full space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-widest text-[#00ff50]/70 font-semibold ml-1">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="name@company.com"
              className="bg-[#0a140a]/80 border-[#00ff50]/10 border-white/5 focus-visible:ring-[#00ff50]/30 text-white h-12"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-widest text-[#00ff50]/70 font-semibold ml-1">
              Password
            </label>
            <Input
              type="password"
              placeholder="••••••••"
              className="bg-[#0a140a]/80 border-[#00ff50]/10 border-white/5 focus-visible:ring-[#00ff50]/30 text-white h-12"
            />
          </div>

          <Button
            className="w-full h-12 mt-4 bg-white text-black hover:bg-white/90 font-bold tracking-tight rounded-xl transition-all hover:scale-[1.01] active:scale-[0.98]"
            onClick={onLoginSuccess}
          >
            Sign In
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-white/50">
            Not on LUCE?{' '}
            <button
              className="text-white hover:underline underline-offset-4 font-bold decoration-white/30"
              onClick={onSignup}
            >
              Create an account
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
