const WarningMessage = (props) => {
    const showWarning = props.showWarning;
  
    return (
      <div>
        {showWarning && <p>This is a warning message!</p>}
      </div>
    );
  };
export default WarningMessage;  