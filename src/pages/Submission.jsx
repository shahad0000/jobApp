import React from "react";
import { useLocation } from "react-router";

const Submission = () => {
  const location = useLocation();
  const info = location.state;
  return (
    <div>
      <div className="bg-[url('/imgs/bg.png')] bg-no-repeat bg-cover min-w-screen min-h-screen flex justify-center p-11">
        <div className="flex flex-col gap-4 w-full lg:w-[60vw] lg:min-h-[70vh] bg-white p-11 rounded-2xl">
          <h1 className="text-3xl text-cyan-800 font-bold">
            Thank You for Your Application!
          </h1>
          <p className="text-xl">
            We have successfully received your application. Here’s a summary of
            the information you provided:
          </p>
          <div className="flex flex-col gap-5 text-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col gap-2 p-4">
                <label htmlFor="name" className="text-2xl font-bold">
                  {" "}
                  Name:
                </label>
                <span className="text-cyan-900">{info.name}</span>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <label htmlFor="dob" className="text-2xl font-bold">
                  Date of Birth:
                </label>
                <span className="text-cyan-900">{info.dob}</span>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col gap-2 p-4">
                  <label className="text-2xl font-bold">
                    Preferred City for Employment
                  </label>
                  <span className="text-cyan-900">{info.city}</span>
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <label className="text-2xl font-bold">
                    Expected Salary Range
                  </label>
                  <span className="text-cyan-900">{info.salary}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <label className="text-2xl font-bold">Motive</label>
                <span className="text-cyan-900">{info.motive}</span>
              </div>
              {/* relocate */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <p>Willing to relocate:</p>
                <div className="flex gap-9">
                  <span className="text-cyan-900">{info.relocate}</span>
                </div>
              </div>
              {/* experience */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <p className="">Experience in similar role:</p>
                <div className="flex gap-9">
                  <span className="text-cyan-900">{info.experience}</span>
                </div>{" "}
              </div>
              {/* availability */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <p>Available to start immediately</p>
                <div className="flex gap-9">
                  <span className="text-cyan-900">{info.availability}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submission;
