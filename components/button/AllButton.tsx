"use client";

import BorderCta from "./BorderCta";
import PrimaryCta from "./PrimaryCta";
import SecondaryCta from "./SecondaryCta";

export default function AllButton() {
  return (
    <div className="flex gap-sub-medium">
      <div className="flex flex-col gap-sub-medium">
        <div>
          <PrimaryCta
            shadow="shadow-primary-high"
            size="large"
            onClick={() => console.log("test")}
          >
            LARGE
          </PrimaryCta>
        </div>
        <div>
          <PrimaryCta
            shadow="shadow-primary-medium"
            size="medium"
            onClick={() => console.log("test")}
          >
            MEDIUM
          </PrimaryCta>
        </div>
        <div>
          <PrimaryCta
            shadow="shadow-primary-small"
            size="small"
            onClick={() => console.log("test")}
          >
            SMALL
          </PrimaryCta>
        </div>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <div>
          <SecondaryCta
            shadow="shadow-secondary-high"
            size="large"
            onClick={() => console.log("test")}
          >
            LARGE
          </SecondaryCta>
        </div>
        <div>
          <SecondaryCta
            shadow="shadow-secondary-medium"
            size="medium"
            onClick={() => console.log("test")}
          >
            MEDIUM
          </SecondaryCta>
        </div>
        <div>
          <SecondaryCta
            shadow="shadow-secondary-small"
            size="small"
            onClick={() => console.log("test")}
          >
            SMALL
          </SecondaryCta>
        </div>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <div>
          <BorderCta
            shadow="shadow-high"
            size="large"
            onClick={() => console.log("test")}
          >
            LARGE
          </BorderCta>
        </div>
        <div>
          <BorderCta
            shadow="shadow-medium"
            size="medium"
            onClick={() => console.log("test")}
          >
            MEDIUM
          </BorderCta>
        </div>
        <div>
          <BorderCta
            shadow="shadow-small"
            size="small"
            onClick={() => console.log("test")}
          >
            SMALL
          </BorderCta>
        </div>
      </div>
    </div>
  );
}
