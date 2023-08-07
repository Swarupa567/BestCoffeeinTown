import React from 'react';
import Image from 'next/image';
import footer from '../../assets/Rectangle14.png';
import {Heading, Text, Input, InputGroup, InputRightAddon} from '@chakra-ui/react';
import Rectangle71 from '../../assets/Rectangle71.png';
import beans from '../../assets/fotter_image.png';
import right from '../../assets/pngwing2.png';
import left from '../../assets/pngwing1.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';

export default function Footer(){
    return(
      <div>
        <div style={{opacity:'0.35', marginTop:'3rem'}}>
            <Image 
                src={footer}
                width={1270}
                height={10}
                alt="footer"
            />
        </div>
        <div style={{position: 'absolute',top: '234rem',marginLeft: '23rem'}}>
         <Heading as='h1' align='center' >Subscribe to get the latest news</Heading>
         <Text align='center' >Don`&#39;`t miss out on our latest new, updates, tips and special offers</Text>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', position:'absolute', bottom:'23rem'}}>
        <div>
            <Image 
              src={left}
              width={220}
              height={220}
              alt="left"
            />
        </div>
      
        <div style={{marginLeft:'52rem'}}>
            <Image 
               src={right}
               width={220}
               height={220}
               alt="right"
            />
        </div>
        </div>
        <div style={{width: '37%',marginLeft: '25rem',position: 'absolute',bottom: '27rem'}}>
        <InputGroup>
            <Input type='tel' backgroundColor='white' placeholder='Enter your email' />
            <InputRightAddon  backgroundColor='#F9C06A' >Subscribe</InputRightAddon>
        </InputGroup>
        </div>
        <div>
          <Image 
            src={Rectangle71}
            width={1270}
            height={100}
            alt="banner"
          />
        </div>
        <div style={{position:'absolute', bottom:'0rem'}}>
            <Image 
                src={beans}
                width={1260}
                height={10}
                alt="beans"
            />
        </div>
        <div style={{ position: 'absolute',bottom: '9rem',left: '6rem', display:'flex', justifyContent:'space-between', width:'83%'}}>
            <div>
            <Heading as= 'h3' color='white'>Bean Scene</Heading><br />
            <Text color='white'>Lorem Ipsum is simply dummy text of <br />
            the printing and typesetting industry. Lorem<br />
             Ipsum has been the industry`&#39;`s standard dummy <br />
             text ever since the 1500s, when an unknown printer <br />
            and scrambled it to make a type specimen book.</Text><br />
             <div style={{display:'flex', justifyContent:'space-evenly'}}>
            <Image 
              src={facebook}
              width={18}
              height={18}
              alt="facebook"
            />
            <Image 
              src={instagram}
              width={18}
              height={18}
              alt="Instagram"
            />
            <Image 
              src={youtube}
              width={18}
              height={18}
              alt="Youtube"
            />
            <Image 
              src={twitter}
              width={18}
              height={18}
              alt="Twitter"
            /> 
            </div>
                 </div> 
            <div>
                <Heading as ='h2' size='md' color='white'>About</Heading><br />
                <Text color='white'>Menu</Text>
                <Text color='white'>Features</Text>
                <Text color='white'>News & Blogs</Text>
                <Text color='white'> Help & Support</Text>
            </div>
            <div>
                <Heading as ='h2' size='md' color='white'>Company</Heading><br />
                <Text color='white'>How we work</Text>
                <Text color='white'>Terms of service</Text>
                <Text color='white'>Pricing</Text>
                <Text color='white'>FAQ</Text>
            </div>
            <div>
                <Heading as ='h2' size='md' color='white'>Contact Us</Heading><br />
                <Text color='white'>HSR Layout, Bangalore - 560016</Text>
                <Text color='white'>+1 202-918-2132</Text>
                <Text color='white'>swarupa@gmail.com</Text>
                <Text color='white'>www.beanscene.com</Text>
            </div>
         </div>
      </div>
    )
}