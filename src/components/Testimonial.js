import React from 'react'
import FourStars from '../images/4.5stars.svg'
import FiveStars from '../images/5stars.svg'
import Avatar from '../images/avatar.png'
import Avatar1 from '../images/avatar1.png'

const Testimonial = () => {
    return (
        <section className='testimonial' id='testimonial'>
            <div className="container py-5">
                <div className="section-header mb-5">
                    <h2>Testimonials</h2>
                    <p>This is what our customers think of us</p>
                </div>
                <div className="all-testimonials">
                    <div className="row g-3">
                        <article className="testimonial col-md-6 py-3 py-md-0 d-flex">
                            <img src={Avatar} alt="avatar" width='100px' height="100px" />
                            <div className="text px-3">
                                <h4 style={{ margin: 0 }}>Anne M. Marie</h4>
                                <small className="text-secondary">CEO, Some Company Ltd.</small>
                                <p style={{ maxWidth: '400px', margin: 0, fontStyle: 'italic' }}>Sicing elit. Hic officia eveniet molestiae error. Optio blanditiim molestiae minus, ut voluptatem, eligendi veritatis autem nemo. Quis, id.</p>
                                <img src={FourStars} alt="4.5 stars" width="100px" />
                            </div>
                        </article>
                        <article className="testimonial col-md-6 py-3 py-md-0 d-flex">
                            <img src={Avatar1} alt="avatar" width='100px' height="100px" />
                            <div className="text px-3">
                                <h4 style={{ margin: 0 }}>Gbetor Fiifi Musah</h4>
                                <small className="text-secondary">PRO, Some Company Ltd.</small>
                                <p style={{ maxWidth: '400px', margin: 0, fontStyle: 'italic' }}>Optio blanditiis qui pariatur maiores sequi accusantium molestiae minus, ut</p>
                                <img src={FiveStars} alt="4.5 stars" width="100px" />
                            </div>
                        </article>
                    </div >
                </div >
            </div >
        </section >
    )
}

export default Testimonial;
