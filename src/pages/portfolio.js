import React, { Component } from 'react';
import Layout from "../components/layout"
import "../components/layout.css"
const Portfolio = (props) => {
  return (
    <Layout>
    <div className = "container" style = {{ width: "70%"}}>
      <h1 style = {{textAlign: "center"}}>Experience</h1>
      <h6>Opportunity Sketch</h6>
      <h6>Swan Lake</h6>
      <h1 style = {{textAlign: "center"}}>Projects</h1>
      <h6>Alarmoquy</h6>
      <h6>Beeraseuir</h6>
    </div>
    </Layout>
  )
}

export default Portfolio;