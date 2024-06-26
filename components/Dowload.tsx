export default function Download() {
  const handleDownload = (OSLink: any) => {
    window.location.href = OSLink;
  };
  return (
    <div className='flex flex-row items-center mt-10'>
      <button
        onClick={() =>
          handleDownload(
            'https://github.com/open-source-labs/SeeQR/releases/download/v14.0.0/SeeQR-14.0.0-arm64.dmg'
          )
        }
        className='flex items-center rounded-md bg-white shadow-md px-4 py-2 mr-4 bg-gradient-to-r to-green-300 from-green-200 hover:-translate-y-1 transition duration-200 ease-out hover:bg-gradient-to-b hover:from-green-300 hover:to-green-200 hover:shadow-2xl hover:shadow-green-500/50'
      >
        <div className='bg-apple bg-contain bg-no-repeat bg-center h-7 w-7 rounded-md mr-2'></div>
        <span>macOS</span>
      </button>
      <button
        onClick={() =>
          handleDownload(
            'https://github.com/open-source-labs/SeeQR/releases/download/v14.0.0/SeeQR-Setup-14.0.0.exe'
          )
        }
        className='flex items-center bg-white shadow-md rounded-md px-4 py-2 mr-4 bg-gradient-to-r to-green-300 from-green-200 hover:-translate-y-1 transition duration-200 ease-out hover:bg-gradient-to-b hover:from-green-300 hover:to-green-200 hover:shadow-2xl hover:shadow-green-500/50'
      >
        <div className='bg-windows bg-contain bg-no-repeat bg-center h-7 w-7 rounded-md mr-2'></div>
        <span>Windows</span>
      </button>
      <button
        onClick={() =>
          handleDownload(
            'https://github.com/open-source-labs/SeeQR/releases/download/v14.0.0/SeeQR-14.0.0.AppImage'
          )
        }
        className='flex items-center bg-white shadow-md rounded-md px-4 py-2 bg-gradient-to-r to-green-300 from-green-200 hover:-translate-y-1 transition duration-200 ease-out hover:bg-gradient-to-b hover:from-green-300 hover:to-green-200 hover:shadow-2xl hover:shadow-green-500/50'
      >
        <div className='bg-linux bg-contain bg-no-repeat bg-center h-7 w-7 rounded-md mr-2'></div>
        <span>Linux</span>
      </button>
    </div>
  );
}
