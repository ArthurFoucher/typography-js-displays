import React from "react";
import Typography from "typography";

const Template = ({ theme }) => {
  theme.overrideThemeStyles = () => ({
    body: {
      margin: "0 auto"
    }
  });
  const typography = new Typography(theme);
  typography.injectStyles();

  return (
    <div>
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <p>
        This is a block of text. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <img
        src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
        alt="Group of pandas eating bamboo"
      />
      <hr />
      <pre>
        <code>
          {`class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloMessage name="Taylor" />, mountNode);
`}
        </code>
      </pre>
    </div>
  );
};

export default Template;
