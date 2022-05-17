import {Box, GridItem, Image, Link} from '@chakra-ui/react';
import './portfolio.css'

const portfolio = ({img, link}) => {
  return (
    <GridItem
 
    className="p"
      w="100%"
      h="40vh"
      borderRadius="10px 10px 0px 0px"
      overflow="hidden"
      filter="drop-shadow(2px 0px 6px black)"
    >

      <Box h="20px" 
      bg="rgb(243,242,242)"
      display="flex" alignItems="center"
      pos="sticky"
      zIndex="2"
      
     >
        <Box  w="6px" h="6px" borderRadius="50%" m="3px" bg="#09f" className="p-circle" />
        <Box w="6px" h="6px" borderRadius="50%" m="3px" bg="#09f" className="p-circle" />
        <Box  w="6px" h="6px" borderRadius="50%" m="3px" bg="#09f"className="p-circle" />
      </Box>
      <Box 
      
      as={Link} href={link} tBoxrget="_blank" rel="noreferrer">
        <Image 
        className="p-img"
        transition={"all 15s ease-out"}
        w="100%" src={img} alt={img} />
      </Box>

    </GridItem>
  );
};

export default portfolio;
