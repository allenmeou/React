import React, { Component } from "react";

class SearchJavIdol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      link: "https://jav.photos/free/",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      this.setState({
        link: `https://jav.photos/free/${this.state.name}`,
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    console.log(">>> check point", this.props);
    // let name = this.props.name;
    // let age = this.props.age;
    let { arrJobs } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>
        <a className="a-search" href={this.state.link}>
          Tìm Kiếm
        </a>

        <>
          <div>
            Job List
            <ul>
              {arrJobs.map((job) => {
                console.log(job);
                return (
                  <div key={job.id}>
                    <li>
                      Name Job: {job.title} - Salary : {job.salary}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </>
      </form>
    );
  }
}

export default SearchJavIdol;
