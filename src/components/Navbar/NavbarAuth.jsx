import { Link } from "react-router-dom";


import { VStack,  Link as ChakraLink } from "@chakra-ui/react";


const NavbarAuth = () => {
  return (
    <VStack spacing={4} align="stretch" flexDirection={["column", "row"]}>
      <ChakraLink as={Link} to="/signup" color="teal" fontSize="2xl" fontWeight="medium">
        SignUp
      </ChakraLink>
      <ChakraLink as={Link} to="/login" color="teal" fontSize="2xl" fontWeight="medium">
        LogIn
      </ChakraLink>
    </VStack>
  );
};

export default NavbarAuth;