import React from 'react'
import Microsoft from '../images/microsoft.svg'
import Hp from '../images/hp.svg'
import Behance from '../images/behance.svg'
import Pinterest from '../images/pinterest.svg'
import Drupal from '../images/drupal.svg'
import Dribbble from '../images/dribbble.svg'

const Companies = () => {
    return (
        <section className='companies' style={{ background: 'var(--primary-dark)', color: 'white' }}>
            <div className="container py-5">
                <div className="sec-header text-center">
                    <h2>We have worked with the following companies</h2>
                    <p>We also work with private individuals</p>
                    <div className="all-companies">
                        <img src={Microsoft} alt="microsoft" />
                        <img src={Dribbble} alt="Dribbble" />
                        <img src={Hp} alt="Hp" />
                        <img src={Pinterest} alt="Pinterest" />
                        <img src={Behance} alt="Behance" />
                        <img src={Drupal} alt="Drupal" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Companies
