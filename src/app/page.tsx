import { HStack, Link as ChakraLink, Text, Icon, Center, Button, VStack, Image as ChakraImage } from "@chakra-ui/react";
import NextLink from "next/link";
import { LuCar } from "react-icons/lu";

import heroCar from "../../public/assets/hero-car.jpg";
import NextImage from "next/image"

export default function Home() {
  return (
    <>
    <HStack as="header" position={"fixed"} left={0} right={0} top={0} zIndex={50}>
      <HStack as="header" justify="space-between" px={6} py={4} bg={"whiteAlpha.600"}>
        <ChakraLink alignItems={"center"} gap={2} asChild>
          <NextLink href="/">
          <Icon w={7} h={7}>
            <LuCar />
          </Icon>

            <Text fontSize={"xl"} fontWeight={"bold"}>AutoShine</Text>
        </NextLink>
      </ChakraLink>

        <HStack alignItems={"center"} gap={8}>
          <ChakraLink alignItems={"center"} gap={2} asChild>
            <NextLink href="/">
              Inicio
            </NextLink>
          </ChakraLink>
        
          <ChakraLink alignItems={"center"} gap={2} asChild>
            <NextLink href="#servicos">
              Serviços
            </NextLink>
          </ChakraLink>
        
          <ChakraLink alignItems={"center"} gap={2} asChild>
            <NextLink href="/agendar">
              Agendar
            </NextLink>
          </ChakraLink>
        
          <Button variant={"outline"} rounded={"lg"}>Acessar</Button>
        </HStack>
      </HStack>
    </HStack>

    <VStack as="main" gap={8}>
      <VStack as="section">
        <ChakraImage w={"100vw"} h={"100vh"} asChild>
          <NextImage src={heroCar} alt="teste"/>
        </ChakraImage>
      </VStack>
    </VStack>
    </>
   );
}
