import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "mens",
          imageUrl:
            "https://www.thefashionisto.com/wp-content/uploads/2020/05/Guy-in-Colorful-White-Suit-Look-800x534.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
        {
          title: "womens",
          imageUrl:
            "https://media1.popsugar-assets.com/files/thumbor/-hwJ6xTFUiT3MTLzb9YmjHPNHaU/1535x0:6999x5464/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2021/06/30/863/n/1922564/1b4606b060dcc95e91f871.50158233_/i/internet-famous-women-clothes-on-amazon.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
