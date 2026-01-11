import { useState } from 'react';
import { StepIndicator } from './step-indicator';
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';

interface CitySelectionProps {
  onContinue: (city: string) => void;
}

const cities = [
  {
    name: 'Vadodara',
    description: 'Growing electronics manufacturing hub',
    teams: '12 verified teams',
  },
  {
    name: 'Ahmedabad',
    description: 'Strong PCB and IoT ecosystem',
    teams: '18 verified teams',
  },
  {
    name: 'Bengaluru',
    description: 'Largest hardware startup ecosystem',
    teams: '45 verified teams',
  },
  {
    name: 'Pune',
    description: 'Automotive and robotics expertise',
    teams: '22 verified teams',
  },
  {
    name: 'Noida',
    description: 'Electronics and embedded systems',
    teams: '15 verified teams',
  },
  {
    name: 'Hyderabad',
    description: 'Emerging hardware innovation center',
    teams: '19 verified teams',
  },
];

export function CitySelection({ onContinue }: CitySelectionProps) {
  const [selectedCity, setSelectedCity] = useState<string>('');

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <StepIndicator currentStep={2} />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl mb-3 text-neutral-900">
              Select Your Execution City
            </h1>
            <p className="text-base text-neutral-600">
              Choose the city where you need on-ground execution support.
              Local teams enable faster prototyping and better collaboration.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {cities.map((city) => (
              <button
                key={city.name}
                onClick={() => setSelectedCity(city.name)}
                className={`
                  p-6 rounded-lg border-2 text-left transition-all
                  ${
                    selectedCity === city.name
                      ? 'border-neutral-900 bg-white'
                      : 'border-neutral-200 bg-white hover:border-neutral-400'
                  }
                `}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg text-neutral-900">{city.name}</h3>
                  <MapPin className={`w-5 h-5 ${selectedCity === city.name ? 'text-neutral-900' : 'text-neutral-400'}`} />
                </div>
                <p className="text-sm text-neutral-600 mb-2">{city.description}</p>
                <p className="text-xs text-neutral-500">{city.teams}</p>
              </button>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg border border-neutral-200 mb-6">
            <p className="text-sm text-neutral-600">
              <strong className="text-neutral-900">Why location matters:</strong> Hardware projects
              require hands-on collaboration. Local teams can visit your facility, share prototyping
              resources, and respond quickly to design changes.
            </p>
          </div>

          <Button
            onClick={() => selectedCity && onContinue(selectedCity)}
            disabled={!selectedCity}
            className="w-full h-12 bg-neutral-900 hover:bg-neutral-800 text-white"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
