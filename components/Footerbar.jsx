export default function Footerbar() {
  return (
    <div>
      <div className='min-h-48 flex h-32 flex-col items-center justify-center bg-white text-center text-black dark:bg-gray-950 dark:text-white'>
        <div className='md:grid md:grid-cols-4 md:gap-32'>
          <p>Contact</p>
          <p>Models</p>
          <p>Forza Vista</p>
          <p>Auto Vista</p>
        </div>
      </div>
      <div>
        <div className='grid w-screen grid-cols-3 justify-self-end text-center'>
          <p className='border-1 border-red-500 bg-red-500 text-red-500 text-opacity-0'>
            ITA
          </p>
          <p className='border-1 border-white bg-white text-white text-opacity-0'>
            ITA
          </p>
          <p className='border-1 border-green-500 bg-green-500 text-green-500 text-opacity-0'>
            ITA
          </p>
        </div>
      </div>
    </div>
  );
}
