import React, { Component } from 'react';
import Layout from "../components/layout"
import "../components/layout.css"
const Skills = (props) => {
  return (
    <Layout>
      <div className = "container" style = {{ width: "70%", textAlign: "center"}} >
        <h6 style = {{textAlign: "center"}}>Here are some of the languages, frameworks and tools I use for development.</h6>
        <div className = "row">
          <ul className = "col-lg-4 col-md-4 col-sm-4" style = {{textAlign: "center"}}>
            <p style = {{fontWeight: "bold"}}>Frontend:</p>
            <li>Javascript(es6)</li>
            <li>React</li>
            <li>Redux</li>
            <li>React-Native</li>
            <li>JQuery</li>
            <li>Typescript</li>
            <li>Vue</li>
            <li>Canvas</li>
          </ul>
          <ul className = "col-lg-4 col-md-4 col-sm-4" style = {{textAlign: "center"}}>
            <p style = {{fontWeight: "bold"}}>Backend:</p>
            <li>Javascript(node)</li>
            <li>Express</li>
            <li>B-Crypt</li>
            <li>Passport</li>
            <li>Python(flask)</li>
            <li>SQL(MySql and Postgres)</li>
            <li>MongoDB</li>
            <li>Firebase</li>
          </ul>
          <ul className = "col-lg-4 col-md-4 col-sm-4" style = {{textAlign: "center"}}>
            <p style = {{fontWeight: "bold"}}>Utility:</p>
            <li>Git</li>
            <li>Terraform</li>
            <li>Bash</li>
            <li>AWS</li>
            <li>Oracle Cloud Infrastructure</li>
            <li>Linux</li>
            <li>Digital Ocean</li>
            <li>Mocha, Chai, Jest, and Enzyme</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Skills;