"use client"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import Link from "next/link"
import { ArrowRight, Users, TrendingUp, Award } from "lucide-react"

export default function PortfolioCarousel() {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />)

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  )
}

const RTAContent = () => {
  return (
    <div className="space-y-8">
      <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <h3 className="text-2xl font-bold text-neutral-200 mb-4">Project Overview</h3>
        <p className="text-neutral-400 text-base md:text-lg max-w-3xl">
          Led the complete redesign of RTA's public transportation system, creating an intuitive digital experience that
          serves millions of daily commuters across Dubai. The project focused on accessibility, real-time information,
          and seamless journey planning.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-neutral-800 p-6 rounded-3xl">
          <Users className="w-8 h-8 text-blue-400 mb-3" />
          <p className="text-3xl font-bold text-neutral-200">2.5M+</p>
          <p className="text-neutral-400 mt-2">Daily Active Users</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-3xl">
          <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
          <p className="text-3xl font-bold text-neutral-200">45%</p>
          <p className="text-neutral-400 mt-2">Increase in App Usage</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-3xl">
          <Award className="w-8 h-8 text-purple-400 mb-3" />
          <p className="text-3xl font-bold text-neutral-200">4.8/5</p>
          <p className="text-neutral-400 mt-2">User Satisfaction</p>
        </div>
      </div>

      <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <h3 className="text-2xl font-bold text-neutral-200 mb-4">Key Achievements</h3>
        <ul className="space-y-3 text-neutral-400 text-base md:text-lg">
          <li>• Redesigned the entire user journey from route planning to ticket purchase</li>
          <li>• Implemented real-time bus and metro tracking with 99.9% accuracy</li>
          <li>• Created an accessible design system used across all RTA digital products</li>
          <li>• Reduced customer support tickets by 60% through improved UX</li>
        </ul>
      </div>

      <Link
        href="/case-study/rta-public-transport"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors"
      >
        View Full Case Study <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}

const HealthcareContent = () => {
  return (
    <div className="space-y-8">
      <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <h3 className="text-2xl font-bold text-neutral-200 mb-4">Project Overview</h3>
        <p className="text-neutral-400 text-base md:text-lg max-w-3xl">
          Designed a comprehensive healthcare platform for the Ministry of Health, streamlining patient care,
          appointment scheduling, and medical records management. The platform serves thousands of healthcare
          professionals and millions of patients.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-neutral-800 p-6 rounded-3xl">
          <Users className="w-8 h-8 text-blue-400 mb-3" />
          <p className="text-3xl font-bold text-neutral-200">500K+</p>
          <p className="text-neutral-400 mt-2">Monthly Users</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-3xl">
          <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
          <p className="text-3xl font-bold text-neutral-200">70%</p>
          <p className="text-neutral-400 mt-2">Faster Appointment Booking</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-3xl">
          <Award className="w-8 h-8 text-purple-400 mb-3" />
          <p className="text-3xl font-bold text-neutral-200">95%</p>
          <p className="text-neutral-400 mt-2">User Satisfaction</p>
        </div>
      </div>

      <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <h3 className="text-2xl font-bold text-neutral-200 mb-4">Key Features</h3>
        <ul className="space-y-3 text-neutral-400 text-base md:text-lg">
          <li>• Unified patient portal with complete medical history access</li>
          <li>• Smart appointment scheduling with AI-powered recommendations</li>
          <li>• Secure telemedicine platform for remote consultations</li>
          <li>• Integration with national health insurance systems</li>
        </ul>
      </div>
    </div>
  )
}

const WaterContent = () => {
  return (
    <div className="space-y-8">
      <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <h3 className="text-2xl font-bold text-neutral-200 mb-4">Project Overview</h3>
        <p className="text-neutral-400 text-base md:text-lg max-w-3xl">
          Created a mobile water delivery app for NOVA WATER, enabling customers to order water bottles, track
          deliveries, set daily hydration goals, and manage their water consumption. The app bridges the gap between
          offline vendors and digital convenience while promoting healthy hydration habits.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-neutral-800 p-6 rounded-3xl">
          <Users className="w-8 h-8 text-blue-400 mb-3" />
          <p className="text-3xl font-bold text-neutral-200">200K+</p>
          <p className="text-neutral-400 mt-2">Active Users</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-3xl">
          <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
          <p className="text-3xl font-bold text-neutral-200">85%</p>
          <p className="text-neutral-400 mt-2">Order Completion Rate</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-3xl">
          <Award className="w-8 h-8 text-purple-400 mb-3" />
          <p className="text-3xl font-bold text-neutral-200">4.6/5</p>
          <p className="text-neutral-400 mt-2">User Rating</p>
        </div>
      </div>

      <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <h3 className="text-2xl font-bold text-neutral-200 mb-4">Key Features</h3>
        <ul className="space-y-3 text-neutral-400 text-base md:text-lg">
          <li>• Easy water ordering with location-based delivery and scheduling</li>
          <li>• Daily hydration goals with personalized reminders and tracking</li>
          <li>• Real-time order tracking and delivery notifications</li>
          <li>• Support for homes, businesses, workplaces, and donations to mosques</li>
        </ul>
      </div>
    </div>
  )
}

const FashionContent = () => {
  return (
    <div className="space-y-8">
      <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <h3 className="text-2xl font-bold text-neutral-200 mb-4">Project Overview</h3>
        <p className="text-neutral-400 text-base md:text-lg max-w-3xl">
          Designed a premium e-commerce experience for a luxury fashion brand, focusing on immersive product
          visualization, personalized recommendations, and a seamless checkout process. The platform combines elegant
          aesthetics with powerful functionality.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-neutral-800 p-6 rounded-3xl">
          <Users className="w-8 h-8 text-blue-400 mb-3" />
          <p className="text-3xl font-bold text-neutral-200">150K+</p>
          <p className="text-neutral-400 mt-2">Monthly Shoppers</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-3xl">
          <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
          <p className="text-3xl font-bold text-neutral-200">120%</p>
          <p className="text-neutral-400 mt-2">Increase in Conversions</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-3xl">
          <Award className="w-8 h-8 text-purple-400 mb-3" />
          <p className="text-3xl font-bold text-neutral-200">$2.5M</p>
          <p className="text-neutral-400 mt-2">Monthly Revenue</p>
        </div>
      </div>

      <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <h3 className="text-2xl font-bold text-neutral-200 mb-4">Design Excellence</h3>
        <ul className="space-y-3 text-neutral-400 text-base md:text-lg">
          <li>• 360° product views with AR try-on capabilities</li>
          <li>• AI-powered style recommendations based on preferences</li>
          <li>• Streamlined one-page checkout reducing cart abandonment by 50%</li>
          <li>• Luxury brand storytelling through immersive content</li>
        </ul>
      </div>
    </div>
  )
}

const data = [
  {
    category: "Public Transportation",
    title: "RTA Dubai - Smart Transit System",
    src: "/rta-hero.jpg",
    content: <RTAContent />,
  },
  {
    category: "Healthcare",
    title: "Ministry of Health Digital Platform",
    src: "/modern-healthcare-digital-platform-interface.jpg",
    content: <HealthcareContent />,
  },
  {
    category: "Utilities",
    title: "NOVA WATER - Smart Utility Management",
    src: "/smart-utility-dashboard-with-analytics.jpg",
    content: <WaterContent />,
  },
  {
    category: "E-Commerce",
    title: "Luxury Fashion E-Commerce",
    src: "/luxury-fashion-ecommerce-interface.jpg",
    content: <FashionContent />,
  },
  {
    category: "Mobile App",
    title: "NOVA WATER Mobile App",
    src: "/images/nova-water-goal-screens.png",
    content: <WaterContent />,
  },
]
