import '../css/Sidebar.css'
import { useDispatch } from 'react-redux'
import { setCategories } from '../features/FilterSlice';

const Sidebar = () => {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const selectedCategories = formData.getAll("category");
      dispatch(setCategories(selectedCategories));
  };
  
  return (
    <div className="sidebar">
        <h2>Filters</h2>
        <hr></hr>
        <form onSubmit={handleSubmit}>
          <div className="filter-option">
            <label for="caps">Caps</label>
            <input type="checkbox" value="caps"  id='caps' name="category"></input>
          </div>
          <div className="filter-option">
            <label for="shoes">Shoes</label>
            <input type="checkbox" value="shoes"  id='shoes' name="category"></input>
          </div>
          <div className="filter-option">
            <label for="T-shirts">T Shirts</label>
            <input type="checkbox" value="T-shirts"  id='T-shirts' name="category"></input>
          </div>
          <div className="filter-option">
            <label for="shorts">Shorts</label>
            <input type="checkbox" value="shorts"  id='shorts' name="category"></input>
          </div>
          <div className="filter-option">
            <label for="jacket">Jacket</label>
            <input type="checkbox" value="jacket"  id='jacket' name="category"></input>
          </div>

          <button>Filter</button>
        </form>
    </div>
  )
}

export default Sidebar