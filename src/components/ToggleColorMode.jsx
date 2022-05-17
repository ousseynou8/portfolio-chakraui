import {useColorMode} from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
//import {Switch} from '@chakra-ui/react';
//import {SunIcon, MoonIcon} from '@chakra-ui/icons';
import {  Button} from '@chakra-ui/react';
export const ToggleColorMode = () => {
  const {colorMode, toggleColorMode} = useColorMode ();
//const isDark = colorMode === 'dark';

  // return <Switch pos="fixed" top="3"  size='lg' right="2" zIndex="2"  color="green" isChecked={isDark} onChange={toggleColorMode} />;

return (
<Button border="1px solid white" onClick={toggleColorMode} pos="fixed" zIndex="2"  top="2" right="3" >
        {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
      </Button>
  )
};
