const mongoose = require("mongoose");
const db = require("../models");

// Seed with some books I like

// TODO Add images and links

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactbooksearch");

const seedBooks = [
    {
        title: "The Goblin Wood",
        author: "Hilari Bell",
        description: `Makenna is a young hedge witch, forced to flee her village the day her mother is murdered for practicing magic.
        In the wilds of the forest, she forms an unexpected alliance with the mysterious goblins, and together they resolve to fight back against the humans and the cruel Decree of Bright Magic.
        But as Makenna grows more successful and her goblin army becomes stronger, her existence threatens the ruling Hierarchy's plans for the country. She evades every trap they set, until a young knight named Tobin comes to the Goblin Wood hoping to regain his lost honour. 
        And each of them finds something else instead...`,
        image: "",
        link: ""
    },
    {
        title: "Sabriel",
        author: "Garth Nix",
        description: `Dark Secrets, Deep Love, and Dangerous Magic
        Sent to a boarding school in Ancelstierre as a young child, Sabriel has had little experience with the random power of Free Magic or the Dead who refuse to stay dead in the Old Kingdom. 
        But during her final semester, her father, the Abhorsen, goes missing, and Sabriel knows she must enter the Old Kingdom to find him.
        She soon finds companions in Mogget, a cat whose aloof manner barely conceals its malevolent spirit, and Touchstone, a young Charter Mage long imprisoned by magic, now free in body`,
        image: "",
        link: ""
    }
];

db.remove({})
  .then(() => db.collection.insertMany(seedBooks))
  .then(data => {
      console.log(data + "inserted");
      process.exit(0);
  })
  .catch(err => {
      console.error(err);
      process.exit(1);
  })