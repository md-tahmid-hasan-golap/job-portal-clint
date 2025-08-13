import React, { Suspense, useContext } from "react";
import ApplicationStats from "../Pages/Shared/ApplicationStats";
import ApplicationList from "./ApplicationList";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { myApplicationPromised } from "../api/applicant";

const MyApplication = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <ApplicationStats></ApplicationStats>
      <Suspense fallback={"Loading Your Application"}>
        <ApplicationList
          myApplicationPromised={myApplicationPromised(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplication;
