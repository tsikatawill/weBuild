import React from 'react'
import RoundedCard from './RoundedCard'
import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'
import Twitter from '../images/twitter.svg'


const DoMore = () => {
    return (
        <section className="do-more">
            <div className="container py-5 mb-5">
                <div className="row">
                    <div className="left col-md-6">
                        <RoundedCard classlist='bg-dark text-white' c_style={{ borderRadius: '10px ', width: 'fit-content' }} contents={
                            <>
                                <p><strong>Reach out through Social Media</strong></p>
                                <div className="social-handles">
                                    <div className="handle d-flex align-items-start">
                                        <img src={Facebook} alt="facebook" />
                                        <div className="text">
                                            <p style={{ margin: 0 }}><strong>@yourfacebookhandle</strong></p>
                                            <p>Some interesting facebook post</p>
                                        </div>
                                    </div>
                                    <div className="handle d-flex align-items-start">
                                        <img src={Instagram} alt="instagram" />
                                        <div className="text">
                                            <p style={{ margin: 0 }}><strong>@yourinstagramhandle</strong></p>
                                            <p>Some interesting instagram photos</p>
                                        </div>
                                    </div>
                                    <div className="handle d-flex align-items-start">
                                        <img src={Twitter} alt="twitter" />
                                        <div className="text">
                                            <p style={{ margin: 0 }}><strong>@yourtwitterhandle</strong></p>
                                            <p>Some interesting twitter photos</p>
                                        </div>
                                    </div>
                                </div>

                            </>
                        } />
                    </div>
                    <div className="right col-md-6 my-5 my-md-0">
                        <div className="text" style={{ width: '500px', maxWidth: '100%' }}>
                            <p style={{ margin: 0 }}>Do more with your website</p>
                            <h2>Take charge of your website as soon as it goes live</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus atque ipsa fugiat, iste enim nesciunt similique. Architecto, sint magni illum aperiam consectetur unde a, laborum totam voluptatibus esse inventore iure?</p>
                        </div>
                        <button className="btn btn-primary">
                            Learn how
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DoMore