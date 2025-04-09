export default function PrivacyPolicy() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          
          {/* Main Heading */}
          <h1 className="text-4xl font-bold text-gray-200">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: April 9, 2025
          </p>
          
          <p className="leading-6">
            Welcome to Autochat. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our app. By using Autochat, you agree to the practices described in this policy.
          </p>
  
          {/* Section 1 Heading */}
          <h2 className="text-2xl font-semibold text-gray-400 mt-6">
            1. Information We Collect
          </h2>
          <p className="leading-6">
            When you use Autochat, we may collect the following information:
          </p>
          <ul className="list-disc ml-5">
            <li>
              <strong>Personal Information Provided by You:</strong> Name, email address, phone number, and other information provided when creating an account or getting in touch.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about your interactions with the app, such as messages, timestamps of interactions, and features used.
            </li>
            <li>
              <strong>Device Information:</strong> Data about the device used to access the app, including model, operating system, unique identifiers, and IP address.
            </li>
          </ul>
  
          {/* Section 2 Heading */}
          <h2 className="text-2xl font-semibold text-gray-400 mt-6">
            2. How We Use Your Information
          </h2>
          <p className="leading-6">
            We use the collected information to:
          </p>
          <ul className="list-disc ml-5">
            <li>Provide and maintain the proper functioning of Autochat.</li>
            <li>Personalize your experience with the app.</li>
            <li>Improve our services and develop new features.</li>
            <li>Contact you to provide support or important information.</li>
            <li>Ensure the security and integrity of the app.</li>
            <li>Comply with legal and regulatory obligations.</li>
          </ul>
  
          {/* Section 3 Heading */}
          <h2 className="text-2xl font-semibold text-gray-400 mt-6">
            3. Information Sharing
          </h2>
          <p className="leading-6">
            We do not share your personal information with third parties, except under the following circumstances:
          </p>
          <ul className="list-disc ml-5">
            <li>
              <strong>Service Providers:</strong> We share information with companies that provide services on our behalf, such as hosting and technical support, under contractual protection obligations.
            </li>
            <li>
              <strong>Legal Requirements:</strong> If necessary to comply with legal obligations, protect our rights, or prevent illegal activities.
            </li>
            <li>
              <strong>Consent:</strong> With your explicit consent for other specific purposes.
            </li>
          </ul>
  
          {/* Section 4 Heading */}
          <h2 className="text-2xl font-semibold text-gray-400 mt-6">
            4. Information Security
          </h2>
          <p className="leading-6">
            We take technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method is 100% secure.
          </p>
  
          {/* Section 5 Heading */}
          <h2 className="text-2xl font-semibold text-gray-400 mt-6">
            5. Your Rights
          </h2>
          <p className="leading-6">
            In accordance with the General Data Protection Law (LGPD), you have the right to:
          </p>
          <ul className="list-disc ml-5">
            <li>Access your personal information that we hold.</li>
            <li>Request the correction of inaccurate or outdated information.</li>
            <li>Request the deletion of your information, in accordance with legal obligations.</li>
            <li>Object to the processing of your information under certain circumstances.</li>
            <li>Request the portability of your data to another provider.</li>
          </ul>
          <p className="leading-6">
            To exercise these rights, please contact us.
          </p>
  
          {/* Section 6 Heading */}
          <h2 className="text-2xl font-semibold text-gray-400 mt-6">
            6. Changes to This Privacy Policy
          </h2>
          <p className="leading-6">
            We may update this policy periodically. We will notify you of any changes by posting the new version on this page. We recommend that you review it regularly.
          </p>
  
          {/* Section 7 Heading */}
          <h2 className="text-2xl font-semibold text-gray-400 mt-6">
            7. Contact
          </h2>
          <p className="leading-6">
            If you have any questions or concerns about this policy or our privacy practices, please contact us:
          </p>
          <p className="leading-6">Email: contato@ed2x.com.br</p>
          <p className="leading-6">
            By using Autochat, you agree to the collection and use of information as described in this policy.
          </p>
        </main>
      </div>
    );
  }
  