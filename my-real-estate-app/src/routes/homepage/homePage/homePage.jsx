import { Link } from "react-router-dom";
import { listData } from "../../../lib/properties";
import "./homePage.scss";


function HomePage() {
  return (
    <div className="homePage">
     
      <div className="heroSection">
        <h1>Find Your Perfect Home</h1>
        <p>Search from  listings and find your dream property today.</p>
        <div className="heroButtons">
          <Link to="/list" className="btn">Explore Properties</Link>
          <Link to="/contact" className="btn secondary">Contact Us</Link>
        </div>
      </div>

      <div className="introContainer">
          <div className="wrapper">
            <h1 className="title">Welcome to SGWEstate</h1>
            <p className="intro">
            SGWEstate is your trusted partner in finding the perfect home. With a legacy of years in the real estate industry, we pride ourselves on offering unparalleled expertise and personalized solutions for buying, renting, or selling properties. Our platform connects you to a wide range of properties, tailored to suit your unique preferences and needs.


            </p>
            <Link to="/about" className="readMore">
              Read More
            </Link>
          </div>
        </div>

       

      {/* Featured Properties */}
      <div className="propertiesSection">
          <h2 className="sectionTitle">Featured Properties</h2>
          <div className="properties">
            {listData.slice(0, 3).map((property) => (
              <div className="propertyCard" key={property.id}>
                <img src={property.picture} alt={property.type} />
                <h3>{property.type}</h3>
                <p>
                  ${property.price.toLocaleString()} | {property.bedrooms} Beds
                </p>
              </div>
            ))}
          </div>
          <Link to="/list" className="viewMore">
            View All Properties
          </Link>
        </div>

        <div className="whyChooseUs">
        <h2 className="sectionTitle">Why Choose SGWEstate?</h2>
        <div className="features">
          <div className="feature">
            <img src="https://media.istockphoto.com/id/121198814/photo/financial-planning-couple-getting-consulted.jpg?s=612x612&w=0&k=20&c=frAvw4n5nMvrjc0MCyfQ3w8WzWx3rFKrNAJ9A4JFbWQ=" alt="Expert Guidance" />
            <h3>Expert Guidance</h3>
            <p>
              Our team of real estate professionals ensures you get personalized
              advice, whether you are buying, renting, or selling.
            </p>
          </div>
          <div className="feature">
            <img src="https://img.freepik.com/free-vector/real-estate-searching-concept_23-2148667336.jpg" alt="Wide Range of Properties" />
            <h3>Wide Range of Properties</h3>
            <p>
              Explore thousands of properties, from cozy apartments to luxury
              villas, tailored to your preferences.
            </p>
          </div>
          <div className="feature">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_7_q6RRZi8RifyBEFiT82bA5mcE3LyraPQ&s" alt="Secure Transactions" />
            <h3>Secure Transactions</h3>
            <p>
              Enjoy a hassle-free and secure process, ensuring your investments
              are safe with SGWEstate.
            </p>
          </div>
          <div className="feature">
            <img src="https://img.freepik.com/premium-vector/character-male-call-center-support_18591-6361.jpg?semt=ais_hybrid" alt="24/7 Support" />
            <h3>24/7 Support</h3>
            <p>
              Our dedicated customer support team is here to assist you around
              the clock, making your journey seamless.
            </p>
          </div>
        </div>
      </div>

      

      {/* Quick Stats Section */}
      <div className="statsSection">
        <div className="stat">
          <h3>10+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat">
          <h3>200+</h3>
          <p>Awards Gained</p>
        </div>
        <div className="stat">
          <h3>6+</h3>
          <p>Properties Listed</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
