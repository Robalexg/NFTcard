import './Card.css'


const Card = () => {
    return (
        <section className='card--container'>
            <div className='card--imgcontainer'>
                <img className='card--img' src="../images/image-equilibrium.jpg" alt="" />
                <div className='card--overlay'>
                    <img src="../images/icon-view.svg" alt="" />
                </div>
            </div>
            <h1 className='card--title' >Equilibrium #3429 </h1>
            <h2 className='card--desc'>
                Our Equilibrium collection promotes balance and calm. 
            </h2>
            <div className='card--row'>
                <img className='card--ethlogo' src="../images/icon-ethereum.svg" alt="" />
                <h3 className='card--price'>0.041ETH</h3>
                <img className='card--clock' src="../images/icon-clock.svg" alt="" />
                <h3 className='card--days' >3 days left</h3>
            </div>
            <hr className='card--line'/>
            <div className='card--profile'>
                <img className='card--avatar' src="../images/image-avatar.png" alt="" />
                <h2 className='card--user'>
                    Creation of <span className='bold'>Jules Wyvern</span> 
                </h2>
            </div>


        </section>
    )
}

export default Card