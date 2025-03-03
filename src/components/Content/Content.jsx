import "./Content.css";
import { FaTrashAlt } from "react-icons/fa";

const Content = ({items,handleCheck,handleDelete}) => {
 
  return (
    <div className="content">
        {items.length ? (
      <ul>
        {items.map((item) => (
          <li key={item.id} className="item">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label
              onDoubleClick={() => handleCheck(item.id)}
              style={item.checked ? { textDecoration: "line-through" } : null}
            >
              {item.item}
            </label>
            <FaTrashAlt
              role="button"
              tabIndex="0"
              onClick={() => handleDelete(item.id)}
              aria-label={`Delete ${item.item}`}
            />
          </li>
        ))}
      </ul> ) : ( <p>Your List is Empty!</p> )}
    </div>
  );
};

export default Content;
