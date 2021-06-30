import Footer from "components/Footer/Footer";
import * as React from "react";
import Header from "../Header/Header";
import "./Template.scss";

interface TemplateProps {
  children: React.ReactNode;
}
export default function Template(props: TemplateProps) {
  return (
    <div className={"template"}>
      <div className={"navigation"} role={"navigation"}>
        <Header />
      </div>

      <div className={"main"} role={"main"}>
        {" "}
        {props.children}
      </div>

      <div className={"contentinfo"} role={"contentinfo"}>
        <Footer />
      </div>
    </div>
  );
}
