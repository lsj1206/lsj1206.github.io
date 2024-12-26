// DropDown Icon Button Component
import React, { useState, useRef, useEffect } from "react";
import { styled } from "../../styles/Theme";
// Components
import IconButton from "./IconButton";

const DDIconButton = ({ className, onClick, size = [30, 30], list, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // 드롭다운 토글
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <DropDownContainer className={className} ref={menuRef}>
      <IconButton size={size} onClick={toggleMenu} icon={icon} />
      {isOpen && (
        <DropdownList size={size}>
          {list.map((item, index) => (
            <DropdownItem
              key={index}
              onClick={() => {
                onClick(item);
                setIsOpen(false);
              }}
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  position: relative;
`;

const DropdownList = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  position: absolute;
  top: ${({ size }) => size[1] - 5}px;
  right: 10px;
  background-color: ${({ theme }) => theme.btn};
  border-radius: 0.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.div`
  padding: 8px 16px;
  color: ${({ theme }) => theme.btnText};
  font-size: 0.75rem;
  font-weight: bolder;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.btnActive};
    color: ${({ theme }) => theme.btnActiveText};
  }
`;

export default DDIconButton;
