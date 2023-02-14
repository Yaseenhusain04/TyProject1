import { Box, Icon } from '@mui/material'
import React from 'react'
import styles from "./Footer.module.css"
import { Android, Apple, Facebook, Image, Pinterest, Twitter, YouTube } from '@mui/icons-material'

const Footer = () => {
  return (
    <Box>
    <Box className={styles.footerBox}>
           <Box className={styles.footerdiv1}>
            <Box className={styles.footerdiv1Child}>
                <Image _hover={{
              cursor: "pointer",
            }}
            margin="auto"
            marginRight={"0"}
            w="50%"
            alt="logo"
            src={"https://www.cricbuzz.com/images/cb_logo.svg"}
/>
            </Box>
            
                <Box className={styles.iconfooterDiv}>
                        <Icon w={4} h={4} as={Android} />
                        <var Text fontSize={"14px"}>
                            Android
                        </var>
                </Box>
                <Box className={styles.iconfooterDiv}>
                        <Icon w={4} h={4} as={Apple} />
                        <var Text fontSize={"14px"}>
                           iOS
                        </var>
                </Box>


            </Box>
            <Box className={styles.footerdiv1Child}>
                <var Text fontSize={"xl"} as={"b"}>FOLLOW US ON</var>
                
                <Box className={styles.iconfooterDiv}>
                        <Icon w={4} h={4} as={Facebook} />
                        <var Text fontSize={"14px"}>
                            facebook
                        </var>
                </Box>
                <Box className={styles.iconfooterDiv}>
                        <Icon w={4} h={4} as={Twitter} />
                        <var Text fontSize={"14px"}>
                            twitter
                        </var>
                </Box>
                <Box className={styles.iconfooterDiv}>
                        <Icon w={4} h={4} as={YouTube} />
                        <var Text fontSize={"14px"}>
                           youtube
                        </var>
                </Box>
                <Box className={styles.iconfooterDiv}>
                        <Icon w={4} h={4} as={Pinterest} />
                        <var Text fontSize={"14px"}>
                           Pinterest
                        </var>
                </Box>


            </Box>
            <Box className={styles.footerdiv1Child}>
                <var Text fontSize={"xl"} as={"b"}>MOBILE SITE & APPS</var>
                
                <Box textAlign={"start"} w="100%" mt="1.2rem" lineHeight={2}>
                    <var Text fontSize={"14px"}>Careers</var>
                    <var Text fontSize={"14px"}>Advertise</var>
                    <var Text fontSize={"14px"}>Privacy Policy</var>
                    <var Text fontSize={"14px"}>Terms of Use</var>
                    <var Text fontSize={"14px"}>Cricbuzz TV Ads</var>
                </Box>


            </Box>
           </Box>
           <Box className={styles.footerdiv2}>
           © 2022 Cricbuzz.comCloned, Times Internet Limited. All rights reserved | The Times of India | Navbharat Times
           </Box>
    </Box>
    
    
  )
}

export default Footer