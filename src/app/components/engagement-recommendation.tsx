import { StepIndicator } from './step-indicator';
import { Button } from './ui/button';
import { Users, User, Sparkles } from 'lucide-react';

interface EngagementRecommendationProps {
  intent: string;
  city: string;
  onContinue: (engagementType: 'cluster' | 'individual') => void;
  onCompare: () => void;
}

export function EngagementRecommendation({
  intent,
  city,
  onContinue,
  onCompare,
}: EngagementRecommendationProps) {
  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <StepIndicator currentStep={3} />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl mb-3 text-neutral-900">
              Our Recommendation for You
            </h1>
            <p className="text-base text-neutral-600">
              Based on your project type: <strong>{intent}</strong> in <strong>{city}</strong>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Cluster / Team Option - Recommended */}
            <div className="bg-white p-8 rounded-lg border-2 border-neutral-900 relative">
              <div className="absolute -top-3 left-6 bg-neutral-900 text-white px-3 py-1 text-xs rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Recommended
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-neutral-900" />
                </div>
                <div>
                  <h3 className="text-xl text-neutral-900">Cluster / Team</h3>
                  <p className="text-sm text-neutral-600">Full execution support</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-neutral-600 mb-4">
                  <strong className="text-neutral-900">Best for:</strong> End-to-end product development
                  requiring multiple skill sets
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Complete team with complementary skills</li>
                  <li>• Proven collaboration history on similar projects</li>
                  <li>• Single point of accountability for delivery</li>
                </ul>
              </div>

              <Button
                onClick={() => onContinue('cluster')}
                className="w-full h-11 bg-neutral-900 hover:bg-neutral-800 text-white"
              >
                View Recommended Teams
              </Button>
            </div>

            {/* Individual Expert Option */}
            <div className="bg-white p-8 rounded-lg border-2 border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-neutral-700" />
                </div>
                <div>
                  <h3 className="text-xl text-neutral-900">Individual Expert</h3>
                  <p className="text-sm text-neutral-600">Specialized support</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-neutral-600 mb-4">
                  <strong className="text-neutral-900">Best for:</strong> Specific technical gaps or
                  advisory needs
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Targeted expertise for specific challenges</li>
                  <li>• You already have an in-house team</li>
                  <li>• Advisory or consulting engagement</li>
                </ul>
              </div>

              <Button
                onClick={() => onContinue('individual')}
                variant="outline"
                className="w-full h-11 border-neutral-300 hover:border-neutral-900 hover:bg-neutral-50"
              >
                View Individual Experts
              </Button>
            </div>
          </div>

          <div className="bg-neutral-100 p-5 rounded-lg mb-6">
            <p className="text-sm text-neutral-700">
              <strong className="text-neutral-900">This is a recommendation.</strong> You can explore
              both options and compare specific profiles before making a decision.
            </p>
          </div>

          <button
            onClick={onCompare}
            className="w-full text-sm text-neutral-600 hover:text-neutral-900 py-2"
          >
            Compare Both Options
          </button>
        </div>
      </div>
    </div>
  );
}
