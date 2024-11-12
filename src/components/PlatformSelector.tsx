import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms.ts";
import {Platform} from "../hooks/useGames.ts";

interface Props {
    selectedPlatform: Platform | null;
    onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {

    const {data, error} = usePlatforms();
    if (error) return;
    return (
        <Menu>
            <MenuButton
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
                _hover={{bg: 'gray.400'}}
                _expanded={{bg: 'blue.400'}}
                _focus={{boxShadow: 'outline'}}>
                {selectedPlatform ? selectedPlatform?.name : 'Select Platform'}
            </MenuButton>

            <MenuList>
                {data.map(platform =>
                    <MenuItem key={platform.id}
                              onClick={() => onSelectPlatform(platform)}>{platform.name}
                    </MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;