import React from 'react';
import { HStack, Skeleton, VStack, Box } from '@chakra-ui/react';

const Loading = () => {
  return (
    <main className="w-screen h-screen p-3">
      <HStack height="full">
        <Skeleton startColor="pink.300" endColor="red.400" bg="pink.600" className="w-24" height="full" />
        <HStack width="full" height="full">
          <VStack className="w-2/12 h-full">
            <Skeleton startColor="pink.300" endColor="red.400" className="w-full h-1/6" />
            <Skeleton startColor="pink.300" endColor="red.400" className="w-full h-5/6" />
          </VStack>
          <VStack className="w-8/12 h-full">
            <Skeleton startColor="pink.300" endColor="red.400" className="w-full h-20" />
            <Skeleton startColor="pink.300" endColor="red.400" className="w-full h-full" />
            <Skeleton startColor="pink.300" endColor="red.400" className="w-full h-20" />
          </VStack>
          <Skeleton startColor="pink.300" endColor="red.400" className="w-2/12" height="full" />
        </HStack>
      </HStack>
    </main>
  );
};

export default Loading;