import React from 'react';
import {Heading, SimpleGrid, Text,  Card, CardHeader, Stack, CardBody, CardFooter, Button} from '@chakra-ui/react';
import Image from 'next/image';
import Rectangle7 from '../../assets/Rectangle7.png';
import Latte from '../../assets/Rectangle9.png';
import Macchiato from '../../assets/Rectangle11.png';
import Expresso from '../../assets/Rectangle13.png';

export default function Product(){
    return(
        <div>
        <div>
          <Heading as='h2' size='xl' color='#6F4E37' align='center'>Enjoy a new blend of coffee style</Heading>
          <Text color='grey' align='center'>Explore all flavours of coffee with us. There is always a new cup worth experiencing</Text>
        </div>
        <div style={{margin:'54px'}}>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
         <Card style={{ backgroundColor: '#FFF9F1',border: '2px solid #a52a2a8c', borderRadius: '12px'}}>
         <CardBody>
            <Image 
              objectFit='cover'
              src={Rectangle7}
              width={220}
              height={220}
              alt="Cappuccino"
            />
            <Stack mt='6' spacing='0'>
                <Heading as='h4' size='md' color='#6F4E37' align='center'>Cappuccino</Heading>
                <Text align='center'>Coffee 50% | Milk 50%</Text>
                <Text fontSize='lg' align='center' color='#6F4E37'>$8.50</Text>
            </Stack>
         </CardBody>
         </Card>
         <Button colorScheme='yellow' style={{position:'absolute', left:'8rem', top:'95rem', borderRadius:'20px'}}>Order Now</Button>
         <Card style={{ backgroundColor: '#FFF9F1',border: '2px solid #a52a2a8c', borderRadius: '12px'}}>
         <CardBody>
            <Image 
              objectFit='cover'
              src={Latte}
              width={220}
              height={220}
              alt="Chai Latte"
            />
            <Stack mt='6' spacing='0'>
                <Heading as='h4' size='md' color='#6F4E37' align='center'>Chai Latte</Heading>
                <Text align='center'>Coffee 50% | Milk 50%</Text>
                <Text fontSize='lg' align='center' color='#6F4E37'>$8.50</Text>
            </Stack>
         </CardBody>
         </Card>
         <Button colorScheme='yellow' style={{position: 'absolute',
    left: '27rem',
    top:'95rem', borderRadius:'20px'}}>Order Now</Button>
         <Card style={{ backgroundColor: '#FFF9F1',border: '2px solid #a52a2a8c', borderRadius: '12px'}}>
         <CardBody>
            <Image 
              objectFit='cover'
              src={Macchiato}
              width={220}
              height={220}
              alt="Macchiato"
            />
            <Stack mt='6' spacing='0'>
                <Heading as='h4' size='md' color='#6F4E37' align='center'>Macchiato</Heading>
                <Text align='center'>Coffee 50% | Milk 50%</Text>
                <Text fontSize='lg' align='center' color='#6F4E37'>$8.50</Text>
            </Stack>
         </CardBody>
         </Card>
         <Button colorScheme='yellow' style={{position: 'absolute',
    left: '45rem',
    top:'95rem', borderRadius:'20px'}}>Order Now</Button>
         <Card style={{ backgroundColor: '#FFF9F1',border: '2px solid #a52a2a8c', borderRadius: '12px'}}>
         <CardBody>
            <Image 
              objectFit='cover'
              src={Expresso}
              width={220}
              height={220}
              alt="Expresso"
            />
            <Stack mt='6' spacing='0'>
                <Heading as='h4' size='md' color='#6F4E37' align='center'>Expresso</Heading>
                <Text align='center'>Coffee 50% | Milk 50%</Text>
                <Text fontSize='lg' align='center' color='#6F4E37'>$8.50</Text>
            </Stack>
         </CardBody>
         </Card>
         <Button colorScheme='yellow' style={{position: 'absolute',
    left: '64rem',
    top:'95rem', borderRadius:'20px'}}>Order Now</Button>
         </SimpleGrid>
        </div>
        </div>
    )
}
