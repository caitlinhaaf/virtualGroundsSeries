import React from "react"

import Layout from "../components/layout/layout"
import AboutGrid from "../components/aboutGrid/aboutGrid"
import SEO from "../components/seo"

const ApplicationsPage = () => (
  <Layout bodyClass="greenBody">
    <SEO title="Call for Applications" pageUrl="/call-for-applications/"/>
    <h1 className="alt">Call for Applications</h1>
    <h2 className="alt">Virtual Grounds: Platforms</h2>

    <section className="pageContentBody">
        <p>
            We're excited to announce the second year of the Virtual Grounds program, a series dedicated to feminist perspectives on digital sustainability and survival. Virtual Grounds is a 2-part training and research initiative that considers how we navigate the future, protect our virtual selves, and shape digital landscapes. Over the course of a year, we will survey how technology continues to grow and impact our lives in different ways through a series of workshops led by practicing creative technologists, scholars, and artists.
        </p>

        <p>
            This year we will be focusing on the theme of Platforms. We understand that everyone has a different interpretation of platforms and what it means to them. We will be focusing on social/technology based platforms, how they shape our lives, our imagination and how we move through virtual spaces. Our themes are used as guideposts on how you build your projects and what questions you want to explore, it is adaptable to your own explorations and experiences. Over the course of this program, we will be expanding our ideas of 'platforms' through workshops, readings and building together.
        </p>

        <p>
            The call for applications will open August 10th, 2021 until September 7th. Successful applicants will be notified by September 20th. The program will begin October 2021 through to the end of 2022. This year, our program will be entirely remote. As such we welcome applications from anywhere in Canada.
        </p>

        <p>
            When we began this initiative in 2019 we wanted to create a space for artists and researchers to explore thier relationship with technology and how it shaped our urban and rural environments. Through a series of in-person and virtual workshops participants were able to expand their knowledge about the everyday intersections with technology. With the support of their mentors and staff, each participant was able to build out a project that helped them answer a set of questions around their relationship to technology. The amazing projects can be found <a href="https://www.showcase.virtualgrounds.zone/" aria-label="Virtual Grounds 2020 Showcase website">here</a>.
        </p>

        <p>
            Virtual Grounds is a collaboration between the Digital Justice Lab and Trinity Square Video.
        </p>

        <p>
            Trinity Square Video is an artist-run centre that is dedicated to re-imaging media arts. We strive to create supportive environments, encouraging artistic and curatorial experimentation that challenge medium specificity through education, production and presentation supports.
        </p>

        <p>
            The Digital Justice Lab's mission is to focus on building a more just and equitable future. We engage with diverse communities to build alternative digital futures, here in the nation we know as Canada. We work alongside technologists, community activists, and policymakers to shape a better understanding of technology and its impact on communities across the country.
        </p>
    </section>
  </Layout>
)

export default ApplicationsPage
