import './CurrentProducts.sass'

const CurrentProducts = ({title, img}) => {
    return (
        <div className="container">
            <div className='current-products'>
                <h1 className='title'>{title}</h1>
                <div className='current-products__wrapper'>
                    <div>
                        <div className='current-products__img'><img src={img} alt="" /></div>
                        <div className='current-products__title'>Porsche strålkastare, stulen igår</div>
                        <div className='current-products__price'>Price: <span>3000 kr</span></div>
                    </div>
                    <div>
                        <div className='current-products__img'><img src={img} alt="" /></div>
                        <div className='current-products__title'>Porsche strålkastare, stulen igår</div>
                        <div className='current-products__price'>Price: <span>3000 kr</span></div>
                    </div>
                    <div>
                        <div className='current-products__img'><img src={img} alt="" /></div>
                        <div className='current-products__title'>Porsche strålkastare, stulen igår</div>
                        <div className='current-products__price'>Price: <span>3000 kr</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CurrentProducts;