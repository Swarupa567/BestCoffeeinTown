import React from 'react';
import Image from 'next/image';
import {Heading, Text, Card, CardBody} from '@chakra-ui/react';
import test from '../../assets/test.png';
import blast from '../../assets/blast.png';
import leftArrow from '../../assets/Group42.png';
import rightArrow from '../../assets/Group43.png';
import blast2 from '../../assets/coffee_blast.png';
import profile from '../../assets/profile.png';

export default function Testimonials(){
    return(
        <div style={{marginTop:'2rem'}}>
          <Heading as ='h2' align='center' color='#6F4E37'>Our Coffee perfection feedback</Heading>
          <Text align='center' color='grey'>Our customers has amazing things to say about us</Text>
          <div style={{float:'right', zIndex:'1', position:'absolute', marginLeft:'56rem', marginTop:'-5rem'}}>
           <Image 
                  src={blast}
                  width={370}
                  height={270}
                  alt="blast"
                  
             />
             </div>
          <Card style={{backgroundColor:'#FFF9F1', marginTop:'2rem', marginLeft:'244px', marginRight:'244px'}}>
            <CardBody style={{padding:'3rem'}}>
                <div>
             <Image 
                src={test}
                width={60}
                height={60}
                alt="test"
             /><br />
            
             </div>
             <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum<br />
                 has been the industry`&#39;`s standard dummy text ever since the 1500s, when an unknown printer<br />
                 took a galley of type and scrambled it to make a type specimen book. It has survived not only <br />
                 five centuries, but also the leap into electronic typesetting, remaining essentially<br />
                unchanged. It was popularised in the 1960s with the release of Letraset.....</Text><br />
                <div style={{position:'absolute', left:'-2rem', top:'10rem'}}>
             <Image 
              src={leftArrow}
              width={60}
              height={60}
              alt="leftArrow"
             />
             </div>
             <div style={{position:'absolute', right:'-2rem', top:'10rem'}}>
             <Image 
             src={rightArrow}
             width={60}
             height={60}
             alt="rightArrow"
             />
             </div><br />
             <Heading as='h2' align='center' color='#6F4E37'>Jonny Thomas</Heading>
             <Text align='center' color='grey'>Project Manager</Text>
           
            </CardBody>
          </Card>
          <div style={{marginLeft:'37rem', position:'absolute', top:'202rem'}}>
            <Image 
              src={profile}
              width={80}
              height={80}
              alt="profile"
            />
            </div>
            <div style={{zIndex:1, position:'absolute', marginTop:'-15rem'}}>
             <Image 
             src={blast2}
             width={370}
             height={270}
             alt="blast2"
             />
             </div>
        </div>

    )
}