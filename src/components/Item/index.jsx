import ItemArrow from "../ItemArrow";
import Folder from "../Folder";
import { useState } from "react";

const Item = ({ fillColor, children }) => {
  const [itemOpen, setItemOpen] = useState(false)
  const handleClickItem = () => setItemOpen(prev => !prev)

  return (
    <li className="flex gap-2" onClick={handleClickItem}>
      <ItemArrow itemOpen={itemOpen} />
      <Folder fillColor={fillColor} />
      {children}
    </li>
  );
};

export default Item;