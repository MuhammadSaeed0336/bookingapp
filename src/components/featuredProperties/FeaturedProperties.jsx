import './featuredProperties.css'

const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $100</span>
        <span className="fpRating">
            <button>6.5</button>
            <span>Excellent</span>
        </span>
        </div>
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/280950287.webp?k=b984c542b8b1a2ee0e019e4491da338a85b660caa10c5e1197225c5f3052d629&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $100</span>
        <span className="fpRating">
            <button>6.5</button>
            <span>Excellent</span>
        </span>
        </div>
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $100</span>
        <span className="fpRating">
            <button>6.5</button>
            <span>Excellent</span>
        </span>
        </div>
    </div>
  )
}

export default FeaturedProperties