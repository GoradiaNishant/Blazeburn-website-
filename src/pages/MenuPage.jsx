import { useEffect, useState } from 'react';
import styles from './MenuPageDrillIn.module.css';
import './MenuPage.css';

function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCuisine, setActiveCuisine] = useState('north-indian');

  // Complete menu data with 16 cuisines
  const menuData = [
    {
      id: "north-indian",
      name: "North Indian",
      headerImage: "/images/cuisines/north_india.png",
      items: [
        { name: "Paneer Butter Masala", isJain: true },
        { name: "Dal Makhani", isJain: false },
        { name: "Shahi Paneer", isJain: true },
        { name: "Chole Bhature", isJain: false },
        { name: "Aloo Gobi", isJain: true },
        { name: "Palak Paneer", isJain: false },
        { name: "Rajma Chawal", isJain: false },
        { name: "Kadai Paneer", isJain: true },
        { name: "Malai Kofta", isJain: true },
        { name: "Amritsari Kulcha", isJain: false },
      ]
    },
    {
      id: "gujarati",
      name: "Gujarat (Ahmedabad Focused)",
      headerImage: "/images/cuisines/gujarat.png",
      items: [
        { name: "Dhokla", isJain: true },
        { name: "Khandvi", isJain: true },
        { name: "Thepla", isJain: true },
        { name: "Undhiyu", isJain: false },
        { name: "Gujarati Thali", isJain: true },
        { name: "Fafda Jalebi", isJain: true },
        { name: "Handvo", isJain: false },
        { name: "Khaman", isJain: true },
        { name: "Sev Tameta", isJain: true },
        { name: "Gujarati Kadhi", isJain: true },
      ]
    },
    {
      id: "maharashtra",
      name: "Maharashtra",
      headerImage: "/images/cuisines/maharashtra.png",
      items: [
        { name: "Pav Bhaji", isJain: false },
        { name: "Misal Pav", isJain: false },
        { name: "Vada Pav", isJain: false },
        { name: "Puran Poli", isJain: true },
        { name: "Maharashtrian Thali", isJain: false },
        { name: "Sabudana Khichdi", isJain: true },
        { name: "Thalipeeth", isJain: true },
        { name: "Batata Vada", isJain: false },
      ]
    },
    {
      id: "south-indian",
      name: "South Indian",
      headerImage: "/images/cuisines/south_india.png",
      items: [
        { name: "Masala Dosa", isJain: false },
        { name: "Idli Sambar", isJain: false },
        { name: "Medu Vada", isJain: false },
        { name: "Uttapam", isJain: false },
        { name: "South Indian Thali", isJain: false },
        { name: "Rava Dosa", isJain: false },
        { name: "Pongal", isJain: false },
        { name: "Coconut Chutney", isJain: true },
        { name: "Filter Coffee", isJain: true },
      ]
    },
    {
      id: "east-indian",
      name: "East Indian",
      headerImage: "/images/cuisines/east_india.png",
      items: [
        { name: "Bengali Thali", isJain: false },
        { name: "Aloo Posto", isJain: false },
        { name: "Cholar Dal", isJain: true },
        { name: "Luchi", isJain: true },
        { name: "Rasgulla", isJain: true },
        { name: "Sandesh", isJain: true },
        { name: "Mishti Doi", isJain: true },
      ]
    },
    {
      id: "central-indian",
      name: "Central Indian",
      headerImage: "/images/cuisines/central_india.png",
      items: [
        { name: "Bhutte Ka Kees", isJain: false },
        { name: "Poha Jalebi", isJain: true },
        { name: "Dal Bafla", isJain: false },
        { name: "Chakki Ki Shaak", isJain: true },
        { name: "MP Thali", isJain: false },
        { name: "Mawa Bati", isJain: true },
      ]
    },
    {
      id: "street-food",
      name: "Indian Street Food",
      headerImage: "/images/cuisines/street_food.png",
      items: [
        { name: "Pani Puri", isJain: false },
        { name: "Bhel Puri", isJain: false },
        { name: "Sev Puri", isJain: false },
        { name: "Dahi Puri", isJain: false },
        { name: "Aloo Tikki Chaat", isJain: false },
        { name: "Papdi Chaat", isJain: false },
        { name: "Raj Kachori", isJain: false },
        { name: "Samosa Chaat", isJain: false },
      ]
    },
    {
      id: "indian-desserts",
      name: "Indian Desserts",
      headerImage: "/images/cuisines/indian_desserts.png",
      items: [
        { name: "Gulab Jamun", isJain: true },
        { name: "Jalebi", isJain: true },
        { name: "Rasmalai", isJain: true },
        { name: "Kulfi", isJain: true },
        { name: "Gajar Halwa", isJain: true },
        { name: "Moong Dal Halwa", isJain: true },
        { name: "Shahi Tukda", isJain: true },
        { name: "Phirni", isJain: true },
      ]
    },
    {
      id: "italian",
      name: "Italian",
      headerImage: "/images/cuisines/italian.png",
      items: [
        { name: "Margherita Pizza", isJain: true },
        { name: "Pasta Alfredo", isJain: true },
        { name: "Penne Arrabbiata", isJain: false },
        { name: "Risotto", isJain: true },
        { name: "Bruschetta", isJain: false },
        { name: "Caprese Salad", isJain: true },
        { name: "Tiramisu", isJain: true },
      ]
    },
    {
      id: "chinese",
      name: "Chinese / Indo-Chinese",
      headerImage: "/images/cuisines/chinese.png",
      items: [
        { name: "Hakka Noodles", isJain: false },
        { name: "Veg Fried Rice", isJain: false },
        { name: "Manchurian", isJain: false },
        { name: "Chilli Paneer", isJain: false },
        { name: "Spring Rolls", isJain: true },
        { name: "Szechwan Noodles", isJain: false },
        { name: "Hot & Sour Soup", isJain: false },
      ]
    },
    {
      id: "mexican",
      name: "Mexican",
      headerImage: "/images/cuisines/mexican.png",
      items: [
        { name: "Veg Tacos", isJain: false },
        { name: "Bean Burrito", isJain: false },
        { name: "Quesadilla", isJain: true },
        { name: "Nachos Supreme", isJain: false },
        { name: "Guacamole", isJain: true },
        { name: "Enchiladas", isJain: false },
      ]
    },
    {
      id: "thai",
      name: "Thai",
      headerImage: "/images/cuisines/thai.png",
      items: [
        { name: "Pad Thai", isJain: false },
        { name: "Green Curry", isJain: false },
        { name: "Tom Yum Soup", isJain: false },
        { name: "Thai Fried Rice", isJain: false },
        { name: "Spring Rolls", isJain: true },
        { name: "Mango Sticky Rice", isJain: true },
      ]
    },
    {
      id: "japanese",
      name: "Japanese",
      headerImage: "/images/cuisines/japanese.png",
      items: [
        { name: "Veg Sushi Roll", isJain: true },
        { name: "Avocado Maki", isJain: true },
        { name: "Veg Ramen", isJain: false },
        { name: "Tempura", isJain: false },
        { name: "Edamame", isJain: true },
        { name: "Miso Soup", isJain: false },
      ]
    },
    {
      id: "middle-eastern",
      name: "Middle Eastern",
      headerImage: "/images/cuisines/middle_eastern.png",
      items: [
        { name: "Falafel Wrap", isJain: false },
        { name: "Hummus Platter", isJain: true },
        { name: "Shawarma", isJain: false },
        { name: "Mezze Platter", isJain: true },
        { name: "Pita Bread", isJain: true },
        { name: "Tabbouleh", isJain: false },
      ]
    },
    {
      id: "american",
      name: "American",
      headerImage: "/images/cuisines/american.png",
      items: [
        { name: "Veg Burger", isJain: false },
        { name: "Loaded Fries", isJain: false },
        { name: "Mac & Cheese", isJain: true },
        { name: "Grilled Sandwich", isJain: false },
        { name: "Coleslaw", isJain: true },
        { name: "Onion Rings", isJain: true },
      ]
    },
    {
      id: "continental",
      name: "Continental / Global Fusion",
      headerImage: "/images/cuisines/continental.png",
      items: [
        { name: "Grilled Vegetables", isJain: true },
        { name: "Fusion Bowl", isJain: false },
        { name: "Mediterranean Salad", isJain: true },
        { name: "Stuffed Mushrooms", isJain: false },
        { name: "Vegetable Steak", isJain: true },
        { name: "Soup of the Day", isJain: false },
      ]
    },
  ];

  const normalizedSearch = searchQuery.trim().toLowerCase();
  const isSearching = normalizedSearch.length > 0;

  const withDescriptions = menuData.map((category) => ({
    ...category,
    items: category.items.map((item) => ({
      ...item,
      description: item.isJain
        ? 'Jain option available'
        : 'Popular vegetarian choice',
    })),
  }));

  const groupedSearchResults = withDescriptions
    .map((category) => ({
      id: category.id,
      name: category.name,
      items: category.items.filter((item) =>
        item.name.toLowerCase().includes(normalizedSearch)
      ),
    }))
    .filter((category) => category.items.length > 0);

  const filteredMenuData = normalizedSearch
    ? menuData
        .map((category) => ({
          ...category,
          items: category.items.filter((item) =>
            item.name.toLowerCase().includes(normalizedSearch)
          ),
        }))
        .filter((category) => category.items.length > 0)
    : menuData;

  const handleCuisineClick = (e, cuisineId) => {
    e.preventDefault();
    const element = document.getElementById(cuisineId);
    if (!element) return;

    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
    setActiveCuisine(cuisineId);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) return;
      const sections = menuData.map((c) => document.getElementById(c.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveCuisine(menuData[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuData]);

  return (
    <div className="menu-page">
      <div className={styles.mobileOnly}>
        <div className={styles.page}>
          {selectedCategory === null ? (
            <div className={styles.menuPage}>
              <h1 className={styles.menuTitle}>Our Menu</h1>

              <div className={styles.searchWrapper}>
                <input
                  className={styles.searchInput}
                  type="text"
                  placeholder="Search menu items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search menu items"
                />
              </div>

              <div className={styles.categoryList}>
                {isSearching ? (
                  groupedSearchResults.length === 0 ? (
                    <p className={styles.noResults}>No items found</p>
                  ) : (
                    groupedSearchResults.map((group) => (
                      <section key={group.id} className={styles.groupSection}>
                        <p className={styles.groupLabel}>{group.name}</p>
                        <div className={styles.cardList}>
                          {group.items.map((item, idx) => (
                            <article key={`${group.id}-${idx}`} className={styles.itemCard}>
                              <p className={styles.itemName}>{item.name}</p>
                              <p className={styles.itemDescription}>{item.description}</p>
                            </article>
                          ))}
                        </div>
                      </section>
                    ))
                  )
                ) : (
                  withDescriptions.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      className={styles.categoryCard}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <div className={styles.categoryText}>
                        <p className={styles.categoryName}>{category.name}</p>
                        <p className={styles.categoryCount}>{category.items.length} items</p>
                      </div>
                      <span className={styles.arrow}>›</span>
                    </button>
                  ))
                )}
              </div>
            </div>
          ) : (
            <div className={styles.screenTwo}>
              <button
                type="button"
                className={styles.backButton}
                onClick={() => setSelectedCategory(null)}
              >
                ← Back
              </button>

              <h2 className={styles.screenHeading}>{selectedCategory.name}</h2>

              <div className={styles.cardList}>
                {selectedCategory.items.map((item, idx) => {
                  const description = item.isJain
                    ? 'Jain option available'
                    : 'Popular vegetarian choice';
                  return (
                    <article key={`${selectedCategory.id}-${idx}`} className={styles.itemCard}>
                      <p className={styles.itemName}>{item.name}</p>
                      <p className={styles.itemDescription}>{description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.desktopOnly}>
        <div className="menu-page-hero">
          <div className="container">
            <h1 className="menu-page-title">Our Complete Menu</h1>
            <p className="menu-page-subtitle">
              16 World Cuisines • 900+ Vegetarian Delicacies • Jain Options Available
            </p>
          </div>
        </div>

        <div className="search-bar-container">
          <div className="container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="menu-layout">
          <div className="container">
            <nav className="menu-sidebar">
              <h3>Cuisines</h3>
              <ul>
                {menuData.map((cuisine) => (
                  <li key={cuisine.id}>
                    <a
                      href={`#${cuisine.id}`}
                      className={activeCuisine === cuisine.id ? 'active' : ''}
                      onClick={(e) => handleCuisineClick(e, cuisine.id)}
                    >
                      {cuisine.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="menu-content">
              {filteredMenuData.length === 0 ? (
                <div className="no-results">
                  <p>No items found</p>
                </div>
              ) : (
                filteredMenuData.map((cuisine) => (
                  <section key={cuisine.id} id={cuisine.id} className="cuisine-section">
                    <div className="cuisine-header">
                      <img
                        src={cuisine.headerImage}
                        alt={cuisine.name}
                        className="cuisine-header-image"
                        loading="lazy"
                      />
                      <div className="cuisine-header-overlay">
                        <h2>{cuisine.name}</h2>
                      </div>
                    </div>

                    <div className="menu-items-grid">
                      {cuisine.items.map((item, idx) => (
                        <div key={idx} className="menu-item">
                          <div className="item-info">
                            <h4 className="item-name">
                              {item.name}
                              {item.isJain && (
                                <span className="jain-badge" title="Jain Available">
                                  J
                                </span>
                              )}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
