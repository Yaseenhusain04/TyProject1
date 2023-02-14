
import { Box, Divider } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NewsComp = ({title,date}) => {
  return (
    <>
       <Box>
        <var Text _hover={{textDecoration:"underline !important"}}>
            <Link>
            {title}
            </Link>
            </var>
        <var Text color={"gray.500"}>{new Date(Number(date)).toLocaleDateString("en-US")}</var>
        <Divider mt={1} mb={1}/>
        </Box>
    </>
  )
}

export default NewsComp