import Portfolio from './Portfolio';
import {portfolio} from '../data';
import { Box, Grid, Heading } from '@chakra-ui/react';

const PortfolioItem = () => {
  return (
    <Box minHeight="100vh" >
 
        <Heading align="center" className="pl-title">Créés et Inspirés Par Fofana Ousseynou</Heading>
 
      <Grid 
      px="4rem"
    pt={"2rem"}
    pb="0"
      templateColumns='repeat(3, 1fr)' gap={7}>

        {portfolio.map (item => (
          <Portfolio
            key={item.id}
            img={item.img}
            link={item.link}
            technology={item.technology}
          />
        ))}

      </Grid>
    </Box>
  );
};

export default PortfolioItem;
