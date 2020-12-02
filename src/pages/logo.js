import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../svg/logo.inline.svg"
import Spacer from "../svg/spacer-demo.inline.svg"
import LogoExample from "../components/logo-example";

const LogoPage = () => (
    <Layout>
        <SEO title="Logo"/>
        <h1><strong>Brand Logo</strong></h1>
        <div className={`logo-info`}>
            <h2 className={`logo-title`}><strong>Our Logotype</strong></h2>
            <hr/>
            <p>Our Logo is the key building block of our identity, the primary visual element that identifies us.</p>
            <div className={`sample-wrap`}>
                <Logo id={`logo-sample`} width={`100%`} height={`auto`}/>
            </div>

            <p>The Philly’s logotype consists of a single element, the brand name. The curves present throughout the
                scripted font elevate a feeling of smoothness and easy riding, an analogy to using Philly’s parts with
                your skateboard build.</p>
            <p>The corporate logo is presented through the use of colour as well as shape and form. Bright orange
                commands attention, further highlighted by the bright blue outline.</p>
            <h2 className={`logo-title`}><strong>Construction</strong></h2>
            <hr/>
            <p>It is important to keep corporate marks clear of any other graphic elements. To regulate this, an
                exclusion zone has been established around the logotype. This exclusion zone indicates the closest any
                other graphic element or message can be positioned in relation to the mark of the logotype itself.</p>
            <div className={`sample-wrap`}>
                <Spacer className={`spacer-sample`} />
            </div>
            <p>The spacing for the Phillys logo can be measured by using the apostrophe like in the example above.</p>
            <p>The logo must always be presented large enough to clearly read</p>
            <h2 className={`logo-title`}><strong>Do</strong></h2>
            <hr/>
            <LogoExample desription={`Variable Description`} src={`air-grab.jpg`} alt={`first example test`} />
            <h2 className={`logo-title`}><strong>Don't</strong></h2>
            <hr/>
        </div>
    </Layout>
)

export default LogoPage
