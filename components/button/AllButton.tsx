"use client";

import Button from "./Button";

export default function AllButton() {
  return (
    <div className="flex gap-sub-large justify-center flex-wrap mx-large">
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
            shadow="high"
            size="large"
            onClick={() => console.log("test")}
          >
            LARGE
          </Button>
        </div>
        <div>
          <Button
            color="secondary"
            shadow="medium"
            size="medium"
            onClick={() => console.log("test")}
          >
            MEDIUM
          </Button>
        </div>
        <div>
          <Button
            color="secondary"
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
          <Button
            color="error"
            shadow="high"
            size="large"
            onClick={() => console.log("test")}
          >
            LARGE
          </Button>
        </div>
        <div>
          <Button
            color="error"
            shadow="medium"
            size="medium"
            onClick={() => console.log("test")}
          >
            MEDIUM
          </Button>
        </div>
        <div>
          <Button
            color="error"
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
            color="success"
            shadow="high"
            size="large"
            onClick={() => console.log("test")}
          >
            LARGE
          </Button>
        </div>
        <div>
          <Button
            color="success"
            shadow="medium"
            size="medium"
            onClick={() => console.log("test")}
          >
            MEDIUM
          </Button>
        </div>
        <div>
          <Button
            color="success"
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
            color="info"
            shadow="high"
            size="large"
            onClick={() => console.log("test")}
          >
            LARGE
          </Button>
        </div>
        <div>
          <Button
            color="info"
            shadow="medium"
            size="medium"
            onClick={() => console.log("test")}
          >
            MEDIUM
          </Button>
        </div>
        <div>
          <Button
            color="info"
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
            color="warning"
            shadow="high"
            size="large"
            onClick={() => console.log("test")}
          >
            LARGE
          </Button>
        </div>
        <div>
          <Button
            color="warning"
            shadow="medium"
            size="medium"
            onClick={() => console.log("test")}
          >
            MEDIUM
          </Button>
        </div>
        <div>
          <Button
            color="warning"
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
            color="neutral"
            shadow="high"
            size="large"
            onClick={() => console.log("test")}
          >
            LARGE
          </Button>
        </div>
        <div>
          <Button
            color="neutral"
            shadow="medium"
            size="medium"
            onClick={() => console.log("test")}
          >
            MEDIUM
          </Button>
        </div>
        <div>
          <Button
            color="neutral"
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
