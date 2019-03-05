import React from "react"
import { Link } from "gatsby"

import Title from "../Globals/Title"

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor amet chicharrones snackwave leggings, kombucha
              beard whatever helvetica biodiesel jean shorts tbh hot chicken.
              Kombucha pour-over cronut vegan tote bag stumptown meggings craft
              beer. Freegan cray try-hard pork belly. Mlkshk raclette 8-bit raw
              denim cardigan ethical ugh fam tacos disrupt cloud bread. Bespoke
              etsy palo santo mixtape synth cronut chillwave, lyft ramps
              brooklyn godard. Banh mi asymmetrical semiotics pop-up seitan man
              bun ethical heirloom taxidermy. Drinking vinegar fixie kogi ramps
              wolf.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
