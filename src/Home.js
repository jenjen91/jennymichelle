import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
      <nav className="links">
        <i className="material-icons">
          link
        </i>
        <a href="https://www.linkedin.com/in/jennymichelle" alt="LinkedIn">LinkedIn</a>
      </nav>
      <script
        type="IN/MemberProfile"
        data-id="http://www.linkedin.com/in/jennymichelle"
        data-format="inline"
        data-related="false">
      </script>
      </div>
    );
  }
}

export default Home;
