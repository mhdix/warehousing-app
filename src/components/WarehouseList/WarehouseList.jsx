const WarehouseList = ({ products, categories }) => {
  console.log(products.length);
  return (
    <div className="z-50 relative max-w-[21rem] overflow-x-scroll lg:overflow-x-visible" >
      {products.length > 0 && (
        <table class="w-full lg:min-w-full divide-y divide-white overflow-hidden rounded-xl ">
          <thead class="bg-slate-800">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                heading
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                heading
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                heading
              </th>
            </tr>
          </thead>

          {products?.map((pro) => (
            <tbody class="bg-slate-700 ">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-200">{pro.title}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-200">{pro.quantity}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-200">{pro.createdAt}</td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </div>
  );
};

export default WarehouseList;
