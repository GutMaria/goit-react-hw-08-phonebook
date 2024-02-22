import { setFilter } from '../../redux/filter/filter-slice'
import { useDispatch } from "react-redux";

import { Flex , Input, Text  } from '@chakra-ui/react'



const Filter = () => {

  const dispatch = useDispatch();

const changeFitler = ({ target }) => {
      dispatch(setFilter(target.value))
    }

  return <Flex  w='md' mb='20px'>
            <Text fontSize='lg'mr='10px' >Find contacts by name:</Text>
            <Input name="filter" flex='1' size='sm' width='auto' onChange={changeFitler} borderRadius={4} />
          </Flex>
}

export default Filter;