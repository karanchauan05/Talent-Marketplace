import { useState } from 'react';
import { IntentCapture } from './components/intent-capture';
import { CitySelection } from './components/city-selection';
import { EngagementRecommendation } from './components/engagement-recommendation';
import { ListingsComparison } from './components/listings-comparison';
import { ProfileDetail } from './components/profile-detail';
import { NextSteps } from './components/next-steps';

type Step = 'intent' | 'city' | 'recommendation' | 'listings' | 'profile' | 'next-steps';
type EngagementType = 'cluster' | 'individual' | null;

export default function App() {
  const [currentStep, setCurrentStep] = useState<Step>('intent');
  const [intent, setIntent] = useState('');
  const [city, setCity] = useState('');
  const [engagementType, setEngagementType] = useState<EngagementType>(null);
  const [selectedProfileId, setSelectedProfileId] = useState('');

  const handleIntentSubmit = (userIntent: string) => {
    setIntent(userIntent);
    setCurrentStep('city');
  };

  const handleCitySelect = (selectedCity: string) => {
    setCity(selectedCity);
    setCurrentStep('recommendation');
  };

  const handleEngagementSelect = (type: 'cluster' | 'individual') => {
    setEngagementType(type);
    setCurrentStep('listings');
  };

  const handleCompare = () => {
    setEngagementType('cluster');
    setCurrentStep('listings');
  };

  const handleProfileSelect = (profileId: string) => {
    setSelectedProfileId(profileId);
    setCurrentStep('profile');
  };

  const handleProceedToNextSteps = () => {
    setCurrentStep('next-steps');
  };

  return (
    <div className="min-h-screen">
      {currentStep === 'intent' && (
        <IntentCapture onContinue={handleIntentSubmit} />
      )}
      
      {currentStep === 'city' && (
        <CitySelection onContinue={handleCitySelect} />
      )}
      
      {currentStep === 'recommendation' && (
        <EngagementRecommendation
          intent={intent}
          city={city}
          onContinue={handleEngagementSelect}
          onCompare={handleCompare}
        />
      )}
      
      {currentStep === 'listings' && engagementType && (
        <ListingsComparison
          city={city}
          engagementType={engagementType}
          onSelectProfile={handleProfileSelect}
        />
      )}
      
      {currentStep === 'profile' && (
        <ProfileDetail
          profileId={selectedProfileId}
          onNext={handleProceedToNextSteps}
        />
      )}
      
      {currentStep === 'next-steps' && (
        <NextSteps profileName="TechForge Hardware Studios" />
      )}
    </div>
  );
}
