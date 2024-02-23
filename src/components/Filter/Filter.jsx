import { setFilter } from '../../redux/filter/filter-slice'
import { useDispatch } from "react-redux";

import { Flex , Input, Text  } from '@chakra-ui/react'



const Filter = () => {

  const dispatch = useDispatch();

const changeFitler = ({ target }) => {
      dispatch(setFilter(target.value))
    }

  return <Flex  maxW={[240, 360]} m='20px 0px' flexWrap='wrap' alignItems='center'>
            <Text fontSize='lg' fontWeight='medium'  m='0px' mr='10px' >Find contacts by name:</Text>
            <Input  onChange={changeFitler} name="filter" flex='1' size='sm' w='auto' minW='120px' bg='white' border='1px solid teal' borderRadius='5px'/>
          </Flex>
}

export default Filter;