import {DownloadIcon, EditIcon} from '@chakra-ui/icons';
import {Box, Button, Heading, Image, Link, Stack, Text} from '@chakra-ui/react';
import React from 'react';
import Typed from 'react-typed';
import img1 from '../images/4-removebg-preview.png';
export const Intro = () => {
  return (
    <Stack
  
    minHeight={"100vh"}
      w="100%"
      alignItems="center"
      direction={['column', 'column', 'row']}
      spacing="0"
      pos="relative"
    >
      <svg
        style={{position: 'absolute', top: '0', zIndex: '0'}}
        className="position-absolute w-100  top-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#46ae4f"
          fill-opacity="1"
          d="M0,32L48,80C96,128,192,224,288,240C384,256,480,192,576,170.7C672,149,768,171,864,176C960,181,1056,171,1152,186.7C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
      <svg
        style={{zIndex: '1', position: 'absolute', bottom: '0'}}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#46ae4f"
          fill-opacity="1"
          d="M0,128L48,149.3C96,171,192,213,288,234.7C384,256,480,256,576,245.3C672,235,768,213,864,208C960,203,1056,213,1152,229.3C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <Box
        width={['100%', '100%']}
        zIndex="1"
        pl={['1rem', '5rem']}
        pr="2rem"
        display="flex"
        flexDirection={['column', 'flex', 'flex']}
        alignContent="center"
        pt={['5rem']}
      >

        <Text as="h1">Hello, Mon Nom est</Text>
        <Heading  >Ousseynou FOFANA</Heading>
        <Text
          as="h2"
          color="#46ae4f"
          FontSize="1.5rem"
          lineHeight="1.5"
          fontWeight="500"
        >

          <Typed
            strings={[
              'Développeur Web',
              'Integrateur Web',
              'Designer Web',
              'Concepteur Web',
              'Technicien Informatique',
            ]}
            typeSpeed={40}
            backSpeed={70}
            loop={true}
          />
        </Text>
        <Text as="p">
          Passionné par l'informatique le numérique en generale depuis mon enfance. je transforme votre maquette .....
        </Text>
        <Stack spacing={["3"]}   direction={["column","row"]}>

      
<Button colorScheme="#46ae4f" variant='outline' size="md" color="#46ae4f" 



_hover={{textDecoration:"none",


bg:"#46ae4f", color:"white", transition:"all ease-in .5s"

}} as={Link}
 
rightIcon={<DownloadIcon />}
>  


Telecharger
 Cv</Button>
<Button 
rightIcon={<EditIcon/>}
colorScheme="#46ae4f" variant='outline' size="md" color="#46ae4f"  _hover={{textDecoration:"none",


bg:"#46ae4f", color:"white", transition:"all ease-in .5s"
}} as={Link} >Parlez Nous de votre projet</Button>
</Stack>
      </Box>
      <Box
        width={['100%', '100%']}
        zIndex="0"
        display={['flex']}
        justifyContent="center"
      >
        <Image src={img1} w="lg" />

      </Box>

    </Stack>
  );
};
