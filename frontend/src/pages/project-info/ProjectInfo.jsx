import React from 'react'
import "./projectinfo.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShowListOfUsers from './UserCardList';

import { Link } from "react-router-dom"
import ProjectInfoComp from './ProjectInfoComp';

const ProjectInfo = () => {

    const companyData ={
        stacks :["react", "javascript", "HTML", "CSS" ]
    }
  return (
        <div className='main-page'>
        <div>
        <Tabs>
    <TabList>
      <Tab>Project Info</Tab>
      <Tab>Interested Contributors</Tab>
    </TabList>

    <TabPanel>
      <div><ProjectInfoComp /></div>
    </TabPanel>
    <TabPanel>
      <div><ShowListOfUsers/></div>
    </TabPanel>
  </Tabs>
        </div>
        </div>
  )
}

export default ProjectInfo