import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AnimePanorama from "../../app/page";
import "../../app/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnimePanorama />
  </StrictMode>,
);
