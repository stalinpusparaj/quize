import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSubmitSurvey, useGetSurveyStats } from '@workspace/api-client-react';
import type { SurveyInput } from '@workspace/api-client-react';
import { surveyQuestions, calculatePersona, getEstimatedValue } from '@/lib/questions';

import Background from './Background';
import { RobotAvatar } from './RobotAvatar';
import { ProcessingScreen } from './ProcessingScreen';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { CheckCircle, ChevronRight, ArrowRight, Zap, Target, TrendingUp, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GrowthOS() {
  const [currentStep, setCurrentStep] = useState(-1); // -1 is welcome
  const [answers, setAnswers] = useState<Partial<SurveyInput>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const [persona, setPersona] = useState<ReturnType<typeof calculatePersona> | null>(null);
  const [estValue, setEstValue] = useState(0);

  const submitSurvey = useSubmitSurvey();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: stats } = useGetSurveyStats({ query: { enabled: showReveal } as any });

  const totalQuestions = surveyQuestions.length;
  const progress = Math.max(0, Math.min(100, ((currentStep + 1) / totalQuestions) * 100));

  const question = currentStep >= 0 && currentStep < totalQuestions ? surveyQuestions[currentStep] : null;

  const handleStart = () => setCurrentStep(0);

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    const p = calculatePersona(answers);
    const v = getEstimatedValue();
    setPersona(p);
    setEstValue(v);

    // Collect client metadata
    const ua = navigator.userAgent;
    const getOS = () => {
      if (/android/i.test(ua)) return "Android";
      if (/iphone|ipad|ipod/i.test(ua)) return "iOS";
      if (/windows/i.test(ua)) return "Windows";
      if (/mac/i.test(ua)) return "macOS";
      if (/linux/i.test(ua)) return "Linux";
      return "Unknown";
    };
    const getDevice = () => {
      if (/mobile|android|iphone|ipad/i.test(ua)) return "Mobile";
      if (/tablet|ipad/i.test(ua)) return "Tablet";
      return "Desktop";
    };
    const getBrowser = () => {
      if (/edg/i.test(ua)) return "Edge";
      if (/chrome/i.test(ua)) return "Chrome";
      if (/firefox/i.test(ua)) return "Firefox";
      if (/safari/i.test(ua)) return "Safari";
      return "Other";
    };
    const params = new URLSearchParams(window.location.search);
    const sessionId = (() => {
      const key = "growthos_session";
      const existing = sessionStorage.getItem(key);
      if (existing) return existing;
      const id = crypto.randomUUID();
      sessionStorage.setItem(key, id);
      return id;
    })();

    const revenueLabel = v >= 10000000
      ? `₹${(v / 10000000).toFixed(1)} Cr`
      : `₹${(v / 100000).toFixed(1)} L`;

    const metadata: Partial<SurveyInput> = {
      browser: getBrowser(),
      device: getDevice(),
      os: getOS(),
      language: navigator.language || "unknown",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown",
      referrer: document.referrer || "",
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      sessionId,
      revenueOpportunity: revenueLabel,
    };

    const finalData = {
      ...answers,
      ...metadata,
      growthPersona: p.title,
      consent: answers.consent ?? false,
    } as SurveyInput;

    setIsProcessing(true);
    submitSurvey.mutate({ data: finalData });
  };

  const finishProcessing = () => {
    setIsProcessing(false);
    setShowReveal(true);
  };

  // Generic answer handler
  const setAnswer = (field: keyof SurveyInput, value: unknown) => {
    setAnswers((prev: Partial<SurveyInput>) => ({ ...prev, [field]: value }));
  };

  const toggleMultiSelect = (field: keyof SurveyInput, value: string) => {
    const current = (answers[field] as string[]) || [];
    if (current.includes(value)) {
      setAnswer(field, current.filter(v => v !== value));
    } else {
      setAnswer(field, [...current, value]);
    }
  };

  // Helper for contact form
  const isContactValid = () => {
    return answers.name && answers.email && answers.phone && answers.consent;
  };

  const [earlyAccessJoined, setEarlyAccessJoined] = useState(false);

  const formatCurrency = (val: number) => {
    // Format in Indian numbering (lakhs/crores)
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)} L`;
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="min-h-[100dvh] w-full relative flex flex-col font-sans text-foreground overflow-x-hidden selection:bg-primary/30">
      <Background />
      
      {/* Header & Progress */}
      {currentStep >= 0 && !isProcessing && !showReveal && (
        <header className="fixed top-0 left-0 right-0 z-40 bg-background/50 backdrop-blur-md border-b border-white/5">
          <div className="h-1 w-full bg-muted">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-bold tracking-widest text-sm text-primary uppercase">GrowthOS™</div>
            <div className="text-sm text-muted-foreground">{question?.mission || "System Scan"}</div>
          </div>
        </header>
      )}

      {/* Robot Avatar */}
      {currentStep >= 0 && !isProcessing && !showReveal && (
        <RobotAvatar message={question?.robotText || "Scan complete."} />
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center pt-24 pb-24 px-4 sm:px-6 w-full max-w-5xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          
          {/* WELCOME SCREEN */}
          {currentStep === -1 && !isProcessing && !showReveal && (
            <motion.div 
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-card border border-primary/30 shadow-[0_0_40px_rgba(124,58,237,0.3)] mb-8">
                <span className="text-5xl">🌌</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
                GrowthOS™ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  AI Business MRI™
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
                Just like an MRI scans the human body, GrowthOS™ scans your business to reveal hidden growth opportunities, friction points, and your exact path to scale.
              </p>
              <Button size="lg" onClick={handleStart} className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Begin Scan <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-shimmer" />
              </Button>
              <p className="mt-6 text-sm text-muted-foreground">Estimated scan time: ~3 min</p>
            </motion.div>
          )}

          {/* QUESTION SCREENS */}
          {currentStep >= 0 && question && !isProcessing && !showReveal && (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-3xl flex flex-col"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center leading-tight">
                {question.title}
              </h2>

              {question.type === 'choice' && question.options && (
                <div className="w-full flex flex-col items-center">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                    {question.options.map((opt) => {
                      const isSelected = question.multiSelect 
                        ? (answers[question.field] as string[])?.includes(opt.value)
                        : answers[question.field] === opt.value;

                      return (
                        <button
                          key={opt.value}
                          onClick={() => {
                            if (question.multiSelect) {
                              toggleMultiSelect(question.field, opt.value);
                            } else {
                              setAnswer(question.field, opt.value);
                              setTimeout(handleNext, 400); // Auto-advance single select
                            }
                          }}
                          className={cn(
                            "relative p-6 rounded-2xl bg-card border border-card-border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:border-primary flex flex-col items-center justify-center gap-4 text-center group min-h-[140px]",
                            isSelected && "border-primary shadow-[0_0_30px_rgba(124,58,237,0.4)] bg-primary/10 scale-[1.02]"
                          )}
                        >
                          <span className="text-4xl md:text-5xl group-hover:scale-110 transition-transform">{opt.emoji}</span>
                          <span className="font-medium text-sm md:text-base">{opt.label}</span>
                          {isSelected && (
                            <motion.div 
                              initial={{ scale: 0 }} animate={{ scale: 1 }} 
                              className="absolute top-3 right-3 text-primary bg-background rounded-full"
                            >
                              <CheckCircle className="w-5 h-5" />
                            </motion.div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  
                  {question.multiSelect && (
                    <Button 
                      size="lg" 
                      onClick={handleNext} 
                      className="mt-12 w-full max-w-sm"
                      disabled={!(answers[question.field] as string[])?.length}
                    >
                      Continue <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                </div>
              )}

              {question.type === 'input' && (
                <div className="w-full flex flex-col items-center max-w-2xl mx-auto">
                  {question.subtitle && (
                    <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">
                      {question.subtitle}
                    </p>
                  )}
                  <Input
                    value={(answers[question.field] as string) || ""}
                    onChange={(e) => setAnswer(question.field, e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleNext(); }}
                    placeholder={question.placeholder || "Type your answer here…"}
                    className="mb-4 text-lg p-6 h-14 w-full"
                    autoFocus
                  />
                  {/* Suggestion chips */}
                  {question.suggestions && question.suggestions.length > 0 && (
                    <div className="w-full mb-8">
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-medium">Suggested:</p>
                      <div className="flex flex-wrap gap-2">
                        {question.suggestions.map((chip) => {
                          const currentVal = (answers[question.field] as string) || "";
                          const isSelected = currentVal.split(',').map(s => s.trim()).includes(chip);
                          return (
                            <button
                              key={chip}
                              type="button"
                              onClick={() => {
                                const current = (answers[question.field] as string) || "";
                                const parts = current.split(',').map(s => s.trim()).filter(Boolean);
                                if (parts.includes(chip)) {
                                  // Deselect — remove from list
                                  setAnswer(question.field, parts.filter(p => p !== chip).join(', '));
                                } else {
                                  setAnswer(question.field, [...parts, chip].join(', '));
                                }
                              }}
                              className={cn(
                                "px-3 py-1.5 rounded-full text-sm border transition-all duration-200 hover:scale-105",
                                isSelected
                                  ? "bg-primary/20 border-primary text-primary font-medium"
                                  : "bg-card border-card-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                              )}
                            >
                              {isSelected ? "✓ " : "+ "}{chip}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  <Button
                    size="lg"
                    onClick={handleNext}
                    className="w-full max-w-sm"
                  >
                    Continue <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  {question.optional && (
                    <button
                      onClick={handleNext}
                      className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
                    >
                      Skip for now →
                    </button>
                  )}
                </div>
              )}

              {question.type === 'open' && (
                <div className="w-full flex flex-col items-center max-w-2xl mx-auto">
                  <Textarea 
                    value={(answers[question.field] as string) || ""}
                    onChange={(e) => setAnswer(question.field, e.target.value)}
                    placeholder="Type your answer here..."
                    className="mb-8 text-xl p-6 min-h-[200px]"
                    autoFocus
                  />
                  <Button 
                    size="lg" 
                    onClick={handleNext}
                    disabled={!(answers[question.field] as string)?.trim()}
                    className="w-full max-w-sm"
                  >
                    Continue <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              )}

              {question.type === 'slider' && (
                <div className="w-full flex flex-col items-center max-w-xl mx-auto mt-8">
                  <div className="w-full flex justify-between mb-8 text-muted-foreground font-medium">
                    <span>1 (Not Valuable)</span>
                    <span className="text-3xl font-bold text-primary">
                      {answers[question.field] || 5}
                    </span>
                    <span>10 (Game Changer)</span>
                  </div>
                  <Slider 
                    defaultValue={[5]} 
                    min={1} 
                    max={10} 
                    step={1}
                    onValueChange={(vals) => setAnswer(question.field, vals[0])}
                    className="mb-16"
                  />
                  <Button size="lg" onClick={handleNext} className="w-full max-w-sm">
                    Continue <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              )}

              {question.type === 'contact' && (
                <div className="w-full flex flex-col max-w-md mx-auto bg-card/50 p-8 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" value={answers.name || ""} onChange={(e) => setAnswer('name', e.target.value)} placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email</Label>
                      <Input id="email" type="email" value={answers.email || ""} onChange={(e) => setAnswer('email', e.target.value)} placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" value={answers.phone || ""} onChange={(e) => setAnswer('phone', e.target.value)} placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website URL</Label>
                      <Input id="website" type="url" value={answers.website || ""} onChange={(e) => setAnswer('website', e.target.value)} placeholder="https://company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                      <Input id="linkedin" type="url" value={answers.linkedin || ""} onChange={(e) => setAnswer('linkedin', e.target.value)} placeholder="https://linkedin.com/in/johndoe" />
                    </div>
                    <div className="flex items-start space-x-3 pt-2">
                      <Checkbox 
                        id="consent" 
                        checked={answers.consent || false}
                        onCheckedChange={(c) => setAnswer('consent', !!c)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="consent" className="text-sm font-normal text-muted-foreground leading-relaxed">
                          I agree to receive updates from GrowthOS™ and allow my data to be processed to generate my report.
                        </Label>
                      </div>
                    </div>
                    <Button 
                      size="lg" 
                      onClick={handleNext}
                      disabled={!isContactValid()}
                      className="w-full mt-4"
                    >
                      Generate My Growth DNA <Zap className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* PROCESSING SCREEN */}
          {isProcessing && (
            <ProcessingScreen key="processing" onComplete={finishProcessing} />
          )}

          {/* REVEAL SCREEN */}
          {showReveal && persona && (
            <motion.div 
              key="reveal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-4xl text-center"
            >
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 font-medium text-sm mb-6"
              >
                🎉 Your Growth DNA is Ready!
              </motion.div>
              
              <h2 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight">
                {persona.title}
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                {persona.desc}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-card-border p-8 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
                  <h3 className="text-lg font-medium text-muted-foreground mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-secondary" /> Estimated Opportunity
                  </h3>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                    {formatCurrency(estValue)}
                    <span className="text-xl text-muted-foreground block mt-2 font-normal">in annual hidden revenue</span>
                  </div>
                </div>

                <div className="bg-card border border-card-border p-8 rounded-3xl relative overflow-hidden text-left">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                  <h3 className="text-lg font-medium text-muted-foreground mb-6 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" /> Key Areas to Fix
                  </h3>
                  <ul className="space-y-4">
                    {persona.tags.map(tag => (
                      <li key={tag} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="font-medium">{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-8 sm:p-12 rounded-3xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-6">Unlock Your Full Action Plan</h3>
                <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
                  <li className="flex items-center gap-2"><Check className="text-secondary w-5 h-5" /> Free AI Business Growth Report</li>
                  <li className="flex items-center gap-2"><Check className="text-secondary w-5 h-5" /> Beta Pricing for GrowthOS™</li>
                  <li className="flex items-center gap-2"><Check className="text-secondary w-5 h-5" /> Exclusive Product Updates</li>
                </ul>
                {earlyAccessJoined ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-3 py-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center">
                      <Check className="w-7 h-7 text-secondary" />
                    </div>
                    <p className="text-xl font-bold text-secondary">You're on the list! 🎉</p>
                    <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                      Your Business MRI™ results have been saved. We'll reach out with your full action plan shortly.
                    </p>
                  </motion.div>
                ) : (
                  <Button
                    size="lg"
                    className="w-full sm:w-auto px-12 h-16 text-lg group relative overflow-hidden"
                    onClick={() => setEarlyAccessJoined(true)}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Join Early Access <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-shimmer" />
                  </Button>
                )}
                {stats && stats.totalSubmissions > 10 && (
                  <p className="mt-6 text-sm text-muted-foreground">
                    Join {stats.totalSubmissions.toLocaleString()} business owners already on the waitlist.
                  </p>
                )}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
