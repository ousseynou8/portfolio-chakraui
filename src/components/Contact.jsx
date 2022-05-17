import {
  Box,
  FormControl,
  Button,
  FormLabel,
  Input,
  Heading,
  HStack, Text, Link
} from '@chakra-ui/react';
import {EmailIcon, PhoneIcon} from '@chakra-ui/icons'
import {BiMap} from 'react-icons/bi'
export const Contact = () => {
  return (
      <Box pos="relative">
      <svg Style={"position:absolute"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#46ae4f" fill-opacity="1" d="M0,160L360,32L720,320L1080,96L1440,96L1440,0L1080,0L720,0L360,0L0,0Z"></path></svg>
    
 
<HStack fontSize="2rem"    flexDirection={["column", "row"]} justifyContent={"space-between"} px={["2rem","5rem"]} pb="5rem">
<Box display="flex" flexDirection="column">
    <Heading pb="2rem"  width="80%">Discutons de votre projet</Heading>
    <Text 
   
    fontWeight={"300"}
    fontSize={["sm","md","lg","xl","4xl"]}
    _hover={{textDecoration:"none !important"}}
    as={Link} href="tel:O7.53.58.87.59"> 
    <PhoneIcon mr="3" />
    O7.53.58.87.59</Text>
    <Text 
       fontWeight={"300"}
 fontSize={["sm","md","lg","xl","4xl"]}
    _hover={{textDecoration:"none"}}
    href="mailto:ousseynoufofana15@gmail.com"
    as={Link}  > <EmailIcon mr="3" />ousseynoufofana15@gmail.com</Text>
    <Text  
    
    fontSize={["sm","md","lg","xl","4xl"]}
    fontWeight={"300"}
  display="flex" alignItems="center"> <BiMap  /> Paris, France</Text>
</Box>

    <Box 
    fontSize={["sm","md","lg","xl","4xl"]}
    w={["sx", "sm","md","lg","xl"]}  m="auto" pb="5rem">

      <FormControl isRequired>
        <FormLabel htmlFor="nom">Nom</FormLabel>
        <Input id="nom" type="nom" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="prenom">Prenom</FormLabel>
        <Input id="prenom" type="prenom" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="email">Address Email </FormLabel>
        <Input id="email" type="email" />
      </FormControl>

      <Button
      w="sx" 
            mt={4}
            colorScheme='#46ae4f'
           color="#46ae4f"
         border="1px solid #46ae4f"
            type='submit'
            _hover={{bg:"#46ae4f", color:"white"}}
          >
           Envoyer Votre Message
          </Button>

    </Box>
       
    </HStack>
     
    </Box>
  );
};
