import { MdDelete, MdSentimentSatisfied } from "react-icons/md";

const WarehouseList = ({ products, categories, setProducts }) => {
  const findeCategory = (categoryId) => {
    console.log("categoryId", categoryId);
    const cat = categories?.find((c) => c.id === parseInt(categoryId)).title;
    console.log(cat);
    return cat;
  };
  const handleDelete = (productId) => {
    const filteredProducts = products.filter(
      (product) => product.id !== parseInt(productId)
    );
    setProducts(filteredProducts);
  };
  return (
    <div className="z-50 relative overflow-x-scroll lg:overflow-x-visible overflow-hidden w-full">
      {products.length > 0 && (
        <table className="w-full lg:min-w-full divide-y divide-white overflow-hidden rounded-xl ">
          <thead className="bg-slate-800">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                quantity
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                createdAt
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                actions
              </th>
            </tr>
          </thead>

          {products?.map((pro) => (
            <tbody className="bg-slate-700 ">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-200">
                  {pro.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-200">
                  {pro.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-200">
                  {new Date(pro.createdAt).toLocaleDateString("fa-IR")}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-200">
                  {findeCategory(pro.categoryId)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-200">
                  <button
                    id={pro.id}
                    onClick={() => handleDelete(pro.id)}
                    className="bg-red-900 p-2 rounded-full text-white/80 hover:scale-105 duration-300 cursor-pointer"
                  >
                    <MdDelete size={18} />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </div>
  );
};

export default WarehouseList;
