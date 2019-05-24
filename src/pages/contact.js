import React from "react"
import {Link} from "gatsby"
//import Footer from "../components/footer"
//import Header from "../components/header"
import Layout from "../components/layout"
import Head from '../components/head'



const ContactPage = () => {
    return(
        <Layout>
            <Head title="Contact"/>

            
            <h1>Contact Page</h1>
            <p>Contact on twitter: <a href="https://twitter.com/myworkoncall" target="_blank" rel="noopener noreferrer">@myworkoncall</a></p>
            <p>Contact by e-mail: myworkoncall@gmail.com</p>
            <p>
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


export default ContactPage