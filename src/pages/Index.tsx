
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CauseCard from '@/components/CauseCard';
import ImpactMetric from '@/components/ImpactMetric';
import { causes, recentDonations } from '@/data/causes';
import { Heart, Users, Droplets, School, Home } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  const featuredCauses = causes.filter(cause => cause.featured);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-500/10 to-coral-500/10 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Make a <span className="text-gradient">Difference</span> With Your Kindness
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mb-8">
                Your donation has the power to transform lives. Join our community of givers and create positive change in the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/donate">
                  <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8">
                    <Heart className="mr-2 h-5 w-5" /> Donate Now
                  </Button>
                </Link>
                <Link to="/causes">
                  <Button size="lg" variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50 px-8">
                    Explore Causes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Impact Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Impact Together</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Through the generosity of donors like you, we've been able to make a real difference in communities around the world.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <ImpactMetric 
                icon={<Users className="h-6 w-6" />}
                value="125,000+"
                label="People Helped"
              />
              <ImpactMetric 
                icon={<Droplets className="h-6 w-6" />}
                value="250+"
                label="Clean Water Projects"
              />
              <ImpactMetric 
                icon={<School className="h-6 w-6" />}
                value="85"
                label="Schools Built"
              />
              <ImpactMetric 
                icon={<Home className="h-6 w-6" />}
                value="500+"
                label="Shelters Provided"
              />
            </div>
          </div>
        </section>
        
        {/* Featured Causes */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">Featured Causes</h2>
                <p className="text-gray-600">
                  These causes need your support the most right now.
                </p>
              </div>
              <Link to="/causes" className="text-teal-600 hover:text-teal-700 font-medium flex items-center">
                View All Causes 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCauses.map(cause => (
                <CauseCard key={cause.id} cause={cause} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Recent Donations */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Recent Donations</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join these generous donors in making a difference.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow overflow-hidden">
              <div className="divide-y">
                {recentDonations.map(donation => (
                  <div key={donation.id} className="flex items-center justify-between p-4 md:p-6 hover:bg-gray-50 transition-colors">
                    <div>
                      <div className="font-medium">
                        {donation.name}
                        {donation.name === 'Anonymous' && (
                          <span className="inline-block ml-2 text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                            Anonymous
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Donated to {donation.cause}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-teal-600">${donation.amount}</div>
                      <div className="text-xs text-gray-500 mt-1">{donation.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Ready to Make a Difference?</h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Your donation, no matter how small, can create ripples of positive change. Join us in our mission to build a better world for all.
              </p>
              <Link to="/donate">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8">
                  <Heart className="mr-2 h-5 w-5" /> Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
