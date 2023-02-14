


import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./VideosComp.module.css"
const VideosComp = ({image,title,seoTitle,date}) => {
  return (
    <Box>
    
    <Box lineHeight={6}>
            
            <Box w="100%" mt={"2"} mb={"3"} className={styles.videoBox}>
                <var Image borderRadius={5} w="100%" alt={title} src={image} />
                <Link to="#"></Link>
            </Box>
            <var Text as="b" _hover={{textDecoration:"underline !important"}} fontSize="md">
                <Link>{seoTitle}</Link>
            </var>
            <var Text color={"gray.500"}>{`${new Date(date).toISOString().split('T')[0]}`}</var>
        </Box>
    </Box>
  )
}

export default VideosComp