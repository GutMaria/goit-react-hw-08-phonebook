import { Link } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'


const NavbarAuth = ()=> {
    return (
<Breadcrumb fontSize='2xl' fontWeight='medium' >
  <BreadcrumbItem>
    <BreadcrumbLink as={Link} to='/signup' color='teal'>SignUp</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem >
    <BreadcrumbLink as={Link} to='/login' color='teal'>LogIn</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
    )
}

export default NavbarAuth;