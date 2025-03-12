import { Header } from "~/components/Header";
import LeftStatistics from "~/components/LeftStatistics";
import RightStatistics from "~/components/RightStatistics";
import Commission from "~/components/Commission";
import TotalAgentPayout from "~/components/TotalAgentPayout";
import Requests from "~/components/Requests";
import Conversion from "~/components/Conversion";
import Agents from "~/components/Agents";

export function Welcome() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="px-6 md:px-12 lg:px-16 py-6 md:py-10">
        {/* Admin Heading */}
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">Admin</h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-lg font-bold">General Statistics (All Services)</h3>
              <p className="text-gray-600">The overview of your account performance</p>
            </div>
            <button className="bg-[#556ee6] text-white w-full md:w-[200px] h-[46px] rounded-md">
              Filter
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-12 mt-4">
          {/* Left Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
            <LeftStatistics />
            <RightStatistics />
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
            <Commission />
            <TotalAgentPayout />
          </div>
        </div>


        {/* Monthly Conversion */}
        <div className="mt-10">
          <h3 className="text-lg font-bold">Monthly Conversion (2025)</h3>
          <p className="text-gray-600">The overview of volume spent and conversion</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Requests />
          <Conversion />
        </div>

        {/* Agents Section */}
        <div className="mt-10">
          <h3 className="text-lg font-bold">Agents (27)</h3>
          <p className="text-gray-600">The overview of all agents</p>
        </div>
        <Agents />
      </main>
    </div>
  );
}
