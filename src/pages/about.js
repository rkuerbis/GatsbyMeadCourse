import React from "react"
import {Link} from "gatsby"
//import Footer from "../components/footer"
//import Header from "../components/header"
import Layout from "../components/layout"
import Head from '../components/head'



const AboutPage = () => {
    return(
        <Layout>
            <Head title="About"/>

             <h1>About Page</h1>
             <p>
                 Link to contact page: <Link to="/contact">contact page.</Link>
                 <br/>
                 <br/>
                 <br/>
                 Link to home page: <Link to="/">home.</Link>
                 <br/>
                 <br/>
                 <br/>
             </p>

        </Layout>
    )

}


export default AboutPage