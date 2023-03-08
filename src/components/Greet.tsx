type GreetProps = {
  name: string;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>Hello my name is {props.name}</h1>
    </div>
  );
};

export default Greet;
