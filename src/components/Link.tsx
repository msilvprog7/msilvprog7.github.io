interface LinkProps {
  className?: string;
  href: string;
  text: string;
}

function Link(props: LinkProps) {
  return (
    <a
      className={props.className || "link"}
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.text}
    </a>
  );
}

export default Link;
