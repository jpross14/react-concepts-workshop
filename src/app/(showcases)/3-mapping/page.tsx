const products = [
  { title: 'Cabbage', amount: 2, id: 1},
  { title: 'Garlic', amount: 4, id: 2 },
  { title: 'Apple', amount: 5, id: 3 },
  { title: 'Pineapple', amount: 1, id: 4 },
  { title: 'Orange', amount: 10, id: 5 },
];

function MappingExample() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mt-10">Mapping Example</h1>
            <ul className="my-5">
                <li>1. Cabbage - 2</li>
                <li>2. Garlic - 4</li>
                <li>3. Apple - 5</li>
                <li>4. Pineapple - 1</li>
                <li>5. Orange - 10</li>
                {/* {products.map((product) => (
                    <li key={product.id} className="text-lg">
                        {product.id}. {product.title} - {product.amount}
                    </li>
                ))} */}
            </ul>
        </div>
    );
}

export default MappingExample;

