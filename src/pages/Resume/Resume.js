import { Grid, Icon, Paper, Typography, TextField } from "@material-ui/core";
import React from "react";

import TimelineDot from "@material-ui/lab/TimelineDot";

import CustomButton from "../../components/Button/Button";

import resumeData from "../../utils/resumeData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // About me
  aboutmetext: {
    // fontSize: '16px',
    fontWeight: "600",
    // position: 'relative',
    // margin: '0'
  },

  aboutmeoftext: {
    color: "green",
    lineHeight: "22px",
    whiteSpace: "pre-line",
  },
  // End of About me
  // Skills
  skill: {
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "#eee",
    minHeight: "150px",
    height: "100px",
  },

  skill_title: {
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "30px",
  },

  skill_description: {
    display: "flex",
    alignItems: "center",
    color: "green",
    fontWeight: "300",
    lineHeight: "15px",
  },

  timeline_dot: {
    borderColor: "yellow",
    padding: "2px",
    marginRight: "5px",
  },
  // End of Skills
  // Services

  _div: {
    // backgroundColor: '#eee',
    // padding: '5px 10px 5px 10px'
    marginLeft: "0",
  },
  service: {
    height: "100%",
    textAlign: "center",
  },
  service_title: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "30px",
    textAlign: "center",
  },
  service_description: {
    color: "green", //'#989898',
    // borderColor: 'yellow',
    // marginRight: '5px',
    textAlign: "center",
  },
  service_icon: {
    fontSize: "33px",
    marginLeft: "0",
    paddingLeft: "80px",
    fontWeight: "300",
    color: "black",
  },

  // End of Services
  // Contacts
  contactInfo_item: {
    fontSize: "13px",
    color: "#787878",
    lineHeight: '9px'
  },

  span: {
    color: 'black',
    fontWeight: '500'
  },

  // contactInfo_container: {
  //   marginTop: "15px"
  // },

  contactInfo_icon: {
    // marginTop: "15px",
    marginRight: "3px",
    fontSize: '40.5px',
    color: 'lightblue'
  }

  // End of Contacts
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className={classes.aboutmetext}>About me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className={classes.aboutmeoftext}>
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and Experience */}
      <Grid container className=""></Grid>

      {/* Services */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Services</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className={classes._div}>
                  <Icon className={classes.service_icon}>{service.icon}</Icon>
                  <Typography className={classes.service_title} variant="h6">
                    {service.title}
                  </Typography>
                  <Typography
                    className={classes.service_description}
                    variant="body2"
                  >
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section_graybg pb_45 p_50">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Tech stack</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-between">
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.skill} elevation={0}>
                  <Typography variant="h6" className={classes.skill_title}>
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography
                      variant="body2"
                      className={classes.skill_description}
                    >
                      <TimelineDot
                        variant="outlined"
                        className={classes.timeline_dot}
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Contact */}
      <Grid container spacing={5} className="section pt_45 pb_45">
        {/* Contact form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 classname="section_title_text">Contact Form</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="email" label="Email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="Message"
                    label="Message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="Submit"></CustomButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Contact information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className={classes.contactInfo_item}>
                    <span className={classes.span}>Address:</span> {resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.contactInfo_item}>
                      <span className={classes.span}>Phone:</span> {resumeData.phone}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.contactInfo_item}>
                      <span className={classes.span}>Email:</span> {resumeData.email}
                    </Typography>
                </Grid>
              </Grid>
            </Grid>
          

            <Grid item xs={12}>
              <Grid container className="">
                {Object.keys(resumeData.socials).map((key) => (
                  <Grid item className="">
                    {/* <a href={resumeData.socials[key].link}></a> */}
                    <span className={classes.contactInfo_icon}>
                      {resumeData.socials[key].icon}
                    </span>
                  </Grid>
                ))}
              </Grid>
            </Grid>

          </Grid>
        </Grid>

      </Grid>
    </>
  );
};

export default Resume;
