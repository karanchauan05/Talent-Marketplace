import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  { id: 1, label: 'Intent' },
  { id: 2, label: 'City' },
  { id: 3, label: 'Recommendation' },
  { id: 4, label: 'Compare' },
  { id: 5, label: 'Commit' },
];

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            <div className="flex items-center">
              <div
                className={`
                  flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm
                  ${
                    currentStep > step.id
                      ? 'bg-neutral-900 border-neutral-900 text-white'
                      : currentStep === step.id
                      ? 'border-neutral-900 text-neutral-900'
                      : 'border-neutral-300 text-neutral-400'
                  }
                `}
              >
                {currentStep > step.id ? (
                  <Check className="w-4 h-4" />
                ) : (
                  step.id
                )}
              </div>
              <span
                className={`ml-2 text-sm ${
                  currentStep >= step.id ? 'text-neutral-900' : 'text-neutral-400'
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-[2px] flex-1 mx-4 ${
                  currentStep > step.id ? 'bg-neutral-900' : 'bg-neutral-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
