import React, { use } from "react";
import JobApplicationTable from "./JobApplicationTable";

const ApplicationList = ({ myApplicationPromised }) => {
  const data = use(myApplicationPromised);
  console.log(data);
  return (
    <div>
      <h2 className="text-3xl">Job Apply So far : {data.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((application, index) => (
              <JobApplicationTable
                key={application._id}
                index={index}
                application={application}
              ></JobApplicationTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
