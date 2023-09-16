"use client";

import Button from "./Button";

export default function AllButton() {
  return (
    <div className="flex gap-sub-large justify-center">
      <div className="flex flex-col gap-small">
        <div>
          <Button
            color="primary"
            shadow="high"
            size="large"
            onClick={() => console.log("test")}
          >
            LARGE
          </Button>
        </div>
        <div>
          <Button
            color="primary"
            shadow="medium"
            size="medium"
            onClick={() => console.log("test")}
          >
            MEDIUM
          </Button>
        </div>
        <div>
          <Button
            color="primary"
            shadow="small"
            size="small"
            onClick={() => console.log("test")}
          >
            SMALL
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-small">
        <div>
          <Button
            color="secondary"
            shadow="shhigh"
            size="large"
            onClick={() => console.log("test")}
          >
            LARGE
          </Button>
        </div>
        <div>
          <Button
            color="secondary"
            shadow="shmedium"
            size="medium"
            onClick={() => console.log("test")}
          >
            MEDIUM
          </Button>
        </div>
        <div>
          <Button
            color="secondary"
            shadow="shsmall"
            size="small"
            onClick={() => console.log("test")}
          >
            SMALL
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-small">
        <div>
          <Button
            color="tertiary"
            shadow="high"
            size="large"
            onClick={() => console.log("test")}
          >
            LARGE
          </Button>
        </div>
        <div>
          <Button
            color="tertiary"
            shadow="medium"
            size="medium"
            onClick={() => console.log("test")}
          >
            MEDIUM
          </Button>
        </div>
        <div>
          <Button
            color="tertiary"
            shadow="small"
            size="small"
            onClick={() => console.log("test")}
          >
            SMALL
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-small">
        <div>
          <Button transparent size="large" onClick={() => console.log("test")}>
            LARGE
          </Button>
        </div>
        <div>
          <Button transparent size="medium" onClick={() => console.log("test")}>
            MEDIUM
          </Button>
        </div>
        <div>
          <Button transparent size="small" onClick={() => console.log("test")}>
            SMALL
          </Button>
        </div>
      </div>
    </div>
  );
}
