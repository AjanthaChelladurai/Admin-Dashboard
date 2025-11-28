/* import React from "react";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import ChartPopup from "./components/ChartPopup";

function App() {
  return (
    <Layout>
      <Dashboard />
      <ChartPopup />
    </Layout>
  );
}

export default App;
 */

/* import React, { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Layout>
          <Dashboard setIsLoggedIn={setIsLoggedIn} />
        </Layout>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
 */
/* import React, { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Layout setIsLoggedIn={setIsLoggedIn}>
          <Dashboard />
        </Layout>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
 */
import React, { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import ChartPopup from "./components/ChartPopup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Layout setIsLoggedIn={setIsLoggedIn}>
          <Dashboard />
          <ChartPopup /> {/* <-- Add here so popup works */}
        </Layout>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
