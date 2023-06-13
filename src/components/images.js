import React, { Component } from "react";
import "./images.css";

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        // "https://sun9-70.userapi.com/impg/ICr18rHBmE6FZf0biwOvLsJifkBKIYMVQd7W0w/oD-Mp1AOBlE.jpg?size=1280x852&quality=96&sign=ed15aae9ac4429adc8001ee9028948dc&type=album",
        "https://sun9-19.userapi.com/impg/x_yw1Xrcjp7f6crchrMTdgg_u8Vn_7TiWAWJig/jSOfgNj5arc.jpg?size=1280x764&quality=95&sign=83cd55c4be4696dabb7389dfbad5cb67&type=album",
        "https://sun9-60.userapi.com/impg/DE-7XZJkC2HPfq5nNAioIALU4ctonlcsTktJAA/Ovsw1Eidzoc.jpg?size=865x1080&quality=96&sign=706b76cc07fd344ce299809c91a6d417&type=album",
        "https://sun9-58.userapi.com/impg/DxXC2j5huHPdzVjafEDAEe4D1fxTI9d7Pz5r8w/x1_udpFVcOI.jpg?size=1080x1080&quality=96&sign=1d2db2ca9cb6f76301f4dcc1ebb19a84&type=album",
        // "https://sun9-62.userapi.com/impg/nE1Um3jFG_z_X50QB8hZNQZXh394WfMfzzUttQ/VCZp8CL98a4.jpg?size=1920x1282&quality=96&sign=13fa72aa4ec6cfb6f7f2cbfaeadb08e9&type=album",
        // "https://sun9-31.userapi.com/impg/SQs53nx5PSQlr28HUP2D-GSBrt90iCfARzD8Fw/_f6nHcrfMP0.jpg?size=2560x1709&quality=95&sign=5333d855463aafba603cd1ff4b8a6964&type=album",
        // "https://sun9-1.userapi.com/impg/_YifqFkQKrIG3_LUrAPi2VOmLv7K0Dy2vs3dCA/CqPJjK_46xg.jpg?size=2560x1709&quality=95&sign=aabf375d1be8554798ad27e960620859&type=album",
        "https://sun9-61.userapi.com/impg/f2EAhvdm0TzXdIEMYbOpG89NdMIqzHNQ1Zei6Q/_l0eQMd7JeU.jpg?size=1280x877&quality=96&sign=f89a4aa2ca56c54e9df702ab39568f6c&type=album",
        // "https://sun9-17.userapi.com/impg/wiR_7ZbhKCIlSp3KE7A7e3XDcRzP2PrxejABIw/1KFUg5Bo8bw.jpg?size=1280x853&quality=96&sign=9bcb71240ae238a013dcf6e23dd146be&type=album",
        "https://sun9-17.userapi.com/impg/gGS1mCgud97SdCD8OV4TgubojOLe4ULHbM80Gg/wAWnxAzPcYQ.jpg?size=721x1080&quality=96&sign=ae47876f9ad5a6c75606ed3f2bb01c23&type=album",
        "https://sun9-57.userapi.com/impg/GxjYp8f9WGKiSd95ax9VgYKCfqu82UDNnwG-3w/cJ1T6Vp3Nkw.jpg?size=1280x855&quality=96&sign=a0168f7b77c98f5a101fc7b337889e48&type=album",
        "https://sun9-72.userapi.com/impg/U0Sc1EXzZCXgS_rPQ5xd36JYLpxv2g8aFDnhEA/DH6q2kbkbTI.jpg?size=1280x919&quality=96&sign=ca107b99a98999537f29d60549ecfbe5&type=album",
        "https://sun9-58.userapi.com/impg/9O9mV1GX2gElLpGRRUQ-f1vQt_wAvaamli9SfQ/R0R4pxq5htE.jpg?size=1280x853&quality=95&sign=cb8659e731a3ac28c240acd79e6c7517&type=album",
        "https://sun9-20.userapi.com/impg/hsjuftgPFP0Cp8wcDsBvyjJhsaIpvPJI5mqGdQ/8BmM2YOPTZ0.jpg?size=1619x2160&quality=95&sign=a98a37460bf48de2601b90a28e05e7bf&type=album",
        // "https://sun9-31.userapi.com/impg/SQs53nx5PSQlr28HUP2D-GSBrt90iCfARzD8Fw/_f6nHcrfMP0.jpg?size=2560x1709&quality=95&sign=5333d855463aafba603cd1ff4b8a6964&type=album",
        "https://sun9-26.userapi.com/impg/WV0mlrrAZyUf2R-8-E4SFkUh0xsLJqX5O95tsg/js16pBpmUJU.jpg?size=734x1080&quality=96&sign=f90ee7b1e07435aaec2106c35902e1bd&type=album",
        // "https://sun9-62.userapi.com/impg/nE1Um3jFG_z_X50QB8hZNQZXh394WfMfzzUttQ/VCZp8CL98a4.jpg?size=1920x1282&quality=96&sign=13fa72aa4ec6cfb6f7f2cbfaeadb08e9&type=album",
        "https://sun9-24.userapi.com/impg/w1i3pW5-FjvXCSS6XTvUi5T0CX61BCQLhwI48Q/oZQYaSS95JY.jpg?size=1280x798&quality=95&sign=720c659c6dc27286ba93d1ab4ab8063d&type=album",
        "https://sun9-4.userapi.com/impg/T4fvxRAheKX1jKYNwGpyEa-lO3ykunZ4wVcE-g/yNS7-NaCM7M.jpg?size=865x1080&quality=96&sign=a38d3917dd150b59dd8c5246831f316e&type=album",
        // "https://sun9-56.userapi.com/impg/KCB1e19xwwnNM6woCM1ZBMG_ZYakVG-ql__uRg/3rPKggiJiSI.jpg?size=1000x575&quality=95&sign=e22d6fd5cf2eef4f81edf4749d99d938&type=album",
        "https://sun9-33.userapi.com/impg/TnIgJ-DBAjcobWUJ1ikEQIW-p_hh2xLWTFRYnA/4NcJre_xCY8.jpg?size=721x1080&quality=96&sign=1f4a8418d2ee534c351b79fa592516a6&type=album",
        "https://sun9-40.userapi.com/impg/amIzhxaCX4THfK4CYp4oTosqymYXZdxLmtTOnQ/99OwQSeVwDs.jpg?size=865x1080&quality=96&sign=dd644c602effb4a32cb2083b3f016c7b&type=album",
      ],
      showModal: false,
      popImageUrl: "",
    };
  }
  render() {
    let imageUrlArray = this.state.imageUrlArray;
    const images = imageUrlArray.map((url, index) => {
      return <img className="singleImage" src={url} key={index} />;
    });
    return <div className="Images">{images}</div>;
  }
}
export default Images;
