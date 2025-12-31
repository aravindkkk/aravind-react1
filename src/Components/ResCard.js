import { addItemToCart } from "../utils/addToCartSlices";
import { res_img_url } from "../utils/constants";
import { useDispatch } from "react-redux";

const ResCard = (props) => {
    const { resData } = props;
      const {
            cloudinaryImageId,
            name,
            avgRating,
            costForTwo,
            sla,
        } = resData;

        const cuisines = resData?.info?.cuisines || [];



    const dispatch = useDispatch();  
    
    const addCartHandler = (item) => {
        dispatch(addItemToCart(item));

    } ;

    return (
        <div data-testid="resCard" className="m-4 p-4 w-62.5 h-100 rounded-lg font-serif bg-gray-200 hover:bg-slate-300">
                    <img
                    className="rounded-md"
                    alt="res-logo"
                    src={ res_img_url + cloudinaryImageId } />
                <h3 className="font-bold py-2 text-lg">{name}</h3>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{avgRating}Stars</h4>
                <h4>₹{costForTwo}</h4>
                <h4>{sla?.slaString}</h4>
                <button className="mt-2 p-2 bg-green-500 rounded-md text-white hover:bg-green-700 cursor-pointer"
                onClick={() => addCartHandler(resData)}
                >Add to Cart</button>
        </div>
    )
}

export const withPromotedLabel = (ResCard) => {

   return (props) => {
    return (
        <div>
            <span className="bg-purple-500 text-white absolute m-2 p-1 rounded-md text-sm">PROMOTED</span>
            <ResCard {...props} />
        </div>
    );
};

};


export default ResCard;