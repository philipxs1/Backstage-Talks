import issue5 from "./assets/issue_5.png";
import issue4 from "./assets/issue_4.png";
import issue3 from "./assets/issue_3.png";
import issue2 from "./assets/issue_2.png";
import issue1 from "./assets/issue_1.png";

export default {
  data: {
    magazines: [
      {
        id: "5",
        name: "Issue #5",
        url: issue5,
        background_color: "bg-[#00c1b5]",
        available: true,
      },
      {
        id: "4",
        name: "Issue #4",
        url: issue4,
        background_color: "bg-[#ff651a]",
        available: true,
      },
      {
        id: "3",
        name: "Issue #3",
        url: issue3,
        background_color: "bg-[#ffbe00]",
        available: true,
      },
      {
        id: "2",
        name: "Issue #2",
        url: issue2,
        background_color: "bg-[#1d3fbb]",
        available: true,
      },
      {
        id: "1",
        name: "Issue #1",
        url: issue1,
        background_color: "bg-[#e30512]",
        available: true,
      },
    ],
  },
};
