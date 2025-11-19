import axios from "axios";
import { Link } from "react-router-dom";

function ProductListItem(props) {
  function deleteProduct() {
    axios.delete("https://worksheet-catalogue.mashupstack.com/products/" + props.product.id)
      .then(response => {
        alert("Product deleted");
        props.refresh();
      });
  }

  return (
    <div className="card mb-2">
      <div className="card-body">

        <strong>{props.product.name}</strong>
        <p>
          Price: ₹{props.product.price} <br />
          Category: {props.product.category} <br />
          Quantity: {props.product.quantity}
        </p>

        <button className="btn btn-danger float-right" onClick={deleteProduct}>Delete</button>
        <Link to={"/products/" + props.product.id } className="btn btn-warning float-right mr-2">
          Edit
        </Link>
        <Link to={"/products/"+props.product.id} className="btn btn-info float-right">View</Link>

      </div>
    </div>
  );
}

export default ProductListItem;
