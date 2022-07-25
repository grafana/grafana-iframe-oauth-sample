import React, { useEffect, useState } from "react";
import Keycloak from "keycloak-js";

const Restricted: React.FC = () => {
  const [keycloak, setKeycloak] = useState<any>(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const keycloak = Keycloak({
      url: "http://127.0.0.1:8087/auth",
      realm: "grafana",
      clientId: "sample-iframe-project",
    });

    keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
      setKeycloak(keycloak);
      setAuthenticated(authenticated);
    });
  }, []);

  if (keycloak) {
    const url =
      "http://127.0.0.1:3000?orgId=1&kiosk&auth_token=" +
      keycloak.token;
    if (authenticated)
      return (
        <div>
          <h2>Restricted Area</h2>
          <iframe
            title="grafana iframe"
            src={url}
            width="100%"
            height="800"
          ></iframe>
          <br></br>
        </div>
      );
    else return <div>Unable to authenticate!</div>;
  }
  return <div>Initializing Keycloak...</div>;
};

export default Restricted;
