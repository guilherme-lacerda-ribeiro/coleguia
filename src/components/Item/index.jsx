import ItemArrow from "../ItemArrow";
import Folder from "../Folder";

const Item = ({ fillColor, children }) => {
  return (
    <li className="flex gap-2">
      <ItemArrow />
      <Folder fillColor={fillColor} />
      {children}
    </li>
  );
};

export default Item;