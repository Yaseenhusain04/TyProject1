import { Box , Button, Divider, Tab } from "@mui/material";

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Schedule.module.css";
import ScheduleComp from "./ScheduleComp/ScheduleComp";

const Schedule = () => {
  const [matchData,setMatchData] =useState([])
  


  useEffect(() => {
    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/schedule/v1/international',
  headers: {
    'X-RapidAPI-Key': '5b6f5926abmshc664194184294b8p154f5djsn5c83052c2564',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  }, []);

  return (
    <>
      <Navbar />
      <Box
        mt={"0.3rem"}
         border="1px solid blue"
        bg="#fff"
         display={"flex"}
         justifyContent="space-between"
        gap={"0.3rem"}
      >
          <Tab>
            <TabList>
              <Tab>Current Matches</Tab>
              <Tab>Current & Future Series</Tab>
              <Tab>Matches By Day</Tab>
              <Tab>Teams</Tab>
              <Tab>Series Archive</Tab>
            </TabList>
        <Divider/>

            <TabPanels width={"100%"} >
              <TabPanel h={"700px"}>
                <Box>Under Construction</Box>
              </TabPanel>
              <TabPanel h={"700px"} >
                <Box>Under Construction</Box>
              </TabPanel>
              <TabPanel padding={"0px 10px"} minH={"700px"}>
                <Box fontSize="24px" fontWeight={"bold"} padding={"15px 0px 10px 10px"}>Cricket Schedule</Box>
                <Box margin={"0px 0px 10px"} display="flex" gap="1.5rem" padding={"10px"}>
                  <Box>
                    <Button size="xs" _hover={{bg:"#009270",color:"#fff"}} bg="#009270" color="#fff"  borderRadius={"18px"} padding={"0.5rem 1.2rem"}>International</Button>
                  </Box>
                  <Box>
                    <Button size="xs" _hover={{bg:"#009270",color:"#fff"}} borderRadius={"18px"} padding={"0.5rem 1.2rem"}>Domestic & others</Button>
                  </Box>
                  <Box>
                    <Button size="xs" _hover={{bg:"#009270",color:"#fff"}} borderRadius={"18px"} padding={"0.5rem 1.2rem"}>T20 Leagues</Button>
                  </Box>
                  <Box>
                    <Button size="xs" _hover={{bg:"#009270",color:"#fff"}} borderRadius={"18px"} padding={"0.5rem 1.2rem"}>Women</Button>
                  </Box>
                  <Box>
                    <Button size="xs" _hover={{bg:"#009270",color:"#fff"}} borderRadius={"18px"} padding={"0.5rem 1.2rem"}>All Matches</Button>
                  </Box>

                </Box>

                
                <Box>
                  {
                    matchData && matchData.map((ele)=>(
                      ele.scheduleAdWrapper && 

                      <ScheduleComp 
                      key={ele.id}
                        date={ele.scheduleAdWrapper.date}
                        seriesNameArr={ele.scheduleAdWrapper.matchScheduleList}

                      />
                    ))
                  }
                </Box>
              </TabPanel>
            
              <TabPanel h={"700px"}>
                <Box>Under Construction</Box>
              </TabPanel>
           
              <TabPanel h={"700px"}>
                <Box>Under Construction</Box>
              </TabPanel>
            </TabPanels>
          </Tab>
        
      </Box>
    </>
  );
};

export default Schedule;
