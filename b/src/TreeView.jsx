import MenuList from "./MenuList";

const TreeView = ({Menu = []}) => {
  return (
    <>
      <MenuList List={Menu} />
    </>
  );
};

export default TreeView;
