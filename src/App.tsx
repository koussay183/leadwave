import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import HomePage from "./routes/index";
import FormationsPage from "./routes/formations";
import PubliciteMediaPage from "./routes/publicite-media";
import ContactPage from "./routes/contact";
import AdminPage from "./routes/admin";
import MerciPage from "./routes/merci";
import { useLandings } from "./landings/useLandings";

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

function RouteTracker() {
  const location = useLocation();
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // GTM handles the initial pageview via its container snippet
    }
    (window as { dataLayer?: object[] }).dataLayer ??= [];
    (window as { dataLayer: object[] }).dataLayer.push({
      event: "virtualPageview",
      page_path: location.pathname + location.search,
      page_title: document.title,
    });
  }, [location]);
  return null;
}

function FullScreenLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Loader2 className="animate-spin text-[var(--brand-blue)]" size={32} />
    </div>
  );
}

export default function App() {
  const { landings, loading } = useLandings();

  if (loading) return <FullScreenLoader />;

  return (
    <>
      <RouteTracker />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/formations" element={<FormationsPage />} />
      <Route path="/publicite-media" element={<PubliciteMediaPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/merci" element={<MerciPage />} />
      {landings.map((l) => {
        const Comp = l.component;
        return <Route key={l.key} path={l.slug} element={<Comp slug={l.slug} fields={l.fields} />} />;
      })}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </>
  );
}
