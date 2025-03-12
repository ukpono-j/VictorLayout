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
    <div>
      <div className="border border-black">
        <Header />
        {/* Dashboard heading */}
        <main className="px-16 py-10">
          <div>
            <h1>Admin</h1>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold">General Statistics(All Services)</h3>
                <p>The overview of your account performance</p>
              </div>
              <button className="bg-[#556ee6] text-white w-[300px] h-[46px] rounded-[10px]">Filter</button>
            </div>
          </div>
          <div className="flex gap-12">
            <div className="flex items-center mt-2 w-[100%]">
              <LeftStatistics />
              <RightStatistics />
            </div>
            <div className="flex items-center">
              <Commission />
              <TotalAgentPayout />
            </div>
          </div>
          <div className="mt-5">
            <h3 className="font-bold">Monthly Conversion (2025)</h3>
            <p>The overview of volume spent and conversion</p>
          </div>
          <div className="flex mt-4 gap-14">
            <Requests />
            <Conversion />
          </div>
          <div className="w-[100%]">
            <div className="mt-5">
              <h3 className="font-bold">Agents (27)</h3>
              <p>The overview of all agents</p>
            </div>
            <Agents />
          </div>
        </main>
      </div>

    </div>
  )
}
