import React from 'react'

const SideItem = ({items}) => {
    const {name, links, open} = items;
    const {isOpen, setOpen} = React.useState(open);
  
  const openSideNav = () => {
    setOpen(!isOpen);
  };
    return (
    <div onClick={()=> openSideNav()}>
    <p>SideItem</p>
    {isOpen && links.map((link, index)=>{
        const {title, to}=link;
        return(
            <div key={index}>
            <a href={to}>
                <p>{title}</p>
            </a>
            </div>
    );
})}
    </div>
  );
};

export default SideItem