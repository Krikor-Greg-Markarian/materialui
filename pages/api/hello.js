// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const object = {
    boxData: [
      {
        avatarName: "A",
        title: "LB Single Serve Coffee",
        subHeader: "$32.99",
        description:
          "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
      },
      {
        avatarName: "B",
        title: "LB Single Serve Coffee",
        subHeader: "$31",
        description:
          "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467__340.jpg",
      },
      {
        avatarName: "C",
        title: "LB Single Serve Coffee",
        subHeader: "$23",
        description:
          "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg",
      },
      {
        avatarName: "D",
        title: "LB Single Serve Coffee",
        subHeader: "$22.99",
        description:
          "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg",
      },
      {
        avatarName: "E",
        title: "LB Single Serve Coffee",
        subHeader: "$17.24",
        description:
          "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590__480.jpg",
      },
      {
        avatarName: "F",
        title: "LB Single Serve Coffee",
        subHeader: "$40",
        description:
          "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__480.jpg",
      },
    ],
  };
  res.status(200).json(object);
}
