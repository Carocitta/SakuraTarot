import IconButtonStyled from "../IconButton/IconButtonStyled";

function IconButton({ icon, actionOnclick }) {
  return (
    <IconButtonStyled className="icon-button" onClick={actionOnclick}>
      <img className="icon-image" src={icon} />
    </IconButtonStyled>
  );
}

export default IconButton;
