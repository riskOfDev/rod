import { Box, Flex, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { BiLogoReact, BiLogoJavascript, BiLogoMongodb } from "react-icons/bi";
import { LiaNodeJs } from "react-icons/lia";
import { SiNextdotjs } from "react-icons/si";
import React from "react";

const Description = () => {
    return (
        <>
            <Flex
                flexDir="column"
                h="100vh"
                w="100vw"
                bg="#fff"
                justifyContent="center"
            >
                <VStack spacing={2} mb="5rem">
                    <Text
                        fontSize="4xl"
                        color="#000"
                        fontWeight="bold"
                        textAlign="center"
                    >
                        What we do?
                    </Text>
                    <Text
                        fontSize="1xl"
                        color="#000"
                        fontWeight="regular"
                        textAlign="center"
                    >
                        We are specialized in NextJS, ReactJS, NodeJS with
                        Express, MongoDB and Amazon Web Services.
                    </Text>
                </VStack>
                <HStack justifyContent="center" spacing={16}>
                    <VStack>
                        <Icon as={BiLogoReact} fontSize="5xl" />
                        <Text>React.js</Text>
                    </VStack>
                    <VStack>
                        <Icon as={LiaNodeJs} fontSize="5xl" />
                        <Text>Node.js</Text>
                    </VStack>
                    <VStack>
                        <Icon as={BiLogoJavascript} fontSize="5xl" />
                        <Text>Javascript</Text>
                    </VStack>
                    <VStack>
                        <Icon as={SiNextdotjs} fontSize="5xl" />
                        <Text>Next.js</Text>
                    </VStack>
                    <VStack>
                        <Icon as={BiLogoMongodb} fontSize="5xl" />
                        <Text>MongoDB</Text>
                    </VStack>
                </HStack>
                <Flex justifyContent="center" mt="2rem">
                    <Flex w="45%" h="15rem" rounded="20px" bg="#000" p="1.5rem">
                        <Text color="#fff">
                            {`
                            PS C:\Users\lucia\proyects\rod npm run dev rod@0.1.0
                            dev next dev - ready started server on 0.0.0.0:3000,
                            url: http://localhost:3000
                            `}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Description;
