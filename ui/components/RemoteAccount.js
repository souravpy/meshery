import React from "react";
import { createUseRemoteComponent, getDependencies, createRequires } from "@paciolan/remote-component";
import LoadingScreen from "./LoadingComponents/LoadingComponent";

const requires = createRequires(getDependencies);

const useRemoteComponent = createUseRemoteComponent({ requires });

const RemoteAccount = ({ url }) => {
  const [loading, err, RemoteComponent] = useRemoteComponent(url.url);
  if (loading) {
    return <LoadingScreen message="Loading Meshery Extension" />;
  }
  if (err != null) {
    return <div>Unknown Error: {err.toString()}</div>;
  }

  return (
    <div>
      <RemoteComponent />
    </div>
  );
}

export default RemoteAccount;