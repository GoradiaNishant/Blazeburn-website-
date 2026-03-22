import { Link } from 'react-router-dom';
import './MenuHighlights.css';

function MenuHighlights() {
  const menuCategories = [
    {
      title: 'Indian Delights',
      description: 'Authentic flavors from across India',
      items: ['Paneer Tikka', 'Dal Makhani', 'Biryani Specials'],
      image: '/images/indian_cuisine_food_1770051109657.png'
    },
    {
      title: 'Chinese Fusion',
      description: 'Indo-Chinese favorites with a twist',
      items: ['Manchurian', 'Hakka Noodles', 'Fried Rice'],
      image: '/images/chinese_fusion_food_1770051129581.png'
    },
    {
      title: 'Italian Classics',
      description: 'Pasta, pizzas, and more',
      items: ['Wood-Fired Pizza', 'Creamy Pasta', 'Risotto'],
      image: '/images/italian_cuisine_food_1770051146513.png'
    },
    {
      title: 'Mexican Fiesta',
      description: 'Spicy and flavorful Mexican treats',
      items: ['Tacos', 'Burritos', 'Quesadillas'],
      image: '/images/mexican_cuisine_food_1770051162328.png'
    },
    {
      title: 'Street Food',
      description: 'Quick bites and snacks',
      items: ['Pav Bhaji', 'Vada Pav', 'Dosa Varieties'],
      image: '/images/street_food_snacks_1770051179001.png'
    },
    {
      title: 'Beverages',
      description: 'Shakes, juices, and specialty drinks',
      items: ['Signature Shakes', 'Fresh Juices', 'Specialty Coffees'],
      image: '/images/beverages_drinks_1770051198662.png'
    }
  ];

  return (
    <section id="menu" className="menu-highlights section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Menu Highlights</h2>
          <p className="section-subtitle">
            Explore 900+ delicious vegetarian dishes across multiple cuisines
          </p>
        </div>
        <div className="menu-grid">
          {menuCategories.map((category, index) => (
            <div
              key={index}
              className="menu-card"
              style={{
                backgroundImage: `url(${category.image})`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="card-gradient-overlay">
                <h3>{category.title}</h3>
                <p className="menu-description">{category.description}</p>
                <Link to="/menu" className="view-details-btn">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="menu-cta">
          <p className="menu-note">And many more culinary delights await you!</p>
          <Link to="/menu" className="btn btn-primary">View Full Menu</Link>
        </div>
      </div>
    </section>
  );
}

export default MenuHighlights;

