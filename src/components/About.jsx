import {Box, Heading, Image, Stack, Text} from '@chakra-ui/react';
import Me from '../images/me.png';
//import Award from '../images/award.png';

export const About = () => {
  return (
    <Stack
    minHeight="100vh"
      as="div"
      display={['block', 'flex']}
      w={['100%']}
      alignItems="center"
      direction="row"
      p={['1rem', '3rem']}
    >

      <Box
        w={['90%', '50%']}
        display="flex"
        alignItems="center"
        justifyContent="center"
        pos="relative"
      >
        <Box
          pos="absolute"
          left={['10px', '95px']}
          bg="#46ae4f"
          w={['100%', '50%']}
          h="100%"
          filter="drop-shadow(2px 4px 6px black)"
          borderRadius="2rem"
        />
        <Box
          w={['100%', '60%']}
          h="70vh"
          borderRadius="30px"
          pos="relative"
          overflow="hidden"
        >
          <Image
            filter="grayscale(0%)"
            src={Me}
            alt=""
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
      </Box>
      <Box textAlign="justify" w={['100', '50%']} className="a-right">
        <Heading fontFamily="italic">À propos de moi</Heading>
        <Text fontFamily="italic" fontWeight="bold">
          Le plus lourde fardeau, c'est d'exister sans vivre
        </Text>
        <Text className="a-desc">
          Passionné par le numérique depuis mon enfance.
          En commençant au Sénégal, j'ai suivi pendant 2 ans une formation dans le domaine
          de l'informatique et j’ai appris pendant cette formation les bases de l'informatique
          {' '}
          et j’ai découvert le développement web. J’ai développé des compétences en HTML5, CSS3,
          {' '}
          PHP et JavaScript. Quand je suis arrivé en France, j'ai suivi le Parcours découverte
          {' '}
          des métiers du numérique au Grêta. J’ai travaillé mon projet professionnel et surtout
          j’ai confirmé mon choix : devenir développeur web. J’ai décidé de suivre une formation
          Intensive de 3 mois et demi Chez Webforce3 et une formation continue de 8 mois au sein
          {' '}
          du Grêta pour un Titre professionnel(CDA), dont 2 mois de stage. Donc Je souhaite
          {' '}
          continuer dans cette voie par le biais de l'alternance ou un post <Text  as="span" fontWeight="bold">
            
             Developpeur Full Stack Js</Text>.  
          {' '}
         
        </Text>
        <Stack  pt="3" alignItems="center" spacing="3" direction={["column","row"]} className="a-award">
         <Text fontFamily="italic">UlTeamCode</Text>
          <Box  >
            <Heading fontFamily="italic" fontSize={["md"]}>  
              Co-Fondateur de UlTeamCode
            </Heading>
            <Text as="h1">
              J'interviens de la conception à la realisation du site web
            </Text>
          </Box>
        </Stack>
      </Box>

    </Stack>
  );
};
