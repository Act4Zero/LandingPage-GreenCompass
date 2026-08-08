import React from "react";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Privacy = () => {
  return (
    <>
      <Meta
        title="Privacy Policy - Green Compass"
        description="Understand how Green Compass collects, uses, and protects your personal information. Learn about your rights and our commitment to privacy."
      />
      <Navbar />
      <main id="main-content" className="legal-page">
        <h1 className="text-4xl font-bold text-green-dark mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Effective Date: January 16, 2025
        </p>

        {/* Table of Contents */}
        <nav className="mb-12">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">
            Contents
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <a href="#introduction" className="hover:text-green-600">
                1. Introduction
              </a>
            </li>
            <li>
              <a
                href="#information-collection"
                className="hover:text-green-600"
              >
                2. Information We Collect
              </a>
            </li>
            <li>
              <a href="#information-use" className="hover:text-green-600">
                3. How We Use Your Information
              </a>
            </li>
            <li>
              <a href="#information-sharing" className="hover:text-green-600">
                4. Information Sharing
              </a>
            </li>
            <li>
              <a href="#data-retention" className="hover:text-green-600">
                5. Data Retention
              </a>
            </li>
            <li>
              <a href="#your-rights" className="hover:text-green-600">
                6. Your Rights
              </a>
            </li>
            <li>
              <a href="#security" className="hover:text-green-600">
                7. Security
              </a>
            </li>
            <li>
              <a href="#third-party-links" className="hover:text-green-600">
                8. Third-Party Links
              </a>
            </li>
            <li>
              <a href="#policy-changes" className="hover:text-green-600">
                9. Changes to This Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-600">
                10. Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Sections */}
        <section id="introduction" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Green Compass (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;). Your privacy is
            important to us, and we are committed to protecting it. This Privacy
            Policy explains how we collect, use, and safeguard your information
            when you visit our website, interact with our services, or
            communicate with us.
            <br />
            <br />
            By using our website, you agree to the terms outlined in this
            Privacy Policy.
          </p>
        </section>

        <section id="information-collection" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">
            2. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We collect the following types of information:
          </p>
          <h3 className="text-xl font-medium text-green-dark mb-2">
            <br></br>
            2.1 Information You Provide Voluntarily
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>
              <strong>Contact Form Data:</strong> When you fill out our contact
              form, we collect your name, email address, and any other details
              you provide.
            </li>
            <li>
              <strong>Newsletter Subscription:</strong> When subscribing to our
              newsletter, we collect your email address.
            </li>
          </ul>
          <h3 className="text-xl font-medium text-green-dark mb-2">
            2.2 Automatically Collected Information
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We use Google Analytics to collect information about your visit to
            our site, such as pages viewed, time spent, and general geographic
            location. This information is anonymized and used to improve our
            services.
          </p>
        </section>

        <section id="information-use" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>To respond to inquiries and provide customer support.</li>
            <li>To send newsletters and updates, if you have subscribed.</li>
            <li>To analyze website usage and improve our services.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section id="information-sharing" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">
            4. Information Sharing
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell, trade, or rent your personal information to others.
            However, we may share your information with third parties in the
            following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <br></br>
            <li>
              <strong>Service Providers:</strong> We may share data with trusted
              third parties, such as Google Analytics, to help us operate and
              improve our website.
            </li>
            <li>
              <strong>Legal Compliance:</strong> If required by law or to
              protect our legal rights, we may disclose your information to
              authorities.
            </li>
          </ul>
        </section>

        <section id="data-retention" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">
            5. Data Retention
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We retain your personal information only as long as necessary to
            fulfill the purposes outlined in this Privacy Policy or as required
            by law.
          </p>
        </section>

        <section id="your-rights" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">
            6. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>
              <strong>Access: </strong>Request access to the personal
              information we hold about you.
            </li>
            <li>
              <strong>Correction: </strong> Request corrections to your personal
              information.
            </li>
            <li>
              <strong>Deletion: </strong>Request the deletion of your personal
              data.
            </li>
            <li>
              <strong>Opt-Out: </strong> Unsubscribe from our newsletter or
              marketing communications at any time.
            </li>
            <p className="text-gray-700 leading-relaxed">
              <br></br>To exercise these rights, contact us at:
              <a
                href="mailto:privacy@greencompass.app"
                className="text-green-600 underline"
              >
                privacy@greencompass.app
              </a>
            </p>
          </ul>
        </section>

        <section id="security" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">
            7. Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement industry-standard security measures to protect your
            personal information. However, no online system is entirely secure,
            and we cannot guarantee absolute security.
          </p>
        </section>

        <section id="third-party-links" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">
            8. Third-Party Links
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to external websites. We are not
            responsible for the privacy practices or content of these
            third-party sites. Please review their privacy policies before
            providing any personal information.
          </p>
        </section>

        <section id="policy-changes" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">
            9. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with an updated effective date. Your continued
            use of our website after such changes constitutes acceptance of the
            updated policy.
          </p>
        </section>

        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-dark mb-4">
            10. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
            <a
              href="mailto:privacy@greencompass.app"
              className="text-green-600 underline"
            >
              privacy@greencompass.app
            </a>
            .
          </p>
        </section>

        <p className="text-gray-700 leading-relaxed">
          Thank you for trusting Green Compass. Your privacy matters to us.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
