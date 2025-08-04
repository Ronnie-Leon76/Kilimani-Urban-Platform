"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Satellite,
  Users,
  BarChart3,
  Droplets,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Zap,
  Eye,
  TrendingUp,
  Heart,
  Award,
} from "lucide-react"
import { signIn } from "next-auth/react"

export function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: Satellite,
      title: "Satellite Monitoring",
      description:
        "AI-powered analysis of high-resolution satellite imagery to detect illegal developments, monitor green cover changes, and track urban growth patterns in real-time.",
      color: "from-blue-500 to-cyan-500",
      stats: "24/7 Monitoring",
    },
    {
      icon: Users,
      title: "Community Reporting",
      description:
        "Empower residents to report infrastructure problems, water shortages, and flooding incidents with geotagged photographs and real-time location data.",
      color: "from-green-500 to-emerald-500",
      stats: "1000+ Reports",
    },
    {
      icon: BarChart3,
      title: "AI Analytics",
      description:
        "Advanced machine learning algorithms predict flood risks, detect unauthorized constructions, and model water demand patterns for better planning.",
      color: "from-purple-500 to-violet-500",
      stats: "95% Accuracy",
    },
    {
      icon: Droplets,
      title: "Water Management",
      description:
        "Comprehensive tracking of water shortages, demand analysis, and distribution optimization based on real-time population density data.",
      color: "from-blue-400 to-blue-600",
      stats: "50K+ Liters Saved",
    },
    {
      icon: AlertTriangle,
      title: "Flood Risk Assessment",
      description:
        "Advanced flood-prone area mapping, predictive risk modeling using weather data, and early warning systems for community safety.",
      color: "from-orange-500 to-red-500",
      stats: "Early Warning System",
    },
    {
      icon: MapPin,
      title: "Interactive Mapping",
      description:
        "Comprehensive real-time mapping of Kilimani ward with community-driven updates, development tracking, and infrastructure visualization.",
      color: "from-red-500 to-pink-500",
      stats: "Real-time Updates",
    },
  ]

  const stats = [
    { number: "1,234", label: "Active Users", icon: Users },
    { number: "2,847", label: "Issues Resolved", icon: CheckCircle },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
    { number: "24/7", label: "Monitoring", icon: Eye },
  ]

  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "Kilimani Resident",
      content:
        "This platform has transformed how we report and track community issues. The response time has improved dramatically!",
      rating: 5,
    },
    {
      name: "David Ochieng",
      role: "Local Business Owner",
      content:
        "Finally, a system that gives us a voice in urban planning. The satellite monitoring helps us stay informed about developments.",
      rating: 5,
    },
    {
      name: "Grace Muthoni",
      role: "Community Leader",
      content:
        "The flood risk predictions have been incredibly accurate. This platform is essential for our community's safety.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 safe-area-inset">
      {/* Mobile-First Enhanced Header */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-mobile shadow-lg safe-area-top">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-75"></div>
                <MapPin className="relative h-9 w-9 text-green-600 bg-white rounded-full p-2" />
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Kilimani Urban Intelligence
                </h1>
                <p className="text-xs text-gray-500 font-medium hidden sm:block">Smart City Solutions</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <Badge variant="secondary" className="hidden md:flex bg-green-100 text-green-700 border-green-200">
                <Globe className="w-3 h-3 mr-1" />
                Live Platform
              </Badge>
              <Button
                onClick={() => signIn("google")}
                className="mobile-button bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg"
              >
                <span className="hidden sm:inline">Sign In with Google</span>
                <span className="sm:hidden">Sign In</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile-First Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 overflow-hidden safe-area-bottom">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50"></div>
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-60 sm:w-96 h-60 sm:h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-200 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Powered by AI & Satellite Technology
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Smart Urban Management for{" "}
              </span>
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                Kilimani Ward
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Harness the power of <span className="font-semibold text-green-600">satellite imagery analysis</span> and{" "}
              <span className="font-semibold text-blue-600">mobile crowdsourcing</span> to create an effective urban
              management system. Report issues, participate in planning, and build a better community together.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4">
              <Button
                size="lg"
                onClick={() => signIn("google")}
                className="mobile-button w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="mobile-button w-full sm:w-auto border-2 border-gray-600 text-gray-700 hover:border-green-500 hover:bg-green-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-white shadow-lg"
              >
                Watch Demo
                <Eye className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            {/* Mobile-First Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-First Enhanced Features Grid */}
      <section className="py-12 sm:py-20 px-4 bg-white safe-area-bottom">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-3 sm:mb-4 bg-blue-100 text-blue-700 border-blue-200 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Platform Features
            </Badge>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent px-4">
              Comprehensive Urban Intelligence
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our platform combines cutting-edge technology with community participation to create the most effective
              urban management system for Kilimani Ward.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`card-mobile group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 ${
                  activeFeature === index ? "ring-2 ring-green-500 shadow-xl" : ""
                }`}
              >
                <CardHeader className="p-6 sm:p-8">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-3 sm:p-4 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 pr-2">{feature.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs shrink-0">
                      {feature.stats}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-First Testimonials Section */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50 safe-area-bottom">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-3 sm:mb-4 bg-green-100 text-green-700 border-green-200 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Community Voices
            </Badge>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent px-4">
              What Our Community Says
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="card-mobile bg-white/80 backdrop-blur-mobile border-0 shadow-xl"
              >
                <CardHeader className="p-6 sm:p-8">
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    "{testimonial.content}"
                  </CardDescription>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-First Enhanced CTA Section */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 text-white relative overflow-hidden safe-area-bottom">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 sm:w-48 h-32 sm:h-48 bg-white/10 rounded-full blur-xl"></div>
        </div>

        <div className="relative container mx-auto text-center">
          <Badge className="mb-4 sm:mb-6 bg-white/20 text-white border-white/30 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Join the Revolution
          </Badge>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 px-4">Ready to Transform Kilimani?</h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed px-4">
            Be part of building a smarter, more sustainable community. Your participation helps create better urban
            planning and community development for everyone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => signIn("google")}
              className="mobile-button w-full sm:w-auto bg-white text-green-700 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl"
            >
              Sign Up Now - It's Free
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="mobile-button w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-green-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-white/10 backdrop-blur-mobile"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile-First Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 sm:py-12 px-4 safe-area-bottom">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-75"></div>
                  <MapPin className="relative h-7 w-7 sm:h-8 sm:w-8 text-green-400 bg-gray-800 rounded-full p-1" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold">Kilimani Urban Intelligence</h4>
              </div>
              <p className="text-gray-400 mb-3 sm:mb-4 max-w-md text-sm sm:text-base">
                Building smarter, more sustainable communities through technology and community participation.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                  <Globe className="w-3 h-3 mr-1" />
                  Nairobi, Kenya
                </Badge>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Platform</h5>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors touch-manipulation">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors touch-manipulation">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors touch-manipulation">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors touch-manipulation">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Community</h5>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors touch-manipulation">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors touch-manipulation">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors touch-manipulation">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors touch-manipulation">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Kilimani Urban Intelligence Platform. Building smarter communities together.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}