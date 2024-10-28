import {Platform} from '../hooks/useGames'
import {Icon} from "@chakra-ui/react";
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendoswitch} from "react-icons/si";
import {BsGlobe} from 'react-icons/bs'
import {HStack} from '@chakra-ui/react'

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: { [key: string] } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendoswitch,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <HStack marginY={'10px'}>
            {platforms.map(platform =>
                <Icon as={iconMap[platform.slug]} color='gray.500'/>)}
            {'24'}
        </HStack>
    );
};

export default PlatformIconList;