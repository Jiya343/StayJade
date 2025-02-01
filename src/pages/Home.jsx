import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const venues = [
    { name: "Golfing Twins", image: "/images/Golfing-twins.jpg", url: "https://www.airbnb.com.sg/rooms/846033256195478852?source_impression_id=p3_1737972047_P3QyuvV8Fc5ba9KE" },
    { name: "Azura Villa", image: "/images/Azura-villa.jpg", url: "https://www.airbnb.co.in/rooms/633862629688463513?locale=en&_set_bev_on_new_domain=1731748579_EAOTg5MzZlYWZmNW&source_impression_id=p3_1737972113_P3CG7TSG9ke0JMYX" },
    { name: "Aurora Gradeur", image: "/images/Aurora-grandeur.jpg", url: "https://www.airbnb.co.nz/rooms/1228854349697396582?source_impression_id=p3_1737972165_P3lcp8jELmvNj8d_" },
    { name: "Tranquil Haven", image: "/images/Tranquil-haven.jpg", url: "https://www.airbnb.mx/rooms/1150499339178485693?source_impression_id=p3_1737972220_P3Fo_SD1FLhq5XMT" }
];

const reviews = [
    {
        text: "StayJade made our wedding unforgettable with their stunning venue, elegant decor, and delicious food. Their attention to detail and seamless service created the perfect celebration. Highly recommend!",
        name: "Wedding", image: "/images/review-1.jpg"
    },
    {
        text: "StayJade made my Haldi ceremony unforgettable with their impeccable venue, stunning decor, and delicious food. The vibrant floral arrangements and thoughtful details created the perfect festive vibe, while the catering was a hit with all our guests. Highly recommend their professional and seamless service!",
        name: "Haldi Ceremony", image: "/images/review-2.jpg"
    },
    {
        text: "StayJade was the perfect choice for my Mehendi ceremony! The venue was beautifully decorated, and the team ensured everything ran smoothly. It was a magical and stress-free experience!",
        name: "Mehendi ceremony", image: "/images/review-3.jpg"
    },
    {
        text: "StayJade made my bachelorette party unforgettable! The venue was stunning, perfectly set up, and every detail was taken care of seamlessly. Highly recommend their services for a hassle-free and memorable celebration!",
        name: "Bachelorette Party", image: "/images/review-4.jpg"
    }
];


const Home = () => {
    return (
        <div className="home-container">
            <div className="row">
                {/* Main Image Section */}
                <div className="col-12 position-relative p-0">
                    <img src="/images/Home.png" alt="Background" className="home-image" />

                    {/* Form on Right Side - Visible only on desktop */}
                    <div className="overlay-form d-none d-md-block">
                        <h4>Contact Us</h4>
                        <form>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Name" required />
                            </div>
                            <div className="mb-2">
                                <input type="email" className="form-control" placeholder="Email" required />
                            </div>
                            <div className="mb-2">
                                <input type="tel" className="form-control" placeholder="Phone" required />
                            </div>
                            <div className="mb-2">
                                <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-50">Submit</button>
                        </form>
                    </div>

                </div>

                {/* Form Below Image - Visible only on mobile */}
                <div className="col-12 d-md-none p-4 bg-light">
                    <h4>Search Form</h4>
                    <form>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Destination" />
                        </div>
                        <div className="mb-2">
                            <input type="date" className="form-control" placeholder="Check-in" />
                        </div>
                        <div className="mb-2">
                            <input type="date" className="form-control" placeholder="Check-out" />
                        </div>
                        <div className="mb-2">
                            <input type="number" className="form-control" placeholder="Guests" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Search</button>
                    </form>
                </div>

                {/* Second Image Below the Form */}
                <div className="col-12 p-0">
                    <img src="/images/About.png" alt="Additional Image" className="about-image" />
                </div>
                <div className="col-12 p-0">
                    <img src="/images/Collection.png" alt="Additional Image" className="about-image" />
                </div>

                {/* Venues Section */}
                <div className="col-12 p-0 venues-section" style={{ backgroundImage: 'url(/images/bg-venues.png)' }}>
                    <h4 className="venues-title text-center">Our Venues</h4> {/* Title outside the container */}
                    <div className="container">
                        <div className="row">
                            {venues.map((venue, index) => (
                                <div key={index} className="col-12 col-md-6 mb-4">
                                    <a href={venue.url} className="venue-card d-block text-decoration-none" target="_blank">
                                        <div className="card">
                                            <img src={venue.image} alt={venue.name} className="img-fluid mb-3" />
                                            <h5>{venue.name}</h5>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Review Section */}
                <div className="col-12 p-3 reviews-section" style={{ backgroundImage: 'url(/images/bg-reviews.png)' }}>
                    <div className="container">
                        <h4>Reviews</h4>
                        <div className="row">
                            {reviews.map((review, index) => (
                                <div key={index} className="col-12 col-md-6 mb-4">
                                    <div className="review-wrapper">
                                        <div className="review-card position-relative">
                                            <img src={review.image} alt={`Review ${index + 1}`} className="review-img" />
                                            <div className="review-text position-absolute">
                                                <p>"{review.text}"</p>
                                            </div>
                                        </div>
                                        <h5 className="review-name">{review.name}</h5> {/* Name outside the card */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <footer className="footer-container" style={{ backgroundImage: 'url(/images/bg-footer.png)' }}>
                    <div className="container">
                        {/* Footer Image on the Left */}
                        <div className="footer-image-container">
                            <img src="/images/footer.jpg" alt="Footer Image" className="footer-image" />
                        </div>

                        {/* Footer Content on the Right */}
                        <div className="footer-content">
                            <h4>Get in Touch</h4>
                            <p>PHONE</p>
                            <p>(+91) 62062 20960</p>
                            <p>EMAIL</p>
                            <p>insta@jadecaps.com</p>
                            <div className="social-media">

                                <a href="https://www.youtube.com/watch?v=y-zn2dY6hj4&ab_channel=RockingSupport" target="_blank" >
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a href="https://www.instagram.com/stayjade_in/?igsh=MXZ5M3kxaHN0dDJnYQ%3D%3D#" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>


            </div>


            {/* Company Logo (Sticky Top Left) */}
            <div className="company-logo">
                <a href="/" >
                    <img src="/images/logo.png" alt="Company Logo" />
                </a>
            </div>

            <div className="whatsapp-icon">
                <a href="https://wa.me/+916206220960" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp" style={{ fontSize: "36px", color: "#25D366" }}></i>
                </a>
            </div>
        </div>


    );
};

export default Home;
