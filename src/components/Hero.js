import React from 'react'
import RightImg from '../images/left-hero-image.svg'

const Hero = () => {
    return (
        <section className='hero' id='hero'>
            <div className="container py-5">
                <div className="row">
                    <div className="left col-md-6 text-center">
                        <img src={RightImg} alt="right" className='img-fluid' />
                    </div>
                    <div className="right col-md-6 p-4">
                        <div className="text" style={{ width: '500px', maxWidth: '100%' }}>
                            <h1>At WeBuild, we are commited to providing customers with the best websites</h1>
                            <p>We take customer requests very seriously to provide the most functional end products that look stunning as well</p>
                            <button className="btn btn-primary">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
