import { useState } from 'react';
import { StepIndicator } from './step-indicator';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { ShieldCheck, MapPin, Star, CheckCircle2, Calendar } from 'lucide-react';

interface ProfileDetailProps {
  profileId: string;
  onNext: () => void;
}

export function ProfileDetail({ profileId, onNext }: ProfileDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock profile data
  const profile = {
    name: 'TechForge Hardware Studios',
    type: 'Full-Stack Hardware Team',
    city: 'Bengaluru',
    verified: true,
    rating: 4.8,
    projectsCompleted: 24,
    memberCount: 5,
    established: '2019',
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <StepIndicator currentStep={4} />
        
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="bg-white p-8 rounded-lg border border-neutral-200 mb-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl text-neutral-900">{profile.name}</h1>
                  {profile.verified && (
                    <Badge
                      variant="outline"
                      className="border-green-600 text-green-700 bg-green-50"
                    >
                      <ShieldCheck className="w-4 h-4 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-base text-neutral-600 mb-3">{profile.type}</p>
                <div className="flex items-center gap-4 text-sm text-neutral-600">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {profile.city}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {profile.rating} ({profile.projectsCompleted} projects)
                  </span>
                  <span>{profile.memberCount} team members</span>
                  <span>Est. {profile.established}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white">
                Request Proposal
              </Button>
              <Button variant="outline" className="border-neutral-300 hover:border-neutral-900">
                Book Intro Call
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg border border-neutral-200">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="border-b border-neutral-200">
                <TabsList className="w-full justify-start bg-transparent p-0 h-auto">
                  <TabsTrigger
                    value="overview"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-neutral-900 data-[state=active]:bg-transparent px-6 py-4"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="work"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-neutral-900 data-[state=active]:bg-transparent px-6 py-4"
                  >
                    Past Work
                  </TabsTrigger>
                  <TabsTrigger
                    value="deliverables"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-neutral-900 data-[state=active]:bg-transparent px-6 py-4"
                  >
                    Deliverables
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-neutral-900 data-[state=active]:bg-transparent px-6 py-4"
                  >
                    Reviews
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview" className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg mb-3 text-neutral-900">Team Capabilities</h3>
                    <p className="text-sm text-neutral-700 mb-4">
                      Full-stack hardware development team specializing in IoT devices, industrial
                      controllers, and consumer electronics. We handle everything from concept to
                      production-ready prototypes.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['PCB Design', 'Firmware Development', 'Mechanical Design', 'Testing & Certification', 'Prototyping'].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-neutral-100 text-neutral-700 text-sm rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg mb-3 text-neutral-900">Team Composition</h3>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li>• 2 Electronics Engineers (PCB & Circuit Design)</li>
                      <li>• 1 Firmware Developer (Embedded C/C++, RTOS)</li>
                      <li>• 1 Mechanical Engineer (CAD, Enclosure Design)</li>
                      <li>• 1 Project Manager (Quality & Client Coordination)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg mb-3 text-neutral-900">Typical Engagement</h3>
                    <p className="text-sm text-neutral-700">
                      Project-based contracts with milestone-driven payments. We typically work in
                      3-4 month cycles with weekly sync-ups and bi-weekly demos.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="work" className="p-8">
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-6 bg-neutral-50 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-base mb-1 text-neutral-900">
                            Industrial IoT Gateway
                          </h4>
                          <p className="text-sm text-neutral-600">
                            Manufacturing Client • 2024
                          </p>
                        </div>
                        <Badge variant="outline" className="bg-white">
                          16 weeks
                        </Badge>
                      </div>
                      <p className="text-sm text-neutral-700 mb-3">
                        Developed a modular IoT gateway for factory floor monitoring. Included
                        multi-protocol support (Modbus, MQTT), edge computing capabilities, and
                        ruggedized enclosure design.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-white text-neutral-700 text-xs rounded">
                          STM32
                        </span>
                        <span className="px-2 py-1 bg-white text-neutral-700 text-xs rounded">
                          4-layer PCB
                        </span>
                        <span className="px-2 py-1 bg-white text-neutral-700 text-xs rounded">
                          Custom Enclosure
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="deliverables" className="p-8">
                <div className="space-y-4">
                  <p className="text-sm text-neutral-600 mb-6">
                    Standard deliverables included in our engagements:
                  </p>
                  {[
                    'Complete schematic and PCB design files (Altium/KiCad)',
                    'Firmware source code with documentation',
                    'BOM with vendor recommendations',
                    'Manufacturing files (Gerbers, assembly drawings)',
                    'Test procedures and validation reports',
                    'User manuals and technical documentation',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="p-8">
                <div className="space-y-6">
                  {[1, 2].map((i) => (
                    <div key={i} className="pb-6 border-b border-neutral-200 last:border-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-neutral-900">Arun Mehta</span>
                            <span className="text-xs text-neutral-500">• Verified Client</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-neutral-500">2 months ago</span>
                      </div>
                      <p className="text-sm text-neutral-700">
                        "Excellent team that delivered exactly what we needed. Their expertise in
                        embedded systems and PCB design was evident throughout the project. Communication
                        was professional and timely. Highly recommend for hardware development."
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sticky Action Panel */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-6 shadow-lg">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
              <div className="text-sm text-neutral-600">
                Ready to move forward with this {profile.type.toLowerCase()}?
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="border-neutral-300">
                  Save for Later
                </Button>
                <Button
                  onClick={onNext}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white"
                >
                  Proceed to Next Steps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
