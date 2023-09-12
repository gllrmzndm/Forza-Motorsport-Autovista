export default function Footerbar() {
  return (
    <div>
      <div className='min-h-48 flex h-32 flex-col items-center justify-center bg-gray-300 text-center text-black opacity-70 dark:bg-gray-950 dark:text-white'>
        <div className='font-bold md:grid md:grid-cols-4 md:gap-32'>
          <p>Contact</p>
          <p>Models</p>
          <p>Forza Vista</p>
          <p>Auto Vista</p>
        </div>
      </div>

      <div>
        <div className='grid w-screen grid-cols-3 justify-self-end text-center'>
          <p className='border-1 border-l-2 border-r-2 border-gray-600 border-opacity-50 bg-green-500 text-green-500 text-opacity-0'>
            ITA
          </p>
          <p className='bg-white text-white text-opacity-0'>ITA</p>
          <p className='border-1 border-l-2 border-r-2 border-gray-600 border-opacity-50 bg-red-500 text-red-500 text-opacity-0'>
            ITA
          </p>
        </div>
      </div>
    </div>
  );
}
