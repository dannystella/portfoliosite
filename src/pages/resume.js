import React, { Component } from 'react';
import Layout from "../components/layout"
import "../components/layout.css"

const Resume = (props) => {
  return (
    <Layout>
      <div className = "container" style = {{ width: "70%"}}>
        <h1 style = {{textAlign: "center"}}>Work History</h1>
        <h6 style = {{textAlign: "center"}}>Solution Engineer, Oracle - Boston, MA 2018-Present</h6>
        <p>Designed and built proof of concepts implementing and demonstrating Oracle cloud products. 
          Leveraged cutting edge technology to contribute to Open source products that extended oracle cloud infrastructure integration with other cloud technologies, build custom prototypes that take advantage of oracle clouds security products. 
        </p>
        <h6 style = {{textAlign: "center"}}>Assistant Sound Engineer, Northfire Recording Studio – Amherst, MA 2015-2017 </h6>
        <p>Built microphone setups ranging from 2-4 microphones for singer-songwriters, all the way to 13-15 microphone drum setups. 
          Patched hardware for the senior engineers, and got to work on my own band's EP from scratch to finish including the recording, editing, mixing and mastering phases.
        </p>
        <h1 style = {{textAlign: "center"}}>Education</h1>
        <p>Bachelor of Arts - Sound Recording Technology • University of Massachusetts Amherst Amherst, MA • Feb 1st 2016 </p>
      </div>
    </Layout>
  )
}

export default Resume;