import ItemArrow from "../ItemArrow";
import Folder from "../Folder";
import { useState } from "react";

const Item = ({ name, fillColor, children }) => {
  const [itemOpen, setItemOpen] = useState(false)
  const handleClickItem = () => setItemOpen(prev => !prev)

  return (
    <li className="flex flex-col gap-2" onClick={handleClickItem}>
      <div className="flex gap-2">
        <ItemArrow itemOpen={itemOpen} />
        <Folder fillColor={fillColor} />
        {name}
      </div>

      <div id='item-content' className="px-5 py-2">
        {children}
      </div>
    </li>
  );
};

export default Item;