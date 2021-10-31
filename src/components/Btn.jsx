import '../styles/Btn.scss';


function Btn(props) {
  return (
    <button
      // onClick={() => {
      //   console.log('btn clicked', props.text);
      // }}
      className="Btn"
    >
{/* {props.img} */}
      {props.text}
    </button>
  );
}

export default Btn;
