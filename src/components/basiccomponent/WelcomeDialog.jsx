// const Dialog = (props) => {
//     return (
//       <div className="dialog">
//         {props.children} {/* แสดงผล Component ย่อยผ่าน props.children */}
//       </div>
//     );
//   };
  
//   const WelcomeDialog = () => {
//     return (
//       <Dialog>
//         <h1>Welcome</h1>
//         <p>Thank you for visiting our site!</p>
//       </Dialog>
//     );
//   };


const FancyBorder = (props) => {
    return <div className={'FancyBorder FancyBorder-' + props.color}>{props.children}</div>;
  };
  
  const Dialog = (props) => {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">{props.title}</h1>
        <p className="Dialog-message">{props.message}</p>
      </FancyBorder>
    );
  };

  const WelcomeDialog = () => {
      return <Dialog title="Welcome" message="Thanks for visiting!" />;
  };
  
  
  export default WelcomeDialog;