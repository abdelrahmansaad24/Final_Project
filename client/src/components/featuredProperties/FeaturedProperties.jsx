import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  temp = "<!doctype html><html class="main_container" lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="description" content="Web site created using create-react-app"/><link rel="icon" href="logo.png"><style>*{font-family:"Open Sans",sans-serif;margin:0}@media screen and (max-width:1050px){html{width:fit-content}}</style><title>Sacan | Reservation System</title><script defer="defer" src="/static/js/main.e3cc187e.js"></script><link href="/static/css/main.ba82fe68.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div></body></html>"
  console.log(data)
  if (error) {
    console.error(error);
    return <div>Error loading featured properties.</div>;
  }

  return (
    <div className="fp">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data.toString() != temp ? (
            data.map((item) => (
              <div className="fpItem" key={item._id}>
                <img
                  src={item.photos[0]}
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                {item.rating && (
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div>No featured properties found.</div>
          )}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
