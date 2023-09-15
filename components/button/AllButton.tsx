"use client";

import PrimaryCta from "./PrimaryCta";
import SecondaryCta from "./SecondaryCta";

export default function AllButton() {
  return (
    <div className="flex gap-subMedium">
      <div className="flex flex-col gap-subMedium">
        <div>
          <PrimaryCta size="large" onClick={() => console.log("test")}>
            LARGE
          </PrimaryCta>
        </div>
        <div>
          <PrimaryCta size="medium" onClick={() => console.log("test")}>
            MEDIUM
          </PrimaryCta>
        </div>
        <div>
          <PrimaryCta size="small" onClick={() => console.log("test")}>
            SMALL
          </PrimaryCta>
        </div>
      </div>
      <div className="flex flex-col gap-subMedium">
        <div>
          <SecondaryCta size="large" onClick={() => console.log("test")}>
            LARGE
          </SecondaryCta>
        </div>
        <div>
          <SecondaryCta size="medium" onClick={() => console.log("test")}>
            MEDIUM
          </SecondaryCta>
        </div>
        <div>
          <SecondaryCta size="small" onClick={() => console.log("test")}>
            SMALL
          </SecondaryCta>
        </div>
      </div>
    </div>
  );
}
