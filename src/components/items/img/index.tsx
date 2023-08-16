import Image from 'next/image';

type Image = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export default function Img(props: Image) {
    const { src, alt, width, height } = props;
    return <Image src={src} alt={alt} width={width} height={height} />;
}
