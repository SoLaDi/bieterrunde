import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import './App.css';

function App() {
  const [amount, setAmount] = useState('90');

  return (
    <div className="App">
      <section>
        <Heading>
          <p>Willkommen zur Bieterrunde 2022</p>
        </Heading>
      </section>
      <section>
        <Flex>
          <Box w='100%'>
            <InputGroup size='lg' style={{ width: '100%', maxWidth: '300px' }}>
              <Input
                placeholder='90'
                value={amount}
                type="number"
                min="80"
                max="130"
                onChange={(e) => setAmount(e.target.value)}
              />
              <InputRightAddon children='€' />
            </InputGroup>
            <br/>
            <Button colorScheme='teal' size='lg'>
              Gebot
              {amount !== '' && <span>&nbsp;({amount} €)</span>}
            </Button>
          </Box>
        </Flex>
      </section>
    </div>
  );
}

export default App;
