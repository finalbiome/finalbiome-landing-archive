import React from "react";

function ItemList({ list, title, className }) {
  return (
    <div className={className}>
      <div className="item_list__title">

      <span >{title}</span>
      </div>
      <ul className="item_list__list">
        {list.map((element) => {
          return (
            <li>
              {/* <div> */}
              <div>

                <svg
                  width="2vh"
                  height="2vh"
                  viewBox="0 0 20 2"
                  >
                  <path
                    d="M0 1H20"
                    stroke="url(#paint0_linear_42_275)"
                    stroke-width="1.5"
                    />
                  <defs>
                    <linearGradient
                      id="paint0_linear_42_275"
                      x1="0.521472"
                      y1="1.175"
                      x2="11.2344"
                      y2="8.84489"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2DEA40" />
                      <stop offset="1" stop-color="#BFFF37" />
                    </linearGradient>
                  </defs>
                </svg>
                      </div>
              {/* </div> */}
              <div>

              <span className="item_list__element_text">{element.text}</span>
              <span className="item_list__element_additional">
                {element.additional}
              </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ItemList;
