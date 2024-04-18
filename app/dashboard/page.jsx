"use client";
import React from "react";
import Layout from "../../components/layout";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { Circle } from "rc-progress";
import CountUp from "react-countup";
import dynamic from "next/dynamic";
const BarChart =  dynamic(() => import("../../components/charts/BarCharts"),{ssr: false})

export default function Dashboard() {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-4 gap-6">
          <div className="lg:col-span-1 sm:col-span-4 max-xl:col-span-4">
            <div className="mx-auto bg-sky-50 rounded-xl shadow-lg hover:scale-105 transition duration-150">
              <div className="flex justify-between">
                <div className="ml-7 mt-5">
                  <AutorenewIcon fontSize="large" />
                </div>
                <div className="mt-5 roundprogress mr-5">
                  <Circle
                    percent={89}
                    strokeWidth={10}
                    trailWidth={8}
                    strokeColor="rgb(2, 132, 199)"
                    trailColor="#b3a4f3"
                  />
                </div>
              </div>
              <div className=" py-5">
                <div className="text-blue-600 font-semibold text-center">
                  QUALIDADE
                </div>
                <div className="text-3xl font-semibold  text-center">
                  <CountUp start={0} end={89} delay={1} />%
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 sm:col-span-4 max-xl:col-span-4">
            <div className="mx-auto bg-sky-50 rounded-xl shadow-lg hover:scale-105 transition duration-150">
              <div className="flex justify-between">
                <div className="ml-7 mt-5">
                  <EngineeringIcon fontSize="large" />
                </div>
                <div className="mt-5 roundprogress mr-5">
                  <Circle
                    percent={91}
                    strokeWidth={10}
                    trailWidth={8}
                    strokeColor="rgb(2, 132, 199)"
                    trailColor="#b3a4f3"
                  />
                </div>
              </div>
              <div className=" py-5">
                <div className="text-blue-600 font-semibold text-center">
                  DISPONIBILIDADE
                </div>
                <div className="text-3xl font-semibold text-center">
                  <CountUp start={0} end={91} delay={1} />%
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 sm:col-span-4 max-xl:col-span-4">
            <div className="mx-auto bg-sky-50 rounded-xl shadow-lg hover:scale-105 transition duration-150">
              <div className="flex justify-between">
                <div className="ml-7 mt-5">
                  <AddBoxIcon fontSize="large" />
                </div>
                <div className="mt-5 roundprogress mr-5">
                  <Circle
                    percent={89}
                    strokeWidth={10}
                    trailWidth={8}
                    strokeColor="rgb(2, 132, 199)"
                    trailColor="#b3a4f3"
                  />
                </div>
              </div>
              <div className="py-5">
                <div className="text-blue-600 font-semibold text-center">
                  PERFORMANCE
                </div>
                <div className="text-3xl font-semibold text-center">
                  <CountUp start={0} end={89} delay={1} />%
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 sm:col-span-4 max-xl:col-span-4">
            <div className="mx-auto bg-sky-100 rounded-xl shadow-lg hover:scale-105 transition duration-150">
              <div className="flex justify-between">
                <div className="ml-7 mt-5">
                  <IndeterminateCheckBoxIcon fontSize="large" />
                </div>
                <div className="mt-5 roundprogress mr-5">
                  <Circle
                    percent={96}
                    strokeWidth={10}
                    trailWidth={8}
                    strokeColor="rgb(2, 132, 199)"
                    trailColor="#b3a4f3"
                  />
                </div>
              </div>
              <div className="py-5">
                <div className="text-blue-600 font-semibold text-center">
                  N. EFETV. EQUIP
                </div>
                <div className="text-3xl font-semibold text-center">
                  <CountUp start={0} end={96} delay={1} />%
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 sm:col-span-5 max-xl:col-span-4">
            <BarChart />
          </div>
          
        </div>
        
      </Layout>
    </>
  );
}
