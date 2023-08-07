import React from 'react';
import Image from 'next/image';
import {Box, Stack, WrapItem, Button, Wrap, Text} from "@chakra-ui/react";
import coffee from '../../assets/coffee_image.png';
import Bean from '../../assets/Bean.png';
import coffeeText from '../../assets/Coffee.png'
import Link from 'next/link'
import blast from '../../assets/coffee_blast.png';

export default function Banner(){
    return(
        <>
    <div>
        <Stack direction="column">
<Image 
    src={coffee}
    width={1270}
    height={0}
    alt="Banner Image"
    className='h-52'
/>
<div style={{position: 'absolute', display:'flex', justifyContent:'space-between', width:'93%', margin:'45px'}}>
     <Image
     src={Bean}
     width={150}
     height={50}
     alt="logo" 
     />
      <ul style={{right:'23px', display:'flex', justifyContent:'space-between', width:'40%'}}>
        <Link href="/"><Text color='white'>Home</Text></Link>
        <Link href="/products"><Text color='white'>Products</Text></Link>
        <Link href="/about"><Text color='white'>About Us</Text></Link>
        <Link href="/contact"><Text color='white'>Contact Us</Text></Link>
    </ul>
    <Wrap spacing={4} align='center'>
        <WrapItem>
            <Button borderRadius='18' colorScheme='whiteAlpha'>Sign In</Button>
        </WrapItem>
        <WrapItem>
            <Button borderRadius='18' colorScheme='yellow'>Sign Up</Button>
        </WrapItem>
    </Wrap>
   </div> 
  <div style={{position:'absolute', top:'8rem', margin:'3rem'}}>
  <Text lineHeight='60px' color='white'>We've got your morning covered with</Text><br />
   <Image 
        src={coffeeText}
        width={200}
        height={200}
        alt="coffee"
   /><br />
   <Text color='white' style={{wordWrap:'break-all'}}>It is best to start your day with a cup of coffee. Discover the <br />
   best flavours coffee you will ever have. We Provide<br/> 
   the best for our customers.</Text><br />
   <Button borderRadius='18' lineHeight='60px' colorScheme='yellow'>Order Now</Button>
    </div>
    </Stack>
  
    </div>
    <div style={{position:'absolute', top:'23px'}}>
    <Image 
                    src={blast}
                    width={250}
                    height={250}
                    alt="coffeeblast"
                   
                />
    </div>

    </>
    )
}