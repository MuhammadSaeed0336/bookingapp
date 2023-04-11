import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/xphoto/720x405/205918746.webp?k=db2a6745e933637cea7eb8006ebcd57f220b3d26315e16b4a6df1cb81b3e8eda&o=" alt="" className="siImg" />
    <div className="siDesc">
    <h1 className="siTitle">Tower Street Aprtments</h1>
    <span className="siDistance">50m from center</span>
    <span className="siTaxiOp">Free airpot taxi</span>
    <span className="siSubtitle">
        Studio aparttemnent with air condtioning
    </span>
    <span className="siFeatures">
        Entire Studio - 1 Bathroom - 21m 1 full bed
    </span>
    <span className="siCancelOp">Free Cancellation</span>
    <span className="siCancelOpSubtitle">
        You can cancel later, so lock in this great price today!
    </span>
    </div>
    <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>6.5</button>
        </div>
        <div className="siDetailsTexts">
            <span className="siPrice">$100</span>
            <span className="siTaxOp">Included taxes and fees</span>
            <button className="siCheckButton">See Availability</button>
        </div>
    </div>
    </div>
  )
}

export default SearchItem