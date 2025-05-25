import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Application = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [motive, setMotive] = useState("");
  const [salary, setSalary] = useState("");
  const [relocate, setRelocate] = useState("");
  const [experience, setExperience] = useState("");
  const [availability, setAvailability] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 4) {
      return Swal.fire({
        title: "Name must be longer then 4 characters",
        confirmButtonColor: "#155e75",
      });
    }
    navigate("/submission", {
      state: {
        name,
        dob,
        city,
        motive,
        salary,
        relocate,
        experience,
        availability,
      },
    });
  };

  return (
    <div className="bg-[url('/imgs/bg.png')] bg-no-repeat bg-cover min-w-screen min-h-screen flex justify-center p-11">
      <div className="flex flex-col gap-11 w-full lg:w-[60vw] lg:min-h-[70vh] bg-white p-11 rounded-2xl">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-700">Apply Now</h1>
        <form className="flex flex-col gap-5 text-xl" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-2 p-4">
              <label htmlFor="name">Full Name:</label>
              <input
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                id="name"
                type="text"
                placeholder="name"
                className="border-b-2 text-gray-500 p-1 flex"
              />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                id="dob"
                type="date"
                className="border-b-2 text-gray-500 p-1 flex"
              />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col gap-2 p-4">
                <label htmlFor="city">Preferred City for Employment</label>
                <select
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="flex text-gray-500"
                  id="city"
                >
                  <option value="" disabled selected>
                    -- Select a city --
                  </option>
                  <option value="Riyadh">Riyadh</option>
                  <option value="Jeddah">Jeddah</option>
                  <option value="Dammam">Dammam</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <label htmlFor="salary">Expected Salary Range</label>
                <select
                  required
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="flex text-gray-500"
                  id="salary"
                >
                  <option value="" disabled selected>
                    -- Choose a salary range --
                  </option>
                  <option value="3,000 – 8,000">3,000 – 8,000</option>
                  <option value="9,000 – 13,000">9,000 – 13,000</option>
                  <option value="15,000+">15,000</option>
                </select>
              </div>
            </div>
            <hr className="border-gray-200" />
            <div className="flex flex-col gap-2 p-4">
              <label htmlFor="motive">Why are you applying for this job?</label>
              <textarea
                required
                value={motive}
                onChange={(e) => setMotive(e.target.value)}
                className="border-1 border-gray-400 text-gray-500 p- flex"
                name="motive"
                placeholder="Write your reason"
                id="motive"
              ></textarea>
            </div>
            {/* relocate */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <p>Are you willing to relocate for this position?</p>
              <div className="flex gap-9">
                <label>
                  <input
                    onChange={(e) => setRelocate(e.target.value)}
                    type="radio"
                    name="relocate"
                    value="yes"
                    required
                  />
                  <span className="m-2">Yes</span>
                  </label>
                <label>
                  <input
                    onChange={(e) => setRelocate(e.target.value)}
                    type="radio"
                    name="relocate"
                    value="no"
                    required
                  />
                  <span className="m-2">No</span>
                  </label>
              </div>
            </div>
            {/* experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <p className="">Do you have experience in a similar role?</p>
              <div className="flex gap-9 ">
                <label>
                  <input
                    onChange={(e) => setExperience(e.target.value)}
                    type="radio"
                    name="experience"
                    value="yes"
                    required
                  />
                  <span className="m-2">Yes</span>
                  </label>
                <label>
                  <input
                    onChange={(e) => setExperience(e.target.value)}
                    type="radio"
                    name="experience"
                    value="no"
                    required
                  />
                  <span className="m-2">No</span>
                  </label>
              </div>
            </div>
            {/* availability */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <p>Are you available to start immediately?</p>
              <div className="flex gap-9">
                <label>
                  <input
                    onChange={(e) => setAvailability(e.target.value)}
                    type="radio"
                    name="availability"
                    value="yes"
                    required
                  />
                  <span className="m-2">Yes</span>
                  </label>
                <label>
                  <input
                    onChange={(e) => setAvailability(e.target.value)}
                    type="radio"
                    name="availability"
                    value="no"
                    required
                  />
                  <span className="m-2">No</span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-cyan-800 font-bold rounded-md text-white px-6 py-3 mt-4 hover:cursor-pointer"
              type="submit"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application;
