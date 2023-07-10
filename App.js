import React, { Component } from "react";

// // VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <p>React GI</p>
//         <h1>Very Easy</h1>
//         <p>Name: Aishah Isom</p>
//         <p>Number: 980-555-4545</p>
//         <p>Date of Birth: 02/26/2000</p>
//         <p>Job: Software Engineer</p>
//       </div>
//     );
//   }
// }

// // EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {},
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>React GI</p>
//         <h1>Very Easy</h1>
//         <p>Name: Aishah Isom</p>
//         <p>Number: 980-555-4545</p>
//         <p>Date of Birth: 02/26/2000</p>
//         <p>Job: Software Engineer</p>
//       </div>
//     );
//   }
// }

// // MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)

// class App extends Component {
//   constructor(props) {
//     //base for creating a new object
//     super(props); //properties passed will be Name number DOB and Job
//     this.state = {
//       person: {
//         Name: "Aishah Isom",
//         Number: 9805554545,
//         DOB: "02/26/2000",
//         Job: "Software Engineer",
//       },
//     };
//   }

//   render() {
//     //used to show information on the browser
//     const { person } = this.state;
//     return (
//       <div>
//         <BasicInfo person={person} />
//       </div>
//     );
//   }
// }

// const BasicInfo = ({ person }) => {
//   //A template to show inforamtion
//   const { Name, Number, DOB, Job } = person;
//   return (
//     <div>
//       <h1>Medium</h1>
//       <p>Name:{Name}</p>
//       <p>Number:{Number}</p>
//       <p>Date of Birth:{DOB}</p>
//       <p>Job:{Job}</p>
//     </div>
//   );
// };

// HARD: Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state. (Optional: add styling to space out each person’s info)

const BasicInfo = ({ person }) => {
  const { Name, Number, DOB, Job } = person;
  return (
    //returning the component information
    <div>
      {" "}
      {/* //the template being returned to the browser's page. */}
      <h1>Person </h1>
      <p>Name:{Name}</p>
      <p>Number:{Number}</p>
      <p>Date of Birth:{DOB}</p>
      <p>Job:{Job}</p>
    </div>
  );
};

class App extends Component {
  //inheratence of the traits and properties.
  constructor(props) {
    // used to define and set Component state and handle properties that are passed.
    super(props); //prop is being used as an argument (allows for inheriting functionalities fromthe Component class.)
    this.state = {
      // holds dynamic content and updates the information accordingly. State represents internal data for this component.
      people: [
        {
          Name: "Aishah Isom",
          Number: 9805554545,
          DOB: "02/26/2000",
          Job: "Software Engineer",
        },
        {
          Name: "Megan Stallion",
          Number: 9805555555,
          DOB: "04/26/1999",
          Job: "Physical Therapist",
        },
        {
          Name: "Uzi Vert",
          Number: 9805555555,
          DOB: "03/26/1998",
          Job: "Support Technician",
        },
        {
          Name: "Kanye West",
          Number: 9805555555,
          DOB: "01/26/1997",
          Job: "Vet",
        },
      ],
    };
  }

  render() {
    //to render the actual components
    const { people } = this.state;
    return (
      <div>
        {people.map((person) => (
          <BasicInfo person={person} />
        ))}
        {/* A function using a map method to iterate through the people array and
        display the different array items. */}
      </div>
    );
  }
}

export default App;
