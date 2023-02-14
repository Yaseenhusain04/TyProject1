import { Image } from '@mui/icons-material'
import { Box, Divider } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NewsImageComp = ({image,description,caption,title}) => {
  return (
    <>
        <Box lineHeight={7}>
            
            <Box w="100%" mt={"2"} mb={"3"} >
                <Image borderRadius={5} w="100%" alt={caption} src={image} />
            </Box>
            <var Text as="b" _hover={{textDecoration:"underline !important"}} fontSize="2xl">
                <Link>{caption}</Link>
            </var>
            <var Text _hover={{cursor:"pointer"}}  color={"gray.500"}>{description}</var>
            <var Text _hover={{textDecoration:"underline !important",cursor:"pointer"}} lineHeight={"tight"} noOfLines={1} as="b" color={"blue.500"}>{title}</var>
            <Divider mt={3} mb={3}/>
        </Box>
    </>
  )
}

export default NewsImageComp