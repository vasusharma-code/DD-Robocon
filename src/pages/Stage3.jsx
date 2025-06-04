import React from "react";

const Stage3 = () => (
  <div className="p-8 min-h-screen mt-14 bg-gray-50">
    <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
      Guidelines for NATIONAL DD-ROBOCON 2025 on July 12-13, 2025
    </h1>

    <p className="mb-6 font-semibold text-red-600">
      Note: DD-Robocon 2025 will be held physically at IIT Delhi, New Delhi using game rules. Read more below. Enjoy DD-Robocon 2025!
    </p>

    <h2 className="text-2xl font-bold text-purple-700 mb-4 mt-8 uppercase tracking-wide">Section-A</h2>
    <ol className="list-decimal ml-6 text-gray-800 mb-8 space-y-6">
      <li>
        <span className="font-semibold text-blue-700">Team Registration</span>
        <ul className="list-disc ml-6 mt-1 mb-2">
          <li>
            <span className="font-bold">Mandatory:</span> All qualified teams must fill the Participation Form after payment of non-refundable registration fee
          </li>
          <li>
            <span className="font-bold">Registration Fee for Core Members (6+1)*:</span> ₹50,000/- + 18% GST (Total: ₹59,000/-).
            <br />
            <span className="font-normal text-gray-700">
              * Each team can have a maximum of 7 members (including team leader and faculty mentor)
            </span>
            <ul className="list-disc ml-6 mt-1">
              <li>Participation for the team</li>
              <li>Local transportation (Railway Station ⇄ IIT Delhi).</li>
              <li>One faculty mentor (if any).</li>
            </ul>
            <span className="font-normal text-gray-700">
              Note: No boarding or lodging is included in this fee.
            </span>
          </li>
        </ul>
      </li>
      <li>
        <span className="font-semibold text-blue-700">Additional Team Members</span>
        <ul className="list-disc ml-6 mt-1 mb-2">
          <li>Additional members can join the team.</li>
          <li>
            <span className="font-bold">Fee:</span> ₹6,500/- + 18% GST per person (Total: ₹7,670/- per person).
            <ul className="list-disc ml-6 mt-1">
              <li>Participation.</li>
              <li>Local transportation (Railway Station ⇄ IIT Delhi).</li>
            </ul>
            <span className="font-normal text-gray-700">
              Excludes: Boarding and lodging.
            </span>
          </li>
        </ul>
      </li>
      <li>
        <span className="font-semibold text-blue-700">Accommodation (Optional)</span>
        <ul className="list-disc ml-6 mt-1 mb-2">
          <li>
            <span className="font-bold">On-campus Hostel Accommodation (IIT Delhi):</span>
            <ul className="list-disc ml-6 mt-1">
              <li>Fee: ₹3,250/- + 18% GST per person (Total: ₹3,835/- per person for 4 Nights).</li>
              <li>Includes: Boarding and lodging are arranged during July 10-13, 2025 (4 nights).</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <span className="font-semibold text-blue-700">Important Deadline:</span>
        <br />
        The total registration fee including accommodation must be paid by <span className="font-bold">June 15, 2025 (11:59 PM)</span>.
      </li>
    </ol>

    <h2 className="text-xl font-bold text-blue-700 mb-2 mt-8">Account Details for Payment</h2>
    <ul className="mb-4 text-gray-800">
      <li><span className="font-semibold">Account Name:</span> I HUB FOUNDATION FOR COBOTICS</li>
      <li><span className="font-semibold">Account number:</span> 50100581989912</li>
      <li><span className="font-semibold">Account type:</span> Saving Account</li>
      <li><span className="font-semibold">IFSC Code:</span> HDFC0000032</li>
      <li><span className="font-semibold">Branch:</span> SDA, New Delhi</li>
    </ul>
    <ul className="list-disc ml-6 mb-8 text-gray-700">
      <li>
        Please include the names of the team leader and the institute/college name in the participation form while completing the transaction.
      </li>
      <li>
        Attach a copy of the transaction receipt as payment proof while completing the registration form.
      </li>
    </ul>

    <h2 className="text-2xl font-bold text-purple-700 mb-4 mt-8 uppercase tracking-wide">Section-B</h2>
    <ol className="list-decimal ml-6 text-gray-800 mb-8 space-y-6">
      <li>
        Form to upload Permission Letter from your Institute to participate is to be filled in and submitted by <span className="font-bold">June 17, 2025 (11:59 PM)</span> for successful physical participation during July 12-13, 2025. {/*<a href="#" className="text-blue-600 underline font-semibold">[Google form (Click here)]</a>.*/}
      </li>
      <li>
        The Permission Letter is to be obtained from the Director/Principal/HOD with their signature in original with seal (<a href="#" className="text-blue-600 underline font-semibold">click here for the format</a>).
      </li>
      <li>
        Each qualifying team MUST also fill up their travel plan by filling up another form for their pick-up and drop from nearby stations only (New Delhi, Old Delhi and Hazrat Nizamuddin). Google Form (travel plan) is to be filled and submitted by <span className="font-bold">June 17, 2025 (11:59 PM)</span>
      </li>
    </ol>

    <div className="text-center mt-8">
      <span className="text-2xl font-bold text-green-700">ALL THE BEST!</span>
    </div>

    <div className="mt-16 p-6 bg-white rounded-lg shadow max-w-9xl ">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Non-Competitive Presentation</h2>
      <p className="text-gray-800 mb-2">
        Teams interested in the non-competitive category of DD Robocon 2025 are requested to fill out the google form. Please ensure submission by <span className="font-bold">June 10, 2025</span>.
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSc2q3E9t3NCC-__WfCOaQ41vvGCNv-MRrp-nqz9Q5pcYpeblg/viewform?usp=sharing&ouid=104266911694900133464 "
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
      >
        Google form link
      </a>
    </div>
  </div>
);

export default Stage3;
