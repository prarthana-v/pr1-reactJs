import { Component } from "react";

class Record extends Component {

  constructor(props) {
    super()

    this.state = {
      alluser: props.userlist
    }
  }
  render() {

    return (
      <div >

        <nav class="navbar navbar-light bg-secondary mb-4">
          <div class="container-fluid">
            <span class="navbar-brand mx-auto fs-3">USER DATA</span>
          </div>
        </nav>

        <table className="table table-primary table-striped">
          <thead>
            <tr>
              <th scope="col">GRID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Course</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.alluser.map((val) => {
                return (
                  <tr key={val.grid}>
                    <th>{val.grid}</th>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.password}</td>
                    <td>
                      {
                        val.course.join(" , ")
                      }
                    </td>
                    <td>{val.city}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default Record