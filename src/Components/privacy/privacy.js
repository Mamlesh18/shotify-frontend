import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#181818] text-white flex flex-col items-center py-10 px-5 ">
      <div className="w-[80%] text-[25px]  mx-auto px-4 bg-[#6a0dad37] shadow-lg rounded-lg p-6 mb-0">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-[25px]">
          <p className="text-gray-300">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use Gemini Chatbot. By using our service, you agree to the terms outlined in this policy.
          </p>

          <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
          <p className="text-gray-300">We collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 ">
            <li>
              <strong className="text-white">Personal Information:</strong> This includes your email address and API key, which you provide when using the chatbot.
            </li>
            <li>
              <strong className="text-white">Interaction Data:</strong> We collect the queries you send to the chatbot and its responses to improve the service.
            </li>
            <li>
              <strong className="text-white">Usage Data:</strong> Information about how you use the chatbot, such as timestamps and frequency of interactions.
            </li>
          </ul>
          

          <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
          <p className="text-gray-300">Your information is used to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Respond to your queries and provide chatbot services.</li>
            <li>Improve the chatbot's accuracy and features.</li>
            <li>Communicate with you about updates and changes to the service.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">3. Data Sharing</h2>
          <p className="text-gray-300">We do not sell, trade, or rent your personal information to third parties. We may share your information:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>With service providers that assist in operating the chatbot.</li>
            <li>When required by law or to protect our legal rights.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">4. Data Security</h2>
          <p className="text-gray-300">
            We implement reasonable measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure.
          </p>

          <h2 className="text-xl font-semibold text-white">5. Cookies</h2>
          <p className="text-gray-300">
            Gemini Chatbot does not currently use cookies. However, if we implement cookies in the future, we will update this policy.
          </p>

          <h2 className="text-xl font-semibold text-white">6. Retention of Data</h2>
          <p className="text-gray-300">
            We retain your data for as long as necessary to provide the service and comply with legal obligations. You can request deletion of your data by contacting us.
          </p>

          <h2 className="text-xl font-semibold text-white">7. Children's Privacy</h2>
          <p className="text-gray-300">
            Gemini Chatbot is not intended for children under the age of 13. We do not knowingly collect personal information from children.
          </p>

          <h2 className="text-xl font-semibold text-white">8. Changes to This Policy</h2>
          <p className="text-gray-300">
            We may update this Privacy Policy from time to time. We encourage you to review it periodically for any changes.
          </p>

          <h2 className="text-xl font-semibold text-white">9. Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:geminichatbot@support.com" className="text-white hover:underline">
              geminichatbot@support.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  
  );
};

export default PrivacyPolicy;
