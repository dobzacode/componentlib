
import { H1 } from "@/components/ui/text/H1";
import H2 from "@/components/ui/text/H2";
import H3 from "@/components/ui/text/H3";
import P from "@/components/ui/text/P";


export default function Typography({}) {
  return (
    <div className="flex justify-center mx-small">
      <div className="mb-extra-large flex flex-col gap-sub-large items-start">
        <H1 textType="heading--extra-large" intent="neutral">
          Extra large heading
        </H1>
        <H2 textType="heading--large" intent="neutral">
          Large heading
        </H2>
        <H2 textType="heading--sub-large" intent="neutral">
          Sub-large heading
        </H2>
        <H2 textType="heading" intent="neutral">
          Heading
        </H2>
        <H3 textType="sub-heading" intent="neutral">
          Sub-heading
        </H3>
        <P textType="body" intent="neutral">
          Body text
        </P>
      </div>
    </div>
  );
}
