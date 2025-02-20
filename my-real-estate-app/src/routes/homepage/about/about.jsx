
import "./about.scss";

function About() {
  return (
    <div className="about">
      {/* Our Mission Section */}
      <section className="mission">
        <h2>🌟 Our Mission</h2>
        <p>
          At <strong>SGWEstate</strong>, we are dedicated to connecting people with their dream homes. 
          <br />✨ <strong>Transparency</strong>, 🌐 <strong>Professionalism</strong>, and 💻 <strong>Cutting-Edge Technology</strong> are at the core of everything we do.
        </p>
        <ul>
          <li>🏠 Making dream homes a reality</li>
          <li>💬 Providing clear and honest communication</li>
          <li>🚀 Staying ahead with innovative tools</li>
        </ul>
      </section>

      {/* Our Vision Section */}
      <section className="vision">
        <h2>🚀 Our Vision</h2>
        <p>
          To become the <strong>leading real estate platform</strong>, setting the 🌟 gold standard for property buying, selling, and renting.
        </p>
        <div className="highlights">
          <div>🏆 Industry-Leading Practices</div>
          <div>🔑 Exclusive Property Listings</div>
          <div>👩‍💻 Trusted by Thousands</div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story">
        <h2>📖 Our Story</h2>
        <p>
          🌟 Founded in <strong>2013</strong>, SGWEstate started as a small team passionate about real estate. 
          Today, we’ve evolved into a trusted platform helping 🌍 **thousands** find their perfect homes.
        </p>
        <blockquote>
          <p>“Transforming the way people buy, sell, and rent homes.”</p>
          <footer>- SGWEstate Team</footer>
        </blockquote>
        <ul>
          <li>📈 Over 5,000 happy customers served</li>
          <li>🏡 1,000+ properties listed</li>
          <li>🌟 Featured in top real estate publications</li>
        </ul>
      </section>

      {/* What Our Clients Say Section */}
      <section className="testimonials">
        <h2>💬 What Our Clients Say</h2>
        <div className="testimonial">
          <p>“SGWEstate made buying our dream home effortless. Their team is professional, responsive, and truly cares about their clients.”</p>
          <footer>— Jane Doe</footer>
        </div>
        <div className="testimonial">
          <p>“A seamless experience from start to finish. Highly recommend SGWEstate!”</p>
          <footer>— John Smith</footer>
        </div>
        <div className="testimonial">
          <p>“Best property buying experience! SGWEstate ensured we had all the support we needed. The service is top-notch!”</p>
          <footer>— Michael Brown</footer>
        </div>
      </section>
    </div>
  );
}

export default About;
