import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Header from "../components/Header/Header";
import userEvent from "@testing-library/user-event";
import App from "App";

test("app render all pages and I can navigate to those pages", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  userEvent.click(screen.getByText(/uomo/i));
  expect(screen.getAllByText(/uomo/i));
  userEvent.click(screen.getByText(/donna/i));
  expect(screen.getAllByText(/donna/i));
  userEvent.click(screen.getByText(/regali/i));
  expect(screen.getAllByText(/regali/i));
  userEvent.click(screen.getByText(/bambino/i));
  expect(screen.getAllByText(/bambino/i));
  userEvent.click(screen.getByText(/nuove tendenze/i));
  expect(screen.getAllByText(/nuove tendenze/i));
  userEvent.click(screen.getByText(/sconti/i));
  expect(screen.getAllByText(/sconti/i));
});
