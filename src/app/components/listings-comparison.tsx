import { useState } from 'react';
import { StepIndicator } from './step-indicator';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ShieldCheck, ChevronDown, MapPin, Clock, DollarSign } from 'lucide-react';

interface ListingsComparisonProps {
  city: string;
  engagementType: 'cluster' | 'individual';
  onSelectProfile: (profileId: string) => void;
}

const clusterListings = [
  {
    id: 'team-1',
    name: 'TechForge Hardware Studios',
    type: 'Full-Stack Hardware Team',
    city: 'Bengaluru',
    verified: true,
    composition: 'PCB Design • Firmware • Mechanical',
    pastProjects: ['IoT Sensors', 'Industrial Controllers', 'Wearables'],
    costRange: '₹8L - ₹15L per project',
    timeline: '12-16 weeks typical',
  },
  {
    id: 'team-2',
    name: 'Quantum Electronics Collective',
    type: 'Electronics Design Team',
    city: 'Bengaluru',
    verified: true,
    composition: 'Circuit Design • Embedded Systems • Testing',
    pastProjects: ['Medical Devices', 'Automotive ECUs', 'Smart Home'],
    costRange: '₹6L - ₹12L per project',
    timeline: '10-14 weeks typical',
  },
  {
    id: 'team-3',
    name: 'RoboNext Engineering',
    type: 'Robotics & Automation Team',
    city: 'Bengaluru',
    verified: true,
    composition: 'Robotics • Control Systems • Vision',
    pastProjects: ['AGVs', 'Pick-and-Place', 'Inspection Systems'],
    costRange: '₹10L - ₹20L per project',
    timeline: '16-20 weeks typical',
  },
];

const individualListings = [
  {
    id: 'expert-1',
    name: 'Rajesh Kumar',
    type: 'Senior PCB Design Engineer',
    city: 'Bengaluru',
    verified: true,
    specialization: 'High-speed PCB • RF Design • Power Electronics',
    pastProjects: ['5G Devices', 'Power Converters', 'RF Modules'],
    costRange: '₹2L - ₹4L per project',
    timeline: '4-8 weeks typical',
  },
  {
    id: 'expert-2',
    name: 'Priya Sharma',
    type: 'Firmware Architect',
    city: 'Bengaluru',
    verified: true,
    specialization: 'Embedded C/C++ • RTOS • BLE/WiFi',
    pastProjects: ['IoT Gateways', 'Wearables', 'Smart Meters'],
    costRange: '₹1.5L - ₹3L per project',
    timeline: '6-10 weeks typical',
  },
];

export function ListingsComparison({
  city,
  engagementType,
  onSelectProfile,
}: ListingsComparisonProps) {
  const [showFilters, setShowFilters] = useState(false);
  const listings = engagementType === 'cluster' ? clusterListings : individualListings;

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <StepIndicator currentStep={4} />
        
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-3xl mb-2 text-neutral-900">
                {engagementType === 'cluster' ? 'Verified Teams' : 'Individual Experts'} in {city}
              </h1>
              <p className="text-base text-neutral-600">
                {listings.length} {engagementType === 'cluster' ? 'teams' : 'experts'} match your requirements
              </p>
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:border-neutral-900"
            >
              Filters
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {showFilters && (
            <div className="bg-white p-6 rounded-lg border border-neutral-200 mb-6">
              <p className="text-sm text-neutral-500">
                Filters: Budget Range • Timeline • Specific Skills • Past Project Types
              </p>
            </div>
          )}

          <div className="space-y-4">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white p-6 rounded-lg border border-neutral-200 hover:border-neutral-400 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl text-neutral-900">{listing.name}</h3>
                      {listing.verified && (
                        <Badge
                          variant="outline"
                          className="border-green-600 text-green-700 bg-green-50"
                        >
                          <ShieldCheck className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-neutral-600 mb-1">{listing.type}</p>
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <MapPin className="w-4 h-4" />
                      {listing.city}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-neutral-700 mb-3">
                    {engagementType === 'cluster' ? listing.composition : listing.specialization}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {listing.pastProjects.map((project) => (
                      <span
                        key={project}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <div className="flex gap-6 text-sm">
                    <div className="flex items-center gap-2 text-neutral-600">
                      <DollarSign className="w-4 h-4" />
                      {listing.costRange}
                    </div>
                    <div className="flex items-center gap-2 text-neutral-600">
                      <Clock className="w-4 h-4" />
                      {listing.timeline}
                    </div>
                  </div>

                  <Button
                    onClick={() => onSelectProfile(listing.id)}
                    variant="outline"
                    className="border-neutral-900 hover:bg-neutral-900 hover:text-white"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-5 bg-white rounded-lg border border-neutral-200">
            <p className="text-sm text-neutral-600">
              All listed {engagementType === 'cluster' ? 'teams' : 'experts'} have been background-verified
              and have completed at least 3 projects on our platform with positive client feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
