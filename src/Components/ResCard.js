import { res_img_url } from "../utils/constants";

const ResCard = (props) => {
    const { resData } = props;
      const {
            cloudinaryImageId,
            name,
            cuisines,
            avgRating,
            costForTwo,
            sla,
        } = resData?.info;

    return (
        <div className="res-card">
                    <img
                    className="res-img"
                    alt="res-logo"
                    src={ res_img_url + cloudinaryImageId } />
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}Stars</h4>
                <h4>₹{costForTwo}</h4>
                <h4>{sla?.slaString}</h4>
        </div>
    )
}


export default ResCard;