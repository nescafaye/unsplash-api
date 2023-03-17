
const IconButton = ({url, type, click, children }) => {
  
    return (
      <>
        <a href={url} target="_blank" rel="noreferrer">
        
            <button type={type} onClick={click}
              className={`flex items-center rounded-full transition ease-in-out duration-150`}>
                {children}
            </button>
  
        </a>
      </>
    );
  };
  
  export default IconButton;