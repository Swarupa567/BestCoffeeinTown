import React from 'react';
import Image from 'next/image';
import cofee from '../../assets/Rectangle14.png';
import {Heading, Button, Text} from '@chakra-ui/react';
import beans from '../../assets/coffee_bean.png';
import vup from '../../assets/cup.png';

export default function Coffee(){
    return(
        <div style={{marginTop:'2rem'}}>
            <div style={{opacity:'0.55'}}>
      <Image 
        src={cofee}
        width={1270}
        height={0}
        alt="backgroundimage"
      />
      </div>
      <div style={{position:'absolute', left:'45rem', top:'134rem'}}>
      <Image 
      src={beans}
      width={900}
      height={500}
      alt="beans"/>
      </div>
      <div style={{position:'absolute', top:'142rem', left:'56rem'}}>
      <Image 
      src={vup}
      width={280}
      height={100}
      alt="coffecup"/>
      </div>
      <div style={{position:'absolute', top:'146rem', left:'2rem'}}>
      <Heading as='h2' size='xl' align='center' color='#FFFFFF'>Get a chance to have an<br /> Amazing Morning</Heading><br />
      <Text align='center' color='#FFFFFF'>We are giving you are one time opportunity to <br />experience a better life with coffee.</Text><br />
      <Button colorScheme='yellow' borderRadius='18'  left='9rem'>Order Now</Button>
      </div>
      </div>
    )
}