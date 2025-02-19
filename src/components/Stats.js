export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className='stats'>
        <em>Start adding some items to your packing list!</em>
      </footer>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentPacked = Math.round((packedItems / numItems) * 100);
  return (
    <footer className='stats'>
      <em>
        {percentPacked === 100
          ? `You've got everything! Ready to go ✈️`
          : `You have ${numItems} items on your list and you already packed ${packedItems} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
