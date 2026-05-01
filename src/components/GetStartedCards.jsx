'use client';

import { UserPlus, ShoppingBag, Rocket } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: UserPlus,
  },
  {
    id: "02",
    title: "Choose Products",
    description:
      "Browse our catalog and select the tools that fit your needs.",
    icon: ShoppingBag,
  },
  {
    id: "03",
    title: "Start Creating",
    description:
      "Download and start using your premium tools immediately.",
    icon: Rocket,
  },
];

export default function GetStartedCards() {
  return (
    <section className="bg-[#F9FAFC] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mb-14 text-lg">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >
                {/* Number badge */}
                <span className="absolute top-5 right-5 bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {step.id}
                </span>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-purple-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}