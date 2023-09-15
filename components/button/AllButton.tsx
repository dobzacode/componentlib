"use client";

import PrimaryCta from "./PrimaryCta";
import SecondaryCta from "./SecondaryCta";

export default function AllButton() {
  return (
    <div className="flex gap-subMedium">
      <PrimaryCta onClick={() => console.log("test")}>LARGE</PrimaryCta>
      <PrimaryCta onClick={() => console.log("test")}>MEDIUM</PrimaryCta>
      <PrimaryCta onClick={() => console.log("test")}>SMALL</PrimaryCta>
      <SecondaryCta onClick={() => console.log("test")}>SECONDARY</SecondaryCta>
    </div>
  );
}
