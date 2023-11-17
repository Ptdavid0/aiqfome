import React from "react";

import { useTicket } from "../../contexts/TicketContext/TicketContext";

import { ButtonContainer } from "./styles";

interface PlusButtonComponentProps {
  active: boolean;
}

const PlusButtonComponent: React.FC<PlusButtonComponentProps> = ({
  active,
}) => {
  const { increaseQuantity } = useTicket();

  const fillColor = active ? "#00A296" : "#C4C4C4";
  const strokeColor = active ? "#00A296" : "#C4C4C4";

  return (
    <ButtonContainer onClick={increaseQuantity}>
      <svg
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1201_1645)">
          <path
            d="M21.3339 16.5001C21.334 16.3687 21.3081 16.2386 21.2579 16.1172C21.2076 15.9958 21.1339 15.8856 21.041 15.7927C20.9481 15.6998 20.8379 15.6261 20.7165 15.5758C20.5951 15.5256 20.465 15.4997 20.3336 15.4998H16.9998L16.9998 12.1315C16.9907 11.8725 16.8814 11.6272 16.695 11.4473C16.5086 11.2673 16.2596 11.1667 16.0005 11.1667C15.7414 11.1667 15.4924 11.2673 15.3059 11.4473C15.1195 11.6272 15.0102 11.8725 15.0011 12.1315L15.0011 15.4998H11.6673C11.5359 15.4998 11.4059 15.5256 11.2845 15.5759C11.1631 15.6262 11.0529 15.6999 10.96 15.7927C10.8671 15.8856 10.7934 15.9959 10.7431 16.1173C10.6929 16.2386 10.667 16.3687 10.667 16.5001C10.667 16.6314 10.6929 16.7615 10.7431 16.8829C10.7934 17.0043 10.8671 17.1145 10.96 17.2074C11.0529 17.3003 11.1631 17.374 11.2845 17.4243C11.4059 17.4745 11.5359 17.5004 11.6673 17.5004H15.0011L15.0011 20.8331C15.0011 20.9645 15.027 21.0945 15.0772 21.2159C15.1275 21.3373 15.2012 21.4475 15.2941 21.5404C15.387 21.6333 15.4972 21.707 15.6186 21.7573C15.74 21.8075 15.87 21.8334 16.0014 21.8334C16.1328 21.8334 16.2628 21.8075 16.3842 21.7573C16.5056 21.707 16.6158 21.6333 16.7087 21.5404C16.8016 21.4475 16.8753 21.3373 16.9256 21.2159C16.9759 21.0945 17.0017 20.9645 17.0017 20.8331L17.0017 17.5004H20.3355C20.6005 17.5 20.8545 17.3944 21.0417 17.2068C21.2289 17.0193 21.334 16.7651 21.3339 16.5001Z"
            fill="#00A296"
          />
        </g>
        <rect
          x="0.5"
          y="1"
          width="31"
          height="31"
          rx="15.5"
          stroke={strokeColor}
        />
        <defs>
          <clipPath id="clip0_1201_1645">
            <rect y="0.5" width="32" height="32" rx="16" fill={fillColor} />
          </clipPath>
        </defs>
      </svg>
    </ButtonContainer>
  );
};

export default PlusButtonComponent;
