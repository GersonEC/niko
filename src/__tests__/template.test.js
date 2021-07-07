import * as React from "react";
import { render, screen } from "./test-utils.jsx";
import Template from "../components/Template/Template";
import Footer from "../components/Footer/Footer";

test("Verify nav, main and contentinfo sections for the Template", () => {
  render(<Template />);
  screen.getByRole(/navigation/i);
  screen.getByRole(/main/i);
  screen.getByRole(/contentinfo/i);
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
