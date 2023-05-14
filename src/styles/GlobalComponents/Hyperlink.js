

const Hyperlink = (props) => (
  <a
    href={props.href}
    style={{ color: "white" }}
    onmouseover="style.textDecoration='underline';"
    onmouseout="style.textDecoration='none';"
  >
    {props.text}
  </a>
);

export default Hyperlink;
