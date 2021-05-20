// import axios from "axios";

let godzillaCloneList = [
  {
    name: "placeholder",
    link: "/placeholder",
    appearances: ["placeholder"],
    abilities: ["placeholder"],
    height: {
      meters: "placeholder",
      feet: "placeholder"
    }
  }
];

// class godzillaCloneListClass {
//   constructor(props) {
//     this.state = { godzillaClones: [] };
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:5000/godzilla-clones/")
//       .then((response) => {
//         this.setState({ godzillaClones: response.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   DataPush() {
//     return this.state.godzillaClones.map((res, i) => {
//       const godzillaClone = {
//         name: res.name,
//         link: res.link,
//         image: res.image
//       };
//       console.log(godzillaClone);
//       return godzillaCloneList.push(godzillaClone);
//     });
//   }
// }

// const godzillaCloneDatabase = { godzillaCloneList, godzillaCloneListClass };

export default godzillaCloneList;
