import {Box, Link, Stack} from '@chakra-ui/react';
import {FiFacebook,FiGithub, FiInstagram, FiTwitter, FiLinkedin} from 'react-icons/fi';

export const Footer = () => {
  return (
    <Box
      h="5rem"
      color="white"
      bg="black"
      display="flex"
      justifyContent="space-evenly"
      flexDirection="column"
      textAlign="center"
      borderTop={'3px solid #46ae4f'}
    >

      <Box as="p" fontSize={["xs","sm", "md", "lg"]}>
        &copy; Copyright
        {' '}
        {new Date ().getFullYear ()}
        {' '}
        | Ousseynou Fofana | Tous droits reservès
        {' '}
      </Box>

      <Stack as="div" display="flex" pr="3" direction="row" justifyContent={["center","flex-end"]} fontSize={["sm","1.5rem"]} spacing="5">

        <Link href="http://www.facebook.com/">
          {' '} <FiFacebook />
        </Link>
        <Link href="https://www.linkedin.com/in/ousseynou-fofana-8276221a2/">
          <FiLinkedin />
        </Link>
        <Link href="https://www.instagram.com/"> <FiInstagram /></Link>

        <Link href="https://www.twitter.com/">
          {' '} <FiTwitter />
        </Link>
        <Link href="https://github.com/ousseynou8">
          {' '} <  FiGithub />
        </Link>

      
      </Stack>

    </Box>
  );
};
