import React from 'react'

import Layout from '../components/layout'
import {graphql} from "gatsby"
//import BlogContentful from '../templates/blogcontentful'
import Head from '../components/head'


export const query = graphql`
    query ($slug: String!) {
        markdownRemark (
            fields: {
                slug: {
                    eq: $slug
                } 
            }
        )  {
            frontmatter {
                title
                date
            }
            html
        }
    }
`
  

const Blog = (props) => {

    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>

            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}>

            </div>

{/*
            {data.allMarkdownRemark.edges.node.html}
*/}
        </Layout>
    )
}


export default Blog

