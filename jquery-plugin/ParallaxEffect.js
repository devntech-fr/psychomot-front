import {Parallax, Background} from "react-parallax";
import Image from "next/image";

export default function ParallaxEffect({image, className, parallax}) {
    console.log('parallax effect image:',image);
    return (
        <>
            <Parallax strength={300}>
                <Background className={className}>
                    <Image src={image.source} alt={image.alt} className={""} width={1917} height={1240} />
                </Background>
            </Parallax>
        </>
    )
}