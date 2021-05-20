const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const godzillaCloneSchema = new Schema(
  {
    name: { type: String, reuqired: true },
    link: { type: String, required: true },
    image: { type: String, reuqired: true },
    appearances: { type: Array, required: true },
    abilities: { type: Array, required: true },
    height: {
      type: Object,
      required: true,
      meters: { type: Number, required: true },
      feet: { type: Number, required: true }
    }
  },
  {
    timestamps: true,
    collection: "godzilla_clone"
  }
);

const godzillaClone = mongoose.model("GodzillaClone", godzillaCloneSchema);

module.exports = godzillaClone;
