
const IconButton = ({url, children }) => {
  
    return (
      <>
        <a href={url} target="_blank" rel="noreferrer">
        
            <button
              className={`hover:bg-purple flex items-center rounded-full transition ease-in-out duration-150`}>
                {children}
            </button>
  
        </a>
      </>
    );
  };
  
  export default IconButton;