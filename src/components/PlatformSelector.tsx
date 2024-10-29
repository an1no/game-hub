import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";

const PlatformSelector = () => {

    const {data, error}= usePlatforms();
    if(error) return;
    return (
        <Menu>
            <MenuButton
                icon={<BsChevronDown/>}
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
                _hover={{bg: 'gray.400'}}
                _expanded={{bg: 'blue.400'}}
                _focus={{boxShadow: 'outline'}}>
                Platforms
            </MenuButton>

            <MenuList>
                {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;