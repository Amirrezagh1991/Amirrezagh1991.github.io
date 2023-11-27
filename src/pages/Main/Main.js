import React from 'react'
import { Helmet } from 'react-helmet'

// import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { Navbar, Landing, Footer, Skills, Certificates, Projects } from '../../components'

import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />
            <Landing />
            <Skills />
            <Projects />
            <Certificates />
            <Footer />
            {/* <Landing />
            <About />
            <Education />

            <Experience />
            
            <Achievement />
            <Services />
            <Testimonials />
            <Blog />
            <Contacts />
            <Footer /> */}
        </div>
    )
}

export default Main