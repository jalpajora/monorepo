export default function Link({ src = '#', children }) {
  return <a href={src}>{ children }</a>;
};