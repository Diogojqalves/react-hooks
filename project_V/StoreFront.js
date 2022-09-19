export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [validation, setValidation] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) {
      setValidation("Please enter a name");
      return;
    }
    if (!description) {
      setValidation("Please enter a description");
      return;
    }
    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: name,
        description,
        description,
      },
    ]);
    setName("");
    setDescription("");
    setValidation("");
  }

  function handleDeleteClick(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <>
      <AddProductForm
        onSubmit={handleFormSubmit}
        onChangeName={(e) => setName(e.target.value)}
        onChangeDescription={(e) => setDescription(e.target.value)}
        name={name}
        description={description}
        validation={validation}
      />
      <div>{products.length === 0 && <p>Add your first product</p>}</div>
      <ProductList products={products} onDelete={handleDeleteClick} />
    </>
  );
}
