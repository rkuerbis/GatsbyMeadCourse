import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
//import Footer from "../components/footer"
//import Header from "../components/header"

import Head from '../components/head'


const IndexPage = () => {
    return(
        <Layout>
            <div>
                <Head title="Home"/>
                <h1>
                    Welcome to myworkoncall.com Website!

                </h1>
                <p>
                    About myworkoncall Website: <Link to="/about">about.</Link>
                    <br/>
                    Blog Page: <Link to="/blog">blog.</Link>
                    <br/>
                    Blog Contentful Page: <Link to="/blogcontentful">blogcontentful.</Link>
                    <br/>

                    Contact Page: <Link to="/contact">contact.</Link>
                </p>
            </div>
        </Layout>
    )



/* 
const IndexPage = () => {
    return(
        <div>

            <Header/>
            <h1>
                Welcome to myworkoncall.com Website!

            </h1>
            <p>
                About myworkoncall Website: <Link to="/about">about.</Link>
                <br/>
                Blog Page: <Link to="/blog">blog.</Link>
                <br/>
                Contact Page: <Link to="/contact">contact.</Link>
            </p>
            <Footer />

        </div>

    ) 
*/


}


export default IndexPage
