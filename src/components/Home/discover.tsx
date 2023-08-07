import React from 'react';
import Head from 'next/head';
import {Button, Heading} from '@chakra-ui/react';
import discovery from '../../assets/stylished.png';
import Image from 'next/image';
import blast from '../../assets/coffee_blast.png';

export default function Discover(){
    return(
        <>
        <div style={{display:'flex',justifyContent:'space-between', margin:'55px'}}>
            <div>
                <Heading as='h2' size='xl' color='#6F4E37'>Discover the best coffee</Heading><br />
                <p>Bean scene is a coffee shop that provides you with quality coffee<br/>that he;lps boost your productivity and helps build your mood.<br />Having a cup of coffee is good, but having a cup of real coffee is<br />greater.There is no doubt that you will enjoy this coffee more <br /> than others you have ever tasted.</p><br />
                <Button colorScheme='yellow' borderRadius='18'>Learn More</Button>
             
            </div>
            <div>
                <Image 
                src={discovery}
                width={300}
                height={300}
                alt="discoverybeans"
                />
            </div>
        </div>
        <div style={{position:'absolute', top:'60rem'}}>
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