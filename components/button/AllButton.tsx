"use client";

import Button from "./Button";

export default function AllButton() {
  return (
    <div className="flex gap-large">
      <div className="flex flex-col gap-sub-large">
        <div>
          <Button
            color="primary"
            shadow="shadow-primary-high"
            size="large"
            onClick={() => console.log("test")}
          >
            LARGE
          </Button>
        </div>
        <div>
          <Button
            color="primary"
            shadow="shadow-primary-medium"
            size="medium"
            onClick={() => console.log("test")}
          >
            MEDIUM
          </Button>
        </div>
        <div>
          <Button
            color="primary"
            shadow="shadow-primary-small"
            size="small"
            onClick={() => console.log("test")}
          >
            SMALL
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-sub-large">
        <div>
          <Button
            color="secondary"
            shadow="shadow-secondary-high"
            size="large"
            onClick={() => console.log("test")}
          >
            LARGE
          </Button>
        </div>
        <div>
          <Button
            color="secondary"
            shadow="shadow-secondary-medium"
            size="medium"
            onClick={() => console.log("test")}
          >
            MEDIUM
          </Button>
        </div>
        <div>
          <Button
            color="secondary"
            shadow="shadow-secondary-small"
            size="small"
            onClick={() => console.log("test")}
          >
            SMALL
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-sub-large">
        <div>
          <Button
            color="tertiary"
            shadow="shadow-tertiary-high"
            size="large"
            onClick={() => console.log("test")}
          >
            LARGE
          </Button>
        </div>
        <div>
          <Button
            color="tertiary"
            shadow="shadow-tertiary-medium"
            size="medium"
            onClick={() => console.log("test")}
          >
            MEDIUM
          </Button>
        </div>
        <div>
          <Button
            color="tertiary"
            shadow="shadow-tertiary-small"
            size="small"
            onClick={() => console.log("test")}
          >
            SMALL
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-sub-large">
        <div>
          <Button
            color="transparent-black"
            shadow="shadow-high"
            size="large"
            onClick={() => console.log("test")}
          >
            LARGE
          </Button>
        </div>
        <div>
          <Button
            color="transparent-black"
            shadow="shadow-medium"
            size="medium"
            onClick={() => console.log("test")}
          >
            MEDIUM
          </Button>
        </div>
        <div>
          <Button
            color="transparent-black"
            shadow="shadow-small"
            size="small"
            onClick={() => console.log("test")}
          >
            SMALL
          </Button>
        </div>
      </div>
    </div>
  );
}
