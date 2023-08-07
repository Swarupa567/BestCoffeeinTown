import React from 'react';
import {Heading, Text, Button, SimpleGrid,Stack, Card, CardBody} from '@chakra-ui/react';
import blast from '../../assets/blast.png';
import Image from 'next/image';
import beans from '../../assets/coffee-beans.png';
import badge from '../../assets/badge.png';
import cup from '../../assets/coffee-cup.png';
import price from '../../assets/best-price.png';

export default function Vision(){
    return(
        <div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{align:'center', marginLeft:'27rem', marginTop:'3rem'}}>
                    <Heading as='h2' size='xl' color='#6F4E37' align='center'>Why are we different?</Heading>
                    <Text align='center' color='grey'>We don't just make your coffee, we make your day!</Text>
                </div>
               <div style={{marginTop:'-88px'}}>
               <Image 
                    src={blast}
                    width={350}
                    height={350}
                    alt="blast"
                    className='right-2' />
                </div>
            </div>
            <div style={{margin:'49px'}}>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(250px,1fr))'>
           <Card style={{backgroundColor:'#FFF9F1'}}>
            <CardBody style={{align:'center'}}>
                <div style={{marginLeft:'65px'}}>
                <Image 
                  src={beans}
                  width={80}
                  height={80}
                  alt="supreme"
                  className='center rounded-md'
                />
                </div>
                <Stack mt='6' spacing='0'>
                   <Heading as = 'h4' size='md' align='center' color='#6F4E37'>Supreme Beans</Heading>
                   <Text align='center' color='grey'>Beans that provide great taste</Text>
                </Stack>
            </CardBody>
            </Card>
            <Card style={{backgroundColor:'#FFF9F1'}}>
            <CardBody style={{align:'center'}}>
                <div style={{marginLeft:'65px'}}>
                <Image 
                  src={badge}
                  width={80}
                  height={80}
                  alt="supreme"
                  className='center rounded-md'
                />
                </div>
                <Stack mt='6' spacing='0'>
                   <Heading as = 'h4' size='md' align='center' color='#6F4E37'>HighQuality Beans</Heading>
                   <Text align='center' color='grey'>We provide the highest quality</Text>
                </Stack>
            </CardBody>
            </Card>
            <Card style={{backgroundColor:'#FFF9F1'}}>
            <CardBody style={{align:'center'}}>
                <div style={{marginLeft:'65px'}}>
                <Image 
                  src={cup}
                  width={80}
                  height={80}
                  alt="supreme"
                  className='center rounded-md'
                />
                </div>
                <Stack mt='6' spacing='0'>
                   <Heading as = 'h4' size='md' align='center' color='#6F4E37'>Extraordinary</Heading>
                   <Text align='center' color='grey'>Coffee like you have never tasted</Text>
                </Stack>
            </CardBody>
            </Card> 
             <Card style={{backgroundColor:'#FFF9F1'}}>
            <CardBody style={{align:'center'}}>
                <div style={{marginLeft:'65px'}}>
                <Image 
                  src={price}
                  width={80}
                  height={80}
                  alt="supreme"
                />
                </div>
                <Stack mt='6' spacing='0'>
                   <Heading as = 'h4' size='md' align='center' color='#6F4E37'>Affordable Price</Heading>
                   <Text align='center' color='grey'>Our coffee prices are easy to afford</Text>
                </Stack>
            </CardBody>
            </Card>
          </SimpleGrid>
          </div>
          <div>
          <Text color='grey' align='center'>Great ideas start with great coffee, Lets help you acheive that</Text>
          <Heading as='h3' size='md' color='#6F4E37' align='center'>Get Started today</Heading><br/>
          <Stack align='center'>
            <Button colorScheme='yellow' borderRadius='18'>Join Us</Button>
          </Stack>
          </div>
        </div>
    )
}