import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PrismicProvider, PrismicToolbar } from "@prismicio/react";
import { client, repositoryName } from "./prismic";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <PrismicProvider client={client}>
        <PrismicToolbar repositoryName={repositoryName} />
        <App />
      </PrismicProvider>
    </React.StrictMode>
  </BrowserRouter>
);
