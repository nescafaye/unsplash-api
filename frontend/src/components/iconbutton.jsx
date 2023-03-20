
const IconButton = ({url, type, click, disabled, children }) => {
  
    return (
      <>
        <a href={url} target="_blank" rel="noreferrer">
        
            <button type={type} onClick={click} disabled={disabled}
              className={`flex w-full items-center transition ease-in-out duration-150`}>
                {children}
            </button>
  
        </a>
      </>
    );
  };
  
  export default IconButton;