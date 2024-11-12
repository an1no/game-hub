import bullsEye from '../assets/bulls-eye.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import meh from '../assets/meh.webp'
import {Image} from "@chakra-ui/react";

interface Props {
    rating: number;
}

const Emoji = ({rating}: Props) => {
    if (rating < 3) return null;
    const emojiMap :any= {
        3: {src: meh, alt: 'meh'},
        4: {src: thumbsUp, alt: 'recommended'},
        5: {src: bullsEye, alt: 'exceptional'},
    }

    return (
        <Image src={emojiMap[rating]?.src} alt={emojiMap[rating]?.alt} boxSize='20px' marginTop={2}/>
    );
};

export default Emoji;