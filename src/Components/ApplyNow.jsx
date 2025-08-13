import React, { useContext } from "react";
import { Link, useParams } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const ApplyNow = () => {
  const { id: jobId } = useParams();
  const { user } = useContext(AuthContext);

  const handleApplyForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const application = {
      jobId,
      applicantEmail: user.email,
      linkedIn,
      github,
      resume,
    };

    axios
      .post(
        "https://job-portal-server-khaki-phi.vercel.app/application",
        application
      )
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Apply Success!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mb-7">
      <h2 className="text-center text-xl my-5 md:text-2xl lg:text-3xl font-semibold">
        Apply Job for job : <Link to={`/jobsDetails/${jobId}`}>Details</Link>
      </h2>

      <form onSubmit={handleApplyForm}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-md mx-auto border p-4">
          {/* LinkedIn */}
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            name="linkedin"
            className="input input-bordered w-full"
            placeholder="https://linkedin.com/in/username"
            required
          />

          {/* GitHub */}
          <label className="label">GitHub Link</label>
          <input
            type="url"
            name="github"
            className="input input-bordered w-full"
            placeholder="https://github.com/username"
            required
          />

          {/* Resume */}
          <label className="label">Resume Link</label>
          <input
            type="url"
            name="resume"
            className="input input-bordered w-full"
            placeholder="https://myresume.com/resume.pdf"
            required
          />

          {/* Submit Button */}
          <button className="btn btn-primary w-full mt-4">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default ApplyNow;
