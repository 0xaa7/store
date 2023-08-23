
const CategoryHero = ( props ) => {
 
  return (
    <div className="category-hero">
      <div className="hero-image" style={{ backgroundImage: `url(${props.imageUrl})` }}></div>
      <div className="category-title">{props.title}</div>
    </div>
  );
};

export default CategoryHero;
