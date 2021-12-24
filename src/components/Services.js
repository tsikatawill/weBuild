import React from 'react'
import Globe from '../images/globe.svg'
import Sync from '../images/sync-icon.svg'
import Service from '../images/service.svg'
import Dropbox from '../images/dropbox.svg'


const Services = () => {
    return (
        <section className="services" id="services">
            <div className="container py-5">
                <div className="section-header mb-3">
                    <h2>Services</h2>
                    <p>At WeBuild, we provide the following services</p>
                </div>
                <div className="all-services">
                    <div className="row g-3">
                        <article className="service col-lg-6 d-sm-flex">
                            <img src={Globe} alt="Globe" />
                            <div className="text">
                                <h4>SEO</h4>
                                <p style={{ maxWidth: '400px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic officia eveniet molestiae error. Optio blanditiis qui pariatur maiores sequi accusantium molestiae minus, ut voluptatem, eligendi veritatis autem nemo. Quis, id.</p>
                            </div>
                        </article>
                        <article className="service col-lg-6 d-sm-flex">
                            <img src={Sync} alt="Sync" />
                            <div className="text">
                                <h4>Sync with existing systems</h4>
                                <p style={{ maxWidth: '400px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic officia eveniet molestiae error. Optio blanditiis qui pariatur maiores sequi accusantium molestiae minus, ut voluptatem, eligendi veritatis autem nemo. Quis, id.</p>
                            </div>
                        </article>
                        <article className="service col-lg-6 d-sm-flex">
                            <img src={Service} alt="Service" />
                            <div className="text">
                                <h4>After market service</h4>
                                <p style={{ maxWidth: '400px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic officia eveniet molestiae error. Optio blanditiis qui pariatur maiores sequi accusantium molestiae minus, ut voluptatem, eligendi veritatis autem nemo. Quis, id.</p>
                            </div>
                        </article>
                        <article className="service col-lg-6 d-sm-flex">
                            <img src={Dropbox} alt="Dropbox" />
                            <div className="text">
                                <h4>Archival service of old systems</h4>
                                <p style={{ maxWidth: '400px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic officia eveniet molestiae error. Optio blanditiis qui pariatur maiores sequi accusantium molestiae minus, ut voluptatem, eligendi veritatis autem nemo. Quis, id.</p>
                            </div>
                        </article >
                    </div >
                </div >
            </div >
        </section >
    )
}

export default Services
