import React from "react";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const TermsOfService = () => {
  return (
    <>
      <Meta
        title="Terms of Service - Green Compass"
        description="Review the terms and conditions for using Green Compass. Understand your rights, responsibilities, and limitations while using our services."
      />
      <Navbar bgColor="white" />
      <main className="container mx-auto py-12 px-6 lg:px-12">
        <h1 className="text-4xl font-bold text-green-dark mb-8">Terms of Service</h1>
        <p className="text-sm text-gray-600 mb-6">Effective Date: January 16, 2025</p>

        {/* Table of Contents */}
        <nav className="mb-12">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">Contents</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><a href="#introduction" className="hover:text-green-600">1. Introduction</a></li>
            <li><a href="#eligibility" className="hover:text-green-600">2. Eligibility</a></li>
            <li><a href="#user-obligations" className="hover:text-green-600">3. User Obligations</a></li>
            <li><a href="#acceptable-use" className="hover:text-green-600">4. Acceptable Use</a></li>
            <li><a href="#intellectual-property" className="hover:text-green-600">5. Intellectual Property</a></li>
            <li><a href="#disclaimers" className="hover:text-green-600">6. Disclaimers & Limitation of Liability</a></li>
            <li><a href="#termination" className="hover:text-green-600">7. Termination</a></li>
            <li><a href="#governing-law" className="hover:text-green-600">8. Governing Law</a></li>
            <li><a href="#changes" className="hover:text-green-600">9. Changes to Terms</a></li>
            <li><a href="#contact" className="hover:text-green-600">10. Contact Us</a></li>
          </ul>
        </nav>

        {/* Sections */}
        <section id="introduction" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Green Compass ("we," "our," "us"). By accessing or using our website and services, you agree to be bound by these Terms of Service.
            If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section id="eligibility" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">2. Eligibility</h2>
          <p className="text-gray-700 leading-relaxed">
            You must be at least 13 years old to use our services. By using our platform, you confirm that you meet this requirement.
          </p>
        </section>

        <section id="user-obligations" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">3. User Obligations</h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to use Green Compass responsibly and in compliance with all applicable laws and regulations.
          </p>
        </section>

        <section id="acceptable-use" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">4. Acceptable Use</h2>
          <p className="text-gray-700 leading-relaxed">
            You may not use Green Compass for unlawful purposes, including but not limited to spamming, hacking, or spreading misinformation.
          </p>
        </section>

        <section id="intellectual-property" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">5. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All content, including logos, text, and images, belongs to Green Compass. Unauthorized use of our intellectual property is strictly prohibited.
          </p>
        </section>

        <section id="disclaimers" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">6. Disclaimers & Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            We provide our services "as is" and do not guarantee uninterrupted access. We are not liable for any damages resulting from use or inability to use the platform.
          </p>
        </section>

        <section id="termination" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">7. Termination</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to terminate or suspend accounts that violate these terms.
          </p>
        </section>

        <section id="governing-law" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">8. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These terms are governed by the laws of [Your Country/State], without regard to its conflict of law principles.
          </p>
        </section>

        <section id="changes" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">9. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms of Service from time to time. Continued use of Green Compass after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">10. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions, contact us at:
            <a href="mailto:support@greencompass.app" className="text-green-600 underline"> support@greencompass.app</a>.
          </p>
        </section>
      </main>
      <Footer
        size="md"
        bgColor="bg-green-dark"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        sticky={false}
      />
    </>
  );
};

export default TermsOfService;
