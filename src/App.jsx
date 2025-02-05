import { Suspense, useEfect } from "react";
import { Routes, Route } from "react-router-dom"; 
import routes from "./router/Router"; 

function App() {
    const tele = window.Telegram.WebApp

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map(({ id, path, element, children }) => (
          <Route key={id} path={path || ""} element={element}>
            {children &&
              children.map(({ id: childId, path: childPath, element: childElement }) => (
                <Route key={childId} path={childPath} element={childElement} />
              ))}
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
