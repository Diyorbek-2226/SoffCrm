import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./router/Router";

function App() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []); // Dependency array bo‘sh qolishi kerak

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
