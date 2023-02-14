import TextField from '@mui/material'
import { CenterFocusStrong} from '@mui/icons-material'
import { Box, Divider } from '@mui/material'
import React from 'react'
import styles from "./FeaturedMatch.module.css"

const FeaturedMatch = () => {
  return (
    <Box>
    <Box className={styles.featuredBox}>
    <var as="b" fontSize={"lg"} color={"#009270"}>
      FEATURED MATCHES
    </var>
    <Box className={styles.sliderBox}>
        <Box className={styles.eachMatch}>
            <Box display={"flex"} mt="0.3rem" justifyContent={"space-between"}> 
              <var Text as="b">RSA</var>
              <var Text as="b">106-8 (20)</var>
            </Box>
            <Box display={"flex"} mt="0.3rem"  justifyContent={"space-between"}> 
              <var Text as="b">IND</var>
              <var Text as="b">110-2 (16.4)</var>
            </Box>

            <var Text mt="0.3rem"  color={"blue"}>India won by 8 wkts</var>

        </Box>
        <CenterFocusStrong height='60px'>
  <Divider orientation='vertical' />
</CenterFocusStrong>
        <Box className={styles.eachMatch}>
        <Box display={"flex"} mt="0.3rem" justifyContent={"space-between"}> 
              <var Text as="b">JT</var>
              <var Text as="b">226-4 (20)</var>
            </Box>
            <Box display={"flex"} mt="0.3rem"  justifyContent={"space-between"}> 
              <var Text as="b">GAW</var>
              <var Text as="b">189-8 (20)</var>
            </Box>

            <var Text mt="0.3rem"  color={"blue"}>Jamaica Tallawahs won by 37 wkts</var>

        </Box>
        <CenterFocusStrong height='60px'>
  <Divider  orientation='vertical' />
</CenterFocusStrong>
        <Box className={styles.eachMatch}>
        <Box display={"flex"} mt="0.3rem" justifyContent={"space-between"}> 
              <var Text as="b">AUS</var>
              <var Text as="b">106-8 (20)</var>
            </Box>
            <Box display={"flex"} mt="0.3rem"  justifyContent={"space-between"}> 
              <var Text as="b">NZ</var>
              <var Text as="b">150-2 (20)</var>
            </Box>

            <var Text mt="0.3rem"  color={"blue"}>Newzeland won </var>

        </Box>
        <CenterFocusStrong height='60px'>
  <Divider orientation='vertical' />
</CenterFocusStrong>
        <Box className={styles.eachMatch}>
        <Box display={"flex"} mt="0.3rem" justifyContent={"space-between"}> 
              <var Text as="b">MT</var>
              <var Text as="b">161-5 (20)</var>
            </Box>
            <Box display={"flex"} mt="0.3rem"  justifyContent={"space-between"}> 
              <var Text as="b">INDC</var>
              <var Text as="b">162-3 (16.4)</var>
            </Box>

            <var Text mt="0.3rem"  color={"blue"}>India Capital won by 8 wkts</var>

        </Box>
    </Box>
    </Box>
    </Box>
  )
}

export default FeaturedMatch