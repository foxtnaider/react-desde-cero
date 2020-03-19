import React from "react"

const Banner = () => (
    <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" alt="logo" src="/image/vladimir-riabinin-diMBLU4FzDQ-unsplash.jpg" />
            <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Pagina con react</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <a href="http://" className="button">Suscribirse</a>
            </div>
        </div>
        </div>
    </div>
)

export default Banner