import { res_img_url } from "../utils.js/constants";

const ResCard = (props) => {
    const { resData } = props;
      const {
            cloudinaryImageId,
            name,
            cuisines,
            avgRating,
            costForTwo,
            deliveryTime,
        } = resData?.data;

    return (
        <div className="res-card">
                    <img
                    className="res-img"
                    alt="res-logo"
                    src={ res_img_url + cloudinaryImageId } />
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}Stars</h4>
                <h4>₹{costForTwo / 100} For two</h4>
                <h4>{deliveryTime}minutes</h4>
        </div>
    )
}


export default ResCard;