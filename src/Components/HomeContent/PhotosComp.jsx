
import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PhotosComp = ({caption,image,date}) => {
  return (
    <Box>
    <Box lineHeight={5}>
            
            <Box w="100%" mt={"2"} mb={"3"} >
                <var Image borderRadius={5} w="100%" alt={caption} src={image} />
               
            </Box>
            <var Text as="b" _hover={{textDecoration:"underline !important"}} fontSize="md">
                <Link>{caption}</Link>
            </var>
            <var Text color={"gray.500"}>{`${new Date(date).toISOString().split('T')[0]}`}</var>
        </Box>
    </Box>
  )
}

export default PhotosComp