import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/index";
import FormationsPage from "./routes/formations";
import PubliciteMediaPage from "./routes/publicite-media";
import ContactPage from "./routes/contact";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page non trouvée</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La page que vous cherchez n'existe pas.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/formations" element={<FormationsPage />} />
      <Route path="/publicite-media" element={<PubliciteMediaPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
