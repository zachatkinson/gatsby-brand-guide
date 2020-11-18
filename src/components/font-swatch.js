import React from "react"


import "../styles/font-swatch.min.css"

const FontSwatch = (props) => {
    return (

        <div className={`font-swatch`}>
            <h2><strong>Futura Regular</strong></h2>
            <hr />
            <p className={`typography-sample`}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
            <p className={`typography-sample`}>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
            <p className={`typography-sample`}>1 2 3 4 5 6 7 8 9 0 ( ! ? & % $ . , ; : )</p>
        </div>
    )
}
export default FontSwatch