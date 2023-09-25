import Image, { StaticImageData } from 'next/image';

type Image = {
    src: string | StaticImageData;
    alt: string;
    width: number;
    height: number;
};

export default function Img(props: Image) {
    const { src, alt, width, height } = props;
    return <Image src={src} alt={alt} width={width} height={height} />;
}
