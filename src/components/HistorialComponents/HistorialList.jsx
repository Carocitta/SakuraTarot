import deleteicon from "../../assets/images/delete-icon.png";
import modify from "../../assets/images/modify-icon.png";

const HistorialList = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        {item.deleteIcon && (
          <img src={item.deleteIcon} alt="Delete Icon" width="30" />
        )}{" "}
        {item.modifyIcon && (
          <img src={item.modifyIcon} alt="Modify Icon" width="30" />
        )}{" "}
      </li>
    ))}
  </ul>
);

export default HistorialList;
