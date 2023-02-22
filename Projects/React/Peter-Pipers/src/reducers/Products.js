import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    itemID: 3829101,
    brand: "Sour Dill",
    product: "Spear Elite Paddle",
    type: "paddle",
    price: 219.99,
    img: "/paddles/paddles_spear.png",
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
    img: "/paddles/paddles_gherkin.png",
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
    img: "/paddles/paddles_halfsour.png",
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
    img: "/paddles/paddles_ortho.png",
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
    img: "/paddles/paddles_posturpedic.png",
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
    img: "/balls/balls_jaroballs.png",
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
    img: "/balls/balls_vlassic.png",
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
    img: "/paddles/paddles_raptor.png",
    description: "Advanced paddle with T-Rex graphic and excellent control",
    featured: true,
  },
  {
    itemID: 599420,
    brand: "DinoBall",
    product: "Dino Egg",
    type: "ball",
    price: 24.99,
    img: "/balls/balls_dinoegg.png",
    description: "Dinosaur-themed ball with durable construction",
    featured: false,
  },
  {
    itemID: 102100,
    brand: "DinoBall",
    product: "Tri-Horn",
    type: "paddle",
    price: 139.99,
    img: "/paddles/paddles_trihorn.png",
    description: "Paddle with three horns for maximum accuracy",
    featured: false,
  },
  {
    itemID: "DPB1004",
    brand: "DinoBall",
    product: "Spike",
    type: "ball",
    price: 19.99,
    img: "/balls/balls_spike.png",
    description: "Ball with spiked design for increased spin",
    featured: false,
  },
  {
    itemID: 218920,
    brand: "DinoBall",
    product: "Swift",
    type: "paddle",
    price: 99.99,
    img: "/paddles/paddles_swift.png",
    description: "Lightweight and quick paddle for beginners",
    featured: false,
  },
  {
    itemID: 474778,
    brand: "DinoBall",
    product: "Bigfoot",
    type: "ball",
    price: 14.99,
    img: "/balls/balls_bigfoot.png",
    description: "Oversized ball for maximum visibility and fun",
    featured: false,
  },
  {
    itemID: 123456,
    brand: "Sour Patch Kids",
    product: "Sour Patch Sweatsuit",
    type: "clothing",
    price: 69.99,
    img: "/clothing/sourpatch.png",
    description:
      "Stay comfy and stylish in this Sour Patch Sweatsuit featuring a fun candy-inspired design. Perfect for a post-match snack break!",
    featured: false,
  },
  {
    itemID: 234567,
    brand: "Zombie Apocalypse Gear",
    product: "Undead Polo Shirt",
    type: "clothing",
    price: 49.99,
    img: "/clothing/zombiepolo.png",
    description:
      "Stand out on the court with this zombie-inspired polo shirt, featuring a unique distressed design and breathable fabric that's perfect for the end of the world (or just a hot summer day).",
    featured: false,
  },
  {
    itemID: 345678,
    brand: "Wizarding World Athletics",
    product: "Hogwarts Track Jacket",
    type: "clothing",
    price: 79.99,
    img: "/clothing/hogwarts.png",
    description:
      "Channel your inner wizard with this Hogwarts Track Jacket, complete with embroidered house crests and a stylish silhouette that's perfect for both on and off the court.",
    featured: false,
  },
  {
    itemID: 456789,
    brand: "Galactic Sports Gear",
    product: "Intergalactic Shorts",
    type: "clothing",
    price: 39.99,
    img: "/clothing/spaceshorts.png",
    description:
      "Take your game to the stars with these Intergalactic Shorts, featuring a lightweight design and a bold space-inspired print that's sure to turn heads (and maybe even attract some alien fans).",
    featured: false,
  },
  {
    itemID: 567890,
    brand: "Time Traveler's Boutique",
    product: "Renaissance Tunic",
    type: "clothing",
    price: 89.99,
    img: "/clothing/tunic.png",
    description:
      "Step back in time (while still staying comfortable) with this Renaissance Tunic, featuring a vintage-inspired print and breezy fabric that's perfect for hot summer matches. Just don't forget to pack a sword!",
    featured: false,
  },
  {
    itemID: 678901,
    brand: "Mythical Athleticwear",
    product: "Mermaid Leggings",
    type: "clothing",
    price: 59.99,
    img: "/clothing/mermaid.png",
    description:
      "Make a splash on the court with these Mermaid Leggings, featuring a shimmering scale design and breathable fabric that's perfect for a long day of matches (or underwater adventures).",
    featured: false,
  },
  {
    itemID: 456789,
    brand: "Galactic Sports Gear",
    product: "Space Invader Paddle",
    type: "paddle",
    price: 149.99,
    img: "/paddles/spaceinvader.png",
    description:
      "Serve up some extraterrestrial action with this Space Invader Paddle, featuring a lightweight design and a cool alien-themed grip that's perfect for players who are out of this world.",
    featured: false,
  },
  {
    itemID: 567890,
    brand: "Time Traveler's Boutique",
    product: "Steampunk Scorekeeper",
    type: "gear",
    price: 29.99,
    img: "/gear/scorekeeper.png",
    description:
      "Travel back in time with this Steampunk Scorekeeper, featuring a retro-futuristic design and intricate clockwork gears that will keep your matches running like clockwork (even if time travel isn't involved).",
    featured: false,
  },
  {
    itemID: 678901,
    brand: "Mythical Athleticwear",
    product: "Dragonfly Visor",
    type: "clothing",
    price: 19.99,
    img: "/clothing/dragonfly.png",
    description:
      "Channel the spirit of the dragonfly with this unique visor, featuring delicate wing details and a lightweight design that's perfect for a day of matches under the sun.",
    featured: false,
  },
  {
    itemID: 789012,
    brand: "Pirate's Cove Sporting Goods",
    product: "Pirate Paddle Bag",
    type: "gear",
    price: 49.99,
    img: "/gear/piratebag.png",
    description:
      "Keep your paddles safe (and in pirate style) with this Pirate Paddle Bag, featuring a skull and crossbones design and plenty of room for all your pickleball gear.",
    featured: false,
  },
  {
    itemID: 890123,
    brand: "Enchanted Forest Athletics",
    product: "Fairy Dust Wristbands",
    type: "clothing",
    price: 9.99,
    img: "/clothing/fairybands.png",
    description:
      "Add a touch of magic to your game with these Fairy Dust Wristbands, featuring shimmering glitter and enchanting fairy-inspired designs that will help you conjure up some wins.",
    featured: false,
  },
  {
    itemID: 901234,
    brand: "Sasquatch Sporting Goods",
    product: "Bigfoot Sling Bag",
    type: "gear",
    price: 39.99,
    img: "/gear/sasquatchbag.png",
    description:
      "Carry your gear in style (and in the footsteps of legends) with this Bigfoot Sling Bag, featuring a hairy, ape-like design and plenty of room for all your pickleball essentials.",
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
