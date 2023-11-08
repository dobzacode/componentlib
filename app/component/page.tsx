import AllButton from "@/components/button/ButtonShowcase";
import AllInput from "@/components/form/InputShowcase";
import GalleryShowcase from "@/components/galery/GaleryShowcase";

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
