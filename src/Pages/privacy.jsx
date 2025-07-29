
// import { Link } from 'react-router-dom';
import Navlink from '../component/navlink';
import Footer from '../component/footer';

import React from 'react';

function PrivacyPolicy() {
  return (
    <>
    <Navlink />
    <div className="md:max-w-[95%] mx-auto px-4 py-15 mt-[35px] text-gray-800">
      <h1 className="text-3xl md:text-4xl text-center font-bold mb-8">Privacy Policy</h1>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Overview</h2>
        <p className="m-2 ml-5 ">
          This Privacy Policy outlines how MedCapSky Revolution Pvt. Ltd. (“MedCapSky,” “we,” “us,” or “our”) collects,
          uses, stores, and protects the personal information of individuals (“Service Providers”) who register on our
          platform to offer staffing and support services.
        </p>
        <p className="m-2 ml-5">
          This policy applies to all categories of service providers including but not limited to nurses,
          physiotherapists, paramedical staff, IT/non-IT professionals, and daycare workers.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-1 m-2 ml-5">
          <li><strong>Personal Identification:</strong> Name, phone number, email, address, date of birth, government-issued ID (Aadhaar, PAN, driving license)</li>
          <li><strong>Professional Details:</strong> Qualifications, certifications, licenses, past work experience, resume/CV</li>
          <li><strong>Bank Details:</strong> Account number, IFSC code (for payment processing)</li>
          <li><strong>Location Information:</strong> City, PIN code, GPS location (if using mobile app)</li>
          <li><strong>Device Data:</strong> IP address, device type, browser, app usage logs</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Purpose of Data Collection</h2>
        <ul className="list-disc list-inside space-y-1 m-2 ml-5">
          <li>To verify your identity and eligibility as a service provider</li>
          <li>To match you with relevant jobs and assignments</li>
          <li>To facilitate communication and job scheduling</li>
          <li>To process your payments and invoices</li>
          <li>To maintain platform security and prevent fraud</li>
          <li>To comply with legal obligations and internal audit purposes</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Data Sharing and Disclosure</h2>
        <ul className="list-disc list-inside space-y-1 m-2 ml-5">
          <li><strong>Clients/Users:</strong> Limited information (such as your name, profile, qualifications) is shared with clients for job matching</li>
          <li><strong>Third-party Services:</strong> For background checks, payment gateways, or technical support — only as required</li>
          <li><strong>Legal Authorities:</strong> If required by law, or in response to a legal process, investigation, or court order</li>
        </ul>
        <p className="mt-2 font-semibold text-green-700 m-2 ml-5">We do <strong>not</strong> sell your data to any third party.</p>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Data Storage and Security</h2>
        <ul className="list-disc list-inside space-y-1 m-2 ml-5">
          <li>Your data is securely stored on encrypted servers hosted in India. Access is limited to authorized personnel only.</li>
          <li>We follow industry-standard security protocols to protect against data loss, unauthorized access, or misuse.</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Rights of Service Providers</h2>
        <ul className="list-disc list-inside space-y-1 m-2 ml-5">
          <li><strong>Access:</strong> You can request access to the data we hold about you.</li>
          <li><strong>Correction:</strong> You may request correction of incorrect or outdated data.</li>
          <li><strong>Withdrawal:</strong> You may request to deactivate your profile and withdraw consent (which may affect job opportunities).</li>
          <li>
            <strong>Grievances:</strong> Contact us at: <br />
            📧 <a href="mailto:privacy@medcapsky.com" className="text-blue-600 underline">privacy@medcapsky.com</a> <br />
            📞 +91 9208432221
          </li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Data Retention</h2>
        <ul className="list-disc list-inside space-y-1 m-2 ml-5">
          <li>Provide you with jobs and services</li>
          <li>Comply with legal, financial, and tax-related obligations</li>
          <li>Maintain operational records for at least 3 years from last engagement</li>
        </ul>
      </section>

      {/* Section 8 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Use of Mobile App</h2>
        <ul className="list-disc list-inside space-y-1 m-2 ml-5">
          <li>We may collect location (if enabled) to recommend jobs nearby</li>
          <li>Usage logs and device data are used to improve performance</li>
          <li>You may revoke location permission via device settings</li>
        </ul>
      </section>

      {/* Section 9 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Updates to Privacy Policy</h2>
        <p className="m-2 ml-5">
          We may update this Privacy Policy from time to time. Any significant changes will be notified via app, email, or SMS.
          Continued use of our platform constitutes acceptance of the revised policy.
        </p>
      </section>

      {/* Section 10 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
        <p className="m-2 ml-5">If you have any questions or concerns, contact:</p>
        <p className="mt-2">
          <strong className="m-2 ml-5">MedCapSky Revolution Pvt. Ltd.</strong><br />
          📧 Email: < a href="mailto:privacy@medcapsky.com" className="text-blue-600 underline m-2 ml-5">privacy@medcapsky.com</a><br />
          📞 Phone: +91 9208432221<br />
          🌐 Website: <a href="https://medcapsky.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.medcapsky.com</a>
        </p>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;



