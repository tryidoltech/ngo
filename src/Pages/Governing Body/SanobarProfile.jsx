import Navbar from "../../Navbar/Navbar";
import Footer from "../../Pages/Home/Footer"; // Adjust the path to your Navbar component
import { sanobarAliQureshi } from "../../../data/Data"; // Adjust the path to your data file

const SanobarProfile = () => {
  // Destructuring data from the imported `sanobarAliQureshi` object
  const { name, title, contact, bio, otherPosts } = sanobarAliQureshi;

  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full min-h-screen py-10 flex bg-white">
        <div className="w-full px-24 max-md:px-10 py-20 max-md:flex-col flex">
          <div className="min-w-[18vw] max-md:w-full">
            <img
              className="w-[15vw] max-md:w-full"
              src="bearer-1.png"
              alt={`${name}'s Profile`}
            />
            <h1 className="text-xl font-semibold py-2">{sanobarAliQureshi.name}</h1>
            <h5 className="italic text-gray-600">{sanobarAliQureshi.title}</h5>
            <div className="leading-8 py-2 mt-6">
              <h6 className="text-sm font-semibold">Contact:</h6>
              <p className="py-2 text-sm">{contact.email}</p>
              <p className="text-sm">{contact.phone}</p>
            </div>
          </div>

          <div className="ml-10 max-md:ml-0">
            <p className="text-lg">{bio}</p>
            <h1 className="mt-5 font-bold text-xl">Other Posts:</h1>
            <ul className="list-disc marker:text-2xl  leading-relaxed mt-3">
              {otherPosts.map((post, index) => (
                <li key={index}>{post}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SanobarProfile;
