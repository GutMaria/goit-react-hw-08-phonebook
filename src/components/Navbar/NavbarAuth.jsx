import { Link } from "react-router-dom";

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
// } from '@chakra-ui/react'

import { VStack,  Link as ChakraLink } from "@chakra-ui/react";


// const NavbarAuth = ()=> {
//     return (
// <Breadcrumb fontSize='2xl' fontWeight='medium' flexDirection={['column', 'row']}>
        
//           <BreadcrumbItem>
//             <BreadcrumbLink as={Link} to='/signup' color='teal'>SignUp</BreadcrumbLink>
//           </BreadcrumbItem>

//   <BreadcrumbItem >
//     <BreadcrumbLink as={Link} to='/login' color='teal'>LogIn</BreadcrumbLink>
//   </BreadcrumbItem>
        
// </Breadcrumb>
//     )
// }

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