
const IconButton = ({url, children }) => {
  
    return (
      <>
        <a href={url} target="_blank" rel="noreferrer">
        
            <button
              className={`hover:bg-purple flex p-1 items-center rounded-full text-white transition ease-in-out duration-150`}>
                {children}
            </button>
  
        </a>
      </>
    );
  };
  
  export default IconButton;