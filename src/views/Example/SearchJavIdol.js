import { React, Component } from "react";

// CLASS COMPONENT
class SearchJavIdol extends Component {
  state = {
    showJobs: false,
  };

  handleShowHide = (status) => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnClickDelete = (job) => {
    // alert("click me");
    // console.log(job);
    this.props.deleteAJob(job);
  };

  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log(">>> check :", check);

    return (
      <>
        {showJobs === false ? (
          <button onClick={() => this.handleShowHide()}>Show</button>
        ) : (
          <>
            <ul className="job-list">
              Job List
              {arrJobs.map((job) => {
                return (
                  <div key={job.id}>
                    <li>
                      {job.title} - {job.salary}
                      <button
                        onClick={() => this.handleOnClickDelete(job)}
                        style={{ marginLeft: 20 }}
                      >
                        Delete
                      </button>
                    </li>
                  </div>
                );
              })}
            </ul>
            <button onClick={() => this.handleShowHide()}>hide</button>
          </>
        )}
      </>
    );
  }
}

// FUNCTION COMPONENT
// const SearchJavIdol = (props) => {
//   console.log(">>> Check child props", props);
//   let { arrJobs } = props;
//   return (
//     <div>
//       Job List
//       <ul>
//         {arrJobs.map((job) => {
//           if (job.salary >= 500) {
//             return (
//               <div key={job.id}>
//                 <li>
//                   Name Job: {job.title} - Salary : {job.salary} $
//                 </li>
//               </div>
//             );
//           }
//         })}
//       </ul>
//     </div>
//   );
// };

export default SearchJavIdol;
