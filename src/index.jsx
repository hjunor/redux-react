import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createServer, Model } from "miragejs";
import { products } from "./data";
createServer({
  models: {
    products: Model,
    stock: Model,
  },

  seeds(server) {
    server.db.loadData({
      products,
    });
  },

  routes() {
    this.namespace = "api";
    this.timing = 750;

    this.get("/products", () => {
      return this.schema.all("products");
    });
    this.post("/products", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("products", data);
    });
    this.get("/stock", () => {
      return this.schema.all("stock");
    });
  },
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
