import React from 'react'

const WishlistItem = ({ likedItem }) => {

    const removeLikeHandler = () => {
        console.log("Item Removed from wishlist");
    }

    return (
        <div className="px-4 my-5 bg-light rounded-3">
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img
                            src={likedItem.image}
                            alt={likedItem.title}
                            height="200px"
                            width="180px"
                        />
                    </div>
                    <div className="col-md-4">
                        <h3>{likedItem.title}</h3>
                        <button onClick={() => removeLikeHandler(likedItem.id)} className="btn btn-outline-dark mt-4">
                            Remove Item
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
  

export default WishlistItem