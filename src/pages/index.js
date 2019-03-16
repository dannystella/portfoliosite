import React from "react";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Portfolio from './portfolio';
import Resume from './resume';
import Skills from './skills';



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div id = "intro">
      <h6 className = "text-center" style = {{textAlign: "center"}}>Hi I'm Danny, an avid full stack developer and audio engineer.</h6>
      <p className = "text-center" style = {{textAlign: "center"}}>I enjoy building scalable and reliable applications and codebases, keeping my code very modular to ensure everything is bug free. I also enjoy architecting enterprise grade cloud solutions,
         allowing myself (and others) to focus on building the application itself,
         abstracting away unnessecary logic to the beautiful microservices the cloud provides us.
      </p>
      <p className = "text-center" style = {{textAlign: "center"}}>I am also an audio engineer in my free time, having worked at a top tier recording studio in the past I still love the energy and satisfaction of getting the recording, and mix just right.</p>
      <Skills/>
      <Resume/>
      <Portfolio/>
    </div>
  </Layout>
)

export default IndexPage
