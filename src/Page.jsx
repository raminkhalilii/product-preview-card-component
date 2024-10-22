import React from "react";
import './page.style.css'
import cart from "./assets/icon-cart.svg"
import image from "./assets/image-product-desktop.jpg"

function Page() {
    return (
        <>
            <body>
            <main className="page">
                <div className="image-wrapper">

                </div>
                <section className="content">
                    <h1>PERFUME</h1>

                    <h2>Gabrielle Essence Eau De Parfum</h2>
                    <p>A floral, solar and voluptuous interpretation composed by Olivier Polge,
                        Perfumer-Creator for the House of CHANEL.</p>
                    <div className="price">
                        <p>$149.99<span>
                            $169.99
                        </span>
                        </p>
                        <button>
                            <img src={cart} alt="" aria-hidden="true"/>
                            Add to Cart
                        </button>

                    </div>
                </section>
            </main>
            </body>
        </>
    )
}

export default Page;