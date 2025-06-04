import React from "react";
import mathworksLogo from "../assets/MathLogo.png";
import probusLogo from "../assets/ProbusLogo.png";
import fsmLogo from "../assets/FSMLogo.png";
import ihfcLogo from "../assets/IHFCLogo.png";

const Sponsorship = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10 px-4 md:px-0 m-2 mt-14">
    {/* Removed container box for a flat look */}
    <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center tracking-tight">DD Robocon 2025 Sponsorship</h1>
    {/* About Knowledge Partners */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-purple-700 mb-3 uppercase tracking-wide">About Knowledge Partners</h2>
      <div className="flex flex-col md:flex-row gap-8 mb-6">
        {/* IHFC Section */}
        <div className="flex flex-row items-center bg-white rounded-lg shadow p-4 flex-1">
          <img
            src={ihfcLogo}
            alt="IHFC"
            className="object-contain h-20 w-32 mr-4"
            style={{ minWidth: "80px" }}
          />
          <p className="text-gray-700 leading-relaxed font-medium">
            The I-Hub Foundation for Cobotics (IHFC) is the TIH
            of IIT Delhi in partnership with the Department of
            Science and Technology (DST), Government of India,
            under the National Mission on Interdisciplinary
            Cyber Physical Systems. Founded in June 2020 as a
            section 8 company, IHFC focuses on R&amp;D,
            entrepreneurship, skills training, and international
            collaborations in the areas of Medical, Agriculture,
            Industry, and Defence. It combines expertise from
            academia, government, and industry to drive
            innovation. IHFC supports and nurtures young
            minds in the fields of deeptech, AI, and robotics.
          </p>
        </div>
        {/* FSM Section */}
        <div className="flex flex-row items-center bg-white rounded-lg shadow p-4 flex-1">
          <img
            src={fsmLogo}
            alt="FSM"
            className="object-contain h-20 w-32 mr-4"
            style={{ minWidth: "80px" }}
          />
          <p className="text-gray-700 leading-relaxed font-medium">
            Indian Institute of Technology Delhi (IITD) and
            Automation Industry Association (AIA) partnered in
            May 2017 to establish a center under the auspices of
            the Samarth Udyog initiative—a project of the
            Ministry of Heavy Industries (MHI). The center,
            known as the Foundation for Smart Manufacturing
            (FSM), supports the development of technologies
            for the effective adoption and implementation of
            smart manufacturing concepts.
          </p>
        </div>
      </div>
    </section>
    {/* Welcome Section */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-green-700 mb-3 uppercase tracking-wide">Welcome to DD-Robocon 2025</h2>
      <p className="text-gray-700 mb-2 font-semibold">Pioneering Innovation in Robotics and Engineering</p>
      <p className="text-gray-700 mb-2">DD-Robocon (Doordarshan Robocon) is India’s premier robotics competition that brings together the brightest minds from across the nation to design, innovate, and compete in a thrilling display of engineering prowess. This year’s theme, “Robot Basketball,” challenges participants to develop robots capable of dribbling, shooting, and scoring goals in a high-energy game environment.</p>
    </section>
    {/* Event Details */}
    <section className="mb-10">
      <h3 className="text-xl font-bold text-blue-600 mb-2 uppercase tracking-wide">Event Details</h3>
      <ul className="list-disc ml-6 text-gray-700 mb-2 font-medium">
        <li>National Finals: 12-13 July 2025</li>
        <li>Venue: Thyagraj stadium, New Delhi</li>
      </ul>
      <p className="text-gray-700 mb-2">Indian Institute of Technology Delhi (IITD) and Automation Industry Association (AIA) partnered in May 2017 to establish a center under the auspices of the Samarth Udyog initiative—a project of the Ministry of Heavy Industries (MHI). The center, known as the Foundation for Smart Manufacturing (FSM), supports the development of technologies for the effective adoption and implementation of smart manufacturing concepts.</p>
      <p className="text-gray-700 mb-2">The winning team will represent India at the prestigious international competition ABU Robocon 2025 in Mongolia, scheduled for August 24, 2025, bringing global recognition to their innovative designs.</p>
      <h4 className="text-lg font-bold text-blue-600 mt-4 mb-2 uppercase tracking-wide">Event Reach</h4>
      <ul className="list-disc ml-6 text-gray-700 font-medium">
        <li>Colleges Participating: 75+ top institutions from India.</li>
        <li>Expected Attendees: 1,000+ students, professors, and industry experts.</li>
        <li>Media Coverage: National TV (Doordarshan) and other digital platforms and social media.</li>
      </ul>
    </section>
    {/* Why Sponsor */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-yellow-600 mb-3 uppercase tracking-wide">Why Sponsor DD-Robocon 2025?</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-2 font-medium">
        <li>Unparalleled Brand Visibility: Reach a diverse audience, including leading academic institutions, professors, researchers, students, industry experts, and media outlets.</li>
        <li>Foster Innovation: Be part of a transformative event that inspires the next generation of engineers and roboticists.</li>
        <li>Recruit Top Talent: Engage with some of India’s brightest minds and future innovators.</li>
        <li>Showcase Your Commitment: Demonstrate your organization's dedication to advancing science, technology, and innovation in India.</li>
      </ul>
    </section>
    {/* Important Links */}
    {/* <section className="mb-10">
      <h2 className="text-2xl font-bold text-pink-600 mb-3 uppercase tracking-wide">Important Links</h2>
      <div className="flex flex-wrap gap-4 mb-2">
        <a href="https://www.youtube.com/live/uhDXriSTr1E?si=DQToUbM5FRjatByp" target="_blank"
      rel="noopener noreferrer" className="bg-blue-100 text-blue-700 px-4 py-2 rounded shadow hover:bg-blue-200 font-semibold transition">DD Robocon 2024 Finals</a>
        <a href="https://drive.google.com/file/d/1WY__m4tqx0t2zNBMoeLxKJmbHbSMy4M5/view?usp=drive_link" target="_blank"
      rel="noopener noreferrer" className="bg-blue-100 text-blue-700 px-4 py-2 rounded shadow hover:bg-blue-200 font-semibold transition">DD Robocon Newsletter 2024</a>
        <a href="https://youtu.be/FTopsDAp2-o?si=5ihIDFDSO2JCMUIK " target="_blank"
      rel="noopener noreferrer" className="bg-blue-100 text-blue-700 px-4 py-2 rounded shadow hover:bg-blue-200 font-semibold transition">DD Robocon Theme 2025</a>
      </div>
    </section> */}
    {/* Sponsorship Matrix */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-purple-600 mb-3 uppercase tracking-wide">Sponsorship Matrix 2025</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1 font-bold">Benefit</th>
              <th className="border px-2 py-1 font-bold">Platinum</th>
              <th className="border px-2 py-1 font-bold">Gold</th>
              <th className="border px-2 py-1 font-bold">Silver</th>
              <th className="border px-2 py-1 font-bold">Bronze</th>
              <th className="border px-2 py-1 font-bold">Stall</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Link on Competition Website", "Yes", "Yes", "Yes", "Yes", "Yes"],
              ["Promotional Emails to Teams", "Yes", "Yes", "Yes", "Yes", "No"],
              ["Booth for Product Display", "Yes", "Yes", "Yes", "No", "Yes"],
              ["Logo on Participant Certificates", "Yes", "Yes", "Yes", "No", "No"],
              ["Ads on Website (3 Months)", "Yes", "Yes", "No", "No", "Yes"],
              ["Entrance Banners with Theme", "Yes", "Yes", "Yes", "No", "No"],
              ["Banners Near Game Field", "Yes", "Yes", "Yes", "No", "No"],
              ["People allowed as a Sponsor in the Event", "Yes", "Yes", "Yes", "No", "Yes"],
              ["Speaking Slot at Inauguration Ceremony", "Yes", "Yes", "No", "No", "No"],
              ["Social Media Promotions Weekly", "Yes", "Yes", "Yes", "No", "No"],
              ["Sponsorship Amount (in Lakh Rs.)", "10.0", "5.0", "3.0", "2.0", "1.0"]
            ].map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {row.map((cell, i) => (
                  <td key={i} className="border px-2 py-1 text-center font-medium">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    {/* Sponsors */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-green-600 mb-3 uppercase tracking-wide">DD-Robocon 2025 Sponsors</h2>
      <div
        className="flex flex-row gap-10 space-x-10 items-center justify-center mb-4 overflow-x-auto"
        style={{ minHeight: "120px", whiteSpace: "nowrap" }}
      >
        <div className="flex items-center justify-center bg-white rounded shadow p-2">
          <img
            src={mathworksLogo}
            alt="MathWorks"
            className="object-contain"
            style={{ height: "80px", width: "180px", display: "block" }}
          />
        </div>
        <div className="flex items-center justify-center bg-white rounded shadow p-2">
          <img
            src={probusLogo}
            alt="Probus"
            className="object-contain"
            style={{ height: "80px", width: "180px", display: "block" }}
          />
        </div>
        <div className="flex items-center justify-center bg-white rounded shadow p-2">
          <img
            src={fsmLogo}
            alt="FSM"
            className="object-contain"
            style={{ height: "80px", width: "180px", display: "block" }}
          />
        </div>
        <div className="flex items-center justify-center bg-white rounded shadow p-2">
          <img
            src={ihfcLogo}
            alt="IHFC"
            className="object-contain"
            style={{ height: "80px", width: "180px", display: "block" }}
          />
        </div>
      </div>
    </section>
    {/* Contact Us */}
    <section>
      <h2 className="text-2xl font-bold text-blue-700 mb-3 uppercase tracking-wide">Contact Us</h2>
      <div className="text-gray-700 mb-2 font-medium">
        <p>Email: <a href="mailto:ddroboconiitd@gmail.com" className="text-blue-600 underline font-semibold">ddroboconiitd@gmail.com</a></p>
        <p>Phone: 9811512965, 8116435875, 9013899145</p>
        <p>Website: <a href="https://ddrobocon.iitd.ac.in" className="text-blue-600 underline font-semibold">ddrobocon.iitd.ac.in</a></p>
        <p>DD Robocon 2025 Secretariat</p>
        <p>Department of Mechanical Engineering, IIT Delhi, Hauz Khas, New Delhi - 110016, India</p>
      </div>
    </section>
  </div>
);

export default Sponsorship;
