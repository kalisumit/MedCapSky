import React from 'react';
import Navlink from '../component/navlink.jsx';
import Footer from '../component/footer.jsx';

function TermsAndConditions(){
  return (
    <>
    <Navlink/>
    <div className="md:max-w-[95%] mx-auto px-4 py-10 mt-[35px] text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center">
        TERMS AND CONDITIONS FOR SERVICE PROVIDERS
      </h1>

      <section className="mb-8">
        <p className="mb-2 font-semibold">MedCapSky Revolution Pvt. Ltd.</p>
        <p className="mb-4">
          (Applicable to Nurses, Physiotherapists, Paramedical Staff, IT Professionals, Non-IT Staff, Daycare Workers, and Other Onboarded Professionals)
        </p>

        <h2 className="text-2xl font-semibold mb-2">1. Nature of Engagement</h2>
        <p className="mb-4">
          MedCapSky is a staffing and deployment platform that connects service providers with clients in need of
          medical and non-medical personnel. The engagement is on a contract or freelance basis only. No employer-employee
          relationship is implied unless explicitly stated in writing by MedCapSky.
        </p>

        <h2 className="text-2xl font-semibold mb-2">2. Registration and Platform Access</h2>
        <p className="mb-4">
          All service providers must complete the registration process and pay a non-refundable platform access fee of
          INR 199, valid for one (1) year from the date of registration. This fee grants access to job notifications,
          assignments, and platform support.
        </p>

        <h2 className="text-2xl font-semibold mb-2">3. Verification and Documentation</h2>
        <p className="mb-4">
          Before activation, service providers must submit verified documents such as government ID, qualification
          certificates, experience letters, and background checks (if applicable). MedCapSky reserves the right to
          reject or suspend access if information is false or incomplete.
        </p>

        <h2 className="text-2xl font-semibold mb-2">4. Service Assignments and Selection</h2>
        <p className="mb-4">
          Job opportunities are offered based on location, availability, skill match, and client needs. Acceptance is
          voluntary. Once accepted, the provider must report on time and complete the assignment as agreed.
        </p>

        <h2 className="text-2xl font-semibold mb-2">5. Professional Conduct and Responsibilities</h2>
        <p className="mb-2">All providers must maintain the highest standards of professional behavior:</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Respect patient/client privacy and confidentiality</li>
          <li>Follow clinical or functional protocols</li>
          <li>Wear appropriate attire and ID badge</li>
          <li>Avoid misconduct, absenteeism, or unauthorized leaves</li>
        </ul>
        <p className="mb-4">
          MedCapSky may terminate access or report misconduct to authorities.
        </p>

        <h2 className="text-2xl font-semibold mb-2">6. Payment Terms</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Payments are made daily/weekly/monthly depending on assignment via official MedCapSky channels. Providers
            must not accept payments directly from clients. Violations may result in blacklisting.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">7. No Direct Engagement with Clients</h2>
        <p className="mb-4">
          Providers are strictly prohibited from directly soliciting or accepting work from MedCapSky clients without
          written approval. Violations may result in removal and legal action.
        </p>

        <h2 className="text-2xl font-semibold mb-2">8. Prenatal Gender Testing Prohibition</h2>
        <p className="mb-4 text-red-700 font-semibold">
          MedCapSky service providers are not authorized to participate in any prenatal gender determination. Violators
          will face termination and legal reporting under the PCPNDT Act.
        </p>

        <h2 className="text-2xl font-semibold mb-2">9. Medical and Legal Limitations</h2>
        <p className="mb-4">
          Providers are authorized for non-invasive, home-care support only. Surgeries, restricted medications, or
          diagnostic conclusions are prohibited. In emergencies, refer patients to hospitals. IT/non-medical staff must
          not handle medical records unless approved.
        </p>

        <h2 className="text-2xl font-semibold mb-2">10. Termination and Suspension</h2>
        <p className="mb-2">Access may be suspended or terminated due to:</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Breach of conduct</li>
          <li>Client complaints</li>
          <li>Repeated absenteeism</li>
          <li>Misrepresentation of qualifications</li>
          <li>Legal violations</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">11. Agreement to Terms</h2>
        <p>
          By registering and operating under MedCapSky, the provider agrees to these terms. These may be updated at any
          time. Continued use implies acceptance of changes.
        </p>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default TermsAndConditions;
