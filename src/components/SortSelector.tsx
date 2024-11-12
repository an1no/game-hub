import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";

interface Props {
    onSelectSortOrder: (order: string) => void;
    selectedSortOrder: string | null;
}

const SortSelector = ({onSelectSortOrder, selectedSortOrder}: Props) => {
        const sortOrders = [
            {value: '', label: 'Relevance'},
            {value: '-added', label: 'Date added'},
            {value: 'name', label: 'Name'},
            {value: '-released', label: 'Release date'},
            {value: '-metacritic', label: 'Popularity'},
            {value: '-rating', label: 'Average rating'}
        ]
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
                    Sort by: {selectedSortOrder ? sortOrders.find(order=>order.value===selectedSortOrder)?.label: 'Relevance'} </MenuButton>

                <MenuList>
                    {sortOrders.map(order =>
                        <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value}
                                  value={order.value}>{order.label}</MenuItem>)}
                </MenuList>
            </Menu>
        )
            ;
    }
;

export default SortSelector;