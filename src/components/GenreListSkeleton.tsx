import {List, ListItem, Skeleton, SkeletonText} from "@chakra-ui/react";

const GenreListSkeleton = () => {
    const skeletonArray = Array(10).fill(null);
    return (
        <List>
            {skeletonArray.map((_, index) => (
                <ListItem key={index} paddingY='5px'>
                    <Skeleton height='20px'/>
                    <SkeletonText/>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreListSkeleton;