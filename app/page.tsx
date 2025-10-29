// app/landing-page/page.tsx
---
layout: 'AppLayout' // Make sure this matches your actual layout component
...

export default function LandingPage() {
  // Server-rendered components with TypeScript types
  type Feature = { id: string; title: string; description: string; icon?: string };
  
  // Mock data (will be replaced with real data from Supabase later)
  const features: Feature[] = [
    {
      id: '1',
      title: 'AI-Powered Job Matching',
      description: 'Smart recommendations using AI to find your perfect match',
      icon: 'ai'
    },
    {
      id: '2',
      title: 'Unlimited Job Listings',
      description: 'Access to premium and exclusive job opportunities',
      icon: 'pharmacy'
    },
    {
      id: '3',
      title: 'Expert Career Guidance',
      description: 'Personalized advice from industry experts',
      icon: 'briefcase'
    }
  ];

  const testimonials = [
    // Will fetch real testimonials from database later
    {
      id: 't1',
      name: 'Sarah J.',
      role: 'Software Engineer',
      text: 'Linkedout helped me land my dream job in 3 weeks!',
      avatar: 'avatar1' // Will be replaced with real image path
    }
  ];

  const pricingTiers = [
    // Will be populated from Supabase database later
    { 
      id: 'basic',
      name: 'Basic',
      price: '$0/month',
      features: ['5 job alerts', 'Basic resume review', 'Public profiles']
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$15/month',
      features: ['Unlimited job alerts', 'AI resume optimization', 'Private profiles']
    }
  ];

  const ctaText = 'Start Your Career Journey';
  const projectName = 'Linkedout';
---

<main className="px-4 py-20 mx-auto max-w-2xl sm:px-6 sm:py-16">
  {/* Hero Section */}
  <section className="hero-section">
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        🚀 Discover Your Next Opportunity with {projectName}
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Linkedout is the AI-powered job portal designed specifically for modern job seekers
      </p>
      <div className="flex justify-center space-x-4">
        {/* CTA Button */}
        <button 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none"
          /* onClick={() => navigate('/signup')} */ // Wire up navigation later
        >
          {ctaText}
        </button>
      </div>
    </div>
  </section>

  {/* Features Section */}
  <section className="features-section bg-white py-16">
    <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
      {features.map(feature => (
        <div key={feature.id} className="feature-card">
          <div className="bg-blue-50 py-4 rounded-lg flex items-center">
            {feature.icon && <img src={feature.icon} alt={feature.title} className="h-10 w-10 mr-4" />}
          </div>
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Testimonials Section */}
  <section className="testimonials-section bg-gray-50">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.slice(0, 3).map(testimonial => (
          <div key={testimonial.id} className="testimonial-card bg-white p-8 rounded-lg">
            <div className="text-center">
              {/* Avatar will be loaded from database later */}
              <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
            </div>
            <h4 className="name text-lg font-semibold">{testimonial.name}</h4>
            <p className="role text-gray-600 mb-2">{testimonial.role}</p>
            <p className="text-gray-700">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Pricing Section */}
  <section className="pricing-section bg-white py-16">
    <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
      {pricingTiers.map(tier => (
        <div key={tier.id} className="pricing-card bg-blue-50 p-10 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-4">{tier.name}</h3>
          <p className="text-gray-600 mb-6">{tier.price}</p>
          <ul className="mb-8">
            {tier.features.map((ft, i) => (
              <li key={i} className="px-4py-2 text-gray-700">
                {ft}
              </li>
            ))}
          </ul>
          <button 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-gradient-to-r from-indigo-600 to-blue-600 focus:outline-none"
            /* onClick={() => navigate(`/pricing/${tier.id}`)} */ // Add route later
          >
            Upgrade Now
          </button>
        </div>
      ))}
    </div>
  </section>
</main>