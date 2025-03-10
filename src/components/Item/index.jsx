import ItemArrow from "../ItemArrow";
import Folder from "../Folder";
import { useState } from "react";

const Item = ({ name, fillColor, hideContent, handleHideContent, children }) => {
  const [itemOpen, setItemOpen] = useState(false)
  const handleClickItem = () => {
    setItemOpen(prev => !prev)
    handleHideContent()
  }

  return (
    <li className="flex flex-col gap-2">
      <div className="flex gap-2" onClick={handleClickItem}>
        <ItemArrow itemOpen={itemOpen} />
        <Folder fillColor={fillColor} />
        {name}
      </div>

      <div id='item-content' className={`px-5 py-2 ${hideContent ? 'hidden' : ''}`}>
        {children}
      </div>
    </li>
  );
};

export default Item;