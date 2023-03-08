type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? `Hello my name is ${props.name}. I am ${props.messageCount} years old`
          : `Welcome Guest`}
      </h1>
    </div>
  );
};

export default Greet;
