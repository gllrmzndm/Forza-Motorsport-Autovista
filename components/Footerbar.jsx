export default function Footerbar() {
  return (
    <div>
      <div className='flex h-48 min-h-0 flex-col items-center justify-center bg-white text-center text-black dark:bg-gray-950 dark:text-white'>
        <div className='items-center justify-center space-y-2 md:grid md:grid-cols-4 md:space-x-8'>
          <p>Contact</p>
          <p>Models</p>
          <p>Forza Vista</p>
          <p>Auto Vista</p>
        </div>
      </div>
    </div>
  );
}
