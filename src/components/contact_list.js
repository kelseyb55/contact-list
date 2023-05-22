import React, {Component} from 'react';

class ContactList extends Component {
  render () {
return (
<div className='container'>
  


<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Profile Picture</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
);
};
};


  export default ContactList;