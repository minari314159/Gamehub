import MehFace from '../assets/meh.webp';
import BullsEye from '../assets/bulls-eye.webp'
import ThumbsUp from '../assets/thumbs-up.webp'
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
    rating:number;
}

const Emoji = ({rating}: Props) => {

    if (rating < 3) return null;

    const emojiMap: {[key: number]: ImageProps} ={
        3:{src: MehFace, alt:'meh', boxSize: '25px'},
        4:{src: ThumbsUp, alt:'recommended', boxSize: '25px'},
        5:{src:BullsEye, alt:'exceptional', boxSize: '35px'},
    }
  return (
    <Image {...emojiMap[rating]} marginTop={2}/>
  )
}

export default Emoji