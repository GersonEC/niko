import * as React from "react";
import { render, screen } from "@testing-library/react";
import Template from "../components/Template/Template";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("Verify nav, main and contentinfo sections for the Template", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });
  render(
    <Router history={history}>
      <Template />
    </Router>
  );
  screen.getByRole(/navigation/i);
  screen.getByRole(/main/i);
  screen.getByRole(/contentinfo/i);
});

test("render header elements", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });
  render(
    <Router history={history}>
      <Header />
    </Router>
  );
  screen.getByText(/nuove tendenze/i);
  screen.getByText(/regali/i);
  screen.getByText(/uomo/i);
  screen.getByText(/donna/i);
  screen.getByText(/bambino/i);
  screen.getByText(/sconti/i);
  screen.getByTitle(/Niko/i);
  screen.getByTitle(/lista desideri/i);
  screen.getByTitle(/carrello/i);
});

test("render footer elements", () => {
  render(<Footer />);
  screen.getByText(/CERCARE NEGOZIO/i);
  screen.getByText(/REGISTRATI ALLA NEWSLETTER/i);
  screen.getByText(/MEMBERSHIP/i);
  screen.getByText(/INVIACI UN TUO FEEDBACK/i);
  screen.getByText(/RICEVERE AIUTO/i);
  screen.getByText(/RIGUARDO A NIKE/i);
  screen.getByText(/Notizie/i);
  screen.getByText(/Lavora con noi/i);
  screen.getByText(/Investitori/i);
  screen.getByText(/Sostenibilità/i);
});
