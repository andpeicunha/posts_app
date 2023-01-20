import React from "react";
import Navbar from "./navigation";

export default function Layout(props: any) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}
