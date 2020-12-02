import React from "react"
import Image from "./image";

const LogoExample = (props) => {
    return (

        <div className={`logo-example`}>
            <div className={`logo-example-image`}>
            <Image src={props.src} alt={props.alt} />
        </div>
            <div classname={`logo-example-description`}>
                {props.desription}
            </div>
        </div>
    );
}
export default LogoExample

