import { StepIndicator } from './step-indicator';
import { Button } from './ui/button';
import { FileText, Phone, Clock, CheckCircle2 } from 'lucide-react';

interface NextStepsProps {
  profileName: string;
}

export function NextSteps({ profileName }: NextStepsProps) {
  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <StepIndicator currentStep={5} />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl mb-3 text-neutral-900">
              Next Steps
            </h1>
            <p className="text-base text-neutral-600">
              You've selected <strong>{profileName}</strong>. Choose how you'd like to proceed.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-8">
            {/* Request Proposal */}
            <div className="bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-neutral-400 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-neutral-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2 text-neutral-900">Request Proposal</h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    Share your project requirements and receive a detailed proposal with scope,
                    timeline, and cost breakdown within 3-5 business days.
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                    <li>• Detailed project scope and approach</li>
                    <li>• Milestone-based timeline</li>
                    <li>• Transparent cost breakdown</li>
                    <li>• Team allocation plan</li>
                  </ul>
                  <Button className="bg-neutral-900 hover:bg-neutral-800 text-white">
                    Submit RFP
                  </Button>
                </div>
              </div>
            </div>

            {/* Book Discovery Call */}
            <div className="bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-neutral-400 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-neutral-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2 text-neutral-900">Book Discovery Call</h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    Schedule a 30-minute intro call to discuss your project, ask questions, and
                    understand the team's approach before committing.
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                    <li>• Direct conversation with team lead</li>
                    <li>• Discuss technical feasibility</li>
                    <li>• Clarify expectations and process</li>
                    <li>• No obligations or commitments</li>
                  </ul>
                  <Button variant="outline" className="border-neutral-900 hover:bg-neutral-900 hover:text-white">
                    View Available Slots
                  </Button>
                </div>
              </div>
            </div>

            {/* Reserve Availability */}
            <div className="bg-white p-8 rounded-lg border-2 border-neutral-200 hover:border-neutral-400 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-neutral-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2 text-neutral-900">Reserve Availability</h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    Hold the team's availability for 72 hours while you finalize your decision.
                    Useful if you're comparing multiple options.
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                    <li>• 72-hour soft hold on team capacity</li>
                    <li>• Time to complete internal approvals</li>
                    <li>• Prevents team from being fully booked</li>
                    <li>• Fully refundable or convertible</li>
                  </ul>
                  <Button variant="outline" className="border-neutral-300 hover:border-neutral-900">
                    Reserve Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-6 rounded-lg text-center">
            <p className="text-sm text-neutral-700">
              <strong className="text-neutral-900">No payment required at this stage.</strong> All
              initial consultations and proposals are complimentary. You'll only make a commitment
              after reviewing the full proposal and terms.
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-neutral-600">
              Need help deciding?{' '}
              <button className="text-neutral-900 underline hover:no-underline">
                Speak with our platform advisor
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
