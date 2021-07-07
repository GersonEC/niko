import { Image } from "antd";
import Image1 from "../../assets/images/scarpe1.svg";
import Image2 from "../../assets/images/scarpe2.svg";
import Image3 from "../../assets/images/scarpe3.svg";
import Image4 from "../../assets/images/scarpe4.svg";
import "./PreviewImages.scss";

export default function PreviewImages() {
  return (
    <div className="previewImages">
      <Image.PreviewGroup>
        <Image width={395} src={Image1} />
        <Image width={395} src={Image2} />
        <Image width={395} src={Image3} />
        <Image width={395} src={Image4} />
      </Image.PreviewGroup>
    </div>
  );
}
