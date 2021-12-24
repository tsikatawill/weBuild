import React from 'react'
import Search from '../images/search.svg'
import Cog from '../images/cog.svg'
import Rollout from '../images/rollout.svg'
import RoundedCard from './RoundedCard'

const How = () => {
    return (
        <section className='how'>
            <div className="container py-5">
                <div className="section-header mb-5">
                    <h2>How we operate</h2>
                    <p>We oversee all our projects in three effective yet simple steps</p>
                </div>
                <div className="cards d-md-flex">
                    <RoundedCard contents={
                        <div className="card-content text-center">
                            <img src={Search} alt="search" className="mb-3" />
                            <div className="text">
                                <p className='card-title'><strong>Discover user needs</strong></p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam aspernatur minima repellendus aperiam eveniet dolorem dicta consectetur reiciendis. Autem, explicabo!</p>
                            </div>
                        </div>
                    } />
                    <RoundedCard contents={
                        <div className="card-content text-center">
                            <img src={Cog} alt="cog" className="mb-3" />
                            <div className="text">
                                <p className='card-title'><strong>Work out technicalities</strong></p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam aspernatur minima repellendus aperiam eveniet dolorem dicta consectetur reiciendis. Autem, explicabo!</p>
                            </div>
                        </div>
                    } />
                    <RoundedCard contents={
                        <div className="card-content text-center">
                            <img src={Rollout} alt="rollout" className="mb-3" />
                            <div className="text">
                                <p className='card-title'><strong>Rollout finished product</strong></p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam aspernatur minima repellendus aperiam eveniet dolorem dicta consectetur reiciendis. Autem, explicabo!</p>
                            </div>
                        </div>
                    } />
                </div>
                <div className="cta mt-5">
                    <button className="btn btn-primary">
                        Work with us
                    </button>
                </div>
            </div>
        </section >
    )
}

export default How
