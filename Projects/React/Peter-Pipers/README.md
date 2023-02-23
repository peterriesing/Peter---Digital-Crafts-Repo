## Peter Pipers

#### A Project in React, Redux, & CSS

---

### Overview

This is my final, solo project as a student of Digital Crafts Web Development Bootcamp. The task was to use what we had learned about React and Redux over the course of just a few days to build a functional site utilizing "state." As a fan of pickleball I decided to do a not-so-serious web store for strange pickleball gear and clothing.

### State

Making this site gave me a much better understanding of state and Redux store. I had to use state to transfer selected item information from one element to another and show information for products in store.

```
const products = useSelector((store) => store.products);
```

```
const location = useLocation();
  const item = location.state;
```

I also used Redux to store functions in a slice for the relevant element.

```
const initialState = [];
export const Cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((state) => state.itemID !== action.payload.itemID);
    },
  },
});
```

### Given More Time

Given more time, I would add a lot of functionality to the site. The site design ended up being very simple. I would give the site more attractive design and use icons/elements within the objects. I would add better functionality to pages. The payment form within the cart element leads nowhere. I wanted it to have required inputs that would notify you using toastify and also it should redirect you to a confirmation/thanks for your purchase page. The removeCartItem function currently will delete all of the same item if there are more than one present. Also if more than one of the same item is in the cart, it shows multiple lines when it should only show one with a quantity element. I would also spend more time in CSS to get mobile responsiveness to a better state.
