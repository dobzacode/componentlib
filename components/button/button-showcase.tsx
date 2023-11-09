"use client";


import H2 from "../ui/text/H2";
import H3 from "../ui/text/H3";
import Button from "dobza-component-lib"



export default function ButtonShowcase() {
  return (
    <div className="flex flex-col justify-center items-start w-fit gap-sub-large">
      <H2 className="laptop-large:heading--extra-large heading--large">Button</H2>
      <div className="flex items-start gap-large">
        <div className="flex flex-col gap-small">
          <H3 textType="heading">Types</H3>
          <div className="flex flex-col gap-small">
            <div className="flex items-center justify-between gap-small">
              <Button rounded="small" hover={true} intent="primary" shadow="medium" size="small">
                PRIMARY
              </Button>
              <Button rounded="small" hover={true} intent="pastelPrimary" shadow="medium" size="small">
                PASTELPRIMARY
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-small">
            <div className="flex items-center justify-between gap-large">
              <Button rounded="small" hover={true} intent="secondary" shadow="medium" size="small">
                SECONDARY
              </Button>
              <Button rounded="small" hover={true} intent="pastelSecondary" shadow="medium" size="small">
                PASTELSECONDARY
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-small">
            <div className="flex items-center justify-between gap-large">
              <Button rounded="small" hover={true} intent="tertiary" shadow="medium" size="small">
                TERTIARY
              </Button>
              <Button rounded="small" hover={true} intent="pastelTertiary" shadow="medium" size="small">
                PASTELTERTIARY
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-small">
            <div className="flex items-center justify-between gap-large">
              <Button rounded="small" hover={true} intent="error" shadow="medium" size="small">
                ERROR
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-small">
            <div className="flex items-center justify-between gap-large">
              <Button rounded="small" hover={true} intent="success" shadow="medium" size="small">
                SUCCESS
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-small">
            <div className="flex items-center justify-between gap-large">
              <Button rounded="small" hover={true} intent="info" shadow="medium" size="small">
                INFO
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-small">
            <div className="flex items-center justify-between gap-large">
              <Button rounded="small" hover={true} intent="warning" shadow="medium" size="small">
                WARNING
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-small">
            <div className="flex items-center justify-between gap-large">
              <Button rounded="small" hover={true} intent="neutral" shadow="medium" size="small">
                NEUTRAL
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-small">
            <div className="flex items-center justify-between gap-large">
              <Button transparent={true} hover={true} intent="primary" size="small" shadow="medium" rounded="small">
                TRANSPARENT
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between gap-large">
            <Button
              rounded="small" intent="primary"
             modifier="clay"
              size="small"
              
            >
              CLAY
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-small ">
          <H3 textType="heading">Sizes</H3>
          <div className="flex flex-col gap-small">
            <div className="flex items-center justify-between gap-large">
              <Button rounded="small" hover={true} intent="primary" shadow="medium" size="large">
                LARGE
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-small">
            <div className="flex items-center justify-between gap-large">
              <Button rounded="small" hover={true} intent="primary" shadow="medium" size="medium">
                MEDIUM
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-small">
            <div className="flex items-center justify-between gap-large">
              <Button rounded="small" hover={true} intent="primary" shadow="medium" size="small">
                SMALL
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
