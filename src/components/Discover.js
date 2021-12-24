import React from 'react'
import Unlock from '../images/unlock-icon.svg'
import Sync from '../images/sync-icon2.svg'

const Discover = () => {
    return (
        <section className='discover' id='discover' style={{ background: 'var(--primary-light)', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)' }}>
            <div className="container py-5 justify-content-between">
                <div className="row align-items-center">
                    <div className="left py-4 py-lg-0 col-lg-5">
                        <p style={{ margin: '0' }} className='text-secondary'>Discover more</p>
                        <h2 style={{ width: '400px', maxWidth: '100%' }}>Convey your business ideas through your website</h2>
                    </div>
                    <div className="right col-lg-7 d-sm-flex jsutify-content-between">
                        <article className="access d-flex align-items-start">
                            <img src={Unlock} alt="unlock-icon" style={{ width: '30px' }} />
                            <div className="text px-3">
                                <h4>Accessible</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni doloribus adipisci fugiat ducimus nobis itaque reprehenderit optio molestiae impedit earum laboriosam, iusto sed fugit explicabo! Tempora a enim</p>
                            </div>
                        </article>
                        <article className="access d-flex align-items-start">
                            <img src={Sync} alt="unlock-icon" style={{ width: '30px' }} />
                            <div className="text px-3">
                                <h4>Synchronise</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni doloribus adipisci fugiat ducimus nobis itaque reprehenderit optio molestiae impedit earum laboriosam, iusto sed fugit explicabo! Tempora a enim</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discover
