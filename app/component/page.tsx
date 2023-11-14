import AllButton from "@/components/button/button-showcase";
import AllInput from "@/components/form/input-showcase";
import GalleryShowcase from "@/components/galery/galery-showcase";

export default function Component({}) {
  return (
    <>
      <div className="flex laptop-large:gap-extra-large gap-large mb-sub-large justify-center flex-wrap mx-sub-large">
        <AllButton></AllButton>
        <AllInput></AllInput>
        
      </div>
      <div className="flex justify-center mx-sub-large mb-sub-large">
        <GalleryShowcase></GalleryShowcase>
      </div>
    </>
  );
}
