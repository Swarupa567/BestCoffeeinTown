import React from 'react'
import { useMemo } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import  Home  from '../components/Home/homePage';
import ErrorBoundary from './_error';

function App() {

  return (
    <ChakraProvider>
        <ErrorBoundary>
                <Home />
        </ErrorBoundary>
    </ChakraProvider>
  )
}

export default App;