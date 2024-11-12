import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";

interface Props {
    onSearch: (searchText: string) => void;
}

function SearchInput({onSearch}: Props) {
    const ref = useRef<HTMLInputElement>();

    return (
        <form style={{width: '100%'}} onSubmit={(e) => {
            e.preventDefault();
            onSearch(ref.current.value);
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={ref} borderRadius={20} placeholder='Search games...'></Input>
            </InputGroup>
        </form>
    );
}

export default SearchInput;