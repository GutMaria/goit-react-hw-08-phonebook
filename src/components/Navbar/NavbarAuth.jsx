import { Link } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'


const NavbarAuth = ()=> {
    return (
<Breadcrumb fontSize='xl' fontWeight='medium' >
  <BreadcrumbItem>
    <BreadcrumbLink as={Link} to='/signup'>SignUp</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem >
    <BreadcrumbLink as={Link} to='/login'>LogIn</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
    )
}

export default NavbarAuth;