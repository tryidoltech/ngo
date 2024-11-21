import React from 'react';
import Navbar from '../Navbar/Navbar';
import Dashboard from './Home/Dashboard';
import Footer from './Home/Footer';

const Donate = () => {
  const profiles = [
    {
      image: "Rectangle 30.png",
    },
    {
      image: "Rectangle 30 (2).png",
    },
    {
      image: "Rectangle 30 (3).png",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="">
        <div
          className="w-full h-[362px] bg-center	flex items-center justify-center"
          style={{ backgroundImage: `url(governing.png)` }}
        >
          <div className="text-white leading-10 text-center pt-12 w-[600px] h-[200px]">
            <p>Home / Donate Now</p>
            <h1 className="text-5xl font-semibold">Donate Now</h1>
          </div>
        </div>
        <div className="bg-gray-50 max-md:px-5 px-24 py-10">
          <h1 className="text-center text-xl font-semibold text-gray-800">
            All donations are eligible for tax benefit under 80G of Income Tax Act.
          </h1>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-md"
              >
                <img
                  src={profile.image}
                  alt={`Card ${index + 1}`}
                  className="w-full" 
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-700">Headline</h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis officia nesciunt, vero voluptates molestiae nostrum maiores expedita optio aperiam atque placeat obcaecati reprehenderit. Assumenda aliquid voluptas delectus. Repudiandae, nemo aut!
                  </p>
                  <button className="mt-4 w-full rounded bg-[#5044eb] py-2 text-white ">
                    Donate Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className='flex max-md:flex-col py-10 '>
          <div className=" w-[50vw] max-md:w-full ">
            <h2 className="text-lg font-semibold text-gray-700">Cheque Payment</h2>
            <p className="mt-2 text-sm text-gray-600">
              Cheques or Bank Drafts should be given in the name of{" "}
              <strong>Pushpiran Union For Real Enlighten PURE</strong> payable at
              New Delhi. You can courier the cheque to the below address:
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Suryasena Sewa Samiti <br />
              23, Vill + Post : Mahpur, Saidpur, <br />
              Ghazipur, Uttar Pradesh - 233304, India <br />
              Mobile: (+91) 7081938407, 9721110707
            </p>

            <h2 className="mt-6 text-lg font-semibold text-gray-700">
              Bank transfer from an Indian account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              You can donate using an online bank transfer or wire transfer from
              your bank account in India using the following details of the NGO
              account:
            </p>
            <ul className="mt-2 text-sm text-gray-600">
              <li>Bank A/C Name: Surya Sena Sewa Samiti</li>
              <li>Type of account: Current Account</li>
              <li>Account Number: 41900320411</li>
              <li>Name of Bank: State Bank of India</li>
              <li>Branch: Saidpur Ghazipur</li>
              <li>IFSC Code: SBIN0001096</li>
              <li>MICR Code: 233002102</li>
            </ul>

            <h2 className="mt-6 text-lg font-semibold text-gray-700">
              Bank transfer from overseas to NGO's FCRA account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Overseas donations must comply with FCRA (Foreign Contribution
              Regulation Act) hence we request you to make your donation using the
              following information:
            </p>
            <ul className="mt-2 text-sm text-gray-600">
              <li>Bank A/C Name: aaaxxxxaaxx</li>
              <li>Bank A/C Number: 41900320411</li>
              <li>Name of Bank: State Bank of India</li>
              <li>IFSC Code: SBIN0001096</li>
              <li>SWIFT Code: 000000000</li>
              <li>
                Address: FCRA Cell, 4th Floor, SBI NDMB, 11, Sansad Marg, New Delhi
                - 110001
              </li>
            </ul>
          </div>
          <div className='w-[30vw]'>
            <img src="/barcode.png" alt="" />

          </div>
          </div>
        </div>
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
};

export default Donate;
