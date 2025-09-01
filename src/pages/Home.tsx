import { CreditCards } from "@/components/CreditCards";
import { CompanyLogos } from "@/components/CompanyLogos";
import { CallToAction } from "@/components/CallToAction";

export const Home = () => {
    return (
      <>
        <div className="bg-[rgba(83, 56, 158, 1)] flex flex-col items-center relative overflow-hidden pb-20">
          <div className="flex flex-col justify-center items-center gap-6 pt-16 md:pt-20 lg:pt-24 relative z-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-white text-center leading-tight">
              Banking technology
              <br />
              that has your back.
            </h1>
            <p className="text-white text-opacity-70 text-center text-lg max-w-lg">
              Simple, transparent banking. No hidden fees and free overdrafts.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-[rgba(83,56,158,1)] rounded-md font-medium">
                Demo
              </button>
              <button className="px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium">
                Sign up
              </button>
            </div>
          </div>
          <div className="relative w-full flex justify-center z-0">
            <CreditCards />
          </div>
        </div>
        <div className="w-full bg-white flex flex-col items-center">
          <CompanyLogos />
          <CallToAction className="my-16"/>
        </div>
      </>
    );
};

export default Home;