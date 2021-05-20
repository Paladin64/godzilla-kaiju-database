import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class GodzillaCloneLink extends Component {
  constructor(props) {
    super(props);

    this.deleteGodzillaClone = this.deleteGodzillaClone.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/godzilla_clones/")
      .then((response) => {
        this.setState({ godzillaClones: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteGodzillaClone() {
    axios
      .delete(
        "http://localhost:5000/godzilla_clones/" + this.props.godzillaClone._id
      )
      .then((res) => {
        alert("Godzilla Clone successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <li className="kaiju-link">
        <Link
          className="kaiju-list-link"
          to={`/godzilla-clone-list/${this.props.godzillaClone._id}`}
        >
          {this.props.godzillaClone.name}
        </Link>{" "}
        <Link
          className="edit-link"
          to={"/godzilla-clone-list/edit/" + this.props.godzillaClone._id}
        >
          Edit
        </Link>{" "}
        <Button onClick={this.deleteGodzillaClone}>Delete</Button>
      </li>
    );
  }
}
