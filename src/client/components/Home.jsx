import { flexbox } from "@mui/system";
import React from "react";
import photo from "../../server/public/images/homepage.jpg"

export default function Home() {
  return (
    <div>
      <h1>VIVE</h1>
      <h3>A Simple Loan Application & Management System</h3>
      <img 
        src={photo} 
        alt="a person recording accounting data on ledger with accounting tools like calculator on the table" 
        style={{ height: 400, display: flexbox, flexDirection: "column", alignSelf: "center", alignItems: "center", justifyContent: "center" }} 
      />
    </div>
  );
}
