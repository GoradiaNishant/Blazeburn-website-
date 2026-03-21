import './Features.css';

function Features() {
  const features = [
    {
      title: 'Rooftop Café',
      description: 'Dine under the stars with panoramic city views',
      image: '/images/rooftop_cafe_view_1770051214536.png',
      color: 'var(--flame-orange)'
    },
    {
      title: 'Event Spaces',
      description: 'Private zones for celebrations and corporate events',
      image: '/images/event_space_celebration_1770051231037.png',
      color: 'var(--golden-yellow)'
    },
    {
      title: 'Gaming Zones',
      description: 'Interactive entertainment for all ages',
      image: '/images/gaming_zone_arcade_1770052104811.png',
      color: 'var(--sage-green)'
    },
    {
      title: 'Cultural Dining',
      description: 'Themed ambiances celebrating Indian heritage',
      image: '/images/cultural_dining_traditional_1770052121327.png',
      color: 'var(--sunset-red)'
    },
    {
      title: 'Live Music',
      description: 'Soulful performances enhancing your dining experience',
      image: '/images/live_music_performance_1770052138025.png',
      color: 'var(--spice-brown)'
    },
    {
      title: 'Delivery & Catering',
      description: 'Enjoy our flavors at home or your special events',
      image: '/images/delivery_catering_service_1770052156556.png',
      color: 'var(--flame-orange)'
    }
  ];

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience More Than Just Food</h2>
          <p className="section-subtitle">
            A complete destination for dining, entertainment, and celebrations
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
            >
              <div className="feature-card-inner">
                <div className="feature-image-container">
                  <img src={feature.image} alt={feature.title} className="feature-image" />
                </div>
                <div className="feature-card-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
