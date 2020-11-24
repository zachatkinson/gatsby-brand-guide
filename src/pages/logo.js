import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../svg/logo.inline.svg"

const LogoPage = () => (
    <Layout>
        <SEO title="Logo"/>
        <h1><strong>Brand Logo</strong></h1>
        <div className={`logo-info`}>
            <h2 className={`logo-title`}><strong>Our Logotype</strong></h2>
            <hr/>
            <div className={`sample-wrap`}>
                <Logo id={`logo-sample`} width={`100%`} height={`auto`}/>
            </div>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden
                in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200
                Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                non-characteristic words etc.</p>
            <h2 className={`logo-title`}><strong>Do</strong></h2>
            <hr/>
            <h2 className={`logo-title`}><strong>Don't</strong></h2>
            <hr/>
        </div>
    </Layout>
)

export default LogoPage
