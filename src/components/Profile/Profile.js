import React from 'react';


import CustomTimeline, {CustomTimelineSeperator} from '../Timeline/Timeline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import resumeData from '../../utils/resumeData';
import logo from "../../assets/images/displayimage.jpeg"
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";

import CustomButton from '../Button/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({

  timelineItem_text: {
    font: '11px',
    color: 'grey',
  },

  timeline_content: {
    color: 'black'
  },

  profile_information: {
    display: null 
  },

  name: {
    textTransform: 'uppercase',
    textSizeAdjust: '17px',
    fontWeight: 'bold'
  },

  button_container: {
    width: "100%",
    display: 'flex !important', 
    justifyContent: 'center',
    marginTop: '20px',
    // backgroundColor: '#fff59d',
    fontSize: '12px',
    fontWeight: '500',
    borderRadius: '100px',
    padding: "3px 12px",
    lineHeight: '35px',
    minWidth: '100px',
    outline: 'none'

  }



}))


// import './Profile.css';

const CustomTimelineItem = ({title, text, link}) => {

  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineContent className={classes.timeline_content}>
        {link ? (
        <Typography className={classes.timelineItem_text}>
          <span>{title}:</span>
          <a href={link} target='blank'>{text}
          </a>
        </Typography>) : (
        <Typography className={classes.timelineItem_text}>
          <span>{title}:</span>{text}
          </Typography>
        )}
      </TimelineContent>

      <CustomTimelineSeperator />
    </TimelineItem>

  )};


const Profile = () => {

  const classes = useStyles();
  
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className={classes.name}>{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div> 

      <figure className="profile_image">
        <img src={logo} alt="pic"/>
      </figure>

      <div className={classes.profile_information}>
        <CustomTimeline icon={<PersonOutlineIcon />} >
          <CustomTimelineItem title='name' text={resumeData.name} />
          <CustomTimelineItem title='title' text={resumeData.title} />
          <CustomTimelineItem title='email' text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
             title={key} 
             text={resumeData.socials[key].text} 
             link={resumeData.socials[key].link} />
          ))}
        
        </CustomTimeline>
        {/* <br/> */}
        <div className={classes.button_container}>
          {/* <button>my Button</button> */}
        <CustomButton text={"Info"} icon={<ArrowDownwardIcon />} />
        </div>
        
        
      </div>
    </div>  
    
  );
};

export default Profile;