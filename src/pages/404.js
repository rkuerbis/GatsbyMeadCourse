import React from "react"
import {Link} from "gatsby"
//import Footer from "../components/footer"
//import Header from "../components/header"
import Layout from "../components/layout"
import Head from '../components/head'


const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>

            <h1>Page No Found</h1>
            <p>
                <Link to="/">Home Page.</Link>

            </p>

        </Layout>
    )
}

export default NotFound