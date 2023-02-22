import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    itemID: 3829101,
    brand: "Sour Dill",
    product: "Spear Elite Paddle",
    type: "paddle",
    price: 219.99,
    img: "../../public/paddles/paddles_spear.png",
    description:
      "The Spear Elite Pickleball Paddle features a unique design that combines a sleek and stylish look with high-performance technology. The paddle's construction is made from premium materials, including a durable graphite face and a honeycomb core that provides a solid and consistent hit every time.",
    featured: false,
  },
  {
    itemID: 3829103,
    brand: "Sour Dill",
    product: "Gherkin Pro Paddle",
    type: "paddle",
    price: 229.99,
    img: "../../public/paddles/paddles_gherkin.png",
    description:
      "The Sour Dill Gherkin Pro Pickleball Paddle is designed for players who demand the best. This high-performance paddle is perfect for players of all skill levels, from beginners to professionals. It is the perfect choice for players who want to take their game to the next level and dominate their opponents on the court.",
    featured: false,
  },
  {
    itemID: 3829134,
    brand: "Sour Dill",
    product: "Half Sour Paddle",
    type: "paddle",
    price: 89.99,
    img: "../../public/paddles/paddles_halfsour.png",
    description:
      "Half Sour, Full Power. Introducing the Sour Dill Half Sour Pickleball Paddle, the perfect blend of style and performance for players who want to make a statement on the court. This premium paddle is designed with a unique look and feel that is sure to turn heads and enhance gameplay. The Half Sour Pickleball Paddle features a distinctive design that is inspired by the tangy flavor of half-sour pickles. The paddle is covered in a textured green surface that provides a comfortable grip and enhances ball control during gameplay.",
    featured: false,
  },
  {
    itemID: 767109,
    brand: "Old Folks",
    product: "Orthopedic Copper Magnet Paddle",
    type: "paddle",
    price: 99.99,
    img: "../../public/paddles/paddles_ortho.png",
    description:
      "The Orthopedic Copper Magnet Pickleball Paddle features a unique construction that incorporates copper and magnets into the paddle's core, resulting in unparalleled performance and comfort. The copper-infused core works to reduce joint inflammation, relieve pain, and enhance overall health, making it the ideal choice for players who want to protect their joints while playing.",
    featured: true,
  },
  {
    itemID: 768210,
    brand: "Old Folks",
    product: "Posturpedic Arthritic Paddle ",
    type: "paddle",
    price: 199.99,
    img: "../../public/paddles/paddles_posturpedic.png",
    description:
      "Introducing the Posturpedic Arthritic Pickleball Paddle, the perfect solution for players who suffer from arthritis or joint pain. This paddle is designed to provide maximum comfort and support to players, ensuring that they can play for longer without experiencing pain or discomfort.",
    featured: true,
  },
  {
    itemID: 592099,
    brand: "Vlassic",
    product: "Jar O' Balls",
    type: "ball",
    price: 20.99,
    img: "../../public/balls/balls_jaroballs.png",
    description:
      "Introducing the Vlassic Brand Jar of Pickleball Balls, the ultimate choice for players who demand quality, convenience, and value. This jar of pickleball balls contains a generous quantity of high-quality balls that are perfect for players of all levels.",
    featured: true,
  },
  {
    itemID: 592099,
    brand: "Vlassic",
    product: "Pickled Balls",
    type: "ball",
    price: 8.99,
    img: "",
    description:
      "The Vlassic Brand Pickleball Balls are crafted using high-quality plastic materials, ensuring that they are durable and long-lasting. They are designed to have a consistent bounce, making them ideal for both indoor and outdoor play. These balls are perfect for players of all levels, from beginners to professionals.",
    featured: false,
  },
  {
    itemID: 182810,
    brand: "DinoBall",
    product: "Raptor",
    type: "paddle",
    price: 159.99,
    img: "../../public/paddles/paddles_raptor.png",
    description: "Advanced paddle with T-Rex graphic and excellent control",
    featured: true,
  },
  {
    itemID: 599420,
    brand: "DinoBall",
    product: "Dino Egg",
    type: "ball",
    price: 24.99,
    img: "../../public/balls/balls_dinoegg.png",
    description: "Dinosaur-themed ball with durable construction",
    featured: false,
  },
  {
    itemID: 102100,
    brand: "DinoBall",
    product: "Tri-Horn",
    type: "paddle",
    price: 139.99,
    img: "../../public/paddles",
    description: "Paddle with three horns for maximum accuracy",
    featured: false,
  },
  {
    itemID: "DPB1004",
    brand: "DinoBall",
    product: "Spike",
    type: "ball",
    price: 19.99,
    img: "../../public/balls/",
    description: "Ball with spiked design for increased spin",
    featured: false,
  },
  {
    itemID: 218920,
    brand: "DinoBall",
    product: "Swift",
    type: "paddle",
    price: 99.99,
    img: "../../public/paddles/paddles_swift.png",
    description: "Lightweight and quick paddle for beginners",
    featured: false,
  },
  {
    itemID: 474778,
    brand: "DinoBall",
    product: "Bigfoot",
    type: "ball",
    price: 14.99,
    img: "../../public/balls/",
    description: "Oversized ball for maximum visibility and fun",
    featured: false,
  },
];

export const Products = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = Products.actions;

export default Products.reducer;
