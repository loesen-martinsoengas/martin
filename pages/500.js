import Head from 'next/head';

export default function Custom500() {
  return (
    <div>
      <Head>
        <title>500 - Kochlowski</title>
      </Head>
      <header className='bg-white'></header>
      <main className='bg-white overflow-hidden'>
        <div className='bg-white mt-28'>
          <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-60'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              <span className='block'>Error 500</span>
              <span className='block text-gray-500'>Internal Server Error</span>
            </h2>
            <div className='mt-8 flex'>
              <div className='inline-flex'>
                <a
                  href='/'
                  className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200'
                >
                  Return to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
