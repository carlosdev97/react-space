import "./Button.css";

// const style = {
//   button: {
//     color: "blue",
//     backgroundColor: "gray",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontWeight: "bold",
//   },
// };

interface Props {
  label: string;
  parentMethod: () => void;
}

export const Button = ({ label, parentMethod }: Props) => {
  return (
    <>
      <button
        className="custom-button"
        // style={{ color: "blue", backgroundColor: "gray" }}
        // style={style.button}
        onClick={parentMethod}
      >
        {label}
      </button>
    </>
  );
};
