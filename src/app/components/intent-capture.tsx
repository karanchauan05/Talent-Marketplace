import { useState } from 'react';
import { StepIndicator } from './step-indicator';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ArrowRight, CheckCircle2, Users, Shield, Zap, Play } from 'lucide-react';
import { motion } from 'motion/react';

interface IntentCaptureProps {
  onContinue: (intent: string) => void;
}

const suggestions = [
  'IoT sensor for agriculture',
  'Industrial automation controller',
  'Medical diagnostic device',
  'Smart home hub',
  'Robotics arm controller',
  'Wearable health tracker',
];

const stats = [
  { value: '120+', label: 'Verified Teams' },
  { value: '450+', label: 'Projects Delivered' },
  { value: '6', label: 'Major Cities' },
];

const benefits = [
  { icon: Users, title: 'Execution-Ready Teams', desc: 'Pre-vetted clusters with proven collaboration' },
  { icon: Shield, title: 'Verified & Trusted', desc: 'Background checks and project history validated' },
  { icon: Zap, title: 'Fast Matching', desc: 'Get recommendations in under 2 minutes' },
];

export function IntentCapture({ onContinue }: IntentCaptureProps) {
  const [intent, setIntent] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const [hoveredSuggestion, setHoveredSuggestion] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (intent.trim()) {
      onContinue(intent);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setIntent(suggestion);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <StepIndicator currentStep={1} />
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">
                Trusted by 180+ Hardware Startups
              </span>
            </motion.div>
            
            <h1 className="text-5xl mb-5 text-neutral-900 leading-tight">
              Build Your Hardware Product<br />with the Right Team
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Connect with verified electronics and hardware execution teams in your city.
              From PCB design to prototyping—get expert support in minutes.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-12 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl text-neutral-900 mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-8 rounded-2xl border-2 border-neutral-200 shadow-lg"
          >
            <label htmlFor="intent" className="block text-base mb-3 text-neutral-900">
              What are you building?
            </label>
            <div className="relative">
              <Input
                id="intent"
                type="text"
                placeholder="e.g. IoT device, PCB design, robotics module"
                value={intent}
                onChange={(e) => setIntent(e.target.value)}
                className="mb-4 h-14 text-base pr-12 border-2 border-neutral-300 focus:border-neutral-900"
              />
              {intent && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-4 top-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </motion.div>
              )}
            </div>
            
            {/* Suggestions */}
            <div className="mb-6">
              <p className="text-xs text-neutral-500 mb-3">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <motion.button
                    key={suggestion}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    onHoverStart={() => setHoveredSuggestion(index)}
                    onHoverEnd={() => setHoveredSuggestion(null)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                      hoveredSuggestion === index
                        ? 'bg-neutral-900 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            </div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                disabled={!intent.trim()}
                className="w-full h-14 bg-neutral-900 hover:bg-neutral-800 text-white text-base"
              >
                Get Recommendations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <button
              type="button"
              onClick={() => setShowVideo(!showVideo)}
              className="w-full mt-4 text-sm text-neutral-600 hover:text-neutral-900 flex items-center justify-center gap-2 py-2"
            >
              <Play className="w-4 h-4" />
              {showVideo ? 'Hide' : 'Watch'} How it Works (2 min)
            </button>

            {showVideo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 bg-neutral-100 rounded-lg overflow-hidden"
              >
                <div className="aspect-video flex items-center justify-center text-neutral-500">
                  <div className="text-center">
                    <Play className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Video walkthrough placeholder</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.form>
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-neutral-900" />
                  </div>
                  <h3 className="text-base mb-2 text-neutral-900">{benefit.title}</h3>
                  <p className="text-sm text-neutral-600">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <p className="text-sm text-neutral-500">
            All teams are background-verified • Secure platform • No upfront payment required
          </p>
        </motion.div>
      </div>
    </div>
  );
}