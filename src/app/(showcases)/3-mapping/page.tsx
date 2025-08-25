const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
  { title: 'Pineapple', id: 4 },
  { title: 'Orange', id: 5 },
];

function MappingExample() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mt-10">Mapping Example</h1>
            <ul className="my-5">
                {products.map((product) => (
                    <li key={product.id} className="text-lg">
                        {product.id}. {product.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MappingExample;